import { whatBroke, type CheckResult } from './checks';
import { CHECK_LABELS, OFFER, SITE_ORIGIN } from './config';
import { outboundUrl, type Attribution } from './attribution';
import { hasSharingGap, SHARING_CHECKLIST, SHARING_CLOSING, SHARING_RULES, SHARING_SENTENCE } from './privacy-gap';

const STATUS_WORD = { pass: 'Pass', warn: 'Warn', fail: 'Fail', gray: 'Not checked' } as const;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// What is left to report once the sharing gap is covered by the fix sentence: every other warn or fail, in sections the visitor filled in.
// This is the in-depth part of the email, because the page only shows the one plain-English miss before the email is given.
type Issue = { rule_id: string; word: string; broke: string | null; quote: string; source: string; verified: string; evidence: string | null };
type IssueGroup = { label: string; issues: Issue[] };

function issueGroups(checks: CheckResult[]): IssueGroup[] {
  const groups: IssueGroup[] = [];
  for (const c of checks) {
    if (c.reason === 'no_input') continue;
    const issues = c.findings
      .filter((f) => (f.status === 'warn' || f.status === 'fail') && !(c.check === 'privacy_policy' && SHARING_RULES.has(f.rule_id)))
      .map((f) => ({ rule_id: f.rule_id, word: STATUS_WORD[f.status], broke: whatBroke(c.check, f, true), quote: f.official_quote, source: f.source_url, verified: f.verified_date, evidence: f.evidence || null }));
    if (issues.length > 0) groups.push({ label: CHECK_LABELS[c.check], issues });
  }
  return groups;
}

function issuesText(groups: IssueGroup[]): string[] {
  if (groups.length === 0) return [];
  const out: string[] = ['Everything else we found:', ''];
  for (const g of groups) {
    out.push(g.label);
    for (const i of g.issues) {
      out.push(`  [${i.word}] ${i.rule_id}`);
      if (i.broke) out.push(`  What broke it: ${i.broke}`);
      out.push(`  What the rule requires: "${i.quote}"`);
      out.push(`  Source: ${i.source} (verified ${i.verified})`);
      if (i.evidence) out.push(`  From your text: "${i.evidence}"`);
      out.push('');
    }
  }
  return out;
}

function issuesHtml(groups: IssueGroup[]): string {
  if (groups.length === 0) return '';
  const body = groups
    .map(
      (g) =>
        `<p style="margin: 16px 0 6px; font-weight: 600;">${esc(g.label)}</p>` +
        g.issues
          .map(
            (i) =>
              `<div style="margin: 0 0 14px; padding: 10px 14px; border-left: 3px solid #e6c27a; background-color: #fafafa; font-size: 14px;">` +
              `<div style="font-weight: 600;">${esc(i.word)}: ${esc(i.rule_id)}</div>` +
              (i.broke ? `<div style="margin-top: 4px;">${esc(i.broke)}</div>` : '') +
              `<div style="margin-top: 4px; color: #475569;">The rule says: &ldquo;${esc(i.quote)}&rdquo;</div>` +
              `<div style="margin-top: 4px; color: #64748b;">Source: <a href="${esc(i.source)}" style="color: #4f46e5;">${esc(i.source)}</a> (verified ${esc(i.verified)})</div>` +
              (i.evidence ? `<div style="margin-top: 4px; color: #64748b;">From your text: &ldquo;${esc(i.evidence)}&rdquo;</div>` : '') +
              `</div>`,
          )
          .join(''),
    )
    .join('');
  return `<p style="margin: 24px 0 4px; font-size: 17px; font-weight: 600;">Everything else we found</p>${body}`;
}

// Deliberately light: Gmail sorts banner-and-button emails into Promotions, where few people look. This reads like a normal note
// (small logo, plain text, plain links) so it is more likely to reach the Primary tab. Inline styles only, because email clients ignore the rest.
// Fixed copy and our own share link are used as is; everything that came from the visitor's text or the rulebook goes through esc().
function buildPrivacyFixHtml(shareId: string, groups: IssueGroup[]): string {
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
    ${issuesHtml(groups)}
    <p style="margin: 24px 0 20px;">Your result: <a href="${link}" style="color: #4f46e5;">${link}</a></p>
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
  // The visitor unlocked the privacy fix: the fix first, then every other issue found (the page held those back until now).
  if (hasSharingGap(checks)) {
    const groups = issueGroups(checks);
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
        ...issuesText(groups),
        `Your result: ${shareUrl(shareId)}`,
        '',
        SHARING_CLOSING,
      ].join('\n'),
      html: buildPrivacyFixHtml(shareId, groups),
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
