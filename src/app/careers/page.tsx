import { generatePageMetadata } from '@/data/page-metadata';

export const metadata = generatePageMetadata('careers');

export default function CareersPage() {
  return (
    <div className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-navy">Careers</h1>
      <p className="text-gray-600 mt-4">Coming soon...</p>
    </div>
  )
}
