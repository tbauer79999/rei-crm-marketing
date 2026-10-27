// Sends ONE real email through each Resend account, to the address you give, so you can check delivery, the From address, and SPF/DKIM.
//
//   vercel env pull .env.preview --environment=preview
//   npx tsx --env-file=.env.preview src/lib/tools/live/send-test-emails.ts you@yourdomain.com
//
// The "report" email goes out on TOOLS_REPORT_EMAIL_KEY, the "alert" email on TOOLS_ALERT_EMAIL_KEY. Each uses only its own account.

import { resendMailer } from '../mail';

async function main() {
  const to = process.argv[2];
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) throw new Error('Usage: send-test-emails.ts you@yourdomain.com');
  const stamp = new Date().toISOString();
  for (const account of ['report', 'alert'] as const) {
    const res = await resendMailer(account, {
      to,
      subject: `10DLC checker test (${account} account) ${stamp}`,
      text: `Test email sent on the ${account} account at ${stamp}.\n\nCheck that the From address is on the ${account} sending domain and that SPF and DKIM show as pass in "Show original" / "View message source".`,
    });
    console.log(`${account}: ${res.ok ? 'sent' : `FAILED (${res.error})`}`);
    if (!res.ok) process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
