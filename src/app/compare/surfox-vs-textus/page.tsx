import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import TextusClient from './TextusClient';

export const metadata = generatePageMetadata('compare-textus');

const breadcrumbSchema = generateCompareBreadcrumb('TextUs', '/compare/surfox-vs-textus');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TextusClient />
    </>
  );
}
