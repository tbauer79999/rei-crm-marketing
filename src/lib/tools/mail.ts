// Email goes through the SurFox AI app (POST /api/public/tools-model/mail), which already sends the demo emails through Resend with its own
// verified sender domains. The website holds no email credentials, so there is nothing to set up here beyond the shared secret.
//
//   alert  -> to Tom at the same address and sender as the demo alerts. The app ignores any recipient we send for an alert.
//   report -> to the visitor, from the visitor sender (sales), Reply-To the sales address.
//
// The two kinds are counted separately in our own database (tools_sends) so alert volume can never use up the report allowance.

export type MailAccount = 'alert' | 'report';
export type MailMessage = { to?: string; subject: string; text: string };
export type MailResult = { ok: true } | { ok: false; limit: boolean; error: string };
export type Mailer = (account: MailAccount, msg: MailMessage) => Promise<MailResult>;

export const leadAppMailer: Mailer = async (account, msg) => {
  const base = process.env.TOOLS_MODEL_URL;
  const secret = process.env.TOOLS_MODEL_SECRET;
  if (!base || !secret) return { ok: false, limit: false, error: 'TOOLS_MODEL_URL and TOOLS_MODEL_SECRET are not set' };
  try {
    const res = await fetch(`${base.replace(/\/+$/, '')}/api/public/tools-model/mail`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-tools-model-secret': secret },
      body: JSON.stringify({ kind: account, ...(account === 'report' ? { to: msg.to } : {}), subject: msg.subject, text: msg.text }),
      signal: AbortSignal.timeout(15_000),
      cache: 'no-store',
    });
    if (res.ok) return { ok: true };
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    return { ok: false, limit: res.status === 429, error: `mail service ${res.status} ${body.error ?? ''}`.trim() };
  } catch (e) {
    return { ok: false, limit: false, error: (e as Error).message };
  }
};
