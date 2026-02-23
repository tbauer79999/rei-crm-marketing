import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import TextusClient from './TextusClient';

export const metadata = generatePageMetadata('compare-textus');

const breadcrumbSchema = generateCompareBreadcrumb('TextUs', '/compare/surfox-vs-textus');

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
                name: 'Is TextUs good for lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TextUs is built for business texting and team collaboration. It is great for sales teams who want to text from their CRM. However, TextUs requires humans to manage every conversation. SurFox AI handles the back-and-forth automatically and only escalates qualified leads.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does TextUs pricing compare to SurFox?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TextUs starts around $300 per month per user for basic plans and scales up for teams. SurFox starts at $97 per month and handles unlimited AI conversations. For teams doing high-volume outreach, SurFox is significantly more cost-effective.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can TextUs automate lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TextUs has templates and scheduling, but no AI that carries on conversations. Every response still requires human attention. SurFox AI reads responses, asks follow-up questions, and qualifies leads without human involvement.',
                },
              },
            ],
          }),
        }}
      />
      <TextusClient />
    </>
  );
}
