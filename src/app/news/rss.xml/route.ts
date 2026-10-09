import { getAllNews, absoluteUrl } from '@/lib/news';
import { PRESS } from '@/data/press-info';

export const dynamic = 'force-static';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const rfc822 = (iso: string) => new Date(`${iso}T12:00:00Z`).toUTCString();

export function GET() {
  const releases = getAllNews();
  const items = releases
    .map((r) => {
      const url = `${PRESS.siteUrl}/news/${r.slug}`;
      return `    <item>
      <title>${esc(r.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(r.date)}</pubDate>
      <description>${esc(r.summary)}</description>${r.tags.map((t) => `\n      <category>${esc(t)}</category>`).join('')}${
        r.image ? `\n      <enclosure url="${esc(absoluteUrl(r.image))}" type="image/${/\.png$/i.test(r.image) ? 'png' : 'jpeg'}" length="0" />` : ''
      }
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SurFox AI News</title>
    <link>${PRESS.siteUrl}/news</link>
    <description>Press releases and company announcements from SurFox AI.</description>
    <language>en-us</language>
    <lastBuildDate>${releases.length ? rfc822(releases[0].date) : new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${PRESS.siteUrl}/news/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
