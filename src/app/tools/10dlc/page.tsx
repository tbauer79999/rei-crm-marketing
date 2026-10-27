import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_ORIGIN } from '../../../lib/tools/config';
import { loadExplainer, toolsOpen, type Inline } from '../../../lib/tools/content-gate';
import { canonicalFor, robotsMeta } from '../../../lib/tools/seo';

export const dynamic = 'force-static';

export function generateMetadata(): Metadata {
  const e = loadExplainer();
  if (!e.ok || !toolsOpen()) return { robots: { index: false, follow: false } };
  const c = e.data;
  const url = canonicalFor('/tools/10dlc');
  return {
    title: c.title,
    description: c.metaDescription,
    alternates: { canonical: url },
    robots: robotsMeta(true),
    openGraph: { title: c.title, description: c.metaDescription, url, type: 'article' },
  };
}

function Inlines({ inl }: { inl: Inline[] }) {
  return (
    <>
      {inl.map((i, n) =>
        i.t === 'bold' ? (
          <strong key={n}>{i.v}</strong>
        ) : i.t === 'link' ? (
          <a key={n} href={i.href} className="font-medium text-[#06626f] underline underline-offset-2" {...(i.href.startsWith(SITE_ORIGIN) ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
            {i.v}
          </a>
        ) : (
          <span key={n}>{i.v}</span>
        ),
      )}
    </>
  );
}

// Server-rendered explainer. The text comes from content/explainer.json (built from the CMO's final page text by build-content.ts) and
// is laid out exactly as supplied: nothing here writes, adds or rewords copy. Each ## and ### heading carries its anchor id (for
// example #opt-in-wording); there are no per-reason pages. The structured data is the CMO's, emitted as supplied.
export default function Explainer() {
  const e = loadExplainer();
  if (!e.ok || !toolsOpen()) notFound();
  const c = e.data;
  return (
    <article className="mx-auto w-full max-w-3xl px-4 pb-16 pt-28 sm:px-6">
      <h1 className="text-3xl font-bold leading-tight text-[var(--ink)] sm:text-4xl">{c.h1}</h1>
      {c.blocks.map((b, n) => {
        if (b.k === 'h2') return <h2 key={n} id={b.id} className="mt-12 scroll-mt-28 text-2xl font-semibold text-[var(--ink)]"><Inlines inl={b.inl} /></h2>;
        if (b.k === 'h3') return <h3 key={n} id={b.id} className="mt-8 scroll-mt-28 text-xl font-semibold text-[var(--ink)]"><Inlines inl={b.inl} /></h3>;
        if (b.k === 'ul') {
          return (
            <ul key={n} className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#2a303b]">
              {b.items.map((it, i) => <li key={i}><Inlines inl={it} /></li>)}
            </ul>
          );
        }
        return <p key={n} className="mt-3 text-base leading-relaxed text-[#2a303b]"><Inlines inl={b.inl} /></p>;
      })}
      {c.jsonLd.map((o, n) => (
        <script key={n} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o).replace(/</g, '\u003c') }} />
      ))}
    </article>
  );
}
