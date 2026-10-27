import { enqueueAlert, flushAlerts, type AlertInput } from './alerts';
import type { Attribution } from './attribution';
import { countStatuses, runChecks, summarize, type CheckResult, type Counts, type SummaryCheck, type UsageRecord } from './checks';
import { CHECKS, type CheckId, type EventType } from './config';
import { loadConsentText, type Rulebook } from './content-gate';
import type { ErrorCode } from './errors';
import { capStatus, checkAttempt, monthStartIso, recordAttempt, type CapStatus } from './limits';
import type { Mailer } from './mail';
import type { ModelClient } from './model';
import { FetchError, parsePublicUrl } from './net-guard';
import { buildQueuedFailureEmail, buildReportEmail } from './report';
import { inputsFromPaste, NoTextError, scanWebsite, type CheckInputs, type ScanOutput, type Signals } from './scan';
import { newId, type CostRecord, type Store, type ScanRecord } from './store';
import { randomBytes } from 'node:crypto';

export type Who = { ipHash: string; visitorId: string | null };

export type Deps = {
  store: Store;
  client: ModelClient;
  mailer: Mailer;
  rulebook: Rulebook;
  now?: () => Date;
  scan?: (url: string) => Promise<ScanOutput>;
  // Runs work after the response has been sent (Next's after()). Tests collect and await these.
  defer?: (fn: () => Promise<unknown>) => void;
};

const nowOf = (d: Deps) => (d.now ? d.now() : new Date());
const defer = (d: Deps, fn: () => Promise<unknown>) => {
  if (d.defer) d.defer(fn);
  else void fn().catch(() => {});
};

export const newShareId = () => randomBytes(18).toString('base64url'); // 144 bits, unguessable

export type ScanView = {
  share_id: string;
  mode: 'site' | 'paste';
  site: string | null;
  pages: string[];
  counts: Counts;
  checks: SummaryCheck[];
  unlock_available: boolean;
};

export type CheckResponse =
  | { ok: true; scan: ScanView }
  | { ok: false; code: ErrorCode; queue_offer?: boolean };

export function toView(rec: ScanRecord): ScanView {
  return {
    share_id: rec.share_id,
    mode: rec.mode,
    site: rec.site,
    pages: rec.pages,
    counts: rec.counts,
    checks: summarize(rec.checks),
    unlock_available: loadConsentText().ok,
  };
}

// ---- events and alerts ----------------------------------------------------------------------------------------------------

export async function logEvent(
  d: Deps,
  type: EventType,
  fields: { scan_id?: string | null; site?: string | null; attribution: Attribution; meta?: Record<string, unknown> },
) {
  try {
    await d.store.insertEvent({
      id: newId(),
      type,
      scan_id: fields.scan_id ?? null,
      site: fields.site ?? null,
      src: fields.attribution.src,
      aff: fields.attribution.aff,
      referrer: fields.attribution.referrer,
      landing: fields.attribution.landing,
      meta: fields.meta ?? {},
      created_at: nowOf(d).toISOString(),
    });
  } catch {
    // Event logging must never break the visitor's result.
  }
}

// Queue the alert and try to send it, after the response. A failure leaves it queued for retry.
function raiseAlert(d: Deps, input: AlertInput) {
  defer(d, async () => {
    try {
      await enqueueAlert(d.store, input, nowOf(d));
      await flushAlerts(d.store, d.mailer, nowOf(d));
    } catch {
      // Left for the next flush.
    }
  });
}

async function recordCosts(d: Deps, usage: UsageRecord[], ids: { scan_id: string | null; queue_id: string | null }): Promise<number> {
  const at = nowOf(d).toISOString();
  const rows: CostRecord[] = usage.map((u) => ({
    id: newId(),
    scan_id: ids.scan_id,
    queue_id: ids.queue_id,
    check_id: u.check,
    model: u.model,
    input_tokens: u.inputTokens,
    output_tokens: u.outputTokens,
    cost_usd: u.costUsd,
    created_at: at,
  }));
  await d.store.insertCosts(rows);
  return rows.reduce((a, r) => a + r.cost_usd, 0);
}

// The first request that sees the cap tripped in a month records the trip and alerts Tom, once per month.
async function noteCapTripped(d: Deps, cap: CapStatus, attribution: Attribution) {
  const since = monthStartIso(nowOf(d));
  const seen = await d.store.countEventsByType(since);
  if ((seen.cap_tripped || 0) > 0) return;
  await logEvent(d, 'cap_tripped', { attribution, meta: { spent_usd: cap.spent, cap_usd: cap.cap } });
  raiseAlert(d, {
    kind: 'cap_tripped',
    site: null,
    checks: null,
    attribution,
    unlocked: false,
    note: `Spent $${cap.spent.toFixed(2)} of the $${cap.cap.toFixed(2)} monthly cap. Website scans are paused; paste checks continue. Queued scans resume at the next reset.`,
  });
}

// ---- running a check ------------------------------------------------------------------------------------------------------

function mapScanError(e: unknown): ErrorCode {
  if (e instanceof NoTextError) return 'NO_TEXT';
  if (e instanceof FetchError) {
    switch (e.code) {
      case 'BAD_URL': return 'BAD_URL';
      case 'BLOCKED': return 'BLOCKED_ADDRESS';
      case 'TIMEOUT': return 'TIMEOUT';
      case 'NOT_HTML': return 'NO_TEXT';
      case 'HTTP_ERROR': return /^(401|403|406|429|451)$/.test(e.message) ? 'SITE_BLOCKED' : 'UNREACHABLE';
      default: return 'UNREACHABLE';
    }
  }
  return 'UNREACHABLE';
}

type Executed =
  | { ok: true; rec: ScanRecord; usage: UsageRecord[] }
  | { ok: false; code: ErrorCode; usage: UsageRecord[] };

// Fetch (site mode), run the four checks, and build the scan record. No limits are applied here; callers do that.
async function execute(d: Deps, args: { mode: 'site' | 'paste'; url?: string; paste?: Partial<Record<CheckId, unknown>>; attribution: Attribution; who: Who }): Promise<Executed> {
  let site: string | null = null;
  let pages: string[] = [];
  let inputs: CheckInputs;
  let signals: Signals | undefined;

  if (args.mode === 'site') {
    let scanned: ScanOutput;
    try {
      scanned = await (d.scan ? d.scan(args.url!) : scanWebsite(args.url!));
    } catch (e) {
      return { ok: false, code: mapScanError(e), usage: [] };
    }
    site = scanned.site;
    pages = scanned.pages;
    inputs = scanned.inputs;
    signals = scanned.signals;
  } else {
    inputs = inputsFromPaste(args.paste ?? {});
    if (CHECKS.every((c) => !inputs[c])) return { ok: false, code: 'EMPTY_PASTE', usage: [] };
  }

  const run = await runChecks({ inputs, signals, rulebook: d.rulebook, client: d.client });
  // Every model call failed: there is nothing useful to show beyond the sourced rules.
  if (run.modelCalls > 0 && run.modelFailures === run.modelCalls) return { ok: false, code: 'MODEL_FAILED', usage: run.usage };

  const rec: ScanRecord = {
    id: newId(),
    share_id: newShareId(),
    mode: args.mode,
    site,
    pages,
    checks: run.checks,
    counts: countStatuses(run.checks),
    src: args.attribution.src,
    aff: args.attribution.aff,
    referrer: args.attribution.referrer,
    landing: args.attribution.landing,
    visitor_id: args.who.visitorId,
    ip_hash: args.who.ipHash,
    unlocked: false,
    email: null,
    consent_text: null,
    consent_at: null,
    report_status: 'none',
    cost_usd: 0,
    created_at: nowOf(d).toISOString(),
  };
  return { ok: true, rec, usage: run.usage };
}

export async function handleCheck(d: Deps, req: { mode: 'site' | 'paste'; url?: string; paste?: Partial<Record<CheckId, unknown>>; attribution: Attribution; who: Who }): Promise<CheckResponse> {
  const now = nowOf(d);
  const kind = req.mode === 'site' ? 'site' : 'paste';

  if (req.mode === 'site') {
    // Cheap rejections first, before any limit is spent: a mistyped or private address is not a scan.
    try {
      parsePublicUrl(req.url ?? '');
    } catch (e) {
      return { ok: false, code: mapScanError(e) };
    }
    const cap = await capStatus(d.store, now);
    if (cap.tripped) {
      await noteCapTripped(d, cap, req.attribution);
      return { ok: false, code: 'SCANS_PAUSED', queue_offer: true };
    }
  }

  const gate = await checkAttempt(d.store, req.who, kind, now);
  if (!gate.allowed) return { ok: false, code: 'RATE_LIMITED' };
  await recordAttempt(d.store, req.who, kind, now);
  await logEvent(d, 'check_started', { site: null, attribution: req.attribution, meta: { mode: req.mode } });

  const ex = await execute(d, req);
  // Cost is logged even when the check fails after a model call, because the money was spent.
  const cost = ex.usage.length ? await recordCosts(d, ex.usage, { scan_id: ex.ok ? ex.rec.id : null, queue_id: null }) : 0;
  if (!ex.ok) return { ok: false, code: ex.code };

  ex.rec.cost_usd = cost;
  await d.store.insertScan(ex.rec);

  raiseAlert(d, {
    kind: req.mode === 'site' ? 'site_scan' : 'paste_check',
    site: ex.rec.site,
    checks: ex.rec.checks,
    attribution: req.attribution,
    unlocked: false,
  });
  // A cost that just crossed the cap is noticed on the next request; the scan that crossed it still finishes.
  defer(d, async () => {
    const cap = await capStatus(d.store, nowOf(d));
    if (cap.tripped) await noteCapTripped(d, cap, req.attribution);
  });

  return { ok: true, scan: toView(ex.rec) };
}

// ---- unlock ---------------------------------------------------------------------------------------------------------------

export const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;

export type UnlockResponse =
  | { ok: true; share_id: string; email: string; checks: CheckResult[]; emailed: boolean }
  | { ok: false; code: ErrorCode };

export async function handleUnlock(d: Deps, req: { shareId: string; email: unknown; consent: unknown; visitorId: string | null; attribution: Attribution }): Promise<UnlockResponse> {
  const consent = loadConsentText();
  if (!consent.ok) return { ok: false, code: 'UNLOCK_UNAVAILABLE' };
  const email = typeof req.email === 'string' ? req.email.trim().toLowerCase() : '';
  if (!EMAIL_RE.test(email) || email.length > 254) return { ok: false, code: 'INVALID_EMAIL' };
  if (req.consent !== true) return { ok: false, code: 'CONSENT_REQUIRED' };

  const rec = await d.store.getScanByShareId(req.shareId);
  // Only the visitor who ran the check can unlock it. A shared link shows the summary and nothing more.
  if (!rec || !req.visitorId || rec.visitor_id !== req.visitorId) return { ok: false, code: 'NOT_FOUND' };

  const now = nowOf(d).toISOString();
  if (!rec.unlocked) {
    await d.store.updateScan(rec.id, { unlocked: true, email, consent_text: consent.data, consent_at: now, report_status: 'pending' });
    rec.unlocked = true;
    rec.email = email;
    await logEvent(d, 'email_unlocked', { scan_id: rec.id, site: rec.site, attribution: req.attribution });
    raiseAlert(d, { kind: 'email_unlocked', site: rec.site, checks: rec.checks, attribution: req.attribution, unlocked: true, email });
    defer(d, () => sendReport(d, { ...rec, unlocked: true, email }, req.attribution));
  }
  return { ok: true, share_id: rec.share_id, email, checks: rec.checks, emailed: true };
}

export async function sendReport(d: Deps, rec: ScanRecord, attribution: Attribution): Promise<boolean> {
  if (!rec.email) return false;
  const { subject, text } = buildReportEmail({ site: rec.site, checks: rec.checks, shareId: rec.share_id, attribution });
  const res = await d.mailer('report', { to: rec.email, subject, text });
  if (res.ok) {
    await d.store.insertSend({ id: newId(), account: 'report', kind: 'report', created_at: nowOf(d).toISOString() });
    await d.store.updateScan(rec.id, { report_status: 'sent' });
    return true;
  }
  await d.store.updateScan(rec.id, { report_status: 'failed' });
  return false;
}

// Retries report emails that failed or were never sent. Runs from the cron route.
export async function retryReports(d: Deps): Promise<number> {
  let sent = 0;
  for (const rec of await d.store.listScansForReport()) {
    if (await sendReport(d, rec, { src: rec.src, aff: rec.aff, referrer: rec.referrer, landing: rec.landing })) sent++;
  }
  return sent;
}

// ---- the queue ------------------------------------------------------------------------------------------------------------

export type QueueResponse = { ok: true } | { ok: false; code: ErrorCode };

export async function handleJoinQueue(d: Deps, req: { url: string; email: unknown; consent: unknown; who: Who; attribution: Attribution }): Promise<QueueResponse> {
  const consent = loadConsentText();
  if (!consent.ok) return { ok: false, code: 'UNLOCK_UNAVAILABLE' };
  const email = typeof req.email === 'string' ? req.email.trim().toLowerCase() : '';
  if (!EMAIL_RE.test(email) || email.length > 254) return { ok: false, code: 'INVALID_EMAIL' };
  if (req.consent !== true) return { ok: false, code: 'CONSENT_REQUIRED' };
  try {
    parsePublicUrl(req.url);
  } catch (e) {
    return { ok: false, code: mapScanError(e) };
  }
  const now = nowOf(d);
  const gate = await checkAttempt(d.store, req.who, 'queue', now);
  if (!gate.allowed) return { ok: false, code: 'RATE_LIMITED' };
  await recordAttempt(d.store, req.who, 'queue', now);
  await d.store.insertQueue({
    id: newId(),
    url: req.url.trim(),
    email,
    consent_text: consent.data,
    consent_at: now.toISOString(),
    src: req.attribution.src,
    aff: req.attribution.aff,
    referrer: req.attribution.referrer,
    landing: req.attribution.landing,
    visitor_id: req.who.visitorId,
    ip_hash: req.who.ipHash,
    status: 'queued',
    scan_id: null,
    attempts: 0,
    last_error: null,
    created_at: now.toISOString(),
    processed_at: null,
  });
  return { ok: true };
}

export type DrainResult = { processed: number; failed: number; stoppedAtCap: boolean; remaining: number };

const STALE_RUNNING_MS = 10 * 60 * 1000;

// Runs queued scans oldest first, against the same monthly cap as live scans. Stops the moment the cap is reached; whatever is left
// stays queued for the next reset. `budgetMs` bounds one invocation so it fits a serverless time limit.
export async function drainQueue(d: Deps, opts: { budgetMs?: number; maxItems?: number } = {}): Promise<DrainResult> {
  const started = Date.now();
  const budget = opts.budgetMs ?? 40_000;
  const out: DrainResult = { processed: 0, failed: 0, stoppedAtCap: false, remaining: 0 };

  for (;;) {
    if (Date.now() - started > budget) break;
    if (opts.maxItems !== undefined && out.processed + out.failed >= opts.maxItems) break;
    const cap = await capStatus(d.store, nowOf(d));
    if (cap.tripped) { out.stoppedAtCap = true; break; }

    const now = nowOf(d);
    const open = await d.store.listQueue(['queued', 'running'], 200);
    const next = open.find((q) => q.status === 'queued' || (q.status === 'running' && q.processed_at && now.getTime() - Date.parse(q.processed_at) > STALE_RUNNING_MS));
    if (!next) break;

    await d.store.updateQueue(next.id, { status: 'running', processed_at: now.toISOString(), attempts: next.attempts + 1 });
    const attribution: Attribution = { src: next.src, aff: next.aff, referrer: next.referrer, landing: next.landing };
    const who: Who = { ipHash: next.ip_hash ?? '', visitorId: next.visitor_id };
    let ex: Executed;
    try {
      ex = await execute(d, { mode: 'site', url: next.url, attribution, who });
    } catch (e) {
      ex = { ok: false, code: 'UNAVAILABLE', usage: [] };
      await d.store.updateQueue(next.id, { last_error: (e as Error).message });
    }
    const cost = ex.usage.length ? await recordCosts(d, ex.usage, { scan_id: ex.ok ? ex.rec.id : null, queue_id: next.id }) : 0;

    if (!ex.ok) {
      const terminal = ex.code !== 'MODEL_FAILED' && ex.code !== 'UNAVAILABLE'; // site problems will not fix themselves; model problems may
      if (terminal || next.attempts + 1 >= 3) {
        await d.store.updateQueue(next.id, { status: 'failed', last_error: ex.code, processed_at: nowOf(d).toISOString() });
        let host = next.url;
        try { host = new URL(/^https?:\/\//i.test(next.url) ? next.url : `https://${next.url}`).hostname; } catch { /* keep raw */ }
        const m = buildQueuedFailureEmail(host);
        await d.mailer('report', { to: next.email, subject: m.subject, text: m.text });
        out.failed++;
      } else {
        await d.store.updateQueue(next.id, { status: 'queued', last_error: ex.code });
      }
      continue;
    }

    const rec: ScanRecord = {
      ...ex.rec,
      cost_usd: cost,
      unlocked: true,
      email: next.email,
      consent_text: next.consent_text,
      consent_at: next.consent_at,
      report_status: 'pending',
    };
    await d.store.insertScan(rec);
    await d.store.updateQueue(next.id, { status: 'done', scan_id: rec.id, processed_at: nowOf(d).toISOString(), last_error: null });
    await sendReport(d, rec, attribution);
    raiseAlert(d, { kind: 'site_scan', site: rec.site, checks: rec.checks, attribution, unlocked: true, email: next.email, note: 'Queued scan, run after the cap reset.' });
    out.processed++;
  }
  out.remaining = (await d.store.listQueue(['queued', 'running'], 1000)).length;
  return out;
}
