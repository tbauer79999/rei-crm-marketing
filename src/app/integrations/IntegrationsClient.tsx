"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Mail, Phone, Database, Calendar, LayoutDashboard, Users, Briefcase, Zap } from 'lucide-react';

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
    <div className="bg-[#F4F5F3] text-[#13171F]">

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
          >
            <h1 className="text-4xl font-bold text-[#13171F] mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Works with the tools{' '}<br className="hidden sm:block" />
              you already run
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 max-w-3xl mx-auto leading-relaxed">
              SurFox AI qualifies your leads over SMS, website chat, and inbound Voice calls, then pushes hot ones straight into your CRM, your calendar, or your team's phone. No rip-and-replace, it plugs into what you already run.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Now */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">Live Now</h2>
            </div>
            <p className="text-[#5A626E]">Available today and production-ready.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* GoHighLevel - Featured Integration */}
            <motion.a
              href="/integrations/gohighlevel"
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm hover:shadow-sm shadow-blue-500/5 transition-shadow group col-span-1 sm:col-span-2 md:col-span-3 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <LayoutDashboard className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#13171F]">GoHighLevel</h3>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">LIVE</span>
                    <span className="px-2 py-1 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] text-[#0A7C8C] text-xs font-semibold">FEATURED</span>
                  </div>
                  <p className="text-[#5A626E] text-sm leading-relaxed max-w-2xl">
                    Native two-way sync with your GHL pipelines. When a contact hits a stage, SurFox AI starts qualifying them, tags hot leads, and pushes them straight back into your pipeline automatically.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A7C8C] group-hover:gap-3 transition-all">
                  View Integration
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            {/* Follow Up Boss */}
            <motion.a
              href="/integrations/follow-up-boss"
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm hover:shadow-sm shadow-blue-500/5 transition-shadow group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">Follow Up Boss</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                Native Follow Up Boss integration with stage-based campaign routing and two-way sync. Move a lead into a mapped stage and AI takes over the conversation. No Zapier required.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A7C8C] group-hover:gap-3 transition-all mt-4">
                View Integration
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>

            {/* Odoo */}
            <motion.div
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">Odoo</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                Sync Odoo CRM leads to SurFox AI by stage, with hot-lead write-back once a conversation qualifies.
              </p>
            </motion.div>

            {/* RecruiterFlow */}
            <motion.div
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">RecruiterFlow</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                Native ATS integration. SurFox AI qualifies candidates and syncs hot leads straight back as RecruiterFlow candidates.
              </p>
            </motion.div>

            <motion.div
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
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">Twilio SMS</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                Two-way SMS conversations powered by Twilio. A2P 10DLC compliant with full message tracking and delivery confirmation.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">Inbound Voice AI</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                Publish a number, and unknown callers get answered and qualified in a real conversation, not a script tree. Hot ones get a live transfer or an instant hot notify, not an outbound dialer.
              </p>
            </motion.div>

            <motion.div
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
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">Google Calendar</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                Sync appointments and let AI schedule meetings with qualified leads directly on your Google Calendar.
              </p>
            </motion.div>

            <motion.div
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
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">Microsoft Calendar</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                Outlook calendar integration for enterprise scheduling. AI books meetings directly into your Microsoft 365 calendar.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl border-2 border-green-500 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">Zapier</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
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
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full gradient-bg"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">Coming Soon</h2>
            </div>
            <p className="text-[#5A626E]">In development. Expected in the next few months.</p>
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
                name: 'Voice Call Transcription',
                desc: 'Ingest recordings from calls your team already takes and transcribe them for unified lead intelligence. Separate from live Voice AI qualification, which is available today.'
              }
            ].map((integration, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border border-[#E4E6E2] bg-[#F4F5F3]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center">
                    <integration.icon className="w-6 h-6 text-[#0A7C8C]" />
                  </div>
                  <span className="px-2 py-1 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] text-[#0A7C8C] text-xs font-semibold">
                    SOON
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#13171F] mb-2">{integration.name}</h3>
                <p className="text-[#5A626E] text-sm leading-relaxed">{integration.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request an Integration */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F] mb-4">
              Don't see what you need?
            </h2>
            
            <p className="text-lg text-[#5A626E] mb-8 leading-relaxed">
              We're prioritizing integrations based on customer demand. Tell us what you need and we'll factor it into our roadmap.
            </p>
            
            <form onSubmit={handleIntegrationRequest} className="flex flex-col gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                value={integrationEmail}
                onChange={(e) => setIntegrationEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0]"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="e.g., Salesforce, Zendesk, Shopify..."
                  value={requestedIntegration}
                  onChange={(e) => setRequestedIntegration(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0]"
                />
                <button
                  type="submit"
                  disabled={integrationSubmitting}
                  className="px-6 py-3 rounded-lg bg-[#13171F] text-white font-semibold hover:gradient-bg-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {integrationSubmitting ? 'Sending...' : 'Request'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F] mb-6">
              Ready to start with what's live today?
            </h2>
            
            <p className="text-lg text-[#5A626E] mb-8 leading-relaxed">
              AI-powered lead qualification over SMS, website chat, and Voice is ready now. Get started and be first in line as new integrations go live.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg bg-[#13171F] text-white font-semibold hover:gradient-bg-600 transition inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/platform"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] font-semibold hover:border-[#c9cdc7] hover:bg-[#EDEEEB] transition"
              >
                See How It Works
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}