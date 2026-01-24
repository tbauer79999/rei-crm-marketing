import { generatePageMetadata } from '@/data/page-metadata';
import MeeraAIClient from './MeeraAIClient';

export const metadata = generatePageMetadata('compare-meera-ai');

export default function Page() {
  return <MeeraAIClient />;
}
