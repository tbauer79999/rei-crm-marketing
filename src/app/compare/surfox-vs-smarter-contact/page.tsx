import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import SmarterContactClient from './SmarterContactClient';

export const metadata = generatePageMetadata('compare-smarter-contact');

const breadcrumbSchema = generateCompareBreadcrumb('Smarter Contact', '/compare/surfox-vs-smarter-contact');

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
                name: 'Is Smarter Contact good for SMS marketing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Smarter Contact is solid for bulk SMS campaigns and ringless voicemail. It is popular with real estate investors and sales teams doing high-volume outreach. However, it is a broadcasting tool, not a conversation tool. SurFox AI handles two-way conversations automatically.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can Smarter Contact qualify leads?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Smarter Contact can send messages and capture responses, but a human still needs to read and reply to every response. SurFox AI reads responses, continues the conversation, and only alerts your team when a lead is qualified.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between Smarter Contact and SurFox?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Smarter Contact is a bulk messaging platform. SurFox is an AI qualification platform. Smarter Contact sends thousands of texts. SurFox has thousands of conversations.',
                },
              },
            ],
          }),
        }}
      />
      <SmarterContactClient />
    </>
  );
}
