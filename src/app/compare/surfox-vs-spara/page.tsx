import { generatePageMetadata } from '@/data/page-metadata';
import SparaClient from './SparaClient';

export const metadata = generatePageMetadata('compare-spara');

export default function Page() {
  return (
    <>
      {/* Schema.org Product Comparison structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'SurFox vs Spara: Which AI SDR Solution Fits Your Business?',
            description: 'Comparing SurFox and Spara for AI lead qualification. Spara handles inbound website chat. SurFox qualifies outbound leads via SMS.',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'Product',
                  position: 1,
                  name: 'SurFox AI',
                  description: 'AI-powered outbound lead qualification via SMS. Proactively reach and qualify your lead lists.',
                  brand: { '@type': 'Brand', name: 'SurFox' },
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: 'USD',
                    price: '197',
                    priceValidUntil: '2025-12-31',
                  },
                },
                {
                  '@type': 'Product',
                  position: 2,
                  name: 'Spara',
                  description: 'AI SDR for inbound website visitors via chat, email, and voice.',
                  brand: { '@type': 'Brand', name: 'Spara' },
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
