import { Metadata } from 'next';
import HomeClientSections from './HomeClientSections';

export const metadata: Metadata = {
  title: 'AI SDR: Qualify Leads via SMS | Cut Headcount Costs',
  description:
    'Replace expensive SDRs with AI. SurFox qualifies cold leads via SMS automatically - 60–80% lower cost per lead. Your team only talks to hot prospects.',
  keywords: [
    'AI SDR',
    'AI SDR platform',
    'AI SDR software',
    'replace SDR team with AI',
    'reduce SDR headcount',
    'AI SDR ROI',
    'SMS lead qualification',
    'automated lead qualification',
    'AI lead qualification software',
    'AI sales automation',
    'outbound AI SDR',
    'lead scoring software',
  ],
  openGraph: {
    title: 'SurFox AI | AI SDR: Qualify Leads via SMS & Cut Headcount Costs',
    description:
      'Replace expensive SDRs with AI. SurFox qualifies cold leads via SMS automatically - 60–80% lower cost per lead. Your team only talks to hot prospects.',
    url: 'https://www.getsurfox.com',
    type: 'website',
    siteName: 'SurFox AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SurFox AI | AI SDR: Qualify Leads via SMS & Cut Headcount Costs',
    description:
      'Replace expensive SDRs with AI. SurFox qualifies cold leads via SMS automatically - 60–80% lower cost per lead. Your team only talks to hot prospects.',
    site: '@getSurFox',
    creator: '@getSurFox',
  },
  alternates: {
    canonical: 'https://www.getsurfox.com',
  },
};

// Inline SVG - zero JS dependency in server-rendered hero
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="bg-white text-gray-900">
      {/* Organization + LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Organization', 'LocalBusiness'],
            name: 'SurFox',
            legalName: 'SurFox, Inc.',
            url: 'https://www.getsurfox.com',
            logo: 'https://www.getsurfox.com/logo.png',
            foundingDate: '2024',
            description:
              'AI-powered SMS lead qualification platform that automatically engages, scores, and qualifies cold leads at scale',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Orlando',
              addressRegion: 'FL',
              addressCountry: 'US',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: 'tom@getsurfox.com',
              availableLanguage: ['English'],
            },
            sameAs: [
              'https://twitter.com/getSurFox',
              'https://www.linkedin.com/company/surfoxai',
            ],
            founder: {
              '@type': 'Person',
              name: 'Tom Bauer',
              url: 'https://www.getsurfox.com/leadership',
            },
            areaServed: {
              '@type': 'Country',
              name: 'United States',
            },
            serviceType: [
              'AI SDR Platform',
              'AI Lead Qualification',
              'SMS Lead Qualification',
              'AI Lead Qualification Software',
              'SDR Headcount Reduction',
              'Outbound Sales Automation',
            ],
          }),
        }}
      />

      {/* SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'SurFox AI',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              description: 'Plans start from $97/month',
              url: 'https://www.getsurfox.com/pricing',
            },
            operatingSystem: 'Web-based',
            description:
              'AI-powered SMS lead qualification platform - upload cold leads, let AI engage and qualify them, your team only talks to hot prospects',
          }),
        }}
      />

      {/* FAQPage schema - enables FAQ rich results in Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How does SurFox AI compare to hiring an SDR?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A full-time SDR costs $60–80K/year in salary plus benefits, takes 3–6 months to ramp, and can only handle a fraction of your leads. SurFox AI runs 24/7, engages thousands of leads simultaneously, and typically delivers 60–80% lower cost per qualified lead.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does the 50-point lead scoring system work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "The AI analyzes each conversation across multiple dimensions - response quality, engagement level, buying signals, timing, and your qualification criteria. As conversations progress, the lead's score rises until they hit 'hot' status (typically 40+ points), triggering a handoff to your sales team.",
                },
              },
              {
                '@type': 'Question',
                name: "What happens when a lead becomes 'hot'?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Your sales team gets notified immediately via your preferred channel (email, Slack, CRM). The AI steps back and provides a full conversation transcript, qualification summary, and key insights - so your team walks into a warm, informed call.',
                },
              },
              {
                '@type': 'Question',
                name: "Can I customize the AI's tone and scoring threshold?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. You can adjust the AI's persona (professional, casual, consultative) to match your brand, and set the score threshold for what counts as a hot lead. The AI's logic continuously improves based on conversation outcomes.",
                },
              },
              {
                '@type': 'Question',
                name: 'How does the knowledge base work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Upload PDFs, pricing sheets, case studies, or FAQs. The AI automatically indexes them and references the content during conversations to answer prospect questions accurately. Update your docs and the AI picks it up immediately - no retraining.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is SurFox AI TCPA compliant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'SurFox is built with TCPA compliance in mind - opt-in verification, clear sender identification, automated opt-out handling, and full conversation logging. We recommend consulting your legal team to confirm your specific use case.',
                },
              },
              {
                '@type': 'Question',
                name: 'How fast can I get started?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Faster than you think. When you sign up, you start a 14-day free trial and are immediately placed on our pre-approved Twilio A2P campaign - so you can start texting leads within minutes. During your trial, you register your own A2P campaign. By the time your trial ends, you own your sending infrastructure.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero - server-rendered for fastest LCP */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 md:pb-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
            Stop Paying SDRs to{' '}<br className="hidden sm:block" />
            Qualify Cold Leads
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
            Upload your cold leads. SurFox AI engages, scores, and qualifies each one via SMS - automatically. When they&apos;re ready to buy, your team takes over.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <a
              href="/pricing"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </a>

            <a
              href="/demo"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Below-fold sections */}
      <HomeClientSections />
    </div>
  );
}
