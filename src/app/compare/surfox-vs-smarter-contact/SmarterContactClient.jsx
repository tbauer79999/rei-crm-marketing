"use client"

import React, { useState } from 'react';
import { Check, X, Brain, Target, DollarSign, Zap } from 'lucide-react';

const featureSets = [
  {
    category: 'AI vs Templates',
    icon: Brain,
    features: [
      { name: 'Response Generation', surfox: 'SurFox AI creates unique conversations for each lead', smarter: 'Template-based automation only' },
      { name: 'Lead Memory & Learning', surfox: 'SurFox AI remembers and learns from every conversation', smarter: 'Basic contact management, no memory' },
      { name: 'Lead Qualification', surfox: 'SurFox AI automatically scores and prioritizes hot leads', smarter: 'Manual qualification required' },
      { name: 'Message Personalization', surfox: 'SurFox AI adapts tone and approach per prospect', smarter: 'Fixed template variations' },
      { name: 'Learning Capability', surfox: 'Gets smarter with every conversation', smarter: 'No learning or adaptation' }
    ]
  },
  {
    category: 'Sales Results',
    icon: Target,
    features: [
      { name: 'Appointment Setting', surfox: 'SurFox AI identifies buying signals and books qualified calls', smarter: 'Manual signal interpretation required' },
      { name: 'Lead Scoring', surfox: 'Real-time motivation and urgency scoring', smarter: 'Basic engagement tracking only' },
      { name: 'Hot Lead Detection', surfox: 'SurFox AI escalates when prospects are ready to buy', smarter: 'Manual monitoring and handoff' },
      { name: 'Conversion Optimization', surfox: 'SurFox AI learns what works and improves messaging', smarter: 'Fixed campaign sequences only' },
      { name: 'Deal Pipeline', surfox: 'Tracks leads from first contact to closed deal', smarter: 'Basic list management' }
    ]
  },
  {
    category: 'Automation Power',
    icon: Zap,
    features: [
      { name: 'Setup Time', surfox: '15-minute Chrome extension setup', smarter: 'Manual list upload and configuration' },
      { name: 'Conversation Handling', surfox: 'SurFox AI manages 90% of conversations autonomously', smarter: 'All conversations require manual handling' },
      { name: 'AI Training', surfox: 'Upload PDFs, SOPs to train AI on your business', smarter: 'Template library only' },
      { name: 'Smart Follow-ups', surfox: 'SurFox AI determines optimal timing per lead', smarter: 'Fixed retry schedules' },
      { name: 'Spam Prevention', surfox: 'SurFox AI prevents spam detection automatically', smarter: 'Risk of spam flags with volume' }
    ]
  },
  {
    category: 'Business Value',
    icon: DollarSign,
    features: [
      { name: 'Pricing Model', surfox: 'Growth plan $597/month with learning AI, starts at $147', smarter: 'Base fee plus per-message costs' },
      { name: 'Time Investment', surfox: 'Minimal ongoing management required', smarter: 'Constant manual conversation monitoring' },
      { name: 'ROI Tracking', surfox: 'Full conversion tracking from lead to close', smarter: 'Basic volume and open rate metrics' },
      { name: 'Scalability', surfox: 'SurFox AI scales conversations without adding staff', smarter: 'More leads = more manual work' },
      { name: 'Total Cost', surfox: 'Growth $597/month, Starter $147/month', smarter: '$199+ base + usage fees + labor costs' }
    ]
  }
];

export default function SmarterContactClient() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  return (
    <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
            Feature-by-Feature Breakdown
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
            See exactly where SurFox AI outperforms traditional mass messaging platforms.
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
                    <span className="font-medium text-sm text-white/60">Smarter Contact</span>
                  </div>
                  <p className="text-sm text-white/60">{item.smarter}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
