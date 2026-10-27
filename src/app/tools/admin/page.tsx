import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { COOKIE_NAMES, monthlyCostCapUsd } from '../../../lib/tools/config';
import { gateStatus, toolsOpen } from '../../../lib/tools/content-gate';
import { capStatus, dayStartIso, monthStartIso } from '../../../lib/tools/limits';
import { getStore } from '../../../lib/tools/supabase-store';
import { verifyAdminCookie } from '../../../lib/tools/visitor';
import { AdminActions, AdminLogin } from './AdminClient';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Checker admin', robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!toolsOpen()) notFound();
  const jar = await cookies();
  const authed = verifyAdminCookie(jar.get(COOKIE_NAMES.admin)?.value);

  const shell = (children: React.ReactNode) => (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-28 sm:px-6">
      <h1 className="text-2xl font-bold text-[var(--ink)]">10DLC checker admin</h1>
      <div className="mt-6">{children}</div>
    </div>
  );
  if (!authed) return shell(process.env.TOOLS_ADMIN_PASSWORD ? <AdminLogin /> : <p>Set TOOLS_ADMIN_PASSWORD to use this page.</p>);

  const store = getStore();
  const now = new Date();
  const [cap, events, counts30, queue, held, pending, sendsAlert, sendsReport, unlocks] = await Promise.all([
    capStatus(store, now),
    store.listEvents(50),
    store.countEventsByType(new Date(now.getTime() - 30 * 86_400_000).toISOString()),
    store.listQueue(['queued', 'running', 'failed'], 200),
    store.listAlerts(['held'], 500),
    store.listAlerts(['pending'], 500),
    store.countSends('alert', dayStartIso(now)),
    store.countSends('report', dayStartIso(now)),
    store.listScansForReport(),
  ]);
  const gate = gateStatus();
  const td = 'border-t border-[var(--line)] px-2 py-2 align-top text-sm';

  return shell(
    <div className="space-y-8">
      <AdminActions />
      <section aria-labelledby="a-cost">
        <h2 id="a-cost" className="text-lg font-semibold">Cost against the cap ({monthStartIso(now).slice(0, 7)})</h2>
        <p className="mt-1 text-sm">
          ${cap.spent.toFixed(4)} of ${monthlyCostCapUsd().toFixed(2)} used. Website scans are {cap.tripped ? 'PAUSED' : 'running'}.
        </p>
      </section>
      <section aria-labelledby="a-content">
        <h2 id="a-content" className="text-lg font-semibold">Content gate</h2>
        <p className="mt-1 text-sm">Rulebook: {gate.rulebook}. Explainer: {gate.explainer}. Consent wording: {gate.consent}.</p>
      </section>
      <section aria-labelledby="a-counts">
        <h2 id="a-counts" className="text-lg font-semibold">Events, last 30 days</h2>
        <ul className="mt-1 text-sm">
          {Object.entries(counts30).map(([k, v]) => <li key={k}>{k}: {v}</li>)}
          {Object.keys(counts30).length === 0 ? <li>None yet.</li> : null}
        </ul>
      </section>
      <section aria-labelledby="a-queue">
        <h2 id="a-queue" className="text-lg font-semibold">Scan queue ({queue.length}), oldest first</h2>
        <table className="mt-2 w-full text-left">
          <thead><tr><th className="px-2 text-sm">Queued</th><th className="px-2 text-sm">Site</th><th className="px-2 text-sm">Status</th><th className="px-2 text-sm">Attempts</th></tr></thead>
          <tbody>{queue.map((q) => <tr key={q.id}><td className={td}>{q.created_at.slice(0, 16)}</td><td className={td}>{q.url}</td><td className={td}>{q.status}{q.last_error ? ` (${q.last_error})` : ''}</td><td className={td}>{q.attempts}</td></tr>)}</tbody>
        </table>
      </section>
      <section aria-labelledby="a-alerts">
        <h2 id="a-alerts" className="text-lg font-semibold">Alert queue</h2>
        <p className="mt-1 text-sm">Pending retry: {pending.length}. Held for the daily-limit catch-up email: {held.length}. Alert emails sent today: {sendsAlert}. Report emails sent today: {sendsReport}. Reports awaiting send or retry: {unlocks.length}.</p>
      </section>
      <section aria-labelledby="a-events">
        <h2 id="a-events" className="text-lg font-semibold">Latest events</h2>
        <table className="mt-2 w-full text-left">
          <thead><tr><th className="px-2 text-sm">When (UTC)</th><th className="px-2 text-sm">Event</th><th className="px-2 text-sm">Site</th><th className="px-2 text-sm">Tag</th><th className="px-2 text-sm">Referrer</th></tr></thead>
          <tbody>{events.map((e) => <tr key={e.id}><td className={td}>{e.created_at.slice(0, 16)}</td><td className={td}>{e.type}</td><td className={td}>{e.site ?? 'paste'}</td><td className={td}>{e.src || e.aff || '-'}</td><td className={td}>{e.referrer ?? '-'}</td></tr>)}</tbody>
        </table>
      </section>
    </div>,
  );
}
