"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Mail, Phone, Database, CreditCard, ShoppingCart, Calendar, CheckCircle, Clock, Circle, LayoutDashboard } from 'lucide-react';

const API_URL = 'https://api.surfox.ai/api/public/contact-sales';

export default function Integrations() {
  const [requestedIntegration, setRequestedIntegration] = useState('');
  const [integrationEmail, setIntegrationEmail] = useState('');
  const [integrationSubmitting, setIntegrationSubmitting] = useState(false);

  const handleIntegrationRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestedIntegration || !integrationEmail) return;
    setIntegrationSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'integration', email: integrationEmail, integration: requestedIntegration }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
      alert('Thanks! We\'ll factor this into our roadmap.');
      setRequestedIntegration('');
      setIntegrationEmail('');
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIntegrationSubmitting(false);
    }
  };

  return (
    <div className="bg-card-bg text-white">

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Connect Every{' '}<br className="hidden sm:block" />
              Human Signal
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 max-w-3xl mx-auto leading-relaxed">
              SurFox AI is built to ingest data from any source - communication channels, business systems, and transaction platforms. Today we start with SMS. Here's where we're headed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Now */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Live Now</h2>
            </div>
            <p className="text-white/60">Available today and production-ready.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* GoHighLevel - Featured Integration */}
            <motion.a
              href="/integrations/gohighlevel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-card-bg shadow-sm hover:shadow-sm shadow-blue-500/5 transition-shadow group col-span-1 sm:col-span-2 md:col-span-3 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <LayoutDashboard className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">GoHighLevel</h3>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">LIVE</span>
                    <span className="px-2 py-1 rounded-full glass-card border border-blue-500/20 text-blue-400 text-xs font-semibold">FEATURED</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                    Connect SurFox AI to your GHL pipelines via Zapier. When a contact hits a stage, AI starts qualifying them via SMS. Hot leads are tagged and pushed straight back into your pipeline automatically.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-all">
                  View Integration
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-card-bg shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Twilio SMS</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Two-way SMS conversations powered by Twilio. A2P 10DLC compliant with full message tracking and delivery confirmation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-card-bg shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Google Calendar</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Sync appointments and let AI schedule meetings with qualified leads directly on your Google Calendar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-card-bg shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Microsoft Calendar</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Outlook calendar integration for enterprise scheduling. AI books meetings directly into your Microsoft 365 calendar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-6 rounded-2xl border-2 border-green-500 bg-card-bg shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zapier</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Connect to 5,000+ apps via webhook. Push hot leads to your CRM, trigger workflows, or notify your team automatically.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full gradient-bg"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Coming Soon</h2>
            </div>
            <p className="text-white/60">In development. Expected in the next few months.</p>
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
                desc: 'Ingest call recordings and transcribe them for unified lead intelligence.'
              }
            ].map((integration, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-white/[0.08] bg-background"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl glass-card border border-blue-500/20 flex items-center justify-center">
                    <integration.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="px-2 py-1 rounded-full glass-card border border-blue-500/20 text-blue-400 text-xs font-semibold">
                    SOON
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{integration.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* On the Roadmap */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">On the Roadmap</h2>
            </div>
            <p className="text-white/60">Planned integrations as SurFox AI expands to multi-signal intelligence.</p>
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
                className="p-4 rounded-xl border border-white/[0.08] bg-card-bg flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <integration.icon className="w-5 h-5 text-white/40" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{integration.name}</h3>
                  <p className="text-xs text-white/40">{integration.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              The bigger picture
            </h2>
            
            <p className="text-lg text-white/30 leading-relaxed mb-6">
              Today, SurFox AI starts with SMS - one channel, one signal type. But the architecture is built to ingest everything: calls, emails, transactions, reviews, bookings, support tickets.
            </p>
            
            <p className="text-lg text-white/30 leading-relaxed">
              Each integration adds another signal to the intelligence layer. The more signals flow in, the smarter SurFox AI gets about your customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Request an Integration */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Don't see what you need?
            </h2>
            
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We're prioritizing integrations based on customer demand. Tell us what you need and we'll factor it into our roadmap.
            </p>
            
            <form onSubmit={handleIntegrationRequest} className="flex flex-col gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                value={integrationEmail}
                onChange={(e) => setIntegrationEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-white/[0.1] focus:border-orange focus:outline-none transition"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="e.g., Salesforce, Zendesk, Shopify..."
                  value={requestedIntegration}
                  onChange={(e) => setRequestedIntegration(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-white/[0.1] focus:border-orange focus:outline-none transition"
                />
                <button
                  type="submit"
                  disabled={integrationSubmitting}
                  className="px-6 py-3 rounded-lg gradient-bg text-white font-semibold hover:gradient-bg-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {integrationSubmitting ? 'Sending...' : 'Request'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Ready to start with what's live today?
            </h2>
            
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              AI-powered SMS lead qualification is ready now. Get started and be first in line as new integrations go live.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg gradient-bg text-white font-semibold hover:gradient-bg-600 transition inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="/platform"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg border-2 border-white/[0.1] text-white font-semibold hover:border-white/[0.12] hover:bg-background transition"
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