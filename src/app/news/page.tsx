import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllNews, formatLongDate } from '@/lib/news';
import { PRESS } from '@/data/press-info';
import { AboutBoilerplate } from './_components/PressBlocks';

const URL = `${PRESS.siteUrl}/news`;
const DESCRIPTION = 'Press releases and company announcements from SurFox AI, the AI that qualifies leads over SMS, website chat, and voice.';

export const metadata: Metadata = {
  title: 'SurFox AI News',
  description: DESCRIPTION,
  alternates: { canonical: URL, types: { 'application/rss+xml': `${URL}/rss.xml` } },
  openGraph: {
    title: 'SurFox AI News | SurFox AI',
    description: DESCRIPTION,
    url: URL,
    type: 'website',
    siteName: PRESS.orgName,
    images: [{ url: PRESS.defaultOgImage, width: 1200, height: 630, alt: 'SurFox AI News' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SurFox AI News | SurFox AI',
    description: DESCRIPTION,
    images: [PRESS.defaultOgImage],
  },
};

export default function NewsIndexPage() {
  const releases = getAllNews();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: PRESS.orgName,
    url: PRESS.siteUrl,
    logo: { '@type': 'ImageObject', url: PRESS.logoUrl },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'media inquiries',
      email: PRESS.contactEmail,
    },
  };

  return (
    <div className="bg-[#F4F5F3] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#13171F]">SurFox AI News</h1>
        <p className="mt-3 text-base sm:text-lg text-[#5A626E] leading-relaxed">
          Press releases and company announcements from SurFox AI.
        </p>

        <div className="mt-10 space-y-4">
          {releases.length === 0 && (
            <p className="rounded-2xl border border-[#E4E6E2] bg-white p-6 text-[#5A626E]">
              No announcements yet. Check back soon.
            </p>
          )}
          {releases.map((r) => (
            <article key={r.slug} className="rounded-2xl border border-[#E4E6E2] bg-white p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#8A92A0]">
                <time dateTime={r.date}>{formatLongDate(r.date)}</time>
                {r.placeholder && (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                    PLACEHOLDER
                  </span>
                )}
              </div>
              <h2 className="mt-1 text-xl font-bold leading-snug text-[#13171F]">
                <Link href={`/news/${r.slug}`} className="hover:text-[#0A7C8C]">{r.title}</Link>
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5A626E]">{r.summary}</p>
            </article>
          ))}
        </div>

        <section aria-labelledby="media-resources" className="mt-14 rounded-2xl border border-[#E4E6E2] bg-white p-5 sm:p-8">
          <h2 id="media-resources" className="text-2xl font-bold text-[#13171F]">Media resources</h2>
          <AboutBoilerplate />
          <ul className="mt-8 space-y-3 text-[15px]">
            <li className="text-[#5A626E]">
              Press contact:{' '}
              <a className="font-semibold text-[#0A7C8C] hover:underline break-all" href={`mailto:${PRESS.contactEmail}`}>
                {PRESS.contactEmail}
              </a>
            </li>
            <li>
              <a className="font-semibold text-[#0A7C8C] hover:underline" href="/news/rss.xml">RSS feed</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
