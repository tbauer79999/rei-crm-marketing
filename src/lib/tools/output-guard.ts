import type { Rule } from './content-gate';

// Server-side check on everything the model returns. The model is only allowed to give, for each sourced rule, a verdict and a
// verbatim excerpt of the visitor's own text. Anything else (extra keys, prose, an excerpt that is not in the text, advice, a
// replacement sentence) fails the check and the caller falls back to the rule-only result.

export type Verdict = { rule_id: string; status: 'pass' | 'warn' | 'fail'; evidence: string | null };

export type GuardResult = { ok: true; verdicts: Verdict[] } | { ok: false; reason: string };

const SUGGESTION = new RegExp(
  [
    String.raw`\byou (could|should|might want to|may want to|can add|need to (add|write|say|use))\b`,
    String.raw`\b(consider|try) (adding|using|writing|saying|including|rewording|this)\b`,
    String.raw`\b(suggest(ed|ion|ions)?|recommend(ed|ation)?)\b`,
    String.raw`\breplace\b[^.]{0,40}\bwith\b`,
    String.raw`\b(rewrite|reword|rephrase|revised|replacement|improved|better) (version|wording|text|copy|sentence|description|message)\b`,
    String.raw`\b(sample|example|template|model) (wording|language|text|copy|sentence)\b`,
    String.raw`\bfor example,? (use|write|say)\b`,
    String.raw`\binstead,? (use|write|say)\b`,
    String.raw`\bhere'?s (a|an|how)\b`,
    String.raw`\badd (this|the following)\b`,
  ].join('|'),
  'i',
);

export function containsSuggestedWording(s: string): boolean {
  return SUGGESTION.test(s);
}

const norm = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase();

export function guardModelOutput(raw: string, rules: Rule[], sourceText: string): GuardResult {
  const stripped = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  if (!stripped.startsWith('{') || !stripped.endsWith('}')) return { ok: false, reason: 'not_json_only' };

  let parsed: unknown;
  try {
    parsed = JSON.parse(stripped);
  } catch {
    return { ok: false, reason: 'invalid_json' };
  }
  if (!parsed || typeof parsed !== 'object' || Object.keys(parsed).length !== 1 || !Array.isArray((parsed as { findings?: unknown }).findings)) {
    return { ok: false, reason: 'bad_shape' };
  }

  const ids = new Set(rules.map((r) => r.rule_id));
  const seen = new Set<string>();
  const haystack = norm(sourceText);
  const verdicts: Verdict[] = [];
  const strippedOfEvidence: string[] = [];

  for (const f of (parsed as { findings: unknown[] }).findings) {
    if (!f || typeof f !== 'object') return { ok: false, reason: 'bad_finding' };
    const o = f as Record<string, unknown>;
    const keys = Object.keys(o).sort().join(',');
    if (keys !== 'evidence,rule_id,status') return { ok: false, reason: 'extra_keys' };
    if (typeof o.rule_id !== 'string' || !ids.has(o.rule_id)) return { ok: false, reason: 'unknown_rule_id' };
    if (seen.has(o.rule_id)) return { ok: false, reason: 'duplicate_rule_id' };
    if (o.status !== 'pass' && o.status !== 'warn' && o.status !== 'fail') return { ok: false, reason: 'bad_status' };
    seen.add(o.rule_id);

    let evidence: string | null = null;
    if (o.evidence !== null) {
      if (typeof o.evidence !== 'string') return { ok: false, reason: 'bad_evidence' };
      const e = o.evidence.trim();
      if (e.length > 300) return { ok: false, reason: 'evidence_too_long' };
      // The excerpt must be the visitor's own words. A sentence the model made up is not in their text.
      if (e && !haystack.includes(norm(e))) return { ok: false, reason: 'evidence_not_in_source' };
      evidence = e || null;
    }
    strippedOfEvidence.push(o.rule_id, o.status);
    verdicts.push({ rule_id: o.rule_id, status: o.status, evidence });
  }

  // A rule the model left out is simply not judged (the caller shows it rule-only). A reply that judges nothing is not usable.
  if (verdicts.length === 0) return { ok: false, reason: 'no_findings' };
  // The only free text allowed through is an excerpt that is verbatim in the visitor's own text (checked above), so advice cannot
  // ride in an excerpt. This scan also covers the ids and statuses, and is the check callers can reuse on any model-derived string.
  if (containsSuggestedWording(strippedOfEvidence.join(' '))) return { ok: false, reason: 'suggested_wording' };
  return { ok: true, verdicts };
}
