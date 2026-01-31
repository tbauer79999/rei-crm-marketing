import { generatePageMetadata } from '@/data/page-metadata';
import ROIClient from './ROIClient';

export const metadata = generatePageMetadata('roi');

export default function Page() {
  return <ROIClient />;
}
