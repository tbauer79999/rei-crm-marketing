import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import GoHighLevelClient from './GoHighLevelClient';

export const metadata = generatePageMetadata('compare-gohighlevel');

const breadcrumbSchema = generateCompareBreadcrumb('GoHighLevel', '/compare/surfox-vs-gohighlevel');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                name: 'Does GoHighLevel have AI lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'GoHighLevel has basic automation and workflows, but its AI capabilities require significant setup and configuration. SurFox AI is purpose-built for AI-powered SMS qualification with minimal setup. GoHighLevel is a swiss army knife. SurFox AI is a scalpel for lead qualification.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is GoHighLevel good for SMS marketing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, GoHighLevel includes SMS as part of its all-in-one platform. However, the SMS features are one of many tools, not the core focus. SurFox AI is built specifically for AI-powered SMS conversations and lead qualification.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why choose SurFox AI over GoHighLevel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Choose GoHighLevel if you need an all-in-one CRM, website builder, and marketing platform. Choose SurFox AI if you specifically need AI to qualify leads via SMS. Many teams use GoHighLevel as their CRM and SurFox AI for AI-powered lead qualification.',
                },
              },
            ],
          }),
        }}
      />
      <GoHighLevelClient />
    </>
  );
}
