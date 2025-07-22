'use client'

import React, { useState, useEffect } from 'react'
import { Brain, MessageSquare, TrendingUp, Users, Target, Zap, ArrowRight, Play, Eye, Lightbulb, Activity, Database, Cpu, Layers, CheckCircle, XCircle, Clock, Sparkles, BarChart3, HeartHandshake, Search, Filter, Send } from 'lucide-react'

const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [psychologyDemo, setPsychologyDemo] = useState('skeptical')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white">
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              How Psychology AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Reads Human Behavior
            </span>
          </h1>
          <p className="text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
            While other platforms blast the same message to everyone, SurFox analyzes <strong className="text-white">50+ psychological dimensions</strong> to understand exactly how each prospect thinks, decides, and communicates.
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-xl hover:scale-105 transition-all">
            <Play className="w-6 h-6 mr-3 inline" />
            Watch 2-Minute Demo
          </button>
        </div>
      </section>

      {/* The Psychology Problem */}
      <section className="py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
              The problem every sales team faces
            </h2>
          </div>
          
          {/* Interactive Psychology Demo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Same message, different psychology</h3>
              <p className="text-xl text-gray-300 mb-8">
                Here's the exact same sales message sent to three different prospect personalities. 
                Watch how the AI adapts each one based on psychological analysis.
              </p>
              
              <div className="flex gap-4 mb-8">
                {[
                  { id: 'skeptical', label: 'Skeptical Buyer', color: 'red' },
                  { id: 'analytical', label: 'Analytical Type', color: 'blue' },
                  { id: 'decisive', label: 'Decisive Leader', color: 'green' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPsychologyDemo(type.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      psychologyDemo === type.id
                        ? `bg-${type.color}-600 text-white`
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 rounded-2xl border border-purple-500/30 p-8">
              {psychologyDemo === 'skeptical' && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-red-300 font-bold">Sarah - Skeptical Buyer</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 mb-4">
                    <div className="text-red-300 text-sm mb-2">PSYCHOLOGY PROFILE:</div>
                    <div className="text-sm text-gray-300 space-y-1">
                      <div>• High skepticism, needs proof</div>
                      <div>• Data-driven decision making</div>
                      <div>• Slow to trust new vendors</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-900/50 to-red-600/50 rounded-lg p-4 border border-red-400/30">
                    <div className="text-red-300 text-sm mb-2">AI-ADAPTED MESSAGE:</div>
                    <div className="text-white text-sm">
                      "I know you've probably heard promises before. Here are 3 verifiable case studies from companies just like yours: [Company A] - 34% cost reduction (verified by CFO), [Company B] - $2.1M savings (public earnings call), [Company C] - 67% efficiency gain (LinkedIn testimonial). No sales pitch - just data. Worth 10 minutes to verify these results?"
                    </div>
                  </div>
                </div>
              )}
              
              {psychologyDemo === 'analytical' && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-blue-300 font-bold">Michael - Analytical Type</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 mb-4">
                    <div className="text-blue-300 text-sm mb-2">PSYCHOLOGY PROFILE:</div>
                    <div className="text-sm text-gray-300 space-y-1">
                      <div>• Loves detailed information</div>
                      <div>• Methodical decision process</div>
                      <div>• Needs comprehensive understanding</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-600/50 rounded-lg p-4 border border-blue-400/30">
                    <div className="text-blue-300 text-sm mb-2">AI-ADAPTED MESSAGE:</div>
                    <div className="text-white text-sm">
                      "Michael, I've prepared a comprehensive analysis showing exactly how our solution integrates with your current tech stack. The document covers: implementation timeline (12-week phased approach), ROI calculations (month-by-month breakdown), security protocols (SOC2 compliance details), and technical specifications. I can walk you through the methodology in a 30-minute technical deep-dive. When works best for a thorough review?"
                    </div>
                  </div>
                </div>
              )}
              
              {psychologyDemo === 'decisive' && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-300 font-bold">Jessica - Decisive Leader</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 mb-4">
                    <div className="text-green-300 text-sm mb-2">PSYCHOLOGY PROFILE:</div>
                    <div className="text-sm text-gray-300 space-y-1">
                      <div>• Fast decision maker</div>
                      <div>• Values directness</div>
                      <div>• Hates wasting time</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-900/50 to-green-600/50 rounded-lg p-4 border border-green-400/30">
                    <div className="text-green-300 text-sm mb-2">AI-ADAPTED MESSAGE:</div>
                    <div className="text-white text-sm">
                      "Jessica, cutting to the chase: We can solve your Q4 efficiency problem. Similar companies see 40% faster results with our approach. I have two options: 1) 15-minute demo this Thursday at 2pm, or 2) I send you a one-page summary and we move to contract terms Friday. Your choice - which gets us moving faster?"
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The 4-Step Psychology AI Process
            </h2>
            <p className="text-xl text-gray-300">
              From cold lead to psychological profile to conversion - here's exactly how it works
            </p>
          </div>
          
          {/* Interactive Step Navigator */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm">
              {[
                { id: 0, label: 'Import', icon: Database },
                { id: 1, label: 'Analyze', icon: Brain },
                { id: 2, label: 'Adapt', icon: Zap },
                { id: 3, label: 'Learn', icon: TrendingUp }
              ].map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center ${
                    activeStep === step.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <step.icon className="w-5 h-5 mr-2" />
                  {step.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 rounded-3xl border border-purple-500/30 p-8 min-h-[500px]">
            {activeStep === 0 && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Database className="w-8 h-8 mr-3 text-blue-400" />
                    Step 1: Import Your Cold Leads
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Upload from anywhere:</strong> CSV files, CRM exports, or direct integrations with Salesforce, HubSpot, Pipedrive
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>No data requirements:</strong> Just name + phone number is enough to start
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Automatic deduplication:</strong> AI identifies and merges duplicate contacts
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-gray-600/30">
                  <div className="text-blue-300 text-sm mb-4">IMPORT PREVIEW:</div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="bg-gray-800/50 rounded p-3">
                      <div className="text-green-400">✓ 1,247 leads imported</div>
                      <div className="text-gray-400">✓ 23 duplicates merged</div>
                      <div className="text-yellow-400">⚠ 12 invalid phone numbers</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Ready to begin psychological analysis...
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Brain className="w-8 h-8 mr-3 text-purple-400" />
                    Step 2: AI Analyzes Psychology
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <Eye className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>50+ psychological dimensions:</strong> Communication style, decision-making patterns, trust factors, motivation triggers
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Activity className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Real-time response analysis:</strong> Every text message response teaches the AI more about their personality
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Behavioral clustering:</strong> Groups similar psychology types for pattern recognition
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-purple-500/30">
                  <div className="text-purple-300 text-sm mb-4">PSYCHOLOGY ANALYSIS:</div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-purple-900/30 rounded p-3">
                      <div className="text-purple-300 font-bold mb-2">Sarah Chen - Tech Executive</div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Trust Level: <span className="text-red-400">Low</span></div>
                        <div>Decision Style: <span className="text-blue-400">Analytical</span></div>
                        <div>Communication: <span className="text-green-400">Direct</span></div>
                        <div>Motivation: <span className="text-yellow-400">ROI-Driven</span></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      AI Confidence: 87% • Learning from 47 similar profiles
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Zap className="w-8 h-8 mr-3 text-cyan-400" />
                    Step 3: Adapts Messaging
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Personality-matched tone:</strong> Direct for decisive types, data-heavy for analytical, trust-building for skeptical
                      </div>
                    </div>
                    <div className="flex items-start">
                      <HeartHandshake className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Dynamic message crafting:</strong> AI generates unique messages based on psychological profile
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Optimal timing:</strong> Learns when each personality type is most likely to respond
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-cyan-500/30">
                  <div className="text-cyan-300 text-sm mb-4">MESSAGE ADAPTATION:</div>
                  <div className="space-y-4 text-sm">
                    <div className="bg-red-900/20 rounded p-3 border border-red-500/30">
                      <div className="text-red-300 text-xs mb-1">BEFORE (Generic):</div>
                      <div className="text-gray-300">"Hi! Hope you're doing well. Would love to chat about how we can help your business grow."</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 mx-auto" />
                    <div className="bg-green-900/20 rounded p-3 border border-green-500/30">
                      <div className="text-green-300 text-xs mb-1">AFTER (Psychology-Matched):</div>
                      <div className="text-white">"Sarah, noticed your Q4 efficiency challenges on LinkedIn. We helped TechCorp reduce costs by 34% (CFO verified). Here's the exact breakdown: [link]. Worth 10 minutes to verify?"</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <TrendingUp className="w-8 h-8 mr-3 text-green-400" />
                    Step 4: Learns & Improves
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <Lightbulb className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Pattern discovery:</strong> AI identifies which approaches work best for each personality type
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BarChart3 className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Continuous optimization:</strong> Every conversation makes the AI smarter about human psychology
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Sparkles className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Breakthrough insights:</strong> Discovers psychology patterns you never knew existed
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-green-500/30">
                  <div className="text-green-300 text-sm mb-4">AI LEARNING INSIGHTS:</div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-green-900/20 rounded p-3">
                      <div className="text-green-300 font-bold mb-2">Breakthrough Discovery:</div>
                      <div className="text-gray-300">"Decisive leads respond 3x better to urgency language like 'limited time' and 'act now'"</div>
                    </div>
                    <div className="bg-blue-900/20 rounded p-3">
                      <div className="text-blue-300 font-bold mb-2">Pattern Recognition:</div>
                      <div className="text-gray-300">"Leads who ask questions in their first response are 4x more likely to convert"</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Learning from 847 conversations • 23% improvement rate
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* The Psychology Engine Deep Dive */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              What makes our Psychology AI different?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "50+ Psychological Dimensions",
                description: "While others track opens and clicks, we analyze decision-making patterns, trust factors, communication styles, and motivation triggers.",
                features: ["Decision-making speed", "Trust building needs", "Data vs emotion preference", "Communication directness", "Risk tolerance levels"]
              },
              {
                icon: TrendingUp,
                title: "Adaptive Learning Engine", 
                description: "Every conversation teaches our AI more about human psychology. The more it learns, the better it gets at reading people.",
                features: ["Pattern recognition", "Behavioral clustering", "Outcome correlation", "Psychology mapping", "Conversation intelligence"]
              },
              {
                icon: Target,
                title: "Real-Time Adaptation",
                description: "Not just A/B testing - real psychological profiling that adapts every single message to the individual's mental framework.",
                features: ["Instant profiling", "Dynamic messaging", "Tone adaptation", "Timing optimization", "Response prediction"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 backdrop-blur-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to see Psychology AI in action?
          </h2>
          <p className="text-xl text-purple-200 mb-12">
            Upload your cold leads and watch as our AI reads their psychology, adapts your messaging, and converts prospects you thought were lost forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl">
              Start 14-Day Free Trial
            </button>
            <button className="px-12 py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-xl hover:bg-purple-500/20 transition-all">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage