'use client'

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
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/[0.1]"
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663466327465/3tfFjbWvnRDzh5xKZoKSzd/surfox-sms-flow-diagram-LiTsygaxi7NaMYhzqGRVY4.webp"
                  alt="SMS Conversation Flow - AI and lead exchange with score meter showing 42/50 and HOT LEAD badge"
                  className="w-full h-auto"
                />
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
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/[0.08] aspect-[4/3]">
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
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/[0.08] aspect-[4/3]">
                  <Image
                    src="/AI-controlroom.png"
                    alt="SurFox AI Control Room showing live conversation monitoring and AI decision transparency"
                    width={1620}
                    height={837}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Learning Dashboard */}
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
                    <Activity className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>Learning Dashboard</h3>
                </div>
                <p className="text-lg text-white/60 leading-relaxed mb-6">
                  The AI learns from every conversation. See which approaches work best for your specific market, and let the AI continuously improve.
                </p>
                <ul className="space-y-3">
                  {[
                    'Conversation outcome analytics',
                    'AI performance metrics',
                    'Continuous improvement tracking',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/[0.08] aspect-[4/3]">
                  <Image
                    src="/learning-dashboard-1.png"
                    alt="SurFox Learning Dashboard showing AI performance metrics and continuous improvement"
                    width={1620}
                    height={837}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
