import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  X,
  Brain,
  Phone,
  Target,
  Clock,
  DollarSign,
  Sparkles,
  Shield,
  Award,
  Database,
  Lock,
} from 'lucide-react';
import MeeraAIClient from './MeeraAIClient';

export const metadata = generatePageMetadata('compare-meera-ai');

const breadcrumbSchema = generateCompareBreadcrumb('Meera AI', '/compare/surfox-vs-meera-ai');

const faqData = [
  {
    question: "What's the difference between SurFox AI and Meera AI?",
    answer: "Meera AI is built for call centers - it focuses on getting leads on the phone via warm transfers. SurFox AI is built for lead intelligence - it qualifies leads via SMS before your team ever gets involved. Meera requires agents standing by; SurFox AI works while you sleep.",
  },
  {
    question: "Can SurFox AI replace my call center?",
    answer: "Not exactly - SurFox AI replaces the need for a call center in the first place. Instead of transferring every lead to waiting agents, SurFox AI qualifies leads via SMS and only surfaces the ones worth calling. Your team calls pre-vetted leads, not random transfers.",
  },
  {
    question: "Is SurFox AI good for inbound leads?",
    answer: "SurFox AI works for both inbound and outbound, but it really shines with outbound reactivation - reviving old leads you already paid for. If you need pure inbound call handling, Meera might be a better fit. If you want AI-powered lead qualification, choose SurFox AI.",
  },
];

const heroStats = [
  { stat: '$147', label: 'Starting Price', sub: 'vs enterprise pricing' },
  { stat: '5,000+', label: 'Zapier Integrations', sub: 'connect anything' },
  { stat: 'Zero', label: 'Call Center Needed', sub: 'AI qualifies first' },
  { stat: '100%', label: 'Data Isolation', sub: 'your data stays yours' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((q) => ({
              '@type': 'Question',
              name: q.question,
              acceptedAnswer: { '@type': 'Answer', text: q.answer },
            })),
          }),
        }}
      />
      <div className="bg-[#F4F5F3] text-[#13171F]">

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div>
              {/* Platform Comparison */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E6E2] overflow-hidden flex items-center justify-center">
                    <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-[#13171F]">SurFox AI</div>
                    <div className="text-sm text-[#5A626E]">SMS Lead Qualification</div>
                  </div>
                </div>

                <div className="text-3xl font-semibold text-[#8A92A0]">VS</div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-[#E4E6E2] bg-white">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#8A92A0]" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-[#5A626E]">Meera AI</div>
                    <div className="text-sm text-[#8A92A0]">Call Center AI</div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
                SMS Qualification<br className="hidden sm:block" />
                vs Call Transfers
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-[#13171F]">Meera gets leads on the phone.</strong>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-[#0A7C8C]">SurFox AI tells you which leads are worth calling.</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
                <a
                  href="/pricing"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
                >
                  Start Qualifying Smarter
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#E4E6E2] hover:bg-[#F4F5F3] transition"
                >
                  See AI in Action
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
                {heroStats.map((item, i) => (
                  <div key={i} className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                    <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">{item.stat}</div>
                    <div className="text-sm text-[#5A626E]">{item.label}</div>
                    <div className="text-xs text-[#8A92A0] mt-1">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Difference */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Two Different Philosophies
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Meera optimizes for call volume. SurFox AI optimizes for call quality.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Meera */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-[#8A92A0]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#13171F]">Meera AI</h3>
                    <p className="text-sm text-[#5A626E]">Call Center Optimization</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-[#E4E6E2] bg-white">
                    <h4 className="font-semibold text-[#13171F] mb-2 text-sm">Built For:</h4>
                    <p className="text-sm text-[#5A626E]">"Get leads on the phone as fast as possible with warm transfers"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Good for inbound call centers</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Warm transfer to waiting agents</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>No lead scoring or intelligence layer</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Assumes you have agents waiting by the phone</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>No dead lead focus - designed for fresh inbound</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E4E6E2] bg-white">
                  <p className="text-sm text-[#5A626E]">
                    <strong className="text-[#13171F]">Best For:</strong> Call centers with agents standing by for warm transfers
                  </p>
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
                    <p className="text-sm text-[#5A626E]">SMS Lead Qualification Platform</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-[#dCEEF1] bg-[#F4F5F3]">
                    <h4 className="font-semibold text-[#13171F] mb-2 text-sm">Built For:</h4>
                    <p className="text-sm text-[#5A626E]">"Only call the ones worth calling - AI qualifies before human touch"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>Dead lead resurrection and outbound reactivation</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>AI scoring + psychological analysis + conversation insights</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>Qualify before human touch - not transfer to call center</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>Tenant-only learning - your data never trains competitors</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>Zapier (5,000+ apps) + RecruiterFlow native integration</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#dCEEF1] bg-[#F4F5F3]">
                  <p className="text-sm text-[#5A626E]">
                    <strong className="text-[#13171F]">Best For:</strong> Sales teams who want qualified leads, not just call volume
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Workflow */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Your Team's Reality: Before vs After
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                See how SurFox AI eliminates the call center overhead that Meera requires.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Meera Workflow */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-[#13171F]">Meera: Call Center Model</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">Staffing Requirement</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Agents must be standing by waiting for warm transfers all day</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Target className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">Lead Quality</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Anyone who answers gets transferred - no pre-qualification</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Database className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">Lead Source</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Requires fresh inbound leads - your old database sits unused</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">Cost Structure</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Enterprise pricing + call center overhead + continuous lead acquisition</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border-2 border-red-300 bg-red-100 text-center">
                  <p className="text-red-700 font-semibold">Result: High volume, variable quality</p>
                  <p className="text-red-600 text-sm">Your team chases every call</p>
                </div>
              </div>

              {/* SurFox AI Workflow */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-[#13171F]">SurFox AI: Intelligence Model</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Brain className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-xs font-medium text-[#5A626E]">Staffing Requirement</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">AI handles qualification - your team only calls pre-vetted leads</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Target className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-xs font-medium text-[#5A626E]">Lead Quality</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Every lead scored and ranked - only hot leads reach your team</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Database className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-xs font-medium text-[#5A626E]">Lead Source</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Revive your dead leads - extract value from what you already own</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-xs font-medium text-[#5A626E]">Cost Structure</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Starts at $147/month - no call center needed, works with existing leads</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border-2 border-green-500/30 bg-green-500/10 text-center">
                  <p className="text-green-400 font-semibold">Result: Only call the ones worth calling</p>
                  <p className="text-green-400 text-sm">Quality over quantity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison (interactive tabs - client component) */}
        <MeeraAIClient />

        {/* Dead Lead Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6">
                The Dead Lead Advantage
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto">
                Meera needs fresh inbound leads. SurFox AI finds gold in the leads you already own.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Call Center Approach */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-[#13171F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#13171F]">Call Center Approach</h3>
                </div>
                <p className="text-[#5A626E] leading-relaxed">
                  Designed for fresh inbound leads that need immediate connection. Your CRM full of old leads?
                  Those sit untouched. The model assumes constant lead flow and agents waiting to take calls.
                </p>
              </div>

              {/* SurFox AI Approach */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mr-4">
                    <Check className="w-6 h-6 text-[#13171F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#13171F]">SurFox AI Approach</h3>
                </div>
                <p className="text-[#5A626E] leading-relaxed">
                  Built for outbound reactivation and dead lead resurrection. Upload your entire old database -
                  SurFox AI finds the 3-5% who are ready to buy but never got proper follow-up. Zero call center needed.
                </p>
              </div>
            </div>

            {/* ROI Callout */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10 text-center">
              <h3 className="text-2xl font-semibold text-[#13171F] mb-6">Dead Lead ROI Example</h3>
              <div className="space-y-3 text-[#5A626E] max-w-2xl mx-auto">
                <p className="text-base sm:text-lg">
                  <strong>10,000 old leads × 3% AI engagement = 300 conversations</strong>
                </p>
                <p className="text-base sm:text-lg">
                  <strong>300 conversations × 10% conversion = 30 qualified appointments</strong>
                </p>
                <p className="text-base sm:text-lg">
                  <strong>30 appointments × $3,000 avg deal = $90,000 revenue</strong>
                </p>
                <p className="text-sm text-[#5A626E] italic mt-4">
                  From leads you already owned and paid for - no call center overhead
                </p>
              </div>
              <p className="text-xl font-bold text-green-400 mt-6">
                SurFox AI pays for itself in month one from your existing leads.
              </p>
            </div>
          </div>
        </section>

        {/* Data Privacy Section */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Your Data Stays Yours
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                SurFox AI's tenant-only learning means your conversations never train your competitors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
                <Lock className="w-12 h-12 text-[#0A7C8C] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#13171F] mb-2">Tenant Isolation</h3>
                <p className="text-sm text-[#5A626E]">Your AI learns only from your conversations - never shared across customers</p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
                <Shield className="w-12 h-12 text-[#0A7C8C] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#13171F] mb-2">Competitive Protection</h3>
                <p className="text-sm text-[#5A626E]">Your winning strategies stay yours - competitors can't learn from your data</p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
                <Database className="w-12 h-12 text-[#0A7C8C] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#13171F] mb-2">Proprietary Intelligence</h3>
                <p className="text-sm text-[#5A626E]">The more you use it, the more YOUR AI knows about YOUR business</p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Choose The Right Tool
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Both platforms have their place - but they solve very different problems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <h3 className="text-xl font-semibold text-[#13171F] mb-4">Choose Meera AI When:</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You have a call center with agents standing by</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Your focus is inbound lead handling</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Connection rate matters more than qualification</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You have enterprise budget for call center infrastructure</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <h3 className="text-xl font-semibold text-[#13171F] mb-4">Choose SurFox AI When:</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You want AI to qualify before your team gets involved</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You have old leads sitting in your CRM unused</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>Lead quality matters more than call volume</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You want to start at $147/month without call center overhead</span>
                  </div>
                </div>
              </div>
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
                Common questions about Meera AI vs SurFox AI
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
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6 sm:mb-8 px-4 leading-tight">
                Ready to Call Only<br className="hidden sm:block" />
                The Ones Worth Calling?
              </h2>

              <p className="text-lg sm:text-xl text-[#5A626E] mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
                Stop building a call center. Start with lead intelligence. <strong className="text-[#13171F]">30-day money back guarantee.</strong>
              </p>

              <p className="text-base text-[#8A92A0] mb-8 max-w-2xl mx-auto">
                Plans start at $147/month. Most teams choose Growth at $597 for learning AI.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
                <a
                  href="/pricing"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
                >
                  Get Started Risk-Free
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
                  Setup in 15 minutes
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
