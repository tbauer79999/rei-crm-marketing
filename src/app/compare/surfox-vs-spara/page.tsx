import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  X,
  MessageSquare,
  Globe,
  Target,
  Clock,
  Zap,
  Users,
  Building2,
  Shield,
  Award,
  Smartphone,
} from 'lucide-react';

export const metadata = generatePageMetadata('compare-spara');

const breadcrumbSchema = generateCompareBreadcrumb('Spara', '/compare/surfox-vs-spara');

const comparisonData = [
  { factor: 'Primary channel', surfox: 'SMS (98% open rate)', spara: 'Website chat, email, voice' },
  { factor: 'Use case', surfox: 'Outbound - work YOUR lead lists', spara: 'Inbound - convert website visitors' },
  { factor: 'Lead sources', surfox: 'Any list - aged leads, purchased, events, scraped', spara: 'Only website traffic' },
  { factor: 'Target customer', surfox: 'SMBs, staffing agencies, real estate, service businesses', spara: 'Enterprise SaaS with high web traffic' },
  { factor: 'Pricing', surfox: '$147-$2,497/mo', spara: 'Enterprise contracts (unlisted)' },
  { factor: 'Setup', surfox: 'Self-serve, live in minutes', spara: 'Sales-led implementation' },
  { factor: 'Best for', surfox: 'Teams with lead lists but no time to text them all', spara: 'Companies with heavy inbound web traffic' },
];

const faqData = [
  {
    question: 'Can Spara replace SDRs for initial lead qualification of outbound lead lists?',
    answer: "For inbound website visitors, Spara can replace SDRs for initial lead qualification. But Spara cannot qualify outbound lead lists - purchased leads, aged contacts, trade show signups, or any list where you need to reach out first. If you need SDR replacement for outbound lead list qualification via SMS, that's what SurFox AI is built for. Different tools solving different sides of the lead qualification problem.",
  },
  {
    question: 'Can Spara replace SDRs for initial lead qualification?',
    answer: 'For inbound website visitors, yes. Spara handles initial chat conversations and qualifies leads who come to your site. But Spara cannot proactively reach out to lead lists you already own. If you have purchased leads, aged leads, or event signups sitting in your CRM, you need an outbound tool like SurFox AI.',
  },
  {
    question: 'Does Spara work for inbound lead qualification?',
    answer: 'Yes, that is exactly what Spara is built for. It engages website visitors through chat, email, and voice. If your leads come to you through SEO, ads, or content marketing, Spara qualifies them. If you need to reach out to leads first, that is where SurFox AI comes in.',
  },
  {
    question: 'Can I use both Spara and SurFox AI?',
    answer: 'Yes. Spara handles inbound website visitors. SurFox AI handles outbound to your existing lead lists via SMS. Different channels, complementary tools. Many sales teams use an inbound solution alongside an outbound solution.',
  },
];

const industries = [
  { icon: Users, name: 'Staffing Agencies' },
  { icon: Building2, name: 'Real Estate' },
  { icon: Shield, name: 'Insurance' },
  { icon: Zap, name: 'Solar' },
  { icon: Target, name: 'Home Services' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'SurFox AI vs Spara: Best Spara Alternative for Outbound Lead Qualification (2026)',
            description: "Looking for a Spara replacement for outbound lead lists? SurFox AI qualifies leads via SMS (98% open rate) - where Spara's inbound chat can't reach. Compare features, pricing & use cases.",
            mainEntity: {
              '@type': 'Product',
              name: 'SurFox AI',
              description: 'AI-powered outbound lead qualification via SMS. Proactively reach and qualify your lead lists.',
              image: 'https://www.getsurfox.com/newSurFoxLogo1.png',
              brand: { '@type': 'Brand', name: 'SurFox AI' },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: '97',
                priceValidUntil: '2026-12-31',
                availability: 'https://schema.org/InStock',
                url: 'https://www.getsurfox.com/pricing',
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can Spara replace SDRs for initial lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For inbound website visitors, yes. Spara handles initial chat conversations and qualifies leads who come to your site. But Spara cannot proactively reach out to lead lists you already own. If you have purchased leads, aged leads, or event signups sitting in your CRM, you need an outbound tool like SurFox AI.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Spara work for inbound lead qualification?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, that is exactly what Spara is built for. It engages website visitors through chat, email, and voice. If your leads come to you through SEO, ads, or content marketing, Spara qualifies them. If you need to reach out to leads first, that is where SurFox AI comes in.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use both Spara and SurFox AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Spara handles inbound website visitors. SurFox AI handles outbound to your existing lead lists via SMS. Different channels, complementary tools. Many sales teams use an inbound solution alongside an outbound solution.',
                },
              },
            ],
          }),
        }}
      />
      <div className="bg-[#F4F5F3] text-[#13171F]">

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Platform Comparison */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E6E2] overflow-hidden flex items-center justify-center">
                  <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-[#13171F]">SurFox AI</div>
                  <div className="text-sm text-[#5A626E]">Outbound SMS</div>
                </div>
              </div>

              <div className="text-3xl font-semibold text-[#8A92A0]">VS</div>

              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-[#E4E6E2] bg-white">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#8A92A0]" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-[#5A626E]">Spara</div>
                  <div className="text-sm text-[#8A92A0]">Inbound Chat AI</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              SurFox AI vs Spara: The Outbound<br className="hidden sm:block" />
              Alternative for Lead List Qualification
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-[#13171F]">Spara handles inbound website visitors.</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-[#0A7C8C]">SurFox AI qualifies your outbound lead lists via SMS.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <a
                href="/pricing"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                Have a Lead List? Try SurFox Free
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/demo"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#E4E6E2] hover:bg-[#F4F5F3] transition"
              >
                See SurFox AI in Action
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">98%</div>
                <div className="text-sm text-[#5A626E]">SMS Open Rate</div>
                <div className="text-xs text-[#8A92A0] mt-1">vs 20% email</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">45%</div>
                <div className="text-sm text-[#5A626E]">Response Rate</div>
                <div className="text-xs text-[#8A92A0] mt-1">people text back</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">$147</div>
                <div className="text-sm text-[#5A626E]">Starting Price</div>
                <div className="text-xs text-[#8A92A0] mt-1">self-serve setup</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">Minutes</div>
                <div className="text-sm text-[#5A626E]">To Go Live</div>
                <div className="text-xs text-[#8A92A0] mt-1">not weeks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Difference */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                The Core Difference
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Different tools for different lead qualification needs. Here&apos;s the key distinction:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Spara */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-[#8A92A0]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#13171F]">Spara</h3>
                    <p className="text-sm text-[#5A626E]">Inbound Website AI SDR</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E4E6E2] bg-white mb-6">
                  <h4 className="font-semibold text-[#13171F] mb-2 text-sm">How It Works:</h4>
                  <p className="text-sm text-[#5A626E]">Spara engages visitors who come to your website through chat widget, email, and voice. It&apos;s an AI SDR for your inbound marketing motion.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Great for companies with high website traffic</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Chat widget engages website visitors</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Email and voice channel support</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Only works with leads who find you first</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Can&apos;t proactively reach your lead lists</span>
                  </div>
                </div>
              </div>

              {/* SurFox AI */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E6E2] overflow-hidden flex items-center justify-center mr-4">
                    <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#13171F]">SurFox AI</h3>
                    <p className="text-sm text-[#5A626E]">Outbound SMS Lead Qualification</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#dCEEF1] bg-[#F4F5F3] mb-6">
                  <h4 className="font-semibold text-[#13171F] mb-2 text-sm">How It Works:</h4>
                  <p className="text-sm text-[#5A626E]">SurFox AI proactively reaches out to YOUR lead lists via SMS. Upload cold leads, and AI qualifies them automatically. Your team only talks to hot prospects.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>Works any lead list - aged, purchased, events, scraped</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>98% SMS open rate - people actually see it</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>Proactive outreach - don&apos;t wait for leads to find you</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>SMB-friendly pricing starting at $147/mo</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>Self-serve setup - live in minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Side-by-Side Comparison
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Quick reference to see which solution fits your lead qualification needs.
              </p>
            </div>

            <div className="px-4 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-white border-b-2 border-[#E4E6E2] font-semibold text-[#13171F]">Factor</th>
                    <th className="text-left p-4 bg-blue-500/5 border-b-2 border-[#dCEEF1] font-semibold text-[#0A7C8C]">SurFox AI</th>
                    <th className="text-left p-4 bg-white border-b-2 border-[#E4E6E2] font-semibold text-[#5A626E]">Spara</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#E4E6E2]"
                    >
                      <td className="p-4 font-medium text-[#13171F] bg-white">{row.factor}</td>
                      <td className="p-4 text-[#5A626E] bg-blue-500/5">{row.surfox}</td>
                      <td className="p-4 text-[#5A626E] bg-white">{row.spara}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Choose SurFox AI */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center mb-6">
                  <Smartphone className="w-8 h-8 text-[#0A7C8C] mr-3" />
                  <h3 className="text-2xl font-semibold text-[#13171F]">When to Choose SurFox AI</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You have lead lists (purchased, aged, event signups) that need qualification</span>
                  </div>
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>Your prospects respond better to SMS than email</span>
                  </div>
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You&apos;re an SMB without enterprise budget</span>
                  </div>
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You want to proactively reach leads, not wait for them to find you</span>
                  </div>
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>Industries: Staffing, real estate, home services, insurance, solar</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#F4F5F3] border border-[#dCEEF1]">
                  <p className="text-sm text-[#5A626E]">
                    <strong className="text-[#13171F]">Bottom line:</strong> SurFox AI is for teams with lead lists but no time to text them all. AI does the outreach, you do the closing.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-[#8A92A0] mr-3" />
                  <h3 className="text-2xl font-semibold text-[#13171F]">When to Choose Spara</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You get significant inbound website traffic</span>
                  </div>
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You need a chat widget to engage visitors</span>
                  </div>
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You&apos;re enterprise with Salesforce/HubSpot infrastructure</span>
                  </div>
                  <div className="flex items-start text-[#5A626E]">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Your leads come to you (inbound marketing motion)</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white border border-[#E4E6E2]">
                  <p className="text-sm text-[#5A626E]">
                    <strong className="text-[#13171F]">Bottom line:</strong> Spara is for companies with heavy inbound web traffic who want AI to handle initial visitor engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Looking to Replace or Supplement Spara */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6 px-4">
              Looking to Replace or Supplement Spara for Outbound?
            </h2>
            <p className="text-lg sm:text-xl text-[#5A626E] mb-6 leading-relaxed px-4">
              Spara excels at inbound website chat qualification. But if you have cold lead lists, owned databases, or trade show contacts sitting in your CRM - Spara can&apos;t reach them. That&apos;s the gap SurFox AI fills as the outbound alternative.
            </p>
            <p className="text-lg sm:text-xl text-[#5A626E] mb-6 leading-relaxed px-4">
              If you&apos;re evaluating a Spara replacement specifically for outbound lead qualification, the comparison comes down to one question: <strong className="text-[#13171F]">do your leads come to you, or do you need to reach out to them?</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-8">
              <div className="p-6 rounded-2xl border-2 border-[#E4E6E2] bg-white">
                <p className="font-semibold text-[#13171F] mb-2">Spara is the right tool when:</p>
                <ul className="space-y-2 text-sm text-[#5A626E]">
                  <li className="flex items-start"><span className="text-green-400 mr-2 flex-shrink-0">✓</span>Leads arrive via your website, SEO, or paid ads</li>
                  <li className="flex items-start"><span className="text-green-400 mr-2 flex-shrink-0">✓</span>You need a chat widget to convert inbound visitors</li>
                  <li className="flex items-start"><span className="text-green-400 mr-2 flex-shrink-0">✓</span>You have high inbound web traffic to qualify</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <p className="font-semibold text-[#13171F] mb-2">SurFox AI is the right Spara alternative when:</p>
                <ul className="space-y-2 text-sm text-[#5A626E]">
                  <li className="flex items-start"><span className="text-[#0A7C8C] mr-2 flex-shrink-0">✓</span>You have lead lists that need proactive outreach</li>
                  <li className="flex items-start"><span className="text-[#0A7C8C] mr-2 flex-shrink-0">✓</span>Leads won&apos;t find you - you need to reach them first</li>
                  <li className="flex items-start"><span className="text-[#0A7C8C] mr-2 flex-shrink-0">✓</span>You need SMS open rates (98%) vs chat widget engagement</li>
                </ul>
              </div>
            </div>
            <div className="px-4">
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition"
              >
                Try SurFox AI - the Spara Alternative for Outbound
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Can They Work Together */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                <span className="text-sm font-semibold text-green-400">COMPLEMENTARY TOOLS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6 px-4">
                Can They Work Together?
              </h2>

              <p className="text-lg sm:text-xl text-[#5A626E] mb-8 leading-relaxed px-4">
                <strong className="text-[#13171F]">Yes!</strong> Spara handles your website visitors, SurFox AI works your outbound lists. Different channels, different use cases, complementary tools.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div className="p-6 rounded-2xl border-2 border-[#E4E6E2] bg-white">
                  <Globe className="w-10 h-10 text-[#8A92A0] mx-auto mb-4" />
                  <h4 className="font-semibold text-[#13171F] mb-2">Spara Handles</h4>
                  <p className="text-sm text-[#5A626E]">Website visitors who find you through marketing, SEO, ads</p>
                </div>
                <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                  <Smartphone className="w-10 h-10 text-[#0A7C8C] mx-auto mb-4" />
                  <h4 className="font-semibold text-[#13171F] mb-2">SurFox AI Handles</h4>
                  <p className="text-sm text-[#5A626E]">Your lead lists - purchased, aged, events, any outbound source</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The SMS Advantage */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                The SMS Advantage
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Why SMS lead qualification outperforms chatbots and email for outbound.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
                <div className="text-4xl font-bold text-[#0A7C8C] mb-2">98%</div>
                <h4 className="font-semibold text-[#13171F] mb-2">SMS Open Rate</h4>
                <p className="text-sm text-[#5A626E]">vs 20% for email. Your message actually gets seen.</p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
                <div className="text-4xl font-bold text-[#0A7C8C] mb-2">45%</div>
                <h4 className="font-semibold text-[#13171F] mb-2">Response Rate</h4>
                <p className="text-sm text-[#5A626E]">People actually text back - they don&apos;t respond to chatbots the same way.</p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
                <MessageSquare className="w-10 h-10 text-[#0A7C8C] mx-auto mb-2" />
                <h4 className="font-semibold text-[#13171F] mb-2">Feels Personal</h4>
                <p className="text-sm text-[#5A626E]">SMS feels personal, not corporate. It&apos;s how people actually communicate.</p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
                <Zap className="w-10 h-10 text-[#0A7C8C] mx-auto mb-2" />
                <h4 className="font-semibold text-[#13171F] mb-2">Proactive</h4>
                <p className="text-sm text-[#5A626E]">Don&apos;t wait for leads to visit your site. Reach out to them first.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Industries */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Who Uses SurFox AI?
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                SMBs and sales teams who have lead lists but no time to text them all.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl border-2 border-[#E4E6E2] bg-white text-center"
                >
                  <industry.icon className="w-8 h-8 text-[#0A7C8C] mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#13171F]">{industry.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#5A626E]">
                Common questions about Spara vs SurFox AI
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border-2 border-[#E4E6E2] bg-white"
                >
                  <h3 className="text-lg font-semibold text-[#13171F] mb-3">{faq.question}</h3>
                  <p className="text-[#5A626E] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6 sm:mb-8 px-4 leading-tight">
              Have a Lead List That<br className="hidden sm:block" />
              Needs Qualifying?
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Upload your leads, let SurFox AI qualify them via SMS, your team only talks to hot prospects. <strong className="text-[#13171F]">30-day money back guarantee.</strong>
            </p>

            <p className="text-base text-[#8A92A0] mb-8 max-w-2xl mx-auto">
              Plans start at $147/month. Self-serve setup - live in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <a
                href="/pricing"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                Try SurFox Free
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/demo"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#E4E6E2] hover:bg-[#F4F5F3] transition"
              >
                See SurFox AI Demo
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#5A626E]">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                30-day guarantee
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                Setup in minutes
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
