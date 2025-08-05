import type { Metadata } from 'next'
import SurFoxMystery from '../app/components/SurFoxMystery'

export const metadata: Metadata = {
  title: "SurFox — Something Revolutionary is Coming",
  description: "Patent pending technology that will change how sales teams operate forever. Join the waitlist for early access.",
}

export default function Page() {
  return <SurFoxMystery />
}