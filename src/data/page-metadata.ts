import { Metadata } from 'next';

export interface PageMetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}

export const pageMetadata: Record<string, PageMetadataConfig> = {
  platform: {
    title: 'Platform Overview - AI Customer Intelligence',
    description: 'Discover how SurFox transforms customer signals into intelligent actions. One AI layer for all your customer interactions - calls, texts, transactions, and more.',
    keywords: ['AI platform', 'customer intelligence platform', 'sales automation platform', 'conversation AI platform'],
    path: '/platform',
  },
  about: {
    title: 'About SurFox - Building the Future of Sales AI',
    description: 'Learn about SurFox\'s mission to transform sales through AI-powered conversation intelligence. Meet our team and discover our vision for the future of customer engagement.',
    keywords: ['about SurFox', 'AI sales company', 'conversation intelligence company', 'sales technology'],
    path: '/about',
  },
  contact: {
    title: 'Contact Us - Get in Touch with SurFox',
    description: 'Have questions about SurFox? Get in touch with our team. We\'re here to help you transform your sales process with AI-powered intelligence.',
    keywords: ['contact SurFox', 'sales inquiry', 'product demo', 'customer support'],
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
    keywords: ['SurFox pricing', 'AI sales pricing', 'lead qualification pricing', 'conversation intelligence pricing'],
    path: '/pricing',
  },
  security: {
    title: 'Security & Compliance - Enterprise-Grade Protection',
    description: 'SurFox is built on enterprise infrastructure with TLS encryption, SOC 2 compliance, and TCPA regulations. Your customer data is safe and secure.',
    keywords: ['data security', 'TCPA compliance', 'SOC 2', 'encryption', 'privacy'],
    path: '/security',
  },
  leadership: {
    title: 'Leadership Team - Meet the Minds Behind SurFox',
    description: 'Meet Tom Bauer and the SurFox leadership team. Learn about the vision and expertise driving innovation in AI-powered sales intelligence.',
    keywords: ['Tom Bauer', 'SurFox leadership', 'AI founders', 'sales technology leaders'],
    path: '/leadership',
  },
  blog: {
    title: 'Insights - AI, Sales Strategy & Product Updates',
    description: 'Expert insights on AI, sales intelligence, and the future of customer engagement. Stay updated with the latest from SurFox.',
    keywords: ['AI sales blog', 'conversation intelligence insights', 'sales strategy', 'AI technology'],
    path: '/blog',
  },
  demo: {
    title: 'Book a Demo - See SurFox in Action',
    description: 'Schedule a personalized demo of SurFox. See how AI-powered lead qualification can transform your sales process in just 30 minutes.',
    keywords: ['product demo', 'SurFox demo', 'AI sales demo', 'schedule demo'],
    path: '/demo',
  },
  integrations: {
    title: 'Integrations - Connect SurFox to Your Stack',
    description: 'SurFox integrates seamlessly with your existing tools. CRM sync, API access, webhooks, and more. Built on AWS, Twilio, and OpenAI.',
    keywords: ['CRM integration', 'API', 'webhooks', 'integrations', 'sales stack'],
    path: '/integrations',
  },
  'request-access': {
    title: 'Request Early Access - Join the SurFox Beta',
    description: 'Get early access to SurFox and be among the first to experience AI-powered lead qualification. Limited beta spots available.',
    keywords: ['early access', 'beta signup', 'SurFox beta', 'AI sales beta'],
    path: '/request-access',
  },
  'ai-principles': {
    title: 'AI Principles - Our Approach to Responsible AI',
    description: 'Learn about SurFox\'s commitment to ethical, transparent, and responsible AI. Our principles guide every product decision we make.',
    keywords: ['AI ethics', 'responsible AI', 'AI principles', 'ethical AI'],
    path: '/ai-principles',
  },
  privacy: {
    title: 'Privacy Policy - How We Protect Your Data',
    description: 'Read SurFox\'s privacy policy. Learn how we collect, use, and protect your data with enterprise-grade security and compliance.',
    keywords: ['privacy policy', 'data protection', 'GDPR', 'data privacy'],
    path: '/privacy',
  },
  terms: {
    title: 'Terms of Service - Legal Agreement',
    description: 'Read SurFox\'s Terms of Service. Understand your rights, responsibilities, and our service guarantees when using the platform.',
    keywords: ['terms of service', 'terms and conditions', 'legal agreement', 'user agreement', 'TOS'],
    path: '/terms',
  },
  enterprise: {
    title: 'Enterprise Solutions - AI at Scale',
    description: 'Enterprise-grade AI sales intelligence for large teams. Custom deployment, dedicated support, and advanced security features.',
    keywords: ['enterprise AI', 'enterprise sales software', 'large team solutions', 'custom deployment'],
    path: '/enterprise',
  },
};

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
      siteName: 'SurFox',
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
