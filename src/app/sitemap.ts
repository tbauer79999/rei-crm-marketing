import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/data/blog-posts';

const BASE_URL = 'https://www.getsurfox.com';

/**
 * Dynamic sitemap. Generated at build/request time so lastModified always
 * reflects the current date and blog posts stay in sync with the data source.
 *
 * The 5 noindex funnel pages are intentionally excluded:
 *   /contact-sales, /business-signup, /partner-signup, /subscribe/[plan], /success
 * /enterprise is also excluded because it is a permanent redirect to /pricing.
 */

// Key commercial and content pages: priority 0.8.
const keyRoutes = [
  '/platform',
  '/pricing',
  '/integrations',
  '/integrations/gohighlevel',
  '/integrations/follow-up-boss',
  '/security',
  '/blog',
  '/roi',
  '/industries',
  '/staffing',
  '/wholesalers',
  '/events',
  '/home-services',
  '/compare/surfox-vs-all-competitors',
  '/compare/surfox-vs-gohighlevel',
  '/compare/surfox-vs-launch-control',
  '/compare/surfox-vs-lead-sherpa',
  '/compare/surfox-vs-meera-ai',
  '/compare/surfox-vs-skipio',
  '/compare/surfox-vs-smarter-contact',
  '/compare/surfox-vs-spara',
  '/compare/surfox-vs-textus',
];

// Supporting company/legal/conversion pages: priority 0.6.
const secondaryRoutes = [
  '/about',
  '/leadership',
  '/careers',
  '/support',
  '/ai-principles',
  '/contact',
  '/privacy',
  '/terms',
  '/demo',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homepage: MetadataRoute.Sitemap[number] = {
    url: BASE_URL,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 1.0,
  };

  const keyPages: MetadataRoute.Sitemap = keyRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const secondaryPages: MetadataRoute.Sitemap = secondaryRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [homepage, ...keyPages, ...secondaryPages, ...blogPosts];
}
