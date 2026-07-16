import { generatePageMetadata, generateSoftwareApplicationSchema } from '@/data/page-metadata';
import GoHighLevelClient from './GoHighLevelClient';

export const metadata = generatePageMetadata('integrations-gohighlevel');

export default function Page() {
  const softwareSchema = generateSoftwareApplicationSchema({
    featureList:
      'Native GoHighLevel integration with tag-based campaign routing and two-way sync. No Zapier required.',
  });

  return (
    <>
      {/* SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <GoHighLevelClient />
    </>
  );
}
