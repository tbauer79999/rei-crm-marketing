"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Brain, Shield, Search, Target, Clock, DollarSign, Sparkles, Award } from 'lucide-react';

export default function SurFoxVsLeadSherpa() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  const featureSets = [
    {
      category: 'Data & Compliance',
      icon: Shield,
      features: [
        { name: 'Contact Data Acquisition', surfox: 'Integrates with your existing sources', sherpa: 'Built-in PropStack skip tracing' },
        { name: 'TCPA/A2P Compliance', surfox: 'Standard compliance implementation', sherpa: 'Attorney-vetted compliance processes' },
        { name: 'Lead Data Management', surfox: 'Smart CRM integration with behavior profiles', sherpa: 'Automatic data consolidation and tagging' },
        { name: 'Contact Intelligence', surfox: 'Advanced psychological and behavioral analysis', sherpa: 'Skip trace data and contact verification' },
        { name: 'Legal Protection', surfox: 'Industry-standard compliance tools', sherpa: 'Attorney-backed legal documentation' }
      ]
    },
    {
      category: 'Conversion Power',
      icon: Brain,
      features: [
        { name: 'Response Generation', surfox: 'Fully autonomous SurFox replies that adapt to each lead', sherpa: 'Manual responses or basic templates' },
        { name: 'Lead Intelligence', surfox: 'Real-time NLP analysis of motivation and urgency', sherpa: 'No sentiment or motivation analysis' },
        { name: 'Conversation Quality', surfox: 'SurFox learns and adapts to maximize conversions', sherpa: 'Static drip sequences with manual management' },
        { name: 'Hot Lead Detection', surfox: 'SurFox scores and prioritizes high-intent prospects', sherpa: 'Manual tagging and organization only' },
        { name: 'Learning Capability', surfox: 'Gets smarter with every conversation', sherpa: 'No learning - same approach every time' }
      ]
    },
    {
      category: 'Campaign Results',
      icon: Target,
      features: [
        { name: 'SMS Campaigns', surfox: 'AI-adaptive sequences that respond to lead behavior', sherpa: 'Standard drip sequences with pause-on-reply' },
        { name: 'Real-Time Responses', surfox: 'Contextual SurFox replies 24/7 without human input', sherpa: 'Quick replies with manual forwarding system' },
        { name: 'Performance Analytics', surfox: 'Conversion insights, lead scoring, ROI tracking', sherpa: 'Basic metrics: volume, opens, replies, DNC' },
        { name: 'Lead Qualification', surfox: 'SurFox identifies and escalates motivated sellers', sherpa: 'Manual review and qualification process' },
        { name: 'Conversion Optimization', surfox: 'SurFox learns what works and improves messaging', sherpa: 'Manual A/B testing and template updates' }
      ]
    },
    {
      category: 'Business Value',
      icon: DollarSign,
      features: [
        { name: 'Primary Purpose', surfox: 'Convert cold leads into qualified appointments', sherpa: 'Compliant lead acquisition and basic outreach' },
        { name: 'Target Market', surfox: 'Any sales team with leads to convert', sherpa: 'Real estate investors and wholesalers' },
        { name: 'Pricing Strategy', surfox: 'Growth plan $497/month with learning AI, starts at $197', sherpa: '$1,299+/month plus per-message costs' },
        { name: 'Time Investment', surfox: '30 minutes daily to review escalated leads', sherpa: '4+ hours daily for campaign management' },
        { name: 'Total Cost of Ownership', surfox: 'Growth $497/month, Starter $197/month', sherpa: '$1,500+/month including labor costs' }
      ]
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
                  <Search className="w-6 h-6 text-gray-500" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-gray-600">Lead Sherpa</div>
                  <div className="text-sm text-gray-500">Skip Trace + Compliance</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              3x More Deals<br className="hidden sm:block" />
              From Your Leads
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-navy">Lead Sherpa excels at finding contacts legally.</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-orange">SurFox excels at converting those contacts into sales.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Start Converting More Leads
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See AI in Action
              </motion.a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">$497</div>
                <div className="text-sm text-gray-600">SurFox Growth Plan</div>
                <div className="text-xs text-gray-400 mt-1">vs $1,299+ Sherpa</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">90%</div>
                <div className="text-sm text-gray-600">AI Automation</div>
                <div className="text-xs text-gray-400 mt-1">vs manual work</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">3x</div>
                <div className="text-sm text-gray-600">More Appointments</div>
                <div className="text-xs text-gray-400 mt-1">vs basic messaging</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">24/7</div>
                <div className="text-sm text-gray-600">AI Working</div>
                <div className="text-xs text-gray-400 mt-1">vs business hours</div>
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
              Two Different Problems Solved
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Lead Sherpa solves "how do I find contacts legally?" SurFox solves "how do I convert contacts into sales?"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Lead Sherpa */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mr-4">
                  <Search className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Lead Sherpa</h3>
                  <p className="text-sm text-gray-600">Data Acquisition Excellence</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <h4 className="font-semibold text-navy mb-2 text-sm">The Problem They Solve:</h4>
                  <p className="text-sm text-gray-700">"I need to find property owners legally and stay TCPA compliant"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Built-in PropStack skip tracing</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Attorney-vetted TCPA compliance</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Automatic lead data consolidation</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Basic templated messaging only</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>No AI or learning capabilities</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-700">
                  <strong className="text-navy">Best For:</strong> Real estate investors who need compliant contact acquisition
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
                  <p className="text-sm text-gray-700">"I have contacts but my response rates suck and I'm not closing enough deals"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>SurFox reads and responds to prospects 24/7</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Automatically identifies motivated sellers</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>SurFox escalates hot leads immediately</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Learns and improves with each conversation</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Works with your existing contact data</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-orange/20 bg-white">
                <p className="text-sm text-gray-700">
                  <strong className="text-navy">Best For:</strong> Sales teams who have contacts but want 3x more qualified appointments
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
              Your Daily Workflow: Before vs After
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              See exactly how SurFox AI eliminates the manual work that basic messaging requires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Lead Sherpa Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-red-200 bg-red-50"
            >
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-navy">Lead Sherpa: Your Daily 4+ Hours</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">8:00 AM - Morning Setup (45 mins)</span>
                  </div>
                  <p className="text-sm text-gray-700">Review data, update templates, configure campaigns</p>
                </div>

                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">10:00 AM - Response Management (2 hours)</span>
                  </div>
                  <p className="text-sm text-gray-700">Read every response, craft individual replies, qualify leads manually</p>
                </div>

                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">2:00 PM - Campaign Monitoring (1 hour)</span>
                  </div>
                  <p className="text-sm text-gray-700">Check delivery rates, analyze engagement, update messaging</p>
                </div>

                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">4:00 PM - Lead Follow-up (1+ hour)</span>
                  </div>
                  <p className="text-sm text-gray-700">Manual follow-ups, schedule calls, update CRM</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-red-300 bg-red-100 text-center">
                <p className="text-red-700 font-semibold">Total Daily Time: 4+ Hours</p>
                <p className="text-red-600 text-sm">Plus constant monitoring</p>
              </div>
            </motion.div>

            {/* SurFox Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-green-200 bg-green-50"
            >
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-navy">SurFox AI: Your Daily 30 Minutes</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg border border-green-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">9:00 AM - Hot Lead Review (15 mins)</span>
                  </div>
                  <p className="text-sm text-gray-700">Review leads SurFox flagged as "ready to buy" - complete conversation context provided</p>
                </div>

                <div className="p-3 rounded-lg border border-green-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">12:00 PM - Quick Check (5 mins)</span>
                  </div>
                  <p className="text-sm text-gray-700">Glance at AI performance dashboard, approve any escalated edge cases</p>
                </div>

                <div className="p-3 rounded-lg border border-green-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">5:00 PM - End of Day (10 mins)</span>
                  </div>
                  <p className="text-sm text-gray-700">Review appointment bookings SurFox secured, check conversion metrics, done for the day</p>
                </div>

                <div className="p-3 rounded-lg border border-green-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Sparkles className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-xs font-medium text-gray-700">24/7 - AI Works</span>
                  </div>
                  <p className="text-sm text-gray-700">SurFox handles all conversations, follows up perfectly, learns from every interaction</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-green-300 bg-green-100 text-center">
                <p className="text-green-700 font-semibold">Total Daily Time: 30 Minutes</p>
                <p className="text-green-600 text-sm">AI works 24/7 for you</p>
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
              See exactly where each platform excels and how they solve different parts of the sales process.
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
                      {item.sherpa.includes('Built-in') || item.sherpa.includes('Attorney') || item.sherpa.includes('PropStack') ?
                        <Check className="w-5 h-5 text-green-600 mr-2" /> :
                        <X className="w-5 h-5 text-red-600 mr-2" />
                      }
                      <span className="font-medium text-sm text-gray-600">Lead Sherpa</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.sherpa}</p>
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
                Upload your entire old lead database. SurFox finds the 3-5% who are actually ready to buy
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
              The True Cost Reality
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              SurFox delivers superior AI automation at 85% lower total cost than Lead Sherpa + manual labor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl border-2 border-red-200 bg-red-50"
            >
              <div className="text-sm text-gray-600 mb-2">Lead Sherpa Reality</div>
              <div className="text-4xl font-semibold text-red-600 mb-2">$1,500+</div>
              <div className="text-xs text-gray-600 mb-4">Platform + manual labor</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• $1,299+ subscription</div>
                <div>• 4+ hours daily management</div>
                <div>• Manual response handling</div>
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
              <div className="text-xs text-gray-600 mb-4">Learning AI does all the work</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• $497 with learning AI included</div>
                <div>• Starts at $197 for basic features</div>
                <div>• 10,000 messages included</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="text-sm text-gray-600 mb-2">You Save</div>
              <div className="text-4xl font-semibold text-orange mb-2">$1,300+</div>
              <div className="text-xs text-gray-600 mb-4">per month</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• 85% cost savings</div>
                <div>• 3.5+ hours/day saved</div>
                <div>• Better results with AI</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border-2 border-orange bg-orange/5 text-center"
          >
            <h3 className="text-2xl font-semibold text-navy mb-4">The Ultimate Combination</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
              <strong className="text-navy">Smart strategy:</strong> Many successful teams use Lead Sherpa for compliant data acquisition, then SurFox for AI conversion. Best of both worlds.
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Get legally compliant contacts from Lead Sherpa, then let SurFox AI convert them into 3x more qualified appointments.
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
              Both solve real problems, but different ones. Here's how to decide based on your biggest challenge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">Choose Lead Sherpa When:</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You're in real estate investing and need skip tracing</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>TCPA compliance keeps you up at night</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You need to find property owner contact info</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Your team manually handles conversations anyway</span>
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
              <div className="space-y-3 mb-6">
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You already have contact sources (lists, referrals, etc.)</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>Your response rates are terrible</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You want more qualified appointments, not just responses</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You'd rather SurFox handle conversations 24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Ready to 3x Your<br className="hidden sm:block" />
              Close Rates?
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              If you have contacts but want better conversion rates, SurFox's AI will get you there. <strong className="text-navy">30-day money back guarantee.</strong>
            </p>

            <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Plans start at $197/month. Most teams choose Growth at $497 for learning AI.
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
