// Live end-to-end run of the real pipeline on real websites: fetch (SSRF-guarded) -> real rulebook -> real model call through the SurFox AI
// app. Nothing is written to any database and no email is sent. Costs real model money (about a few cents a site).
//
//   vercel env pull .env.preview --environment=preview
//   npx tsx --env-file=.env.preview src/lib/tools/live/ten-sites.ts            (the default 10 sites)
//   npx tsx --env-file=.env.preview src/lib/tools/live/ten-sites.ts a.com b.com (your own list)
//
// Needs TOOLS_MODEL_URL and TOOLS_MODEL_SECRET. Prints, for every site, the pages read, the status of the four checks, and every
// non-pass finding with its rule_id.

import { runChecks } from '../checks';
import { loadRulebook } from '../content-gate';
import { leadAppModelClient } from '../model';
import { FetchError } from '../net-guard';
import { scanWebsite } from '../scan';

const DEFAULT_SITES = ['remax.com', 'compass.com', 'opendoor.com', 'offerpad.com', 'redfin.com', 'servicetitan.com', 'housecallpro.com', 'kw.com', 'zillow.com', 'angi.com'];

async function main() {
  const rb = loadRulebook();
  if (!rb.ok) throw new Error(`rulebook is not usable: ${rb.reason}`);
  if (!process.env.TOOLS_MODEL_URL || !process.env.TOOLS_MODEL_SECRET) throw new Error('TOOLS_MODEL_URL and TOOLS_MODEL_SECRET must be set');
  const sites = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_SITES;
  let totalCost = 0;
  let ok = 0;

  for (const site of sites) {
    const t0 = Date.now();
    console.log(`\n=== ${site}`);
    try {
      const scanned = await scanWebsite(site);
      const run = await runChecks({ inputs: scanned.inputs, signals: scanned.signals, rulebook: rb.data, client: leadAppModelClient });
      const cost = run.usage.reduce((a, u) => a + u.costUsd, 0);
      totalCost += cost;
      ok++;
      console.log(`pages: ${scanned.pages.join(' | ')}`);
      console.log(`took ${((Date.now() - t0) / 1000).toFixed(1)}s, model calls ${run.modelCalls}, failures ${run.modelFailures}, cost $${cost.toFixed(4)}`);
      for (const c of run.checks) {
        console.log(`  ${c.label}: ${c.status}${c.reason ? ` (${c.reason})` : ''}`);
        for (const f of c.findings.filter((x) => x.status === 'fail' || x.status === 'warn')) console.log(`      ${f.status.toUpperCase()} ${f.rule_id}${f.evidence ? `  <- "${f.evidence.slice(0, 80)}"` : ''}`);
      }
    } catch (e) {
      const code = e instanceof FetchError ? `${e.code}${e.message !== e.code ? ` ${e.message}` : ''}` : (e as Error).message;
      console.log(`  could not scan: ${code}  (the visitor would see the friendly screen and the paste box)`);
    }
  }
  console.log(`\nDone. ${ok}/${sites.length} scanned, total model cost $${totalCost.toFixed(4)}.`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
