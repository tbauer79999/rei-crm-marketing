import { Metadata } from 'next';

export interface PageMetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}

export const pageMetadata: Record<string, PageMetadataConfig> = {
  homepage: {
    title: 'AI SDR: Qualify Leads via SMS | Cut Headcount Costs',
    description:
      'Replace expensive SDRs with AI. SurFox qualifies cold leads via SMS automatically - 60–80% lower cost per lead. Your team only talks to hot prospects.',
    keywords: [
      'AI SDR',
      'AI SDR platform',
      'AI SDR software',
      'replace SDR team with AI',
      'reduce SDR headcount',
      'AI SDR ROI',
      'SMS lead qualification',
      'automated lead qualification',
      'AI lead qualification software',
      'AI sales automation',
      'outbound AI SDR',
      'lead scoring software',
    ],
    path: '/',
  },
  platform: {
    title: 'AI SDR Platform: SMS Lead Qualification & Automation',
    description: 'AI-powered SMS lead qualification platform. Automatically engage, qualify, and schedule appointments with leads 24/7. Replace expensive SDRs with intelligent automation.',
    keywords: ['AI platform', 'customer intelligence platform', 'sales automation platform', 'conversation AI platform'],
    path: '/platform',
  },
  about: {
    title: 'About SurFox AI - Building the Future of Sales AI',
    description: 'Learn about SurFox AI\'s mission to transform sales through AI-powered lead qualification. Meet our team and discover our vision for the future of AI sales development.',
    keywords: ['about SurFox AI', 'AI sales company', 'AI SDR company', 'sales technology'],
    path: '/about',
  },
  contact: {
    title: 'Contact Us - Get in Touch with SurFox AI',
    description: 'Have questions about SurFox AI? Get in touch with our team. We\'re here to help you transform your sales process with AI-powered intelligence.',
    keywords: ['contact SurFox AI', 'sales inquiry', 'product demo', 'customer support'],
    path: '/contact',
  },
  engage: {
    title: 'SurFox Engage - AI-Powered Lead Qualification',
    description: 'Automatically qualify leads via SMS with AI. Upload leads, let AI engage and score them, your team only talks to hot prospects. Try SurFox Engage today.',
    keywords: ['AI lead qualification', 'SMS lead engagement', 'automated lead scoring', 'SurFox Engage'],
    path: '/engage',
  },
  pricing: {
    title: 'Pricing - Flexible Plans for Every Business',
    description: 'Transparent pricing for SurFox AI lead qualification. Choose from Starter, Professional, or Enterprise plans. Start free, scale as you grow.',
    keywords: ['SurFox AI pricing', 'AI sales pricing', 'lead qualification pricing', 'AI SDR pricing'],
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
    title: 'Insights - AI, Sales Strategy & Product Updates',
    description: 'Expert insights on AI, sales intelligence, and the future of customer engagement. Stay updated with the latest from SurFox AI.',
    keywords: ['AI sales blog', 'AI SDR insights', 'sales strategy', 'AI technology'],
    path: '/blog',
  },
  demo: {
    title: 'Book a Demo - See SurFox AI in Action',
    description: 'Schedule a personalized demo of SurFox AI. See how AI-powered lead qualification can transform your sales process in just 30 minutes.',
    keywords: ['product demo', 'SurFox AI demo', 'AI sales demo', 'schedule demo'],
    path: '/demo',
  },
  integrations: {
    title: 'Integrations - Connect SurFox AI to Your Stack',
    description: 'SurFox AI integrates seamlessly with your existing tools. CRM sync, API access, webhooks, and more. Built on AWS, Twilio, and OpenAI.',
    keywords: ['CRM integration', 'API', 'webhooks', 'integrations', 'sales stack'],
    path: '/integrations',
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
  enterprise: {
    title: 'Enterprise Solutions - AI at Scale',
    description: 'Enterprise-grade AI sales intelligence for large teams. Custom deployment, dedicated support, and advanced security features.',
    keywords: ['enterprise AI', 'enterprise sales software', 'large team solutions', 'custom deployment'],
    path: '/enterprise',
  },
  industries: {
    title: 'Industries - AI Lead Qualification for Every Sales Team',
    description: 'SurFox AI works across real estate, wholesale, insurance, solar, recruiting, and B2B sales. Human psychology is universal - our AI adapts to any industry.',
    keywords: ['AI for real estate', 'AI for insurance', 'AI for solar', 'sales AI', 'lead qualification'],
    path: '/industries',
  },
  'compare-meera-ai': {
    title: 'SurFox AI vs Meera AI - Lead Intelligence vs Call Center AI',
    description: 'Compare SurFox AI vs Meera AI. Meera gets leads on the phone. SurFox tells you which leads are worth calling. Dead lead resurrection, AI scoring, and tenant-only learning.',
    keywords: ['SurFox vs Meera', 'Meera AI alternative', 'AI lead qualification', 'call center AI', 'lead intelligence', 'outbound reactivation'],
    path: '/compare/surfox-vs-meera-ai',
  },
  'compare-gohighlevel': {
    title: 'SurFox AI vs GoHighLevel: Which is Right for You?',
    description: 'Compare SurFox AI vs GoHighLevel. Built for conversations, not configured for chaos. Setup in minutes vs weeks, 50-point psychological scoring, and AI that actually learns.',
    keywords: ['SurFox vs GoHighLevel', 'GoHighLevel alternative', 'GHL alternative', 'AI lead qualification', 'AI SDR platform', 'sales automation'],
    path: '/compare/surfox-vs-gohighlevel',
  },
  'compare-spara': {
    title: 'SurFox vs Spara: Outbound SMS vs Inbound Chat AI (2026)',
    description: 'Spara handles inbound website chat. SurFox qualifies outbound lead lists via SMS (98% open rate). Different tools for different needs. Compare pricing, features & use cases.',
    keywords: [
      'SurFox vs Spara',
      'Spara alternative',
      'AI SDR',
      'lead qualification',
      'replace SDRs',
      'SMS lead qualification',
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
    description: 'See how SurFox AI compares to mass messaging platforms, manual SMS tools, CRM extensions, and email-first platforms. Psychology AI vs traditional approaches.',
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
    description: 'Compare SurFox AI vs Smarter Contact. SurFox qualifies leads with psychology AI that learns and adapts. Smarter Contact sends batch messages without AI qualification.',
    keywords: ['SurFox vs Smarter Contact', 'Smarter Contact alternative', 'AI SMS', 'real estate marketing', 'lead qualification'],
    path: '/compare/surfox-vs-smarter-contact',
  },
  'compare-lead-sherpa': {
    title: 'SurFox AI vs Lead Sherpa: AI Qualification vs Skip Tracing',
    description: 'Compare SurFox AI vs Lead Sherpa. SurFox qualifies leads with AI conversations. Lead Sherpa focuses on skip tracing and data - different tools for different needs.',
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
  'how-it-works': {
    title: 'How SurFox Works - Psychology AI for Lead Qualification',
    description: 'Learn how SurFox Psychology AI analyzes 50+ behavioral dimensions to adapt messages in real-time and turn cold leads into qualified conversations.',
    keywords: ['how SurFox works', 'psychology AI', 'lead qualification process', 'AI messaging', 'behavioral analysis'],
    path: '/how-it-works',
  },
  roi: {
    title: 'AI SDR ROI Calculator: Real Numbers & Benchmarks (2026)',
    description: '60-80% lower cost per lead. 4x better response rates. Found revenue from dormant databases. Calculate your ROI from AI lead qualification — free, with real benchmarks.',
    keywords: [
      'ai sdr roi',
      'ai sdr roi calculator',
      'expected roi ai lead qualification',
      'ai sdr roi calculator',
      'reduce sdr headcount roi',
      'roi of ai lead qualification software',
      'ai sales development roi',
      'ai lead qualification roi',
    ],
    path: '/roi',
  },
};

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

  return {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: fullTitle,
      description: config.description,
      url: url,
      type: 'website',
      siteName: 'SurFox AI',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      site: '@getSurFox',
      creator: '@getSurFox',
    },
    alternates: {
      canonical: url,
    },
  };
}
