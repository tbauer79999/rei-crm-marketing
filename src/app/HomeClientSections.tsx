"use client"

import React from 'react';
import { motion } from 'framer-motion';
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
  Plus,
} from 'lucide-react';
import Image from 'next/image';

export default function HomeClientSections() {
  return (
    <>
      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Four steps from cold lead to hot prospect - no SDR required
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
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
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-orange font-bold text-sm mb-4 tracking-wide">{step.step}</div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features with Screenshots */}
      <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Everything You Need to Qualify at Scale
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              A complete AI SDR platform - not just a chatbot
            </p>
          </motion.div>

          <div className="space-y-20 sm:space-y-32 md:space-y-40">
            {/* Lead Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy">Lead Management</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Monitor your entire lead pipeline in real-time. Track status, engagement levels, and conversation progress across all prospects.
                </p>
                <ul className="space-y-3">
                  {[
                    'Real-time lead status tracking',
                    'Automated categorization and filtering',
                    'Campaign-specific lead organization',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3]">
                  <Image
                    src="/dashboard.png"
                    alt="SurFox lead management dashboard showing real-time lead status, engagement scores, and conversation progress"
                    width={1620}
                    height={837}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* AI Control Room */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center"
            >
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3]">
                  <Image
                    src="/AI-controlroom.png"
                    alt="SurFox AI Control Room showing real-time system health, AI performance statistics, and conversation quality indicators"
                    width={1920}
                    height={912}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy">AI Control Room</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Monitor system health, AI performance, and conversation quality. Real-time visibility into how your AI SDR is performing.
                </p>
                <ul className="space-y-3">
                  {[
                    'Live system performance metrics',
                    'AI accuracy and optimization tracking',
                    'Infrastructure health monitoring',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AI Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-navy">AI Learning</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Gets smarter with every conversation. SurFox AI analyzes thousands of interactions to discover what actually converts - then uses those insights automatically.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3]">
                  <Image
                    src="/AiLearning1.png"
                    alt="SurFox AI learning system analyzing conversation patterns and discovering high-converting messaging strategies"
                    width={1898}
                    height={898}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3]">
                  <Image
                    src="/AiLearning2.png"
                    alt="SurFox AI adapting to different personality types and automatically optimizing conversation approaches over time"
                    width={1898}
                    height={909}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  'Learns from every conversation',
                  'Discovers what messaging converts',
                  'Adapts to different personality types',
                  'Automatically optimizes over time',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* A/B Testing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center"
            >
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3]">
                  <Image
                    src="/ab-testing.png"
                    alt="SurFox A/B testing interface comparing message variants, conversation approaches, and statistical results"
                    width={776}
                    height={740}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy">A/B Testing & Optimization</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Continuously improve your AI&apos;s performance. Test different conversation approaches, messaging tones, and qualification criteria.
                </p>
                <ul className="space-y-3">
                  {[
                    'Multi-variant conversation testing',
                    'Statistical significance tracking',
                    'Automated winner selection',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section id="knowledge-base" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-orange" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              AI That Knows Your Business
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Upload your docs, pricing, FAQs, and product info. SurFox AI references them in real conversations - no extra training required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 px-4">
            {[
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
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-orange/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / ROI */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Built to Replace Your SDR Headcount
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              One AI that works every lead, around the clock - at a fraction of the cost.{' '}
              <a href="/roi" className="text-orange font-semibold hover:underline">
                Calculate your ROI →
              </a>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4">
            {[
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
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-orange mb-3">{stat.value}</div>
                <div className="text-lg sm:text-xl font-semibold text-navy mb-2">{stat.label}</div>
                <p className="text-gray-600 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Built on trusted infrastructure with security and compliance at the core
            </p>
            <p className="mt-4 text-orange font-medium text-sm sm:text-base">
              AWS · Twilio · OpenAI · Supabase
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4 px-4">
            {[
              {
                question: 'How does SurFox AI compare to hiring an SDR?',
                answer:
                  'A full-time SDR costs $60–80K/year in salary plus benefits, takes 3–6 months to ramp, and can only handle a fraction of your leads. SurFox AI runs 24/7, engages thousands of leads simultaneously, and typically delivers 60–80% lower cost per qualified lead. Use our ROI calculator to see your specific numbers.',
              },
              {
                question: 'How does the 50-point lead scoring system work?',
                answer:
                  "The AI analyzes each conversation across multiple dimensions - response quality, engagement level, buying signals, timing, and your qualification criteria. As conversations progress, the lead's score rises until they hit 'hot' status (typically 40+ points), triggering a handoff to your sales team.",
              },
              {
                question: "What happens when a lead becomes 'hot'?",
                answer:
                  'Your sales team gets notified immediately via your preferred channel (email, Slack, CRM). The AI steps back and provides a full conversation transcript, qualification summary, and key insights - so your team walks into a warm, informed call.',
              },
              {
                question: "Can I customize the AI's tone and scoring threshold?",
                answer:
                  "Yes. You can adjust the AI's persona (professional, casual, consultative) to match your brand, and set the score threshold for what counts as a hot lead. The AI's logic continuously improves based on conversation outcomes.",
              },
              {
                question: 'How does the knowledge base work?',
                answer:
                  'Upload PDFs, pricing sheets, case studies, or FAQs. The AI automatically indexes them and references the content during conversations to answer prospect questions accurately. Update your docs and the AI picks it up immediately - no retraining.',
              },
              {
                question: 'Is SurFox AI TCPA compliant?',
                answer:
                  'SurFox is built with TCPA compliance in mind - opt-in verification, clear sender identification, automated opt-out handling, and full conversation logging. We recommend consulting your legal team to confirm your specific use case.',
              },
              {
                question: 'How fast can I get started?',
                answer:
                  'Faster than you think. When you sign up, you start a 14-day free trial and are immediately placed on our pre-approved Twilio A2P campaign - so you can start texting leads within minutes. During your trial, you register your own A2P campaign. By the time your trial ends, you own your sending infrastructure.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById(`faq-home-${i}`);
                    if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
                  }}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-navy pr-4 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Plus className="w-4 h-4 text-orange" />
                  </div>
                </button>
                <div id={`faq-home-${i}`} style={{ display: 'none' }} className="px-6 sm:px-8 pb-5 sm:pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Stop hiring SDRs.{' '}<br className="hidden sm:block" />
              Let AI qualify your leads instead.
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4">
              Your team should be closing, not cold-qualifying. Start today.
            </p>

            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-orange text-white text-lg font-semibold hover:bg-orange-600 transition"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
