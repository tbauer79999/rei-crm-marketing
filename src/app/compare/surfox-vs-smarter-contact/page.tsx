import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import SmarterContactClient from './SmarterContactClient';

export const metadata = generatePageMetadata('compare-smarter-contact');

const breadcrumbSchema = generateCompareBreadcrumb('Smarter Contact', '/compare/surfox-vs-smarter-contact');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SmarterContactClient />
    </>
  );
}
