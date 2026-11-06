import type { CheckResult } from './checks';
import { CHECK_LABELS, OFFER, SITE_ORIGIN } from './config';
import { outboundUrl, type Attribution } from './attribution';
import { hasSharingGap, SHARING_CHECKLIST, SHARING_CLOSING, SHARING_SENTENCE } from './privacy-gap';

const STATUS_WORD = { pass: 'Pass', warn: 'Warn', fail: 'Fail', gray: 'Not checked' } as const;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Deliberately light: Gmail sorts banner-and-button emails into Promotions, where few people look. This reads like a normal note
// (small logo, plain text, one plain link) so it is more likely to reach the Primary tab. Inline styles only, because email clients ignore the rest.
// Every value is a fixed string from this codebase or the result link built from our own share id, so nothing the visitor typed ends up in the HTML.
function buildPrivacyFixHtml(shareId: string): string {
  const LOGO = 'https://wuuqrdlfgkasnwydyvgk.supabase.co/storage/v1/object/public/branding/logo.png';
  const items = SHARING_CHECKLIST.map((t) => `<li style="margin: 0 0 6px;">${esc(t)}</li>`).join('');
  const link = esc(shareUrl(shareId));
  return `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color: #1e293b; font-size: 16px; line-height: 1.5; background-color: #ffffff;">
  <div style="max-width: 560px;">
    <img src="${LOGO}" alt="SurFox AI" width="90" style="display: block; margin: 0 0 20px;">
    <p style="margin: 0 0 12px;">Here's what to paste into your privacy policy:</p>
    <p style="margin: 0 0 20px; padding: 12px 16px; border-left: 4px solid #6366f1; background-color: #f8fafc;">${esc(SHARING_SENTENCE)}</p>
    <p style="margin: 0 0 8px;">Short checklist:</p>
    <ol style="margin: 0 0 20px; padding-left: 20px;">${items}</ol>
    <p style="margin: 0 0 20px;">Your result: <a href="${link}" style="color: #4f46e5;">${link}</a></p>
    <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">${esc(SHARING_CLOSING)}</p>
    <p style="margin: 0; color: #94a3b8; font-size: 12px;">SurFox AI · <a href="mailto:sales@getsurfox.com?subject=Unsubscribe" style="color: #94a3b8;">Unsubscribe</a></p>
  </div>
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
