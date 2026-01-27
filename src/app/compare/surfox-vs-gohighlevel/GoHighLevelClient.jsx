"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Brain, Settings, Target, Clock, Zap, Shield, Award, BookOpen, MessageSquare } from 'lucide-react';

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

  return (
    <div className="bg-white text-gray-900">
      <style>{`
        .text-navy {
          color: #1e293b;
        }

        .bg-navy {
          background-color: #1e293b;
        }

        .text-orange {
          color: #ea580c;
        }

        .bg-orange {
          background-color: #c2410c;
        }
      `}</style>

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
              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-orange bg-orange/5">
                <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-navy">SurFox AI</div>
                  <div className="text-sm text-gray-600">Conversation Intelligence</div>
                </div>
              </div>

              <div className="text-3xl font-semibold text-gray-400">VS</div>

              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-200 bg-gray-50">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-gray-500" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-gray-600">GoHighLevel</div>
                  <div className="text-sm text-gray-500">All-in-One Platform</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              Built for Conversations,<br className="hidden sm:block" />
              Not Configured for Chaos
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              GoHighLevel does everything. SurFox AI does one thing exceptionally well: <strong className="text-orange">turning conversations into qualified leads.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                See SurFox in Action
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                View Pricing
              </motion.a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">Minutes</div>
                <div className="text-sm text-gray-600">Setup Time</div>
                <div className="text-xs text-gray-400 mt-1">vs weeks of config</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">50-Point</div>
                <div className="text-sm text-gray-600">Lead Scoring</div>
                <div className="text-xs text-gray-400 mt-1">psychological analysis</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">Auto</div>
                <div className="text-sm text-gray-600">Follow-up Logic</div>
                <div className="text-xs text-gray-400 mt-1">no workflow building</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">100%</div>
                <div className="text-sm text-gray-600">Data Isolation</div>
                <div className="text-xs text-gray-400 mt-1">tenant-only learning</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Side-by-Side Comparison
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              See exactly how the platforms differ where it matters most.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-100 border-b-2 border-gray-200">
              <div className="p-4 sm:p-6 font-semibold text-navy text-sm sm:text-base">Feature</div>
              <div className="p-4 sm:p-6 font-semibold text-gray-600 text-sm sm:text-base text-center border-l border-gray-200">GoHighLevel</div>
              <div className="p-4 sm:p-6 font-semibold text-orange text-sm sm:text-base text-center border-l border-gray-200">SurFox AI</div>
            </div>

            {/* Table Rows */}
            {comparisonRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-3 ${index !== comparisonRows.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="p-4 sm:p-6 font-medium text-navy text-sm sm:text-base flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-6 text-gray-600 text-sm sm:text-base text-center border-l border-gray-200 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    {row.surfoxWins === true && <X className="w-4 h-4 text-red-500 flex-shrink-0 hidden sm:block" />}
                    <span>{row.ghl}</span>
                  </div>
                </div>
                <div className={`p-4 sm:p-6 text-sm sm:text-base text-center border-l border-gray-200 flex items-center justify-center ${row.surfoxWins ? 'bg-orange/5' : ''}`}>
                  <div className="flex items-center gap-2">
                    {row.surfoxWins === true && <Check className="w-4 h-4 text-orange flex-shrink-0 hidden sm:block" />}
                    <span className={row.surfoxWins ? 'text-navy font-medium' : 'text-gray-700'}>{row.surfox}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Users Quit Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 px-4">
              Why 73% of GoHighLevel Users Quit Within 60 Days
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl border-2 border-red-200 bg-red-50"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              GoHighLevel is powerful. It's also overwhelming. Most users sign up expecting a turnkey solution and discover they've bought a construction kit instead.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Building workflows, configuring triggers, training AI bots manually, connecting integrations, managing sub-accounts - it's a full-time job. For agencies with dedicated ops teams, that's fine. For sales teams that just need to qualify leads? It's overkill that kills momentum.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 73% who quit aren't quitting because the tool is bad. They're quitting because they needed conversations, not a configuration project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SurFox Built Different Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 px-4">
              SurFox AI Was Built Different
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Conversation-first architecture means you start qualifying leads in minutes, not months.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Conversations First, Not Workflows</h3>
                  <p className="text-gray-700 leading-relaxed">
                    SurFox AI starts with the conversation. No workflow builders, no trigger configurations, no automation sequences to map out. Upload your leads, define your goal, and the AI handles the rest. It knows how to have conversations - you don't need to teach it.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">AI That Actually Learns</h3>
                  <p className="text-gray-700 leading-relaxed">
                    GoHighLevel's AI does what you tell it. SurFox AI learns from every conversation - what objections come up, what responses work, which leads are worth pursuing. It gets smarter automatically. Your knowledge base stays dynamic, not static.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">50-Point Psychological Scoring</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Basic tags and manual lead scoring don't cut it. SurFox AI analyzes conversation patterns, response timing, objection types, and engagement signals to score leads on a 50-point scale. You know exactly who's worth calling - not just who responded.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Choose Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Which is Right for You?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Different tools for different jobs. Here's how to decide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Choose GoHighLevel When:</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You're an agency managing multiple client accounts</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You need CRM, website builder, and marketing automation in one</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You have dedicated ops staff to build and maintain workflows</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You want to white-label a platform for resale</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Choose SurFox AI When:</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You need to qualify high-volume leads fast</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You want AI that learns without manual training</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>Setup in minutes matters more than endless customization</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You have a CRM already and need better lead intelligence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Ready to Start Qualifying<br className="hidden sm:block" />
              in Minutes, Not Months?
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Skip the configuration chaos. See how SurFox AI turns conversations into qualified leads - automatically. <strong className="text-navy">30-day money back guarantee.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                See SurFox in Action
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                View Pricing
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-orange" />
                30-day guarantee
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange" />
                Setup in minutes
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-orange" />
                Cancel anytime
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
