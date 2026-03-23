import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import SparaClient from './SparaClient';

export const metadata = generatePageMetadata('compare-spara');

const breadcrumbSchema = generateCompareBreadcrumb('Spara', '/compare/surfox-vs-spara');

export default function Page() {
  return (
    <>
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Schema.org Product Comparison structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'SurFox AI vs Spara: Best Spara Alternative for Outbound Lead Qualification (2026)',
            description: 'Looking for a Spara replacement for outbound lead lists? SurFox AI qualifies leads via SMS (98% open rate) - where Spara\'s inbound chat can\'t reach. Compare features, pricing & use cases.',
            mainEntity: {
              '@type': 'Product',
              name: 'SurFox AI',
              description: 'AI-powered outbound lead qualification via SMS. Proactively reach and qualify your lead lists.',
              image: 'https://www.getsurfox.com/newSurFoxLogo1.png',
              brand: { '@type': 'Brand', name: 'SurFox AI' },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: '97',
                priceValidUntil: '2026-12-31',
                availability: 'https://schema.org/InStock',
                url: 'https://www.getsurfox.com/pricing',
              },
            },
          }),
        }}
      />
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can Spara replace SDRs for initial lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For inbound website visitors, yes. Spara handles initial chat conversations and qualifies leads who come to your site. But Spara cannot proactively reach out to lead lists you already own. If you have purchased leads, aged leads, or event signups sitting in your CRM, you need an outbound tool like SurFox AI.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Spara work for inbound lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, that is exactly what Spara is built for. It engages website visitors through chat, email, and voice. If your leads come to you through SEO, ads, or content marketing, Spara qualifies them. If you need to reach out to leads first, that is where SurFox AI comes in.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use both Spara and SurFox AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Spara handles inbound website visitors. SurFox AI handles outbound to your existing lead lists via SMS. Different channels, complementary tools. Many sales teams use an inbound solution alongside an outbound solution.',
                },
              },
            ],
          }),
        }}
      />
      <SparaClient />
    </>
  );
}
