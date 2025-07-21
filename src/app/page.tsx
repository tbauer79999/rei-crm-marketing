'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Play, Check, X, Brain, MessageSquare, Target, User, ChevronRight, Phone, Mail, Zap, Activity, Shield, Eye, TrendingUp, BarChart3, Clock, ArrowRight, Building, Users, Cpu, Database, Lightbulb, Layers, Gauge } from 'lucide-react'

const SurFoxHomepage = () => {
  const [activeTab, setActiveTab] = useState('psychology')

  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* Hero Section - Enhanced with Psychology AI */}
      <section className="py-20 pt-32 bg-gradient-to-b from-slate-100 to-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-300 text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                Introducing the world's first Sales Psychology AI Learning Engine
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              I spent 20 years watching good prospects slip away.
              <br />
              <span className="text-blue-600">So I built something to catch them.</span>
            </h1>
            
            <p className="text-xl text-slate-700 mb-6 leading-relaxed max-w-4xl mx-auto">
              After two decades in sales, I realized the problem wasn't the timing or the message — it was that we were treating all prospects the same. Some people are naturally skeptical, others are decisive. Some need data, others need emotion.
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">So I built an AI that actually learns these psychological patterns and adapts.</strong> It's like having 20 years of sales psychology experience built into every conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all font-semibold text-lg flex items-center justify-center">
                <Play className="w-5 h-5 mr-3" />
                Watch Tom's Story (3 min)
              </button>
              <a href="#how-it-works" className="border border-slate-400 text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors font-semibold text-lg shadow-sm hover:shadow-md">
                See How It Works
              </a>
            </div>

            {/* Enhanced Video section */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl border border-slate-300 p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-slate-600 text-base mb-4">
                    "While other platforms blast the same message to everyone, SurFox reads human psychology and adapts. Our AI learns which personality types respond to which approaches, creating personalized conversations that feel human but scale like technology."
                  </p>
                </div>
                <div className="relative bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl p-8">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-600">LIVE</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mt-4 text-center">
                  Tom Bauer, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Category Definition Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 border-t border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              This isn't just an SMS platform — it's a new category: <span className="text-purple-600">Sales Psychology AI</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl border border-slate-300 p-6 text-left">
                <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-slate-500" />
                  Traditional Platforms:
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Send messages, track delivery</li>
                  <li>• Same approach for everyone</li>
                  <li>• Static, rule-based automation</li>
                  <li>• Focus on volume over psychology</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6 text-left">
                <h3 className="text-lg font-bold text-purple-700 mb-4 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-600" />
                  SurFox Sales Psychology AI:
                </h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• Reads human psychology patterns</li>
                  <li>• Learns behavioral preferences</li>
                  <li>• Adapts messaging to personality types</li>
                  <li>• Gets smarter with every conversation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Here's the uncomfortable truth about cold leads
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Most sales teams give up too early. But some of those "dead" leads are actually just waiting for the right moment. 
              The challenge is knowing which ones — and <em>how</em> to speak to their specific psychology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <X className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-700">What most companies do:</h3>
              </div>
              <ul className="space-y-4 text-red-700">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Mass follow-up campaigns</strong> — Send the same generic message to hundreds of prospects
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Give up after 3-5 attempts</strong> — Assume silence means "not interested"
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Miss the buying signals</strong> — Can't tell when someone's actually ready vs. just being polite
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Ignore personality differences</strong> — Treat skeptical prospects the same as decisive ones
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-700">What SurFox does differently:</h3>
              </div>
              <ul className="space-y-4 text-blue-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Psychological profiling</strong> — Analyzes 50+ behavioral dimensions per prospect
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Adaptive learning</strong> — Gets smarter with every conversation it has
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Personality matching</strong> — Different approaches for different psychology types
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Conversation intelligence</strong> — Knows when to push vs when to wait
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced with Psychology Focus */}
      <section id="how-it-works" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              How SurFox Sales Psychology AI actually works
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              It's simpler than you think, but more sophisticated than anything else on the market. 
              Here's how we combine behavioral psychology with conversation intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl border border-slate-300 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Psychological Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Import your leads and our AI immediately begins profiling each prospect across 50+ psychological dimensions — 
                decisiveness, skepticism, motivation triggers, communication preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-300 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Adaptive Conversations</h3>
              <p className="text-slate-600 leading-relaxed">
                Each message is crafted based on the prospect's psychological profile. Skeptical prospects get data and proof. 
                Decisive prospects get clear next steps. The AI learns what works for each personality type.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-300 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Learning & Optimization</h3>
              <p className="text-slate-600 leading-relaxed">
                With every conversation, the AI gets smarter about human psychology. It learns which approaches work for different 
                personality types and continuously optimizes your conversion rates.
              </p>
            </div>
          </div>

          {/* Enhanced Interactive Demo */}
          <div className="bg-white rounded-xl border border-slate-300 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">See the Psychology AI in Action</h3>
            
            <div className="flex justify-center mb-6">
              <div className="bg-slate-200 rounded-lg p-1">
                {[
                  { id: 'psychology', label: 'Psychology Profiling', icon: Brain },
                  { id: 'learning', label: 'AI Learning Engine', icon: Lightbulb },
                  { id: 'adaptation', label: 'Personality Adaptation', icon: Layers }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-all flex items-center ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[350px]">
              {activeTab === 'psychology' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-4">Lead Profile: Sarah Chen</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">Communication Style</span>
                        <span className="text-blue-600 font-bold">Direct & Data-Driven</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">Decision Making</span>
                        <span className="text-orange-600 font-bold">Analytical & Cautious</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">Trust Building</span>
                        <span className="text-red-600 font-bold">Skeptical</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">Motivation Trigger</span>
                        <span className="text-green-600 font-bold">ROI & Efficiency</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-4">AI-Generated Message</h4>
                    <div className="bg-white rounded p-4 text-slate-800 border border-slate-200">
                      "Hi Sarah, saw your LinkedIn post about Q4 planning challenges. We helped a similar fintech company reduce their sales cycle by 34% last quarter. Here's the specific ROI breakdown: [data]. Worth a 10-minute call?"
                    </div>
                    <div className="text-xs text-slate-600 mt-3">
                      ✓ Data-focused approach ✓ Specific metrics ✓ Low-commitment ask ✓ Industry relevance
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'learning' && (
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-50 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-2">Message Psychology</div>
                      <div className="text-sm text-slate-600">
                        Learns which opening lines work for different personality types, optimal message length, question styles that reduce hesitation
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-2">Personality Patterns</div>
                      <div className="text-sm text-slate-600">
                        Identifies best followup timing for each psychology cluster, objection handling strategies that actually work
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-2">Conversation Intelligence</div>
                      <div className="text-sm text-slate-600">
                        Maps successful conversation sequence patterns, optimal timing windows for maximum effectiveness
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 text-center">
                    <h4 className="font-bold text-slate-900 mb-2">Learning Gets Better By Plan:</h4>
                    <div className="text-sm text-slate-600">
                      <strong>Growth:</strong> 100 conversation memory • <strong>Scale:</strong> 1,000 conversation memory • <strong>Enterprise:</strong> Unlimited learning
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'adaptation' && (
                <div className="max-w-3xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="font-bold text-red-700 mb-4">Skeptical Prospect (Sarah)</h4>
                      <div className="text-sm text-red-600 mb-3 italic">"I've heard this before from other vendors..."</div>
                      <div className="bg-white rounded p-3 text-sm">
                        <strong>AI Response:</strong> "I understand the skepticism - you've probably been burned before. Here are 3 specific results from companies just like yours: [data, case studies, verified metrics]. No sales pitch, just facts. Worth 10 minutes to see if it applies to your situation?"
                      </div>
                      <div className="text-xs text-red-600 mt-2">Approach: Data-heavy, acknowledgment, proof</div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-bold text-green-700 mb-4">Decisive Prospect (Mark)</h4>
                      <div className="text-sm text-green-600 mb-3 italic">"Sounds interesting, what's next?"</div>
                      <div className="bg-white rounded p-3 text-sm">
                        <strong>AI Response:</strong> "Perfect! Let's move fast. I can show you exactly how this works in a 15-minute demo. I have Wednesday 2pm or Thursday 10am open. Which works better for your schedule?"
                      </div>
                      <div className="text-xs text-green-600 mt-2">Approach: Direct, fast-moving, specific options</div>
                    </div>
                  </div>
                  <div className="text-center mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                    <div className="text-sm text-slate-700">
                      <strong>Same product, completely different psychological approach.</strong> The AI learns what works for each personality type.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What It Is / Isn't - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Let me be crystal clear about what this is
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              I built SurFox to solve one specific problem that was costing me millions in lost revenue. 
              It's not trying to be everything to everyone — it's laser-focused on one thing: 
              <strong> intelligently reviving cold prospects using sales psychology.</strong>
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-700 mb-8">This is NOT:</h3>
              <ul className="space-y-6 text-red-700">
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">Another mass texting tool</strong>
                    <span className="text-red-600">We don't blast the same message to thousands of people</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">A CRM replacement</strong>
                    <span className="text-red-600">Your existing CRM handles records, we handle psychology</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">Marketing automation</strong>
                    <span className="text-red-600">This is sales psychology, not marketing campaigns</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">A chatbot for your website</strong>
                    <span className="text-red-600">We work with existing leads, not new website visitors</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-8">This IS:</h3>
              <ul className="space-y-6 text-blue-700">
                <li className="flex items-start">
                  <Brain className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">A Sales Psychology AI Learning Engine</strong>
                    <span className="text-blue-600">Reads human psychology, learns behavioral patterns, adapts messaging</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">A personality-based engagement system</strong>
                    <span className="text-blue-600">Different approaches for skeptical vs decisive vs analytical prospects</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">An adaptive learning platform</strong>
                    <span className="text-blue-600">Gets smarter with every conversation, optimizes for psychology patterns</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Eye className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">A buying intent detection system</strong>
                    <span className="text-blue-600">Knows the difference between genuine interest and polite deflection</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Built for every industry
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cold leads are a universal problem. SurFox adapts to your industry's unique buying patterns, terminology, and psychological triggers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Building, 
                title: 'Real Estate', 
                desc: 'Reactivate buyers who went cold. AI learns when they\'re ready to tour again.',
                psychology: 'Detects emotional vs analytical buyer personalities'
              },
              { 
                icon: Cpu, 
                title: 'SaaS & Technology', 
                desc: 'Identify enterprise buyers showing implementation signals.',
                psychology: 'Adapts to technical vs business stakeholder mindsets'
              },
              { 
                icon: Users, 
                title: 'Professional Services', 
                desc: 'Reconnect with prospects when their project timing aligns.',
                psychology: 'Recognizes decision-maker vs influencer communication styles'
              },
              { 
                icon: TrendingUp, 
                title: 'Financial Services', 
                desc: 'Detect when prospects are ready for loans, investments, or insurance.',
                psychology: 'Identifies conservative vs aggressive risk tolerance patterns'
              },
              { 
                icon: Shield, 
                title: 'Healthcare', 
                desc: 'Re-engage patients for elective procedures and consultations.',
                psychology: 'Adapts to comfort level and decision-making preferences'
              },
              { 
                icon: Target, 
                title: 'Manufacturing', 
                desc: 'Revive B2B prospects when their procurement cycles restart.',
                psychology: 'Learns engineering vs procurement vs executive mindsets'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-300 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{industry.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{industry.desc}</p>
                <div className="text-sm text-purple-600 font-medium bg-purple-50 rounded-lg p-3">
                  <Brain className="w-4 h-4 inline mr-1" />
                  {industry.psychology}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing with Learning Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Choose your plan
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              Start with what you need. Scale as you grow. No long-term contracts.
            </p>
            <p className="text-lg text-purple-600 font-medium">
              More learning = better results = higher conversions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white border border-slate-300 rounded-xl p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">$197<span className="text-lg text-slate-500">/month</span></div>
              <p className="text-slate-600 mb-4">Perfect for individual sales professionals</p>
              
              <div className="bg-slate-50 rounded-lg p-3 mb-6">
                <div className="text-sm font-medium text-slate-700">AI Learning:</div>
                <div className="text-sm text-slate-600">No learning (static responses)</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>500 monthly leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Basic psychological profiling</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>AI-generated initial SMS</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Default "Friendly & Casual" tone</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>1 team seat</span>
                </li>
              </ul>
              
              <a href="#start" className="w-full border border-slate-300 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors font-medium">
                Start Free Trial
              </a>
            </div>

            {/* Growth Plan */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Growth</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">$397<span className="text-lg text-slate-500">/month</span></div>
              <p className="text-slate-600 mb-4">For growing sales teams</p>
              
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-3 mb-6">
                <div className="text-sm font-medium text-purple-700">AI Learning:</div>
                <div className="text-sm text-purple-600">100 conversation memory</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>2,500 monthly leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Advanced psychological pattern recognition</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>AI-optimized tone selection</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Conversation flow optimization</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Learning analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Chrome extension</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>5 team seats</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Zapier/API integration</span>
                </li>
              </ul>
              
              <a href="#start" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all font-semibold shadow-lg">
                Start Free Trial
              </a>
            </div>

            {/* Scale Plan */}
            <div className="bg-white border border-slate-300 rounded-xl p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scale</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">$997<span className="text-lg text-slate-500">/month</span></div>
              <p className="text-slate-600 mb-4">For enterprise sales organizations</p>
              
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-3 mb-6">
                <div className="text-sm font-medium text-purple-700">AI Learning:</div>
                <div className="text-sm text-purple-600">1,000 conversation memory</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>10,000+ monthly leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Advanced behavioral adaptation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Comprehensive psychological insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Message A/B testing (AI-driven)</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Unlimited AI knowledge base uploads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>Full team metrics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>15+ team seats</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span>White-glove onboarding & CSM</span>
                </li>
              </ul>
              
              <a href="/contact" className="w-full border border-slate-300 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors font-medium">
                Contact Sales
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-slate-500 mb-4">
              All plans include: 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-purple-700 font-medium">
                <Gauge className="w-4 h-4 inline mr-1" />
                Higher plans = More AI learning = Better psychology insights = Higher conversion rates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="start" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stop letting good prospects slip away
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            You've got leads sitting in your CRM right now. Some of them are ready to buy, they're just waiting for the right conversation — 
            one that speaks to their specific psychology. Let SurFox find them for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/signup" className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-semibold text-lg">
              Start Free Trial
            </a>
            <Link href="/about-the-founder" className="border-2 border-blue-300 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg">
              Learn More About Tom
            </Link>
          </div>
          
          <div className="bg-blue-700/50 rounded-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="font-bold mb-4">Questions? I'm here to help.</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a href="mailto:tom@surfox.com" className="flex items-center text-blue-100 hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                tom@surfox.com
              </a>
              <a href="tel:+15551234567" className="flex items-center text-blue-100 hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxHomepage