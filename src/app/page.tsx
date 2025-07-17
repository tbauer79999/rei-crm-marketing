'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch } from 'lucide-react'

const EnterpriseSurFox = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('analytics')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
                <Terminal className="w-4 h-4 text-white" />
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
                Intelligence Engine
              </a>
              <a href="/enterprise" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Enterprise</a>
              <a href="/security" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Security</a>
              <div className="w-px h-6 bg-slate-700"></div>
              <a href="https://app.getsurfox.com/login" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Sign In</a>
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
              <a href="#intelligence" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Intelligence Engine</a>
              <a href="/enterprise" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Enterprise</a>
              <a href="/security" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Security</a>
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

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Gradient Orbs with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl"
            style={{
              top: '10%',
              right: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
            style={{
              bottom: '20%',
              left: '10%',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50">
                  <Cpu className="w-3 h-3 mr-2" />
                  AI-Powered Platform
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">AI Messaging That</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Scales With You
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-4 leading-relaxed max-w-2xl">
                From solo hustlers to national teams — close leads faster with SurFox.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
                Your AI assistant engages prospects via text, learns from every conversation, and delivers qualified leads when they're ready to buy. Just upload your data and let AI do the heavy lifting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#intelligence" className="group border border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  See How It Works
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-sm">
                <div className="flex items-center text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400 mr-2" />
                  Chrome Extension
                </div>
                <div className="flex items-center text-slate-400">
                  <Lock className="w-4 h-4 text-emerald-400 mr-2" />
                  Self-Learning AI
                </div>
                <div className="flex items-center text-slate-400">
                  <Award className="w-4 h-4 text-emerald-400 mr-2" />
                  99.9% Uptime
                </div>
              </div>
            </div>
            
            {/* Dashboard */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-blue-400" />
                      Intelligence Engine™
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400">Live Analysis</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700/30">
                      <div className="text-2xl font-bold text-blue-400">2.8K</div>
                      <div className="text-xs text-slate-400">Active Leads</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700/30">
                      <div className="text-2xl font-bold text-emerald-400">94%</div>
                      <div className="text-xs text-slate-400">Conversion Rate</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700/30">
                      <div className="text-2xl font-bold text-purple-400">347</div>
                      <div className="text-xs text-slate-400">Ready to Close</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { 
                        company: 'Acme Corp', 
                        contact: 'Sarah Mitchell', 
                        status: 'Asked about enterprise pricing • Mentioned Q1 budget', 
                        score: 96, 
                        trend: '+12',
                        priority: 'high'
                      },
                      { 
                        company: 'TechFlow Inc', 
                        contact: 'Marcus Chen', 
                        status: 'Inquired about security features • Ready for demo', 
                        score: 92, 
                        trend: '+8',
                        priority: 'high'
                      },
                      { 
                        company: 'DataVault Systems', 
                        contact: 'Jennifer Wu', 
                        status: 'Requesting compliance documentation', 
                        score: 88, 
                        trend: '+15',
                        priority: 'medium'
                      }
                    ].map((lead, index) => (
                      <div key={index} className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30 hover:border-slate-600/50 transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-white text-sm">{lead.company}</h4>
                              <div className={`w-2 h-2 rounded-full ${
                                lead.priority === 'high' ? 'bg-red-400' : 'bg-yellow-400'
                              }`}></div>
                            </div>
                            <p className="text-xs text-slate-400 mb-1">{lead.contact}</p>
                            <p className="text-xs text-slate-300">{lead.status}</p>
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
                
                {/* Floating Analytics Card */}
                <div className="absolute -bottom-8 -left-8 bg-slate-900 border border-slate-700 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">5.2x</div>
                      <div className="text-xs text-slate-400">Conversion Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SurFox Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Most Platforms Blast. SurFox Engages.</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-slate-300">
            Other platforms send mass messages and hope someone replies. SurFox opens real conversations — and keeps them going until the lead is ready to talk.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-slate-600/50 transition-all">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-blue-400" />
                Self-Learning Follow-Up
              </h3>
              <p className="text-slate-300">SurFox adapts message tone, pacing, and content based on each lead's behavior.</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-slate-600/50 transition-all">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Target className="w-5 h-5 mr-2 text-emerald-400" />
                Qualified Conversations Only
              </h3>
              <p className="text-slate-300">You only step in when AI says the lead is ready. Less noise. More signal.</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-slate-600/50 transition-all">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                Feels Human, Not Robotic
              </h3>
              <p className="text-slate-300">AI messages sound natural — like your best sales rep, not a bot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SurFox vs Others Comparison */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-10">SurFox vs Everyone Else</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 border border-red-800/30 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-red-400">
                <X className="w-6 h-6 mr-3" />
                Other Tools
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-red-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Bulk blasts with no context</span>
                </li>
                <li className="flex items-start text-red-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>No follow-up intelligence</span>
                </li>
                <li className="flex items-start text-red-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>All leads treated the same</span>
                </li>
                <li className="flex items-start text-red-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>You do all the work</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/50 p-8 rounded-xl shadow-lg ring-1 ring-blue-500/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-blue-400">
                <Check className="w-6 h-6 mr-3" />
                SurFox
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Conversational AI that adapts</span>
                </li>
                <li className="flex items-start text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Smart follow-ups that learn</span>
                </li>
                <li className="flex items-start text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Lead scoring built in</span>
                </li>
                <li className="flex items-start text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>You jump in only when it's hot</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Conversation Example */}
      <section className="bg-slate-900/50 text-white py-16 px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Real Engagement Looks Like</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-red-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-400 flex items-center">
                <X className="w-5 h-5 mr-2" />
                Other Tools
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-700/50 p-3 rounded">
                  <span className="text-slate-400">Message 1:</span> "Hi, are you selling?"
                </div>
                <div className="bg-slate-700/50 p-3 rounded">
                  <span className="text-slate-400">Message 2:</span> "Hi, are you selling?"
                </div>
                <div className="bg-slate-700/50 p-3 rounded">
                  <span className="text-slate-400">Message 3:</span> "Hi, are you selling?"
                </div>
                <div className="text-red-400 text-center font-medium">No replies. Lead lost.</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                <Check className="w-5 h-5 mr-2" />
                SurFox AI
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-blue-900/30 p-3 rounded">
                  <span className="text-blue-400">AI:</span> "Hey — wasn't sure if this was still your number. If you're still thinking about selling, I can keep it simple for you."
                </div>
                <div className="text-center text-slate-400 text-xs py-2">... [no reply for 3 days]</div>
                <div className="bg-blue-900/30 p-3 rounded">
                  <span className="text-blue-400">AI:</span> "Just checking in — totally fine if not the right time."
                </div>
                <div className="bg-emerald-900/30 p-3 rounded">
                  <span className="text-emerald-400">Lead:</span> "Yeah I might be. What's your offer?"
                </div>
                <div className="text-emerald-400 text-center font-medium">🔥 Hot lead ready for handoff!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for Teams of All Sizes
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Whether you're a solo entrepreneur or managing enterprise sales, SurFox adapts to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Solo & Small Teams</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                  Get started in minutes with Chrome extension
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                  AI learns from your conversations automatically
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                  Upload documents to train your AI assistant
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                  Dynamic follow-ups when prospects are ready
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 border border-blue-500/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all ring-1 ring-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Growing Businesses</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Automate conversations across multiple campaigns
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Track AI performance and lead quality metrics
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Customize follow-up pacing and urgency
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Zapier integrations for workflow automation
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Agencies & Enterprise</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  Multi-tenant controls for client management
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  Team-level settings and custom AI roles
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  Priority support and white-labeled operations
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  Advanced reporting and analytics dashboards
                </li>
              </ul>
              <div className="mt-6">
                <a href="/enterprise" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  Learn more about Enterprise →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100K+', label: 'Conversations Processed', icon: Database },
              { number: '94%', label: 'Lead Conversion Rate', icon: Target },
              { number: 'Auto', label: 'Smart Follow-ups', icon: Brain },
              { number: '99.9%', label: 'Platform Uptime', icon: Shield }
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

      {/* Problem/Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sales Challenges, Solved
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From managing a few leads to scaling thousands, SurFox transforms how you handle sales conversations.
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
                  'Manually sorting through endless leads',
                  'Missing hot prospects while they\'re interested',
                  'Inconsistent follow-up and messaging',
                  'No idea which leads are actually ready to buy',
                  'Burning out from repetitive qualification tasks'
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
                SurFox AI Solution
              </h3>
              <ul className="space-y-4">
                {[
                  'AI automatically qualifies and prioritizes leads',
                  'Real-time alerts when prospects are ready to engage',
                  'Consistent, intelligent messaging that converts',
                  'Precise buyer intent scoring and readiness signals',
                  'Focus on closing while AI handles qualification'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-emerald-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced Visual Flow */}
      <section id="intelligence" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <Terminal className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">Messaging Intelligence Engine™</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From Upload to Hot Lead in 4 Steps
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Watch your AI assistant turn cold contacts into qualified conversations automatically.
            </p>
          </div>
          
          {/* Visual Progress Flow */}
          <div className="relative mb-12">
            <div className="flex justify-between items-center mb-8">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600"></div>
              {[
                { icon: Database, title: 'Upload Leads', color: 'blue' },
                { icon: Brain, title: 'AI Starts Conversations', color: 'purple' },
                { icon: Target, title: 'Auto Follow-Ups', color: 'pink' },
                { icon: Zap, title: 'You Jump in When Hot', color: 'emerald' }
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
                  title: 'Upload Your Data', 
                  description: 'Chrome extension imports leads instantly. Upload docs to train your AI on your business.',
                  highlight: 'Chrome Extension Ready'
                },
                { 
                  icon: Brain, 
                  step: '02', 
                  title: 'AI Starts Engaging', 
                  description: 'AI opens natural conversations, learning from every interaction to improve over time.',
                  highlight: 'Self-Learning AI'
                },
                { 
                  icon: Target, 
                  step: '03', 
                  title: 'Smart Follow-ups', 
                  description: 'Perfect timing based on prospect behavior. No more guessing when to reach out.',
                  highlight: 'Behavioral Triggers'
                },
                { 
                  icon: Zap, 
                  step: '04', 
                  title: 'Hot Lead Alert', 
                  description: 'Instant notification with full context when prospects are ready to close.',
                  highlight: 'Ready to Close'
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
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>
                    <div className="text-xs text-blue-400 font-medium">
                      ✨ {item.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Loved by Teams of All Sizes
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From solo entrepreneurs to enterprise sales teams, SurFox delivers results across every business size.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "As a solo consultant, SurFox helps me qualify leads while I'm focused on client work. The AI picks up buying signals I would have missed completely.",
                author: 'Mike Chen',
                role: 'Freelance Marketing Consultant',
                company: 'Solo Business',
                logo: 'MC',
                metric: 'Time Saved',
                value: '15+ hrs/week',
                size: 'Solo'
              },
              {
                quote: "SurFox transformed our sales process. The AI-driven insights helped us identify high-value prospects 3x faster and increased our deal velocity by 40%.",
                author: 'Sarah Mitchell',
                role: 'VP of Sales',
                company: 'GrowthTech',
                logo: 'GT',
                metric: 'Deal Velocity',
                value: '+40%',
                size: 'Scale-up'
              },
              {
                quote: "The platform's seamless integration made adoption smooth across our global sales organization. ROI was clear within 60 days.",
                author: 'Marcus Rodriguez',
                role: 'Chief Revenue Officer',
                company: 'Global Systems Inc',
                logo: 'GS',
                metric: 'Sales Efficiency',
                value: '+67%',
                size: 'Enterprise'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all">
                <div className="text-4xl text-blue-400/20 mb-4">"</div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.logo}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="border-t border-slate-700/50 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-blue-400">{testimonial.value}</div>
                      <div className="text-xs text-slate-400">{testimonial.metric}</div>
                    </div>
                    <div className="text-xs text-slate-500 bg-slate-700/30 px-2 py-1 rounded">
                      {testimonial.size}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pricing That Grows With You
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Start small and scale up. Pay for what you need, when you need it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                description: 'Perfect for solo entrepreneurs',
                price: '$197',
                period: 'per month',
                features: [
                  'Up to 1,000 conversations/month',
                  'Chrome extension for easy import',
                  'AI learns from 100 past conversations',
                  'Basic scoring and alerts',
                  'Email support'
                ],
                cta: 'Start Free Trial',
                popular: false
              },
              {
                name: 'Growth',
                description: 'For growing teams and agencies',
                price: '$397',
                period: 'per month',
                features: [
                  'Up to 10,000 conversations/month',
                  'Advanced AI training with documents',
                  'Zapier integrations',
                  'Custom follow-up sequences',
                  'Priority support',
                  'Team collaboration tools'
                ],
                cta: 'Start Free Trial',
                popular: true
              },
              {
                name: 'Enterprise',
                description: 'For large organizations',
                price: '$997',
                period: 'contact sales',
                features: [
                  'Unlimited conversations',
                  'White-label options',
                  'Multi-tenant controls',
                  'Custom AI model training',
                  'Dedicated support',
                  'Advanced analytics'
                ],
                cta: 'Contact Sales',
                popular: false
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
              All plans include: AI-powered lead scoring • Real-time alerts • 14-day free trial • No setup fees
            </p>
            <a href="/enterprise" className="text-blue-400 hover:text-blue-300 font-medium">
              Need something bigger? Explore Enterprise options →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about getting started with SurFox.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'How does the AI learn from my conversations?',
                answer: 'SurFox analyzes your past 100 conversations to understand your sales style, customer pain points, and what signals indicate a hot lead. The more conversations you have, the smarter your AI assistant becomes at identifying qualified prospects and timing follow-ups perfectly.'
              },
              {
                question: 'Can I train the AI with my own documents and materials?',
                answer: 'Absolutely! You can upload reference documents, product sheets, FAQs, and other materials to help your AI assistant understand your business better. This allows for more accurate and contextually relevant conversations with your prospects.'
              },
              {
                question: 'How does the Chrome extension work for importing leads?',
                answer: 'Our Chrome extension makes it incredibly easy to import leads from any website, social platform, or web app without needing complex integrations. Just click the extension button and your lead data is automatically captured and ready for AI engagement.'
              },
              {
                question: 'What integrations are available?',
                answer: 'SurFox integrates with Zapier, giving you access to thousands of apps and services. Connect your CRM, email platforms, marketing tools, and more. No need for complex technical setup - most integrations can be configured in minutes.'
              },
              {
                question: 'How accurate is the AI at identifying hot leads?',
                answer: 'Our AI maintains a 94% accuracy rate in identifying qualified leads ready to engage. The system analyzes conversation patterns, response timing, questions asked, and dozens of other behavioral signals to score lead quality and buying intent.'
              },
              {
                question: 'Do I need technical skills to get started?',
                answer: 'Not at all! SurFox is designed for solo entrepreneurs and small teams without technical resources. The Chrome extension, document upload, and Zapier integrations make setup simple. Most users are up and running within 15 minutes of signing up.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700/30 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
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

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Sales?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using SurFox to identify and close their best prospects faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all">
              Book a Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-emerald-400" />
              No setup fees
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              Cancel anytime
            </div>
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
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-semibold tracking-tight">
                  <span className="text-white">Sur</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fox</span>
                </span>
              </div>
              <p className="text-slate-400 mb-4">AI messaging platform that scales with you.</p>
              <p className="text-sm text-slate-500 mb-6">Built with enterprise-grade AI. Trusted by teams of all sizes.</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-400">Chrome Extension</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-400">Self-Learning AI</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Intelligence Engine</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Chrome Extension</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Business</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/enterprise" className="text-slate-400 hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Agencies</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 SurFox AI, Inc. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm">Status</span>
              <span className="text-slate-400 text-sm">•</span>
              <span className="text-emerald-400 text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EnterpriseSurFox