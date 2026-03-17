"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Brain, MessageSquare, Target, Clock, DollarSign, Sparkles, Shield, Award, Zap } from 'lucide-react';

export default function SurFoxVsSmarterContact() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  const featureSets = [
    {
      category: 'AI vs Templates',
      icon: Brain,
      features: [
        { name: 'Response Generation', surfox: 'SurFox AI creates unique conversations for each lead', smarter: 'Template-based automation only' },
        { name: 'Lead Memory & Learning', surfox: 'SurFox AI remembers and learns from every conversation', smarter: 'Basic contact management, no memory' },
        { name: 'Lead Qualification', surfox: 'SurFox AI automatically scores and prioritizes hot leads', smarter: 'Manual qualification required' },
        { name: 'Message Personalization', surfox: 'SurFox AI adapts tone and approach per prospect', smarter: 'Fixed template variations' },
        { name: 'Learning Capability', surfox: 'Gets smarter with every conversation', smarter: 'No learning or adaptation' }
      ]
    },
    {
      category: 'Sales Results',
      icon: Target,
      features: [
        { name: 'Appointment Setting', surfox: 'SurFox AI identifies buying signals and books qualified calls', smarter: 'Manual signal interpretation required' },
        { name: 'Lead Scoring', surfox: 'Real-time motivation and urgency scoring', smarter: 'Basic engagement tracking only' },
        { name: 'Hot Lead Detection', surfox: 'SurFox AI escalates when prospects are ready to buy', smarter: 'Manual monitoring and handoff' },
        { name: 'Conversion Optimization', surfox: 'SurFox AI learns what works and improves messaging', smarter: 'Fixed campaign sequences only' },
        { name: 'Deal Pipeline', surfox: 'Tracks leads from first contact to closed deal', smarter: 'Basic list management' }
      ]
    },
    {
      category: 'Automation Power',
      icon: Zap,
      features: [
        { name: 'Setup Time', surfox: '15-minute Chrome extension setup', smarter: 'Manual list upload and configuration' },
        { name: 'Conversation Handling', surfox: 'SurFox AI manages 90% of conversations autonomously', smarter: 'All conversations require manual handling' },
        { name: 'AI Training', surfox: 'Upload PDFs, SOPs to train AI on your business', smarter: 'Template library only' },
        { name: 'Smart Follow-ups', surfox: 'SurFox AI determines optimal timing per lead', smarter: 'Fixed retry schedules' },
        { name: 'Spam Prevention', surfox: 'SurFox AI prevents spam detection automatically', smarter: 'Risk of spam flags with volume' }
      ]
    },
    {
      category: 'Business Value',
      icon: DollarSign,
      features: [
        { name: 'Pricing Model', surfox: 'Growth plan $497/month with learning AI, starts at $97', smarter: 'Base fee plus per-message costs' },
        { name: 'Time Investment', surfox: 'Minimal ongoing management required', smarter: 'Constant manual conversation monitoring' },
        { name: 'ROI Tracking', surfox: 'Full conversion tracking from lead to close', smarter: 'Basic volume and open rate metrics' },
        { name: 'Scalability', surfox: 'SurFox AI scales conversations without adding staff', smarter: 'More leads = more manual work' },
        { name: 'Total Cost', surfox: 'Growth $497/month, Starter $97/month', smarter: '$199+ base + usage fees + labor costs' }
      ]
    }
  ];

  const faqData = [
    {
      question: "Is Smarter Contact good for SMS marketing?",
      answer: "Smarter Contact is solid for bulk SMS campaigns and ringless voicemail. It is popular with real estate investors and sales teams doing high-volume outreach. However, it is a broadcasting tool, not a conversation tool. SurFox AI handles two-way conversations automatically."
    },
    {
      question: "Can Smarter Contact qualify leads?",
      answer: "Smarter Contact can send messages and capture responses, but a human still needs to read and reply to every response. SurFox AI reads responses, continues the conversation, and only alerts your team when a lead is qualified."
    },
    {
      question: "What is the difference between Smarter Contact and SurFox?",
      answer: "Smarter Contact is a bulk messaging platform. SurFox is an AI qualification platform. Smarter Contact sends thousands of texts. SurFox has thousands of conversations."
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
          color: #c2410c;
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
                  <div className="text-2xl font-semibold text-navy">SurFox</div>
                  <div className="text-sm text-gray-600">AI Conversion Engine</div>
                </div>
              </div>

              <div className="text-3xl font-semibold text-gray-400">VS</div>

              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-200 bg-gray-50">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-gray-500" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-gray-600">Smarter Contact</div>
                  <div className="text-sm text-gray-500">Mass Messaging</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              5x More Appointments<br className="hidden sm:block" />
              vs Mass Blasting
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-navy">Most platforms blast thousands and pray for replies.</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-orange">SurFox has AI conversations that book qualified appointments.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Stop Blasting, Start Converting
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See the Difference
              </motion.a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">$497</div>
                <div className="text-sm text-gray-600">SurFox Growth Plan</div>
                <div className="text-xs text-gray-400 mt-1">vs $199+ Smarter</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">90%</div>
                <div className="text-sm text-gray-600">AI Automation</div>
                <div className="text-xs text-gray-400 mt-1">vs manual work</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">5x</div>
                <div className="text-sm text-gray-600">Better Results</div>
                <div className="text-xs text-gray-400 mt-1">vs mass blasting</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">15min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
                <div className="text-xs text-gray-400 mt-1">vs hours of setup</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Difference */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Two Completely Different Approaches
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Smarter Contact focuses on volume and templates. SurFox focuses on AI conversations that actually close deals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Smarter Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Smarter Contact</h3>
                  <p className="text-sm text-gray-600">Mass Messaging Approach</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <h4 className="font-semibold text-navy mb-2 text-sm">The Problem They Solve:</h4>
                  <p className="text-sm text-gray-700">"I need to reach thousands of contacts fast and want ringless voicemail in the mix"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>High-volume SMS delivery — genuinely strong</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Ringless voicemail drops built in</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Popular with RE investors doing volume outreach</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>All responses require manual handling</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>No conversation memory or learning</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Per-message fees compound fast at volume</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-700">
                  <strong className="text-navy">Best For:</strong> High-volume broadcasters with a dedicated team to manually work every reply
                </p>
              </div>
            </motion.div>

            {/* SurFox */}
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
                  <h3 className="text-xl font-semibold text-navy">SurFox</h3>
                  <p className="text-sm text-gray-600">AI Conversion Engine</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border border-orange/20 bg-white">
                  <h4 className="font-semibold text-navy mb-2 text-sm">The Problem We Solve:</h4>
                  <p className="text-sm text-gray-700">"I need qualified appointments, not just random responses to filter through"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>SurFox AI creates unique conversations for each lead</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Automatically qualifies and scores prospects</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>SurFox AI escalates hot leads immediately</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Learns and improves with every conversation</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>All-inclusive pricing, no usage fees</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-orange/20 bg-white">
                <p className="text-sm text-gray-700">
                  <strong className="text-navy">Best For:</strong> Sales teams who want qualified appointments, not manual conversation filtering
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Workflow */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Same Lead, Different Outcomes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Watch how the same prospect responds to mass messaging vs AI conversation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Smarter Contact Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-red-200 bg-red-50"
            >
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-navy">Smarter Contact Approach</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-gray-700">Day 1 - Mass Template</span>
                  </div>
                  <p className="text-sm text-gray-700">"Hi [NAME], are you interested in selling your house?"</p>
                </div>

                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 3 days ...
                </div>

                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-gray-700">Day 4 - Same Template</span>
                  </div>
                  <p className="text-sm text-gray-700">"Hi [NAME], are you interested in selling your house?"</p>
                </div>

                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response ...
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-red-300 bg-red-100 text-center">
                <X className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <p className="text-red-700 font-semibold">Result: Lead Lost Forever</p>
                <p className="text-red-600 text-sm">Blocked as spam</p>
              </div>
            </motion.div>

            {/* SurFox Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-green-200 bg-green-50"
            >
              <div className="flex items-center mb-6">
                <Brain className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-navy">SurFox AI Approach</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg border border-green-200 bg-white">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-gray-700">Day 1 - AI Smart Opening</span>
                  </div>
                  <p className="text-sm text-gray-700">"Hey Sarah - wasn't sure if this was still your number. If you're still thinking about selling, I can keep it simple for you."</p>
                </div>

                <div className="text-center text-gray-400 text-xs py-2">
                  ... AI waits 3 days, adjusts approach ...
                </div>

                <div className="p-3 rounded-lg border border-green-200 bg-white">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-gray-700">Day 4 - Lead Responds!</span>
                  </div>
                  <p className="text-sm text-green-700">"Yeah I might be. What kind of offers are you seeing?"</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-green-300 bg-green-100 text-center">
                <Sparkles className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-green-700 font-semibold">Result: Qualified Appointment</p>
                <p className="text-green-600 text-sm">SurFox books call automatically</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              See exactly where SurFox outperforms traditional mass messaging platforms.
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
                    ? 'bg-orange text-white'
                    : 'bg-white border-2 border-gray-200 text-navy hover:border-gray-300'
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
                className="p-6 rounded-2xl border-2 border-gray-200 bg-white"
              >
                <h4 className="font-semibold text-navy mb-4">{item.name}</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-orange bg-orange/5">
                    <div className="flex items-center mb-2">
                      <Check className="w-5 h-5 text-orange mr-2" />
                      <span className="font-medium text-sm text-navy">SurFox</span>
                    </div>
                    <p className="text-sm text-gray-700">{item.surfox}</p>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                    <div className="flex items-center mb-2">
                      <X className="w-5 h-5 text-red-600 mr-2" />
                      <span className="font-medium text-sm text-gray-600">Smarter Contact</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.smarter}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                Upload your entire old lead database. SurFox AI finds the 3-5% who are actually ready to buy
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
              This is why SurFox AI pays for itself in month one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              The Hidden Cost Reality
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              SurFox delivers superior AI while actually costing less when you factor in usage fees and manual work.
            </p>
          </motion.div>

          {/* SmarterContact Tier Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 mb-8"
          >
            <h3 className="text-xl font-semibold text-navy mb-4 text-center">SmarterContact Pricing (billed quarterly)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-2 border-gray-200 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-navy">
                    <th className="text-left px-4 py-3 font-semibold">Plan</th>
                    <th className="text-right px-4 py-3 font-semibold">Base/mo</th>
                    <th className="text-right px-4 py-3 font-semibold">Outbound SMS</th>
                    <th className="text-right px-4 py-3 font-semibold">Calling</th>
                    <th className="text-right px-4 py-3 font-semibold">Voicemail Drop</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">Starter</td>
                    <td className="px-4 py-3 text-right text-gray-700">$199</td>
                    <td className="px-4 py-3 text-right text-gray-600">$0.03/text</td>
                    <td className="px-4 py-3 text-right text-gray-600">$0.02/min</td>
                    <td className="px-4 py-3 text-right text-gray-400">—</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Pro</td>
                    <td className="px-4 py-3 text-right text-gray-700">$399</td>
                    <td className="px-4 py-3 text-right text-gray-600">$0.025/text</td>
                    <td className="px-4 py-3 text-right text-gray-600">$0.015/min</td>
                    <td className="px-4 py-3 text-right text-gray-600">$0.03/drop</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">Elite</td>
                    <td className="px-4 py-3 text-right text-gray-700">$499</td>
                    <td className="px-4 py-3 text-right text-gray-600">$0.02/text</td>
                    <td className="px-4 py-3 text-right text-gray-600">$0.01/min</td>
                    <td className="px-4 py-3 text-right text-gray-600">$0.025/drop</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Real Math Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 mb-8"
          >
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-200 bg-red-50">
              <h3 className="text-lg font-semibold text-navy mb-4">Real Math: SmarterContact Pro at 20K texts/month</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-4 text-sm">
                <div className="p-4 rounded-xl bg-white border border-red-200 text-center">
                  <div className="text-gray-500 mb-1">Base plan</div>
                  <div className="text-2xl font-semibold text-navy">$399</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-red-200 text-center">
                  <div className="text-gray-500 mb-1">20K texts × $0.025</div>
                  <div className="text-2xl font-semibold text-red-600">+$500</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-red-300 text-center">
                  <div className="text-gray-500 mb-1">Monthly total</div>
                  <div className="text-2xl font-semibold text-red-600">~$900</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">That's before any calling minutes or voicemail drops. Usage fees compound fast at volume.</p>
            </div>
          </motion.div>

          {/* Side-by-side comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl border-2 border-red-200 bg-red-50"
            >
              <div className="text-sm text-gray-600 mb-2">SmarterContact Pro — 20K texts/mo</div>
              <div className="text-4xl font-semibold text-red-600 mb-2">~$900</div>
              <div className="text-xs text-gray-600 mb-4">per month</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• $399 base + $500 SMS fees</div>
                <div>• Calling & voicemail billed separately</div>
                <div>• Every reply still handled manually</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl border-2 border-green-200 bg-green-50"
            >
              <div className="text-sm text-gray-600 mb-2">SurFox Growth</div>
              <div className="text-4xl font-semibold text-green-600 mb-2">$497</div>
              <div className="text-xs text-gray-600 mb-4">flat per month</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• 10,000 messages included</div>
                <div>• AI qualifies every reply automatically</div>
                <div>• No usage fees, no surprises</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border-2 border-orange bg-orange/5 text-center"
          >
            <h3 className="text-2xl font-semibold text-navy mb-4">The Bottom Line</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              SmarterContact's base price looks comparable — but the meter is always running. At any real sending volume, SurFox Growth at <strong className="text-navy">$497 flat</strong> comes out ahead, and the AI handles the follow-up work your team would otherwise do manually.
            </p>
          </motion.div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Which Platform Is Right for You?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Both solve real problems, but different ones. Here's how to decide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">Choose Smarter Contact When:</h3>
              <div className="space-y-3">
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You need ringless voicemail drops at scale</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You have a dedicated team to manually work every reply</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>High-volume broadcast is the core of your outreach strategy</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">Choose SurFox When:</h3>
              <div className="space-y-3">
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You want qualified appointments, not random responses</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You'd rather SurFox AI handle conversations 24/7</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You want better results at lower total cost</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about Smarter Contact vs SurFox AI
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
                className="p-6 rounded-2xl border-2 border-gray-200 bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-navy mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
              Stop Blasting.<br className="hidden sm:block" />
              Start Converting.
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Built for operators who are done doing it manually. AI-powered qualification, not manual inbox triage. <strong className="text-navy">30-day money back guarantee.</strong>
            </p>

            <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Plans start at $97/month. Most teams choose Growth at $497 for learning AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Get Started Risk-Free
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See SurFox Demo
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-orange" />
                30-day guarantee
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange" />
                Setup in 15 minutes
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
