"use client"

import React from 'react';
import { ArrowRight, MessageSquare, Upload, Phone, Shield, CheckCircle, Activity, ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export default function HomeClientSections() {
  return (
    <>
      {/* What SurFox Does Today */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">LIVE NOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              AI-Powered Lead Qualification
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Your sales team only talks to hot leads. SurFox AI handles the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                icon: Upload,
                title: 'Upload your leads',
                desc: 'Import thousands of cold leads in bulk. CSV, spreadsheet, or direct integration.'
              },
              {
                icon: MessageSquare,
                title: 'SurFox AI qualifies via SMS',
                desc: 'Personalized conversations at scale. Every lead gets engaged, scored, and qualified automatically.'
              },
              {
                icon: Phone,
                title: 'Your team closes',
                desc: 'When a lead is ready, your sales team gets notified. They only spend time on prospects who want to talk.'
              }
            ].map((step, i) => (
              <div
                key={i}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-16 sm:mt-20 text-center">
            <p className="text-lg sm:text-xl text-gray-700 italic">
              "Beta customers are already calling it 'a no-brainer.'"
            </p>
          </div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 px-4">
              This is just the beginning.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Lead qualification is where we start. But SurFox AI is being built to handle something much bigger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Signals In */}
            <div className="p-8 rounded-2xl border-2 border-gray-200 bg-gray-50">
              <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mb-6">
                <ArrowDownLeft className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">Signals In</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every customer interaction - calls, texts, transactions, reviews, support tickets, bookings - flowing into one intelligence layer.
              </p>
              <span className="text-sm font-medium text-gray-500">Coming soon</span>
            </div>

            {/* Actions Out */}
            <div className="p-8 rounded-2xl border-2 border-orange bg-orange/5">
              <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center mb-6">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">Actions Out</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI-initiated outreach, follow-ups, escalations, and automations - triggered by what SurFox AI learns about your customers.
              </p>
              <span className="text-sm font-semibold text-orange">This is where we start</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/platform"
              className="inline-flex items-center gap-2 text-orange font-semibold hover:underline transition"
            >
              See where we're headed
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust / Infrastructure - Condensed */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-2">
              Built on enterprise infrastructure
            </h3>
            <p className="text-orange font-medium text-sm sm:text-base">
              AWS • Twilio • OpenAI • Supabase
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4">
            {[
              {
                icon: Shield,
                title: 'Encrypted & Secure',
                desc: 'TLS and AES encryption across all systems.'
              },
              {
                icon: CheckCircle,
                title: 'TCPA Compliant',
                desc: 'Built with telecommunications regulations in mind.'
              },
              {
                icon: Activity,
                title: 'Always On',
                desc: 'Redundant infrastructure. 24/7 monitoring.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-orange" />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Stop chasing cold leads.<br className="hidden sm:block" />
              Let SurFox AI find the ones who are ready.
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4">
              SurFox AI qualifies your leads automatically. Your team only talks to people who want to talk.
            </p>

            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-orange text-white text-lg font-semibold hover:bg-orange-600 transition"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
