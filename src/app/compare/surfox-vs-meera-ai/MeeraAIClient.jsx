"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Brain, Phone, Target, Clock, DollarSign, Sparkles, Shield, Award, Zap, Database, Lock } from 'lucide-react';
import Image from 'next/image';

export default function MeeraAIClient() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  const featureSets = [
    {
      category: 'Lead Intelligence',
      icon: Brain,
      features: [
        { name: 'Lead Scoring', surfox: 'AI scores every lead based on engagement, intent signals, and psychological patterns', meera: 'No lead scoring - just transfers leads to agents regardless of quality' },
        { name: 'Psychological Analysis', surfox: 'Reads conversation tone, objection patterns, and buying signals', meera: 'No psychological layer - purely transactional call transfers' },
        { name: 'Conversation Insights', surfox: 'Deep analysis of what makes each lead tick and when they are ready', meera: 'No behavioral analysis - just gets them on a call' },
        { name: 'Priority Ranking', surfox: 'Ranks leads by likelihood to close so you call the hottest ones first', meera: 'All leads treated equally - you figure out who matters' },
        { name: 'Learning AI', surfox: 'Gets smarter with every conversation - learns what works for your business', meera: 'Static scripts - no learning or improvement over time' }
      ]
    },
    {
      category: 'Lead Focus',
      icon: Target,
      features: [
        { name: 'Primary Use Case', surfox: 'Dead lead resurrection and outbound reactivation', meera: 'Fresh inbound leads and call center transfers' },
        { name: 'Lead Source', surfox: 'Revives your existing database - leads you already paid for', meera: 'Requires constant flow of new inbound leads' },
        { name: 'Outbound Capability', surfox: 'Built specifically for cold outreach and reactivation campaigns', meera: 'Designed for inbound - outbound is an afterthought' },
        { name: 'Old Lead Handling', surfox: 'Specializes in finding gold in your dead lead pile', meera: 'No focus on dead leads - built for fresh inquiries' },
        { name: 'ROI Model', surfox: 'Extract value from leads you already own', meera: 'Requires continuous lead acquisition spend' }
      ]
    },
    {
      category: 'Workflow Design',
      icon: Zap,
      features: [
        { name: 'Human Touch Timing', surfox: 'Qualify before human touch - you only talk to vetted leads', meera: 'Warm transfer model - agents waiting by the phone' },
        { name: 'Agent Requirements', surfox: 'AI handles qualification - minimal staff needed', meera: 'Assumes you have a call center with agents standing by' },
        { name: 'Escalation Logic', surfox: 'Only escalates leads worth your time', meera: 'Transfers anyone who answers - quality varies wildly' },
        { name: 'Time Investment', surfox: '30 minutes daily reviewing qualified leads', meera: 'Staff must be available for every warm transfer' },
        { name: 'Output', surfox: '"Only call the ones worth calling"', meera: '"Get them on a call as fast as possible"' }
      ]
    },
    {
      category: 'Platform & Privacy',
      icon: Lock,
      features: [
        { name: 'Integration Options', surfox: 'Zapier (5,000+ apps), RecruiterFlow native, API access', meera: 'Limited integrations - primarily built for call centers' },
        { name: 'Data Privacy', surfox: 'Tenant-only learning - your data never trains competitors', meera: 'Standard data handling - no isolation guarantees' },
        { name: 'Pricing Model', surfox: 'Starts at $147/month - scales with results', meera: 'Enterprise pricing - built for large call centers' },
        { name: 'Setup Complexity', surfox: 'Self-serve setup in 15 minutes', meera: 'Complex implementation requiring IT resources' },
        { name: 'Target Customer', surfox: 'Sales teams who want qualified leads, not call volume', meera: 'Call centers focused on connection rates' }
      ]
    }
  ];

  const faqData = [
    {
      question: "What's the difference between SurFox AI and Meera AI?",
      answer: "Meera AI is built for call centers - it focuses on getting leads on the phone via warm transfers. SurFox AI is built for lead intelligence - it qualifies leads via SMS before your team ever gets involved. Meera requires agents standing by; SurFox AI works while you sleep."
    },
    {
      question: "Can SurFox AI replace my call center?",
      answer: "Not exactly - SurFox AI replaces the need for a call center in the first place. Instead of transferring every lead to waiting agents, SurFox AI qualifies leads via SMS and only surfaces the ones worth calling. Your team calls pre-vetted leads, not random transfers."
    },
    {
      question: "Is SurFox AI good for inbound leads?",
      answer: "SurFox AI works for both inbound and outbound, but it really shines with outbound reactivation - reviving old leads you already paid for. If you need pure inbound call handling, Meera might be a better fit. If you want AI-powered lead qualification, choose SurFox AI."
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
              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="w-12 h-12 rounded-xl gradient-bg overflow-hidden flex items-center justify-center">
                  <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-white">SurFox AI</div>
                  <div className="text-sm text-white/60">Lead Intelligence</div>
                </div>
              </div>

              <div className="text-3xl font-semibold text-white/40">VS</div>

              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white/50" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-white/60">Meera AI</div>
                  <div className="text-sm text-white/50">Call Center AI</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              Lead Intelligence<br className="hidden sm:block" />
              vs Call Transfers
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-white">Meera gets leads on the phone.</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-blue-400">SurFox AI tells you which leads are worth calling.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                Start Qualifying Smarter
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white text-base font-semibold hover:border-white/[0.2] hover:bg-card-bg transition"
              >
                See AI in Action
              </motion.a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">$147</div>
                <div className="text-sm text-white/60">Starting Price</div>
                <div className="text-xs text-white/40 mt-1">vs enterprise pricing</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">5,000+</div>
                <div className="text-sm text-white/60">Zapier Integrations</div>
                <div className="text-xs text-white/40 mt-1">connect anything</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">Zero</div>
                <div className="text-sm text-white/60">Call Center Needed</div>
                <div className="text-xs text-white/40 mt-1">AI qualifies first</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-white/60">Data Isolation</div>
                <div className="text-xs text-white/40 mt-1">your data stays yours</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Difference */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Two Different Philosophies
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Meera optimizes for call volume. SurFox AI optimizes for call quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Meera */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white/50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Meera AI</h3>
                  <p className="text-sm text-white/60">Call Center Optimization</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                  <h4 className="font-semibold text-white mb-2 text-sm">Built For:</h4>
                  <p className="text-sm text-white/70">"Get leads on the phone as fast as possible with warm transfers"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Good for inbound call centers</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Warm transfer to waiting agents</span>
                  </div>
                  <div className="flex items-start text-sm text-white/60">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>No lead scoring or intelligence layer</span>
                  </div>
                  <div className="flex items-start text-sm text-white/60">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Assumes you have agents waiting by the phone</span>
                  </div>
                  <div className="flex items-start text-sm text-white/60">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>No dead lead focus - designed for fresh inbound</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                <p className="text-sm text-white/70">
                  <strong className="text-white">Best For:</strong> Call centers with agents standing by for warm transfers
                </p>
              </div>
            </motion.div>

            {/* SurFox AI */}
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
                <div>
                  <h3 className="text-xl font-semibold text-white">SurFox AI</h3>
                  <p className="text-sm text-white/60">Lead Intelligence Platform</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border border-blue-500/20 bg-background">
                  <h4 className="font-semibold text-white mb-2 text-sm">Built For:</h4>
                  <p className="text-sm text-white/70">"Only call the ones worth calling - AI qualifies before human touch"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Dead lead resurrection and outbound reactivation</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>AI scoring + psychological analysis + conversation insights</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Qualify before human touch - not transfer to call center</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Tenant-only learning - your data never trains competitors</span>
                  </div>
                  <div className="flex items-start text-sm text-white/70">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Zapier (5,000+ apps) + RecruiterFlow native integration</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-blue-500/20 bg-background">
                <p className="text-sm text-white/70">
                  <strong className="text-white">Best For:</strong> Sales teams who want qualified leads, not just call volume
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Workflow */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Your Team's Reality: Before vs After
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              See how SurFox AI eliminates the call center overhead that Meera requires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Meera Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5"
            >
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-white">Meera: Call Center Model</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg border border-red-500/20 bg-background">
                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 mr-2 text-white/60" />
                    <span className="text-xs font-medium text-white/70">Staffing Requirement</span>
                  </div>
                  <p className="text-sm text-white/70">Agents must be standing by waiting for warm transfers all day</p>
                </div>

                <div className="p-3 rounded-lg border border-red-500/20 bg-background">
                  <div className="flex items-center mb-2">
                    <Target className="w-4 h-4 mr-2 text-white/60" />
                    <span className="text-xs font-medium text-white/70">Lead Quality</span>
                  </div>
                  <p className="text-sm text-white/70">Anyone who answers gets transferred - no pre-qualification</p>
                </div>

                <div className="p-3 rounded-lg border border-red-500/20 bg-background">
                  <div className="flex items-center mb-2">
                    <Database className="w-4 h-4 mr-2 text-white/60" />
                    <span className="text-xs font-medium text-white/70">Lead Source</span>
                  </div>
                  <p className="text-sm text-white/70">Requires fresh inbound leads - your old database sits unused</p>
                </div>

                <div className="p-3 rounded-lg border border-red-500/20 bg-background">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-4 h-4 mr-2 text-white/60" />
                    <span className="text-xs font-medium text-white/70">Cost Structure</span>
                  </div>
                  <p className="text-sm text-white/70">Enterprise pricing + call center overhead + continuous lead acquisition</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-red-300 bg-red-100 text-center">
                <p className="text-red-700 font-semibold">Result: High volume, variable quality</p>
                <p className="text-red-600 text-sm">Your team chases every call</p>
              </div>
            </motion.div>

            {/* SurFox AI Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10"
            >
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">SurFox AI: Intelligence Model</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg border border-green-200 bg-background">
                  <div className="flex items-center mb-2">
                    <Brain className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-xs font-medium text-white/70">Staffing Requirement</span>
                  </div>
                  <p className="text-sm text-white/70">AI handles qualification - your team only calls pre-vetted leads</p>
                </div>

                <div className="p-3 rounded-lg border border-green-200 bg-background">
                  <div className="flex items-center mb-2">
                    <Target className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-xs font-medium text-white/70">Lead Quality</span>
                  </div>
                  <p className="text-sm text-white/70">Every lead scored and ranked - only hot leads reach your team</p>
                </div>

                <div className="p-3 rounded-lg border border-green-200 bg-background">
                  <div className="flex items-center mb-2">
                    <Database className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-xs font-medium text-white/70">Lead Source</span>
                  </div>
                  <p className="text-sm text-white/70">Revive your dead leads - extract value from what you already own</p>
                </div>

                <div className="p-3 rounded-lg border border-green-200 bg-background">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-xs font-medium text-white/70">Cost Structure</span>
                  </div>
                  <p className="text-sm text-white/70">Starts at $147/month - no call center needed, works with existing leads</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-green-500/30 bg-green-500/10 text-center">
                <p className="text-green-400 font-semibold">Result: Only call the ones worth calling</p>
                <p className="text-green-400 text-sm">Quality over quantity</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              See exactly how lead intelligence beats call center automation.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
            {featureSets.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureSet(index)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  activeFeatureSet === index
                    ? 'gradient-bg text-white'
                    : 'bg-background border-2 border-white/[0.08] text-white hover:border-white/[0.1]'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.category}
              </button>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="space-y-4 px-4">
            {featureSets[activeFeatureSet].features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl border-2 border-white/[0.08] bg-background"
              >
                <h4 className="font-semibold text-white mb-4">{item.name}</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-blue-500/40 bg-blue-500/5">
                    <div className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="font-medium text-sm text-white">SurFox AI</span>
                    </div>
                    <p className="text-sm text-white/70">{item.surfox}</p>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg">
                    <div className="flex items-center mb-2">
                      <X className="w-5 h-5 text-red-600 mr-2" />
                      <span className="font-medium text-sm text-white/60">Meera AI</span>
                    </div>
                    <p className="text-sm text-white/60">{item.meera}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dead Lead Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              The Dead Lead Advantage
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
              Meera needs fresh inbound leads. SurFox AI finds gold in the leads you already own.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Call Center Approach */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-red-500/20 bg-red-500/5"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Call Center Approach</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Designed for fresh inbound leads that need immediate connection. Your CRM full of old leads?
                Those sit untouched. The model assumes constant lead flow and agents waiting to take calls.
              </p>
            </motion.div>

            {/* SurFox AI Approach */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">SurFox AI Approach</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Built for outbound reactivation and dead lead resurrection. Upload your entire old database -
                SurFox AI finds the 3-5% who are ready to buy but never got proper follow-up. Zero call center needed.
              </p>
            </motion.div>
          </div>

          {/* ROI Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/10 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Dead Lead ROI Example</h3>
            <div className="space-y-3 text-white/70 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg">
                <strong>10,000 old leads × 3% AI engagement = 300 conversations</strong>
              </p>
              <p className="text-base sm:text-lg">
                <strong>300 conversations × 10% conversion = 30 qualified appointments</strong>
              </p>
              <p className="text-base sm:text-lg">
                <strong>30 appointments × $3,000 avg deal = $90,000 revenue</strong>
              </p>
              <p className="text-sm text-white/60 italic mt-4">
                From leads you already owned and paid for - no call center overhead
              </p>
            </div>
            <p className="text-xl font-bold text-green-400 mt-6">
              SurFox AI pays for itself in month one from your existing leads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Privacy Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Your Data Stays Yours
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              SurFox AI's tenant-only learning means your conversations never train your competitors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center"
            >
              <Lock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Tenant Isolation</h3>
              <p className="text-sm text-white/60">Your AI learns only from your conversations - never shared across customers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center"
            >
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Competitive Protection</h3>
              <p className="text-sm text-white/60">Your winning strategies stay yours - competitors can't learn from your data</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center"
            >
              <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Proprietary Intelligence</h3>
              <p className="text-sm text-white/60">The more you use it, the more YOUR AI knows about YOUR business</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Choose The Right Tool
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Both platforms have their place - but they solve very different problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Choose Meera AI When:</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>You have a call center with agents standing by</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>Your focus is inbound lead handling</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>Connection rate matters more than qualification</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>You have enterprise budget for call center infrastructure</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Choose SurFox AI When:</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>You want AI to qualify before your team gets involved</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>You have old leads sitting in your CRM unused</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>Lead quality matters more than call volume</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>You want to start at $147/month without call center overhead</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
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
            <p className="text-lg text-white/60">
              Common questions about Meera AI vs SurFox AI
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
                className="p-6 rounded-2xl border-2 border-white/[0.08] bg-card-bg"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8 px-4 leading-tight">
              Ready to Call Only<br className="hidden sm:block" />
              The Ones Worth Calling?
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Stop building a call center. Start with lead intelligence. <strong className="text-white">30-day money back guarantee.</strong>
            </p>

            <p className="text-base text-white/50 mb-8 max-w-2xl mx-auto">
              Plans start at $147/month. Most teams choose Growth at $597 for learning AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                Get Started Risk-Free
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white text-base font-semibold hover:border-white/[0.2] hover:bg-card-bg transition"
              >
                See SurFox AI Demo
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-400" />
                30-day guarantee
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                Setup in 15 minutes
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-400" />
                Cancel anytime
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
