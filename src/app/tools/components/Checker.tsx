'use client';

import { useEffect, useRef, useState } from 'react';
import type { CheckResult } from '../../../lib/tools/checks';
import { CHECKS, CHECK_LABELS, type CheckId } from '../../../lib/tools/config';
import type { ScanView } from '../../../lib/tools/service';
import Offer from './Offer';
import ResultView, { StatusBadge } from './ResultView';
import { readFirstTouch, reportEvent } from './useAttribution';

type ApiError = { code: string; title: string; body: string; paste: boolean; queue_offer?: boolean };
type Mode = 'site' | 'paste';
type Phase = 'idle' | 'loading' | 'result' | 'error';

const PASTE_HELP: Record<CheckId, string> = {
  campaign_description: 'What your texts are for, as you would describe it on a registration.',
  sample_messages: 'One or more example texts you plan to send.',
  opt_in_wording: 'The wording people see where they agree to receive texts.',
  privacy_policy: 'The text of your privacy policy.',
};

const field = 'block w-full rounded-xl border border-[#8a92a0] bg-white px-4 py-3 text-base text-[var(--ink)] placeholder:text-[#6b7280] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan-deep)]';
const button = 'inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[var(--ink)] px-5 py-3 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan-deep)] disabled:opacity-60 sm:w-auto';

async function post<T>(path: string, body: unknown, timeoutMs = 42_000): Promise<T> {
  const res = await fetch(path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body), signal: AbortSignal.timeout(timeoutMs) });
  return (await res.json()) as T;
}

function ConsentBox({ id, text, checked, onChange }: { id: string; text: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-start gap-3">
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 h-6 w-6 shrink-0 accent-[var(--cyan-deep)]" />
      <label htmlFor={id} className="text-sm leading-relaxed text-[var(--ink)]">
        {text}
      </label>
    </div>
  );
}

function EmailForm({ submitLabel, consentText, busy, error, onSubmit }: { submitLabel: string; consentText: string; busy: boolean; error: string | null; onSubmit: (email: string, consent: boolean) => void }) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false); // unchecked by default
  const uid = useRef(`c${Math.random().toString(36).slice(2, 8)}`).current;
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, consent);
      }}
    >
      <div>
        <label htmlFor={`${uid}-email`} className="mb-1 block text-sm font-medium text-[var(--ink)]">
          Email address
        </label>
        <input id={`${uid}-email`} type="email" inputMode="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
      </div>
      <ConsentBox id={`${uid}-consent`} text={consentText} checked={consent} onChange={setConsent} />
      {error ? (
        <p role="alert" className="text-sm font-medium text-[#9b1c1c]">
          {error}
        </p>
      ) : null}
      <button type="submit" disabled={busy} className={button}>
        {busy ? 'Working...' : submitLabel}
      </button>
    </form>
  );
}

export default function Checker({ consentText }: { consentText: string | null }) {
  const [mode, setMode] = useState<Mode>('site');
  const [url, setUrl] = useState('');
  const [paste, setPaste] = useState<Record<CheckId, string>>({ campaign_description: '', sample_messages: '', opt_in_wording: '', privacy_policy: '' });
  const [phase, setPhase] = useState<Phase>('idle');
  const [scan, setScan] = useState<ScanView | null>(null);
  const [err, setErr] = useState<ApiError | null>(null);
  const [full, setFull] = useState<{ checks: CheckResult[]; email: string } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [queued, setQueued] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (phase === 'result' || phase === 'error') headingRef.current?.focus();
  }, [phase]);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setPhase('loading');
    setErr(null);
    setScan(null);
    setFull(null);
    setQueued(false);
    try {
      const data = await post<{ ok: true; scan: ScanView } | ({ ok: false } & ApiError)>('/api/tools/check', { mode, url, paste, attribution: readFirstTouch() });
      if (data.ok) {
        setScan(data.scan);
        setPhase('result');
        reportEvent('result_shown', data.scan.share_id, readFirstTouch());
      } else {
        setErr(data);
        setPhase('error');
      }
    } catch {
      setErr({ code: 'TIMEOUT', title: 'That took too long', body: 'The check did not finish in time. Try again in a moment, or paste your text instead.', paste: true });
      setPhase('error');
    }
  }

  async function unlock(email: string, consent: boolean) {
    if (!scan) return;
    setBusy(true);
    setFormError(null);
    try {
      const data = await post<{ ok: true; checks: CheckResult[]; email: string } | ({ ok: false } & ApiError)>('/api/tools/unlock', { share_id: scan.share_id, email, consent, attribution: readFirstTouch() });
      if (data.ok) setFull({ checks: data.checks, email: data.email });
      else setFormError(data.body);
    } catch {
      setFormError('That did not go through. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  async function joinQueue(email: string, consent: boolean) {
    setBusy(true);
    setFormError(null);
    try {
      const data = await post<{ ok: true } | ({ ok: false } & ApiError)>('/api/tools/queue', { url, email, consent, attribution: readFirstTouch() });
      if (data.ok) setQueued(true);
      else setFormError(data.body);
    } catch {
      setFormError('That did not go through. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  const canSubmit = mode === 'site' ? url.trim().length > 3 : CHECKS.some((c) => paste[c].trim());

  return (
    <div className="space-y-6">
      <form onSubmit={run} className="rounded-2xl border border-[var(--line)] bg-white p-4 shadow-sm sm:p-6" noValidate>
        <div role="tablist" aria-label="What to check" className="mb-4 grid grid-cols-2 gap-1 rounded-xl bg-[var(--paper)] p-1">
          {(['site', 'paste'] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`min-h-12 rounded-lg px-3 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan-deep)] ${mode === m ? 'bg-white text-[var(--ink)] shadow-sm' : 'text-[#4a5160]'}`}
            >
              {m === 'site' ? 'My website' : 'Paste text'}
            </button>
          ))}
        </div>

        {mode === 'site' ? (
          <div>
            <label htmlFor="tools-url" className="mb-1 block text-sm font-medium text-[var(--ink)]">
              Website address
            </label>
            <input id="tools-url" type="text" inputMode="url" autoCapitalize="none" autoCorrect="off" autoComplete="url" placeholder="example.com" value={url} onChange={(e) => setUrl(e.target.value)} className={field} />
            <p className="mt-2 text-sm text-[#4a5160]">We read up to 3 public pages: your home page, your privacy policy and your contact form.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-[#4a5160]">Fill in any of the boxes. Empty boxes are skipped.</p>
            {CHECKS.map((c) => (
              <div key={c}>
                <label htmlFor={`paste-${c}`} className="mb-1 block text-sm font-medium text-[var(--ink)]">
                  {CHECK_LABELS[c]}
                </label>
                <textarea id={`paste-${c}`} rows={3} maxLength={20000} aria-describedby={`paste-${c}-help`} value={paste[c]} onChange={(e) => setPaste({ ...paste, [c]: e.target.value })} className={field} />
                <p id={`paste-${c}-help`} className="mt-1 text-xs text-[#4a5160]">
                  {PASTE_HELP[c]}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5">
          <button type="submit" disabled={!canSubmit || phase === 'loading'} className={button}>
            {phase === 'loading' ? 'Checking...' : mode === 'site' ? 'Check my website' : 'Check my text'}
          </button>
        </div>
      </form>

      <div aria-live="polite" role="status" className="sr-only">
        {phase === 'loading' ? 'Checking. This usually takes under 30 seconds.' : ''}
      </div>
      {phase === 'loading' ? (
        <p className="rounded-2xl border border-[var(--line)] bg-white p-5 text-[15px] text-[#4a5160]" aria-hidden="true">
          Checking against the official rules. This usually takes under 30 seconds.
        </p>
      ) : null}

      {phase === 'error' && err ? (
        <section className="rounded-2xl border border-[#e6c27a] bg-[#fdf9ef] p-5" aria-labelledby="tools-error-title">
          <h2 id="tools-error-title" ref={headingRef} tabIndex={-1} className="text-lg font-semibold text-[var(--ink)] outline-none">
            {err.title}
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#3b4150]">{err.body}</p>
          {err.paste && mode === 'site' ? (
            <button
              type="button"
              onClick={() => {
                setMode('paste');
                setPhase('idle');
              }}
              className={`${button} mt-4`}
            >
              Paste my text instead
            </button>
          ) : null}
          {err.queue_offer && consentText && !queued ? (
            <div className="mt-5 border-t border-[#e6c27a] pt-4">
              <EmailForm submitLabel="Email me when scans are back" consentText={consentText} busy={busy} error={formError} onSubmit={joinQueue} />
            </div>
          ) : null}
          {queued ? <p className="mt-4 text-[15px] font-medium text-[#0f6b3a]">Thanks. Your scan is queued and your report will be emailed to you.</p> : null}
        </section>
      ) : null}

      {phase === 'result' && scan ? (
        <div className="space-y-6">
          <section aria-labelledby="tools-result-title">
            <h2 id="tools-result-title" ref={headingRef} tabIndex={-1} className="text-2xl font-bold text-[var(--ink)] outline-none">
              Your result{scan.site ? ` for ${scan.site}` : ''}
            </h2>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#4a5160]">
              {(['pass', 'warn', 'fail', 'gray'] as const).map((s) => (scan.counts[s] > 0 ? <span key={s} className="inline-flex items-center gap-1"><StatusBadge status={s} /> <span>{scan.counts[s]}</span></span> : null))}
            </p>
            {scan.pages.length > 0 ? <p className="mt-2 text-xs text-[#4a5160]">Pages read: {scan.pages.join(', ')}</p> : null}
            <div className="mt-4">
              <ResultView checks={full ? full.checks : scan.checks} showUnlockHint={Boolean(consentText) && !full} />
            </div>
          </section>

          {full ? (
            <p className="rounded-xl bg-[#e8f6ee] p-4 text-[15px] font-medium text-[#0f6b3a]">The full report is above and is on its way to {full.email}.</p>
          ) : consentText && scan.unlock_available ? (
            <section aria-labelledby="tools-unlock-title" className="rounded-2xl border border-[var(--line)] bg-white p-5">
              <h3 id="tools-unlock-title" className="text-lg font-semibold text-[var(--ink)]">
                Get the full report by email
              </h3>
              <p className="mb-4 mt-1 text-sm text-[#4a5160]">Every rule we checked, with the part of your text it was judged on.</p>
              <EmailForm submitLabel="Email me the full report" consentText={consentText} busy={busy} error={formError} onSubmit={unlock} />
            </section>
          ) : null}

          <Offer site={scan.site} shareId={scan.share_id} />
          <p className="text-sm text-[#4a5160]">
            Share this summary:{' '}
            <a className="font-medium text-[#06626f] underline underline-offset-2" href={`/tools/r/${scan.share_id}`}>
              your result link
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
}
