import { CHECKS, CHECK_LABELS, COPY, type CheckId, type Status } from './config';
import type { Rule, Rulebook } from './content-gate';
import { buildUserPrompt, costUsd, SYSTEM_PROMPT, type ModelClient } from './model';
import { guardModelOutput } from './output-guard';
import type { CheckInputs, Signals } from './scan';

export type GrayReason = 'no_source' | 'no_input' | 'output_blocked' | 'model_failed';

export type Finding = {
  rule_id: string;
  status: Status;
  // The official quote is the only text shown for what a rule requires. It is never paraphrased or adapted to the visitor.
  official_quote: string;
  source_url: string;
  verified_date: string;
  evidence: string | null; // verbatim excerpt of the visitor's own text, or null
  source_note?: string; // caveat published with the source (for example: provider guidance, not a carrier rule)
  // One plain sentence on a failed or partly met finding: what in the visitor's text triggered it, and what is missing. Built here from
  // the model's verbatim excerpt and the rule, never written by the model. Computed when a result is shown, not stored.
  what_broke?: string;
};

export type CheckResult = {
  check: CheckId;
  label: string;
  status: Status;
  reason: GrayReason | null;
  message: string | null;
  findings: Finding[];
};

export type UsageRecord = { check: CheckId; model: string; inputTokens: number; outputTokens: number; costUsd: number };

export type RunOutput = { checks: CheckResult[]; usage: UsageRecord[]; modelCalls: number; modelFailures: number };

const RANK: Record<'pass' | 'warn' | 'fail', number> = { pass: 0, warn: 1, fail: 2 };

const ruleOnly = (r: Rule): Finding => ({
  rule_id: r.rule_id,
  status: 'gray',
  official_quote: r.official_quote,
  source_url: r.source_url,
  verified_date: r.verified_date,
  evidence: null,
  ...(r.source_note ? { source_note: r.source_note } : {}),
});

function gray(check: CheckId, reason: GrayReason, message: string, findings: Finding[] = []): CheckResult {
  return { check, label: CHECK_LABELS[check], status: 'gray', reason, message, findings };
}

async function runOne(check: CheckId, rules: Rule[], text: string, signals: Signals | undefined, client: ModelClient) {
  const reply = await client({ system: SYSTEM_PROMPT, user: buildUserPrompt(rules, text, check === 'opt_in_wording' ? signals : undefined), maxTokens: Math.min(8000, 200 + rules.length * 120) });
  const usage: UsageRecord = {
    check,
    model: reply.model,
    inputTokens: reply.inputTokens,
    outputTokens: reply.outputTokens,
    costUsd: costUsd(reply.model, reply.inputTokens, reply.outputTokens),
  };
  return { reply, usage };
}

export async function runChecks(args: { inputs: CheckInputs; signals?: Signals; rulebook: Rulebook; client: ModelClient }): Promise<RunOutput> {
  const { inputs, signals, rulebook, client } = args;
  const usage: UsageRecord[] = [];
  let modelCalls = 0;
  let modelFailures = 0;

  const results = await Promise.all(
    CHECKS.map(async (check): Promise<CheckResult> => {
      const rules = rulebook.rules.filter((r) => r.check === check); // 'other' rules belong to none of the four checks
      // No sourced rule means no verdict, whatever the input is.
      if (rules.length === 0) return gray(check, 'no_source', COPY.grayNoSource);
      const text = inputs[check];
      if (!text) return gray(check, 'no_input', COPY.grayNoInput);

      modelCalls++;
      let called: Awaited<ReturnType<typeof runOne>>;
      try {
        called = await runOne(check, rules, text, signals, client);
      } catch {
        modelFailures++;
        return gray(check, 'model_failed', COPY.grayModelFailed, rules.map(ruleOnly));
      }
      usage.push(called.usage);

      const guarded = guardModelOutput(called.reply.text, rules, text);
      if (!guarded.ok) return gray(check, 'output_blocked', COPY.grayBlocked, rules.map(ruleOnly));

      const byId = new Map(guarded.verdicts.map((v) => [v.rule_id, v]));
      const findings: Finding[] = rules.map((r) => {
        const v = byId.get(r.rule_id);
        return v ? { ...ruleOnly(r), status: v.status, evidence: v.evidence } : ruleOnly(r); // left out by the model: shown rule-only
      });
      const worst = findings.reduce<'pass' | 'warn' | 'fail'>((w, f) => (f.status !== 'gray' && RANK[f.status] > RANK[w] ? f.status : w), 'pass');
      return { check, label: CHECK_LABELS[check], status: worst, reason: null, message: null, findings };
    }),
  );

  return { checks: results, usage, modelCalls, modelFailures };
}

export type Counts = Record<Status, number>;

export function countStatuses(checks: CheckResult[]): Counts {
  const c: Counts = { pass: 0, warn: 0, fail: 0, gray: 0 };
  for (const k of checks) c[k.status]++;
  return c;
}

// ---- which finding leads a card, and the "what broke it" sentence ------------------------------------------------------------

// When several privacy rules fail, lead with the most specific one: the no-sharing rules, in this order.
const PRIVACY_SHARING_RULES = ['R6-Q6', 'R6-Q3', 'BW-29', 'BW-30', 'R6-Q9'];
// Rules that are about WHERE the policy is linked. They lead a card only when nothing more specific failed.
const PRIVACY_LINK_RULES = ['R6-Q1', 'R6-Q4', 'R6-Q5'];

function leadRank(check: CheckId, ruleId: string, fileIndex: number): number {
  if (check !== 'privacy_policy') return fileIndex;
  const i = PRIVACY_SHARING_RULES.indexOf(ruleId);
  if (i >= 0) return i;
  if (PRIVACY_LINK_RULES.includes(ruleId)) return 100_000 + fileIndex;
  return 1_000 + fileIndex;
}

const NOUN: Record<CheckId, string> = {
  campaign_description: 'campaign description',
  sample_messages: 'sample messages',
  opt_in_wording: 'opt-in wording',
  privacy_policy: 'privacy policy',
};

const clip = (s: string, n = 160) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}...` : s);

// withUserText false is for the public share link, which must never carry words from the visitor's own text.
export function whatBroke(check: CheckId, f: Finding, withUserText: boolean): string | null {
  if (f.status !== 'fail' && f.status !== 'warn') return null;
  const who = withUserText ? 'Your' : 'The';
  const noun = NOUN[check];
  const quote = withUserText && f.evidence ? clip(f.evidence) : null;

  if (check === 'privacy_policy' && PRIVACY_SHARING_RULES.includes(f.rule_id)) {
    return quote
      ? `${who} privacy policy says "${quote}" and does not exclude mobile numbers or SMS opt-in data from that sharing.`
      : `${who} privacy policy does not say that mobile numbers and SMS opt-in data are not shared with third parties.`;
  }
  if (f.status === 'warn') {
    return quote ? `${who} ${noun} says "${quote}", which only partly meets the rule below.` : `${who} ${noun} only partly meets the rule below.`;
  }
  return quote ? `${who} ${noun} says "${quote}", which does not meet the rule below.` : `We found nothing in ${withUserText ? 'your' : 'the'} ${noun} that meets the rule below.`;
}

// Adds what_broke to every failed or partly met finding. Used for the visitor's own view; the stored result is left as it was.
export function withWhatBroke(checks: CheckResult[], withUserText: boolean): CheckResult[] {
  return checks.map((c) => ({
    ...c,
    findings: c.findings.map((f) => {
      const w = whatBroke(c.check, f, withUserText);
      return w ? { ...f, what_broke: w } : f;
    }),
  }));
}

// The summary: each check's status, then EVERY failed or partly met finding of that check, most specific first, each with its official
// quote, source, date and a "what broke it" sentence. Passed rules are left out (their count is in hiddenFindings). Evidence excerpts
// from the visitor's text are never included; with includeUserText the "what broke it" sentence may quote them, which is only for the
// visitor's own screen, never the share link.
export type SummaryCheck = Omit<CheckResult, 'findings'> & { findings: Omit<Finding, 'evidence'>[]; hiddenFindings: number };

export function summarize(checks: CheckResult[], opts: { includeUserText?: boolean } = {}): SummaryCheck[] {
  return checks.map((c) => {
    const indexed = c.findings.map((f, i) => ({ f, i }));
    let shown: Finding[];
    if (c.status === 'gray') {
      shown = c.findings.slice(0, 1); // rule-only result: just one rule, as before
    } else {
      shown = indexed
        .filter(({ f }) => f.status === 'fail' || f.status === 'warn')
        .sort((a, b) => sev(b.f.status) - sev(a.f.status) || leadRank(c.check, a.f.rule_id, a.i) - leadRank(c.check, b.f.rule_id, b.i))
        .map(({ f }) => f);
    }
    return {
      ...c,
      findings: shown.map((f) => {
        const w = whatBroke(c.check, f, Boolean(opts.includeUserText));
        return {
          rule_id: f.rule_id,
          status: f.status,
          official_quote: f.official_quote,
          source_url: f.source_url,
          verified_date: f.verified_date,
          ...(f.source_note ? { source_note: f.source_note } : {}),
          ...(w ? { what_broke: w } : {}),
        };
      }),
      hiddenFindings: c.findings.length - shown.length,
    };
  });
}
const sev = (s: Status) => (s === 'fail' ? 3 : s === 'warn' ? 2 : s === 'gray' ? 1 : 0);
