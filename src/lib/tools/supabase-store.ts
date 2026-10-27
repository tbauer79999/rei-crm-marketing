import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import {
  MemoryStore,
  type AlertRecord,
  type AlertStatus,
  type AttemptKind,
  type AttemptRecord,
  type CostRecord,
  type EventRecord,
  type QueueRecord,
  type QueueStatus,
  type ScanRecord,
  type SendRecord,
  type PurgeKind,
  type Store,
} from './store';

// Supabase-backed Store. Points at the checker's own free-tier project (TOOLS_SUPABASE_URL / TOOLS_SUPABASE_SERVICE_KEY),
// never at the SurFox AI production project.

function must<T>(res: { data: T | null; error: { message: string } | null }, what: string): T | null {
  if (res.error) throw new Error(`${what}: ${res.error.message}`);
  return res.data;
}

const PURGE_TABLE: Record<PurgeKind, { table: string; statuses?: string[] }> = {
  scans: { table: 'tools_scans' },
  events: { table: 'tools_events' },
  attempts: { table: 'tools_attempts' },
  sends: { table: 'tools_sends' },
  costs: { table: 'tools_costs' },
  alerts: { table: 'tools_alerts', statuses: ['sent', 'digested'] },
  queue: { table: 'tools_queue', statuses: ['done', 'failed'] },
};

export class SupabaseStore implements Store {
  constructor(private db: SupabaseClient) {}

  async insertScan(r: ScanRecord) { must(await this.db.from('tools_scans').insert(r), 'insertScan'); }
  async getScan(id: string) { return must(await this.db.from('tools_scans').select('*').eq('id', id).maybeSingle(), 'getScan') as ScanRecord | null; }
  async getScanByShareId(shareId: string) { return must(await this.db.from('tools_scans').select('*').eq('share_id', shareId).maybeSingle(), 'getScanByShareId') as ScanRecord | null; }
  async updateScan(id: string, patch: Partial<ScanRecord>) { must(await this.db.from('tools_scans').update(patch).eq('id', id), 'updateScan'); }
  async listScansForReport() { return (must(await this.db.from('tools_scans').select('*').in('report_status', ['pending', 'failed']).limit(50), 'listScansForReport') ?? []) as ScanRecord[]; }

  async insertEvent(r: EventRecord) { must(await this.db.from('tools_events').insert(r), 'insertEvent'); }
  async listEvents(limit: number) { return (must(await this.db.from('tools_events').select('*').order('created_at', { ascending: false }).limit(limit), 'listEvents') ?? []) as EventRecord[]; }
  async countEventsByType(since: string) {
    const rows = (must(await this.db.from('tools_events').select('type').gte('created_at', since).limit(50_000), 'countEventsByType') ?? []) as { type: string }[];
    const out: Record<string, number> = {};
    for (const r of rows) out[r.type] = (out[r.type] || 0) + 1;
    return out;
  }

  async insertAttempt(r: AttemptRecord) { must(await this.db.from('tools_attempts').insert(r), 'insertAttempt'); }
  async countAttempts(q: { ipHash: string | null; visitorId: string | null; kinds: AttemptKind[]; since: string }) {
    const count = async (col: 'ip_hash' | 'visitor_id', val: string | null) => {
      if (!val) return 0;
      const res = await this.db.from('tools_attempts').select('id', { count: 'exact', head: true }).eq(col, val).in('kind', q.kinds).gte('created_at', q.since);
      if (res.error) throw new Error(`countAttempts: ${res.error.message}`);
      return res.count ?? 0;
    };
    return { byIp: await count('ip_hash', q.ipHash), byVisitor: await count('visitor_id', q.visitorId) };
  }

  async insertCosts(rs: CostRecord[]) { if (rs.length) must(await this.db.from('tools_costs').insert(rs), 'insertCosts'); }
  async sumCostSince(since: string) {
    const rows = (must(await this.db.from('tools_costs').select('cost_usd').gte('created_at', since).limit(100_000), 'sumCostSince') ?? []) as { cost_usd: number | string }[];
    return rows.reduce((a, r) => a + Number(r.cost_usd), 0);
  }

  async insertQueue(r: QueueRecord) { must(await this.db.from('tools_queue').insert(r), 'insertQueue'); }
  async listQueue(statuses: QueueStatus[], limit: number) {
    return (must(await this.db.from('tools_queue').select('*').in('status', statuses).order('created_at', { ascending: true }).limit(limit), 'listQueue') ?? []) as QueueRecord[];
  }
  async updateQueue(id: string, patch: Partial<QueueRecord>) { must(await this.db.from('tools_queue').update(patch).eq('id', id), 'updateQueue'); }

  async insertAlert(r: AlertRecord) { must(await this.db.from('tools_alerts').insert(r), 'insertAlert'); }
  async listAlerts(statuses: AlertStatus[], limit: number) {
    return (must(await this.db.from('tools_alerts').select('*').in('status', statuses).order('created_at', { ascending: true }).limit(limit), 'listAlerts') ?? []) as AlertRecord[];
  }
  async updateAlert(id: string, patch: Partial<AlertRecord>) { must(await this.db.from('tools_alerts').update(patch).eq('id', id), 'updateAlert'); }

  async insertSend(r: SendRecord) { must(await this.db.from('tools_sends').insert(r), 'insertSend'); }
  async countSends(account: 'alert' | 'report', since: string) {
    const res = await this.db.from('tools_sends').select('id', { count: 'exact', head: true }).eq('account', account).gte('created_at', since);
    if (res.error) throw new Error(`countSends: ${res.error.message}`);
    return res.count ?? 0;
  }

  async purge(kind: PurgeKind, before: string) {
    const { table, statuses } = PURGE_TABLE[kind];
    let q = this.db.from(table).delete({ count: 'exact' }).lt('created_at', before);
    if (statuses) q = q.in('status', statuses);
    const res = await q;
    if (res.error) throw new Error(`purge ${kind}: ${res.error.message}`);
    return res.count ?? 0;
  }
}


let singleton: Store | null = null;
let override: Store | null = null;

// Tests inject a MemoryStore here.
export function setStoreForTests(s: Store | null) { override = s; }

export function storeConfigured(): boolean {
  return Boolean(process.env.TOOLS_SUPABASE_URL && process.env.TOOLS_SUPABASE_SERVICE_KEY);
}

export function getStore(): Store {
  if (override) return override;
  if (singleton) return singleton;
  if (storeConfigured()) {
    singleton = new SupabaseStore(createClient(process.env.TOOLS_SUPABASE_URL!, process.env.TOOLS_SUPABASE_SERVICE_KEY!, { auth: { persistSession: false } }));
    return singleton;
  }
  // Without a database the daily limits and the cost cap cannot be enforced, so production refuses rather than running unmetered.
  if (process.env.NODE_ENV === 'production') throw new Error('TOOLS_SUPABASE_URL and TOOLS_SUPABASE_SERVICE_KEY are not set');
  singleton = new MemoryStore();
  return singleton;
}
