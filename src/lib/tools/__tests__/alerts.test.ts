import assert from 'node:assert/strict';
import test from 'node:test';
import { buildAlert, enqueueAlert, flushAlerts } from '../alerts';
import { ATTR } from './helpers';
import { MemoryStore } from '../store';
import { mailer } from './helpers';
import type { CheckResult } from '../checks';

const checks = (): CheckResult[] =>
  (['campaign_description', 'sample_messages', 'opt_in_wording', 'privacy_policy'] as const).map((check, i) => ({
    check, label: check, status: (['pass', 'warn', 'fail', 'gray'] as const)[i], reason: null, message: null, findings: [],
  }));

const day1 = new Date('2026-03-10T12:00:00Z');
const day2 = new Date('2026-03-11T09:00:00Z');
const TO = 'tom@example.com';

test('the alert has the event, the site, the four statuses, tag, referrer, landing page and unlock status', () => {
  const a = buildAlert({ kind: 'site_scan', site: 'acme.com', checks: checks(), attribution: { src: 'yt-9', aff: null, referrer: 'https://x.org/p', landing: '/blog/a' }, unlocked: false });
  assert.equal(a.subject, '10DLC checker | Website scan finished | acme.com | yt-9');
  for (const line of ['Campaign description: pass', 'Sample messages: warn', 'Opt-in wording: fail', 'Privacy policy: gray', 'Referrer: https://x.org/p', 'First landing page: /blog/a', 'Unlocked: no', 'Site checked: acme.com']) assert.ok(a.body.includes(line), line);
  assert.ok(a.body.includes('src=yt-9'));
});

test('paste checks say "paste" in the subject; the default tag appears only when none came in; the email only when given', () => {
  const none = buildAlert({ kind: 'paste_check', site: null, checks: checks(), attribution: ATTR, unlocked: false });
  assert.equal(none.subject, '10DLC checker | Paste check | paste | 10dlc-checker');
  assert.ok(!none.body.includes('Visitor email'));
  const aff = buildAlert({ kind: 'paste_check', site: null, checks: checks(), attribution: { ...ATTR, aff: 'partnerZ' }, unlocked: false });
  assert.ok(aff.subject.endsWith('| partnerZ'));
  assert.ok(!aff.subject.includes('10dlc-checker'));
  const withEmail = buildAlert({ kind: 'email_unlocked', site: 'acme.com', checks: checks(), attribution: ATTR, unlocked: true, email: 'pat@example.com' });
  assert.ok(withEmail.body.includes('Visitor email: pat@example.com'));
  assert.ok(withEmail.body.includes('Unlocked: yes'));
  const cap = buildAlert({ kind: 'cap_tripped', site: null, checks: null, attribution: ATTR, unlocked: false });
  assert.ok(cap.subject.includes('Cost cap tripped'));
});

test('alerts are sent from the ALERT account only, to the notify address', async () => {
  const store = new MemoryStore();
  const m = mailer();
  await enqueueAlert(store, { kind: 'paste_check', site: null, checks: checks(), attribution: ATTR, unlocked: false }, day1);
  const r = await flushAlerts(store, m, day1, TO);
  assert.equal(r.sent, 1);
  assert.deepEqual(m.sent.map((s) => [s.account, s.msg.to]), [['alert', TO]]);
});

test('alert volume never touches the report quota, and the two are counted separately', async () => {
  const store = new MemoryStore();
  await store.insertSend({ id: 'r1', account: 'report', kind: 'report', created_at: day1.toISOString() });
  await store.insertSend({ id: 'r2', account: 'report', kind: 'report', created_at: day1.toISOString() });
  process.env.TOOLS_ALERT_DAILY_LIMIT = '2';
  try {
    // limits are read at import time, so use the report count to show it is not subtracted from the alert budget
    assert.equal(await store.countSends('report', '2026-03-10T00:00:00Z'), 2);
    assert.equal(await store.countSends('alert', '2026-03-10T00:00:00Z'), 0);
    const m = mailer();
    for (let i = 0; i < 3; i++) await enqueueAlert(store, { kind: 'paste_check', site: null, checks: null, attribution: ATTR, unlocked: false }, day1);
    await flushAlerts(store, m, day1, TO);
    assert.ok(m.sent.every((s) => s.account === 'alert'));
    assert.equal(await store.countSends('report', '2026-03-10T00:00:00Z'), 2); // unchanged
  } finally {
    delete process.env.TOOLS_ALERT_DAILY_LIMIT;
  }
});

test('a failed send is retried with backoff and is never dropped', async () => {
  const store = new MemoryStore();
  const m = mailer({ failFirst: 2 });
  await enqueueAlert(store, { kind: 'paste_check', site: null, checks: checks(), attribution: ATTR, unlocked: false }, day1);
  let r = await flushAlerts(store, m, day1, TO);
  assert.equal(r.failed, 1);
  assert.equal(store.alerts[0].status, 'pending');
  assert.equal(store.alerts[0].attempts, 1);
  r = await flushAlerts(store, m, day1, TO); // not due yet: backoff
  assert.equal(m.attempts, 1);
  r = await flushAlerts(store, m, new Date(day1.getTime() + 3 * 60_000), TO); // due, fails again
  assert.equal(store.alerts[0].attempts, 2);
  r = await flushAlerts(store, m, new Date(day1.getTime() + 60 * 60_000), TO); // due, succeeds
  assert.equal(r.sent, 1);
  assert.equal(store.alerts[0].status, 'sent');
});

test('at the alert account daily limit the rest are held, then go out as ONE catch-up email when the limit resets', async () => {
  // the limit is a constant read from the environment when config is first loaded, so drive it through the provider instead:
  const store = new MemoryStore();
  const m = mailer({ limitAfter: 2 });
  for (let i = 0; i < 5; i++) await enqueueAlert(store, { kind: 'paste_check', site: `s${i}.com`, checks: checks(), attribution: ATTR, unlocked: false }, new Date(day1.getTime() + i * 1000));
  const later = new Date(day1.getTime() + 10_000); // all five are due
  const r1 = await flushAlerts(store, m, later, TO);
  assert.equal(r1.sent, 2);
  assert.equal(r1.held, 3);
  assert.equal(store.alerts.filter((a) => a.status === 'held').length, 3);
  assert.equal(m.sent.length, 2);

  // still the same day: nothing more goes out and nothing is lost
  await flushAlerts(store, m, new Date(later.getTime() + 3600_000), TO);
  assert.equal(m.sent.length, 2);
  assert.equal(store.alerts.filter((a) => a.status === 'held').length, 3);

  // next day: one catch-up email carrying all three
  const m2 = mailer();
  const r2 = await flushAlerts(store, m2, day2, TO);
  assert.equal(r2.digested, 3);
  assert.equal(m2.sent.length, 1);
  const digest = m2.sent[0].msg;
  assert.ok(digest.subject.includes('Catch-up: 3'));
  for (const i of [2, 3, 4]) assert.ok(digest.text.includes(`s${i}.com`), `s${i}.com`);
  assert.equal(store.alerts.filter((a) => a.status === 'digested').length, 3);
  assert.equal(store.alerts.filter((a) => a.status === 'held' || a.status === 'pending').length, 0);
  // sending the digest again does nothing
  await flushAlerts(store, m2, day2, TO);
  assert.equal(m2.sent.length, 1);
});

test('with no notify address nothing is sent and nothing is lost', async () => {
  const store = new MemoryStore();
  await enqueueAlert(store, { kind: 'paste_check', site: null, checks: null, attribution: ATTR, unlocked: false }, day1);
  const m = mailer();
  const r = await flushAlerts(store, m, day1, undefined);
  assert.equal(r.skipped, 'no_recipient');
  assert.equal(store.alerts[0].status, 'pending');
});
