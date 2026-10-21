// Run: node scripts/scan-backoff.test.cjs
// The demo's chat site-read retries ONCE on HTTP 429 after a short pause (src/app/api/demo/scan/backoff.ts). Offline: a fake fetch, a fake sleep.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const file = path.join(__dirname, '../src/app/api/demo/scan/backoff.ts');
const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const mod = { exports: {} };
new Function('module', 'exports', 'require', js)(mod, mod.exports, require);
const { withOneRetryOn429, retryDelayMs } = mod.exports;

const res = (status, headers = {}) => ({ status, headers: { get: (k) => headers[k.toLowerCase()] ?? null }, body: { cancel: async () => { res.cancelled++; } } });
res.cancelled = 0;
const seqFetch = (...answers) => { const calls = []; const f = async () => { calls.push(1); return answers[Math.min(calls.length - 1, answers.length - 1)]; }; f.calls = calls; return f; };
const tests = [];
const test = (n, f) => tests.push([n, f]);

test('a 429 is retried exactly once after a short pause, and a good second answer is used', async () => {
  const slept = []; const f = seqFetch(res(429), res(200));
  const r = await withOneRetryOn429(f, async (ms) => slept.push(ms));
  assert.strictEqual(r.status, 200); assert.strictEqual(f.calls.length, 2); assert.deepStrictEqual(slept, [1500]);
});
test('a site that keeps answering 429 is asked only twice, never more, and the 429 is handed back', async () => {
  const slept = []; const f = seqFetch(res(429), res(429), res(200));
  const r = await withOneRetryOn429(f, async (ms) => slept.push(ms));
  assert.strictEqual(r.status, 429); assert.strictEqual(f.calls.length, 2); assert.strictEqual(slept.length, 1);
});
test('other answers are NOT retried: 200, 403, 404 and 500 are real answers', async () => {
  for (const code of [200, 301, 403, 404, 500, 503]) {
    const slept = []; const f = seqFetch(res(code), res(200));
    const r = await withOneRetryOn429(f, async (ms) => slept.push(ms));
    assert.strictEqual(r.status, code); assert.strictEqual(f.calls.length, 1, `HTTP ${code} must not be retried`); assert.strictEqual(slept.length, 0);
  }
});
test('the pause follows Retry-After but never exceeds 3 seconds, and falls back to 1.5 seconds for anything unreadable', () => {
  assert.strictEqual(retryDelayMs('2'), 2000); assert.strictEqual(retryDelayMs('0'), 0); assert.strictEqual(retryDelayMs('120'), 3000);
  for (const bad of [null, undefined, '', 'soon', 'Wed, 21 Oct 2026 07:28:00 GMT', '-5']) assert.strictEqual(retryDelayMs(bad), 1500, String(bad));
});
test('the first 429 response body is released before the retry', async () => {
  res.cancelled = 0; await withOneRetryOn429(seqFetch(res(429), res(200)), async () => {}); assert.strictEqual(res.cancelled, 1);
});
test('the route really uses the retry helper and words a site that is still busy kindly (not "could not preview")', () => {
  const route = fs.readFileSync(path.join(__dirname, '../src/app/api/demo/scan/route.ts'), 'utf8');
  assert.ok(/withOneRetryOn429\(\(\) =>\s*fetch\(/.test(route), 'the site fetch goes through the one-retry helper');
  assert.ok(/code === 'HTTP_429'\) return NextResponse\.json\(\{ ok: false, error: 'SITE_BUSY'/.test(route));
  const page = fs.readFileSync(path.join(__dirname, '../src/app/demo/DemoExperience.tsx'), 'utf8');
  assert.ok(/scanBusy \? 'Your site asked me to slow down/.test(page) && !/—/.test(page.match(/scanBusy \? '[^']*'/)[0]), 'the friendlier line exists and has no em dash');
});

// ── the REAL route, transpiled, with a fake network: a site that rate-limits us, and a site that serves a bot-challenge page ──
function loadRoute() {
  const src = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/app/api/demo/scan/route.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} };
  const shim = {
    'next/server': { NextResponse: { json: (body, init) => ({ body, status: (init && init.status) || 200 }) } },
    'node:dns/promises': { lookup: async () => [{ address: '93.184.216.34', family: 4 }] },
    'node:net': require('net'),
    '../_proxy': { configured: () => true, forward: async () => ({ ok: true, status: 200 }) },
    './backoff': mod.exports,
  };
  new Function('module', 'exports', 'require', src)(m, m.exports, (id) => { if (id in shim) return shim[id]; throw new Error('unexpected import ' + id); });
  return m.exports;
}
const PAGE = '<html><head><title>Welcome Home 904</title></head><body><h1>Homes in Jacksonville</h1><p>' + 'We help buyers and sellers across Jacksonville find the right home. '.repeat(5) + '</p></body></html>';
const html = (status, body = PAGE, headers = {}) => ({ status, ok: status >= 200 && status < 300, headers: { get: (k) => (k.toLowerCase() === 'content-type' ? 'text/html' : headers[k.toLowerCase()] ?? null) }, body: { cancel: async () => {}, getReader: () => { let sent = false; return { read: async () => (sent ? { done: true } : ((sent = true), { done: false, value: Buffer.from(body) })), cancel: async () => {} }; } } });
async function callRoute(siteAnswers, describe) {
  process.env.DEMO_SIGNUP_URL = 'http://lead-app.test'; process.env.DEMO_SIGNUP_SECRET = 's';
  const seen = { site: 0, describe: 0, slept: [] };
  const realFetch = global.fetch; const realTimeout = global.setTimeout;
  global.fetch = async (url) => {
    if (String(url).includes('/api/public/demo/describe')) { seen.describe++; return describe(); }
    seen.site++; return siteAnswers[Math.min(seen.site - 1, siteAnswers.length - 1)];
  };
  global.setTimeout = (fn, ms, ...r) => realTimeout(fn, ms > 100 ? 0 : ms, ...r); // the 1.5 s pause must not slow the test
  const quiet = console.warn; console.warn = () => {};
  try {
    const { POST } = loadRoute();
    const req = { headers: { get: (k) => (k === 'x-forwarded-for' ? '10.0.0.' + Math.floor(Math.random() * 250) : null) }, json: async () => ({ url: 'https://welcomehome904.com/', token: 'a'.repeat(48) }) };
    return { r: await POST(req), seen };
  } finally { global.fetch = realFetch; global.setTimeout = realTimeout; console.warn = quiet; }
}
const okDescribe = () => ({ status: 200, ok: true, json: async () => ({ company: 'Welcome Home 904', industry: 'Real estate', summary: 'Helps buyers and sellers in Jacksonville.' }) });

test('[route] welcomehome904 rate-limits us once (429 then the page): the chat read now WORKS instead of "could not preview"', async () => {
  const { r, seen } = await callRoute([html(429), html(200)], okDescribe);
  assert.strictEqual(r.body.ok, true, JSON.stringify(r.body)); assert.strictEqual(seen.site, 2, 'asked twice'); assert.strictEqual(seen.describe, 1);
});
test('[route] the site keeps answering 429: asked only twice, the visitor gets the kind "slow down" answer (SITE_BUSY), the summary AI is never called', async () => {
  const { r, seen } = await callRoute([html(429), html(429), html(200)], okDescribe);
  assert.deepStrictEqual(r.body, { ok: false, error: 'SITE_BUSY', pageRead: false }); assert.strictEqual(seen.site, 2); assert.strictEqual(seen.describe, 0);
});
test('[route] a 403 is NOT retried and keeps the plain "could not preview" answer (SCAN_FAILED), not the busy one', async () => {
  const { r, seen } = await callRoute([html(403), html(200)], okDescribe);
  assert.deepStrictEqual(r.body, { ok: false, error: 'SCAN_FAILED', pageRead: false }); assert.strictEqual(seen.site, 1);
});
test('[route] the lead-app says the fetched page was a bot-challenge page (UNREADABLE): the page is told the site was NOT read, so it never says "I read your site"', async () => {
  const { r } = await callRoute([html(200)], () => ({ status: 422, ok: false, json: async () => ({ error: 'UNREADABLE' }) }));
  assert.deepStrictEqual(r.body, { ok: false, error: 'SCAN_FAILED', pageRead: false });
  const { r: r2 } = await callRoute([html(200)], () => ({ status: 422, ok: false, json: async () => ({ error: 'NO_CONTENT' }) }));
  assert.deepStrictEqual(r2.body, { ok: false, error: 'NO_CONTENT', pageRead: true }, 'a real page the AI could not summarize still counts as read');
});

(async () => {
  let failed = 0;
  for (const [n, f] of tests) { try { await f(); console.log('PASS', n); } catch (e) { failed++; console.log('FAIL', n, '\n   ', e.message); } }
  console.log(`\n${tests.length - failed} passed, ${failed} failed`); process.exit(failed ? 1 : 0);
})();
