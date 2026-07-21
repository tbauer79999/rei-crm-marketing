import { Metadata } from 'next';

export interface PageMetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}

export const pageMetadata: Record<string, PageMetadataConfig> = {
  platform: {
    title: 'How SurFox AI Works',
    description: 'SurFox AI handles every lead conversation from first text to booked call. Upload your leads, set your goal, and your team only talks to people who are ready.',
    keywords: ['SMS lead qualification software', 'conversational AI platform', 'automated lead follow up', 'AI sales automation', 'lead response automation'],
    path: '/platform',
  },
  about: {
    title: 'About SurFox AI - Building the Future of Sales AI',
    description: 'Learn about SurFox AI\'s mission to transform sales through AI-powered lead qualification. Meet our team and discover our vision for AI sales.',
    keywords: ['about SurFox AI', 'AI sales company', 'SMS lead qualification company', 'sales technology'],
    path: '/about',
  },
  contact: {
    title: 'Contact Us - Get in Touch with SurFox AI',
    description: 'Have questions about SurFox AI? Get in touch with our team. We\'re here to help you transform your sales process with AI-powered intelligence.',
    keywords: ['contact SurFox AI', 'sales inquiry', 'product demo', 'customer support'],
    path: '/contact',
  },
  pricing: {
    title: 'AI Lead Qualification Pricing Plans',
    description: 'Real conversational AI at SMB pricing. Starter $147, Growth $597, Growth Plus $1,497, and Scale $2,497 per month. Backed by a 30-day money-back guarantee.',
    keywords: ['SurFox AI pricing', 'AI SMS pricing', 'lead qualification pricing', 'SMS lead qualification pricing'],
    path: '/pricing',
  },
  security: {
    title: 'Security & Compliance - Enterprise-Grade Protection',
    description: 'SurFox AI is built on enterprise infrastructure with TLS encryption, SOC 2 compliance, and TCPA regulations. Your customer data is safe and secure.',
    keywords: ['data security', 'TCPA compliance', 'SOC 2', 'encryption', 'privacy'],
    path: '/security',
  },
  leadership: {
    title: 'Leadership Team - Meet the Minds Behind SurFox AI',
    description: 'Meet Tom Bauer and the SurFox AI leadership team. Learn about the vision and expertise driving innovation in AI-powered sales intelligence.',
    keywords: ['Tom Bauer', 'SurFox AI leadership', 'AI founders', 'sales technology leaders'],
    path: '/leadership',
  },
  blog: {
    title: 'AI Lead Qualification Blog',
    description: 'Expert insights on AI, sales intelligence, and the future of customer engagement. Stay updated with the latest from SurFox AI.',
    keywords: ['AI sales blog', 'SMS lead qualification insights', 'sales strategy', 'AI technology'],
    path: '/blog',
  },
  demo: {
    title: 'See AI Lead Qualification in Action',
    description: 'Schedule a personalized demo of SurFox AI. See how AI-powered lead qualification can transform your sales process in just 30 minutes.',
    keywords: ['product demo', 'SurFox AI demo', 'AI sales demo', 'schedule demo'],
    path: '/demo',
  },
  integrations: {
    title: 'AI Lead Qualification Integrations',
    description: 'SurFox AI integrates seamlessly with your existing tools. CRM sync, API access, webhooks, and more. Built on AWS, Twilio, and OpenAI.',
    keywords: ['CRM integration', 'API', 'webhooks', 'integrations', 'sales stack'],
    path: '/integrations',
  },
  'integrations-gohighlevel': {
    title: 'GoHighLevel Integration - Native HighLevel Workflows',
    description: 'Connect HighLevel to SurFox AI directly. Native integration with tag-based campaign routing. No Zapier required. 30-day money-back guarantee.',
    keywords: ['GoHighLevel integration', 'HighLevel Workflows', 'native HighLevel integration', 'GHL SurFox', 'tag-based campaign routing', 'GHL AI lead qualification', 'GoHighLevel webhook'],
    path: '/integrations/gohighlevel',
  },
  'integrations-follow-up-boss': {
    title: 'Follow Up Boss Integration - Native FUB Integration',
    description: 'Connect Follow Up Boss to SurFox AI natively. Stage-based campaign routing, two-way sync, no Zapier required. 30-day money-back guarantee.',
    keywords: ['Follow Up Boss integration', 'FUB SurFox', 'native Follow Up Boss integration', 'FUB AI lead qualification', 'Follow Up Boss webhook', 'real estate AI SMS'],
    path: '/integrations/follow-up-boss',
  },
  staffing: {
    title: 'AI SMS Lead Qualification for Staffing Agencies',
    description: 'SurFox AI qualifies applicants and client leads via SMS automatically. No VA. No SDR. Every lead followed up instantly. Built for high-volume staffing.',
    keywords: ['staffing agency SMS automation', 'AI lead qualification staffing', 'applicant follow-up automation', 'SMS AI staffing', 'SurFox AI staffing'],
    path: '/staffing',
  },
  wholesalers: {
    title: 'AI SMS Lead Qualification for Real Estate Wholesalers',
    description: 'SurFox AI qualifies every motivated seller reply instantly, flags deals worth your time. Stop sorting 40 replies and start calling hot leads only.',
    keywords: ['real estate wholesaler SMS', 'motivated seller lead qualification', 'wholesale SMS automation', 'AI SMS wholesaler', 'SurFox AI wholesalers', 'SmarterContact alternative'],
    path: '/wholesalers',
  },
  'home-services': {
    title: 'AI SMS Lead Follow-Up for Home Services',
    description: 'SurFox AI responds to new home services leads instantly and reactivates your cold list automatically. Win the job by responding first. Built for HVAC, roofing, plumbing, and more.',
    keywords: ['home services lead follow-up', 'HVAC lead automation', 'roofing SMS automation', 'contractor lead qualification', 'speed to lead home services', 'AI SMS contractors', 'SurFox AI home services'],
    path: '/home-services',
  },
  events: {
    title: 'AI SMS Follow-up for Events & Entertainment',
    description: 'SurFox AI follows up with every event attendee and no-show automatically via SMS. Work your badge scans before you leave the venue. Built for trade shows, conferences, and product launches.',
    keywords: ['event lead follow-up', 'trade show lead follow-up', 'badge scan follow-up', 'no-show follow-up', 'event marketing automation', 'AI SMS for events', 'SurFox AI events'],
    path: '/events',
  },
  'ai-principles': {
    title: 'AI Principles - Our Approach to Responsible AI',
    description: 'Learn about SurFox AI\'s commitment to ethical, transparent, and responsible AI. Our principles guide every product decision we make.',
    keywords: ['AI ethics', 'responsible AI', 'AI principles', 'ethical AI'],
    path: '/ai-principles',
  },
  privacy: {
    title: 'Privacy Policy - How We Protect Your Data',
    description: 'Read SurFox AI\'s privacy policy. Learn how we collect, use, and protect your data with enterprise-grade security and compliance.',
    keywords: ['privacy policy', 'data protection', 'GDPR', 'data privacy'],
    path: '/privacy',
  },
  terms: {
    title: 'Terms of Service - Legal Agreement',
    description: 'Read SurFox AI\'s Terms of Service. Understand your rights, responsibilities, and our service guarantees when using the platform.',
    keywords: ['terms of service', 'terms and conditions', 'legal agreement', 'user agreement', 'TOS'],
    path: '/terms',
  },
  industries: {
    title: 'AI Lead Qualification for Every Industry',
    description: 'Every industry has the same lead problem: slow follow-up and cold contacts. SurFox AI qualifies leads via SMS for staffing, home services, events, real estate, and any business that talks to prospects.',
    keywords: ['AI lead qualification', 'SMS lead follow-up', 'AI for staffing', 'AI for home services', 'AI for events', 'AI for real estate', 'sales AI'],
    path: '/industries',
  },
  'compare-meera-ai': {
    title: 'SurFox AI vs Meera AI - Lead Intelligence vs Call Center AI',
    description: 'Compare SurFox AI vs Meera AI. Meera gets leads on the phone. SurFox tells you which leads are worth calling. AI scoring and dead lead resurrection.',
    keywords: ['SurFox vs Meera', 'Meera AI alternative', 'AI lead qualification', 'call center AI', 'lead intelligence', 'outbound reactivation'],
    path: '/compare/surfox-vs-meera-ai',
  },
  'compare-gohighlevel': {
    title: 'SurFox AI vs GoHighLevel: Which is Right for You?',
    description: 'Compare SurFox AI vs GoHighLevel. Built for conversations, not chaos. Self-serve setup, 50-point psychological scoring, and AI that learns.',
    keywords: ['SurFox vs GoHighLevel', 'GoHighLevel alternative', 'GHL alternative', 'AI lead qualification', 'SMS lead qualification', 'sales automation'],
    path: '/compare/surfox-vs-gohighlevel',
  },
  'compare-spara': {
    title: 'SurFox vs Spara: Best Spara Alternative for Outbound (2026)',
    description: 'Looking for a Spara replacement for outbound lead lists? SurFox qualifies leads via SMS (98% open rate) where Spara\'s inbound chat can\'t reach.',
    keywords: [
      'SurFox vs Spara',
      'Spara alternative',
      'Spara replacement',
      'SMS lead qualification',
      'lead qualification',
      'outbound SMS qualification',
      'AI lead qualification',
      'inbound vs outbound',
      'spara vs qualified',
      'spara vs salesmonk',
      'spara comparison',
      'spara ai comparison',
      'AI lead qualification software',
    ],
    path: '/compare/surfox-vs-spara',
  },
  'compare-all-competitors': {
    title: 'SurFox AI vs All Competitors: The Complete Comparison',
    description: 'See how SurFox AI compares to mass messaging platforms, manual SMS tools, CRM extensions, and email-first platforms. AI vs traditional approaches.',
    keywords: ['SurFox competitors', 'AI SMS comparison', 'lead qualification platforms', 'sales automation comparison', 'SMS marketing tools'],
    path: '/compare/surfox-vs-all-competitors',
  },
  'compare-textus': {
    title: 'SurFox AI vs TextUs: AI Automation vs Manual Messaging',
    description: 'Compare SurFox AI vs TextUs. SurFox AI automates conversations with psychology-based messaging. TextUs requires manual effort for every message.',
    keywords: ['SurFox vs TextUs', 'TextUs alternative', 'AI SMS platform', 'automated lead qualification', 'business texting'],
    path: '/compare/surfox-vs-textus',
  },
  'compare-launch-control': {
    title: 'SurFox AI vs Launch Control: Smart AI vs Mass Messaging',
    description: 'Compare SurFox AI vs Launch Control. SurFox uses psychology AI for intelligent conversations. Launch Control focuses on volume-based mass messaging.',
    keywords: ['SurFox vs Launch Control', 'Launch Control alternative', 'AI lead qualification', 'real estate SMS', 'REI marketing'],
    path: '/compare/surfox-vs-launch-control',
  },
  'compare-skipio': {
    title: 'SurFox AI vs Skipio: AI Intelligence vs Basic Automation',
    description: 'Compare SurFox AI vs Skipio. SurFox learns from conversations and adapts messaging. Skipio offers basic drip campaigns without AI intelligence.',
    keywords: ['SurFox vs Skipio', 'Skipio alternative', 'AI messaging platform', 'sales automation', 'lead nurturing'],
    path: '/compare/surfox-vs-skipio',
  },
  'compare-smarter-contact': {
    title: 'SurFox AI vs Smarter Contact: AI Conversations vs Batch SMS',
    description: 'Compare SurFox AI vs Smarter Contact. SurFox qualifies leads with psychology AI that learns. Smarter Contact sends batch messages without AI.',
    keywords: ['SurFox vs Smarter Contact', 'Smarter Contact alternative', 'AI SMS', 'real estate marketing', 'lead qualification'],
    path: '/compare/surfox-vs-smarter-contact',
  },
  'compare-lead-sherpa': {
    title: 'SurFox AI vs Lead Sherpa: AI Qualification vs Skip Tracing',
    description: 'Compare SurFox AI vs Lead Sherpa. SurFox qualifies leads with AI conversations. Lead Sherpa focuses on skip tracing and data.',
    keywords: ['SurFox vs Lead Sherpa', 'Lead Sherpa alternative', 'AI lead qualification', 'skip tracing', 'real estate leads'],
    path: '/compare/surfox-vs-lead-sherpa',
  },
  careers: {
    title: 'Careers at SurFox AI - Join Our Team',
    description: 'Explore career opportunities at SurFox AI. Join us in building the future of AI-powered sales intelligence and conversation automation.',
    keywords: ['SurFox careers', 'AI jobs', 'sales tech jobs', 'startup careers', 'SurFox jobs'],
    path: '/careers',
  },
  support: {
    title: 'Contact Support - SurFox AI Help Center',
    description: 'Get help with SurFox AI. Contact our support team for technical assistance, account questions, or product guidance.',
    keywords: ['SurFox support', 'help center', 'customer support', 'technical help', 'contact support'],
    path: '/support',
  },
  roi: {
    title: 'SMS Lead Qualification ROI Calculator: Real Numbers & Benchmarks (2026)',
    description: 'The real ROI of SMS lead qualification: 60-80% lower cost per lead, 4x better response rates, and found revenue from dormant databases. Calculate yours free.',
    keywords: [
      'ai sms lead qualification roi',
      'sms lead qualification roi calculator',
      'expected roi ai lead qualification',
      'cold list activation roi',
      'speed to lead roi',
      'roi of ai lead qualification software',
      'ai lead qualification roi',
    ],
    path: '/roi',
  },
};

/**
 * Canonical SoftwareApplication values, shared by every page that emits the schema so the
 * product description and pricing tiers cannot drift apart across the site.
 */
export const SOFTWARE_APP_DESCRIPTION =
  'AI-powered SMS lead qualification platform that responds to inbound leads within seconds, qualifies conversations autonomously, and hands sales teams a warm prospect ready to close, 24 hours a day, 7 days a week.';

const SOFTWARE_APP_TIERS = [
  { name: 'Starter', price: '147', slug: 'starter' },
  { name: 'Growth', price: '597', slug: 'growth' },
  { name: 'Growth Plus', price: '1497', slug: 'growth_plus' },
  { name: 'Scale', price: '2497', slug: 'scale' },
];

/**
 * Generate SoftwareApplication schema. `featureList` and `audienceType` let a vertical or
 * integration page add its own context without diverging from the canonical values above.
 */
export function generateSoftwareApplicationSchema(context?: {
  featureList?: string;
  audienceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SurFox AI',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://www.getsurfox.com',
    description: SOFTWARE_APP_DESCRIPTION,
    ...(context?.featureList ? { featureList: context.featureList } : {}),
    ...(context?.audienceType
      ? { audience: { '@type': 'Audience', audienceType: context.audienceType } }
      : {}),
    offers: SOFTWARE_APP_TIERS.map((tier) => ({
      '@type': 'Offer',
      name: `${tier.name} Plan`,
      price: tier.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://www.getsurfox.com/subscribe/${tier.slug}`,
    })),
  };
}

/**
 * Generate breadcrumb schema for compare pages
 */
export function generateCompareBreadcrumb(competitorName: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.getsurfox.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Compare',
        item: 'https://www.getsurfox.com/compare',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `SurFox vs ${competitorName}`,
        item: `https://www.getsurfox.com${path}`,
      },
    ],
  };
}

/**
 * Generate Next.js metadata object for a given page
 */
export function generatePageMetadata(pageKey: string): Metadata {
  const config = pageMetadata[pageKey];

  if (!config) {
    console.warn(`No metadata configuration found for page: ${pageKey}`);
    return {};
  }

  const fullTitle = config.title;
  const url = `https://www.getsurfox.com${config.path}`;

  // The <title> tag is branded by the root layout template ("%s | SurFox AI"), so config.title
  // is stored bare. OG/Twitter titles do NOT pass through that template, so brand them here to
  // keep social cards consistent. Guard against double-branding if a title already ends in it.
  const brandedTitle = /\|\s*SurFox AI\s*$/i.test(fullTitle)
    ? fullTitle
    : `${fullTitle} | SurFox AI`;

  return {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: brandedTitle,
      description: config.description,
      url: url,
      type: 'website',
      siteName: 'SurFox AI',
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description: config.description,
    },
    alternates: {
      canonical: url,
    },
  };
}
