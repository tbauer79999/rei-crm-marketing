"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDownLeft, ArrowUpRight, MessageSquare, Phone, Mail, CreditCard, Star, Calendar, HeadphonesIcon, CheckCircle } from 'lucide-react';

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
              Your customers are<br className="hidden sm:block" />
              telling you everything.<br className="hidden sm:block" />
              <span className="text-gray-400">Most of it is lost.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Calls. Texts. Transactions. Reviews. Support tickets. Bookings. The signals are everywhere - but they live in silos, and no one connects them.
            </p>
            
            <p className="text-lg sm:text-xl text-navy font-medium">
              SurFox is the AI layer that listens to all of it - and knows what to do next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Sides of SurFox */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Two sides. One platform.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SurFox is being built to handle both directions of customer intelligence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Signals In */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-2xl border-2 border-gray-200 bg-white"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                <ArrowDownLeft className="w-7 h-7 text-gray-500" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold text-navy mb-4">Signals In</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Every customer interaction flowing into one intelligence layer. SurFox ingests, understands, and learns from all of it.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Phone, label: 'Calls' },
                  { icon: MessageSquare, label: 'Texts' },
                  { icon: Mail, label: 'Emails' },
                  { icon: CreditCard, label: 'Transactions' },
                  { icon: Star, label: 'Reviews' },
                  { icon: Calendar, label: 'Bookings' },
                  { icon: HeadphonesIcon, label: 'Support' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-400">Coming as the platform matures</span>
              </div>
            </motion.div>

            {/* Actions Out */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 sm:p-10 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="w-14 h-14 rounded-xl bg-orange flex items-center justify-center mb-6">
                <ArrowUpRight className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold text-navy mb-4">Actions Out</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                AI-initiated outreach, follow-ups, and automations - triggered by what SurFox learns. The system doesn't just listen. It acts.
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  'Reach out to cold leads',
                  'Follow up at the right moment',
                  'Escalate when sentiment drops',
                  'Trigger workflows automatically',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-orange" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-orange/20">
                <span className="text-sm font-semibold text-orange">This is where we start - live now</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Engine: Infinity */}
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
              Powered by SurFox Infinity
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Infinity is the AI brain underneath everything. It ingests interaction data, learns patterns within your environment, predicts outcomes, and decides what actions to take. Both sides of the platform - signals in, actions out - run on this single foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where We Are Today */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Where we are today
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-2xl border-2 border-orange bg-white shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                LIVE NOW
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-semibold text-navy mb-4">
              AI-powered SMS lead qualification
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Upload cold leads. AI reaches out via SMS, has personalized conversations, scores and qualifies each one. Your sales team only talks to prospects who are ready. This is Actions Out in its first form - proving that Infinity can understand conversations, track intent, and take intelligent action.
            </p>
            
            <a 
              href="/pricing" 
              className="inline-flex items-center gap-2 text-orange font-semibold hover:underline"
            >
              Get started today
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Comes Next */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              What comes next
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building this one layer at a time. Here's the progression.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 p-6 rounded-xl bg-gray-50 border border-gray-200"
            >
              <div className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Visibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time analytics across all your conversations. See what's working, track performance, understand trends. Turn raw conversation data into dashboards your whole team can use.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6 p-6 rounded-xl bg-gray-50 border border-gray-200"
            >
              <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Prediction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Not just what's happening - what's going to happen. Revenue forecasting, churn prediction, conversion optimization. Infinity learns patterns and tells you what comes next.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6 p-6 rounded-xl bg-gray-50 border border-gray-200"
            >
              <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Automation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Workflows that connect everything. When a lead goes cold, trigger a follow-up. When sentiment drops, escalate to a human. When a prediction fires, take action automatically - without waiting for someone to notice.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-6 p-6 rounded-xl bg-gray-50 border border-gray-200"
            >
              <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Multi-signal ingestion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today we start with SMS. But the architecture is built to ingest calls, emails, transactions, reviews, bookings - every signal a customer sends. One intelligence layer that finally sees the full picture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 20-Year View */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
              The long-term vision
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              When you log into SurFox in the future, you won't see a "lead qualification tool." You'll see your business's entire customer intelligence layer.
            </p>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              Every interaction flowing in. Predictions surfacing before you ask. Automations running in the background. A unified view of every customer - not just leads, everyone.
            </p>
            
            <p className="text-lg sm:text-xl text-white font-medium">
              That's the operating system for how your business understands and responds to humans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stay in the Know */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-4">
              Want to follow along?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're building this one layer at a time. Drop your email and we'll share updates as new capabilities go live.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange focus:outline-none transition"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-navy text-white font-semibold hover:bg-gray-800 transition"
              >
                Stay in the know
              </button>
            </form>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
              Start with what's live today.
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              AI-powered lead qualification is ready now. Your team only talks to hot prospects. That's Actions Out in its first form - and the foundation for everything that comes next.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg bg-orange text-white font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg border-2 border-gray-300 text-navy font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Talk to Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}