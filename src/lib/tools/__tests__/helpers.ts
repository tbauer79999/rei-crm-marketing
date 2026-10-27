import type { Attribution } from '../attribution';
import type { Rulebook } from '../content-gate';
import type { Mailer, MailMessage } from '../mail';
import type { ModelClient, ModelRequest } from '../model';
import type { Deps } from '../service';
import { MemoryStore } from '../store';
import type { ScanOutput } from '../scan';

// TEST FIXTURES ONLY. These quotes are invented for the tests and are never loaded by the app (the app reads content/rulebook.json).
export const TEST_RULEBOOK: Rulebook = {
  version: 'test',
  rules: [
    { rule_id: 'T-CD-1', check: 'campaign_description', official_quote: 'TEST QUOTE campaign description one.', source_url: 'https://example.com/rule-cd-1', verified_date: '2026-01-01' },
    { rule_id: 'T-SM-1', check: 'sample_messages', official_quote: 'TEST QUOTE sample messages one.', source_url: 'https://example.com/rule-sm-1', verified_date: '2026-01-01' },
    { rule_id: 'T-OI-1', check: 'opt_in_wording', official_quote: 'TEST QUOTE opt-in one.', source_url: 'https://example.com/rule-oi-1', verified_date: '2026-01-01' },
    { rule_id: 'T-OI-2', check: 'opt_in_wording', official_quote: 'TEST QUOTE opt-in two.', source_url: 'https://example.com/rule-oi-2', verified_date: '2026-01-01' },
    { rule_id: 'T-PP-1', check: 'privacy_policy', official_quote: 'TEST QUOTE privacy one.', source_url: 'https://example.com/rule-pp-1', verified_date: '2026-01-01' },
  ],
};

export const ids = (req: ModelRequest): string[] => [...req.user.matchAll(/rule_id: (\S+)/g)].map((m) => m[1]);

export function verdictJson(req: ModelRequest, status: 'pass' | 'warn' | 'fail' = 'pass', evidence: string | null = null): string {
  return JSON.stringify({ findings: ids(req).map((rule_id) => ({ rule_id, status, evidence })) });
}

export function client(opts: { status?: 'pass' | 'warn' | 'fail'; inputTokens?: number; outputTokens?: number; reply?: (req: ModelRequest) => string; fail?: boolean } = {}): ModelClient & { calls: ModelRequest[] } {
  const calls: ModelRequest[] = [];
  const fn = (async (req: ModelRequest) => {
    calls.push(req);
    if (opts.fail) throw new Error('model down');
    return { text: opts.reply ? opts.reply(req) : verdictJson(req, opts.status ?? 'pass'), inputTokens: opts.inputTokens ?? 1000, outputTokens: opts.outputTokens ?? 100, model: 'claude-haiku-4-5-20251001' };
  }) as ModelClient & { calls: ModelRequest[] };
  fn.calls = calls;
  return fn;
}

export function mailer(opts: { failFirst?: number; limitAfter?: number } = {}): Mailer & { sent: { account: string; msg: MailMessage }[]; attempts: number } {
  const sent: { account: string; msg: MailMessage }[] = [];
  let attempts = 0;
  const fn = (async (account, msg) => {
    attempts++;
    fn.attempts = attempts;
    if (opts.failFirst && attempts <= opts.failFirst) return { ok: false as const, limit: false, error: 'boom' };
    if (opts.limitAfter !== undefined && sent.filter((s) => s.account === account).length >= opts.limitAfter) return { ok: false as const, limit: true, error: 'daily quota' };
    sent.push({ account, msg });
    return { ok: true as const };
  }) as Mailer & { sent: typeof sent; attempts: number };
  fn.sent = sent;
  fn.attempts = 0;
  return fn;
}

export const SCAN_OK: ScanOutput = {
  site: 'example.com',
  pages: ['https://example.com/', 'https://example.com/privacy', 'https://example.com/contact'],
  inputs: { campaign_description: 'We sell widgets.', opt_in_wording: 'I agree to receive texts. Reply STOP to end.', privacy_policy: 'We never share opt-in data.' },
  signals: { checkboxFound: true, consentCoercive: false, privacyPageFound: true },
};

export function makeDeps(over: Partial<Deps> & { clock?: { now: Date } } = {}) {
  const store = over.store ?? new MemoryStore();
  const clock = over.clock ?? { now: new Date('2026-03-10T12:00:00Z') };
  const pending: Promise<unknown>[] = [];
  const deps: Deps = {
    store,
    client: over.client ?? client(),
    mailer: over.mailer ?? mailer(),
    rulebook: over.rulebook ?? TEST_RULEBOOK,
    now: () => clock.now,
    scan: over.scan ?? (async () => SCAN_OK),
    defer: (fn) => { pending.push(fn().catch(() => {})); },
  };
  return { deps, store: store as MemoryStore, clock, settle: async () => { await Promise.all(pending.splice(0)); } };
}

export const WHO = { ipHash: 'ip-1', visitorId: 'v-1' };
export const ATTR: Attribution = { src: null, aff: null, referrer: null, landing: null };
