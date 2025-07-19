'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, Eye, MessageSquare, Clock, Lightbulb, Activity, Phone, Mail, Building, Home, ShoppingCart, Heart, Briefcase, GraduationCap } from 'lucide-react'

const SurFoxRevolution = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSignal, setActiveSignal] = useState(0)
  const [activeTab, setActiveTab] = useState('real-time')
  const [activeFaq, setActiveFaq] = useState(-1)
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Loading screen
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  // Auto-cycle through signals
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-2 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-2 border-transparent border-r-purple-500 rounded-full animate-spin" style={{ animationDelay: '0.5s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
    )
  }

  const signals = [
    { label: 'Response Speed', value: '94ms avg', color: 'text-blue-400' },
    { label: 'Question Patterns', value: '12 detected', color: 'text-emerald-400' },
    { label: 'Urgency Indicators', value: 'High', color: 'text-red-400' },
    { label: 'Pain Point Mentions', value: '3 identified', color: 'text-purple-400' },
    { label: 'Budget Signals', value: 'Confirmed', color: 'text-yellow-400' },
    { label: 'Decision Timeline', value: 'Q1 2025', color: 'text-pink-400' }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-white">Sur</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fox</span>
              </span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Platform
              </a>
              <a href="#intelligence" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Messaging Intelligence
              </a>
              <a href="#industries" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Industries
              </a>
              <a href="/enterprise" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Enterprise
              </a>

              <div className="relative group">
                <div className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors text-sm font-medium cursor-pointer">
                  <span>Compare</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="absolute left-0 mt-0 w-56 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-50 hidden group-hover:flex flex-col">
                  <a href="#" className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                    ↳ vs TextUs
                  </a>
                  <a href="#" className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                    ↳ vs Smarter Contact
                  </a>
                  <a href="#" className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">
                    ↳ vs Launch Control
                  </a>
                  <a href="#" className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white font-semibold">
                    ↳ All Comparisons
                  </a>
                </div>
              </div>

              <div className="w-px h-6 bg-slate-700"></div>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Start Free Trial
              </a>
            </div>

            <button 
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              <a href="#platform" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Platform</a>
              <a href="#intelligence" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Messaging Intelligence</a>
              <a href="#industries" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Industries</a>
              <a href="/enterprise" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Enterprise</a>
              <div className="pt-4 border-t border-slate-800">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium mb-3">Sign In</a>
                <a href="#" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Category Creation */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" 
            style={{ 
              top: '10%', 
              right: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" 
            style={{ 
              bottom: '20%', 
              left: '10%', 
              animationDelay: '1s',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Category Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border border-blue-500/30">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Introducing Messaging Intelligence™
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-white">Beyond Mass Texting.</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  True Conversation AI.
                </span>
              </h1>
              
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-8">
                <p className="text-xl text-slate-200 mb-4 leading-relaxed">
                  <strong className="text-blue-400">50+ behavioral signals</strong> analyzed in real-time. 
                  <strong className="text-purple-400"> Perfect timing</strong> based on buyer psychology. 
                  <strong className="text-emerald-400"> Human-level conversations</strong> that actually convert.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  While others blast generic messages, SurFox reads minds and starts conversations that matter.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center text-lg">
                  Experience the Future
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#intelligence" className="group border border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800/50 transition-all flex items-center justify-center text-lg">
                  <Eye className="mr-2 w-5 h-5" />
                  See It In Action
                </a>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400 mr-2" />
                  Chrome Extension
                </div>
                <div className="flex items-center text-slate-400">
                  <Brain className="w-4 h-4 text-emerald-400 mr-2" />
                  Self-Learning AI
                </div>
                <div className="flex items-center text-slate-400">
                  <Award className="w-4 h-4 text-emerald-400 mr-2" />
                  99.9% Uptime
                </div>
              </div>
              
              <div className="text-sm text-slate-400 mt-6">
                Used across <strong className="text-white">Real Estate • SaaS • E-commerce • Healthcare • Finance</strong> and more
              </div>
            </div>
            
            {/* Live Signal Analysis Dashboard */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-blue-400" />
                      Live Signal Analysis
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400">50+ Signals Active</span>
                    </div>
                  </div>
                  
                  {/* Signal Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {signals.map((signal, index) => (
                      <div 
                        key={index} 
                        className={`bg-slate-800/30 rounded-lg p-3 border transition-all ${
                          activeSignal === index 
                            ? 'border-blue-500/50 bg-blue-900/20' 
                            : 'border-slate-700/30'
                        }`}
                      >
                        <div className="text-xs text-slate-400 mb-1">{signal.label}</div>
                        <div className={`text-sm font-bold ${signal.color}`}>{signal.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Active Leads */}
                  <div className="space-y-3">
                    {[
                      { 
                        company: 'TechFlow Inc', 
                        contact: 'Sarah M.', 
                        status: 'Asked about Q1 implementation • Mentioned team size', 
                        score: 96, 
                        trend: '+12',
                        priority: 'high',
                        signals: ['Budget confirmed', 'Timeline urgent', 'Decision maker']
                      },
                      { 
                        company: 'DataVault Systems', 
                        contact: 'Marcus C.', 
                        status: 'Requesting security documentation • Ready for demo', 
                        score: 92, 
                        trend: '+8',
                        priority: 'high',
                        signals: ['Security questions', 'Demo interest', 'Compliance needs']
                      }
                    ].map((lead, index) => (
                      <div key={index} className="bg-slate-800/20 rounded-lg p-4 border border-slate-700/30 hover:border-slate-600/50 transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-white text-sm">{lead.company}</h4>
                              <div className={`w-2 h-2 rounded-full ${
                                lead.priority === 'high' ? 'bg-red-400' : 'bg-yellow-400'
                              }`}></div>
                            </div>
                            <p className="text-xs text-slate-400 mb-1">{lead.contact}</p>
                            <p className="text-xs text-slate-300 mb-2">{lead.status}</p>
                            <div className="flex flex-wrap gap-1">
                              {lead.signals.slice(0, 2).map((signal, idx) => (
                                <span key={idx} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded">
                                  {signal}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-400">{lead.score}%</div>
                            <div className="text-xs text-emerald-400">↗ {lead.trend}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Accuracy Badge */}
                <div className="absolute -bottom-6 -right-6 bg-emerald-900 border border-emerald-500 rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">94%</div>
                    <div className="text-xs text-emerald-300">Signal Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Definition */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-slate-400">Mass Texting is Dead.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Messaging Intelligence is Here.
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              We didn't build another texting tool. We created the first platform that understands buyer psychology, 
              reads conversation intent, and knows exactly when prospects are ready to buy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-800/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-red-900/50 rounded-xl flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Old Way: Mass Texting</h3>
              <ul className="space-y-3 text-red-300">
                <li>• Spray and pray messaging</li>
                <li>• Generic templates for everyone</li>
                <li>• No understanding of buyer intent</li>
                <li>• You sort through all responses</li>
                <li>• High volume, low conversion</li>
                <li>• Feels robotic and spammy</li>
                <li>• Same message to every lead</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-2xl p-8 ring-2 ring-blue-500/20">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">New Way: Messaging Intelligence</h3>
              <ul className="space-y-3 text-blue-300">
                <li>• AI reads 50+ behavioral signals</li>
                <li>• Conversations adapt to each prospect</li>
                <li>• Perfect timing based on psychology</li>
                <li>• Only hot leads reach your desk</li>
                <li>• Smart targeting, high conversion</li>
                <li>• Natural, human-like interactions</li>
                <li>• Every message is personalized</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 border border-emerald-800/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">The Result</h3>
              <ul className="space-y-3 text-emerald-300">
                <li>• 5.2x higher conversion rates</li>
                <li>• 67% less time prospecting</li>
                <li>• Zero spam complaints</li>
                <li>• Conversations that feel human</li>
                <li>• ROI visible in 30 days</li>
                <li>• Qualified leads only</li>
                <li>• Predictable revenue growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Industry Applications */}
      <section id="industries" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Every Industry. Every Use Case.
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Messaging Intelligence works wherever conversations drive revenue. 
              From real estate to SaaS, healthcare to e-commerce — if you need to qualify leads, we make it smarter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Home, 
                title: 'Real Estate', 
                desc: 'Qualify buyers instantly. Know who is ready to tour, who is pre-approved, and who is wasting time.',
                signal: 'Budget confirmed, timeline urgent',
                metrics: ['3.4x more showings', '67% faster sales']
              },
              { 
                icon: Cpu, 
                title: 'SaaS & Tech', 
                desc: 'Identify enterprise buyers. Detect pain points, budget authority, and implementation timelines.',
                signal: 'Security questions, team size, compliance needs',
                metrics: ['2.8x larger deals', '94% qualification accuracy']
              },
              { 
                icon: ShoppingCart, 
                title: 'E-commerce', 
                desc: 'Re-engage cart abandoners. Personalize offers based on browsing behavior and purchase intent.',
                signal: 'Price sensitivity, feature interest, return visitor',
                metrics: ['4.2x recovery rate', '156% AOV increase']
              },
              { 
                icon: Heart, 
                title: 'Healthcare', 
                desc: 'Schedule consultations efficiently. Understand urgency levels and insurance coverage.',
                signal: 'Symptom urgency, insurance status, availability',
                metrics: ['89% show rate', '45% faster booking']
              },
              { 
                icon: Briefcase, 
                title: 'Financial Services', 
                desc: 'Qualify loan applications. Detect credit readiness, income stability, and loan urgency.',
                signal: 'Credit score mentions, income references, timeline',
                metrics: ['78% approval rate', '2.1x faster processing']
              },
              { 
                icon: GraduationCap, 
                title: 'Education', 
                desc: 'Enroll qualified students. Understand program interest, financial readiness, and start dates.',
                signal: 'Program questions, financial aid, start timeline',
                metrics: ['92% enrollment rate', '34% cost reduction']
              }
            ].map((industry, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{industry.desc}</p>
                <div className="text-xs text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full mb-3">
                  🎯 Signals: {industry.signal}
                </div>
                <div className="space-y-1">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs text-emerald-400 flex items-center">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-6">
              Don't see your industry? Messaging Intelligence adapts to any business model.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
              See custom industry implementations →
            </a>
          </div>
        </div>
      </section>

      {/* The 50 Signals Breakdown */}
      <section id="intelligence" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 mb-6">
              <Database className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Proprietary Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              While Others Count Opens,<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                We Read Minds
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our Messaging Intelligence Engine analyzes 50+ behavioral signals in real-time. 
              Every word, timing pattern, and response reveals buyer intent.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-blue-400" />
                  Signal Categories
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      category: 'Behavioral Patterns',
                      signals: ['Response timing', 'Message length', 'Question frequency', 'Follow-up engagement', 'Read receipts', 'Response delay patterns'],
                      color: 'blue'
                    },
                    {
                      category: 'Language Analysis',
                      signals: ['Urgency indicators', 'Pain point mentions', 'Authority language', 'Decision markers', 'Sentiment analysis', 'Confidence levels'],
                      color: 'purple'
                    },
                    {
                      category: 'Intent Signals',
                      signals: ['Budget references', 'Timeline mentions', 'Comparison shopping', 'Feature requests', 'Competitive mentions', 'Price sensitivity'],
                      color: 'emerald'
                    },
                    {
                      category: 'Readiness Indicators',
                      signals: ['Proposal requests', 'Demo interest', 'Pricing questions', 'Implementation talk', 'Contract discussions', 'Next steps'],
                      color: 'pink'
                    }
                  ].map((group, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className={`font-semibold ${
                        group.color === 'blue' ? 'text-blue-400' :
                        group.color === 'purple' ? 'text-purple-400' :
                        group.color === 'emerald' ? 'text-emerald-400' :
                        'text-pink-400'
                      }`}>{group.category}</h4>
                      <ul className="space-y-1">
                        {group.signals.map((signal, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              group.color === 'blue' ? 'bg-blue-400' :
                              group.color === 'purple' ? 'bg-purple-400' :
                              group.color === 'emerald' ? 'bg-emerald-400' :
                              'bg-pink-400'
                            }`}></div>
                            {signal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-blue-300">Behavioral Signals</div>
                </div>
                <div className="text-xs text-slate-300 text-center">
                  Most competitors analyze 3-5 basic metrics. We read the full conversation.
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 border border-emerald-500/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-emerald-400">94%</div>
                  <div className="text-sm text-emerald-300">Accuracy Rate</div>
                </div>
                <div className="text-xs text-slate-300 text-center">
                  When we say a lead is hot, they close 94% of the time.
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-purple-400">Real-time</div>
                  <div className="text-sm text-purple-300">Analysis</div>
                </div>
                <div className="text-xs text-slate-300 text-center">
                  Every message is analyzed instantly. No delays, no batch processing.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo Tabs */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">See Messaging Intelligence in Action</h3>
            
            <div className="flex justify-center mb-6">
              <div className="bg-slate-800/50 rounded-lg p-1">
                {[
                  { id: 'real-time', label: 'Real-time Analysis', icon: Activity },
                  { id: 'conversation', label: 'Conversation Flow', icon: MessageSquare },
                  { id: 'prediction', label: 'Outcome Prediction', icon: TrendingUp }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[300px]">
              {activeTab === 'real-time' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-3">Incoming Message</h4>
                    <div className="bg-slate-700/50 rounded p-3 mb-4 text-slate-300">
                      "Hey, I've been looking at your platform and I need something implemented by Q1. My team of 50 is currently using a competitor but their security isn't meeting our compliance requirements. What's your pricing for enterprise?"
                    </div>
                    <div className="text-sm text-slate-400">Message received • Analyzing...</div>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-3">AI Analysis Results</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Timeline Urgency</span>
                        <span className="text-red-400 font-semibold">HIGH</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Team Size Mentioned</span>
                        <span className="text-emerald-400 font-semibold">50 users</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Competitor Reference</span>
                        <span className="text-blue-400 font-semibold">DETECTED</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Pricing Interest</span>
                        <span className="text-purple-400 font-semibold">ENTERPRISE</span>
                      </div>
                      <div className="border-t border-slate-700 pt-2 mt-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">96%</div>
                          <div className="text-xs text-slate-400">HOT LEAD SCORE</div>
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
                      { sender: 'AI', message: 'Hi Sarah! I noticed you downloaded our enterprise security guide. How\'s your current compliance situation?', time: '2:14 PM' },
                      { sender: 'Lead', message: 'Actually pretty frustrating. Our current tool doesn\'t meet SOC 2 requirements and audit is coming up.', time: '2:16 PM' },
                      { sender: 'AI', message: 'That\'s definitely stressful with audit pressure. We specialize in SOC 2 compliance - when\'s your audit timeline?', time: '2:17 PM' },
                      { sender: 'Lead', message: 'End of Q1. Really need to get this sorted ASAP. Can you do a demo this week?', time: '2:18 PM' }
                    ].map((msg, index) => (
                      <div key={index} className={`flex ${msg.sender === 'AI' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-xs rounded-lg p-3 ${
                          msg.sender === 'AI' 
                            ? 'bg-blue-900/30 text-blue-300' 
                            : 'bg-slate-700/50 text-slate-300'
                        }`}>
                          <div className="text-sm">{msg.message}</div>
                          <div className="text-xs opacity-70 mt-1">{msg.time}</div>
                        </div>
                      </div>
                    ))}
                    <div className="text-center py-4">
                      <div className="inline-flex items-center bg-emerald-900/30 text-emerald-400 px-4 py-2 rounded-full text-sm">
                        <Zap className="w-4 h-4 mr-2" />
                        HOT LEAD: Ready for handoff to sales team
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'prediction' && (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/30 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-bold text-emerald-400 mb-2">94%</div>
                    <div className="text-sm text-slate-400">Likelihood to Close</div>
                    <div className="text-xs text-slate-500 mt-2">Based on 12 positive signals</div>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-blue-400 mb-2">7-14</div>
                    <div className="text-sm text-slate-400">Days to Close</div>
                    <div className="text-xs text-slate-500 mt-2">Timeline urgency detected</div>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">$47K</div>
                    <div className="text-sm text-slate-400">Predicted Deal Size</div>
                    <div className="text-xs text-slate-500 mt-2">Enterprise tier signals</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Differentiation */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Messaging Intelligence Wins
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Compare our revolutionary approach to traditional texting platforms.
            </p>
          </div>
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-700/50">
              <div className="p-6">
                <h3 className="font-semibold text-white mb-4">Feature</h3>
                <div className="space-y-4 text-slate-300">
                  <div>Lead Analysis</div>
                  <div>Conversation Intelligence</div>
                  <div>Timing Optimization</div>
                  <div>Signal Detection</div>
                  <div>Personalization</div>
                  <div>Results Prediction</div>
                  <div>Learning Capability</div>
                  <div>Integration Depth</div>
                </div>
              </div>
              
              <div className="p-6 bg-red-900/10">
                <h3 className="font-semibold text-red-400 mb-4">TextUs</h3>
                <div className="space-y-4 text-slate-400">
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Basic only</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> None</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Manual</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> 2-3 signals</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Templates</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Guesswork</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Static</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Surface</div>
                </div>
              </div>
              
              <div className="p-6 bg-red-900/10">
                <h3 className="font-semibold text-red-400 mb-4">Launch Control</h3>
                <div className="space-y-4 text-slate-400">
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Surface level</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Limited</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Scheduled</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> 5-6 signals</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Basic variables</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Reports only</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Minimal</div>
                  <div className="flex items-center"><X className="w-4 h-4 text-red-400 mr-2" /> Basic</div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <h3 className="font-semibold text-blue-400 mb-4">SurFox Intelligence</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center"><Check className="w-4 h-4 text-emerald-400 mr-2" /> Deep psychology</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-emerald-400 mr-2" /> Full conversation</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-emerald-400 mr-2" /> AI-powered</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-emerald-400 mr-2" /> 50+ signals</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-emerald-400 mr-2" /> Fully adaptive</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-emerald-400 mr-2" /> 94% accuracy</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-emerald-400 mr-2" /> Self-learning</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-emerald-400 mr-2" /> Deep integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Complete Process */}
      <section id="platform" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <Terminal className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">Messaging Intelligence Engine™</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From Cold Lead to Hot Prospect in 4 Steps
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Watch your AI assistant transform conversations using advanced behavioral psychology.
            </p>
          </div>
          
          {/* Visual Progress Flow */}
          <div className="relative mb-12">
            <div className="flex justify-between items-center mb-8">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600"></div>
              {[
                { icon: Database, title: 'Import & Train', color: 'blue' },
                { icon: Brain, title: 'AI Analyzes', color: 'purple' },
                { icon: MessageSquare, title: 'Smart Conversations', color: 'pink' },
                { icon: Zap, title: 'Hot Lead Alert', color: 'emerald' }
              ].map((step, index) => (
                <div key={index} className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${
                    step.color === 'blue' ? 'from-blue-600 to-blue-700' :
                    step.color === 'purple' ? 'from-purple-600 to-purple-700' :
                    step.color === 'pink' ? 'from-pink-600 to-pink-700' :
                    'from-emerald-600 to-emerald-700'
                  } flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-white">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Database, 
                  step: '01', 
                  title: 'Import & Train', 
                  description: 'Chrome extension captures leads instantly. Upload your sales docs, FAQs, and past conversations to train your AI.',
                  features: ['Chrome extension', 'Document upload', 'Past conversation analysis', 'Industry customization'],
                  highlight: 'Setup in 5 minutes'
                },
                { 
                  icon: Brain, 
                  step: '02', 
                  title: 'AI Analyzes Everything', 
                  description: 'AI reads 50+ behavioral signals in real-time, understanding buyer psychology and conversation patterns.',
                  features: ['Behavioral analysis', 'Intent detection', 'Timing optimization', 'Psychology patterns'],
                  highlight: '50+ signals tracked'
                },
                { 
                  icon: MessageSquare, 
                  step: '03', 
                  title: 'Smart Conversations', 
                  description: 'AI adapts tone, timing, and content based on each prospect response and behavioral signals.',
                  features: ['Adaptive messaging', 'Perfect timing', 'Personalized content', 'Natural flow'],
                  highlight: 'Human-like conversations'
                },
                { 
                  icon: Zap, 
                  step: '04', 
                  title: 'Hot Lead Alert', 
                  description: 'Instant notification with full context when AI detects a prospect is ready to buy or take next steps.',
                  features: ['Real-time alerts', 'Full context', 'Readiness scoring', 'Handoff notes'],
                  highlight: '94% accuracy rate'
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-slate-700/50 px-2 py-1 rounded">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-slate-500 flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-xs text-blue-400 font-medium bg-blue-900/20 px-3 py-1 rounded-full">
                      ✨ {item.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1M+', label: 'Conversations Analyzed', icon: MessageSquare },
              { number: '50+', label: 'Behavioral Signals', icon: Brain },
              { number: '94%', label: 'Signal Accuracy', icon: Target },
              { number: '5.2x', label: 'Conversion Increase', icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800/50 rounded-xl mb-4 group-hover:bg-slate-700/50 transition-colors">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Revolutionary Results Across Industries
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See how Messaging Intelligence transforms businesses in every sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I switched from TextUs to SurFox and my lead quality went through the roof. The AI actually understands when someone is serious about buying vs. just browsing. It's like having a sales psychologist analyze every conversation.",
                author: 'Jennifer Martinez',
                role: 'Real Estate Agent',
                company: 'Coldwell Banker',
                industry: 'Real Estate',
                metric: 'Conversion Rate',
                value: '+340%',
                avatar: 'JM',
                additionalMetrics: ['67% faster sales', '3.4x more qualified showings']
              },
              {
                quote: "SurFox's behavioral analysis is incredible. It caught enterprise buying signals in conversations that I would have marked as 'not interested.' The ROI paid for itself in the first month. Complete game changer for B2B sales.",
                author: 'David Chen',
                role: 'VP of Sales',
                company: 'CloudTech Solutions',
                industry: 'SaaS',
                metric: 'Deal Size',
                value: '+280%',
                avatar: 'DC',
                additionalMetrics: ['94% qualification accuracy', '45% shorter sales cycle']
              },
              {
                quote: "The platform pays for itself in week one. It's like having a sales psychologist analyzing every conversation and telling you exactly when to strike. Our cart abandonment recovery went from 12% to 47%.",
                author: 'Sarah Williams',
                role: 'E-commerce Director',
                company: 'Fashion Forward',
                industry: 'E-commerce',
                metric: 'Revenue/Lead',
                value: '+425%',
                avatar: 'SW',
                additionalMetrics: ['4.2x cart recovery', '156% AOV increase']
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all">
                <div className="text-4xl text-blue-400/20 mb-4">"</div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="border-t border-slate-700/50 pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="text-lg font-bold text-emerald-400">{testimonial.value}</div>
                      <div className="text-xs text-slate-400">{testimonial.metric}</div>
                    </div>
                    <div className="text-xs text-slate-500 bg-slate-700/30 px-2 py-1 rounded">
                      {testimonial.industry}
                    </div>
                  </div>
                  <div className="space-y-1">
                    {testimonial.additionalMetrics.map((metric, idx) => (
                      <div key={idx} className="text-xs text-blue-400">• {metric}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pricing That Scales With Your Success
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Start with our Intelligence Engine and scale up as your messaging volume grows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter Intelligence',
                description: 'Perfect for solo entrepreneurs',
                price: '$197',
                period: 'per month',
                features: [
                  'Up to 1,000 conversations/month',
                  '25+ behavioral signals analyzed',
                  'Chrome extension for lead import',
                  'Basic AI training with past conversations',
                  'Real-time hot lead alerts',
                  'Email support'
                ],
                cta: 'Start Free Trial',
                popular: false,
                highlight: 'Most Popular for Solo'
              },
              {
                name: 'Growth Intelligence',
                description: 'For growing teams and agencies',
                price: '$397',
                period: 'per month',
                features: [
                  'Up to 10,000 conversations/month',
                  'All 50+ behavioral signals',
                  'Advanced document training',
                  'Custom conversation flows',
                  'Team collaboration tools',
                  'Zapier integrations',
                  'Priority support'
                ],
                cta: 'Start Free Trial',
                popular: true,
                highlight: 'Best Value'
              },
              {
                name: 'Enterprise Intelligence',
                description: 'For large organizations',
                price: 'Custom',
                period: 'contact sales',
                features: [
                  'Unlimited conversations',
                  'Custom signal development',
                  'White-label options',
                  'Multi-tenant controls',
                  'Advanced analytics dashboard',
                  'Dedicated success manager',
                  'Custom integrations'
                ],
                cta: 'Contact Sales',
                popular: false,
                highlight: 'Maximum Intelligence'
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/30 border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-blue-500/50 ring-1 ring-blue-500/20' 
                  : 'border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                  <div className="text-sm text-slate-400">{plan.period}</div>
                  <div className="text-xs text-blue-400 mt-2">{plan.highlight}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className={`block text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                    : 'border border-slate-600 text-slate-300 hover:bg-slate-700/50'
                }`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">
              All plans include: Messaging Intelligence Engine • Real-time signal analysis • 14-day free trial • No setup fees
            </p>
            <a href="/enterprise" className="text-blue-400 hover:text-blue-300 font-medium">
              Need custom signals or higher volume? Explore Enterprise options →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about Messaging Intelligence.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'What makes SurFox different from TextUs, Launch Control, or Smarter Contact?',
                answer: 'While traditional platforms focus on mass messaging, SurFox created the first Messaging Intelligence Engine that analyzes 50+ behavioral signals in real-time. We don\'t just send messages - we understand buyer psychology, predict intent, and know exactly when prospects are ready to buy. It\'s the difference between throwing darts blindfolded and having a sales psychologist guide every conversation.'
              },
              {
                question: 'How does the 50+ signal analysis actually work?',
                answer: 'Our AI analyzes everything from response timing patterns and message length to urgency indicators, pain point mentions, budget signals, and decision-making language. For example, if someone responds within 2 minutes, asks about implementation timelines, and mentions team size - that\'s a completely different signal profile than someone who takes 3 days to reply with one-word answers. We\'ve trained our system to recognize these psychological patterns that indicate buying intent.'
              },
              {
                question: 'Can this work for my industry? I am not in real estate.',
                answer: 'Absolutely! Messaging Intelligence works wherever conversations drive revenue. We are used across real estate, SaaS, e-commerce, healthcare, financial services, education, and many more industries. The behavioral psychology of buying is universal - whether someone is ready to buy a house, sign a software contract, or schedule a medical consultation, the signals are remarkably similar. Our AI adapts to your specific industry terminology and buying patterns.'
              },
              {
                question: 'How accurate is the "94% hot lead accuracy" claim?',
                answer: 'When our system marks a lead as "hot" (96%+ score), they convert to the next step 94% of the time. This could mean booking a demo, requesting a proposal, or making a purchase - whatever your next step is. We have analyzed over 1 million conversations to train this accuracy. The key is we only alert you when we are highly confident, so you are not chasing false positives.'
              },
              {
                question: 'Do I need technical skills to set this up?',
                answer: 'Not at all! Our Chrome extension handles lead import automatically, and you can train your AI by simply uploading documents like FAQs, product sheets, or past successful conversations. Most users are having intelligent conversations within 15 minutes of signing up. The hardest part is usually deciding which conversations to review first when the hot leads start rolling in.'
              },
              {
                question: 'How does this integrate with my existing CRM and tools?',
                answer: 'SurFox integrates with popular CRMs through Zapier (thousands of apps available), plus we have direct integrations with major platforms. Our Chrome extension works with any web-based system, and we can sync lead scoring, conversation history, and hot lead alerts directly into your existing workflow. For enterprise customers, we offer custom API integrations.'
              },
              {
                question: 'What happens during the 14-day free trial?',
                answer: 'You get full access to our Messaging Intelligence Engine with up to 500 conversations included. Upload your leads, train the AI with your documents, and start having conversations immediately. You will see the behavioral signal analysis in real-time and get hot lead alerts when prospects are ready. No credit card required, and you can cancel anytime if you are not amazed by the results.'
              },
              {
                question: 'Is this compliant with TCPA and other messaging regulations?',
                answer: 'Yes, SurFox is fully TCPA compliant and includes built-in opt-out management, consent tracking, and compliance monitoring. Our Messaging Intelligence actually helps with compliance because we focus on quality conversations with engaged prospects rather than mass blasting. The AI naturally creates more consent-friendly interactions because it reads engagement signals and adapts accordingly.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700/30 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <span className="font-medium text-white pr-4">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                    activeFaq === index ? 'transform rotate-180' : ''
                  }`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 text-slate-300 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Deep Dive */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Sales Problem Everyone Faces
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Traditional messaging tools create more problems than they solve. Here's how Messaging Intelligence fixes everything.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <X className="w-6 h-6 mr-3" />
                Traditional Sales Struggles
              </h3>
              <ul className="space-y-4">
                {[
                  'Manually sorting through hundreds of unqualified responses',
                  'Missing hot prospects while they\'re actively interested',
                  'Sending the same generic message to every lead type',
                  'No idea which leads are actually ready to buy vs. just browsing',
                  'Burning out from repetitive qualification conversations',
                  'Compliance headaches from mass messaging approaches',
                  'Inconsistent follow-up timing based on gut feeling',
                  'No data on what messaging actually converts'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-red-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 border border-emerald-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center">
                <Check className="w-6 h-6 mr-3" />
                Messaging Intelligence Solution
              </h3>
              <ul className="space-y-4">
                {[
                  'AI automatically qualifies leads using behavioral psychology',
                  'Real-time alerts the moment prospects show buying intent',
                  'Every conversation adapts to the individual prospect\'s signals',
                  'Precise buyer readiness scoring based on 50+ data points',
                  'Focus on closing deals while AI handles qualification',
                  'Compliant, consent-friendly conversations that feel natural',
                  'Perfect timing based on prospect behavior patterns',
                  'Complete analytics on what drives conversions'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-emerald-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">The Bottom Line</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Stop playing the numbers game with mass messaging. Start having intelligent conversations that actually convert. 
                <strong className="text-blue-400"> Messaging Intelligence</strong> doesn't just save time — it fundamentally changes 
                how you identify and engage your best prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border border-blue-500/30 text-sm font-medium">
              <Brain className="w-4 h-4 mr-2" />
              Join the Messaging Intelligence Revolution
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready to Read Your Prospects' Minds?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Stop guessing when prospects are ready to buy. Start knowing with 94% accuracy. 
            Experience the future of sales conversations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center text-lg">
              Start Your Intelligence Engine
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800/50 transition-all text-lg">
              See Live Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-2 text-emerald-400" />
              50+ signals included
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              94% accuracy guarantee
            </div>
          </div>
          
          <div className="text-sm text-slate-500 mt-4">
            No credit card required • Setup in 5 minutes • Works with any industry
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold tracking-tight">
                  <span className="text-white">Sur</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fox</span>
                </span>
              </div>
              <p className="text-slate-400 mb-4">The world's first Messaging Intelligence platform.</p>
              <p className="text-sm text-slate-500 mb-6">Transforming conversations across every industry with behavioral AI.</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-400">50+ Signal Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-400">94% Accuracy</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Messaging Intelligence</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Signal Analysis</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Conversation AI</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Chrome Extension</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Real Estate</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">SaaS & Tech</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">All Industries</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 SurFox AI, Inc. Leading the Messaging Intelligence revolution.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-emerald-400 text-sm flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                Messaging Intelligence™ Active
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SurFoxRevolution