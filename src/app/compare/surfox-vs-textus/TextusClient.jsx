"use client"

import React, { useState } from 'react';
import { Check, X, Brain, Target, Clock, DollarSign } from 'lucide-react';

const featureSets = [
  {
    category: 'Conversion Power',
    icon: Brain,
    features: [
      { name: 'Message Creation', surfox: 'SurFox AI creates unique conversations for each lead', textus: 'Manual or canned messages only' },
      { name: 'Conversation Management', surfox: 'SurFox AI remembers and learns from every conversation', textus: 'No memory between conversations' },
      { name: 'Lead Qualification', surfox: 'SurFox AI automatically qualifies and scores prospects', textus: 'Manual qualification required for everything' },
      { name: 'Response Intelligence', surfox: 'SurFox AI adapts messaging based on prospect psychology', textus: 'One-size-fits-all messaging approach' }
    ]
  },
  {
    category: 'Sales Results',
    icon: Target,
    features: [
      { name: 'Appointment Setting', surfox: 'SurFox AI identifies buying signals and books qualified calls', textus: 'Manual signal interpretation required' },
      { name: 'Lead Scoring', surfox: 'Real-time psychological scoring and prioritization', textus: 'No native scoring capabilities' },
      { name: 'Hot Lead Detection', surfox: 'SurFox AI escalates when prospects are ready to buy', textus: 'Basic inbox filtering only' },
      { name: 'Conversion Optimization', surfox: 'SurFox AI learns what works and improves messaging', textus: 'No learning or adaptation capabilities' }
    ]
  },
  {
    category: 'Time Efficiency',
    icon: Clock,
    features: [
      { name: 'Setup Time', surfox: '15-minute Chrome extension setup', textus: '2-3 hours of training and configuration' },
      { name: 'Daily Management', surfox: '30 minutes to review escalated hot leads', textus: '4+ hours of manual conversation handling' },
      { name: 'Message Writing', surfox: 'SurFox AI writes all messages automatically', textus: 'Your team writes every single message' },
      { name: 'Spam Prevention', surfox: 'SurFox AI creates natural variants to avoid detection', textus: 'High risk of spam flagging with volume' }
    ]
  },
  {
    category: 'Business Value',
    icon: DollarSign,
    features: [
      { name: 'Pricing Model', surfox: 'Growth plan $597/month with learning AI, starts at $147', textus: '$500+ base with hidden fees and limits' },
      { name: 'Staff Requirements', surfox: 'No dedicated messaging staff needed', textus: 'Requires full-time manual management' },
      { name: 'ROI Tracking', surfox: 'Full conversion tracking from lead to close', textus: 'Basic message delivery metrics only' },
      { name: 'Scalability', surfox: 'SurFox AI scales conversations without adding staff', textus: 'More leads = more manual work required' }
    ]
  }
];

export default function TextusClient() {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0);

  return (
    <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
            Feature-by-Feature Breakdown
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
            See exactly where SurFox AI's AI automation outperforms TextUs's manual approach.
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
                    <span className="font-medium text-sm text-white/60">TextUs</span>
                  </div>
                  <p className="text-sm text-white/60">{item.textus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
