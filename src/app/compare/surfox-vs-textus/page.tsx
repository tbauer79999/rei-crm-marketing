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
  { value: '$597', label: 'SurFox AI Growth Plan', sub: 'flat monthly price' },
  { value: '24/7', label: 'Replies answered', sub: 'without a rostered inbox' },
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
                    <MessageSquare className="w-6 h-6 text-[#8A92A0]" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-[#5A626E]">TextUs</div>
                    <div className="text-sm text-[#8A92A0]">Manual Messaging</div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
                90% Cost Savings<br className="hidden sm:block" />
                Better Results
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-[#13171F]">TextUs gives your team a better inbox. Somebody still has to sit in it.</strong>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-[#0A7C8C]">SurFox AI delivers AI-powered conversations starting at $147, with Growth at $597 for learning AI.</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
                <a
                  href="/pricing"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
                >
                  Stop Manual Work
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
                    <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">{item.value}</div>
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
                Two Completely Different Approaches
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                TextUs forces your team to manually handle every message. SurFox AI does it automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* TextUs */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-[#8A92A0]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#13171F]">TextUs</h3>
                    <p className="text-sm text-[#5A626E]">Manual Messaging Platform</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-[#E4E6E2] bg-white">
                    <h4 className="font-semibold text-[#13171F] mb-2 text-sm">The Problem They Solve:</h4>
                    <p className="text-sm text-[#5A626E]">"I need a better inbox for manual messaging"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Organized messaging interface</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Priced per seat, so the bill grows with headcount</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Your team writes every single message</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Manual qualification of every lead</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>No AI, learning, or automation</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E4E6E2] bg-white">
                  <p className="text-sm text-[#5A626E]">
                    <strong className="text-[#13171F]">Best For:</strong> Teams who want a better inbox but don't mind manual work
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
                    <p className="text-sm text-[#5A626E]">SMS Lead Qualification</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-[#dCEEF1] bg-[#F4F5F3]">
                    <h4 className="font-semibold text-[#13171F] mb-2 text-sm">The Problem We Solve:</h4>
                    <p className="text-sm text-[#5A626E]">"I need more qualified appointments without spending all day writing messages"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>$597/month Growth plan with learning AI</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>SurFox AI writes unique messages for each lead</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>Automatic qualification and lead scoring</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>SurFox AI handles the qualification conversation end to end</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>Learns and improves with every conversation</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#dCEEF1] bg-[#F4F5F3]">
                  <p className="text-sm text-[#5A626E]">
                    <strong className="text-[#13171F]">Best For:</strong> Sales teams who want qualified appointments without manual work
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
                Your Daily Workflow: Before vs After
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                See exactly how SurFox AI eliminates the manual work that TextUs requires.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* TextUs Workflow */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-[#13171F]">TextUs: Your Daily 4+ Hours</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">8:00 AM - Morning Setup (30 mins)</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Review overnight responses, prep canned messages, update contact lists</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">10:00 AM - Message Writing (2 hours)</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Manually write and send messages to each prospect, customize templates</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">2:00 PM - Response Management (1.5 hours)</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Read every response, craft individual replies, qualify leads manually</p>
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">4:00 PM - Lead Follow-up (1+ hour)</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Manual follow-ups, schedule calls with qualified leads, update CRM</p>
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
                  <h3 className="text-lg font-semibold text-[#13171F]">SurFox AI: 30 Minutes, No Inbox</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">9:00 AM - Escalations only (15 mins)</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">There is no inbox to triage. The AI has answered the routine replies and kept back only what needs you</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">12:00 PM - Spot check (5 mins)</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Glance at conversation quality and adjust anything reading off tone</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-[#5A626E]" />
                      <span className="text-xs font-medium text-[#5A626E]">5:00 PM - Results (10 mins)</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Review what got booked, with no messages left sitting unanswered overnight</p>
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <Sparkles className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-xs font-medium text-[#5A626E]">24/7 - Nobody rostered on the inbox</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">Replies get answered at 11pm and on a Sunday without anyone being scheduled to do it</p>
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

        {/* Cost Comparison */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                The Hidden Cost Reality
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                TextUs prices per user seat and quotes the rest, so a single headline total would be a guess. Here is what can actually be said.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-8">
              <div className="text-center p-6 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="text-sm text-[#5A626E] mb-2">TextUs</div>
                <div className="text-4xl font-semibold text-red-600 mb-2">Per seat</div>
                <div className="text-xs text-[#5A626E] mb-4">Cost scales with headcount</div>
                <div className="text-xs text-[#5A626E] space-y-1">
                  <div>• Priced per user seat, with message credits per seat</div>
                  <div>• Third-party listings report entry pricing from roughly $299/mo</div>
                  <div>• Adding a person to work replies adds a seat</div>
                  <div>• Replies still worked by a person</div>
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
                <div className="text-sm text-[#5A626E] mb-2">SurFox AI Growth</div>
                <div className="text-4xl font-semibold text-green-400 mb-2">$597</div>
                <div className="text-xs text-[#5A626E] mb-4">Flat, published, no usage fees</div>
                <div className="text-xs text-[#5A626E] space-y-1">
                  <div>• 10,000 messages included</div>
                  <div>• Starts at $147 on the Starter plan</div>
                  <div>• Reply handling included, not billed as labor</div>
                </div>
              </div>
            </div>

            <div className="px-4 mb-12">
              <p className="text-sm text-[#5A626E] leading-relaxed max-w-3xl mx-auto text-center">
                We previously published a $2,000 TextUs total here. Two thirds of it was an estimate of staff
                time and lost opportunity that we could not source, so we removed it. The structural point
                stands without invented numbers: a per-seat tool gets more expensive as you add the people who
                read and answer the messages, which is the cost SurFox AI is designed to remove.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
              <h3 className="text-2xl font-semibold text-[#13171F] mb-4">The Bottom Line</h3>
              <p className="text-lg text-[#5A626E] leading-relaxed max-w-3xl mx-auto">
                <strong className="text-[#13171F]">Smart choice:</strong> Pay less, work less, get better results with AI automation.
              </p>
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                When to Choose Each Platform
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Both solve communication challenges, but in very different ways.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <h3 className="text-xl font-semibold text-[#13171F] mb-4">Choose TextUs When:</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You want to manually control every conversation</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Your team has time to write every message</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You need a better inbox but not automation</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <h3 className="text-xl font-semibold text-[#13171F] mb-4">Choose SurFox AI When:</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You want SurFox AI to handle conversations automatically</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You need qualified appointments, not just responses</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You want to save time and money with AI</span>
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
                Common questions about TextUs vs SurFox AI
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
                Stop Manual Work.<br className="hidden sm:block" />
                Start Converting.
              </h2>

              <p className="text-lg sm:text-xl text-[#5A626E] mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
                Stop spending hours on manual messaging. Let SurFox AI deliver qualified appointments automatically. <strong className="text-[#13171F]">30-day money back guarantee.</strong>
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
                  href="/contact"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#E4E6E2] hover:bg-[#F4F5F3] transition"
                >
                  See SurFox AI Demo
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#5A626E]">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                  30-day guarantee
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                  Setup in 15 minutes
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-[#0A7C8C]" />
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
