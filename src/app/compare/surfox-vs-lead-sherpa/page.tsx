import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import LeadSherpaClient from './LeadSherpaClient';

export const metadata = generatePageMetadata('compare-lead-sherpa');

const breadcrumbSchema = generateCompareBreadcrumb('Lead Sherpa', '/compare/surfox-vs-lead-sherpa');

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
                name: 'Is Lead Sherpa good for real estate investors?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Lead Sherpa is built specifically for real estate investors doing skip tracing and cold outreach. It is a solid tool for pulling data and sending initial texts. However, Lead Sherpa requires manual follow-up. SurFox AI handles the entire conversation until the lead is qualified.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can Lead Sherpa replace cold calling?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Lead Sherpa helps you text instead of call, but someone still needs to manage responses. SurFox AI can replace both cold calling and manual texting by handling two-way SMS conversations automatically.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between Lead Sherpa and SurFox AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Lead Sherpa is a skip tracing and SMS blasting tool for real estate. SurFox AI is an AI-powered conversation platform that works across industries. Lead Sherpa sends messages. SurFox AI has conversations.',
                },
              },
            ],
          }),
        }}
      />
      <LeadSherpaClient />
    </>
  );
}
