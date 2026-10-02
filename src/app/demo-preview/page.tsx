import type { Metadata } from 'next';
import DemoExperience from './DemoExperience';

// Prototype route. Kept out of the index so it cannot compete with the real /demo.
export const metadata: Metadata = {
  title: 'Meet Surf',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DemoExperience />;
}
