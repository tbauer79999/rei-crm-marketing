import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  X,
  Clock,
  MessageSquare,
  Users,
  Sparkles,
  Zap,
} from 'lucide-react';
import TextusClient from './TextusClient';

export const metadata = generatePageMetadata('compare-textus');

const breadcrumbSchema = generateCompareBreadcrumb('TextUs', '/compare/surfox-vs-textus');

const heroStats = [
  { value: '$597', label: 'SurFox Growth Plan', sub: 'vs $2,000+ total' },
  { value: '90%', label: 'AI Automation', sub: 'vs manual work' },
  { value: '20hrs', label: 'Weekly Time Saved', sub: 'vs constant work' },
  { value: '15min', label: 'Setup Time', sub: 'vs 2-3 hours' },
];

const faqData = [
  {
    question: 'Is TextUs good for lead qualification?',
    answer:
      'TextUs is built for business texting and team collaboration. It is great for sales teams who want to text from their CRM. However, TextUs requires humans to manage every conversation. SurFox AI handles the back-and-forth automatically and only escalates qualified leads.',
  },
  {
    question: 'How does TextUs pricing compare to SurFox AI?',
    answer:
      'TextUs starts around $300 per month per user for basic plans and scales up for teams. SurFox AI starts at $147 per month and handles unlimited AI conversations. For teams doing high-volume outreach, SurFox AI is significantly more cost-effective.',
  },
  {
    question: 'Can TextUs automate lead qualification?',
    answer:
      'TextUs has templates and scheduling, but no AI that carries on conversations. Every response still requires human attention. SurFox AI reads responses, asks follow-up questions, and qualifies leads without human involvement.',
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
                    <div className="text-sm text-white/60">AI Conversion Engine</div>
                  </div>
                </div>

                <div className="text-3xl font-semibold text-white/40">VS</div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-white/60">TextUs</div>
                    <div className="text-sm text-white/50">Manual Messaging</div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
                90% Cost Savings<br className="hidden sm:block" />
                Better Results
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-white">TextUs charges $500+ for basic messaging that requires manual work.</strong>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-blue-400">SurFox AI delivers AI-powered conversations starting at $147, with Growth at $597 for learning AI.</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
                <a
                  href="/pricing"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
                >
                  Stop Manual Work
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
                Two Completely Different Approaches
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                TextUs forces your team to manually handle every message. SurFox AI does it automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* TextUs */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-white/50" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">TextUs</h3>
                    <p className="text-sm text-white/60">Manual Messaging Platform</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                    <h4 className="font-semibold text-white mb-2 text-sm">The Problem They Solve:</h4>
                    <p className="text-sm text-white/70">"I need a better inbox for manual messaging"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Organized messaging interface</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>$500+ monthly cost plus usage fees</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Your team writes every single message</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Manual qualification of every lead</span>
                    </div>
                    <div className="flex items-start text-sm text-white/60">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>No AI, learning, or automation</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                  <p className="text-sm text-white/70">
                    <strong className="text-white">Best For:</strong> Teams who want a better inbox but don't mind manual work
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
                    <p className="text-sm text-white/60">AI Conversion Engine</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-blue-500/20 bg-background">
                    <h4 className="font-semibold text-white mb-2 text-sm">The Problem We Solve:</h4>
                    <p className="text-sm text-white/70">"I need more qualified appointments without spending all day writing messages"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>$597/month Growth plan with learning AI</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>SurFox AI writes unique messages for each lead</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Automatic qualification and lead scoring</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>SurFox AI handles 90% of conversations</span>
                    </div>
                    <div className="flex items-start text-sm text-white/70">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span>Learns and improves with every conversation</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-blue-500/20 bg-background">
                  <p className="text-sm text-white/70">
                    <strong className="text-white">Best For:</strong> Sales teams who want qualified appointments without manual work
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
                See exactly how SurFox AI eliminates the manual work that TextUs requires.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* TextUs Workflow */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-white">TextUs: Your Daily 4+ Hours</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-lg border border-red-500/20 bg-background">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-white/60" />
                      <span className="text-xs font-medium text-white/70">8:00 AM - Morning Setup (30 mins)</span>
                    </div>
                    <p className="text-sm text-white/70">Review overnight responses, prep canned messages, update contact lists</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-background">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-white/60" />
                      <span className="text-xs font-medium text-white/70">10:00 AM - Message Writing (2 hours)</span>
                    </div>
                    <p className="text-sm text-white/70">Manually write and send messages to each prospect, customize templates</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-background">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-white/60" />
                      <span className="text-xs font-medium text-white/70">2:00 PM - Response Management (1.5 hours)</span>
                    </div>
                    <p className="text-sm text-white/70">Read every response, craft individual replies, qualify leads manually</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-background">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-white/60" />
                      <span className="text-xs font-medium text-white/70">4:00 PM - Lead Follow-up (1+ hour)</span>
                    </div>
                    <p className="text-sm text-white/70">Manual follow-ups, schedule calls with qualified leads, update CRM</p>
                  </div>
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
                  <div className="p-3 rounded-lg border border-green-200 bg-background">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-white/60" />
                      <span className="text-xs font-medium text-white/70">9:00 AM - Hot Lead Review (15 mins)</span>
                    </div>
                    <p className="text-sm text-white/70">Review leads SurFox AI flagged as "ready to buy" - complete conversation context provided</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-background">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-white/60" />
                      <span className="text-xs font-medium text-white/70">12:00 PM - Quick Check (5 mins)</span>
                    </div>
                    <p className="text-sm text-white/70">Glance at AI performance dashboard, approve any escalated edge cases</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-background">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-white/60" />
                      <span className="text-xs font-medium text-white/70">5:00 PM - End of Day (10 mins)</span>
                    </div>
                    <p className="text-sm text-white/70">Review appointment bookings SurFox AI secured, check conversion metrics, done for the day</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-background">
                    <div className="flex items-center mb-2">
                      <Sparkles className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-xs font-medium text-white/70">24/7 - AI Works</span>
                    </div>
                    <p className="text-sm text-white/70">SurFox AI handles all conversations, follows up perfectly, learns from every interaction</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border-2 border-green-500/30 bg-green-500/10 text-center">
                  <p className="text-green-400 font-semibold">Total Daily Time: 30 Minutes</p>
                  <p className="text-green-400 text-sm">AI works 24/7 for you</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison - interactive tabs live in client island */}
        <TextusClient />

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
                The Hidden Cost Reality
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                SurFox AI delivers superior AI automation at 90% lower total cost than TextUs + manual labor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
              <div className="text-center p-6 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="text-sm text-white/60 mb-2">TextUs Reality</div>
                <div className="text-4xl font-semibold text-red-600 mb-2">$2,000+</div>
                <div className="text-xs text-white/60 mb-4">Platform + manual labor</div>
                <div className="text-xs text-white/70 space-y-1">
                  <div>• $500+ subscription</div>
                  <div>• $1,200+ staff time</div>
                  <div>• $300+ opportunity costs</div>
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
                <div className="text-4xl font-semibold text-blue-400 mb-2">$1,800+</div>
                <div className="text-xs text-white/60 mb-4">per month</div>
                <div className="text-xs text-white/70 space-y-1">
                  <div>• 90% cost savings</div>
                  <div>• 20+ hours/week saved</div>
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

        {/* When to Choose */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
                When to Choose Each Platform
              </h2>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
                Both solve communication challenges, but in very different ways.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background">
                <h3 className="text-xl font-semibold text-white mb-4">Choose TextUs When:</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You want to manually control every conversation</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Your team has time to write every message</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You need a better inbox but not automation</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <h3 className="text-xl font-semibold text-white mb-4">Choose SurFox AI When:</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>You want SurFox AI to handle conversations automatically</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>You need qualified appointments, not just responses</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>You want to save time and money with AI</span>
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
                Common questions about TextUs vs SurFox AI
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
                Stop Manual Work.<br className="hidden sm:block" />
                Start Converting.
              </h2>

              <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
                Stop spending hours on manual messaging. Let SurFox AI deliver qualified appointments automatically. <strong className="text-white">30-day money back guarantee.</strong>
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
                  <Users className="w-5 h-5 mr-2 text-blue-400" />
                  30-day guarantee
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  Setup in 15 minutes
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-400" />
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
