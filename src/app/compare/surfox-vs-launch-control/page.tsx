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
      <LaunchControlClient />
    </>
  );
}
