import { generatePageMetadata } from '@/data/page-metadata';
import BlogClient from './BlogClient';

export const metadata = generatePageMetadata('blog');

export default function Page() {
  return <BlogClient />;
}
