import { generatePageMetadata } from '@/data/page-metadata';
import DemoExperience from './DemoExperience';

// The self-serve demo: the visitor gives a name, website and email and gets a working SurFox AI account built from their own site.
// (The earlier scripted demo page lives at /demo_old, hidden from search.)
export const metadata = generatePageMetadata('demo');

export default function Page() {
  return <DemoExperience />;
}
