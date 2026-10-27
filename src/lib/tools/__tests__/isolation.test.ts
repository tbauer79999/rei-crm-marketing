import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const ROOT = process.cwd();
const TOOLS_ROOTS = ['src/app/tools', 'src/app/api/tools', 'src/lib/tools'];
// The only files outside the checker's own folders that this work may touch (brief, section 12).
const EXCEPTIONS: Record<string, number> = {
  'src/middleware.ts': 0, // allowed deleted lines
  'src/app/sitemap.ts': 2,
  'src/app/demo/DemoExperience.tsx': 3,
  'src/app/api/demo/start/route.ts': 2,
  // Added with the follow-up brief: the checkout carries the first-touch tag, and the privacy page gets the checker's section.
  'src/app/subscribe/[plan]/SubscribeClient.tsx': 0,
  'src/app/privacy/PrivacyClient.tsx': 1, // the Last Updated date
};
const git = (...args: string[]) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' });
const inGit = (() => { try { git('rev-parse', '--git-dir'); return true; } catch { return false; } })();

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    const rel = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(rel, out);
    else out.push(rel);
  }
  return out;
}
const toolsFiles = () => TOOLS_ROOTS.flatMap((r) => walk(r)).filter((f) => /\.(ts|tsx)$/.test(f));
const underTools = (p: string) => TOOLS_ROOTS.some((r) => p === r || p.startsWith(`${r}/`));

test('every changed or added file is inside the checker folders or is one of the allowed exceptions', { skip: !inGit }, () => {
  const lines = git('status', '--porcelain', '--untracked-files=all').split('\n').filter(Boolean);
  const files = lines.map((l) => l.slice(3).trim().replace(/^"|"$/g, '')).filter((f) => f !== 'surfox-dark-theme'); // the dark-theme submodule was already modified before this work
  const stray = files.filter((f) => !underTools(f) && !(f in EXCEPTIONS));
  assert.deepEqual(stray, [], `files outside the allowed paths: ${stray.join(', ')}`);
});

test('the allowed exceptions only add lines (no existing behaviour is removed or rewritten)', { skip: !inGit }, () => {
  const stat = git('diff', '--numstat', 'HEAD', '--', ...Object.keys(EXCEPTIONS)).split('\n').filter(Boolean);
  for (const row of stat) {
    const [added, removed, file] = row.split('\t');
    assert.ok(Number(removed) <= EXCEPTIONS[file], `${file}: ${removed} lines removed, ${EXCEPTIONS[file]} allowed (git diff --numstat: ${added} added)`);
  }
  // the existing referral and affiliate cookie handling is byte-for-byte untouched
  const mw = git('diff', 'HEAD', '--', 'src/middleware.ts');
  assert.ok(!/^-(?!--)/m.test(mw), 'middleware.ts has removed lines');
  assert.ok(!/^\+.*cookies\.set\(\s*['"]surfox_(aff|ref)['"]/m.test(mw), 'surfox_aff / surfox_ref behaviour changed');
});

test('no existing page, layout, nav, style or component file is modified', { skip: !inGit }, () => {
  const changed = git('diff', '--name-only', 'HEAD').split('\n').filter(Boolean).filter((f) => f !== 'surfox-dark-theme');
  const allowed = new Set(Object.keys(EXCEPTIONS));
  for (const f of changed) assert.ok(allowed.has(f) || underTools(f), f);
  for (const f of ['src/app/layout.tsx', 'src/app/page.tsx', 'src/app/globals.css', 'src/app/components/nav.tsx', 'src/app/components/footer.tsx', 'src/app/privacy/page.tsx', 'next.config.ts', 'package.json', 'vercel.json']) {
    assert.ok(!changed.includes(f), `${f} must not change`);
  }
});

test('the only existing file that imports checker code is the sitemap', () => {
  const offenders: string[] = [];
  for (const f of walk('src').filter((x) => /\.(ts|tsx)$/.test(x) && !underTools(x))) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    if (/from\s+['"][^'"]*(\/tools\/|lib\/tools|app\/tools)[^'"]*['"]/.test(src) && f !== 'src/app/sitemap.ts') offenders.push(f);
  }
  assert.deepEqual(offenders, []);
});

test('checker code imports nothing from the existing site (only node, next, react, supabase and itself)', () => {
  const bad: string[] = [];
  for (const f of toolsFiles()) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    for (const m of src.matchAll(/(?:from|import)\s+['"]([^'"]+)['"]/g)) {
      const spec = m[1];
      if (spec.startsWith('.')) {
        const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(f), spec));
        if (!underTools(resolved)) bad.push(`${f} -> ${spec}`);
      } else if (spec.startsWith('@/')) {
        bad.push(`${f} -> ${spec}`);
      } else if (!/^(node:|next(\/|$)|react(\/|$)|@supabase\/supabase-js$)/.test(spec) && !['fs', 'path', 'crypto'].includes(spec)) {
        bad.push(`${f} -> ${spec}`);
      }
    }
  }
  assert.deepEqual(bad, []);
});

test('checker code never mentions the production Supabase project or the SurFox AI app env vars; env vars it reads are TOOLS_ or platform ones', () => {
  const allowed = /^(TOOLS_[A-Z_]+|MONTHLY_COST_CAP_USD|NODE_ENV|VERCEL_ENV)$/;
  const bad: string[] = [];
  for (const f of toolsFiles().filter((x) => !x.includes('__tests__'))) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    for (const m of src.matchAll(/process\.env\.([A-Z0-9_]+)/g)) if (!allowed.test(m[1])) bad.push(`${f}: ${m[1]}`);
    assert.ok(!/NEXT_PUBLIC_SUPABASE|SUPABASE_URL(?!.*TOOLS)/.test(src.replace(/TOOLS_SUPABASE_URL/g, '')), `${f} references a non-TOOLS Supabase variable`);
  }
  assert.deepEqual(bad, []);
});

test('copy rules: no em dashes, never the word "trial", no "fix this with SurFox AI", brand is "SurFox AI"', () => {
  const problems: string[] = [];
  for (const f of toolsFiles().filter((x) => !x.includes('__tests__'))) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    if (src.includes('—')) problems.push(`${f}: em dash`);
    if (/\btrial\b/i.test(src)) problems.push(`${f}: "trial"`);
    if (/fix (this|it) with SurFox/i.test(src)) problems.push(`${f}: fix-it-with-SurFox pitch`);
    if (/SurFox(?! AI)(?!AI-10DLC-Checker)/.test(src)) problems.push(`${f}: bare "SurFox"`);
  }
  assert.deepEqual(problems, []);
});
