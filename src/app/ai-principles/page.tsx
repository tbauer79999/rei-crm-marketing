import { generatePageMetadata } from '@/data/page-metadata';
import AiPrinciplesClient from './AiPrinciplesClient';

export const metadata = generatePageMetadata('ai-principles');

export default function Page() {
  return <AiPrinciplesClient />;
}
