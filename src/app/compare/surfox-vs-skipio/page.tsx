import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import SkipioClient from './SkipioClient';

export const metadata = generatePageMetadata('compare-skipio');

const breadcrumbSchema = generateCompareBreadcrumb('Skipio', '/compare/surfox-vs-skipio');

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
                name: 'Is Skipio good for lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Skipio is a solid SMS platform for manual texting and drip campaigns. However, it requires your team to write and send messages manually or set up static sequences. SurFox AI uses AI to handle two-way conversations automatically, qualifying leads without human involvement until they are ready to talk.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can Skipio replace SDRs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not really. Skipio is a tool that makes SDRs more efficient, but someone still needs to manage the conversations. SurFox AI actually replaces the initial qualification conversations entirely. Your team only talks to leads the AI has already qualified.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between Skipio and SurFox AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Skipio is an SMS sending platform. SurFox AI is an AI-powered SMS qualification platform. Skipio helps you send texts faster. SurFox AI has conversations for you and tells you who is ready to buy.',
                },
              },
            ],
          }),
        }}
      />
      <SkipioClient />
    </>
  );
}
