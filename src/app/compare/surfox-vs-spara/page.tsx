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
            name: 'SurFox vs Spara: Outbound SMS vs Inbound Chat AI (2026)',
            description: 'Spara handles inbound website chat. SurFox qualifies outbound lead lists via SMS (98% open rate). Different tools for different needs.',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'Product',
                  position: 1,
                  name: 'SurFox AI',
                  description: 'AI-powered outbound lead qualification via SMS. Proactively reach and qualify your lead lists.',
                  image: 'https://www.getsurfox.com/logo.png',
                  brand: { '@type': 'Brand', name: 'SurFox' },
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: 'USD',
                    price: '197',
                    priceValidUntil: '2026-12-31',
                    availability: 'https://schema.org/InStock',
                    url: 'https://www.getsurfox.com/pricing',
                  },
                },
                {
                  '@type': 'Product',
                  position: 2,
                  name: 'Spara',
                  description: 'AI SDR for inbound website visitors via chat, email, and voice.',
                  brand: { '@type': 'Brand', name: 'Spara' },
                  offers: {
                    '@type': 'Offer',
                    availability: 'https://schema.org/InStock',
                    url: 'https://www.spara.ai',
                  },
                },
              ],
            },
          }),
        }}
      />
      <SparaClient />
    </>
  );
}
