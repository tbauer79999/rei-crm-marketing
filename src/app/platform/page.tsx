"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Circle, MessageSquare, BarChart3, Brain, Workflow } from 'lucide-react';

export default function PlatformPage() {
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

      {/* Hero - The Problem */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-8 leading-[1.1] tracking-tight">
              Every customer interaction<br className="hidden sm:block" />
              contains insight.<br className="hidden sm:block" />
              <span className="text-gray-400">Most of it is lost.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Calls. Texts. Transactions. Reviews. Bookings. Support tickets. Your customers are telling you everything — but the data lives in silos, and no one sees the full picture.
            </p>
            
            <p className="text-lg sm:text-xl text-navy font-medium">
              SurFox is building the AI layer that connects it all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-8 text-center">
              The Vision
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                Imagine a system that ingests every human interaction your business has — not just the conversations, but the transactions, the behaviors, the signals that happen before and after someone talks to you.
              </p>
              
              <p>
                A customer walks into a Walgreens and buys something. That's a signal. They call support three times in a week. That's a signal. They leave a review. They book an appointment. They ghost your sales team after three texts. All signals.
              </p>
              
              <p>
                Today, this data lives in a dozen different systems. No one connects it. No one learns from it at scale.
              </p>
              
              <p className="text-navy font-medium">
                SurFox will be the AI middle layer that ingests all of it — understands what's happening, predicts what's next, and tells you what to do about it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Brain: Infinity */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">THE ENGINE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              SurFox Infinity
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Infinity is the AI brain that powers everything. It ingests interaction data, learns patterns within your environment, predicts outcomes, and recommends actions. Every capability we build runs on this single foundation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Understands', desc: 'Extracts meaning from unstructured conversations and signals' },
                { label: 'Predicts', desc: 'Identifies patterns and forecasts what happens next' },
                { label: 'Acts', desc: 'Automates responses and surfaces recommendations' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">{item.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Where We're Going
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building this one layer at a time. Here's the roadmap.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {/* Engage - Live */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-2xl border-2 border-orange bg-white shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-orange flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-navy">Engage</h3>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        LIVE NOW
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      AI-powered SMS lead qualification. Upload cold leads, let AI engage and score them, your team only talks to hot prospects. This is Infinity's first proof point — demonstrating that our AI can understand conversations, track intent, and take intelligent action.
                    </p>
                    <a 
                      href="/engage" 
                      className="inline-flex items-center gap-2 text-orange font-semibold hover:underline"
                    >
                      Learn more about Engage
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pulse - Next */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-7 h-7 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-navy">Pulse</h3>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                        COMING NEXT
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Real-time analytics and visibility into what's happening across all your conversations. See trends, track performance, understand what's working. Pulse turns Engage's conversation data into dashboards and insights your whole team can use.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Insights - Future */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-7 h-7 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-navy">Insights</h3>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                        2026
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Predictive intelligence. Not just what's happening — what's going to happen. Revenue forecasting, churn prediction, conversion optimization. Insights uses Infinity's pattern recognition to tell you what comes next and what to do about it.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orchestrate - Future */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-7 h-7 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-navy">Orchestrate</h3>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                        FUTURE
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Automated workflows that connect everything. When a lead goes cold, trigger a follow-up. When sentiment drops, escalate to a human. When a prediction fires, take action automatically. Orchestrate is the layer that turns intelligence into execution.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Beyond SMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-navy text-white text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Beyond SMS</h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Today we start with text conversations. Tomorrow, Infinity ingests calls, emails, transactions, reviews, bookings — every signal a customer sends. The architecture is built for it. We just need to prove each layer works before we add the next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Investors / Enterprise */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
              Want to go deeper?
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              If you're an investor, enterprise buyer, or potential partner interested in where SurFox is headed, we'd love to talk.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg bg-orange text-white font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="/engage"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg border-2 border-gray-300 text-navy font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See What's Live Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}