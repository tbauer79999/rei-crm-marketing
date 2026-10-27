import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { checkAttempt, recordAttempt } from '../limits';
import { FetchError } from '../net-guard';
import { NoTextError } from '../scan';
import { drainQueue, handleCheck, handleJoinQueue, handleUnlock, newShareId, retryReports, toView } from '../service';
import { ATTR, client, makeDeps, mailer, SCAN_OK, WHO } from './helpers';

// Unlock and queue need consent wording from counsel. The tests point the loader at a temp dir with wording the app itself never ships.
function withConsent<T>(fn: () => Promise<T>): Promise<T> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tools-consent-'));
  fs.writeFileSync(path.join(dir, 'consent.json'), JSON.stringify({ text: 'TEST consent wording for unit tests only.' }));
  const prev = process.env.TOOLS_CONTENT_DIR;
  process.env.TOOLS_CONTENT_DIR = dir;
  return fn().finally(() => { process.env.TOOLS_CONTENT_DIR = prev; if (prev === undefined) delete process.env.TOOLS_CONTENT_DIR; fs.rmSync(dir, { recursive: true, force: true }); });
}

const site = (url = 'example.com', who = WHO, attribution = ATTR) => ({ mode: 'site' as const, url, attribution, who });
const paste = (p: Record<string, string>, who = WHO, attribution = ATTR) => ({ mode: 'paste' as const, paste: p, attribution, who });

// ---- rate limit -----------------------------------------------------------------------------------------------------------

test('3 website scans per visitor per day, then the 4th is refused', async () => {
  const { deps } = makeDeps();
  for (let i = 0; i < 3; i++) assert.equal((await handleCheck(deps, site())).ok, true, `scan ${i + 1}`);
  const fourth = await handleCheck(deps, site());
  assert.deepEqual(fourth, { ok: false, code: 'RATE_LIMITED' });
});

test('clearing the cookie does not help: the IP still counts', async () => {
  const { deps } = makeDeps();
  for (let i = 0; i < 3; i++) await handleCheck(deps, site('example.com', { ipHash: 'ip-A', visitorId: `fresh-${i}` }));
  const r = await handleCheck(deps, site('example.com', { ipHash: 'ip-A', visitorId: 'brand-new-cookie' }));
  assert.equal(r.ok, false);
});

test('switching network does not help: the signed cookie still counts', async () => {
  const { deps } = makeDeps();
  for (let i = 0; i < 3; i++) await handleCheck(deps, site('example.com', { ipHash: `ip-${i}`, visitorId: 'same-cookie' }));
  const r = await handleCheck(deps, site('example.com', { ipHash: 'ip-new', visitorId: 'same-cookie' }));
  assert.equal(r.ok, false);
});

test('a different visitor on a different network is not affected', async () => {
  const { deps } = makeDeps();
  for (let i = 0; i < 3; i++) await handleCheck(deps, site());
  assert.equal((await handleCheck(deps, site('example.com', { ipHash: 'ip-2', visitorId: 'v-2' }))).ok, true);
});

test('the limit is a rolling 24 hours: it frees up a day later', async () => {
  const { deps, clock } = makeDeps();
  for (let i = 0; i < 3; i++) await handleCheck(deps, site());
  assert.equal((await handleCheck(deps, site())).ok, false);
  clock.now = new Date(clock.now.getTime() + 24 * 3600_000 + 1000);
  assert.equal((await handleCheck(deps, site())).ok, true);
});

test('paste checks have their own, separate limit', async () => {
  const { deps, store } = makeDeps();
  for (let i = 0; i < 3; i++) await handleCheck(deps, site());
  assert.equal((await handleCheck(deps, paste({ opt_in_wording: 'I agree to receive texts.' }))).ok, true);
  for (let i = 0; i < 25; i++) await recordAttempt(store, { ipHash: 'ip-spam', visitorId: 'spam' }, 'paste', new Date('2026-03-10T12:00:00Z'));
  const gate = await checkAttempt(store, { ipHash: 'ip-spam', visitorId: 'spam' }, 'paste', new Date('2026-03-10T12:00:00Z'));
  assert.equal(gate.allowed, false);
});

// ---- cost cap -------------------------------------------------------------------------------------------------------------

test('every check logs tokens and dollar cost', async () => {
  const { deps, store } = makeDeps({ client: client({ inputTokens: 1234, outputTokens: 321 }) });
  const r = await handleCheck(deps, site());
  assert.equal(r.ok, true);
  assert.ok(store.costs.length >= 1);
  for (const c of store.costs) {
    assert.equal(c.input_tokens, 1234);
    assert.equal(c.output_tokens, 321);
    assert.ok(c.cost_usd > 0);
    assert.equal(c.model, 'claude-haiku-4-5-20251001');
  }
  assert.ok(Math.abs(store.scans[0].cost_usd - store.costs.reduce((a, c) => a + c.cost_usd, 0)) < 1e-9);
});

test('at the monthly cap website scans pause and paste checks keep working', async () => {
  const { deps, store, settle } = makeDeps();
  await store.insertCosts([{ id: 'c1', scan_id: null, queue_id: null, check_id: 'x', model: 'm', input_tokens: 1, output_tokens: 1, cost_usd: 30, created_at: '2026-03-02T00:00:00Z' }]);
  const paused = await handleCheck(deps, site());
  assert.deepEqual(paused, { ok: false, code: 'SCANS_PAUSED', queue_offer: true });
  assert.equal((await handleCheck(deps, paste({ opt_in_wording: 'I agree to receive texts.' }))).ok, true);
  await settle();
  assert.equal(store.events.filter((e) => e.type === 'cap_tripped').length, 1);
  assert.ok(store.alerts.some((a) => a.event_type === 'cap_tripped'));
  await handleCheck(deps, site('example.com', { ipHash: 'x', visitorId: 'y' }));
  await settle();
  assert.equal(store.events.filter((e) => e.type === 'cap_tripped').length, 1); // one trip event per month, not per refused scan
});

test('spend from a previous month does not count against this month', async () => {
  const { deps, store } = makeDeps();
  await store.insertCosts([{ id: 'c1', scan_id: null, queue_id: null, check_id: 'x', model: 'm', input_tokens: 1, output_tokens: 1, cost_usd: 99, created_at: '2026-02-28T23:59:00Z' }]);
  assert.equal((await handleCheck(deps, site())).ok, true);
});

test('the cap comes from MONTHLY_COST_CAP_USD', async () => {
  process.env.MONTHLY_COST_CAP_USD = '0.001';
  try {
    const { deps } = makeDeps({ client: client({ inputTokens: 100_000, outputTokens: 10_000 }) });
    assert.equal((await handleCheck(deps, site())).ok, true); // the scan that crosses the cap still finishes
    const r = await handleCheck(deps, site('example.com', { ipHash: 'b', visitorId: 'b' }));
    assert.equal(r.ok, false);
    assert.equal((r as { code: string }).code, 'SCANS_PAUSED');
  } finally {
    delete process.env.MONTHLY_COST_CAP_USD;
  }
});

// ---- queue ----------------------------------------------------------------------------------------------------------------

test('queued scans run oldest first, share the same cap, and the rest wait for the next reset', () =>
  withConsent(async () => {
    process.env.MONTHLY_COST_CAP_USD = '1';
    try {
      const m = mailer();
      // each scan costs about $0.30: 4 model calls are skipped (only 3 inputs) so make each call expensive
      const { deps, store, clock, settle } = makeDeps({ mailer: m, client: client({ inputTokens: 40_000, outputTokens: 10_000 }) });
      for (let i = 0; i < 5; i++) {
        const j = await handleJoinQueue(deps, { url: `site${i}.com`, email: `v${i}@example.com`, consent: true, who: { ipHash: `ip${i}`, visitorId: `v${i}` }, attribution: ATTR });
        assert.deepEqual(j, { ok: true });
        clock.now = new Date(clock.now.getTime() + 1000);
      }
      const r = await drainQueue(deps);
      await settle();
      assert.equal(r.stoppedAtCap, true);
      const done = store.queue.filter((q) => q.status === 'done');
      const waiting = store.queue.filter((q) => q.status === 'queued');
      assert.ok(done.length >= 1 && waiting.length >= 1, `done ${done.length}, waiting ${waiting.length}`);
      // oldest first: everything done is older than everything still waiting
      assert.ok(done.every((d) => waiting.every((w) => d.created_at < w.created_at)));
      assert.equal(r.remaining, waiting.length);
      // spend stayed on the same ledger as live scans
      assert.ok(store.costs.every((c) => c.queue_id !== null));
      // the visitor gets their report by email on the report account
      assert.ok(m.sent.some((s) => s.account === 'report' && s.msg.to === 'v0@example.com'));

      // next month: the cap resets and the rest are worked off, still oldest first
      clock.now = new Date('2026-04-01T08:00:00Z');
      const r2 = await drainQueue(deps);
      assert.ok(r2.processed >= 1);
    } finally {
      delete process.env.MONTHLY_COST_CAP_USD;
    }
  }));

test('joining the queue needs a valid email and ticked consent, counts toward the daily limit, and never takes a phone number', () =>
  withConsent(async () => {
    const { deps } = makeDeps();
    const base = { url: 'example.com', who: WHO, attribution: ATTR };
    assert.deepEqual(await handleJoinQueue(deps, { ...base, email: 'nope', consent: true }), { ok: false, code: 'INVALID_EMAIL' });
    assert.deepEqual(await handleJoinQueue(deps, { ...base, email: '555-123-4567', consent: true }), { ok: false, code: 'INVALID_EMAIL' });
    assert.deepEqual(await handleJoinQueue(deps, { ...base, email: 'a@example.com', consent: false }), { ok: false, code: 'CONSENT_REQUIRED' });
    assert.deepEqual(await handleJoinQueue(deps, { ...base, email: 'a@example.com', consent: undefined }), { ok: false, code: 'CONSENT_REQUIRED' });
    assert.deepEqual(await handleJoinQueue(deps, { ...base, url: 'http://169.254.169.254/', email: 'a@example.com', consent: true }), { ok: false, code: 'BLOCKED_ADDRESS' });
    for (let i = 0; i < 3; i++) assert.equal((await handleJoinQueue(deps, { ...base, email: 'a@example.com', consent: true })).ok, true);
    assert.deepEqual(await handleJoinQueue(deps, { ...base, email: 'a@example.com', consent: true }), { ok: false, code: 'RATE_LIMITED' });
  }));

test('while consent wording is pending legal review the unlock and the queue are not offered', async () => {
  const { deps } = makeDeps(); // the shipped consent.json still carries the pending marker
  assert.deepEqual(await handleJoinQueue(deps, { url: 'example.com', email: 'a@example.com', consent: true, who: WHO, attribution: ATTR }), { ok: false, code: 'UNLOCK_UNAVAILABLE' });
  const r = await handleCheck(deps, site());
  assert.equal(r.ok && r.scan.unlock_available, false);
});

// ---- unlock, share links --------------------------------------------------------------------------------------------------

test('share ids are long random strings and the share view carries the summary only', async () => {
  const a = newShareId();
  const b = newShareId();
  assert.notEqual(a, b);
  assert.match(a, /^[A-Za-z0-9_-]{24}$/);
  const { deps, store } = makeDeps({ client: client({ reply: (req) => JSON.stringify({ findings: [...req.user.matchAll(/rule_id: (\S+)/g)].map((m) => ({ rule_id: m[1], status: 'fail', evidence: 'I agree to receive texts' })) }) }) });
  await handleCheck(deps, site());
  const view = JSON.stringify(toView(store.scans[0]));
  assert.ok(!view.includes('I agree to receive texts'), 'no excerpt from the visitor\'s own text');
  assert.ok(!view.includes(store.scans[0].visitor_id!));
  assert.ok(!view.includes(store.scans[0].ip_hash!));
  assert.ok(!view.includes('@'));
});

test('only the visitor who ran the check can unlock it; consent and a real email are required', () =>
  withConsent(async () => {
    const m = mailer();
    const { deps, store, settle } = makeDeps({ mailer: m });
    await handleCheck(deps, site());
    const shareId = store.scans[0].share_id;
    const req = { shareId, email: 'Pat@Example.com', consent: true, visitorId: WHO.visitorId, attribution: { ...ATTR, src: 'yt-1' } };
    assert.deepEqual(await handleUnlock(deps, { ...req, consent: false }), { ok: false, code: 'CONSENT_REQUIRED' });
    assert.deepEqual(await handleUnlock(deps, { ...req, consent: 'true' }), { ok: false, code: 'CONSENT_REQUIRED' });
    assert.deepEqual(await handleUnlock(deps, { ...req, email: 'bad' }), { ok: false, code: 'INVALID_EMAIL' });
    assert.deepEqual(await handleUnlock(deps, { ...req, visitorId: 'someone-with-the-link' }), { ok: false, code: 'NOT_FOUND' });
    const ok = await handleUnlock(deps, req);
    assert.equal(ok.ok, true);
    await settle();
    const rec = store.scans[0];
    assert.equal(rec.unlocked, true);
    assert.equal(rec.email, 'pat@example.com');
    assert.equal(rec.consent_text, 'TEST consent wording for unit tests only.');
    assert.equal(rec.report_status, 'sent');
    const report = m.sent.find((s) => s.account === 'report')!;
    assert.equal(report.msg.to, 'pat@example.com');
    const lines = report.msg.text.trim().split('\n');
    assert.equal(lines[lines.length - 1], 'Once your texts are approved, SurFox AI turns cold leads into hot ones. Reply if you want to see how.');
    assert.ok(!/trial/i.test(report.msg.text));
    assert.ok(store.events.some((e) => e.type === 'email_unlocked' && e.src === 'yt-1'));
  }));

test('a failed report email is retried later and never lost', () =>
  withConsent(async () => {
    const m = mailer({ failFirst: 1, failOn: 'report' });
    const { deps, store, settle } = makeDeps({ mailer: m });
    await handleCheck(deps, site());
    await handleUnlock(deps, { shareId: store.scans[0].share_id, email: 'a@example.com', consent: true, visitorId: WHO.visitorId, attribution: ATTR });
    await settle();
    assert.equal(store.scans[0].report_status, 'failed');
    assert.equal(await retryReports(deps), 1);
    assert.equal(store.scans[0].report_status, 'sent');
  }));

// ---- attribution passthrough ----------------------------------------------------------------------------------------------

test('src, aff, referrer and landing page are stored on the scan and on its events', async () => {
  const a = { src: 'yt-77', aff: 'partnerA', referrer: 'https://news.example.org/post', landing: '/blog/some-post' };
  const { deps, store } = makeDeps();
  await handleCheck(deps, site('example.com', WHO, a));
  assert.deepEqual([store.scans[0].src, store.scans[0].aff, store.scans[0].referrer, store.scans[0].landing], ['yt-77', 'partnerA', 'https://news.example.org/post', '/blog/some-post']);
  assert.ok(store.events.some((e) => e.type === 'check_started' && e.src === 'yt-77' && e.aff === 'partnerA' && e.referrer === a.referrer && e.landing === a.landing));
});

// ---- every error screen ---------------------------------------------------------------------------------------------------

test('every fetch failure maps to its own friendly code, with the paste fallback available', async () => {
  const cases: [Error, string][] = [
    [new FetchError('UNREACHABLE'), 'UNREACHABLE'],
    [new FetchError('TIMEOUT'), 'TIMEOUT'],
    [new FetchError('HTTP_ERROR', '403'), 'SITE_BLOCKED'],
    [new FetchError('HTTP_ERROR', '429'), 'SITE_BLOCKED'],
    [new FetchError('HTTP_ERROR', '500'), 'UNREACHABLE'],
    [new FetchError('BLOCKED', 'address'), 'BLOCKED_ADDRESS'],
    [new FetchError('NOT_HTML'), 'NO_TEXT'],
    [new NoTextError(), 'NO_TEXT'],
    [new FetchError('TOO_MANY_REDIRECTS'), 'UNREACHABLE'],
    [new Error('something unexpected'), 'UNREACHABLE'],
  ];
  const { ERROR_COPY } = await import('../errors');
  for (const [err, code] of cases) {
    const { deps } = makeDeps({ scan: async () => { throw err; } });
    const r = await handleCheck(deps, site());
    assert.equal(r.ok, false);
    assert.equal((r as { code: string }).code, code, err.message);
    assert.equal(ERROR_COPY[code as keyof typeof ERROR_COPY].paste, true, code);
  }
});

test('all model calls failing is its own screen; a bad address and an empty paste are caught early', async () => {
  const { deps, store } = makeDeps({ client: client({ fail: true }) });
  assert.deepEqual(await handleCheck(deps, site()), { ok: false, code: 'MODEL_FAILED' });
  assert.equal(store.scans.length, 0);
  assert.deepEqual(await handleCheck(deps, site('')), { ok: false, code: 'BAD_URL' });
  assert.deepEqual(await handleCheck(deps, site('http://localhost:3000/')), { ok: false, code: 'BLOCKED_ADDRESS' });
  assert.deepEqual(await handleCheck(deps, paste({})), { ok: false, code: 'EMPTY_PASTE' });
  assert.deepEqual(await handleCheck(deps, paste({ opt_in_wording: '   ' })), { ok: false, code: 'EMPTY_PASTE' });
});

test('a mistyped or private address does not use up a daily scan', async () => {
  const { deps } = makeDeps();
  for (let i = 0; i < 5; i++) await handleCheck(deps, site('http://10.0.0.1/'));
  for (let i = 0; i < 3; i++) assert.equal((await handleCheck(deps, site())).ok, true);
});

test('scan output reaches the checks: the page text, not the visitor, supplies inputs for a website scan', async () => {
  const c = client();
  const { deps } = makeDeps({ client: c, scan: async () => SCAN_OK });
  await handleCheck(deps, site());
  assert.ok(c.calls.some((x) => x.user.includes('I agree to receive texts. Reply STOP to end.')));
  assert.ok(c.calls.every((x) => x.system.includes('never write, suggest, rewrite')));
});
