import type { CheckResult } from './checks';

// The privacy-policy rules that all describe one gap: no statement that mobile numbers / SMS opt-in data are not sold or shared.
// Shared by the results screen and the unlock email so both say the same thing.
export const SHARING_RULES = new Set(['R6-Q2', 'R6-Q3', 'R6-Q6', 'R6-Q7', 'R6-Q8', 'R6-Q9', 'BW-29', 'BW-30']);
export const SHARING_MISS = "Missing: say you don't sell or share mobile numbers or SMS opt-in data with third parties.";
export const SHARING_SENTENCE = 'We do not sell or share your SMS opt-in data or personal information with third parties for marketing purposes.';
export const SHARING_CHECKLIST = [
  'Add that sentence to your privacy policy.',
  'Publish the page and re-check the URL on getsurfox.com/tools.',
  'Keep the policy linked from your SMS opt-in / CTA.',
];
export const SHARING_CLOSING = 'SurFox AI diagnoses 10DLC gaps. It does not file or fix registration for you.';

export function hasSharingGap(checks: Pick<CheckResult, 'check' | 'findings'>[]): boolean {
  return checks.some((c) => c.check === 'privacy_policy' && c.findings.some((f) => f.status === 'warn' && SHARING_RULES.has(f.rule_id)));
}
