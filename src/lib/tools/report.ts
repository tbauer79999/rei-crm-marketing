import type { CheckResult } from './checks';
import { CHECK_LABELS, OFFER, SITE_ORIGIN } from './config';
import { outboundUrl, type Attribution } from './attribution';

const STATUS_WORD = { pass: 'Pass', warn: 'Warn', fail: 'Fail', gray: 'Not checked' } as const;

export function shareUrl(shareId: string): string {
  return `${SITE_ORIGIN}/tools/r/${shareId}`;
}

// Plain-text full report. It carries the same sourced rules the page shows, plus the visitor's own excerpts. It never contains
// replacement wording, and its last line is the approved closing line.
export function buildReportEmail(args: { site: string | null; checks: CheckResult[]; shareId: string; attribution: Attribution }): { subject: string; text: string } {
  const { site, checks, shareId, attribution } = args;
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
