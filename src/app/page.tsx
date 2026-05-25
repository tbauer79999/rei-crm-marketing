import { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  MessageSquare,
  Upload,
  Brain,
  Zap,
  Shield,
  CheckCircle,
  Activity,
  Users,
  FlaskConical,
  FileText,
  Phone,
  Target,
} from 'lucide-react';
import HomeClientSections from './HomeClientSections';

export const metadata: Metadata = {
  title: 'AI SDR: Qualify Leads via SMS | Cut Headcount Costs',
  description:
    'Your SMS leads are ignoring you. SurFox AI follows up automatically until they respond. Upload your lead list, let AI qualify the buyers, and only talk to prospects ready to close.',
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
      'Your SMS leads are ignoring you. SurFox AI follows up automatically until they respond. Upload your lead list, let AI qualify the buyers, and only talk to prospects ready to close.',
    url: 'https://www.getsurfox.com',
    type: 'website',
    siteName: 'SurFox AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SurFox AI | AI SDR: Qualify Leads via SMS & Cut Headcount Costs',
    description:
      'Your SMS leads are ignoring you. SurFox AI follows up automatically until they respond. Upload your lead list, let AI qualify the buyers, and only talk to prospects ready to close.',
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

const howItWorksSteps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload Leads',
    desc: 'Import thousands of cold leads in bulk. CSV, spreadsheet, or API integration.',
  },
  {
    icon: MessageSquare,
    step: '02',
    title: 'AI Engages',
    desc: 'SurFox AI starts personalized SMS conversations with each lead via Twilio.',
  },
  {
    icon: Target,
    step: '03',
    title: 'Scores & Qualifies',
    desc: 'AI scores each conversation on a 50-point scale, identifying hot prospects.',
  },
  {
    icon: Phone,
    step: '04',
    title: 'Sales Handoff',
    desc: "When a lead hits 'hot' status, your sales team gets notified to take over.",
  },
];

const qualificationSignals = [
  { label: 'Budget confirmed', value: '$50k–100k' },
  { label: 'Decision maker', value: 'Yes' },
  { label: 'Timeline', value: 'Q2 2025' },
  { label: 'Avg. response time', value: '< 2 min' },
];

const knowledgeBaseItems = [
  {
    icon: FileText,
    title: 'Document Upload',
    desc: 'Upload PDFs, Word docs, and text files containing product info, pricing, and FAQs.',
  },
  {
    icon: Brain,
    title: 'AI Learning',
    desc: 'AI automatically indexes and learns from your documents to give accurate, contextual responses.',
  },
  {
    icon: Zap,
    title: 'Real-Time Reference',
    desc: 'During conversations, AI pulls from your knowledge base to answer questions and handle objections.',
  },
];

const statsItems = [
  {
    value: '60–80%',
    label: 'Lower Cost Per Lead',
    desc: 'vs. hiring and managing a human SDR team',
  },
  {
    value: '100%',
    label: 'Lead Coverage',
    desc: 'Every lead gets engaged and qualified - no one falls through the cracks',
  },
  {
    value: '50pt',
    label: 'Scoring System',
    desc: 'Precise qualification tracking for every conversation',
  },
  {
    value: '24/7',
    label: 'Always On',
    desc: 'AI never sleeps, never takes sick days, never needs a ramp period',
  },
];

const securityItems = [
  {
    icon: Shield,
    title: 'Data Encryption',
    desc: 'TLS and AES encryption across all SMS conversations and lead data.',
  },
  {
    icon: CheckCircle,
    title: 'TCPA Compliant',
    desc: 'Full compliance with telecommunications regulations and automated opt-out management.',
  },
  {
    icon: Activity,
    title: 'Always On',
    desc: 'Redundant infrastructure built on AWS. 24/7 monitoring.',
  },
];

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      {/* Organization + LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Organization', 'LocalBusiness'],
            name: 'SurFox AI',
            legalName: 'SurFox AI, Inc.',
            url: 'https://www.getsurfox.com',
            logo: 'https://www.getsurfox.com/newSurFoxLogo1.png',
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
              price: '147',
              description: 'Plans start from $147/month',
              url: 'https://www.getsurfox.com/pricing',
            },
            operatingSystem: 'Web Browser',
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
                  text: 'SurFox AI is built with TCPA compliance in mind - opt-in verification, clear sender identification, automated opt-out handling, and full conversation logging. We recommend consulting your legal team to confirm your specific use case.',
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
      <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 flex justify-center overflow-hidden">
        {/* Gradient orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #2563EB 0%, #7C3AED 50%, transparent 70%)" }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-10">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm text-white/70 font-medium">
              AI SDR Platform - Now Live
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-sora)' }}>
            Your SMS Leads Are
            <br />
            <span className="gradient-text">Ignoring You.</span>
            <br />
            SurFox AI Follows Up
            <br />
            Until They Don&apos;t.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-normal">
            Upload your cold lead list. Our AI texts every one of them, qualifies the real buyers, and hands them off to you ready to close.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4">
            <a
              href="/demo"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 shadow-sm shadow-blue-500/5 shadow-blue-500/5 shadow-blue-500/25"
            >
              Request Demo
              <ArrowRightIcon className="w-5 h-5" />
            </a>

            <a
              href="/pricing"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg glass-card border border-white/10 text-white/80 hover:text-white hover:border-white/20 text-base font-semibold transition"
            >
              Get Started Free
            </a>
          </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Built on trusted infrastructure</p>
              <div className="flex flex-wrap items-center justify-start gap-6">
                {['AWS', 'Twilio', 'Anthropic', 'Supabase'].map((partner) => (
                  <div key={partner} className="text-sm text-white/40 font-medium">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard mockup - right side */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/[0.1]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663466327465/3tfFjbWvnRDzh5xKZoKSzd/surfox-dashboard-hero-Ebdjwm2HRTJEqVJePCbqRa.webp"
                alt="SurFox AI Dashboard - Lead Pipeline with 247 qualified leads and 89% response rate"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Four steps from cold lead to hot prospect - no SDR required
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left: Steps */}
            <div className="lg:col-span-1 space-y-6">
              {howItWorksSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="text-blue-400 font-bold text-sm mb-2 tracking-wide">{step.step}</div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: SMS Flow Diagram */}
            <div className="lg:col-span-2">
              <div
                className="relative rounded-2xl overflow-hidden border border-white/[0.1]"
                style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 60px rgba(37,99,235,0.2)' }}
              >
                {/* Browser chrome */}
                <div className="bg-[#0a0f1e] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 bg-white/[0.04] rounded-md px-3 py-1 text-xs text-white/25 font-mono truncate">
                    app.getsurfox.com
                  </div>
                </div>

                {/* App UI */}
                <div className="bg-[#080d1a] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Left: Chat thread */}
                  <div className="flex flex-col">
                    {/* Contact header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                      <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-semibold text-blue-300 flex-shrink-0">
                        JM
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-sm font-medium">John Martinez</div>
                        <div className="text-white/40 text-xs">+1 (555) 012-3456</div>
                      </div>
                      <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium border border-emerald-500/20 flex-shrink-0">
                        Active
                      </span>
                    </div>

                    {/* Messages */}
                    <div className="space-y-2.5 flex-1">
                      <div className="flex justify-end">
                        <div className="max-w-[80%] bg-blue-600 text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm leading-relaxed">
                          Hi John, interested in investment opportunities in your area?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[75%] bg-white/[0.07] text-white/80 text-xs px-3 py-2 rounded-2xl rounded-tl-sm leading-relaxed border border-white/[0.06]">
                          Maybe, tell me more
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[80%] bg-blue-600 text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm leading-relaxed">
                          What&apos;s your typical deal size?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[75%] bg-white/[0.07] text-white/80 text-xs px-3 py-2 rounded-2xl rounded-tl-sm leading-relaxed border border-white/[0.06]">
                          Usually 50k–100k
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[80%] bg-blue-600 text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm leading-relaxed">
                          Perfect. I have 3 deals matching that — want details?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[75%] bg-white/[0.07] text-white/80 text-xs px-3 py-2 rounded-2xl rounded-tl-sm leading-relaxed border border-white/[0.06]">
                          Yes, send them over
                        </div>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                      </div>
                      <span className="text-white/30 text-xs">SurFox AI is typing</span>
                      <div className="flex gap-0.5 ml-0.5">
                        <div className="w-1 h-1 rounded-full bg-white/25 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1 h-1 rounded-full bg-white/25 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1 h-1 rounded-full bg-white/25 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>

                  {/* Right: Score + signals */}
                  <div className="flex flex-col gap-4">
                    {/* Score card */}
                    <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                      <div className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-3">Lead Score</div>
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                            <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                            <circle
                              cx="32" cy="32" r="26" fill="none"
                              stroke="url(#scoreGrad)" strokeWidth="6"
                              strokeDasharray="137.3 163.4"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#10b981" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-white font-bold text-lg leading-none">42</span>
                            <span className="text-white/30 text-[9px]">/50</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                            <span className="text-emerald-400 text-sm font-semibold">Hot Prospect</span>
                          </div>
                          <div className="text-white/35 text-xs">84th percentile</div>
                        </div>
                      </div>
                    </div>

                    {/* Qualification signals */}
                    <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 flex-1">
                      <div className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-3">Qualification Signals</div>
                      <div className="space-y-2.5">
                        {qualificationSignals.map((sig, i) => (
                          <div key={i} className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                              <span className="text-white/45 text-xs truncate">{sig.label}</span>
                            </div>
                            <span className="text-white/80 text-xs font-medium flex-shrink-0">{sig.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Handoff banner */}
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-emerald-400 text-xs font-semibold">Ready for Handoff</div>
                        <div className="text-white/30 text-[10px]">Sales team notified</div>
                      </div>
                      <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features with Screenshots */}
      <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Everything You Need to Qualify at Scale
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              A complete AI SDR platform - not just a chatbot
            </p>
          </div>

          <div className="space-y-20 sm:space-y-32 md:space-y-40">
            {/* Lead Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>Lead Management</h3>
                </div>
                <p className="text-lg text-white/60 leading-relaxed mb-6">
                  Monitor your entire lead pipeline in real-time. Track status, engagement levels, and conversation progress across all prospects.
                </p>
                <ul className="space-y-3">
                  {[
                    'Real-time lead status tracking',
                    'Automated categorization and filtering',
                    'Campaign-specific lead organization',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 60px rgba(37,99,235,0.15)' }}>
                  <div className="bg-[#0a0f1e] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 bg-white/[0.04] rounded-md px-3 py-1 text-xs text-white/25 font-mono truncate">
                      app.getsurfox.com
                    </div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/dashboard.png"
                      alt="SurFox AI lead management dashboard showing real-time lead status, engagement scores, and conversation progress"
                      width={1620}
                      height={837}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Control Room */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>AI Control Room</h3>
                </div>
                <p className="text-lg text-white/60 leading-relaxed mb-6">
                  Watch the AI work in real-time. See every conversation, every decision, every score. Adjust AI behavior on the fly without retraining.
                </p>
                <ul className="space-y-3">
                  {[
                    'Live conversation monitoring',
                    'Real-time AI decision transparency',
                    'Instant behavior adjustments',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 60px rgba(37,99,235,0.15)' }}>
                  <div className="bg-[#0a0f1e] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 bg-white/[0.04] rounded-md px-3 py-1 text-xs text-white/25 font-mono truncate">
                      app.getsurfox.com
                    </div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/control-room.png"
                      alt="SurFox AI Control Room showing live conversation monitoring and AI decision transparency"
                      width={1620}
                      height={837}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Learning */}
            <div>
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>AI Learning</h3>
              </div>
              <p className="text-lg text-white/60 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Gets smarter with every conversation. SurFox AI analyzes thousands of interactions to discover what actually converts - then uses those insights automatically.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 60px rgba(37,99,235,0.15)' }}>
                  <div className="bg-[#0a0f1e] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 bg-white/[0.04] rounded-md px-3 py-1 text-xs text-white/25 font-mono truncate">
                      app.getsurfox.com
                    </div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/learning-dashboard.png"
                      alt="SurFox AI learning system analyzing conversation patterns and discovering high-converting messaging strategies"
                      width={1898}
                      height={898}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 60px rgba(37,99,235,0.15)' }}>
                  <div className="bg-[#0a0f1e] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 bg-white/[0.04] rounded-md px-3 py-1 text-xs text-white/25 font-mono truncate">
                      app.getsurfox.com
                    </div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/learning-dashboard2.png"
                      alt="SurFox AI adapting to different personality types and automatically optimizing conversation approaches over time"
                      width={1898}
                      height={909}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  'Learns from every conversation',
                  'Discovers what messaging converts',
                  'Adapts to different personality types',
                  'Automatically optimizes over time',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/60">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* A/B Testing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 60px rgba(37,99,235,0.15)' }}>
                  <div className="bg-[#0a0f1e] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 bg-white/[0.04] rounded-md px-3 py-1 text-xs text-white/25 font-mono truncate">
                      app.getsurfox.com
                    </div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/ab-testing.png"
                      alt="SurFox AI A/B testing interface comparing message variants, conversation approaches, and statistical results"
                      width={776}
                      height={740}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <FlaskConical className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>A/B Testing & Optimization</h3>
                </div>
                <p className="text-lg text-white/60 leading-relaxed mb-6">
                  Continuously improve your AI&apos;s performance. Test different conversation approaches, messaging tones, and qualification criteria.
                </p>
                <ul className="space-y-3">
                  {[
                    'Multi-variant conversation testing',
                    'Statistical significance tracking',
                    'Automated winner selection',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section id="knowledge-base" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              AI That Knows Your Business
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Upload your docs, pricing, FAQs, and product info. SurFox AI references them in real conversations - no extra training required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 px-4">
            {knowledgeBaseItems.map((feature, i) => (
              <div
                key={i}
                className="glass-card border border-white/[0.08] p-8 sm:p-10 rounded-2xl"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / ROI */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Built to Replace Your SDR Headcount
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              One AI that works every lead, around the clock - at a fraction of the cost.{' '}
              <a href="/roi" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Calculate your ROI →
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4">
            {statsItems.map((stat, i) => (
              <div
                key={i}
                className="text-center glass-card border border-white/[0.08] rounded-2xl p-8"
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-3">{stat.value}</div>
                <div className="text-lg sm:text-xl font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-white/50 leading-relaxed text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Enterprise-Grade Security
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4">
              Built on trusted infrastructure with security and compliance at the core
            </p>
            <p className="mt-4 text-blue-400 font-medium text-sm sm:text-base">
              AWS · Twilio · OpenAI · Supabase
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {securityItems.map((item, i) => (
              <div
                key={i}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - client-rendered (interactive accordion) */}
      <HomeClientSections />

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] glass-card p-12 sm:p-16 md:p-20"
            style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(37,99,235,0.15)' }}>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, #2563EB 0%, #7C3AED 50%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
                Stop hiring SDRs.{' '}<br className="hidden sm:block" />
                <span className="gradient-text">Let AI qualify your leads instead.</span>
              </h2>

              <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed">
                Your team should be closing, not cold-qualifying. Start today.
              </p>

              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-lg gradient-bg text-white text-lg font-semibold hover:opacity-90 transition shadow-sm shadow-blue-500/25"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
