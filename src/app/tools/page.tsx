import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { loadConsentText, toolsOpen } from '../../lib/tools/content-gate';
import { canonicalFor, robotsMeta } from '../../lib/tools/seo';
import Checker from './components/Checker';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: '10DLC Registration Checker',
  description: 'Check your texting registration against the official carrier rules before you submit it.',
  alternates: { canonical: canonicalFor('/tools') },
  robots: robotsMeta(true),
  openGraph: {
    title: '10DLC Registration Checker',
    description: 'Check your texting registration against the official carrier rules before you submit it.',
    url: canonicalFor('/tools'),
    type: 'website',
  },
};

export default function ToolsPage() {
  if (!toolsOpen()) notFound();
  const consent = loadConsentText();
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-28 sm:px-6">
      <h1 className="text-3xl font-bold leading-tight text-[var(--ink)] sm:text-4xl">10DLC Registration Checker</h1>
      <p className="mb-6 mt-3 text-base leading-relaxed text-[#3b4150]">
        Check your campaign description, sample messages, opt-in wording and privacy policy against the official rules, each with its source.
      </p>
      <Checker consentText={consent.ok ? consent.data : null} />
    </div>
  );
}
