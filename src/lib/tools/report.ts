import type { CheckResult } from './checks';
import { CHECK_LABELS, OFFER, SITE_ORIGIN } from './config';
import { outboundUrl, type Attribution } from './attribution';
import { hasSharingGap, SHARING_CHECKLIST, SHARING_CLOSING, SHARING_SENTENCE } from './privacy-gap';

const STATUS_WORD = { pass: 'Pass', warn: 'Warn', fail: 'Fail', gray: 'Not checked' } as const;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Same look as the platform's lead emails (score-lead): navy header with the logo, white card on light grey, one rounded button, small footer.
// Inline styles and tables only, because email clients ignore everything else. Every value is a fixed string from this codebase or the
// result link built from our own share id, so nothing the visitor typed ends up in the HTML.
function buildPrivacyFixHtml(shareId: string): string {
  const LOGO = 'https://wuuqrdlfgkasnwydyvgk.supabase.co/storage/v1/object/public/branding/logo.png';
  const items = SHARING_CHECKLIST.map((t) => `<li style="margin: 0 0 8px;">${esc(t)}</li>`).join('');
  return `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f9fafb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
        <tr>
          <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%); background-color: #0f172a; padding: 32px 40px; text-align: center; border-top-left-radius: 12px; border-top-right-radius: 12px;">
            <img src="${LOGO}" alt="SurFox AI" width="120" style="display: block; margin: 0 auto 16px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">Your 10DLC privacy fix</h1>
            <p style="margin: 8px 0 0; color: #94a3b8; font-size: 15px;">One sentence to add to your privacy policy</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px 40px 8px;">
            <p style="margin: 0 0 12px; color: #1e293b; font-size: 16px;">Here's what to paste into your privacy policy:</p>
            <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; border-radius: 8px; padding: 16px 20px; color: #1e293b; font-size: 16px; line-height: 1.5;">${esc(SHARING_SENTENCE)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 24px 40px 8px;">
            <h3 style="margin: 0 0 12px; color: #1e293b; font-size: 16px; font-weight: 600;">Short checklist</h3>
            <ol style="margin: 0; padding-left: 20px; color: #1e293b; font-size: 15px; line-height: 1.5;">${items}</ol>
          </td>
        </tr>
        <tr>
          <td style="padding: 24px 40px 32px; text-align: center;">
            <a href="${esc(shareUrl(shareId))}" style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 15px;">View your result</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 24px 40px; text-align: center; background-color: #f9fafb; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px;">${esc(SHARING_CLOSING)}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">SurFox AI · <a href="mailto:sales@getsurfox.com?subject=Unsubscribe" style="color: #94a3b8;">Unsubscribe</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function shareUrl(shareId: string): string {
  return `${SITE_ORIGIN}/tools/r/${shareId}`;
}

// Plain-text full report. It carries the same sourced rules the page shows, plus the visitor's own excerpts. It never contains
// replacement wording, and its last line is the approved closing line.
export function buildReportEmail(args: { site: string | null; checks: CheckResult[]; shareId: string; attribution: Attribution }): { subject: string; text: string; html?: string } {
  const { site, checks, shareId, attribution } = args;
  // The visitor unlocked the privacy fix: send exactly that, short.
  if (hasSharingGap(checks)) {
    return {
      subject: 'Your 10DLC privacy fix',
      text: [
        "Here's what to paste into your privacy policy:",
        '',
        SHARING_SENTENCE,
        '',
        'Short checklist:',
        ...SHARING_CHECKLIST.map((t, i) => `${i + 1}. ${t}`),
        '',
        `Your result: ${shareUrl(shareId)}`,
        '',
        SHARING_CLOSING,
      ].join('\n'),
      html: buildPrivacyFixHtml(shareId),
    };
  }
  const lines: string[] = [`Your 10DLC registration check${site ? ` for ${site}` : ''}`, ''];
  for (const c of checks) {
    lines.push(`${CHECK_LABELS[c.check]}: ${STATUS_WORD[c.status]}`);
    if (c.message) lines.push(c.message);
    for (const f of c.findings) {
      lines.push(`  [${STATUS_WORD[f.status]}] ${f.rule_id}`);
      lines.push(`  What the rule requires: "${f.official_quote}"`);
      lines.push(`  Source: ${f.source_url} (verified ${f.verified_date})`);
      if (f.evidence) lines.push(`  From your text: "${f.evidence}"`);
      lines.push('');
    }
    lines.push('');
  }
  lines.push(`Your result: ${shareUrl(shareId)}`);
  lines.push(`See SurFox AI qualify a lead: ${outboundUrl(OFFER.primaryPath, attribution, site)}`);
  lines.push('');
  lines.push(OFFER.emailClosingLine);
  return { subject: `Your 10DLC registration check${site ? ` for ${site}` : ''}`, text: lines.join('\n') };
}

export function buildQueuedFailureEmail(site: string): { subject: string; text: string } {
  return {
    subject: `We could not read ${site}`,
    text: [
      `Website scans are back, but we could not read ${site} this time.`,
      '',
      `You can paste your text into the checker instead: ${SITE_ORIGIN}/tools`,
      '',
      OFFER.emailClosingLine,
    ].join('\n'),
  };
}
