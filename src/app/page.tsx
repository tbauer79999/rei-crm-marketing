import { Metadata } from 'next';
import HomeClientSections from './HomeClientSections';

export const metadata: Metadata = {
  title: 'AI-Powered Sales Conversation Intelligence',
  description: 'SurFox uses AI to qualify leads automatically via SMS. Upload cold leads, let AI engage and qualify them, your sales team only talks to hot prospects ready to buy.',
  keywords: ['AI lead qualification', 'SMS lead qualification', 'sales automation', 'AI sales assistant', 'automated lead scoring', 'conversation AI', 'sales intelligence'],
  openGraph: {
    title: 'SurFox | AI-Powered Sales Conversation Intelligence',
    description: 'Upload cold leads, let AI qualify them via SMS, your team only talks to hot prospects. Transform your sales process with intelligent automation.',
    url: 'https://www.getsurfox.com',
    type: 'website',
    siteName: 'SurFox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SurFox | AI-Powered Sales Conversation Intelligence',
    description: 'Upload cold leads, let AI qualify them via SMS, your team only talks to hot prospects. Transform your sales process with intelligent automation.',
    site: '@getSurFox',
    creator: '@getSurFox',
  },
  alternates: {
    canonical: 'https://www.getsurfox.com',
  },
};

// Inline SVG arrow for zero JS dependency in hero
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="bg-white text-gray-900">
      {/* Schema.org Organization + LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Organization', 'LocalBusiness'],
            name: 'SurFox',
            legalName: 'SurFox, Inc.',
            url: 'https://www.getsurfox.com',
            logo: 'https://www.getsurfox.com/logo.png',
            foundingDate: '2024',
            description: 'AI-powered sales conversation intelligence platform that qualifies leads automatically via SMS',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Orlando',
              addressRegion: 'FL',
              addressCountry: 'US',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-XXX-XXX-XXXX',
              contactType: 'sales',
              email: 'tom@getsurfox.com',
              availableLanguage: ['English'],
            },
            sameAs: [
              'https://twitter.com/getSurFox',
              'https://www.linkedin.com/company/surfoxai',
            ],
            founder: {
              '@type': 'Person',
              name: 'Tom Bauer',
              url: 'https://www.getsurfox.com/leadership',
            },
            areaServed: {
              '@type': 'Country',
              name: 'United States',
            },
            serviceType: [
              'AI Sales Intelligence',
              'Lead Qualification',
              'Conversation Intelligence',
              'Sales Automation',
            ],
          }),
        }}
      />

      {/* Schema.org SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'SurFox Engage',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'Pricing varies by usage and features',
            },
            operatingSystem: 'Web-based',
            description: 'AI-powered lead qualification platform that engages and qualifies leads via SMS automatically',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              ratingCount: '1',
              reviewCount: '1',
            },
          }),
        }}
      />

      {/* Hero Section - Server-rendered for fastest LCP */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              SurFox AI listens to every<br className="hidden sm:block" />
              customer signal - and knows<br className="hidden sm:block" />
              when to reach out.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              We're building the AI layer that understands all your customer interactions and takes intelligent action. Today, that starts with outbound - upload cold leads, let SurFox AI qualify them via SMS, your team only talks to hot prospects.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <a
                href="/pricing"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </a>

              <a
                href="/platform"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See the Vision
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Below-fold sections with client interactivity */}
      <HomeClientSections />
    </div>
  );
}
