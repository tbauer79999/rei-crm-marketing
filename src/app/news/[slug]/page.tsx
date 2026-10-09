import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllNews, getNewsBySlug, formatLongDate, absoluteUrl } from '@/lib/news';
import { PRESS } from '@/data/press-info';
import Markdown from '../_components/Markdown';
import { AboutBoilerplate, MediaContact } from '../_components/PressBlocks';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNews().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = getNewsBySlug(slug);
  if (!r) return { title: 'Release not found' };

  const url = `${PRESS.siteUrl}/news/${r.slug}`;
  const image = r.image ? absoluteUrl(r.image) : PRESS.defaultOgImage;
  return {
    title: r.title,
    description: r.summary,
    alternates: { canonical: url },
    robots: r.placeholder ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${r.title} | SurFox AI`,
      description: r.summary,
      url,
      type: 'article',
      publishedTime: r.date,
      modifiedTime: r.updated ?? r.date,
      siteName: PRESS.orgName,
      tags: r.tags,
      images: [{ url: image, width: 1200, height: 630, alt: r.imageAlt ?? r.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${r.title} | SurFox AI`,
      description: r.summary,
      images: [image],
    },
  };
}

export default async function NewsReleasePage({ params }: Props) {
  const { slug } = await params;
  const r = getNewsBySlug(slug);
  if (!r) notFound();

  const url = `${PRESS.siteUrl}/news/${r.slug}`;
  const org = {
    '@type': 'Organization',
    name: PRESS.orgName,
    url: PRESS.siteUrl,
    logo: { '@type': 'ImageObject', url: PRESS.logoUrl },
  };
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: r.title,
    description: r.summary,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    datePublished: r.date,
    dateModified: r.updated ?? r.date,
    image: [r.image ? absoluteUrl(r.image) : PRESS.defaultOgImage],
    keywords: r.tags.length ? r.tags.join(', ') : undefined,
    author: org,
    publisher: org,
  };

  return (
    <div className="bg-[#F4F5F3] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link href="/news" className="text-sm font-semibold text-[#0A7C8C] hover:underline">
          &larr; Back to SurFox AI News
        </Link>

        {r.placeholder && (
          <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <strong>PLACEHOLDER RELEASE.</strong> Sample content for previewing the template. It is hidden in
            production builds. Delete <code>content/news/placeholder-example-release.md</code> when done.
          </p>
        )}

        <header className="mt-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-[#13171F]">{r.title}</h1>
          {r.subheadline && (
            <p className="mt-3 text-lg sm:text-xl leading-relaxed text-[#5A626E]">{r.subheadline}</p>
          )}
        </header>

        {r.image && (
          <figure className="mt-8">
            <Image
              src={r.image}
              alt={r.imageAlt ?? ''}
              width={1200}
              height={630}
              className="w-full h-auto rounded-2xl border border-[#E4E6E2]"
              priority
            />
          </figure>
        )}

        <div className="mt-8 text-[17px] leading-relaxed text-[#13171F] [&_p]:mt-5 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1.5 [&_a]:font-semibold [&_a]:text-[#0A7C8C] [&_a]:underline [&_blockquote]:mt-5 [&_blockquote]:border-l-4 [&_blockquote]:border-[#0FB6C9] [&_blockquote]:pl-4 [&_blockquote]:italic [&_hr]:my-8 [&_hr]:border-[#E4E6E2]">
          <p className="!mt-0">
            <strong>{r.dateline}, <time dateTime={r.date}>{formatLongDate(r.date)}</time>:</strong>
          </p>
          <Markdown source={r.body} />
        </div>

        <div className="mt-10 border-t border-[#E4E6E2] pt-2">
          <AboutBoilerplate />
          <MediaContact />
          <p className="mt-10 text-center font-semibold tracking-widest text-[#8A92A0]" aria-label="End of release">###</p>
        </div>
      </article>
    </div>
  );
}
