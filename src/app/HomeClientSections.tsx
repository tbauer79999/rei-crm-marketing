'use client'

import React, { useState } from 'react';
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
  ChevronDown,
} from 'lucide-react';
import Image from 'next/image';

export default function HomeClientSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* How It Works */}
      <section id="how-it-works" className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-14 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Four steps from cold lead to hot prospect - no SDR required
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left: Steps */}
            <div className="lg:col-span-1 space-y-6">
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
                </motion.div>
              ))}
            </div>

            {/* Right: SMS Flow Diagram */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                <div className="relative">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663466327465/3tfFjbWvnRDzh5xKZoKSzd/surfox-sms-flow-diagram-LiTsygaxi7NaMYhzqGRVY4.webp"
                    alt="SMS Conversation Flow - AI and lead exchange with score meter showing 42/50 and HOT LEAD badge"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features with Screenshots */}
      <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Everything You Need to Qualify at Scale
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
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
            </motion.div>

            {/* AI Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section id="knowledge-base" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              AI That Knows Your Business
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
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
                className="glass-card border border-white/[0.08] p-8 sm:p-10 rounded-2xl"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / ROI */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Built to Replace Your SDR Headcount
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              One AI that works every lead, around the clock - at a fraction of the cost.{' '}
              <a href="/roi" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
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
                className="text-center glass-card border border-white/[0.08] rounded-2xl p-8"
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-3">{stat.value}</div>
                <div className="text-lg sm:text-xl font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-white/50 leading-relaxed text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Enterprise-Grade Security
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed px-4">
              Built on trusted infrastructure with security and compliance at the core
            </p>
            <p className="mt-4 text-blue-400 font-medium text-sm sm:text-base">
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
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left: Label + Heading + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
                Questions we{' '}
                <span className="gradient-text">get asked a lot.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8 text-sm sm:text-base">
                Everything you need to know about SurFox AI. Can&apos;t find your answer? Talk to our team.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 text-sm font-medium transition-all glass-card"
              >
                Contact Sales
              </a>
            </motion.div>

            {/* Right: Accordion */}
            <div className="space-y-2">
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
                    "Your sales team receives an instant notification with the lead's full conversation history, contact details, and score breakdown. The handoff is seamless - your closer has everything they need to pick up the conversation with full context and close the deal.",
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
                    'SurFox AI is built with TCPA compliance in mind - opt-in verification, clear sender identification, automated opt-out handling, and full conversation logging. We recommend consulting your legal team to confirm your specific use case.',
                },
                {
                  question: 'How fast can I get started?',
                  answer:
                    'Faster than you think. When you sign up, you start a 14-day free trial and are immediately placed on our pre-approved Twilio A2P campaign - so you can start texting leads within minutes. During your trial, you register your own A2P campaign. By the time your trial ends, you own your sending infrastructure.',
                },
              ].map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`rounded-xl overflow-hidden border transition-colors duration-200 ${
                      isOpen
                        ? 'border-blue-500/30 bg-blue-500/[0.04]'
                        : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
                          isOpen ? 'text-blue-400 rotate-180' : 'text-white/40 rotate-0'
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 border-t border-white/[0.06]">
                        <p className="text-white/55 leading-relaxed text-sm sm:text-base pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
