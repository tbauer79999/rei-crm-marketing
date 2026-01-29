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
      <SkipioClient />
    </>
  );
}
