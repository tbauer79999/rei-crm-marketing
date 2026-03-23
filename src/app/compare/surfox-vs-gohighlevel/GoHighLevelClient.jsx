"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Brain, Settings, Target, Clock, Zap, Shield, Award, BookOpen, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function GoHighLevelClient() {
  const comparisonRows = [
    {
      feature: 'AI Learning',
      ghl: 'Static (manual training)',
      surfox: 'Learns from every conversation',
      surfoxWins: true
    },
    {
      feature: 'Setup Time',
      ghl: 'Weeks of configuration',
      surfox: 'Minutes',
      surfoxWins: true
    },
    {
      feature: 'Lead Scoring',
      ghl: 'Basic tagging',
      surfox: '50-point psychological scoring',
      surfoxWins: true
    },
    {
      feature: 'Follow-up',
      ghl: 'Manual workflow setup',
      surfox: 'Automatic 2-path logic',
      surfoxWins: true
    },
    {
      feature: 'Knowledge Base',
      ghl: 'Manual FAQ entry',
      surfox: 'Dynamic, indexes your docs',
      surfoxWins: true
    },
    {
      feature: 'Data Privacy',
      ghl: 'Shared infrastructure',
      surfox: 'Tenant-only learning, SOC 2 roadmap',
      surfoxWins: true
    },
    {
      feature: 'Best For',
      ghl: 'Agencies managing many clients',
      surfox: 'Sales teams qualifying high-volume leads',
      surfoxWins: null
    }
  ];

  const faqData = [
    {
      question: "Does GoHighLevel have AI lead qualification?",
      answer: "GoHighLevel has basic automation and workflows, but its AI capabilities require significant setup and configuration. SurFox AI is purpose-built for AI-powered SMS qualification with minimal setup. GoHighLevel is a swiss army knife. SurFox AI is a scalpel for lead qualification."
    },
    {
      question: "Is GoHighLevel good for SMS marketing?",
      answer: "Yes, GoHighLevel includes SMS as part of its all-in-one platform. However, the SMS features are one of many tools, not the core focus. SurFox AI is built specifically for AI-powered SMS conversations and lead qualification."
    },
    {
      question: "Why choose SurFox AI over GoHighLevel?",
      answer: "Choose GoHighLevel if you need an all-in-one CRM, website builder, and marketing platform. Choose SurFox AI if you specifically need AI to qualify leads via SMS. Many teams use GoHighLevel as their CRM and SurFox AI for AI-powered lead qualification."
    }
  ];

  return (
    <div className="bg-background text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Platform Comparison */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-blue-500/40 bg-blue-500/5">
                <div className="w-12 h-12 rounded-xl gradient-bg overflow-hidden flex items-center justify-center">
                  <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-white">SurFox AI</div>
                  <div className="text-sm text-white/50">AI Lead Qualification</div>
                </div>
              </div>

              <div className="text-3xl font-semibold text-white/30">VS</div>

              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white/40" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-white/60">GoHighLevel</div>
                  <div className="text-sm text-white/40">All-in-One Platform</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              Built for Conversations,<br className="hidden sm:block" />
              Not Configured for Chaos
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              GoHighLevel does everything. SurFox AI does one thing exceptionally well: <strong className="text-blue-400">turning conversations into qualified leads.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                See SurFox AI in Action
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white text-base font-semibold hover:border-white/[0.2] transition"
              >
                View Pricing
              </motion.a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              {[
                { stat: 'Minutes', label: 'Setup Time', sub: 'vs weeks of config' },
                { stat: '50-Point', label: 'Lead Scoring', sub: 'psychological analysis' },
                { stat: 'Auto', label: 'Follow-up Logic', sub: 'no workflow building' },
                { stat: '100%', label: 'Data Isolation', sub: 'tenant-only learning' },
              ].map((item, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                  <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">{item.stat}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                  <div className="text-xs text-white/40 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Side-by-Side Comparison
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              See exactly how the platforms differ where it matters most.
            </p>
          </motion.div>

          <div className="overflow-hidden rounded-2xl border-2 border-white/[0.08] bg-background">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-white/[0.03] border-b-2 border-white/[0.08]">
              <div className="p-4 sm:p-6 font-semibold text-white text-sm sm:text-base">Feature</div>
              <div className="p-4 sm:p-6 font-semibold text-white/50 text-sm sm:text-base text-center border-l border-white/[0.06]">GoHighLevel</div>
              <div className="p-4 sm:p-6 font-semibold text-blue-400 text-sm sm:text-base text-center border-l border-white/[0.06]">SurFox AI</div>
            </div>

            {comparisonRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-3 ${index !== comparisonRows.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
              >
                <div className="p-4 sm:p-6 font-medium text-white text-sm sm:text-base flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-6 text-white/50 text-sm sm:text-base text-center border-l border-white/[0.06] flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    {row.surfoxWins === true && <X className="w-4 h-4 text-red-400 flex-shrink-0 hidden sm:block" />}
                    <span>{row.ghl}</span>
                  </div>
                </div>
                <div className={`p-4 sm:p-6 text-sm sm:text-base text-center border-l border-white/[0.06] flex items-center justify-center ${row.surfoxWins ? 'bg-blue-500/5' : ''}`}>
                  <div className="flex items-center gap-2">
                    {row.surfoxWins === true && <Check className="w-4 h-4 text-blue-400 flex-shrink-0 hidden sm:block" />}
                    <span className={row.surfoxWins ? 'text-white font-medium' : 'text-white/60'}>{row.surfox}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Users Quit Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 px-4">
              Why 73% of GoHighLevel Users Quit Within 60 Days
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5"
          >
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              GoHighLevel is powerful. It's also overwhelming. Most users sign up expecting a turnkey solution and discover they've bought a construction kit instead.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Building workflows, configuring triggers, training AI bots manually, connecting integrations, managing sub-accounts - it's a full-time job. For agencies with dedicated ops teams, that's fine. For sales teams that just need to qualify leads? It's overkill that kills momentum.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              The 73% who quit aren't quitting because the tool is bad. They're quitting because they needed conversations, not a configuration project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SurFox AI Built Different Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 px-4">
              SurFox AI Was Built Different
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Conversation-first architecture means you start qualifying leads in minutes, not months.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                icon: MessageSquare,
                title: 'Conversations First, Not Workflows',
                body: "SurFox AI starts with the conversation. No workflow builders, no trigger configurations, no automation sequences to map out. Upload your leads, define your goal, and the AI handles the rest. It knows how to have conversations - you don't need to teach it."
              },
              {
                icon: Brain,
                title: 'AI That Actually Learns',
                body: "GoHighLevel's AI does what you tell it. SurFox AI learns from every conversation - what objections come up, what responses work, which leads are worth pursuing. It gets smarter automatically. Your knowledge base stays dynamic, not static."
              },
              {
                icon: Target,
                title: '50-Point Psychological Scoring',
                body: "Basic tags and manual lead scoring don't cut it. SurFox AI analyzes conversation patterns, response timing, objection types, and engagement signals to score leads on a 50-point scale. You know exactly who's worth calling - not just who responded."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/20 bg-blue-500/5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Which is Right for You?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Different tools for different jobs. Here's how to decide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-card-bg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold text-white">Choose GoHighLevel When:</h3>
              </div>
              <div className="space-y-3">
                {[
                  "You're an agency managing multiple client accounts",
                  "You need CRM, website builder, and marketing automation in one",
                  "You have dedicated ops staff to build and maintain workflows",
                  "You want to white-label a platform for resale",
                ].map((item, i) => (
                  <div key={i} className="flex items-start text-sm text-white/60">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-white/30 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl gradient-bg overflow-hidden flex items-center justify-center mr-4">
                  <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-white">Choose SurFox AI When:</h3>
              </div>
              <div className="space-y-3">
                {[
                  "You need to qualify high-volume leads fast",
                  "You want AI that learns without manual training",
                  "Setup in minutes matters more than endless customization",
                  "You have a CRM already and need better lead intelligence",
                ].map((item, i) => (
                  <div key={i} className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/50">
              Common questions about GoHighLevel vs SurFox AI
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border-2 border-white/[0.08] bg-background"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8 px-4 leading-tight">
              Ready to Start Qualifying<br className="hidden sm:block" />
              in Minutes, Not Months?
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Skip the configuration chaos. See how SurFox AI turns conversations into qualified leads - automatically. <strong className="text-white">30-day money back guarantee.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                See SurFox AI in Action
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white text-base font-semibold hover:border-white/[0.2] transition"
              >
                View Pricing
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                30-day guarantee
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Setup in minutes
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                Cancel anytime
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
