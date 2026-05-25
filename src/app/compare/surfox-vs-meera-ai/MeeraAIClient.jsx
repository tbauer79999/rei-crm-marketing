"use client"

import React, { useState } from 'react';
import { Check, X, Brain, Target, Zap, Lock } from 'lucide-react';

const featureSets = [
  {
    category: 'Lead Intelligence',
    icon: Brain,
    features: [
      { name: 'Lead Scoring', surfox: 'AI scores every lead based on engagement, intent signals, and psychological patterns', meera: 'No lead scoring - just transfers leads to agents regardless of quality' },
      { name: 'Psychological Analysis', surfox: 'Reads conversation tone, objection patterns, and buying signals', meera: 'No psychological layer - purely transactional call transfers' },
      { name: 'Conversation Insights', surfox: 'Deep analysis of what makes each lead tick and when they are ready', meera: 'No behavioral analysis - just gets them on a call' },
      { name: 'Priority Ranking', surfox: 'Ranks leads by likelihood to close so you call the hottest ones first', meera: 'All leads treated equally - you figure out who matters' },
      { name: 'Learning AI', surfox: 'Gets smarter with every conversation - learns what works for your business', meera: 'Static scripts - no learning or improvement over time' }
    ]
  },
  {
    category: 'Lead Focus',
    icon: Target,
    features: [
      { name: 'Primary Use Case', surfox: 'Dead lead resurrection and outbound reactivation', meera: 'Fresh inbound leads and call center transfers' },
      { name: 'Lead Source', surfox: 'Revives your existing database - leads you already paid for', meera: 'Requires constant flow of new inbound leads' },
      { name: 'Outbound Capability', surfox: 'Built specifically for cold outreach and reactivation campaigns', meera: 'Designed for inbound - outbound is an afterthought' },
      { name: 'Old Lead Handling', surfox: 'Specializes in finding gold in your dead lead pile', meera: 'No focus on dead leads - built for fresh inquiries' },
      { name: 'ROI Model', surfox: 'Extract value from leads you already own', meera: 'Requires continuous lead acquisition spend' }
    ]
  },
  {
    category: 'Workflow Design',
    icon: Zap,
    features: [
      { name: 'Human Touch Timing', surfox: 'Qualify before human touch - you only talk to vetted leads', meera: 'Warm transfer model - agents waiting by the phone' },
      { name: 'Agent Requirements', surfox: 'AI handles qualification - minimal staff needed', meera: 'Assumes you have a call center with agents standing by' },
      { name: 'Escalation Logic', surfox: 'Only escalates leads worth your time', meera: 'Transfers anyone who answers - quality varies wildly' },
      { name: 'Time Investment', surfox: '30 minutes daily reviewing qualified leads', meera: 'Staff must be available for every warm transfer' },
      { name: 'Output', surfox: '"Only call the ones worth calling"', meera: '"Get them on a call as fast as possible"' }
    ]
  },
  {
    category: 'Platform & Privacy',
    icon: Lock,
    features: [
      { name: 'Integration Options', surfox: 'Zapier (5,000+ apps), RecruiterFlow native, API access', meera: 'Limited integrations - primarily built for call centers' },
      { name: 'Data Privacy', surfox: 'Tenant-only learning - your data never trains competitors', meera: 'Standard data handling - no isolation guarantees' },
      { name: 'Pricing Model', surfox: 'Starts at $147/month - scales with results', meera: 'Enterprise pricing - built for large call centers' },
      { name: 'Setup Complexity', surfox: 'Self-serve setup in 15 minutes', meera: 'Complex implementation requiring IT resources' },
      { name: 'Target Customer', surfox: 'Sales teams who want qualified leads, not call volume', meera: 'Call centers focused on connection rates' }
    ]
  }
];

export default function MeeraAIClient() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  return (
    <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
            Feature-by-Feature Comparison
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
            See exactly how lead intelligence beats call center automation.
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
                    <span className="font-medium text-sm text-white/60">Meera AI</span>
                  </div>
                  <p className="text-sm text-white/60">{item.meera}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
