import { Metadata } from 'next';
import HomeClient from './HomeClient';

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

export default function Page() {
  return (
    <>
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
              'https://www.linkedin.com/company/surfox',
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

      <HomeClient />
    </>
  );
}
