import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  X,
  Brain,
  Zap,
  Target,
  TrendingUp,
  MessageSquare,
  Users,
  Database,
  Mail,
  Shield,
  Sparkles,
} from 'lucide-react';

export const metadata = generatePageMetadata('compare-all-competitors');

const breadcrumbSchema = generateCompareBreadcrumb('All Competitors', '/compare/surfox-vs-all-competitors');

const competitorCategories = [
  {
    category: 'Mass Messaging Platforms',
    subtitle: 'Volume-Based Approach',
    examples: ['Smarter Contact (incl. Launch Control)', 'ReiReply', 'Batch Leads'],
    description: 'Built for message volume, not conversation quality. High spam risk, low conversion rates.',
    icon: MessageSquare,
    limitations: [
      'No AI lead intelligence',
      'Static messaging templates',
      'Manual lead qualification',
      'High unsubscribe rates',
    ],
  },
  {
    category: 'Manual SMS Tools',
    subtitle: 'Human-Dependent Workflow',
    examples: ['TextUs', 'Heymarket', 'SimpleTexting', 'Zipwhip'],
    description: 'Expensive manual platforms that require constant human oversight and intervention.',
    icon: Users,
    limitations: [
      'Requires dedicated staff time',
      'No automated qualification',
      'Limited scalability',
      'High operational overhead',
    ],
  },
  {
    category: 'CRM Extensions',
    subtitle: 'Secondary Feature Set',
    examples: ['FollowUpBoss', 'REsimpli', 'Chime', 'BoomTown'],
    description: 'SMS as an afterthought feature within broader CRM systems. Limited SMS-specific capabilities.',
    icon: Database,
    limitations: [
      'SMS not core competency',
      'Basic messaging features',
      'No conversation optimization',
      'Generic communication approach',
    ],
  },
  {
    category: 'Email-First Platforms',
    subtitle: 'Wrong Channel Focus',
    examples: ['Instantly.ai', 'Reply.io', 'Outbound.io', 'Smartlead'],
    description: 'Email automation platforms attempting SMS without mobile-first optimization.',
    icon: Mail,
    limitations: [
      'Email-centric user experience',
      'Poor mobile optimization',
      'Limited SMS deliverability',
      'Outdated communication strategy',
    ],
  },
];

const surfoxAdvantages = [
  {
    area: 'AI Intelligence',
    traditional: 'Static message templates, manual qualification',
    surfox: 'Dynamic AI that reads 50+ psychological dimensions and adapts in real-time',
    impact: 'Higher quality conversations, better qualification accuracy',
  },
  {
    area: 'Learning Capability',
    traditional: 'Fixed functionality, no improvement over time',
    surfox: 'Continuous learning from every conversation, improving with scale',
    impact: 'Performance improves automatically, higher ROI over time',
  },
  {
    area: 'Conversation Quality',
    traditional: 'Generic messages, high unsubscribe rates',
    surfox: 'Psychology-matched messaging, personality-based adaptation',
    impact: 'Higher engagement rates, lower churn',
  },
  {
    area: 'Lead Qualification',
    traditional: 'Manual sorting, time-intensive processes',
    surfox: 'Automated psychological scoring, intelligent escalation',
    impact: 'Sales teams focus only on ready-to-buy prospects',
  },
  {
    area: 'Scalability',
    traditional: 'Linear scaling requires proportional human resources',
    surfox: 'SurFox AI handles 90% of interactions, exponential scaling possible',
    impact: 'Unlimited growth without proportional cost increases',
  },
  {
    area: 'Business Intelligence',
    traditional: 'Basic metrics, limited insights',
    surfox: 'Deep psychological analytics, behavioral intelligence',
    impact: 'Strategic insights into customer psychology and behavior patterns',
  },
];

const moatFactors = [
  {
    factor: 'Proprietary Psychology Engine',
    description: 'Years of R&D building AI that understands human psychology in sales contexts',
    icon: Brain,
  },
  {
    factor: 'Learning Network Effects',
    description: 'More conversations make the AI smarter, creating compound advantages',
    icon: TrendingUp,
  },
  {
    factor: 'Domain Expertise',
    description: '20+ years of sales experience translated into AI behavioral models',
    icon: Target,
  },
  {
    factor: 'Technical Architecture',
    description: 'Purpose-built for AI lead qualification, not adapted from other use cases',
    icon: Zap,
  },
];

const faqData = [
  {
    question: 'What makes SurFox AI different from other SMS platforms?',
    answer: "SurFox AI is an SMS Lead Qualification platform built for SMBs. While other tools focus on message volume or basic automation, SurFox AI has real, qualifying conversations with each contact, reads engagement signals, and only flags the ones ready to talk. It's the difference between sending messages and having intelligent conversations.",
  },
  {
    question: 'How does SurFox AI learn?',
    answer: 'SurFox AI learns from every conversation - what objections come up, what responses work, which leads are worth pursuing. This tenant-only learning means your AI gets smarter based on your data, and your competitors can never benefit from your conversations.',
  },
  {
    question: 'Can I use SurFox AI with my existing CRM?',
    answer: 'Yes. SurFox AI integrates with 5,000+ apps via Zapier and has native integrations with platforms like RecruiterFlow. Most teams use SurFox AI as the AI qualification layer between their lead sources and their existing CRM.',
  },
  {
    question: "What's the best use case for SurFox AI?",
    answer: 'SurFox AI excels at dead lead resurrection and outbound reactivation. If you have a CRM full of old leads that never converted, SurFox AI can find the 3-5% who are actually ready to buy. It pays for itself from leads you already own.',
  },
];

const competitorLinks = [
  {
    title: 'SurFox AI vs Smarter Contact',
    subtitle: 'AI Intelligence vs Mass Messaging',
    description: 'Covers Launch Control too, since Smarter Contact acquired it. Pricing for both, and how AI conversations compare to campaign blasting.',
    link: '/compare/surfox-vs-smarter-contact',
    icon: Brain,
  },
  {
    title: 'SurFox AI vs TextUs',
    subtitle: 'Automation vs Manual Operations',
    description: 'Cost advantages of AI automation over human-dependent workflows.',
    link: '/compare/surfox-vs-textus',
    icon: Zap,
  },
];

// Built from faqData so the markup always matches the FAQ rendered on the page.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-[#F4F5F3] text-[#13171F]">

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/5 border border-[#dCEEF1] mb-8">
              <span className="text-sm font-semibold text-[#0A7C8C]">CATEGORY CREATOR</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              Why SurFox AI Changes<br className="hidden sm:block" />
              Everything
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              We didn&apos;t build a better text blaster. We built a new category: <strong className="text-[#13171F]">SMS Lead Qualification</strong> - real conversational AI at SMB pricing that has qualifying conversations with every contact, not just blasts at them.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <a
                href="/pricing"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                See The Technology
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/demo"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#E4E6E2] hover:bg-[#F4F5F3] transition"
              >
                Request Demo
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">FIRST</div>
                <div className="text-sm text-[#5A626E]">SMS Lead Qualification</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">50+</div>
                <div className="text-sm text-[#5A626E]">Psychology Dimensions</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">AI</div>
                <div className="text-sm text-[#5A626E]">Learning Engine</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
                <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">90%</div>
                <div className="text-sm text-[#5A626E]">AI Automation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                The Current Market Landscape
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Understanding why existing solutions fall short and how SurFox AI addresses fundamental industry limitations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 px-4">
              {competitorCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#13171F]">{category.category}</h3>
                      <p className="text-sm text-[#5A626E]">{category.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#5A626E] mb-6 leading-relaxed">{category.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.examples.map((example, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700 border border-red-500/20">
                        {example}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#13171F] mb-3">Key Limitations:</h4>
                    {category.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start text-sm text-[#5A626E]">
                        <X className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-red-600" />
                        {limitation}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* SurFox AI Position */}
            <div className="p-8 sm:p-10 md:p-12 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
              <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#E4E6E2] overflow-hidden flex items-center justify-center mb-6 md:mb-0 md:mr-6">
                  <Image src="/logo.png" alt="SurFox AI" width={64} height={64} className="w-full h-full object-contain" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-semibold text-[#13171F]">SurFox AI</h3>
                  <p className="text-lg text-[#5A626E]">SMS Lead Qualification Platform</p>
                  <p className="text-sm font-semibold text-[#0A7C8C]">THE NEW CATEGORY</p>
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-[#13171F] mb-6 text-center">
                The First SMS Lead Qualification Platform Built for SMBs
              </h4>

              <p className="text-lg text-[#5A626E] leading-relaxed mb-8 max-w-4xl mx-auto text-center">
                SurFox AI addresses fundamental industry limitations through proprietary AI that understands human psychology in sales contexts. Our platform doesn&apos;t compete on message volume or basic automation - we&apos;ve created an entirely new category focused on conversation quality and psychological intelligence.
              </p>

              <div className="p-6 rounded-xl border border-[#dCEEF1] bg-[#F4F5F3]">
                <h5 className="text-sm font-semibold text-[#13171F] mb-4">Core Differentiators:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Real-time psychological analysis across 50+ dimensions',
                    'Adaptive learning that improves with every conversation',
                    'Automated qualification based on behavioral indicators',
                    'Intelligent escalation when prospects show buying intent',
                    'AI that maintains full conversation context',
                    'Psychology-based personalization at scale',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-4 h-4 text-[#0A7C8C] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capability Comparison */}
        <section id="comparison" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Traditional vs Psychology AI
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                How SurFox AI&apos;s Psychology AI changes the game across key capabilities.
              </p>
            </div>

            <div className="space-y-6 px-4">
              {surfoxAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]"
                >
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="text-center lg:text-left">
                      <h3 className="text-xl font-semibold text-[#13171F] mb-2">{advantage.area}</h3>
                      <p className="text-sm text-[#5A626E]">{advantage.impact}</p>
                    </div>

                    <div className="p-4 rounded-xl border border-[#E4E6E2] bg-white">
                      <h4 className="text-sm font-semibold text-[#13171F] mb-2 flex items-center">
                        <X className="w-4 h-4 mr-2 text-red-600" />
                        Traditional Approach
                      </h4>
                      <p className="text-sm text-[#5A626E]">{advantage.traditional}</p>
                    </div>

                    <div className="p-4 rounded-xl border border-blue-500/40 bg-blue-500/5">
                      <h4 className="text-sm font-semibold text-[#13171F] mb-2 flex items-center">
                        <Check className="w-4 h-4 mr-2 text-[#0A7C8C]" />
                        SurFox AI Approach
                      </h4>
                      <p className="text-sm text-[#5A626E]">{advantage.surfox}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Moat */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Our Technical Moat
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                The technical and strategic advantages that create lasting competitive differentiation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 mb-12">
              {moatFactors.map((factor, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/5 flex items-center justify-center mr-4">
                      <factor.icon className="w-6 h-6 text-[#0A7C8C]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#13171F]">{factor.factor}</h3>
                  </div>
                  <p className="text-[#5A626E] leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10 text-center">
              <h3 className="text-2xl font-semibold text-[#13171F] mb-4">Network Effects Advantage</h3>
              <p className="text-lg text-[#5A626E] leading-relaxed max-w-4xl mx-auto">
                As more conversations flow through SurFox AI, the AI becomes smarter about human psychology. This creates a compounding advantage that becomes stronger over time and harder for competitors to replicate.
              </p>
            </div>
          </div>
        </section>

        {/* Aged-database teaser. Full worked example lives on the Smarter Contact page. */}
        <section className="py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6">
              The Database You Already Paid For
            </h2>
            <p className="text-lg sm:text-xl text-[#5A626E] leading-relaxed mb-8">
              Every platform in the landscape above is built to work the leads coming in today. None of them
              does anything with the thousands of records already sitting in your CRM. SurFox AI is built to
              re-open those conversations, which is usually the cheapest pipeline a team owns.
            </p>
            <a
              href="/compare/surfox-vs-smarter-contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:bg-white transition"
            >
              See the worked example, with our assumptions shown
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Specific Competitor Links */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Detailed Competitive Analysis
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Head-to-head comparisons with leading platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
              {competitorLinks.map((comparison, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3] hover:border-blue-500/40 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/5 flex items-center justify-center mr-4">
                      <comparison.icon className="w-6 h-6 text-[#0A7C8C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#13171F]">{comparison.title}</h3>
                      <p className="text-sm text-[#5A626E]">{comparison.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#5A626E] mb-6 leading-relaxed text-sm">{comparison.description}</p>

                  <Link
                    href={comparison.link}
                    className="inline-flex items-center gap-2 text-[#0A7C8C] font-semibold hover:underline text-sm"
                  >
                    View Analysis
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
                Common questions about SurFox AI
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
              Experience The New Category
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Be among the first to experience the industry&apos;s most advanced sales communication platform. <strong className="text-[#13171F]">30-day money back guarantee.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <a
                href="/pricing"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Get Started Risk-Free
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/demo"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#c9cdc7] hover:bg-[#F4F5F3] transition"
              >
                Schedule Demo
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-[#5A626E] mb-12">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                30-day guarantee
              </div>
              <div className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                AI starts learning immediately
              </div>
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-[#0A7C8C]" />
                Full platform access
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
              <h3 className="text-xl font-semibold text-[#13171F] mb-6">Technology Leadership</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-[#0A7C8C] mb-2">FIRST</div>
                  <div className="text-sm text-[#5A626E]">SMS Lead Qualification</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-[#0A7C8C] mb-2">50+</div>
                  <div className="text-sm text-[#5A626E]">AI Dimensions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-[#0A7C8C] mb-2">90%</div>
                  <div className="text-sm text-[#5A626E]">Automation Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-[#0A7C8C] mb-2">NEW</div>
                  <div className="text-sm text-[#5A626E]">Category Created</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
