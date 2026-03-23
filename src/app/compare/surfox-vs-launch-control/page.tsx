import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import LaunchControlClient from './LaunchControlClient';

export const metadata = generatePageMetadata('compare-launch-control');

const breadcrumbSchema = generateCompareBreadcrumb('Launch Control', '/compare/surfox-vs-launch-control');

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
                name: 'Is Launch Control good for real estate investors?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Launch Control is built specifically for real estate investors doing SMS outreach to distressed property leads. It handles compliance well and integrates with popular investor CRMs. However, it requires manual conversation management. SurFox AI handles the conversations automatically.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does Launch Control compare to SurFox AI for lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Launch Control sends your initial outreach and captures responses. Your team then manages every conversation manually. SurFox AI handles the entire qualification conversation and only escalates leads that are ready to talk.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use Launch Control and SurFox AI together?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You could use Launch Control for compliance-focused initial blasts in real estate, then import responding leads to SurFox AI for AI-powered qualification conversations. However, most teams find SurFox AI handles both outreach and qualification in one platform.',
                },
              },
            ],
          }),
        }}
      />
      <LaunchControlClient />
    </>
  );
}
