"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Brain, Zap, Target, TrendingUp, MessageSquare, Users, Database, Mail, Shield, Sparkles, Crown } from 'lucide-react';
import Link from 'next/link';

export default function SurFoxGeneralComparison() {
  const competitorCategories = [
    {
      category: 'Mass Messaging Platforms',
      subtitle: 'Volume-Based Approach',
      examples: ['Smarter Contact', 'Launch Control', 'ReiReply', 'Batch Leads'],
      description: 'Built for message volume, not conversation quality. High spam risk, low conversion rates.',
      icon: MessageSquare,
      limitations: [
        'No AI conversation intelligence',
        'Static messaging templates',
        'Manual lead qualification',
        'High unsubscribe rates'
      ]
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
        'High operational overhead'
      ]
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
        'Generic communication approach'
      ]
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
        'Outdated communication strategy'
      ]
    }
  ];

  const surfoxAdvantages = [
    {
      area: 'AI Intelligence',
      traditional: 'Static message templates, manual qualification',
      surfox: 'Dynamic AI that reads 50+ psychological dimensions and adapts in real-time',
      impact: 'Higher quality conversations, better qualification accuracy'
    },
    {
      area: 'Learning Capability',
      traditional: 'Fixed functionality, no improvement over time',
      surfox: 'Continuous learning from every conversation, improving with scale',
      impact: 'Performance improves automatically, higher ROI over time'
    },
    {
      area: 'Conversation Quality',
      traditional: 'Generic messages, high unsubscribe rates',
      surfox: 'Psychology-matched messaging, personality-based adaptation',
      impact: 'Higher engagement rates, lower churn'
    },
    {
      area: 'Lead Qualification',
      traditional: 'Manual sorting, time-intensive processes',
      surfox: 'Automated psychological scoring, intelligent escalation',
      impact: 'Sales teams focus only on ready-to-buy prospects'
    },
    {
      area: 'Scalability',
      traditional: 'Linear scaling requires proportional human resources',
      surfox: 'AI handles 90% of interactions, exponential scaling possible',
      impact: 'Unlimited growth without proportional cost increases'
    },
    {
      area: 'Business Intelligence',
      traditional: 'Basic metrics, limited insights',
      surfox: 'Deep psychological analytics, conversation intelligence',
      impact: 'Strategic insights into customer psychology and behavior patterns'
    }
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
      description: 'Purpose-built for conversation intelligence, not adapted from other use cases',
      icon: Zap,
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

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
          background-color: #ea580c;
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
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-8">
              <span className="text-sm font-semibold text-orange">CATEGORY CREATOR</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              Why SurFox Changes<br className="hidden sm:block" />
              Everything
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              We didn't build a better SMS platform. We created an entirely new category: <strong className="text-navy">Sales Psychology AI</strong> - technology that understands human behavior and adapts conversations in real-time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                See The Technology
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#comparison"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Watch Demo
              </motion.a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">FIRST</div>
                <div className="text-sm text-gray-600">Sales Psychology AI</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">50+</div>
                <div className="text-sm text-gray-600">Psychology Dimensions</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">AI</div>
                <div className="text-sm text-gray-600">Learning Engine</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">90%</div>
                <div className="text-sm text-gray-600">AI Automation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              The Current Market Landscape
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Understanding why existing solutions fall short and how SurFox addresses fundamental industry limitations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 px-4">
            {competitorCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border-2 border-red-200 bg-red-50"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy">{category.category}</h3>
                    <p className="text-sm text-gray-600">{category.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {category.examples.map((example, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700 border border-red-200">
                      {example}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-navy mb-3">Key Limitations:</h4>
                  {category.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700">
                      <X className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-red-600" />
                      {limitation}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* SurFox Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 md:p-12 rounded-2xl border-2 border-orange bg-orange/5"
          >
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-orange flex items-center justify-center mb-6 md:mb-0 md:mr-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-semibold text-navy">SurFox</h3>
                <p className="text-lg text-gray-600">Sales Psychology AI Platform</p>
                <p className="text-sm font-semibold text-orange">THE NEW CATEGORY</p>
              </div>
            </div>

            <h4 className="text-2xl font-semibold text-navy mb-6 text-center">
              The Industry's First Psychology AI Platform
            </h4>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
              SurFox addresses fundamental industry limitations through proprietary AI that understands human psychology in sales contexts. Our platform doesn't compete on message volume or basic automation - we've created an entirely new category focused on conversation quality and psychological intelligence.
            </p>

            <div className="p-6 rounded-xl border border-orange/20 bg-white">
              <h5 className="text-sm font-semibold text-navy mb-4">Core Differentiators:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Real-time psychological analysis across 50+ dimensions',
                  'Adaptive learning that improves with every conversation',
                  'Automated qualification based on behavioral indicators',
                  'Intelligent escalation when prospects show buying intent',
                  'Conversation intelligence that maintains context',
                  'Psychology-based personalization at scale'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <Check className="w-4 h-4 text-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capability Comparison */}
      <section id="comparison" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Traditional vs Psychology AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              How SurFox's Psychology AI changes the game across key capabilities.
            </p>
          </motion.div>

          <div className="space-y-6 px-4">
            {surfoxAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-semibold text-navy mb-2">{advantage.area}</h3>
                    <p className="text-sm text-gray-600">{advantage.impact}</p>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                    <h4 className="text-sm font-semibold text-navy mb-2 flex items-center">
                      <X className="w-4 h-4 mr-2 text-red-600" />
                      Traditional Approach
                    </h4>
                    <p className="text-sm text-gray-700">{advantage.traditional}</p>
                  </div>

                  <div className="p-4 rounded-xl border border-orange bg-orange/5">
                    <h4 className="text-sm font-semibold text-navy mb-2 flex items-center">
                      <Check className="w-4 h-4 mr-2 text-orange" />
                      SurFox Approach
                    </h4>
                    <p className="text-sm text-gray-700">{advantage.surfox}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Moat */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Our Technical Moat
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The technical and strategic advantages that create lasting competitive differentiation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 mb-12">
            {moatFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mr-4">
                    <factor.icon className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{factor.factor}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{factor.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border-2 border-green-200 bg-green-50 text-center"
          >
            <h3 className="text-2xl font-semibold text-navy mb-4">Network Effects Advantage</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              As more conversations flow through SurFox, our AI becomes smarter about human psychology. This creates a compounding advantage that becomes stronger over time and harder for competitors to replicate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Resurrection Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              The Hidden Gold Mine They Miss
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Every competitor focuses on NEW leads. SurFox finds money in the OLD leads you already own.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Traditional Platforms */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-red-200 bg-red-50"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Traditional Platforms</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Only work on new leads flowing in. Your old CRM database sits there gathering dust.
                Thousands of leads you already paid for, completely ignored.
              </p>
            </motion.div>

            {/* SurFox Advantage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy">SurFox Advantage</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Upload your entire old lead database. AI finds the 3-5% who are actually ready to buy
                but nobody ever followed up with properly. Turn yesterday's dead leads into today's deals.
              </p>
            </motion.div>
          </div>

          {/* ROI Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl border-2 border-green-200 bg-green-50 text-center"
          >
            <h3 className="text-2xl font-semibold text-navy mb-6">Real ROI Example</h3>
            <div className="space-y-3 text-gray-700 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg">
                <strong>10,000 old leads × 3% AI engagement = 300 conversations</strong>
              </p>
              <p className="text-base sm:text-lg">
                <strong>300 conversations × 10% conversion = 30 qualified appointments</strong>
              </p>
              <p className="text-base sm:text-lg">
                <strong>30 appointments × $3,000 avg deal = $90,000 revenue</strong>
              </p>
              <p className="text-sm text-gray-600 italic mt-4">
                From leads you already owned and paid for
              </p>
            </div>
            <p className="text-xl font-bold text-green-700 mt-6">
              This is why SurFox pays for itself in month one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specific Competitor Links */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Detailed Competitive Analysis
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Head-to-head comparisons with leading platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            {[
              {
                title: 'SurFox vs Smarter Contact',
                subtitle: 'AI Intelligence vs Mass Messaging',
                description: 'How psychology AI creates superior outcomes compared to volume-based approaches.',
                link: '/compare/surfox-vs-smarter-contact',
                icon: Brain
              },
              {
                title: 'SurFox vs TextUs',
                subtitle: 'Automation vs Manual Operations',
                description: 'Cost advantages of AI automation over human-dependent workflows.',
                link: '/compare/surfox-vs-textus',
                icon: Zap
              },
              {
                title: 'SurFox vs Launch Control',
                subtitle: 'Intelligence vs Power Tools',
                description: 'AI-driven conversation management versus script-based automation.',
                link: '/compare/surfox-vs-launch-control',
                icon: Target
              }
            ].map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-orange transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mr-4">
                    <comparison.icon className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{comparison.title}</h3>
                    <p className="text-sm text-gray-600">{comparison.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm">{comparison.description}</p>

                <Link
                  href={comparison.link}
                  className="inline-flex items-center gap-2 text-orange font-semibold hover:underline text-sm"
                >
                  View Analysis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
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
              Experience The New Category
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Be among the first to experience the industry's most advanced sales communication platform. <strong className="text-navy">30-day money back guarantee.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Get Started Risk-Free
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Schedule Demo
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-600 mb-12">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-orange" />
                30-day guarantee
              </div>
              <div className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-orange" />
                AI starts learning immediately
              </div>
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-orange" />
                Full platform access
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white">
              <h3 className="text-xl font-semibold text-navy mb-6">Technology Leadership</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-orange mb-2">FIRST</div>
                  <div className="text-sm text-gray-600">Psychology AI Platform</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-orange mb-2">50+</div>
                  <div className="text-sm text-gray-600">AI Dimensions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-orange mb-2">90%</div>
                  <div className="text-sm text-gray-600">Automation Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-orange mb-2">NEW</div>
                  <div className="text-sm text-gray-600">Category Created</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}