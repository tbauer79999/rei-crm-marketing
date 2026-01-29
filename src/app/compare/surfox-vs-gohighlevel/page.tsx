import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import GoHighLevelClient from './GoHighLevelClient';

export const metadata = generatePageMetadata('compare-gohighlevel');

const breadcrumbSchema = generateCompareBreadcrumb('GoHighLevel', '/compare/surfox-vs-gohighlevel');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GoHighLevelClient />
    </>
  );
}
