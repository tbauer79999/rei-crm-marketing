import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { summarize } from '../../../../lib/tools/checks';
import { toolsOpen } from '../../../../lib/tools/content-gate';
import { robotsMeta } from '../../../../lib/tools/seo';
import { getStore } from '../../../../lib/tools/supabase-store';
import Offer from '../../components/Offer';
import ResultView, { StatusBadge } from '../../components/ResultView';

export const dynamic = 'force-dynamic';

// Shared results are never indexed, whatever the environment.
export const metadata: Metadata = {
  title: '10DLC Registration Check result',
  robots: robotsMeta(false),
};

export default async function SharedResult({ params }: { params: Promise<{ id: string }> }) {
  if (!toolsOpen()) notFound();
  const { id } = await params;
  if (!/^[A-Za-z0-9_-]{16,64}$/.test(id)) notFound();
  let rec;
  try {
    rec = await getStore().getScanByShareId(id);
  } catch {
    notFound();
  }
  if (!rec) notFound();

  // Summary only: the full findings and the visitor's excerpts stay in their emailed report.
  const checks = summarize(rec.checks);
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-28 sm:px-6">
      <h1 className="text-3xl font-bold leading-tight text-[var(--ink)]">10DLC Registration Check{rec.site ? ` for ${rec.site}` : ''}</h1>
      <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#4a5160]">
        {(['pass', 'warn', 'fail', 'gray'] as const).map((s) => (rec.counts[s] > 0 ? <span key={s} className="inline-flex items-center gap-1"><StatusBadge status={s} /> <span>{rec.counts[s]}</span></span> : null))}
      </p>
      <div className="mt-6 space-y-6">
        <ResultView checks={checks} />
        <Offer site={rec.site} shareId={rec.share_id} />
        <p className="text-sm text-[#4a5160]">
          <a className="font-medium text-[#06626f] underline underline-offset-2" href="/tools">
            Run your own check
          </a>
        </p>
      </div>
    </div>
  );
}
