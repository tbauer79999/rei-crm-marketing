import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import AllCompetitorsClient from './AllCompetitorsClient';

export const metadata = generatePageMetadata('compare-all-competitors');

const breadcrumbSchema = generateCompareBreadcrumb('All Competitors', '/compare/surfox-vs-all-competitors');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AllCompetitorsClient />
    </>
  );
}
