import { randomUUID } from 'node:crypto';
import type { CheckResult, Counts } from './checks';
import type { EventType } from './config';

// Storage interface for everything the checker persists. Production uses SupabaseStore (a separate free-tier project, every table in
// migrations/). Tests and local runs without credentials use MemoryStore.

export type ScanRecord = {
  id: string;
  share_id: string;
  mode: 'site' | 'paste';
  site: string | null;
  pages: string[];
  checks: CheckResult[];
  counts: Counts;
  src: string | null;
  aff: string | null;
  referrer: string | null;
  landing: string | null;
  visitor_id: string | null;
  ip_hash: string | null;
  unlocked: boolean;
  email: string | null;
  consent_text: string | null;
  consent_at: string | null;
  report_status: 'none' | 'pending' | 'sent' | 'failed';
  cost_usd: number;
  created_at: string;
};

export type EventRecord = {
  id: string;
  type: EventType;
  scan_id: string | null;
  site: string | null;
  src: string | null;
  aff: string | null;
  referrer: string | null;
  landing: string | null;
  meta: Record<string, unknown>;
  created_at: string;
};

export type AttemptKind = 'site' | 'paste' | 'queue';
export type AttemptRecord = { id: string; kind: AttemptKind; visitor_id: string | null; ip_hash: string | null; created_at: string };

export type CostRecord = {
  id: string;
  scan_id: string | null;
  queue_id: string | null;
  check_id: string;
  model: string;
  input_tokens: number;
  output_tokens: number;
  cost_usd: number;
  created_at: string;
};

export type QueueStatus = 'queued' | 'running' | 'done' | 'failed';
export type QueueRecord = {
  id: string;
  url: string;
  email: string;
  consent_text: string;
  consent_at: string;
  src: string | null;
  aff: string | null;
  referrer: string | null;
  landing: string | null;
  visitor_id: string | null;
  ip_hash: string | null;
  status: QueueStatus;
  scan_id: string | null;
  attempts: number;
  last_error: string | null;
  created_at: string;
  processed_at: string | null;
};

export type AlertStatus = 'pending' | 'held' | 'sent' | 'digested';
export type AlertRecord = {
  id: string;
  event_type: string;
  subject: string;
  body: string;
  status: AlertStatus;
  attempts: number;
  next_attempt_at: string;
  held_day: string | null; // UTC date (YYYY-MM-DD) the alert was held on because the daily limit was reached
  last_error: string | null;
  created_at: string;
  sent_at: string | null;
};

export type SendRecord = { id: string; account: 'alert' | 'report'; kind: 'instant' | 'digest' | 'report'; created_at: string };

export interface Store {
  insertScan(r: ScanRecord): Promise<void>;
  getScan(id: string): Promise<ScanRecord | null>;
  getScanByShareId(shareId: string): Promise<ScanRecord | null>;
  updateScan(id: string, patch: Partial<ScanRecord>): Promise<void>;
  listScansForReport(): Promise<ScanRecord[]>; // report_status pending or failed

  insertEvent(r: EventRecord): Promise<void>;
  listEvents(limit: number): Promise<EventRecord[]>;
  countEventsByType(since: string): Promise<Record<string, number>>;

  insertAttempt(r: AttemptRecord): Promise<void>;
  countAttempts(q: { ipHash: string | null; visitorId: string | null; kinds: AttemptKind[]; since: string }): Promise<{ byIp: number; byVisitor: number }>;

  insertCosts(rs: CostRecord[]): Promise<void>;
  sumCostSince(since: string): Promise<number>;

  insertQueue(r: QueueRecord): Promise<void>;
  listQueue(statuses: QueueStatus[], limit: number): Promise<QueueRecord[]>; // oldest first
  updateQueue(id: string, patch: Partial<QueueRecord>): Promise<void>;

  insertAlert(r: AlertRecord): Promise<void>;
  listAlerts(statuses: AlertStatus[], limit: number): Promise<AlertRecord[]>; // oldest first
  updateAlert(id: string, patch: Partial<AlertRecord>): Promise<void>;

  insertSend(r: SendRecord): Promise<void>;
  countSends(account: 'alert' | 'report', since: string): Promise<number>;

  // Retention: delete records older than `before` (ISO time). Returns how many were deleted. Pending/held alerts and waiting queue
  // entries are never deleted.
  purge(kind: PurgeKind, before: string): Promise<number>;
}

export type PurgeKind = 'scans' | 'events' | 'attempts' | 'alerts' | 'sends' | 'queue' | 'costs';

export const newId = () => randomUUID();

export class MemoryStore implements Store {
  scans: ScanRecord[] = [];
  events: EventRecord[] = [];
  attempts: AttemptRecord[] = [];
  costs: CostRecord[] = [];
  queue: QueueRecord[] = [];
  alerts: AlertRecord[] = [];
  sends: SendRecord[] = [];

  async insertScan(r: ScanRecord) { this.scans.push({ ...r }); }
  async getScan(id: string) { return this.scans.find((s) => s.id === id) ?? null; }
  async getScanByShareId(shareId: string) { return this.scans.find((s) => s.share_id === shareId) ?? null; }
  async updateScan(id: string, patch: Partial<ScanRecord>) { const s = this.scans.find((x) => x.id === id); if (s) Object.assign(s, patch); }
  async listScansForReport() { return this.scans.filter((s) => s.report_status === 'pending' || s.report_status === 'failed'); }

  async insertEvent(r: EventRecord) { this.events.push({ ...r }); }
  async listEvents(limit: number) { return [...this.events].sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, limit); }
  async countEventsByType(since: string) {
    const out: Record<string, number> = {};
    for (const e of this.events) if (e.created_at >= since) out[e.type] = (out[e.type] || 0) + 1;
    return out;
  }

  async insertAttempt(r: AttemptRecord) { this.attempts.push({ ...r }); }
  async countAttempts(q: { ipHash: string | null; visitorId: string | null; kinds: AttemptKind[]; since: string }) {
    const rows = this.attempts.filter((a) => q.kinds.includes(a.kind) && a.created_at >= q.since);
    return {
      byIp: q.ipHash ? rows.filter((a) => a.ip_hash === q.ipHash).length : 0,
      byVisitor: q.visitorId ? rows.filter((a) => a.visitor_id === q.visitorId).length : 0,
    };
  }

  async insertCosts(rs: CostRecord[]) { this.costs.push(...rs.map((r) => ({ ...r }))); }
  async sumCostSince(since: string) { return this.costs.filter((c) => c.created_at >= since).reduce((a, c) => a + c.cost_usd, 0); }

  async insertQueue(r: QueueRecord) { this.queue.push({ ...r }); }
  async listQueue(statuses: QueueStatus[], limit: number) {
    return this.queue.filter((q) => statuses.includes(q.status)).sort((a, b) => a.created_at.localeCompare(b.created_at)).slice(0, limit);
  }
  async updateQueue(id: string, patch: Partial<QueueRecord>) { const q = this.queue.find((x) => x.id === id); if (q) Object.assign(q, patch); }

  async insertAlert(r: AlertRecord) { this.alerts.push({ ...r }); }
  async listAlerts(statuses: AlertStatus[], limit: number) {
    return this.alerts.filter((a) => statuses.includes(a.status)).sort((a, b) => a.created_at.localeCompare(b.created_at)).slice(0, limit);
  }
  async updateAlert(id: string, patch: Partial<AlertRecord>) { const a = this.alerts.find((x) => x.id === id); if (a) Object.assign(a, patch); }

  async insertSend(r: SendRecord) { this.sends.push({ ...r }); }
  async countSends(account: 'alert' | 'report', since: string) { return this.sends.filter((s) => s.account === account && s.created_at >= since).length; }

  async purge(kind: PurgeKind, before: string) {
    const keep = <T extends { created_at: string }>(rows: T[], drop: (r: T) => boolean) => {
      const kept = rows.filter((r) => !(r.created_at < before && drop(r)));
      const n = rows.length - kept.length;
      rows.splice(0, rows.length, ...kept);
      return n;
    };
    switch (kind) {
      case 'scans': return keep(this.scans, () => true);
      case 'events': return keep(this.events, () => true);
      case 'attempts': return keep(this.attempts, () => true);
      case 'sends': return keep(this.sends, () => true);
      case 'costs': return keep(this.costs, () => true);
      case 'alerts': return keep(this.alerts, (a) => a.status === 'sent' || a.status === 'digested');
      case 'queue': return keep(this.queue, (q) => q.status === 'done' || q.status === 'failed');
    }
  }
}
