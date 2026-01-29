import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import MeeraAIClient from './MeeraAIClient';

export const metadata = generatePageMetadata('compare-meera-ai');

const breadcrumbSchema = generateCompareBreadcrumb('Meera AI', '/compare/surfox-vs-meera-ai');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MeeraAIClient />
    </>
  );
}
