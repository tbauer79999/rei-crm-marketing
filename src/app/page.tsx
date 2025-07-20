'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Play, Check, X, Brain, MessageSquare, Target, Menu, User, ChevronRight, Phone, Mail, Zap, Activity, Shield, Eye, TrendingUp, BarChart3, Clock, ArrowRight, Building, Users, Cpu, Database } from 'lucide-react'

const SurFoxHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('signals')

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="bg-slate-100/95 backdrop-blur-sm border-b border-slate-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="SurFox" className="h-8 w-auto" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">Home</Link>
              <Link href="/about-the-founder" className="text-slate-700 hover:text-slate-900 font-medium">About Tom</Link>
              <Link href="/how-it-works" className="text-slate-700 hover:text-slate-900 font-medium">How It Works</Link>
              <Link href="/pricing" className="text-slate-700 hover:text-slate-900 font-medium">Pricing</Link>
              <a href="#start" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Started
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-300">
              <div className="space-y-3">
                <Link href="/" className="block text-slate-700 font-medium">Home</Link>
                <Link href="/about-the-founder" className="block text-slate-700 font-medium">About Tom</Link>
                <Link href="/how-it-works" className="block text-slate-700 font-medium">How It Works</Link>
                <Link href="/pricing" className="block text-slate-700 font-medium">Pricing</Link>
                <a href="#start" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-300 text-sm font-medium">
                <Activity className="w-4 h-4 mr-2" />
                Built by a 20-year sales veteran who was tired of losing good prospects
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              I spent 20 years watching good prospects slip away.
              <br />
              <span className="text-blue-600">So I built something to catch them.</span>
            </h1>
            
            <p className="text-xl text-slate-700 mb-10 leading-relaxed max-w-4xl mx-auto">
              Every business has leads that went cold. What if there was a way to know exactly which ones 
              are worth pursuing again? That's SurFox — the first AI platform built specifically to revive 
              dormant prospects using behavioral psychology and conversation intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl">
                <Play className="w-5 h-5 mr-3" />
                Watch Tom's Story (3 min)
              </button>
              <a href="#how-it-works" className="border border-slate-400 text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors font-semibold text-lg shadow-sm hover:shadow-md">
                See How It Works
              </a>
            </div>

            {/* Video section with more context */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl border border-slate-300 p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-slate-600 text-base mb-4">
                    "After two decades in sales, I was tired of watching perfectly good prospects go to competitors 
                    just because we gave up too early. So I built SurFox."
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
                  Tom Rodriguez, Founder & CEO • Former VP of Sales at three successful exits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Here's the uncomfortable truth about cold leads
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Most sales teams give up too early. But some of those "dead" leads are actually just waiting for the right moment. 
              The challenge is knowing which ones — and when to reach out.
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
                    <strong>Let prospects go to competitors</strong> — Who happened to follow up at the right time
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-700">What SurFox does differently:</h3>
              </div>
              <ul className="space-y-4 text-blue-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Watches for buying signals</strong> — Monitors 50+ behavioral indicators in real-time
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Perfect timing intelligence</strong> — Knows when to reach out and when to wait
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Personalizes every conversation</strong> — Based on prospect behavior and psychology
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Only alerts you when it matters</strong> — Focus on quality, not quantity
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Detailed */}
      <section id="how-it-works" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              How SurFox actually works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              It's simpler than you think, but more sophisticated than anything else on the market. 
              Here's the step-by-step process behind the technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl border border-slate-300 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Upload & Analyze</h3>
              <p className="text-slate-600 leading-relaxed">
                Import your cold leads from any CRM or spreadsheet. Our AI immediately begins analyzing 
                historical interaction patterns, response timing, and behavioral indicators.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-300 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">AI Conversation Engine</h3>
              <p className="text-slate-600 leading-relaxed">
                SurFox starts natural, personalized conversations. Each message is crafted based on the prospect's 
                industry, previous interactions, and psychological profile.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-300 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Signal Detection & Alert</h3>
              <p className="text-slate-600 leading-relaxed">
                When someone shows genuine buying interest, you get an instant alert with full context. 
                No more sorting through "maybe later" responses.
              </p>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white rounded-xl border border-slate-300 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">See the AI in Action</h3>
            
            <div className="flex justify-center mb-6">
              <div className="bg-slate-200 rounded-lg p-1">
                {[
                  { id: 'signals', label: 'Signal Detection', icon: Activity },
                  { id: 'conversation', label: 'Conversation Flow', icon: MessageSquare },
                  { id: 'prediction', label: 'Prediction Engine', icon: TrendingUp }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-all flex items-center ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[300px]">
              {activeTab === 'signals' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-4">Incoming Message</h4>
                    <div className="bg-white rounded p-4 mb-4 text-slate-800 border border-slate-200">
                      "Hey, I've been thinking about what you sent last month. My situation has changed and I might be ready to move forward. When would be a good time to chat?"
                    </div>
                    <div className="text-sm text-slate-600">Analyzing behavioral signals...</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-4">AI Signal Analysis</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">Timeline Urgency</span>
                        <span className="text-green-600 font-bold">HIGH</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">Decision Authority</span>
                        <span className="text-green-600 font-bold">CONFIRMED</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">Pain Point Reference</span>
                        <span className="text-yellow-600 font-bold">DETECTED</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">Commitment Language</span>
                        <span className="text-green-600 font-bold">STRONG</span>
                      </div>
                      <div className="border-t border-slate-300 pt-3 mt-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">96%</div>
                          <div className="text-xs text-slate-600">HOT LEAD CONFIDENCE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'conversation' && (
                <div className="max-w-3xl mx-auto">
                  <div className="space-y-4">
                    {[
                      { sender: 'AI', message: 'Hi Jennifer! I noticed your company just announced the Series B funding. Congratulations! How\'s the team scaling going?', time: '2:14 PM' },
                      { sender: 'Prospect', message: 'Thanks! It\'s been crazy. We\'re actually struggling with our current sales process as we grow.', time: '2:18 PM' },
                      { sender: 'AI', message: 'That\'s exactly what I was hoping to chat about. Growing pains in sales ops are so common at your stage. What\'s the biggest bottleneck you\'re seeing?', time: '2:19 PM' },
                      { sender: 'Prospect', message: 'Honestly, our lead follow-up is a mess. We\'re losing prospects left and right. When can we talk?', time: '2:21 PM' }
                    ].map((msg, index) => (
                      <div key={index} className={`flex ${msg.sender === 'AI' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-sm rounded-xl p-4 ${
                          msg.sender === 'AI' 
                            ? 'bg-blue-100 text-blue-900' 
                            : 'bg-slate-200 text-slate-900'
                        }`}>
                          <div className="text-sm leading-relaxed">{msg.message}</div>
                          <div className="text-xs opacity-70 mt-2">{msg.time}</div>
                        </div>
                      </div>
                    ))}
                    <div className="text-center py-4">
                      <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        <Zap className="w-4 h-4 mr-2" />
                        HOT LEAD: Ready for sales team handoff
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'prediction' && (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">High</div>
                    <div className="text-sm text-slate-600 font-medium">Interest Level</div>
                    <div className="text-xs text-slate-500 mt-2">Based on multiple positive signals</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">Now</div>
                    <div className="text-sm text-slate-600 font-medium">Best Contact Time</div>
                    <div className="text-xs text-slate-500 mt-2">Urgency indicators detected</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">Strong</div>
                    <div className="text-sm text-slate-600 font-medium">Conversion Likelihood</div>
                    <div className="text-xs text-slate-500 mt-2">Decision maker signals present</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What It Is / Isn't - Expanded */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Let me be crystal clear about what this is
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              I built SurFox to solve one specific problem that was costing me millions in lost revenue. 
              It's not trying to be everything to everyone — it's laser-focused on one thing: 
              intelligently reviving cold prospects.
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
                    <span className="text-red-600">Your existing CRM handles records, we handle conversations</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">Marketing automation</strong>
                    <span className="text-red-600">This is sales-focused, not marketing campaigns</span>
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
                  <Activity className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">A signal-based engagement engine</strong>
                    <span className="text-blue-600">AI that reads behavior and knows when to act</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">A focused cold-lead reactivation system</strong>
                    <span className="text-blue-600">Specifically built to wake up dormant prospects</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Brain className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">An AI assistant for sales follow-up</strong>
                    <span className="text-blue-600">Built by salespeople, for salespeople</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Eye className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block">A buying intent detection platform</strong>
                    <span className="text-blue-600">Knows the difference between interest and politeness</span>
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
              Cold leads are a universal problem. SurFox adapts to your industry's unique buying patterns and terminology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Building, 
                title: 'Real Estate', 
                desc: 'Reactivate buyers who went cold. Know when they\'re ready to tour again.',
                use_case: 'Perfect for agents with large prospect databases'
              },
              { 
                icon: Cpu, 
                title: 'SaaS & Technology', 
                desc: 'Identify enterprise buyers showing implementation signals.',
                use_case: 'Ideal for B2B software sales teams'
              },
              { 
                icon: Users, 
                title: 'Professional Services', 
                desc: 'Reconnect with prospects when their project timing aligns.',
                use_case: 'Great for consultants and agencies'
              },
              { 
                icon: TrendingUp, 
                title: 'Financial Services', 
                desc: 'Detect when prospects are ready for loans, investments, or insurance.',
                use_case: 'Essential for financial advisors'
              },
              { 
                icon: Shield, 
                title: 'Healthcare', 
                desc: 'Re-engage patients for elective procedures and consultations.',
                use_case: 'Valuable for private practice marketing'
              },
              { 
                icon: Target, 
                title: 'Manufacturing', 
                desc: 'Revive B2B prospects when their procurement cycles restart.',
                use_case: 'Perfect for industrial sales teams'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-300 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{industry.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{industry.desc}</p>
                <div className="text-sm text-blue-600 font-medium">
                  {industry.use_case}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Try it risk-free for 14 days
            </h2>
            <p className="text-xl text-slate-600">
              No contracts. No setup fees. See if it works for your business before you pay a dime.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white border border-slate-300 rounded-xl p-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">SurFox Professional</h3>
            <div className="text-4xl font-bold text-slate-900 mb-2">$197<span className="text-lg text-slate-500">/month</span></div>
            <p className="text-slate-600 mb-8">
              Everything you need to revive cold leads and grow revenue
            </p>
            
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span>Up to 1,000 lead conversations per month</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span>50+ behavioral signal analysis</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span>Real-time hot lead alerts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span>CRM integration (Salesforce, HubSpot, Pipedrive)</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span>Industry-specific conversation templates</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span>Email and chat support</span>
              </li>
            </ul>
            
            <a href="#start" className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg block shadow-lg hover:shadow-xl">
              Start Free Trial
            </a>
            <p className="text-sm text-slate-500 mt-4">
              No credit card required • Cancel anytime • Setup takes 10 minutes
            </p>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Need higher volume or enterprise features?
            </p>
            <Link href="/enterprise" className="text-blue-600 hover:text-blue-700 font-medium">
              View Enterprise Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="start" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stop letting good prospects slip away
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            You've got leads sitting in your CRM right now. Some of them are ready to buy, they're just waiting for the right conversation. 
            Let SurFox find them for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
              Start Free Trial
            </a>
            <Link href="/about-the-founder" className="border-2 border-blue-300 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg">
              Learn More About Tom
            </Link>
          </div>
          
          <div className="bg-blue-700 rounded-xl p-6 max-w-2xl mx-auto">
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

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img src="/logo.png" alt="SurFox" className="h-8 w-auto brightness-0 invert" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The first AI platform built specifically to revive cold leads using behavioral psychology and conversation intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
                <li><Link href="/enterprise" className="hover:text-white">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/about-the-founder" className="hover:text-white">About Tom</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/security" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 SurFox. Built by salespeople who got tired of losing good prospects.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SurFoxHomepage