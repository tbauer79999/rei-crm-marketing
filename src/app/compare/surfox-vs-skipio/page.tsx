import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import Image from 'next/image';
import { ArrowRight, Check, X, Calendar, Clock, Sparkles, Shield, Award } from 'lucide-react';
import SkipioClient from './SkipioClient';

export const metadata = generatePageMetadata('compare-skipio');

const breadcrumbSchema = generateCompareBreadcrumb('Skipio', '/compare/surfox-vs-skipio');

const heroStats = [
  { value: '3-5x', label: 'More Deals Closed', sub: 'vs appointment tools' },
  { value: '90%', label: 'AI Handles Everything', sub: 'vs manual work' },
  { value: 'Zero', label: 'Manual Qualification', sub: 'AI does it all' },
  { value: '24/7', label: 'AI Working', sub: 'vs business hours' },
];

const skipioWorkflow = [
  { time: '8:00 AM - Morning Setup (30 mins)', desc: 'Review responses, prep messages, update appointment schedules' },
  { time: '10:00 AM - Message Writing (2 hours)', desc: 'Manually write and send messages, customize templates for each prospect' },
  { time: '2:00 PM - Response Management (1.5 hours)', desc: 'Read every response, craft individual replies, try to identify motivated prospects' },
  { time: '4:00 PM - Follow-up (1+ hour)', desc: 'Manual follow-ups, schedule appointments, qualify leads' },
];

const surfoxWorkflow = [
  { time: '9:00 AM - Hot Lead Review (15 mins)', desc: 'Review leads SurFox AI flagged as "ready to buy" - complete conversation context provided', isSparkles: false },
  { time: '12:00 PM - Quick Check (5 mins)', desc: 'Glance at AI performance dashboard, approve any escalated edge cases', isSparkles: false },
  { time: '5:00 PM - End of Day (10 mins)', desc: 'Review appointment bookings SurFox AI secured, check conversion metrics, done for the day', isSparkles: false },
  { time: '24/7 - AI Works', desc: 'SurFox AI handles all conversations, follows up perfectly, learns from every interaction', isSparkles: true },
];

const faqData = [
  {
    question: 'Is Skipio good for lead qualification?',
    answer: 'Skipio is a solid SMS platform for manual texting and drip campaigns. However, it requires your team to write and send messages manually or set up static sequences. SurFox AI uses AI to handle two-way conversations automatically, qualifying leads without human involvement until they are ready to talk.',
  },
  {
    question: 'Can Skipio replace SDRs?',
    answer: 'Not really. Skipio is a tool that makes SDRs more efficient, but someone still needs to manage the conversations. SurFox AI actually replaces the initial qualification conversations entirely. Your team only talks to leads the AI has already qualified.',
  },
  {
    question: 'What is the difference between Skipio and SurFox AI?',
    answer: 'Skipio is an SMS sending platform. SurFox AI is an AI-powered SMS qualification platform. Skipio helps you send texts faster. SurFox AI has conversations for you and tells you who is ready to buy.',
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
                    <Calendar className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-white/60">Skipio</div>
                    <div className="text-sm text-white/50">Appointment Booking</div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
                AI That Closes Deals<br className="hidden sm:block" />
                vs Basic Scheduling
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-white">Skipio helps you book appointments efficiently.</strong>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-blue-400">SurFox AI turns your dead leads into actual deals that close.</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
                <a
                  href="/pricing"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
                >
                  Stop Settling for Appointments
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
                    <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">{item.value}</div>
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
                Two Different Results
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                Skipio gets you appointments. SurFox AI gets you deals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Skipio */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white/50" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Skipio</h3>
                    <p className="text-sm text-white/60">Basic Appointment Booking</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                    <h4 className="font-semibold text-white mb-2 text-sm">What You Get:</h4>
                    <p className="text-sm text-white/70">"Help with scheduling appointments and basic follow-up automation"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Good for booking appointments</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Multi-channel communication</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>You manually write and review everything</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>No AI to find your best leads</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>All the selling work still falls on you</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                  <p className="text-sm text-white/70">
                    <strong className="text-white">Best For:</strong> Teams that just need appointment scheduling help
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
                    <h4 className="font-semibold text-white mb-2 text-sm">What You Get:</h4>
                    <p className="text-sm text-white/70">"AI that turns your dead leads into actual deals that close"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>SurFox AI handles all conversations for you</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Automatically finds your hottest leads</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Delivers qualified prospects ready to buy</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Gets smarter with every conversation</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Works 24/7 without breaks or oversight</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-blue-500/20 bg-background">
                  <p className="text-sm text-white/70">
                    <strong className="text-white">Best For:</strong> Businesses that need to convert prospects into actual customers
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
                See exactly how SurFox AI eliminates the manual work that appointment tools require.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Skipio Workflow */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Skipio: Your Daily 4+ Hours</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {skipioWorkflow.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg border border-red-500/20 bg-background">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2 text-white/60" />
                        <span className="text-xs font-medium text-white/70">{item.time}</span>
                      </div>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border-2 border-red-300 bg-red-100 text-center">
                  <p className="text-red-700 font-semibold">Total Daily Time: 4+ Hours</p>
                  <p className="text-red-600 text-sm">Plus constant monitoring</p>
                </div>
              </div>

              {/* SurFox AI Workflow */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">SurFox AI: Your Daily 30 Minutes</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {surfoxWorkflow.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg border border-green-200 bg-background">
                      <div className="flex items-center mb-2">
                        {item.isSparkles ? (
                          <Sparkles className="w-4 h-4 mr-2 text-green-400" />
                        ) : (
                          <Clock className="w-4 h-4 mr-2 text-white/60" />
                        )}
                        <span className="text-xs font-medium text-white/70">{item.time}</span>
                      </div>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border-2 border-green-500/30 bg-green-500/10 text-center">
                  <p className="text-green-400 font-semibold">Total Daily Time: 30 Minutes</p>
                  <p className="text-green-400 text-sm">AI works 24/7 for you</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison (interactive) */}
        <SkipioClient />

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
                  but nobody ever followed up with properly. Turn yesterday's dead leads into today's deals.
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
                The Bottom Line
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                Do you want help booking meetings, or do you want more deals?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
              <div className="text-center p-6 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                <div className="text-sm text-white/60 mb-2">Skipio Gives You</div>
                <div className="text-4xl font-semibold text-white/60 mb-2">Appointments</div>
                <div className="text-xs text-white/60 mb-4">But you still do all the selling</div>
                <div className="text-xs text-white/70 space-y-1">
                  <div>• Manual message writing</div>
                  <div>• Manual qualification</div>
                  <div>• 4+ hours daily work</div>
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
                <div className="text-sm text-white/60 mb-2">SurFox AI Gives You</div>
                <div className="text-4xl font-semibold text-green-400 mb-2">Deals</div>
                <div className="text-xs text-white/60 mb-4">Qualified prospects ready to buy</div>
                <div className="text-xs text-white/70 space-y-1">
                  <div>• AI writes all messages</div>
                  <div>• AI qualifies all leads</div>
                  <div>• 30 min daily review</div>
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="text-sm text-white/60 mb-2">Result</div>
                <div className="text-4xl font-semibold text-blue-400 mb-2">3-5x More</div>
                <div className="text-xs text-white/60 mb-4">deals closed</div>
                <div className="text-xs text-white/70 space-y-1">
                  <div>• Higher quality leads</div>
                  <div>• Better conversion rates</div>
                  <div>• More revenue generated</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Simple Choice</h3>
              <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
                <strong className="text-white">If you just need help scheduling:</strong> Skipio works fine.<br />
                <strong className="text-blue-400">If you need to close more deals:</strong> SurFox AI is what you want.
              </p>
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
                Choose The Right Tool
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                Both have their place, but they solve very different problems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background">
                <h3 className="text-xl font-semibold text-white mb-4">Choose Skipio When:</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You just need help booking appointments</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You're happy writing all your own messages</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Your business is appointment-driven (coaching, medical)</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You want manual control over everything</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <h3 className="text-xl font-semibold text-white mb-4">Choose SurFox AI When:</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>You need more deals, not just appointments</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Your follow-ups aren't working</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>You want SurFox AI to handle conversations for you</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Results matter more than monthly cost</span>
                  </div>
                </div>
              </div>
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
                Common questions about Skipio vs SurFox AI
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8 px-4 leading-tight">
              Ready for More<br className="hidden sm:block" />
              Deals?
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Stop settling for appointments. Get AI that turns your leads into actual deals. <strong className="text-white">30-day money back guarantee.</strong>
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
        </section>
      </div>
    </>
  );
}
