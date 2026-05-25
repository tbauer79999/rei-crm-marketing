"use client"

import React, { useState } from 'react';
import { Check, X, Brain, Shield, Target, DollarSign } from 'lucide-react';

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
      { name: 'Response Generation', surfox: 'Fully autonomous SurFox AI replies that adapt to each lead', sherpa: 'Manual responses or basic templates' },
      { name: 'Lead Intelligence', surfox: 'Real-time NLP analysis of motivation and urgency', sherpa: 'No sentiment or motivation analysis' },
      { name: 'Conversation Quality', surfox: 'SurFox AI learns and adapts to maximize conversions', sherpa: 'Static drip sequences with manual management' },
      { name: 'Hot Lead Detection', surfox: 'SurFox AI scores and prioritizes high-intent prospects', sherpa: 'Manual tagging and organization only' },
      { name: 'Learning Capability', surfox: 'Gets smarter with every conversation', sherpa: 'No learning - same approach every time' }
    ]
  },
  {
    category: 'Campaign Results',
    icon: Target,
    features: [
      { name: 'SMS Campaigns', surfox: 'AI-adaptive sequences that respond to lead behavior', sherpa: 'Standard drip sequences with pause-on-reply' },
      { name: 'Real-Time Responses', surfox: 'Contextual SurFox AI replies 24/7 without human input', sherpa: 'Quick replies with manual forwarding system' },
      { name: 'Performance Analytics', surfox: 'Conversion insights, lead scoring, ROI tracking', sherpa: 'Basic metrics: volume, opens, replies, DNC' },
      { name: 'Lead Qualification', surfox: 'SurFox AI identifies and escalates motivated sellers', sherpa: 'Manual review and qualification process' },
      { name: 'Conversion Optimization', surfox: 'SurFox AI learns what works and improves messaging', sherpa: 'Manual A/B testing and template updates' }
    ]
  },
  {
    category: 'Business Value',
    icon: DollarSign,
    features: [
      { name: 'Primary Purpose', surfox: 'Convert cold leads into qualified appointments', sherpa: 'Compliant lead acquisition and basic outreach' },
      { name: 'Target Market', surfox: 'Any sales team with leads to convert', sherpa: 'Real estate investors and wholesalers' },
      { name: 'Pricing Strategy', surfox: 'Growth plan $597/month with learning AI, starts at $147', sherpa: '$1,299+/month plus per-message costs' },
      { name: 'Time Investment', surfox: '30 minutes daily to review escalated leads', sherpa: '4+ hours daily for campaign management' },
      { name: 'Total Cost of Ownership', surfox: 'Growth $597/month, Starter $147/month', sherpa: '$1,500+/month including labor costs' }
    ]
  }
];

export default function FeatureComparison() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  return (
    <>
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
                  {item.sherpa.includes('Built-in') || item.sherpa.includes('Attorney') || item.sherpa.includes('PropStack') ?
                    <Check className="w-5 h-5 text-green-400 mr-2" /> :
                    <X className="w-5 h-5 text-red-600 mr-2" />
                  }
                  <span className="font-medium text-sm text-white/60">Lead Sherpa</span>
                </div>
                <p className="text-sm text-white/60">{item.sherpa}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
