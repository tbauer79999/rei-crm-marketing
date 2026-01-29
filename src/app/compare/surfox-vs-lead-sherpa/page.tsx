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
      <LeadSherpaClient />
    </>
  );
}
