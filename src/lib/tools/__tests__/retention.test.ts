import assert from 'node:assert/strict';
import test from 'node:test';
import { purgeExpired } from '../retention';
import { MemoryStore, type AlertRecord, type QueueRecord, type ScanRecord } from '../store';

const NOW = new Date('2027-01-01T00:00:00Z');
const ago = (days: number) => new Date(NOW.getTime() - days * 86_400_000).toISOString();

const scan = (id: string, d: number): ScanRecord => ({
  id, share_id: id, mode: 'site', site: 'a.com', pages: [], checks: [], counts: { pass: 0, warn: 0, fail: 0, gray: 0 }, src: null, aff: null, referrer: null,
  landing: null, visitor_id: null, ip_hash: null, unlocked: true, email: 'a@b.co', consent_text: 'x', consent_at: null, report_status: 'sent', cost_usd: 0, created_at: ago(d),
});
const alert = (id: string, status: AlertRecord['status'], d: number): AlertRecord => ({
  id, event_type: 'x', subject: 's', body: 'b', status, attempts: 0, next_attempt_at: ago(d), held_day: null, last_error: null, created_at: ago(d), sent_at: null,
});
const queued = (id: string, status: QueueRecord['status']): QueueRecord => ({
  id, url: 'u', email: 'e@e.co', consent_text: 'c', consent_at: ago(200), src: null, aff: null, referrer: null, landing: null, visitor_id: null, ip_hash: null,
  status, scan_id: null, attempts: 0, last_error: null, created_at: ago(200), processed_at: null,
});

test('expired records are deleted; recent records and unfinished work are kept', async () => {
  const s = new MemoryStore();
  await s.insertScan(scan('old', 366));
  await s.insertScan(scan('new', 364));
  await s.insertAttempt({ id: 'a1', kind: 'site', visitor_id: 'v', ip_hash: 'h', created_at: ago(31) });
  await s.insertAttempt({ id: 'a2', kind: 'site', visitor_id: 'v', ip_hash: 'h', created_at: ago(29) });
  for (const [id, st] of [['s', 'sent'], ['d', 'digested'], ['p', 'pending'], ['h', 'held']] as const) await s.insertAlert(alert(id, st, 200));
  for (const st of ['queued', 'running', 'done', 'failed'] as const) await s.insertQueue(queued(`q-${st}`, st));
  const cost = (id: string, d: number) => ({ id, scan_id: null, queue_id: null, check_id: 'x', model: 'm', input_tokens: 1, output_tokens: 1, cost_usd: 1, created_at: ago(d) });
  await s.insertCosts([cost('c1', 396), cost('c2', 394)]);
  await s.insertSend({ id: 'se1', account: 'alert', kind: 'instant', created_at: ago(91) });
  await s.insertSend({ id: 'se2', account: 'alert', kind: 'instant', created_at: ago(89) });
  await s.insertEvent({ id: 'e1', type: 'check_started', scan_id: null, site: null, src: null, aff: null, referrer: null, landing: null, meta: {}, created_at: ago(400) });

  const n = await purgeExpired(s, NOW);
  assert.deepEqual(s.scans.map((x) => x.id), ['new']);
  assert.deepEqual(s.attempts.map((x) => x.id), ['a2']);
  assert.deepEqual(s.alerts.map((x) => x.id).sort(), ['h', 'p']); // pending and held alerts are never purged
  assert.deepEqual(s.queue.map((x) => x.id).sort(), ['q-queued', 'q-running']); // waiting scans are never purged
  assert.deepEqual(s.costs.map((x) => x.id), ['c2']);
  assert.deepEqual(s.sends.map((x) => x.id), ['se2']);
  assert.equal(s.events.length, 0);
  assert.equal(n.scans, 1);
  assert.equal(n.alerts, 2);
});
