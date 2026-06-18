import { generatePageMetadata, generateCompareBreadcrumb } from '@/data/page-metadata';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  X,
  Brain,
  Settings,
  Target,
  Clock,
  Shield,
  Award,
  MessageSquare,
} from 'lucide-react';

export const metadata = generatePageMetadata('compare-gohighlevel');

const breadcrumbSchema = generateCompareBreadcrumb('GoHighLevel', '/compare/surfox-vs-gohighlevel');

const comparisonRows = [
  { feature: 'AI Learning', ghl: 'Static (manual training)', surfox: 'Learns from every conversation', surfoxWins: true },
  { feature: 'Setup Time', ghl: 'Weeks of configuration', surfox: 'Minutes', surfoxWins: true },
  { feature: 'Lead Scoring', ghl: 'Basic tagging', surfox: '50-point psychological scoring', surfoxWins: true },
  { feature: 'Follow-up', ghl: 'Manual workflow setup', surfox: 'Automatic 2-path logic', surfoxWins: true },
  { feature: 'Knowledge Base', ghl: 'Manual FAQ entry', surfox: 'Dynamic, indexes your docs', surfoxWins: true },
  { feature: 'Data Privacy', ghl: 'Shared infrastructure', surfox: 'Tenant-only learning, SOC 2 roadmap', surfoxWins: true },
  { feature: 'Best For', ghl: 'Agencies managing many clients', surfox: 'Sales teams qualifying high-volume leads', surfoxWins: null },
];

const builtDifferentItems = [
  {
    icon: MessageSquare,
    title: 'Conversations First, Not Workflows',
    body: "SurFox AI starts with the conversation. No workflow builders, no trigger configurations, no automation sequences to map out. Upload your leads, define your goal, and the AI handles the rest. It knows how to have conversations - you don't need to teach it.",
  },
  {
    icon: Brain,
    title: 'AI That Actually Learns',
    body: "GoHighLevel's AI does what you tell it. SurFox AI learns from every conversation - what objections come up, what responses work, which leads are worth pursuing. It gets smarter automatically. Your knowledge base stays dynamic, not static.",
  },
  {
    icon: Target,
    title: '50-Point Psychological Scoring',
    body: "Basic tags and manual lead scoring don't cut it. SurFox AI analyzes conversation patterns, response timing, objection types, and engagement signals to score leads on a 50-point scale. You know exactly who's worth calling - not just who responded.",
  },
];

const faqData = [
  {
    question: 'Does GoHighLevel have AI lead qualification?',
    answer: 'GoHighLevel has basic automation and workflows, but its AI capabilities require significant setup and configuration. SurFox AI is purpose-built for AI-powered SMS qualification with minimal setup. GoHighLevel is a swiss army knife. SurFox AI is a scalpel for lead qualification.',
  },
  {
    question: 'Is GoHighLevel good for SMS marketing?',
    answer: 'Yes, GoHighLevel includes SMS as part of its all-in-one platform. However, the SMS features are one of many tools, not the core focus. SurFox AI is built specifically for AI-powered SMS conversations and lead qualification.',
  },
  {
    question: 'Why choose SurFox AI over GoHighLevel?',
    answer: 'Choose GoHighLevel if you need an all-in-one CRM, website builder, and marketing platform. Choose SurFox AI if you specifically need AI to qualify leads via SMS. Many teams use GoHighLevel as their CRM and SurFox AI for AI-powered lead qualification.',
  },
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
            {/* Platform Comparison */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-blue-500/40 bg-blue-500/5">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E6E2] overflow-hidden flex items-center justify-center">
                  <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-[#13171F]">SurFox AI</div>
                  <div className="text-sm text-[#8A92A0]">AI Lead Qualification</div>
                </div>
              </div>

              <div className="text-3xl font-semibold text-[#8A92A0]">VS</div>

              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-[#E4E6E2] bg-white">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Settings className="w-6 h-6 text-[#8A92A0]" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-[#5A626E]">GoHighLevel</div>
                  <div className="text-sm text-[#8A92A0]">All-in-One Platform</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              Built for Conversations,<br className="hidden sm:block" />
              Not Configured for Chaos
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              GoHighLevel does everything. SurFox AI does one thing exceptionally well: <strong className="text-[#0A7C8C]">turning conversations into qualified leads.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <a
                href="/demo"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                See SurFox AI in Action
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/pricing"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#E4E6E2] transition"
              >
                View Pricing
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              {[
                { stat: 'Minutes', label: 'Setup Time', sub: 'vs weeks of config' },
                { stat: '50-Point', label: 'Lead Scoring', sub: 'psychological analysis' },
                { stat: 'Auto', label: 'Follow-up Logic', sub: 'no workflow building' },
                { stat: '100%', label: 'Data Isolation', sub: 'tenant-only learning' },
              ].map((item, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl border-2 border-[#E4E6E2] bg-white">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#0A7C8C] mb-2">{item.stat}</div>
                  <div className="text-sm text-[#5A626E]">{item.label}</div>
                  <div className="text-xs text-[#8A92A0] mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Side-by-Side Comparison
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                See exactly how the platforms differ where it matters most.
              </p>
            </div>

            <div className="overflow-x-auto">
            <div className="min-w-[480px] overflow-hidden rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-white/[0.03] border-b-2 border-[#E4E6E2]">
                <div className="p-4 sm:p-6 font-semibold text-[#13171F] text-sm sm:text-base">Feature</div>
                <div className="p-4 sm:p-6 font-semibold text-[#8A92A0] text-sm sm:text-base text-center border-l border-[#EDEEEB]">GoHighLevel</div>
                <div className="p-4 sm:p-6 font-semibold text-[#0A7C8C] text-sm sm:text-base text-center border-l border-[#EDEEEB]">SurFox AI</div>
              </div>

              {comparisonRows.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index !== comparisonRows.length - 1 ? 'border-b border-[#EDEEEB]' : ''}`}
                >
                  <div className="p-4 sm:p-6 font-medium text-[#13171F] text-sm sm:text-base flex items-center">
                    {row.feature}
                  </div>
                  <div className="p-4 sm:p-6 text-[#8A92A0] text-sm sm:text-base text-center border-l border-[#EDEEEB] flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      {row.surfoxWins === true && <X className="w-4 h-4 text-red-400 flex-shrink-0 hidden sm:block" />}
                      <span>{row.ghl}</span>
                    </div>
                  </div>
                  <div className={`p-4 sm:p-6 text-sm sm:text-base text-center border-l border-[#EDEEEB] flex items-center justify-center ${row.surfoxWins ? 'bg-blue-500/5' : ''}`}>
                    <div className="flex items-center gap-2">
                      {row.surfoxWins === true && <Check className="w-4 h-4 text-[#0A7C8C] flex-shrink-0 hidden sm:block" />}
                      <span className={row.surfoxWins ? 'text-[#13171F] font-medium' : 'text-[#5A626E]'}>{row.surfox}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Why Users Quit Section */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6 px-4">
                Why 73% of GoHighLevel Users Quit Within 60 Days
              </h2>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
              <p className="text-lg text-[#5A626E] leading-relaxed mb-6">
                GoHighLevel is powerful. It&apos;s also overwhelming. Most users sign up expecting a turnkey solution and discover they&apos;ve bought a construction kit instead.
              </p>
              <p className="text-lg text-[#5A626E] leading-relaxed mb-6">
                Building workflows, configuring triggers, training AI bots manually, connecting integrations, managing sub-accounts - it&apos;s a full-time job. For agencies with dedicated ops teams, that&apos;s fine. For sales teams that just need to qualify leads? It&apos;s overkill that kills momentum.
              </p>
              <p className="text-lg text-[#5A626E] leading-relaxed">
                The 73% who quit aren&apos;t quitting because the tool is bad. They&apos;re quitting because they needed conversations, not a configuration project.
              </p>
            </div>
          </div>
        </section>

        {/* SurFox AI Built Different Section */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6 px-4">
                SurFox AI Was Built Different
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Conversation-first architecture means you are qualifying leads in days, not months.
              </p>
            </div>

            <div className="space-y-6">
              {builtDifferentItems.map((item, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 rounded-2xl border-2 border-[#dCEEF1] bg-blue-500/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#13171F]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#13171F] mb-2">{item.title}</h3>
                      <p className="text-[#5A626E] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Choose Section */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4 sm:mb-6 px-4">
                Which is Right for You?
              </h2>
              <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
                Different tools for different jobs. Here&apos;s how to decide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#E4E6E2] bg-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-[#8A92A0]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#13171F]">Choose GoHighLevel When:</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "You're an agency managing multiple client accounts",
                    'You need CRM, website builder, and marketing automation in one',
                    'You have dedicated ops staff to build and maintain workflows',
                    'You want to white-label a platform for resale',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#8A92A0] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E6E2] overflow-hidden flex items-center justify-center mr-4">
                    <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#13171F]">Choose SurFox AI When:</h3>
                </div>
                <div className="space-y-3">
                  {[
                    'You need to qualify high-volume leads fast',
                    'You want AI that learns without manual training',
                    'Fast self-serve setup matters more than endless customization',
                    'You have a CRM already and need better lead intelligence',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start text-sm text-[#5A626E]">
                      <Check className="w-5 h-5 mr-2 mt-0.5 text-[#0A7C8C] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#8A92A0]">
                Common questions about GoHighLevel vs SurFox AI
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border-2 border-[#E4E6E2] bg-[#F4F5F3]"
                >
                  <h3 className="text-lg font-semibold text-[#13171F] mb-3">{faq.question}</h3>
                  <p className="text-[#5A626E] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6 sm:mb-8 px-4 leading-tight">
              Ready to Start Qualifying<br className="hidden sm:block" />
              in Days, Not Months?
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Skip the configuration chaos. See how SurFox AI turns conversations into qualified leads - automatically. <strong className="text-[#13171F]">30-day money back guarantee.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <a
                href="/demo"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                See SurFox AI in Action
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/pricing"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#E4E6E2] transition"
              >
                View Pricing
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#8A92A0]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#0A7C8C]" />
                30-day guarantee
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0A7C8C]" />
                Setup in minutes, live when A2P approves
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#0A7C8C]" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
