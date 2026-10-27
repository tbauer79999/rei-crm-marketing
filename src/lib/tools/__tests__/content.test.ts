import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { outboundUrl, resolveAttribution, tagOf } from '../attribution';
import { parseExplainerMd, parseRulebookMd } from '../build-content';
import { checkPrivacyPage, gateStatus, loadConsentText, loadExplainer, loadRulebook, parseExplainer, parseRulebook, toolsOpen } from '../content-gate';
import { RETENTION_DAYS } from '../config';
import { ERROR_COPY } from '../errors';
import { clientIp, hashIp, issueVisitorCookie, readVisitorCookie, signAdminCookie, verifyAdminCookie } from '../visitor';

const SRC_DIR = path.join(process.cwd(), 'src', 'app', 'tools', '10dlc');
const RULEBOOK_MD = path.join(SRC_DIR, '10dlc-rulebook-paste-2026-10-27.md');
const EXPLAINER_MD = path.join(SRC_DIR, '10dlc-explainer-final-2026-10-27.md');

function tmpContent(files: Record<string, unknown | null>): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tools-content-'));
  for (const [name, body] of Object.entries(files)) if (body !== null) fs.writeFileSync(path.join(dir, name), typeof body === 'string' ? body : JSON.stringify(body));
  return dir;
}
const GOOD_CONSENT = { text: 'Real consent wording.' };
const GOOD_PRIVACY = '<section id="10dlc-checker"><h2>10DLC Registration Checker</h2></section>';

// Runs fn with TOOLS_CONTENT_DIR pointing at `dir` and TOOLS_PRIVACY_FILE pointing at a temp privacy page (none when privacy is null).
function withDir<T>(dir: string, fn: () => T, privacy: string | null = GOOD_PRIVACY): T {
  const prevC = process.env.TOOLS_CONTENT_DIR;
  const prevP = process.env.TOOLS_PRIVACY_FILE;
  const pf = path.join(dir, 'privacy-test.tsx');
  if (privacy !== null) fs.writeFileSync(pf, privacy);
  process.env.TOOLS_CONTENT_DIR = dir;
  process.env.TOOLS_PRIVACY_FILE = pf;
  try {
    return fn();
  } finally {
    if (prevC === undefined) delete process.env.TOOLS_CONTENT_DIR; else process.env.TOOLS_CONTENT_DIR = prevC;
    if (prevP === undefined) delete process.env.TOOLS_PRIVACY_FILE; else process.env.TOOLS_PRIVACY_FILE = prevP;
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const goodRule = { rule_id: 'A-1', check: 'opt_in_wording', official_quote: 'q', source_url: 'https://example.com/s', verified_date: '2026-01-02' };
const goodExplainer = { title: 'T', metaDescription: 'D', h1: 'H', blocks: [{ k: 'p', inl: [{ t: 'text', v: 'hello' }] }], jsonLd: [] };
const goodRulebook = { version: 'v', rules: [goodRule] };
const allGood = { 'rulebook.json': goodRulebook, 'explainer.json': goodExplainer, 'consent.json': GOOD_CONSENT };

// ---- content gate ---------------------------------------------------------------------------------------------------------

test('the gate is closed when the rulebook or explainer is missing, empty, unreadable or still a placeholder', () => {
  const closed: Record<string, Record<string, unknown | null>> = {
    'rulebook missing': { 'explainer.json': goodExplainer },
    'explainer missing': { 'rulebook.json': { version: 'v', rules: [goodRule] } },
    'rulebook empty file': { 'rulebook.json': '', 'explainer.json': goodExplainer },
    'rulebook not json': { 'rulebook.json': '{oops', 'explainer.json': goodExplainer },
    'rulebook no rules': { 'rulebook.json': { version: 'v', rules: [] }, 'explainer.json': goodExplainer },
    'rulebook placeholder marker': { 'rulebook.json': { version: 'v', rules: [{ ...goodRule, official_quote: "[PASTE CMO'S SOURCE MAP HERE]" }] }, 'explainer.json': goodExplainer },
    'rulebook version placeholder': { 'rulebook.json': { version: 'PLACEHOLDER', rules: [goodRule] }, 'explainer.json': goodExplainer },
    'explainer placeholder marker': { 'rulebook.json': { version: 'v', rules: [goodRule] }, 'explainer.json': { ...goodExplainer, h1: "[PASTE CMO'S FINAL PAGE TEXT HERE]" } },
    'explainer no blocks': { 'rulebook.json': { version: 'v', rules: [goodRule] }, 'explainer.json': { ...goodExplainer, blocks: [] } },
    'one rule without a source': { 'rulebook.json': { version: 'v', rules: [goodRule, { ...goodRule, rule_id: 'A-2', source_url: '' }] }, 'explainer.json': goodExplainer },
    'one rule without a date': { 'rulebook.json': { version: 'v', rules: [goodRule, { ...goodRule, rule_id: 'A-2', verified_date: 'Oct 26, 2026' }] }, 'explainer.json': goodExplainer },
    'duplicate rule ids': { 'rulebook.json': { version: 'v', rules: [goodRule, goodRule] }, 'explainer.json': goodExplainer },
    'only other rules': { 'rulebook.json': { version: 'v', rules: [{ ...goodRule, check: 'other' }] }, 'explainer.json': goodExplainer },
  };
  for (const [name, files] of Object.entries(closed)) assert.equal(withDir(tmpContent(files), toolsOpen), false, name);
});

test('the gate stays closed for consent wording or a privacy page that is missing or still marked pending', () => {
  const closedWith: [string, Record<string, unknown | null>, string | null][] = [
    ['consent missing', { 'rulebook.json': goodRulebook, 'explainer.json': goodExplainer }, GOOD_PRIVACY],
    ['consent pending marker', { ...allGood, 'consent.json': { text: '[PENDING LEGAL REVIEW: GENERAL COUNSEL CONSENT WORDING]' } }, GOOD_PRIVACY],
    ['consent starts with [PASTE', { ...allGood, 'consent.json': { text: '[PASTE wording here]' } }, GOOD_PRIVACY],
    ['privacy page unreadable', allGood, null],
    ['privacy page has no checker section', allGood, '<h2>Privacy</h2>'],
    ['privacy section marked [PENDING GC REVIEW]', allGood, '<section id="10dlc-checker"><h2>10DLC Registration Checker [PENDING GC REVIEW]</h2></section>'],
    ['privacy page has a [PASTE marker', allGood, '<section id="10dlc-checker">[PASTE the final text]</section>'],
  ];
  for (const [name, files, privacy] of closedWith) assert.equal(withDir(tmpContent(files), toolsOpen, privacy), false, name);
});

test('the gate opens when rulebook, explainer, consent wording and the privacy section are all real, and never throws', () => {
  assert.equal(withDir(tmpContent(allGood), toolsOpen), true);
  assert.doesNotThrow(() => withDir(fs.mkdtempSync(path.join(os.tmpdir(), 'tools-empty-')), toolsOpen, null));
});

test('the consent wording alone is held back while it is pending legal review', () => {
  assert.equal(withDir(tmpContent({ 'consent.json': { text: '[PENDING LEGAL REVIEW: GENERAL COUNSEL CONSENT WORDING]' } }), () => loadConsentText().ok), false);
  assert.equal(withDir(tmpContent({}), () => loadConsentText().ok), false);
  assert.equal(withDir(tmpContent({ 'consent.json': { text: 'Real wording.' } }), () => loadConsentText().ok), true);
});

test('the shipped rulebook and explainer are real; the gate is open exactly when consent and the privacy section are signed off', () => {
  const g = gateStatus();
  assert.equal(g.rulebook, 'ok', g.rulebook);
  assert.equal(g.explainer, 'ok', g.explainer);
  const rb = loadRulebook();
  assert.ok(rb.ok && rb.data.rules.length === 163);
  assert.equal(toolsOpen(), g.consent === 'ok' && g.privacy === 'ok');
  assert.equal(g.open, toolsOpen());
});

test('the privacy page carries the checker section; while it is marked [PENDING GC REVIEW] the real gate is closed', () => {
  const page = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'privacy', 'PrivacyClient.tsx'), 'utf8');
  assert.ok(page.includes('id="10dlc-checker"'));
  if (page.includes('[PENDING GC REVIEW]')) {
    assert.equal(checkPrivacyPage().ok, false);
    assert.equal(toolsOpen(), false);
  }
});

test('the privacy section states the retention periods the code enforces, and covers what the brief lists', () => {
  const page = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'privacy', 'PrivacyClient.tsx'), 'utf8');
  const i = page.indexOf('id="10dlc-checker"');
  const section = page.slice(i, page.indexOf('{/* Your Rights */}', i));
  assert.deepEqual(
    [RETENTION_DAYS.scans, RETENTION_DAYS.attempts, RETENTION_DAYS.alerts, RETENTION_DAYS.sends, RETENTION_DAYS.queue, RETENTION_DAYS.costs],
    [365, 30, 90, 90, 90, 395],
  );
  for (const phrase of ['12 months', '30 days', '90 days', '13 months']) assert.ok(section.includes(phrase), phrase);
  for (const phrase of ['website address', 'email address', 'referrer', 'first page you landed on', 'Resend', 'tools_vid', 'surfox_first_src', 'never ask for a phone number']) assert.ok(section.includes(phrase), phrase);
  assert.ok(!section.includes(String.fromCharCode(0x2014)));
});

test('the Starter checkout sends the first-touch tag to the lead-app', () => {
  const src = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'subscribe', '[plan]', 'SubscribeClient.tsx'), 'utf8');
  assert.match(src, /readCookie\('surfox_first_src'\)/);
  assert.match(src, /firstTouchSrc: firstTouchSrc/);
});

// ---- the supplied source files convert exactly ----------------------------------------------------------------------------

test('every rule in the rulebook paste file is carried over with its quote, source and date unchanged', { skip: !fs.existsSync(RULEBOOK_MD) }, () => {
  const md = fs.readFileSync(RULEBOOK_MD, 'utf8');
  const parsed = parseRulebookMd(md);
  const shipped = loadRulebook();
  assert.ok(shipped.ok);
  if (!shipped.ok) return;
  assert.deepEqual(shipped.data.rules, parsed.rules); // the JSON in the repo is exactly what the converter produces
  assert.equal(parsed.rules.length, (md.match(/^- rule id: /gm) || []).length);
  for (const r of parsed.rules) {
    const block = md.split(/\n(?=- rule id: )/).find((b) => b.startsWith(`- rule id: ${r.rule_id}\n`))!;
    assert.ok(block.replace(/\\"/g, '"').includes(r.official_quote), `${r.rule_id} quote is verbatim from the file`);
    assert.ok(block.includes(`source URL: ${r.source_url}`), `${r.rule_id} source`);
    assert.ok(parseRulebook({ version: 'v', rules: [goodRule, { ...r, rule_id: `${r.rule_id}-copy` }] }).ok, `${r.rule_id} valid`);
  }
  // spot checks
  const r = parsed.rules.find((x) => x.rule_id === 'R1-Q2')!;
  assert.equal(r.official_quote, '30909: "Campaign rejected: Message Flow or Call to Action incomplete/unverified"');
  assert.equal(r.verified_date, '2026-10-26');
  assert.equal(r.source_tag, 'TW-REJ');
  assert.match(parsed.rules.find((x) => x.rule_id === 'R2-Q6')!.source_note ?? '', /not a carrier rule/);
  const byCheck = parsed.rules.reduce<Record<string, number>>((a, x) => ((a[x.check] = (a[x.check] || 0) + 1), a), {});
  assert.deepEqual(byCheck, { opt_in_wording: 43, sample_messages: 23, privacy_policy: 13, campaign_description: 7, other: 77 });
});

test('the explainer text is carried over word for word, anchors intact', { skip: !fs.existsSync(EXPLAINER_MD) }, () => {
  const md = fs.readFileSync(EXPLAINER_MD, 'utf8');
  const parsed = parseExplainerMd(md);
  assert.ok(parseExplainer(parsed).ok);
  const shipped = loadExplainer();
  assert.ok(shipped.ok);
  if (shipped.ok) assert.deepEqual(shipped.data, parsed);
  const flat = (inl: { v: string }[]) => inl.map((i) => i.v).join('');
  const text = parsed.blocks.flatMap((b) => (b.k === 'ul' ? b.items.map(flat) : [flat(b.inl)]));
  const mdBody = md.split('## Structured data')[0];
  // every body line of the source (minus markdown markers) appears in the output text
  const norm = (s: string) => s.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/^[-#]+ /, '').replace(/ \{#[a-z0-9-]+\}$/, '').trim();
  const out = new Set(text.concat(parsed.blocks.filter((b) => b.k === 'h2' || b.k === 'h3').map((b) => flat((b as { inl: { v: string }[] }).inl))));
  for (const line of mdBody.split('\n').slice(mdBody.split('\n').findIndex((l) => l.startsWith('# ')) + 1)) {
    if (!line.trim()) continue;
    assert.ok(out.has(norm(line)), `missing: ${line.slice(0, 80)}`);
  }
  // the anchors the brief names
  const ids = parsed.blocks.flatMap((b) => ('id' in b && b.id ? [b.id] : []));
  for (const id of ['opt-in-wording', 'privacy-policy', 'sample-messages', 'campaign-description', 'opt-out', 'consent-checkbox', 'faq', 'sources']) assert.ok(ids.includes(id), id);
  assert.equal(new Set(ids).size, ids.length, 'anchor ids are unique');
  // structured data present, with URLs on the host the site serves
  assert.equal(parsed.jsonLd.length, 3);
  const ld = JSON.stringify(parsed.jsonLd);
  assert.ok(ld.includes('"FAQPage"') && ld.includes('"Article"') && ld.includes('"BreadcrumbList"'));
  assert.ok(!/https:\/\/getsurfox\.com/.test(ld));
  assert.equal(parsed.title, '10DLC Registration and Compliance: Rules, Steps, Rejections');
});

// ---- attribution, visitor, errors -----------------------------------------------------------------------------------------

test('src, aff, referrer and landing page pass through; junk is dropped; the default applies only when no tag came in', () => {
  const a = resolveAttribution({ src: 'yt-1', aff: 'p9', referrer: 'https://google.com/search?q=secret+person', landing: '/blog/x?utm=1' }, {});
  assert.deepEqual(a, { src: 'yt-1', aff: 'p9', referrer: 'https://google.com/search', landing: '/blog/x' });
  const fromCookie = resolveAttribution({}, { firstSrc: 'cookie-src', aff: 'cookie-aff' });
  assert.equal(fromCookie.src, 'cookie-src');
  assert.equal(fromCookie.aff, 'cookie-aff');
  const junk = resolveAttribution({ src: '<script>', aff: 'a b', referrer: 'javascript:alert(1)', landing: '//evil.com' }, {});
  assert.deepEqual(junk, { src: null, aff: null, referrer: null, landing: null });
  assert.equal(tagOf({ src: null, aff: null }), '10dlc-checker');
  assert.equal(tagOf({ src: null, aff: 'p9' }), 'p9');
  assert.equal(tagOf({ src: 'yt-1', aff: 'p9' }), 'yt-1');
});

test('outbound links carry the tag and the checked site', () => {
  const demo = new URL(outboundUrl('/demo', { src: 'yt-1', aff: 'p9' }, 'acme.com'));
  assert.equal(demo.origin + demo.pathname, 'https://www.getsurfox.com/demo');
  assert.equal(demo.searchParams.get('src'), 'yt-1');
  assert.equal(demo.searchParams.get('aff'), 'p9');
  assert.equal(demo.searchParams.get('website'), 'acme.com');
  assert.equal(new URL(outboundUrl('/subscribe/starter', { src: null, aff: null })).searchParams.get('src'), '10dlc-checker');
  const affOnly = new URL(outboundUrl('/subscribe/starter', { src: null, aff: 'p9' }));
  assert.equal(affOnly.searchParams.get('src'), null);
  assert.equal(affOnly.searchParams.get('aff'), 'p9');
});

test('the visitor cookie is signed: edits and forgeries are rejected', () => {
  const { id, value } = issueVisitorCookie();
  assert.equal(readVisitorCookie(value), id);
  assert.equal(readVisitorCookie(`other-id.${value.split('.').pop()}`), null);
  assert.equal(readVisitorCookie(value.slice(0, -2) + 'xx'), null);
  assert.equal(readVisitorCookie('plain'), null);
  assert.equal(readVisitorCookie(undefined), null);
});

test('the IP comes from the Vercel header only in production, and is stored hashed', () => {
  const h = new Headers({ 'x-vercel-forwarded-for': '203.0.113.9', 'x-forwarded-for': '6.6.6.6' });
  assert.equal(clientIp(h), '203.0.113.9');
  const env = process.env as Record<string, string | undefined>;
  const prev = env.NODE_ENV;
  env.NODE_ENV = 'production';
  try {
    assert.equal(clientIp(new Headers({ 'x-forwarded-for': '6.6.6.6' })), null); // a spoofable header is ignored in production
  } finally {
    env.NODE_ENV = prev;
  }
  assert.notEqual(hashIp('203.0.113.9'), '203.0.113.9');
  assert.equal(hashIp('203.0.113.9'), hashIp('203.0.113.9'));
  assert.notEqual(hashIp('203.0.113.9'), hashIp('203.0.113.10'));
});

test('admin cookies expire and cannot be forged', () => {
  assert.equal(verifyAdminCookie(signAdminCookie()), true);
  assert.equal(verifyAdminCookie(`${Date.now() + 1e9}.AAAA`), false);
  assert.equal(verifyAdminCookie(`${Date.now() - 1000}.${signAdminCookie().split('.')[1]}`), false);
  assert.equal(verifyAdminCookie(undefined), false);
});

test('every error screen is friendly and specific; the five failure screens in the brief all offer the paste box', () => {
  for (const [code, c] of Object.entries(ERROR_COPY)) {
    assert.ok(c.title.length > 8 && c.body.length > 20, code);
    assert.ok(!/stack|exception|undefined|\[object|ECONN|ENOTFOUND|500|TypeError/i.test(`${c.title} ${c.body}`), `${code} leaks internals`);
  }
  for (const code of ['UNREACHABLE', 'TIMEOUT', 'SITE_BLOCKED', 'NO_TEXT', 'MODEL_FAILED'] as const) assert.equal(ERROR_COPY[code].paste, true, code);
  assert.equal(ERROR_COPY.SCANS_PAUSED.body, "Website scans are paused right now. Leave your email and we'll send yours as soon as they're back.");
});
