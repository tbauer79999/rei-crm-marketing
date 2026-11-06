import type { CheckResult, Finding, SummaryCheck } from '../../../lib/tools/checks';
import type { Status } from '../../../lib/tools/config';
import { SHARING_CHECKLIST, SHARING_MISS, SHARING_RULES, SHARING_SENTENCE } from '../../../lib/tools/privacy-gap';

// Presentational only (no hooks), so the same view renders in the checker, the full report, and the server-rendered share page.
// It shows sourced rules and the visitor's own excerpts. It never shows wording written for the visitor's business.

type ViewFinding = Omit<Finding, 'evidence'> & { evidence?: string | null };
export type ViewCheck = Omit<CheckResult | SummaryCheck, 'findings'> & { findings: ViewFinding[]; hiddenFindings?: number };

const STATUS: Record<Status, { word: string; icon: string; cls: string }> = {
  pass: { word: 'Pass', icon: '✓', cls: 'bg-[#e8f6ee] text-[#0f6b3a] border-[#9fd5b4]' },
  warn: { word: 'Warn', icon: '!', cls: 'bg-[#fdf1d8] text-[#7a4b00] border-[#e6c27a]' },
  fail: { word: 'Fail', icon: '×', cls: 'bg-[#fde8e8] text-[#9b1c1c] border-[#eba3a3]' },
  gray: { word: 'Not checked', icon: '–', cls: 'bg-[#eceef1] text-[#4a5160] border-[#c4c9d2]' },
};

export function StatusBadge({ status }: { status: Status }) {
  const s = STATUS[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-semibold ${s.cls}`}>
      <span aria-hidden="true">{s.icon}</span>
      {s.word}
    </span>
  );
}

function host(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function FindingBlock({ f }: { f: ViewFinding }) {
  return (
    <li className="rounded-xl border border-[var(--line)] bg-white p-4">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={f.status} />
        <span className="text-xs text-[#5a626e]">Rule {f.rule_id}</span>
      </div>
      {f.what_broke ? (
        <>
          <h4 className="mt-3 text-sm font-semibold text-[var(--ink)]">What broke it</h4>
          <p className="mt-1 text-[15px] leading-relaxed text-[var(--ink)]">{f.what_broke}</p>
        </>
      ) : null}
      <h4 className="mt-3 text-sm font-semibold text-[var(--ink)]">What the rule requires</h4>
      <blockquote className="mt-1 border-l-4 border-[var(--cyan-deep)] pl-3 text-[15px] leading-relaxed text-[var(--ink)]">{f.official_quote}</blockquote>
      <p className="mt-2 text-sm text-[#5a626e]">
        Source:{' '}
        <a className="font-medium text-[#06626f] underline underline-offset-2" href={f.source_url} target="_blank" rel="noopener noreferrer">
          {host(f.source_url)}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        , verified {f.verified_date}
      </p>
      {f.source_note ? <p className="mt-1 text-sm text-[#5a626e]">Note: {f.source_note}</p> : null}
      {f.evidence ? (
        <p className="mt-2 text-sm text-[#5a626e]">
          From your text: <q>{f.evidence}</q>
        </p>
      ) : null}
    </li>
  );
}

function SharingGap({ findings, unlocked }: { findings: ViewFinding[]; unlocked: boolean }) {
  return (
    <div className="mt-3 rounded-xl border border-[var(--line)] bg-white p-4">
      <p className="text-[15px] font-semibold text-[var(--ink)]">{SHARING_MISS}</p>
      {unlocked ? (
        <>
          <p className="mt-3 text-sm font-semibold text-[var(--ink)]">Suggested sentence to paste into your policy</p>
          <p className="mt-1 border-l-4 border-[var(--cyan-deep)] pl-3 text-[15px] leading-relaxed text-[var(--ink)]">{SHARING_SENTENCE}</p>
          <p className="mt-3 text-sm font-semibold text-[var(--ink)]">Short fix checklist</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-[var(--ink)]">
            {SHARING_CHECKLIST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-2 text-sm text-[#5a626e]">Enter your email below to unlock the suggested sentence and a short fix checklist.</p>
      )}
      <details className="mt-3">
        <summary className="cursor-pointer text-sm font-medium text-[#06626f]">Show rule details</summary>
        <ul className="mt-3 space-y-3">
          {findings.filter((f) => unlocked || f.rule_id !== 'R6-Q6').map((f) => ( // R6-Q6's quote is the suggested sentence itself, so it stays behind the email unlock
            <FindingBlock key={f.rule_id} f={f} />
          ))}
        </ul>
      </details>
    </div>
  );
}

export default function ResultView({ checks, showUnlockHint, unlocked = false }: { checks: ViewCheck[]; showUnlockHint?: boolean; unlocked?: boolean }) {
  // Sections with nothing pasted are hidden, not shown as "Not checked".
  const visible = checks.filter((c) => c.reason !== 'no_input');
  return (
    <div className="space-y-4">
      {visible.map((c) => {
        const collapse = c.check === 'privacy_policy' ? c.findings.filter((f) => f.status === 'warn' && SHARING_RULES.has(f.rule_id)) : [];
        const rest = collapse.length > 0 ? c.findings.filter((f) => !collapse.includes(f)) : c.findings;
        // Before the email: the privacy section shows the one plain-English miss and a count, not every rule card.
        const locked = !unlocked && collapse.length > 0;
        const lockedCount = rest.filter((f) => f.status !== 'pass').length;
        return (
          <section key={c.check} aria-labelledby={`check-${c.check}`} className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 id={`check-${c.check}`} className="text-lg font-semibold text-[var(--ink)]">
                {c.label}
              </h3>
              <StatusBadge status={c.status} />
            </div>
            {c.message ? <p className="mt-2 text-[15px] text-[#4a5160]">{c.message}</p> : null}
            {collapse.length > 0 ? <SharingGap findings={collapse} unlocked={unlocked} /> : null}
            {locked ? (
              lockedCount > 0 ? <p className="mt-3 text-sm text-[#5a626e]">{lockedCount} more privacy policy item{lockedCount === 1 ? '' : 's'} need attention. Email unlocks the details.</p> : null
            ) : rest.length > 0 ? (
              <ul className="mt-3 space-y-3">{rest.map((f) => <FindingBlock key={f.rule_id} f={f} />)}</ul>
            ) : null}
            {showUnlockHint && c.hiddenFindings && c.hiddenFindings > 0 ? (
              <p className="mt-3 text-sm text-[#5a626e]">
                {c.hiddenFindings} more rule{c.hiddenFindings === 1 ? '' : 's'} checked. Email unlocks the full report.
              </p>
            ) : null}
          </section>
        );
      })}
      <p className="text-sm text-[#5a626e]">This tool diagnoses. It does not file or fix 10DLC for you.</p>
    </div>
  );
}
