import { generatePageMetadata } from '@/data/page-metadata';
import TermsClient from './TermsClient';

export const metadata = generatePageMetadata('terms');

export default function Page() {
  return <TermsClient />;
}
