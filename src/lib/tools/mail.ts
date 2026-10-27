// Two separate sending accounts, each on its own free tier (Resend: 100 emails/day, 3,000/month). Alerts to Tom use ONLY the alert
// key and visitor reports use ONLY the report key, so alert volume can never use up the visitors' quota.

export type MailAccount = 'alert' | 'report';
export type MailMessage = { to: string; subject: string; text: string; replyTo?: string };
export type MailResult = { ok: true } | { ok: false; limit: boolean; error: string };
export type Mailer = (account: MailAccount, msg: MailMessage) => Promise<MailResult>;

function credentials(account: MailAccount): { key: string | undefined; from: string | undefined } {
  return account === 'alert'
    ? { key: process.env.TOOLS_ALERT_EMAIL_KEY, from: process.env.TOOLS_ALERT_EMAIL_FROM }
    : { key: process.env.TOOLS_REPORT_EMAIL_KEY, from: process.env.TOOLS_REPORT_EMAIL_FROM };
}

export const resendMailer: Mailer = async (account, msg) => {
  const { key, from } = credentials(account);
  if (!key || !from) return { ok: false, limit: false, error: `${account} email is not configured` };
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ from, to: [msg.to], subject: msg.subject, text: msg.text, ...(msg.replyTo ? { reply_to: msg.replyTo } : {}) }),
      signal: AbortSignal.timeout(10_000),
    });
    if (res.ok) return { ok: true };
    const body = await res.text().catch(() => '');
    // Resend answers 429 when a rate or daily quota is hit.
    const limit = res.status === 429 && /quota|daily|limit/i.test(body);
    return { ok: false, limit, error: `resend ${res.status} ${body.slice(0, 160)}` };
  } catch (e) {
    return { ok: false, limit: false, error: (e as Error).message };
  }
};
