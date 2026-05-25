"use client"

import React, { useState } from 'react';
import { Check, X, Brain, Target, Clock, DollarSign } from 'lucide-react';

const featureSets = [
  {
    category: 'Conversion Power',
    icon: Brain,
    features: [
      { name: 'Message Creation', surfox: 'SurFox AI creates unique conversations for each lead', launch: 'Template-based messaging only' },
      { name: 'Conversation Management', surfox: 'SurFox AI remembers and learns from every conversation', launch: 'Basic contact management, no memory' },
      { name: 'Lead Qualification', surfox: 'SurFox AI automatically scores and prioritizes hot leads', launch: 'Manual lead qualification required' },
      { name: 'Response Handling', surfox: 'SurFox AI handles 90% of conversations autonomously', launch: 'All conversations require manual handling' },
      { name: 'Learning Capability', surfox: 'Gets smarter with every conversation', launch: 'No learning or adaptation' }
    ]
  },
  {
    category: 'Sales Results',
    icon: Target,
    features: [
      { name: 'Appointment Setting', surfox: 'SurFox AI identifies buying signals and books qualified calls', launch: 'Manual signal interpretation required' },
      { name: 'Lead Scoring', surfox: 'Real-time motivation and urgency scoring', launch: 'Basic engagement tracking only' },
      { name: 'Hot Lead Detection', surfox: 'SurFox AI escalates when prospects are ready to buy', launch: 'Manual monitoring and handoff' },
      { name: 'Conversion Optimization', surfox: 'SurFox AI learns what works and improves messaging', launch: 'Fixed campaign sequences only' },
      { name: 'Deal Pipeline', surfox: 'Tracks leads from first contact to closed deal', launch: 'Basic list management' }
    ]
  },
  {
    category: 'Time Efficiency',
    icon: Clock,
    features: [
      { name: 'Setup Time', surfox: '15-minute Chrome extension setup', launch: 'Hours of template creation and campaign setup' },
      { name: 'Daily Management', surfox: '30 minutes to review escalated hot leads', launch: '5+ hours of campaign monitoring and replies' },
      { name: 'Message Writing', surfox: 'SurFox AI writes all messages automatically', launch: 'Manual template writing and variation' },
      { name: 'Follow-up Strategy', surfox: 'SurFox AI determines optimal timing per lead', launch: 'Fixed drip schedules require constant adjustment' },
      { name: 'Spam Prevention', surfox: 'SurFox AI prevents spam detection automatically', launch: 'Manual message variation to avoid spam flags' }
    ]
  },
  {
    category: 'Business Value',
    icon: DollarSign,
    features: [
      { name: 'Pricing Model', surfox: 'Growth plan $597/month with learning AI, starts at $147', launch: '$497+ base plus staff time costs' },
      { name: 'Staff Requirements', surfox: 'No dedicated campaign manager needed', launch: 'Requires full-time campaign management' },
      { name: 'ROI Tracking', surfox: 'Full conversion tracking from lead to close', launch: 'Basic campaign metrics only' },
      { name: 'Scalability', surfox: 'SurFox AI scales conversations without adding staff', launch: 'More campaigns = more manual work' },
      { name: 'Total Cost of Ownership', surfox: 'Growth $597/month, Starter $147/month', launch: '$1,500+/month including labor costs' }
    ]
  }
];

export default function LaunchControlClient() {
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
                  <X className="w-5 h-5 text-red-600 mr-2" />
                  <span className="font-medium text-sm text-white/60">Launch Control</span>
                </div>
                <p className="text-sm text-white/60">{item.launch}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
