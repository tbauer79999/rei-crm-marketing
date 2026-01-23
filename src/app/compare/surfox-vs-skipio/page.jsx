"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Brain, Calendar, Target, Clock, DollarSign, Sparkles, Shield, Award, Zap } from 'lucide-react';

export default function SurFoxVsSkipio() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  const featureSets = [
    {
      category: 'AI Power',
      icon: Brain,
      features: [
        { name: 'Conversation Handling', surfox: 'SurFox writes every message and handles responses automatically', skipio: 'You write drafts manually, then review every response' },
        { name: 'Conversation Memory', surfox: 'SurFox knows the full conversation history with each lead', skipio: 'No memory - treats every message as first contact' },
        { name: 'Learning Capability', surfox: 'SurFox learns your business and improves with every conversation', skipio: 'Same templates forever - no learning or improvement' },
        { name: 'Buying Signal Detection', surfox: 'SurFox reads when prospects are ready to buy and alerts you', skipio: 'You manually read every message to find hot leads' },
        { name: 'Context Understanding', surfox: 'SurFox reads between the lines and responds appropriately', skipio: 'Basic keyword triggers only - misses context and tone' }
      ]
    },
    {
      category: 'Lead Results',
      icon: Target,
      features: [
        { name: 'Hot Lead Identification', surfox: 'SurFox scores every lead and flags the ones ready to buy', skipio: 'You manually sort through all responses to find good ones' },
        { name: 'Qualification Process', surfox: 'SurFox asks the right questions and qualifies leads for you', skipio: 'You have to qualify every lead manually' },
        { name: 'Escalation Intelligence', surfox: 'SurFox alerts you only when prospects are sales-ready', skipio: 'You monitor everything - no intelligent escalation' },
        { name: 'Lead Prioritization', surfox: 'SurFox ranks leads by likelihood to close', skipio: 'All leads look the same - you decide priority manually' },
        { name: 'Appointment Quality', surfox: 'SurFox hands you leads that are motivated and qualified', skipio: 'You get raw responses - must figure out who to call' }
      ]
    },
    {
      category: 'Automation Intelligence',
      icon: Zap,
      features: [
        { name: 'Conversation Adaptation', surfox: 'SurFox changes approach based on how each prospect responds', skipio: 'Same linear sequence for everyone regardless of responses' },
        { name: 'Timing Optimization', surfox: 'SurFox knows when each prospect is most likely to respond', skipio: 'Fixed schedules that ignore individual behavior patterns' },
        { name: 'Objection Handling', surfox: 'SurFox responds to concerns and keeps conversations moving forward', skipio: 'Basic auto-replies that often miss the point' },
        { name: 'Follow-up Management', surfox: 'SurFox ensures every lead gets the right follow-up at the right time', skipio: 'You manually manage all follow-ups and timing' },
        { name: 'Scalability', surfox: 'Handle 10x more leads without hiring more people', skipio: 'More leads = more manual work for your team' }
      ]
    },
    {
      category: 'Business Value',
      icon: DollarSign,
      features: [
        { name: 'Primary Focus', surfox: 'Designed for businesses that need to close sales', skipio: 'Built for appointment booking and basic follow-ups' },
        { name: 'Success Metrics', surfox: 'Measures success by qualified leads and revenue generated', skipio: 'Measures success by appointments booked and messages sent' },
        { name: 'Pricing Model', surfox: 'Growth plan $497/month with learning AI, starts at $197', skipio: 'Base fee plus per-message costs' },
        { name: 'Time Investment', surfox: '30 minutes daily to review escalated leads', skipio: '4+ hours daily managing conversations' },
        { name: 'Team Requirements', surfox: 'AI handles conversations - minimal staff needed', skipio: 'Requires dedicated team for message management' }
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
                  <div className="text-sm text-gray-600">AI Deal Closer</div>
                </div>
              </div>

              <div className="text-3xl font-semibold text-gray-400">VS</div>

              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-200 bg-gray-50">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-gray-500" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-gray-600">Skipio</div>
                  <div className="text-sm text-gray-500">Appointment Booking</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              AI That Closes Deals<br className="hidden sm:block" />
              vs Basic Scheduling
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-navy">Skipio helps you book appointments efficiently.</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-orange">SurFox turns your dead leads into actual deals that close.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Stop Settling for Appointments
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
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">3-5x</div>
                <div className="text-sm text-gray-600">More Deals Closed</div>
                <div className="text-xs text-gray-400 mt-1">vs appointment tools</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">90%</div>
                <div className="text-sm text-gray-600">AI Handles Everything</div>
                <div className="text-xs text-gray-400 mt-1">vs manual work</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="text-2xl sm:text-3xl font-semibold text-orange mb-2">Zero</div>
                <div className="text-sm text-gray-600">Manual Qualification</div>
                <div className="text-xs text-gray-400 mt-1">AI does it all</div>
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
              Two Different Results
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Skipio gets you appointments. SurFox gets you deals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Skipio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Skipio</h3>
                  <p className="text-sm text-gray-600">Basic Appointment Booking</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <h4 className="font-semibold text-navy mb-2 text-sm">What You Get:</h4>
                  <p className="text-sm text-gray-700">"Help with scheduling appointments and basic follow-up automation"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Good for booking appointments</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Multi-channel communication</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>You manually write and review everything</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>No AI to find your best leads</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>All the selling work still falls on you</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-700">
                  <strong className="text-navy">Best For:</strong> Teams that just need appointment scheduling help
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
                  <p className="text-sm text-gray-600">AI Deal Closer</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border border-orange/20 bg-white">
                  <h4 className="font-semibold text-navy mb-2 text-sm">What You Get:</h4>
                  <p className="text-sm text-gray-700">"AI that turns your dead leads into actual deals that close"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>SurFox handles all conversations for you</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Automatically finds your hottest leads</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Delivers qualified prospects ready to buy</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Gets smarter with every conversation</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                    <span>Works 24/7 without breaks or oversight</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-orange/20 bg-white">
                <p className="text-sm text-gray-700">
                  <strong className="text-navy">Best For:</strong> Businesses that need to convert prospects into actual customers
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
              See exactly how SurFox AI eliminates the manual work that appointment tools require.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Skipio Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-red-200 bg-red-50"
            >
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-navy">Skipio: Your Daily 4+ Hours</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">8:00 AM - Morning Setup (30 mins)</span>
                  </div>
                  <p className="text-sm text-gray-700">Review responses, prep messages, update appointment schedules</p>
                </div>

                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">10:00 AM - Message Writing (2 hours)</span>
                  </div>
                  <p className="text-sm text-gray-700">Manually write and send messages, customize templates for each prospect</p>
                </div>

                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">2:00 PM - Response Management (1.5 hours)</span>
                  </div>
                  <p className="text-sm text-gray-700">Read every response, craft individual replies, try to identify motivated prospects</p>
                </div>

                <div className="p-3 rounded-lg border border-red-200 bg-white">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">4:00 PM - Follow-up (1+ hour)</span>
                  </div>
                  <p className="text-sm text-gray-700">Manual follow-ups, schedule appointments, qualify leads</p>
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
              Why SurFox Wins Every Time
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              See exactly why AI that closes deals beats basic appointment booking.
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
                      <span className="font-medium text-sm text-gray-600">Skipio</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.skipio}</p>
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
              The Bottom Line
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Do you want help booking meetings, or do you want more deals?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl border-2 border-gray-200 bg-gray-50"
            >
              <div className="text-sm text-gray-600 mb-2">Skipio Gives You</div>
              <div className="text-4xl font-semibold text-gray-600 mb-2">Appointments</div>
              <div className="text-xs text-gray-600 mb-4">But you still do all the selling</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• Manual message writing</div>
                <div>• Manual qualification</div>
                <div>• 4+ hours daily work</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl border-2 border-green-200 bg-green-50"
            >
              <div className="text-sm text-gray-600 mb-2">SurFox Gives You</div>
              <div className="text-4xl font-semibold text-green-600 mb-2">Deals</div>
              <div className="text-xs text-gray-600 mb-4">Qualified prospects ready to buy</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• AI writes all messages</div>
                <div>• AI qualifies all leads</div>
                <div>• 30 min daily review</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="text-sm text-gray-600 mb-2">Result</div>
              <div className="text-4xl font-semibold text-orange mb-2">3-5x More</div>
              <div className="text-xs text-gray-600 mb-4">deals closed</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• Higher quality leads</div>
                <div>• Better conversion rates</div>
                <div>• More revenue generated</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border-2 border-orange bg-orange/5 text-center"
          >
            <h3 className="text-2xl font-semibold text-navy mb-4">Simple Choice</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-navy">If you just need help scheduling:</strong> Skipio works fine.<br />
              <strong className="text-orange">If you need to close more deals:</strong> SurFox is what you want.
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
              Choose The Right Tool
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Both have their place, but they solve very different problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">Choose Skipio When:</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You just need help booking appointments</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You're happy writing all your own messages</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Your business is appointment-driven (coaching, medical)</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>You want manual control over everything</span>
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
                  <span>You need more deals, not just appointments</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>Your follow-ups aren't working</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>You want SurFox to handle conversations for you</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-orange flex-shrink-0" />
                  <span>Results matter more than monthly cost</span>
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
              Ready for More<br className="hidden sm:block" />
              Deals?
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Stop settling for appointments. Get AI that turns your leads into actual deals. <strong className="text-navy">30-day money back guarantee.</strong>
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
