import assert from 'node:assert/strict';
import test from 'node:test';
import { runChecks, summarize, whatBroke, withWhatBroke, type CheckResult } from '../checks';
import { loadRulebook } from '../content-gate';
import type { ModelRequest } from '../model';
import { client, ids } from './helpers';

// These use the REAL rulebook (163 rules) and a stand-in for the model, so they test the plumbing: which finding leads a card, that every
// failed rule stays visible, and the "what broke it" sentence. They cannot show how the live model judges a policy; for that, run
// src/lib/tools/live/privacy-probe.ts against the real model.

const rb = loadRulebook();
if (!rb.ok) throw new Error('the shipped rulebook must load for these tests');
const rulebook = rb.data;

const SHARES = 'We may share your information with partners.';
const CARVE_OUT = 'Mobile information and SMS opt-in data will not be shared with third parties or affiliates for marketing.';
const NO_SHARING_RULES = ['R6-Q6', 'R6-Q3', 'BW-29', 'BW-30', 'R6-Q9'];

// A stand-in "model" that judges the privacy rules the way a careful reviewer would: the no-sharing rules fail when the text allows
// sharing with partners/third parties and has no carve-out for mobile numbers and SMS opt-in data, and pass when the carve-out is there.
// Every other rule (for example the one about where the policy is linked) fails, as it did in the real result.
function privacyReviewer(req: ModelRequest): string {
  const text = req.user.split('TEXT:')[1] ?? '';
  const allowsSharing = /\bshare\b[^.]*\b(partners|third parties|affiliates)\b/i.test(text);
  const carveOut = /(mobile information|sms opt-in data|opt-in data)[^.]*\bnot\b[^.]*\bshared\b/i.test(text);
  const evidence = allowsSharing ? SHARES : null;
  return JSON.stringify({
    findings: ids(req).map((rule_id) => {
      if (NO_SHARING_RULES.includes(rule_id)) return { rule_id, status: allowsSharing && !carveOut ? 'fail' : 'pass', evidence: allowsSharing && !carveOut ? evidence : null };
      return { rule_id, status: 'fail', evidence: null };
    }),
  });
}

async function privacy(text: string): Promise<CheckResult> {
  const run = await runChecks({ inputs: { privacy_policy: text }, rulebook, client: client({ reply: privacyReviewer }) });
  return run.checks.find((c) => c.check === 'privacy_policy')!;
}
const card = (c: CheckResult, own = true) => summarize([c], { includeUserText: own })[0];

test('the tie-break theory: with every privacy rule failing, the card used to lead with R6-Q1 (first in the file); it now leads with the no-sharing rule', async () => {
  const all = await runChecks({ inputs: { privacy_policy: 'anything' }, rulebook, client: client({ status: 'fail' }) });
  const c = all.checks.find((k) => k.check === 'privacy_policy')!;
  const failed = c.findings.filter((f) => f.status === 'fail').map((f) => f.rule_id);
  assert.equal(failed[0], 'R6-Q1'); // file order: what the old "first of the worst" rule picked
  assert.ok(failed.length >= 10, 'many privacy rules fail at once, all tied on severity');

  const shown = card(c).findings.map((f) => f.rule_id);
  assert.equal(shown[0], 'R6-Q6');
  assert.deepEqual(shown.slice(0, 5), ['R6-Q6', 'R6-Q3', 'BW-29', 'BW-30', 'R6-Q9']);
  // the link rules come last, and nothing that failed is hidden
  assert.deepEqual(shown.slice(-3), ['R6-Q1', 'R6-Q4', 'R6-Q5']);
  assert.deepEqual([...shown].sort(), [...failed].sort());
});

test('R6-Q1 leads only when nothing more specific failed', async () => {
  const only = await runChecks({
    inputs: { privacy_policy: 'x' },
    rulebook,
    client: client({ reply: (req) => JSON.stringify({ findings: ids(req).map((rule_id) => ({ rule_id, status: rule_id === 'R6-Q1' || rule_id === 'R6-Q8' ? 'fail' : 'pass', evidence: null })) }) }),
  });
  const shown = card(only.checks.find((k) => k.check === 'privacy_policy')!).findings.map((f) => f.rule_id);
  assert.deepEqual(shown, ['R6-Q8', 'R6-Q1']); // R6-Q8 is not about linking, so it leads; R6-Q1 is still shown below it
  const alone = await runChecks({
    inputs: { privacy_policy: 'x' },
    rulebook,
    client: client({ reply: (req) => JSON.stringify({ findings: ids(req).map((rule_id) => ({ rule_id, status: rule_id === 'R6-Q1' ? 'fail' : 'pass', evidence: null })) }) }),
  });
  assert.deepEqual(card(alone.checks.find((k) => k.check === 'privacy_policy')!).findings.map((f) => f.rule_id), ['R6-Q1']);
});

test('"We may share your information with partners." fails the no-sharing rule, and that rule leads the card', async () => {
  const c = await privacy(SHARES);
  assert.equal(c.status, 'fail');
  for (const id of NO_SHARING_RULES) assert.equal(c.findings.find((f) => f.rule_id === id)!.status, 'fail', id);
  const top = card(c).findings[0];
  assert.equal(top.rule_id, 'R6-Q6');
  assert.equal(top.status, 'fail');
  const rule = rulebook.rules.find((r) => r.rule_id === 'R6-Q6')!;
  assert.equal(top.source_url, rule.source_url);
  assert.equal(top.verified_date, rule.verified_date);
  assert.equal(top.official_quote, rule.official_quote);
  assert.equal(top.what_broke, `Your privacy policy says "${SHARES}" and does not exclude mobile numbers or SMS opt-in data from that sharing.`);
});

test('the same text plus the mobile carve-out passes the no-sharing rules and they leave the failed list', async () => {
  const c = await privacy(`${SHARES} ${CARVE_OUT}`);
  for (const id of NO_SHARING_RULES) assert.equal(c.findings.find((f) => f.rule_id === id)!.status, 'pass', id);
  const shown = card(c).findings.map((f) => f.rule_id);
  for (const id of NO_SHARING_RULES) assert.ok(!shown.includes(id), `${id} should not be listed as failed`);
  assert.notEqual(shown[0], 'R6-Q1'); // something more specific than the link rule still leads, when anything else failed
});

// ---- the four inputs: one per card -------------------------------------------------------------------------------------------

const FOUR: [string, string][] = [
  ['campaign_description', 'We text customers.'],
  ['sample_messages', 'Hey, big sale this weekend!'],
  ['opt_in_wording', 'By submitting this form you agree to hear from us.'],
  ['privacy_policy', SHARES],
];
test('each of the four cards shows a "what broke it" sentence on every failed finding, and keeps rule ID, source and date', async () => {
  const inputs = Object.fromEntries(FOUR) as Record<string, string>;
  const failEverything = client({ reply: (req) => JSON.stringify({ findings: ids(req).map((rule_id) => ({ rule_id, status: 'fail', evidence: inputs[Object.keys(inputs).find((k) => req.user.includes(inputs[k])) ?? ''] ?? null })) }) });
  const run = await runChecks({ inputs, rulebook, client: failEverything });
  const cards = summarize(run.checks, { includeUserText: true });
  assert.equal(cards.length, 4);
  for (const c of cards) {
    assert.equal(c.status, 'fail', c.check);
    assert.ok(c.findings.length > 0, c.check);
    for (const f of c.findings) {
      assert.ok(f.what_broke && f.what_broke.length > 20, `${c.check} ${f.rule_id} has a what-broke sentence`);
      assert.ok(f.rule_id && f.source_url.startsWith('https://') && /^\d{4}-\d{2}-\d{2}$/.test(f.verified_date), `${c.check} ${f.rule_id} keeps rule id, source and date`);
    }
  }
  // it names the part of the text that triggered it
  const opt = cards.find((c) => c.check === 'opt_in_wording')!.findings[0];
  assert.match(opt.what_broke!, /By submitting this form you agree to hear from us\./);
});

test('"what broke it" sentences: wording for fail, partly met, nothing found, and the share-link version that never quotes the visitor', () => {
  const f = (over: Partial<Parameters<typeof whatBroke>[1]>) => ({ rule_id: 'X-1', status: 'fail' as const, official_quote: 'q', source_url: 'https://e.test', verified_date: '2026-10-27', evidence: null, ...over });
  assert.equal(whatBroke('opt_in_wording', f({ evidence: 'agree to hear from us' }), true), 'Your opt-in wording says "agree to hear from us", which does not meet the rule below.');
  assert.equal(whatBroke('sample_messages', f({}), true), 'We found nothing in your sample messages that meets the rule below.');
  assert.equal(whatBroke('campaign_description', f({ status: 'warn' }), true), 'Your campaign description only partly meets the rule below.');
  assert.equal(whatBroke('campaign_description', f({ status: 'warn', evidence: 'we text' }), true), 'Your campaign description says "we text", which only partly meets the rule below.');
  assert.equal(whatBroke('privacy_policy', f({ rule_id: 'R6-Q6' }), true), 'Your privacy policy does not say that mobile numbers and SMS opt-in data are not shared with third parties.');
  assert.equal(whatBroke('opt_in_wording', f({ status: 'pass' }), true), null);
  assert.equal(whatBroke('opt_in_wording', f({ status: 'gray' }), true), null);
  // share link: never the visitor's words
  const shared = whatBroke('opt_in_wording', f({ evidence: 'agree to hear from us' }), false)!;
  assert.ok(!shared.includes('agree to hear from us'));
  assert.equal(shared, 'We found nothing in the opt-in wording that meets the rule below.');
  // long excerpts are clipped
  assert.ok(whatBroke('opt_in_wording', f({ evidence: 'x'.repeat(300) }), true)!.length < 260);
  // the stored result is untouched by decorating
  const run = [{ check: 'opt_in_wording', label: 'x', status: 'fail', reason: null, message: null, findings: [f({})] }] as CheckResult[];
  withWhatBroke(run, true);
  assert.equal(run[0].findings[0].what_broke, undefined);
});
