"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Mail, Phone, Database, CreditCard, ShoppingCart, Calendar, CheckCircle, Clock, Circle } from 'lucide-react';

export default function Integrations() {
  const [requestedIntegration, setRequestedIntegration] = useState('');

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
      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Connect Every<br className="hidden sm:block" />
              Human Signal
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              SurFox AI is built to ingest data from any source - communication channels, business systems, and transaction platforms. Today we start with SMS. Here's where we're headed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Now */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">Live Now</h2>
            </div>
            <p className="text-gray-600">Available today and production-ready.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Twilio SMS</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Two-way SMS conversations powered by Twilio. A2P 10DLC compliant with full message tracking and delivery confirmation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Google Calendar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sync appointments and let AI schedule meetings with qualified leads directly on your Google Calendar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Microsoft Calendar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Outlook calendar integration for enterprise scheduling. AI books meetings directly into your Microsoft 365 calendar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Zapier</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect to 5,000+ apps via webhook. Push hot leads to your CRM, trigger workflows, or notify your team automatically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-orange"></div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">Coming Soon</h2>
            </div>
            <p className="text-gray-600">In development. Expected in the next few months.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Mail, 
                name: 'Email (SMTP)', 
                desc: 'Inbound and outbound email integration for multi-channel conversations.'
              },
              { 
                icon: MessageSquare, 
                name: 'WhatsApp Business', 
                desc: 'Connect with customers on WhatsApp through the official Business API.'
              },
              { 
                icon: Phone, 
                name: 'Voice Transcription', 
                desc: 'Ingest call recordings and transcribe them for unified conversation intelligence.'
              }
            ].map((integration, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-gray-200 bg-gray-50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <integration.icon className="w-6 h-6 text-orange" />
                  </div>
                  <span className="px-2 py-1 rounded-full bg-orange/10 text-orange text-xs font-semibold">
                    SOON
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{integration.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{integration.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* On the Roadmap */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">On the Roadmap</h2>
            </div>
            <p className="text-gray-600">Planned integrations as SurFox AI expands to multi-signal intelligence.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Database, name: 'Salesforce', category: 'CRM' },
              { icon: Database, name: 'HubSpot', category: 'CRM' },
              { icon: Database, name: 'Pipedrive', category: 'CRM' },
              { icon: Database, name: 'Zoho CRM', category: 'CRM' },
              { icon: ShoppingCart, name: 'Shopify', category: 'E-Commerce' },
              { icon: ShoppingCart, name: 'WooCommerce', category: 'E-Commerce' },
              { icon: CreditCard, name: 'Stripe', category: 'Payments' },
              { icon: CreditCard, name: 'Square', category: 'Payments' },
              { icon: MessageSquare, name: 'Slack', category: 'Messaging' },
              { icon: MessageSquare, name: 'Microsoft Teams', category: 'Messaging' },
              { icon: MessageSquare, name: 'Intercom', category: 'Support' },
              { icon: MessageSquare, name: 'Zendesk', category: 'Support' },
            ].map((integration, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="p-4 rounded-xl border border-gray-200 bg-white flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <integration.icon className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy">{integration.name}</h3>
                  <p className="text-xs text-gray-400">{integration.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              The bigger picture
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Today, SurFox AI starts with SMS - one channel, one signal type. But the architecture is built to ingest everything: calls, emails, transactions, reviews, bookings, support tickets.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Each integration adds another signal to the intelligence layer. The more signals flow in, the smarter SurFox AI gets about your customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Request an Integration */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-4">
              Don't see what you need?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're prioritizing integrations based on customer demand. Tell us what you need and we'll factor it into our roadmap.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="e.g., Salesforce, Zendesk, Shopify..."
                value={requestedIntegration}
                onChange={(e) => setRequestedIntegration(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange focus:outline-none transition"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-orange text-white font-semibold hover:bg-orange-600 transition"
              >
                Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Ready to start with what's live today?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              AI-powered SMS lead qualification is ready now. Get started and be first in line as new integrations go live.
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
                href="/platform"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg border-2 border-gray-300 text-navy font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See the Full Vision
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}