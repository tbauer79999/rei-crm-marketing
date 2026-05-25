"use client"

import React, { useState } from 'react';
import { Check, X, Brain, Target, DollarSign, Zap } from 'lucide-react';

const featureSets = [
  {
    category: 'AI Power',
    icon: Brain,
    features: [
      { name: 'Conversation Handling', surfox: 'SurFox AI writes every message and handles responses automatically', skipio: 'You write drafts manually, then review every response' },
      { name: 'Conversation Memory', surfox: 'SurFox AI knows the full conversation history with each lead', skipio: 'No memory - treats every message as first contact' },
      { name: 'Learning Capability', surfox: 'SurFox AI learns your business and improves with every conversation', skipio: 'Same templates forever - no learning or improvement' },
      { name: 'Buying Signal Detection', surfox: 'SurFox AI reads when prospects are ready to buy and alerts you', skipio: 'You manually read every message to find hot leads' },
      { name: 'Context Understanding', surfox: 'SurFox AI reads between the lines and responds appropriately', skipio: 'Basic keyword triggers only - misses context and tone' }
    ]
  },
  {
    category: 'Lead Results',
    icon: Target,
    features: [
      { name: 'Hot Lead Identification', surfox: 'SurFox AI scores every lead and flags the ones ready to buy', skipio: 'You manually sort through all responses to find good ones' },
      { name: 'Qualification Process', surfox: 'SurFox AI asks the right questions and qualifies leads for you', skipio: 'You have to qualify every lead manually' },
      { name: 'Escalation Intelligence', surfox: 'SurFox AI alerts you only when prospects are sales-ready', skipio: 'You monitor everything - no intelligent escalation' },
      { name: 'Lead Prioritization', surfox: 'SurFox AI ranks leads by likelihood to close', skipio: 'All leads look the same - you decide priority manually' },
      { name: 'Appointment Quality', surfox: 'SurFox AI hands you leads that are motivated and qualified', skipio: 'You get raw responses - must figure out who to call' }
    ]
  },
  {
    category: 'Automation Intelligence',
    icon: Zap,
    features: [
      { name: 'Conversation Adaptation', surfox: 'SurFox AI changes approach based on how each prospect responds', skipio: 'Same linear sequence for everyone regardless of responses' },
      { name: 'Timing Optimization', surfox: 'SurFox AI knows when each prospect is most likely to respond', skipio: 'Fixed schedules that ignore individual behavior patterns' },
      { name: 'Objection Handling', surfox: 'SurFox AI responds to concerns and keeps conversations moving forward', skipio: 'Basic auto-replies that often miss the point' },
      { name: 'Follow-up Management', surfox: 'SurFox AI ensures every lead gets the right follow-up at the right time', skipio: 'You manually manage all follow-ups and timing' },
      { name: 'Scalability', surfox: 'Handle 10x more leads without hiring more people', skipio: 'More leads = more manual work for your team' }
    ]
  },
  {
    category: 'Business Value',
    icon: DollarSign,
    features: [
      { name: 'Primary Focus', surfox: 'Designed for businesses that need to close sales', skipio: 'Built for appointment booking and basic follow-ups' },
      { name: 'Success Metrics', surfox: 'Measures success by qualified leads and revenue generated', skipio: 'Measures success by appointments booked and messages sent' },
      { name: 'Pricing Model', surfox: 'Growth plan $597/month with learning AI, starts at $147', skipio: 'Base fee plus per-message costs' },
      { name: 'Time Investment', surfox: '30 minutes daily to review escalated leads', skipio: '4+ hours daily managing conversations' },
      { name: 'Team Requirements', surfox: 'AI handles conversations - minimal staff needed', skipio: 'Requires dedicated team for message management' }
    ]
  }
];

export default function SkipioClient() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  return (
    <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
            Why SurFox AI Wins Every Time
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
            See exactly why AI that closes deals beats basic appointment booking.
          </p>
        </div>

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
            <div
              key={index}
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
                    <span className="font-medium text-sm text-white/60">Skipio</span>
                  </div>
                  <p className="text-sm text-white/60">{item.skipio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
