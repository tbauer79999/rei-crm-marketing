import assert from 'node:assert/strict';
import test from 'node:test';
import { countStatuses, runChecks, summarize } from '../checks';
import { COPY } from '../config';
import { containsSuggestedWording, guardModelOutput } from '../output-guard';
import { costUsd } from '../model';
import { client, ids, TEST_RULEBOOK, verdictJson } from './helpers';

const rules = TEST_RULEBOOK.rules.filter((r) => r.check === 'opt_in_wording');
const text = 'I agree to receive texts from Acme. Reply STOP to opt out. Msg and data rates may apply.';

// ---- output check ---------------------------------------------------------------------------------------------------------

test('output check accepts a clean verdict with a verbatim excerpt', () => {
  const raw = JSON.stringify({ findings: [{ rule_id: 'T-OI-1', status: 'pass', evidence: 'Reply STOP to opt out' }, { rule_id: 'T-OI-2', status: 'fail', evidence: null }] });
  const r = guardModelOutput(raw, rules, text);
  assert.equal(r.ok, true);
});

test('output check blocks suggested or rewritten wording in every shape it could arrive in', () => {
  const cases: [string, string][] = [
    ['prose around the JSON', 'Here is my verdict: ' + verdictJson({ system: '', user: 'rule_id: T-OI-1\nrule_id: T-OI-2', maxTokens: 1 })],
    ['an extra key carrying advice', JSON.stringify({ findings: [], suggestion: 'You could say: I agree to receive texts.' })],
    ['an extra key on a finding', JSON.stringify({ findings: [{ rule_id: 'T-OI-1', status: 'fail', evidence: null, fix: 'Add this sentence: Reply STOP.' }, { rule_id: 'T-OI-2', status: 'pass', evidence: null }] })],
    ['an invented sentence in the excerpt field', JSON.stringify({ findings: [{ rule_id: 'T-OI-1', status: 'fail', evidence: 'By texting START you agree to receive messages from Acme.' }, { rule_id: 'T-OI-2', status: 'pass', evidence: null }] })],
    ['a code fence with commentary', 'Try rewording it:\n```json\n{"findings":[]}\n```'],
  ];
  for (const [name, raw] of cases) {
    const r = guardModelOutput(raw, rules, text);
    assert.equal(r.ok, false, name);
  }
});

test('output check rejects unknown rule ids, duplicates, bad statuses and over-long excerpts', () => {
  const bad = [
    { findings: [{ rule_id: 'MADE-UP', status: 'pass', evidence: null }] },
    { findings: [{ rule_id: 'T-OI-1', status: 'pass', evidence: null }, { rule_id: 'T-OI-1', status: 'fail', evidence: null }] },
    { findings: [{ rule_id: 'T-OI-1', status: 'maybe', evidence: null }] },
    { findings: [{ rule_id: 'T-OI-1', status: 'pass', evidence: 'x'.repeat(301) }] },
    { findings: [] },
  ];
  for (const b of bad) assert.equal(guardModelOutput(JSON.stringify(b), rules, text).ok, false, JSON.stringify(b).slice(0, 60));
});

test('the suggestion scan catches advice phrasing and leaves plain verdicts alone', () => {
  for (const s of ['You could say this instead', 'consider adding a line', 'Suggested wording: ...', 'replace it with a clearer sentence', 'Here is a sample wording']) assert.equal(containsSuggestedWording(s), true, s);
  for (const s of ['T-OI-1 pass', 'fail', 'warn']) assert.equal(containsSuggestedWording(s), false, s);
});

// ---- the four checks ------------------------------------------------------------------------------------------------------

test('a check with no sourced rule is gray with the "no official source" line, whatever the input', async () => {
  const onlyOptIn = { version: 't', rules: rules };
  const run = await runChecks({ inputs: { campaign_description: 'We sell widgets', sample_messages: 'Hi from Acme', opt_in_wording: text, privacy_policy: 'We never share data' }, rulebook: onlyOptIn, client: client() });
  const by = Object.fromEntries(run.checks.map((c) => [c.check, c]));
  for (const k of ['campaign_description', 'sample_messages', 'privacy_policy']) {
    assert.equal(by[k].status, 'gray', k);
    assert.equal(by[k].reason, 'no_source', k);
    assert.equal(by[k].message, COPY.grayNoSource);
    assert.equal(by[k].message, 'Not checked: no official source published.');
    assert.equal(by[k].findings.length, 0);
  }
  assert.equal(by.opt_in_wording.status, 'pass');
  assert.equal(run.modelCalls, 1); // the model is never asked about an unsourced check
});

test("rules tagged 'other' belong to no check and are never evaluated", async () => {
  const rb = { version: 't', rules: [...rules, { rule_id: 'X-1', check: 'other' as const, official_quote: 'q', source_url: 'https://example.com/x', verified_date: '2026-01-01' }] };
  const c = client();
  const run = await runChecks({ inputs: { opt_in_wording: text }, rulebook: rb, client: c });
  assert.ok(!c.calls.some((x) => x.user.includes('X-1')));
  assert.equal(run.checks.find((k) => k.check === 'opt_in_wording')!.findings.some((f) => f.rule_id === 'X-1'), false);
});

test('a check with a rule but no input is gray "no input" and costs nothing', async () => {
  const run = await runChecks({ inputs: {}, rulebook: TEST_RULEBOOK, client: client() });
  assert.ok(run.checks.every((c) => c.status === 'gray' && c.reason === 'no_input'));
  assert.equal(run.modelCalls, 0);
});

test('every finding carries the official quote and its source link, and the status is the worst finding', async () => {
  const c = client({ reply: (req) => JSON.stringify({ findings: ids(req).map((rule_id, i) => ({ rule_id, status: i === 0 ? 'pass' : 'fail', evidence: i === 0 ? 'Reply STOP to opt out' : null })) }) });
  const run = await runChecks({ inputs: { opt_in_wording: text }, rulebook: { version: 't', rules }, client: c });
  const oi = run.checks.find((k) => k.check === 'opt_in_wording')!;
  assert.equal(oi.status, 'fail');
  for (const f of oi.findings) {
    const rule = rules.find((r) => r.rule_id === f.rule_id)!;
    assert.equal(f.official_quote, rule.official_quote);
    assert.equal(f.source_url, rule.source_url);
    assert.equal(f.verified_date, rule.verified_date);
  }
});

test('blocked model output falls back to the rule-only result for that check', async () => {
  const c = client({ reply: () => 'You should write: I agree to receive texts.' });
  const run = await runChecks({ inputs: { opt_in_wording: text }, rulebook: { version: 't', rules }, client: c });
  const oi = run.checks.find((k) => k.check === 'opt_in_wording')!;
  assert.equal(oi.status, 'gray');
  assert.equal(oi.reason, 'output_blocked');
  assert.equal(oi.findings.length, rules.length);
  assert.ok(oi.findings.every((f) => f.status === 'gray' && f.official_quote && f.source_url));
  assert.ok(!JSON.stringify(oi).includes('I agree to receive texts.')); // nothing the model wrote reaches the result
});

test('a failing model call is reported per check, and the cost of successful calls is logged', async () => {
  const run = await runChecks({ inputs: { opt_in_wording: text }, rulebook: { version: 't', rules }, client: client({ fail: true }) });
  assert.equal(run.modelFailures, 1);
  assert.equal(run.checks.find((k) => k.check === 'opt_in_wording')!.reason, 'model_failed');
});

test('cost is computed from tokens and the pricing config', async () => {
  const run = await runChecks({ inputs: { opt_in_wording: text }, rulebook: { version: 't', rules }, client: client({ inputTokens: 2000, outputTokens: 500 }) });
  assert.equal(run.usage.length, 1);
  assert.equal(run.usage[0].inputTokens, 2000);
  assert.equal(run.usage[0].outputTokens, 500);
  assert.equal(run.usage[0].costUsd, costUsd('claude-haiku-4-5-20251001', 2000, 500));
  assert.equal(costUsd('claude-haiku-4-5-20251001', 1_000_000, 1_000_000), 6);
  assert.ok(costUsd('some-unknown-model', 1_000_000, 0) >= 5); // unknown models are billed high, so the cap errs safe
});

test('the summary hides evidence and all but the most serious finding', async () => {
  const c = client({ reply: (req) => verdictJson(req, 'fail', 'Reply STOP to opt out') });
  const run = await runChecks({ inputs: { opt_in_wording: text }, rulebook: { version: 't', rules }, client: c });
  const s = summarize(run.checks).find((k) => k.check === 'opt_in_wording')!;
  assert.equal(s.findings.length, 1);
  assert.equal(s.hiddenFindings, rules.length - 1);
  assert.ok(!JSON.stringify(s).includes('Reply STOP to opt out'));
  assert.deepEqual(countStatuses(run.checks), { pass: 0, warn: 0, fail: 1, gray: 3 });
});
