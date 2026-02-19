import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import MeeraAIClient from './MeeraAIClient';

export const metadata = generatePageMetadata('compare-meera-ai');

const breadcrumbSchema = generateCompareBreadcrumb('Meera AI', '/compare/surfox-vs-meera-ai');

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
                name: "What's the difference between SurFox and Meera AI?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Meera AI is built for call centers - it focuses on getting leads on the phone via warm transfers. SurFox AI is built for lead intelligence - it qualifies leads via SMS before your team ever gets involved. Meera requires agents standing by; SurFox works while you sleep.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can SurFox AI replace my call center?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not exactly - SurFox AI replaces the need for a call center in the first place. Instead of transferring every lead to waiting agents, SurFox AI qualifies leads via SMS and only surfaces the ones worth calling. Your team calls pre-vetted leads, not random transfers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is SurFox good for inbound leads?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'SurFox AI works for both inbound and outbound, but it really shines with outbound reactivation - reviving old leads you already paid for. If you need pure inbound call handling, Meera might be a better fit. If you want AI-powered lead qualification, choose SurFox.',
                },
              },
            ],
          }),
        }}
      />
      <MeeraAIClient />
    </>
  );
}
