// Runs the two privacy-policy test texts through the REAL model (via the SurFox AI app) with the real rulebook, and prints which privacy rules
// failed and which one leads the card. Writes nothing to any database and sends no email. Costs about a cent or two.
//
//   vercel env pull .env.preview --environment=preview
//   npx tsx --env-file=.env.preview src/lib/tools/live/privacy-probe.ts

import { runChecks, summarize } from '../checks';
import { loadRulebook } from '../content-gate';
import { leadAppModelClient } from '../model';

const TEXTS: [string, string][] = [
  ['shares with partners', 'We may share your information with partners.'],
  ['same, plus the carve-out', 'We may share your information with partners. Mobile information and SMS opt-in data will not be shared with third parties or affiliates for marketing.'],
];

async function main() {
  const rb = loadRulebook();
  if (!rb.ok) throw new Error(`rulebook is not usable: ${rb.reason}`);
  for (const [label, text] of TEXTS) {
    const run = await runChecks({ inputs: { privacy_policy: text }, rulebook: rb.data, client: leadAppModelClient });
    const c = run.checks.find((k) => k.check === 'privacy_policy')!;
    const card = summarize([c], { includeUserText: true })[0];
    console.log(`\n=== ${label}\n"${text}"`);
    console.log(`check status: ${c.status}${c.reason ? ` (${c.reason})` : ''}`);
    console.log(`failed or partly met, in card order: ${card.findings.map((f) => `${f.rule_id}(${f.status})`).join(', ') || 'none'}`);
    console.log(`passed: ${c.findings.filter((f) => f.status === 'pass').map((f) => f.rule_id).join(', ') || 'none'}`);
    if (card.findings[0]) console.log(`leads with ${card.findings[0].rule_id}: ${card.findings[0].what_broke}`);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
