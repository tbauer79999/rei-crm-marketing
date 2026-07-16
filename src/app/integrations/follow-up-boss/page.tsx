import { generatePageMetadata, generateSoftwareApplicationSchema } from '@/data/page-metadata';
import FollowUpBossClient from './FollowUpBossClient';

export const metadata = generatePageMetadata('integrations-follow-up-boss');

export default function Page() {
  const softwareSchema = generateSoftwareApplicationSchema({
    featureList:
      'Native Follow Up Boss integration with stage-based campaign routing and two-way sync. No Zapier required.',
  });

  return (
    <>
      {/* SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <FollowUpBossClient />
    </>
  );
}
