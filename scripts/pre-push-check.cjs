#!/usr/bin/env node
// PRE-PUSH CHECK for the marketing site: a bad commit must never reach Vercel (it builds from every push to main).
// Runs the type check and the real production build (`next build`) locally, BEFORE the push. By hand: `node scripts/pre-push-check.cjs`.
// Run by .githooks/pre-push (git config core.hooksPath .githooks). Bypass in a real emergency only: `git push --no-verify`.
const { spawnSync } = require('child_process');
const path = require('path');
const root = path.join(__dirname, '..');
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const t0 = Date.now(); const secs = () => `${Math.round((Date.now() - t0) / 1000)}s`;
const tail = (t, n = 40) => String(t || '').split(/\r?\n/).filter(Boolean).slice(-n).join('\n');
function step(label, args, timeoutMs) {
  console.log(`▶ ${label}...`);
  const r = spawnSync(npx, args, { cwd: root, encoding: 'utf8', shell: process.platform === 'win32', timeout: timeoutMs, maxBuffer: 50 * 1024 * 1024, env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' } });
  const out = `${r.stdout || ''}\n${r.stderr || ''}`;
  if (r.status !== 0) { console.error(`\n❌ PRE-PUSH CHECK FAILED: ${label}\n${tail(out)}\n\nThe push was stopped. Fix it (or \`git push --no-verify\` only in a real emergency).`); process.exit(1); }
  console.log(`✅ ${label} passed (${secs()})`);
}
step('type check (tsc --noEmit)', ['--no-install', 'tsc', '--noEmit', '-p', '.'], 10 * 60 * 1000);
step('full production build (next build)', ['--no-install', 'next', 'build'], 20 * 60 * 1000);
console.log(`\n✅ pre-push check passed in ${secs()}`);
