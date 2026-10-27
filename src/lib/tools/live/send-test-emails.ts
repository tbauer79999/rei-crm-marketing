// Sends ONE real alert email (to Tom, as the demo alerts) and ONE real report email (to the address you give) through the SurFox AI app.
//
//   vercel env pull .env.preview --environment=preview
//   npx tsx --env-file=.env.preview src/lib/tools/live/send-test-emails.ts you@yourdomain.com
//
// Needs TOOLS_MODEL_URL and TOOLS_MODEL_SECRET. The alert goes to the app's alert address, whatever address you pass.

import { leadAppMailer } from '../mail';

async function main() {
  const to = process.argv[2];
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) throw new Error('Usage: send-test-emails.ts you@yourdomain.com');
  const stamp = new Date().toISOString();
  for (const account of ['report', 'alert'] as const) {
    const res = await leadAppMailer(account, {
      to,
      subject: `10DLC checker test (${account} account) ${stamp}`,
      text: `Test email sent on the ${account} account at ${stamp}.\n\nCheck that it arrived, who it is From, and (for the report) that Reply goes to the sales address.`,
    });
    console.log(`${account}: ${res.ok ? 'sent' : `FAILED (${res.error})`}`);
    if (!res.ok) process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
