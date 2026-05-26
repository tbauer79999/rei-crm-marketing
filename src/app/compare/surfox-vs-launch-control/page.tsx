import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  X,
  Clock,
  Shield,
  Award,
  Sparkles,
  Rocket,
} from 'lucide-react';
import LaunchControlClient from './LaunchControlClient';

export const metadata = generatePageMetadata('compare-launch-control');

const breadcrumbSchema = generateCompareBreadcrumb('Launch Control', '/compare/surfox-vs-launch-control');

const heroStats = [
  { stat: '$597', label: 'SurFox Growth Plan', sub: 'vs $1,500+ total' },
  { stat: '90%', label: 'AI Automation', sub: 'vs manual work' },
  { stat: '25hrs', label: 'Weekly Time Saved', sub: 'vs constant mgmt' },
  { stat: '15min', label: 'Setup Time', sub: 'vs hours' },
];

const launchControlWorkflow = [
  {
    time: '8:00 AM - Morning Setup (45 mins)',
    description: 'Review overnight responses, update campaign templates, adjust targeting rules, prep new sequences',
  },
  {
    time: '10:00 AM - Response Management (2 hours)',
    description: 'Read every response, craft individual replies, qualify leads manually, update contact records',
  },
  {
    time: '2:00 PM - Campaign Monitoring (1.5 hours)',
    description: 'Check delivery rates, analyze engagement, adjust message timing, create A/B test variations',
  },
  {
    time: '4:00 PM - Lead Follow-up (1+ hour)',
    description: 'Manual follow-ups based on rules, schedule calls with qualified leads, update CRM',
  },
];

const surfoxWorkflow = [
  {
    time: '9:00 AM - Hot Lead Review (15 mins)',
    description: 'Review leads SurFox AI flagged as "ready to buy" - complete conversation context provided',
    icon: Clock,
  },
  {
    time: '12:00 PM - Quick Check (5 mins)',
    description: 'Glance at AI performance dashboard, approve any escalated edge cases',
    icon: Clock,
  },
  {
    time: '5:00 PM - End of Day (10 mins)',
    description: 'Review appointment bookings SurFox AI secured, check conversion metrics, done for the day',
    icon: Clock,
  },
  {
    time: '24/7 - AI Works',
    description: 'SurFox AI handles all conversations, follows up perfectly, learns from every interaction',
    icon: Sparkles,
  },
];

const faqData = [
  {
    question: 'Is Launch Control good for real estate investors?',
    answer: 'Yes, Launch Control is built specifically for real estate investors doing SMS outreach to distressed property leads. It handles compliance well and integrates with popular investor CRMs. However, it requires manual conversation management. SurFox AI handles the conversations automatically.',
  },
  {
    question: 'How does Launch Control compare to SurFox AI for lead qualification?',
    answer: 'Launch Control sends your initial outreach and captures responses. Your team then manages every conversation manually. SurFox AI handles the entire qualification conversation and only escalates leads that are ready to talk.',
  },
  {
    question: 'Can I use Launch Control and SurFox AI together?',
    answer: 'You could use Launch Control for compliance-focused initial blasts in real estate, then import responding leads to SurFox AI for AI-powered qualification conversations. However, most teams find SurFox AI handles both outreach and qualification in one platform.',
  },
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
      <div className="bg-background text-white">

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div>
              {/* Platform Comparison */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                  <div className="w-12 h-12 rounded-xl gradient-bg overflow-hidden flex items-center justify-center">
                    <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-white">SurFox AI</div>
                    <div className="text-sm text-white/60">SMS Lead Qualification</div>
                  </div>
                </div>

                <div className="text-3xl font-semibold text-white/40">VS</div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-white/60">Launch Control</div>
                    <div className="text-sm text-white/50">Campaign Management</div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
                25 Hours Saved<br className="hidden sm:block" />
                Per Week
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-white">Launch Control requires constant campaign management.</strong>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-blue-400">SurFox AI handles 90% of conversations automatically.</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
                <a
                  href="/pricing"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
                >
                  Stop Manual Campaign Work
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white text-base font-semibold hover:border-white/[0.2] hover:bg-card-bg transition"
                >
                  See AI in Action
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
                {heroStats.map((item, i) => (
                  <div key={i} className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                    <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">{item.stat}</div>
                    <div className="text-sm text-white/60">{item.label}</div>
                    <div className="text-xs text-white/40 mt-1">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Difference */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
                Two Completely Different Approaches
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                Launch Control makes you manage campaigns manually. SurFox AI manages conversations automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Launch Control */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white/50" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Launch Control</h3>
                    <p className="text-sm text-white/60">Manual Campaign Management</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                    <h4 className="font-semibold text-white mb-2 text-sm">The Problem They Solve:</h4>
                    <p className="text-sm text-white/70">&quot;I need better campaign management tools and templates&quot;</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Powerful campaign management tools</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Template library and variables</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>All responses require manual handling</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Requires full-time campaign manager</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>No AI or learning capabilities</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                  <p className="text-sm text-white/70">
                    <strong className="text-white">Best For:</strong> Teams who want campaign control and don&apos;t mind manual work
                  </p>
                </div>
              </div>

              {/* SurFox AI */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-bg overflow-hidden flex items-center justify-center mr-4">
                    <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">SurFox AI</h3>
                    <p className="text-sm text-white/60">SMS Lead Qualification</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-blue-500/20 bg-background">
                    <h4 className="font-semibold text-white mb-2 text-sm">The Problem We Solve:</h4>
                    <p className="text-sm text-white/70">&quot;I need more qualified appointments without spending all day managing campaigns&quot;</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>SurFox AI creates unique conversations for each lead</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Handles 90% of conversations autonomously</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Automatically qualifies and escalates hot leads</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>No campaign manager needed</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Learns and improves with every conversation</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-blue-500/20 bg-background">
                  <p className="text-sm text-white/70">
                    <strong className="text-white">Best For:</strong> Sales teams who want qualified appointments without manual campaign work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Workflow */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
                Your Daily Workflow: Before vs After
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                See exactly how SurFox AI eliminates the manual work that Launch Control requires.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Launch Control Workflow */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Launch Control: Your Daily 5+ Hours</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {launchControlWorkflow.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg border border-red-500/20 bg-background">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2 text-white/60" />
                        <span className="text-xs font-medium text-white/70">{item.time}</span>
                      </div>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border-2 border-red-300 bg-red-100 text-center">
                  <p className="text-red-700 font-semibold">Total Daily Time: 5+ Hours</p>
                  <p className="text-red-600 text-sm">Plus constant weekend/evening monitoring</p>
                </div>
              </div>

              {/* SurFox AI Workflow */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">SurFox AI: Your Daily 30 Minutes</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {surfoxWorkflow.map((item, i) => {
                    const Icon = item.icon;
                    const iconColor = Icon === Sparkles ? 'text-green-400' : 'text-white/60';
                    return (
                      <div key={i} className="p-3 rounded-lg border border-green-200 bg-background">
                        <div className="flex items-center mb-2">
                          <Icon className={`w-4 h-4 mr-2 ${iconColor}`} />
                          <span className="text-xs font-medium text-white/70">{item.time}</span>
                        </div>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl border-2 border-green-500/30 bg-green-500/10 text-center">
                  <p className="text-green-400 font-semibold">Total Daily Time: 30 Minutes</p>
                  <p className="text-green-400 text-sm">AI works weekends and nights for you</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
                Feature-by-Feature Breakdown
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                See exactly where SurFox AI&apos;s AI automation outperforms Launch Control&apos;s manual approach.
              </p>
            </div>

            <LaunchControlClient />
          </div>
        </section>

        {/* Lead Resurrection Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
                The Hidden Gold Mine They Miss
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
                Every competitor focuses on NEW leads. SurFox AI finds money in the OLD leads you already own.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Traditional Platforms */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Traditional Platforms</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Only work on new leads flowing in. Your old CRM database sits there gathering dust.
                  Thousands of leads you already paid for, completely ignored.
                </p>
              </div>

              {/* SurFox AI Advantage */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mr-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">SurFox AI Advantage</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Upload your entire old lead database. SurFox AI finds the 3-5% who are actually ready to buy
                  but nobody ever followed up with properly. Turn yesterday&apos;s dead leads into today&apos;s deals.
                </p>
              </div>
            </div>

            {/* ROI Callout */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10 text-center">
              <h3 className="text-2xl font-semibold text-white mb-6">Real ROI Example</h3>
              <div className="space-y-3 text-white/70 max-w-2xl mx-auto">
                <p className="text-base sm:text-lg">
                  <strong>10,000 old leads × 3% AI engagement = 300 conversations</strong>
                </p>
                <p className="text-base sm:text-lg">
                  <strong>300 conversations × 10% conversion = 30 qualified appointments</strong>
                </p>
                <p className="text-base sm:text-lg">
                  <strong>30 appointments × $3,000 avg deal = $90,000 revenue</strong>
                </p>
                <p className="text-sm text-white/60 italic mt-4">
                  From leads you already owned and paid for
                </p>
              </div>
              <p className="text-xl font-bold text-green-400 mt-6">
                This is why SurFox AI pays for itself in month one.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
                The Hidden Cost Reality
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                SurFox AI delivers superior AI automation at 87% lower total cost than Launch Control + manual labor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
              <div className="text-center p-6 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="text-sm text-white/60 mb-2">Launch Control Reality</div>
                <div className="text-4xl font-semibold text-red-600 mb-2">$1,500+</div>
                <div className="text-xs text-white/60 mb-4">Platform + manual labor</div>
                <div className="text-xs text-white/70 space-y-1">
                  <div>• $497+ subscription</div>
                  <div>• $800+ campaign manager</div>
                  <div>• $200+ opportunity costs</div>
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
                <div className="text-sm text-white/60 mb-2">SurFox Growth</div>
                <div className="text-4xl font-semibold text-green-400 mb-2">$597</div>
                <div className="text-xs text-white/60 mb-4">Learning AI does all the work</div>
                <div className="text-xs text-white/70 space-y-1">
                  <div>• $597 with learning AI included</div>
                  <div>• Starts at $147 for basic features</div>
                  <div>• 10,000 messages included</div>
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="text-sm text-white/60 mb-2">You Save</div>
                <div className="text-4xl font-semibold text-blue-400 mb-2">$1,300+</div>
                <div className="text-xs text-white/60 mb-4">per month</div>
                <div className="text-xs text-white/70 space-y-1">
                  <div>• 87% cost savings</div>
                  <div>• 25+ hours/week saved</div>
                  <div>• Better results with AI</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">The Bottom Line</h3>
              <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
                <strong className="text-white">Smart choice:</strong> Pay less, work less, get better results with AI automation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-white/60">
                Common questions about Launch Control vs SurFox AI
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border-2 border-white/[0.08] bg-card-bg"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8 px-4 leading-tight">
                Stop Managing.<br className="hidden sm:block" />
                Start Converting.
              </h2>

              <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
                Stop spending 25+ hours per week on campaign management. Let SurFox AI deliver qualified appointments automatically. <strong className="text-white">30-day money back guarantee.</strong>
              </p>

              <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
                Plans start at $147/month. Most teams choose Growth at $597 for learning AI.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
                <a
                  href="/pricing"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
                >
                  Get Started Risk-Free
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white text-base font-semibold hover:border-white/[0.2] hover:bg-card-bg transition"
                >
                  See SurFox AI Demo
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-400" />
                  30-day guarantee
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  Setup in 15 minutes
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-400" />
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
