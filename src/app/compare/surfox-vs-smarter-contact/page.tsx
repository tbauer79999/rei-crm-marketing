import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  X,
  Brain,
  MessageSquare,
  Sparkles,
  Shield,
  Award,
  Clock,
  Rocket,
} from 'lucide-react';
import SmarterContactClient from './SmarterContactClient';

export const metadata = generatePageMetadata('compare-smarter-contact');

const breadcrumbSchema = generateCompareBreadcrumb('Smarter Contact', '/compare/surfox-vs-smarter-contact');

// Ported from the retired /compare/surfox-vs-launch-control page. This is an
// illustrative day, not measured data, and the copy says so on the page.
const campaignOpsWorkflow = [
  {
    time: '8:00 AM - Morning setup (45 mins)',
    description: 'Review overnight responses, update campaign templates, adjust targeting rules, prep new sequences',
  },
  {
    time: '10:00 AM - Response management (2 hours)',
    description: 'Read every response, craft individual replies, qualify leads manually, update contact records',
  },
  {
    time: '2:00 PM - Campaign monitoring (1.5 hours)',
    description: 'Check delivery rates, analyze engagement, adjust message timing, create A/B test variations',
  },
  {
    time: '4:00 PM - Lead follow-up (1+ hour)',
    description: 'Manual follow-ups based on rules, schedule calls with qualified leads, update CRM',
  },
];

const surfoxWorkflow = [
  {
    time: '9:00 AM - Hot lead review (15 mins)',
    description: 'Review leads SurFox AI flagged as ready to buy, with the full conversation context attached',
    icon: Clock,
  },
  {
    time: '12:00 PM - Quick check (5 mins)',
    description: 'Glance at the AI performance dashboard, approve any escalated edge cases',
    icon: Clock,
  },
  {
    time: '5:00 PM - End of day (10 mins)',
    description: 'Review the appointments SurFox AI booked, check conversion metrics, done for the day',
    icon: Clock,
  },
  {
    time: '24/7 - The AI keeps working',
    description: 'SurFox AI handles conversations overnight and on weekends, and learns from each one',
    icon: Sparkles,
  },
];

const faqData = [
  {
    question: 'Is Smarter Contact good for SMS marketing?',
    answer:
      'Smarter Contact is solid for bulk SMS campaigns and ringless voicemail. It is popular with real estate investors and sales teams doing high-volume outreach. However, it is a broadcasting tool, not a conversation tool. SurFox AI handles two-way conversations automatically.',
  },
  {
    question: 'Can Smarter Contact qualify leads?',
    answer:
      'Smarter Contact can send messages and capture responses, but a human still needs to read and reply to every response. SurFox AI reads responses, continues the conversation, and only alerts your team when a lead is qualified.',
  },
  {
    question: 'What is the difference between Smarter Contact and SurFox AI?',
    answer:
      'Smarter Contact is a bulk messaging platform. SurFox AI is an AI qualification platform. Smarter Contact sends thousands of texts. SurFox AI has thousands of conversations.',
  },
  {
    question: 'Did Smarter Contact acquire Launch Control?',
    answer:
      'Yes. Smarter Contact states on its own website that it "has acquired Launch Control to become the undisputed real estate market leader." No closing date has been published. Both products were still sold under their own names and their own pricing at the time this page was last updated, which is why both price lists appear above.',
  },
  {
    question: 'How much does Launch Control cost?',
    answer:
      'Launch Control publishes four tiers: Lite at $497/month for 12,500 outbound messages, Core at $797 for 25,000, Pro at $1,497 for 60,000, and Pro Plus at $2,297 for 90,000. Each tier adds a provider fee, from $22/month on Lite to $135/month on Pro Plus, and skip tracing is billed separately at $0.10 to $0.13 per record.',
  },
  {
    question: 'What is the best Launch Control alternative for real estate investors?',
    answer:
      'It depends on which part of the job you want solved. Launch Control and Smarter Contact are both strong at sending high volume, and at pure broadcast volume they are cheaper per message than SurFox AI. SurFox AI is the alternative worth looking at if the bottleneck is the replies rather than the sends, because the AI qualifies responses instead of handing them to a person.',
  },
  {
    question: 'Is Launch Control good for real estate investors?',
    answer:
      'Yes. Launch Control is built specifically for real estate investors doing SMS outreach to distressed property leads, it handles compliance carefully, and it integrates with the common investor CRMs. The tradeoff is that every reply still lands in a human inbox. SurFox AI handles that qualification conversation automatically.',
  },
  {
    question: 'Can I use Launch Control or Smarter Contact alongside SurFox AI?',
    answer:
      'Yes, and some teams do. You can run the initial outreach on Launch Control or Smarter Contact and pass responding leads into SurFox AI for qualification. You will pay two platform fees to do it. Most teams that make the switch end up running both the outreach and the qualification in SurFox AI instead.',
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
                    <div className="text-2xl font-semibold text-[#5A626E]">Smarter Contact</div>
                    <div className="text-sm text-[#8A92A0]">Mass Messaging</div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
                They Send the Texts.<br className="hidden sm:block" />
                We Have the Conversations.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-[#13171F]">Most platforms blast thousands and pray for replies.</strong>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
                <strong className="text-[#0A7C8C]">SurFox AI has AI conversations that book qualified appointments.</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
                <a
                  href="/pricing"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
                >
                  Stop Blasting, Start Converting
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#E4E6E2] hover:bg-[#F4F5F3] transition"
                >
                  See the Difference
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
                <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">$597</div>
                  <div className="text-sm text-[#5A626E]">SurFox AI Growth Plan</div>
                  <div className="text-xs text-[#8A92A0] mt-1">flat, no per-message fees</div>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">$0</div>
                  <div className="text-sm text-[#5A626E]">Per-message fees</div>
                  <div className="text-xs text-[#8A92A0] mt-1">vs $0.02 to $0.03 a text</div>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">24/7</div>
                  <div className="text-sm text-[#5A626E]">Replies answered</div>
                  <div className="text-xs text-[#8A92A0] mt-1">nights and weekends too</div>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">15min</div>
                  <div className="text-sm text-[#5A626E]">Setup Time</div>
                  <div className="text-xs text-[#8A92A0] mt-1">vs hours of setup</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acquisition note */}
        <section className="px-4 sm:px-6 md:px-8 pb-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#dCEEF1] bg-white">
              <h2 className="text-lg font-semibold text-[#13171F] mb-3">
                One note before the comparison: Smarter Contact acquired Launch Control
              </h2>
              <p className="text-[#5A626E] leading-relaxed text-sm sm:text-base">
                Smarter Contact states on its own site that it has acquired Launch Control. No closing date has
                been published, and at the time this page was last updated both products were still sold
                separately, under their own names and their own price lists. This page covers both, so if you
                landed here looking for a Launch Control comparison, you are in the right place. Both price
                lists appear in the cost section below.
              </p>
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
                Smarter Contact focuses on volume and templates. SurFox AI focuses on AI conversations that actually close deals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Smarter Contact */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-[#8A92A0]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#13171F]">Smarter Contact &amp; Launch Control</h3>
                    <p className="text-sm text-[#5A626E]">Mass Messaging and Campaign Management</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl border border-[#E4E6E2] bg-white">
                    <h4 className="font-semibold text-[#13171F] mb-2 text-sm">The Problem They Solve:</h4>
                    <p className="text-sm text-[#5A626E]">"I need to reach thousands of contacts fast, with ringless voicemail in the mix and real control over my campaigns"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>High-volume SMS delivery - genuinely strong</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Ringless voicemail drops built in</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Popular with RE investors doing volume outreach</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Launch Control adds a deep template library and campaign variables</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>All responses require manual handling</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Campaign setup and monitoring is an ongoing job for someone</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>No conversation memory or learning</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <span>Smarter Contact bills per message on its pay-as-you-go tiers</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E4E6E2] bg-white">
                  <p className="text-sm text-[#5A626E]">
                    <strong className="text-[#13171F]">Best For:</strong> High-volume broadcasters with a dedicated team to manually work every reply
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
                    <p className="text-sm text-[#5A626E]">"I need qualified appointments, not just random responses to filter through"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>SurFox AI creates unique conversations for each lead</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>Automatically qualifies and scores prospects</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>SurFox AI escalates hot leads immediately</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>Learns and improves with every conversation</span>
                    </div>
                    <div className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>All-inclusive pricing, no usage fees</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#dCEEF1] bg-[#F4F5F3]">
                  <p className="text-sm text-[#5A626E]">
                    <strong className="text-[#13171F]">Best For:</strong> Sales teams who want qualified appointments, not manual conversation filtering
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
                Same Lead, Different Outcomes
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Watch how the same prospect responds to mass messaging vs AI conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Smarter Contact Example */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-[#13171F]">Smarter Contact Approach</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <span className="text-xs font-medium text-[#5A626E]">Day 1 - Mass Template</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">"Hi [NAME], are you interested in selling your house?"</p>
                  </div>

                  <div className="text-center text-[#8A92A0] text-xs py-2">
                    ... no response for 3 days ...
                  </div>

                  <div className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <span className="text-xs font-medium text-[#5A626E]">Day 4 - Same Template</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">"Hi [NAME], are you interested in selling your house?"</p>
                  </div>

                  <div className="text-center text-[#8A92A0] text-xs py-2">
                    ... no response ...
                  </div>
                </div>

                <div className="p-4 rounded-xl border-2 border-red-300 bg-red-100 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <p className="text-red-700 font-semibold">Result: Lead Lost Forever</p>
                  <p className="text-red-600 text-sm">Blocked as spam</p>
                </div>
              </div>

              {/* SurFox AI Example */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
                <div className="flex items-center mb-6">
                  <Brain className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-[#13171F]">SurFox AI Approach</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs font-medium text-[#5A626E]">Day 1 - AI Smart Opening</span>
                    </div>
                    <p className="text-sm text-[#5A626E]">"Hey Sarah - wasn't sure if this was still your number. If you're still thinking about selling, I can keep it simple for you."</p>
                  </div>

                  <div className="text-center text-[#8A92A0] text-xs py-2">
                    ... AI waits 3 days, adjusts approach ...
                  </div>

                  <div className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs font-medium text-[#5A626E]">Day 4 - Lead Responds!</span>
                    </div>
                    <p className="text-sm text-green-400">"Yeah I might be. What kind of offers are you seeing?"</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border-2 border-green-500/30 bg-green-500/10 text-center">
                  <Sparkles className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-semibold">Result: Qualified Appointment</p>
                  <p className="text-green-400 text-sm">SurFox AI books call automatically</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Workflow: Before vs After (ported from the retired Launch Control page) */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Your Daily Workflow: Before vs After
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                This is where the real cost difference lives. Not in the platform fee, in the hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              {/* Campaign ops */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-6">
                  <Rocket className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-[#13171F]">Running campaigns manually</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {campaignOpsWorkflow.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg border border-red-500/20 bg-[#F4F5F3]">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2 text-[#5A626E]" />
                        <span className="text-xs font-medium text-[#5A626E]">{item.time}</span>
                      </div>
                      <p className="text-sm text-[#5A626E]">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border-2 border-red-300 bg-red-100 text-center">
                  <p className="text-red-700 font-semibold">Roughly 5 hours a day</p>
                  <p className="text-red-600 text-sm">Plus evening and weekend monitoring</p>
                </div>
              </div>

              {/* SurFox AI */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-[#13171F]">Running the same outreach on SurFox AI</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {surfoxWorkflow.map((item, i) => {
                    const Icon = item.icon;
                    const iconColor = Icon === Sparkles ? 'text-green-400' : 'text-[#5A626E]';
                    return (
                      <div key={i} className="p-3 rounded-lg border border-green-200 bg-[#F4F5F3]">
                        <div className="flex items-center mb-2">
                          <Icon className={`w-4 h-4 mr-2 ${iconColor}`} />
                          <span className="text-xs font-medium text-[#5A626E]">{item.time}</span>
                        </div>
                        <p className="text-sm text-[#5A626E]">{item.description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl border-2 border-green-500/30 bg-green-500/10 text-center">
                  <p className="text-green-400 font-semibold">Roughly 30 minutes a day</p>
                  <p className="text-green-400 text-sm">The AI works nights and weekends</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#8A92A0] italic max-w-3xl mx-auto text-center mt-8 px-4">
              This is an illustrative day built from how these tools are typically run, not a measured study.
              Your own hours will depend on your list size, your reply rate, and how much of the follow-up you
              already automate.
            </p>
          </div>
        </section>

        {/* Feature Comparison (interactive tabs) */}
        <SmarterContactClient />

        {/* Lead Resurrection Section */}
        <section className="py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6">
                The Hidden Gold Mine They Miss
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto">
                Every competitor focuses on NEW leads. SurFox AI finds money in the OLD leads you already own.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Traditional Platforms */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-[#13171F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#13171F]">Traditional Platforms</h3>
                </div>
                <p className="text-[#5A626E] leading-relaxed">
                  Only work on new leads flowing in. Your old CRM database sits there gathering dust.
                  Thousands of leads you already paid for, completely ignored.
                </p>
              </div>

              {/* SurFox AI Advantage */}
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mr-4">
                    <Check className="w-6 h-6 text-[#13171F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#13171F]">SurFox AI Advantage</h3>
                </div>
                <p className="text-[#5A626E] leading-relaxed">
                  Upload your entire old lead database. SurFox AI finds the 3-5% who are actually ready to buy
                  but nobody ever followed up with properly. Turn yesterday's dead leads into today's deals.
                </p>
              </div>
            </div>

            {/* ROI model, with the assumptions stated as assumptions */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10">
              <h3 className="text-2xl font-semibold text-[#13171F] mb-2 text-center">
                A Worked Example, With Our Assumptions Shown
              </h3>
              <p className="text-sm text-[#5A626E] text-center mb-6 max-w-2xl mx-auto">
                This is a model, not a measurement. Every input is listed so you can replace it with your own.
              </p>
              <div className="space-y-3 text-[#5A626E] max-w-2xl mx-auto text-center">
                <p className="text-base sm:text-lg">
                  <strong>10,000 aged leads x 3% engage when re-contacted = 300 conversations</strong>
                </p>
                <p className="text-base sm:text-lg">
                  <strong>300 conversations x 10% qualify = 30 appointments</strong>
                </p>
                <p className="text-base sm:text-lg">
                  <strong>30 appointments x $3,000 per closed deal = $90,000</strong>
                </p>
                <p className="text-sm text-[#5A626E] italic mt-4">
                  From leads you already owned and already paid for
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-green-500/30 max-w-3xl mx-auto">
                <p className="text-sm text-[#5A626E] leading-relaxed">
                  <strong className="text-[#13171F]">Where these numbers come from.</strong> The 3% engagement
                  and 10% qualification rates are our own assumptions. We looked for independent research to
                  support them and there is none: no academic or government study of SMS re-engagement rates
                  for aged real estate seller lists exists, and the figures that circulate online all trace
                  back to vendor blog posts citing other vendor blog posts. Treat them as a starting point to
                  argue with, not a benchmark.
                </p>
                <p className="text-sm text-[#5A626E] leading-relaxed mt-4">
                  <strong className="text-[#13171F]">The $3,000 is deliberately low.</strong> Published
                  industry figures for the average US wholesale assignment fee run from roughly $10,000 to
                  $15,400. We model at $3,000 because it is closer to what a newer investor actually collects,
                  and because a projection built on the conservative end is worth more to you than one built on
                  the optimistic end. If your average deal is larger, the arithmetic moves in your favor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                What Each Platform Actually Costs
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Published list prices for all three, and the arithmetic on a realistic month. We have not put a
                thumb on the scale, including where the numbers do not favor us.
              </p>
            </div>

            {/* Smarter Contact pricing */}
            <div className="px-4 mb-8">
              <h3 className="text-xl font-semibold text-[#13171F] mb-2 text-center">Smarter Contact</h3>
              <p className="text-sm text-[#8A92A0] text-center mb-4">
                Pay-as-you-go tiers, prices shown for quarterly billing. Annual billing is lower
                ($169 / $339 / $419). Smarter Contact also sells committed-volume Elite Plus plans with
                messages included.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm border-2 border-[#E4E6E2] rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/[0.03] text-[#13171F]">
                      <th className="text-left px-4 py-3 font-semibold">Plan</th>
                      <th className="text-right px-4 py-3 font-semibold">Base/mo</th>
                      <th className="text-right px-4 py-3 font-semibold">Outbound SMS</th>
                      <th className="text-right px-4 py-3 font-semibold">Calling</th>
                      <th className="text-right px-4 py-3 font-semibold">Voicemail Drop</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#F4F5F3] divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Starter</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$199</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$0.03/text</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$0.03/min</td>
                      <td className="px-4 py-3 text-right text-[#8A92A0]">not listed</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Pro</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$399</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$0.025/text</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$0.025/min</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$0.025/drop</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Elite</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$499</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$0.02/text</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$0.02/min</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$0.02/drop</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Launch Control pricing */}
            <div className="px-4 mb-8">
              <h3 className="text-xl font-semibold text-[#13171F] mb-2 text-center">Launch Control</h3>
              <p className="text-sm text-[#8A92A0] text-center mb-4">
                Messages are included rather than metered, and each tier carries a separate provider fee.
                Skip tracing is billed on top at $0.10 to $0.13 per record.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm border-2 border-[#E4E6E2] rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/[0.03] text-[#13171F]">
                      <th className="text-left px-4 py-3 font-semibold">Plan</th>
                      <th className="text-right px-4 py-3 font-semibold">Base/mo</th>
                      <th className="text-right px-4 py-3 font-semibold">Outbound Messages</th>
                      <th className="text-right px-4 py-3 font-semibold">Provider Fee</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#F4F5F3] divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Lite</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$497</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">12,500</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">+$22</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Core</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$797</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">25,000</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">+$55</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Pro</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$1,497</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">60,000</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">+$85</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Pro Plus</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$2,297</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">90,000</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">+$135</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SurFox AI pricing */}
            <div className="px-4 mb-10">
              <h3 className="text-xl font-semibold text-[#13171F] mb-2 text-center">SurFox AI</h3>
              <p className="text-sm text-[#8A92A0] text-center mb-4">
                Flat monthly price, no per-message fee. The message allowance counts inbound and outbound
                together, because the AI is having the conversation rather than just sending it.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm border-2 border-[#dCEEF1] rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/[0.03] text-[#13171F]">
                      <th className="text-left px-4 py-3 font-semibold">Plan</th>
                      <th className="text-right px-4 py-3 font-semibold">Price/mo</th>
                      <th className="text-right px-4 py-3 font-semibold">Messages (in + out)</th>
                      <th className="text-right px-4 py-3 font-semibold">Per-message Fee</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#F4F5F3] divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Starter</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$147</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">2,000</td>
                      <td className="px-4 py-3 text-right text-[#0A7C8C]">none</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Growth</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$597</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">10,000</td>
                      <td className="px-4 py-3 text-right text-[#0A7C8C]">none</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#5A626E]">Scale</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">$2,497</td>
                      <td className="px-4 py-3 text-right text-[#5A626E]">40,000</td>
                      <td className="px-4 py-3 text-right text-[#0A7C8C]">none</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Worked example */}
            <div className="px-4 mb-8">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <h3 className="text-lg font-semibold text-[#13171F] mb-2">
                  A real month: 5,000 outbound texts and the replies they generate
                </h3>
                <p className="text-sm text-[#5A626E] mb-6">
                  The same workload priced on each platform. Inbound messages are free on Smarter Contact and
                  Launch Control and counted on SurFox AI, so this assumes roughly one reply per outbound text.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="p-4 rounded-xl bg-white border border-[#E4E6E2] text-center">
                    <div className="text-[#8A92A0] mb-1">Smarter Contact Starter</div>
                    <div className="text-2xl font-semibold text-[#13171F]">$349</div>
                    <div className="text-xs text-[#8A92A0] mt-1">$199 + 5,000 x $0.03</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E4E6E2] text-center">
                    <div className="text-[#8A92A0] mb-1">Launch Control Lite</div>
                    <div className="text-2xl font-semibold text-[#13171F]">$519</div>
                    <div className="text-xs text-[#8A92A0] mt-1">$497 + $22 provider fee</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E4E6E2] text-center">
                    <div className="text-[#8A92A0] mb-1">Smarter Contact Pro</div>
                    <div className="text-2xl font-semibold text-[#13171F]">$524</div>
                    <div className="text-xs text-[#8A92A0] mt-1">$399 + 5,000 x $0.025</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border-2 border-[#0A7C8C] text-center">
                    <div className="text-[#8A92A0] mb-1">SurFox AI Growth</div>
                    <div className="text-2xl font-semibold text-[#0A7C8C]">$597</div>
                    <div className="text-xs text-[#8A92A0] mt-1">flat, replies handled by AI</div>
                  </div>
                </div>
                <p className="text-[#5A626E] leading-relaxed mt-6">
                  <strong className="text-[#13171F]">
                    At this volume SurFox AI is the most expensive of the four, by $73 to $248 a month.
                  </strong>{' '}
                  That is the honest number, and you would find it yourself in ten minutes anyway. What the
                  extra buys is the reply handling. On the other three, every one of those replies goes to a
                  person. At a $25 per hour loaded rate, $73 to $248 is three to ten hours of someone&apos;s
                  month. If working those replies takes your team longer than that, the difference has already
                  paid for itself.
                </p>
              </div>
            </div>

            {/* Where the competitors win */}
            <div className="px-4 mb-8">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-white">
                <h3 className="text-lg font-semibold text-[#13171F] mb-3">
                  Where Smarter Contact and Launch Control win on price
                </h3>
                <p className="text-[#5A626E] leading-relaxed text-sm sm:text-base">
                  High-volume broadcasting. At 20,000 outbound texts a month, Smarter Contact Pro on
                  pay-as-you-go runs about $899, its committed Elite Plus 20k plan is $759, and Launch Control
                  Core is $852 including the provider fee. Putting that same volume through SurFox AI means the
                  Scale plan at $2,497. If your model is pure send volume and you already have people to work
                  the replies, they are the cheaper tools and we will not pretend otherwise. SurFox AI earns its
                  price when the replies are the bottleneck, not the sends.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center">
              <h3 className="text-2xl font-semibold text-[#13171F] mb-4">The Bottom Line</h3>
              <p className="text-lg text-[#5A626E] leading-relaxed max-w-3xl mx-auto">
                SurFox AI is not the cheapest way to send text messages, and at high volume it is not close.
                It is the cheaper way to <strong className="text-[#13171F]">have the conversations</strong>,
                because the qualification work that Smarter Contact and Launch Control hand to a person is
                included in the flat price.
              </p>
              <p className="text-sm text-[#8A92A0] mt-6 max-w-3xl mx-auto">
                Competitor pricing above is taken from the Smarter Contact and Launch Control published price
                pages and was last checked in September 2026. Vendor pricing changes, and Launch Control
                pricing may move further now that Smarter Contact has acquired it, so confirm both before you
                decide.
              </p>
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Which Platform Is Right for You?
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                All three solve real problems, but different ones. Here is how to decide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <h3 className="text-xl font-semibold text-[#13171F] mb-4">Choose Smarter Contact or Launch Control When:</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>High-volume broadcast is the core of your outreach strategy</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You already have people to work every reply, and the cost per message matters more than the hours</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You need ringless voicemail drops at scale</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>You want hands-on control of templates, variables and campaign timing, which is Launch Control&apos;s strength</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <h3 className="text-xl font-semibold text-[#13171F] mb-4">Choose SurFox AI When:</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>The replies are your bottleneck, not the sends</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You want qualified appointments, not a queue of responses to triage</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You would rather SurFox AI handle conversations 24/7 than add headcount to do it</span>
                  </div>
                  <div className="flex items-start text-sm text-[#5A626E]">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                    <span>You want one flat bill instead of a metered one</span>
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
                Common questions about Smarter Contact vs SurFox AI
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
                Stop Blasting.<br className="hidden sm:block" />
                Start Converting.
              </h2>

              <p className="text-lg sm:text-xl text-[#5A626E] mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
                Built for operators who are done doing it manually. AI-powered qualification, not manual inbox triage. <strong className="text-[#13171F]">30-day money back guarantee.</strong>
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
