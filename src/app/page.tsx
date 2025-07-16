'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Check, X, Phone, Zap, Target, Users, Filter, TrendingUp, BarChart3, Brain, Settings, Star, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Command, Terminal, GitBranch } from 'lucide-react'

const EnterpriseSurFox = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('analytics')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [typingText, setTypingText] = useState('Enterprise Leads')
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

  // Typing animation for enterprise terms
  useEffect(() => {
    const words = ['Enterprise Leads', 'B2B Prospects', 'Key Accounts', 'Decision Makers']
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeAnimation = () => {
      const currentWord = words[wordIndex]
      
      if (isDeleting) {
        setTypingText(currentWord.substring(0, charIndex - 1))
        charIndex--
      } else {
        setTypingText(currentWord.substring(0, charIndex + 1))
        charIndex++
      }
      
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true
        setTimeout(typeAnimation, 2000)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        setTimeout(typeAnimation, 500)
      } else {
        setTimeout(typeAnimation, isDeleting ? 80 : 120)
      }
    }

    const timeout = setTimeout(typeAnimation, 1000)
    return () => clearTimeout(timeout)
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
              <a href="#enterprise" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Enterprise
              </a>
              <a href="#security" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Security
              </a>
              <div className="w-px h-6 bg-slate-700"></div>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Request Demo
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
              <a href="#enterprise" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Enterprise</a>
              <a href="#security" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">Security</a>
              <div className="pt-4 border-t border-slate-800">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium mb-3">Sign In</a>
                <a href="#" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                  Request Demo
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
                <span className="text-white">Transform Cold</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {typingText}
                  <span className="animate-pulse text-blue-400">|</span>
                </span>
                <br />
                <span className="text-white">at Scale</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                The Messaging Intelligence Engine™ leverages advanced AI to analyze 
                <span className="text-blue-400 font-semibold"> 50+ behavioral data points</span> 
                in real-time, delivering qualified prospects when they're ready to engage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="group border border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Platform Overview
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-sm">
                <div className="flex items-center text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400 mr-2" />
                  SOC 2 Type II
                </div>
                <div className="flex items-center text-slate-400">
                  <Lock className="w-4 h-4 text-emerald-400 mr-2" />
                  GDPR Compliant
                </div>
                <div className="flex items-center text-slate-400">
                  <Award className="w-4 h-4 text-emerald-400 mr-2" />
                  99.9% SLA
                </div>
              </div>
            </div>
            
            {/* Enterprise Dashboard */}
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
                      <div className="text-xs text-slate-400">Accuracy</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700/30">
                      <div className="text-2xl font-bold text-purple-400">347</div>
                      <div className="text-xs text-slate-400">Ready Now</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { 
                        company: 'Acme Corp', 
                        contact: 'Sarah Mitchell', 
                        status: 'Enterprise budget confirmed • Timeline: Q1', 
                        score: 96, 
                        trend: '+12',
                        priority: 'high'
                      },
                      { 
                        company: 'TechFlow Inc', 
                        contact: 'Marcus Chen', 
                        status: 'Security review initiated • Stakeholder mapping', 
                        score: 92, 
                        trend: '+8',
                        priority: 'high'
                      },
                      { 
                        company: 'DataVault Systems', 
                        contact: 'Jennifer Wu', 
                        status: 'Compliance requirements discussion started', 
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

      {/* Enterprise Stats */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500K+', label: 'Leads Processed Daily', icon: Database },
              { number: '94%', label: 'Prediction Accuracy', icon: Target },
              { number: '50+', label: 'Data Points Analyzed', icon: Brain },
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

      {/* Problem/Solution - Enterprise Focus */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              B2B Sales at Scale
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transform your sales process with AI-driven lead intelligence and qualification.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <X className="w-6 h-6 mr-3" />
                Traditional B2B Sales
              </h3>
              <ul className="space-y-4">
                {[
                  'Manual lead qualification wastes resources',
                  'Long sales cycles with low conversion rates',
                  'Inconsistent prospect engagement strategies',
                  'Limited visibility into buyer readiness',
                  'Difficulty scaling personalized outreach'
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
                SurFox Intelligence Platform
              </h3>
              <ul className="space-y-4">
                {[
                  'AI-powered qualification at scale',
                  'Accelerated sales cycles with higher close rates',
                  'Consistent, intelligent prospect engagement',
                  'Real-time buyer intent and readiness scoring',
                  'Automated personalization across all touchpoints'
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

      {/* Intelligence Engine Process */}
      <section id="intelligence" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <Terminal className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">Messaging Intelligence Engine™</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced AI Processing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced machine learning algorithms analyze behavioral patterns, contextual signals, and engagement data to deliver precision lead qualification.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Database, 
                  step: '01', 
                  title: 'Data Ingestion', 
                  description: 'Seamlessly integrate with your existing CRM, marketing automation, and data sources through robust APIs.' 
                },
                { 
                  icon: Brain, 
                  step: '02', 
                  title: 'AI Analysis', 
                  description: 'Our proprietary algorithms analyze 50+ behavioral and contextual data points in real-time.' 
                },
                { 
                  icon: Target, 
                  step: '03', 
                  title: 'Intent Scoring', 
                  description: 'Advanced scoring models predict buyer readiness with 94% accuracy across business segments.' 
                },
                { 
                  icon: Zap, 
                  step: '04', 
                  title: 'Intelligent Routing', 
                  description: 'Qualified leads are automatically routed to appropriate sales teams with full context and timing.' 
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-mono text-slate-500">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-700 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Professional Platform Features
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built for scale with advanced analytics, security, and integration capabilities.
            </p>
          </div>
          
          <div>
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              {[
                { id: 'analytics', label: 'Advanced Analytics', icon: BarChart3 },
                { id: 'ai', label: 'AI Engine', icon: Brain },
                { id: 'integrations', label: 'Integrations', icon: GitBranch },
                { id: 'security', label: 'Security & Compliance', icon: Shield }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 text-sm ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {activeTab === 'analytics' && (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Professional Intelligence Dashboard
                    </h3>
                    <p className="text-lg text-slate-400 mb-6">
                      Monitor lead progression, engagement patterns, and conversion metrics with advanced analytics and reporting capabilities.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Custom KPI dashboards and reporting',
                        'Predictive analytics and forecasting',
                        'Multi-dimensional lead scoring',
                        'Advanced segmentation and filtering'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {activeTab === 'ai' && (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Proprietary AI Engine
                    </h3>
                    <p className="text-lg text-slate-400 mb-6">
                      Advanced machine learning models trained on enterprise B2B sales data to deliver accurate predictions and insights.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Natural language processing for sentiment analysis',
                        'Behavioral pattern recognition and clustering',
                        'Dynamic scoring model adaptation',
                        'Continuous learning and optimization'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {activeTab === 'integrations' && (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Platform Integrations
                    </h3>
                    <p className="text-lg text-slate-400 mb-6">
                      Seamlessly connect with your existing tech stack through robust APIs and pre-built integrations.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Salesforce, HubSpot, and Microsoft Dynamics',
                        'Marketing automation platforms (Marketo, Pardot)',
                        'Data warehouses and business intelligence tools',
                        'Custom API integrations and webhooks'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {activeTab === 'security' && (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Security & Compliance
                    </h3>
                    <p className="text-lg text-slate-400 mb-6">
                      Bank-level security with comprehensive compliance frameworks to protect your business data.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'SOC 2 Type II certified infrastructure',
                        'GDPR and CCPA compliance framework',
                        'End-to-end encryption and data protection',
                        'Role-based access control and audit trails'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              <div>
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                  <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">
                        {activeTab === 'analytics' && 'Enterprise Analytics Dashboard'}
                        {activeTab === 'ai' && 'AI Engine Performance'}
                        {activeTab === 'integrations' && 'Integration Management'}
                        {activeTab === 'security' && 'Security Center'}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-xs text-slate-400">Live</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {activeTab === 'analytics' && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                            <div className="text-sm text-slate-400 mb-1">Lead Velocity</div>
                            <div className="text-2xl font-bold text-blue-400">+34%</div>
                          </div>
                          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                            <div className="text-sm text-slate-400 mb-1">Conversion Rate</div>
                            <div className="text-2xl font-bold text-emerald-400">23.7%</div>
                          </div>
                        </div>
                        <div className="h-32 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-slate-700/30 flex items-center justify-center">
                          <TrendingUp className="w-8 h-8 text-slate-400" />
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'ai' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30">
                            <div className="text-sm text-slate-400">Model Accuracy</div>
                            <div className="text-xl font-bold text-purple-400">94.3%</div>
                          </div>
                          <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30">
                            <div className="text-sm text-slate-400">Processing Speed</div>
                            <div className="text-xl font-bold text-blue-400">2.1ms</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {['Neural Network Training', 'Pattern Recognition', 'Sentiment Analysis'].map((process, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-slate-800/20 rounded border border-slate-700/20">
                              <span className="text-sm text-slate-300">{process}</span>
                              <div className="w-16 h-2 bg-slate-700 rounded overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400" style={{ width: `${85 + i * 5}%` }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'integrations' && (
                      <div className="space-y-4">
                        {[
                          { name: 'Salesforce', status: 'Connected', health: 'green' },
                          { name: 'Microsoft Dynamics', status: 'Connected', health: 'green' },
                          { name: 'Marketo', status: 'Syncing', health: 'yellow' },
                          { name: 'Snowflake', status: 'Connected', health: 'green' }
                        ].map((integration, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-slate-800/20 rounded border border-slate-700/20">
                            <span className="text-sm text-slate-300">{integration.name}</span>
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${
                                integration.health === 'green' ? 'bg-emerald-400' : 'bg-yellow-400'
                              }`}></div>
                              <span className="text-xs text-slate-400">{integration.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {activeTab === 'security' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30 text-center">
                            <div className="text-xl font-bold text-emerald-400">99.9%</div>
                            <div className="text-xs text-slate-400">Uptime SLA</div>
                          </div>
                          <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30 text-center">
                            <div className="text-xl font-bold text-blue-400">256-bit</div>
                            <div className="text-xs text-slate-400">Encryption</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[
                            { item: 'SOC 2 Type II', status: 'Certified' },
                            { item: 'GDPR Compliance', status: 'Active' },
                            { item: 'Data Residency', status: 'Configured' },
                            { item: 'Access Controls', status: 'Enforced' }
                          ].map((security, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-slate-800/20 rounded border border-slate-700/20">
                              <span className="text-sm text-slate-300">{security.item}</span>
                              <span className="text-xs text-emerald-400">{security.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Testimonials */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Global organizations rely on SurFox to scale their sales operations and drive predictable revenue growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SurFox transformed our sales process. The AI-driven insights helped us identify high-value prospects 3x faster and increased our deal velocity by 40%.",
                author: 'Sarah Chen',
                role: 'VP of Sales',
                company: 'TechCorp',
                logo: 'TC',
                metric: 'Deal Velocity',
                value: '+40%',
                size: 'Fortune 500'
              },
              {
                quote: "The platform's security compliance and seamless integration with our existing tech stack made adoption seamless across our global sales organization.",
                author: 'Marcus Rodriguez',
                role: 'Chief Revenue Officer',
                company: 'Global Systems Inc',
                logo: 'GS',
                metric: 'Sales Efficiency',
                value: '+67%',
                size: '10K+ Employees'
              },
              {
                quote: "Real-time lead intelligence at scale. SurFox helps us focus on prospects ready to engage, resulting in higher conversion rates and shorter sales cycles.",
                author: 'Jennifer Wu',
                role: 'EVP Sales Operations',
                company: 'Innovation Partners',
                logo: 'IP',
                metric: 'Conversion Rate',
                value: '+5.2x',
                size: 'Large Business'
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

      {/* Enterprise Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Professional Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Flexible pricing models designed for scale and business requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Professional',
                description: 'For growing sales teams',
                price: 'Custom',
                period: 'per user/month',
                features: [
                  'Up to 10,000 leads/month',
                  'Advanced analytics dashboard',
                  'Standard integrations',
                  'Email support',
                  'Basic compliance features'
                ],
                cta: 'Contact Sales',
                popular: false
              },
              {
                name: 'Business',
                description: 'For large organizations',
                price: 'Custom',
                period: 'volume pricing',
                features: [
                  'Unlimited lead processing',
                  'Full analytics suite',
                  'All integrations + API access',
                  'Priority support + CSM',
                  'SOC 2 + GDPR compliance',
                  'Custom deployment options'
                ],
                cta: 'Request Demo',
                popular: true
              },
              {
                name: 'Business Plus',
                description: 'For global organizations',
                price: 'Custom',
                period: 'annual agreement',
                features: [
                  'Everything in Business',
                  'White-label options',
                  'Dedicated infrastructure',
                  '24/7 phone support',
                  'Advanced security features',
                  'Custom AI model training'
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
              All business plans include: SOC 2 compliance • 99.9% SLA • Dedicated support • Custom onboarding
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
              View detailed feature comparison →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about implementing SurFox at scale.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'How does SurFox integrate with our existing tech stack?',
                answer: 'SurFox provides native integrations with all major CRM platforms (Salesforce, Microsoft Dynamics, HubSpot), marketing automation tools (Marketo, Pardot, Eloqua), and data warehouses. Our robust API allows for custom integrations, and our professional services team assists with complex implementations. Most organizations complete integration within 2-4 weeks.'
              },
              {
                question: 'What security and compliance certifications does SurFox maintain?',
                answer: 'SurFox is SOC 2 Type II certified and maintains GDPR and CCPA compliance frameworks. We provide data residency options, end-to-end encryption, role-based access controls, and comprehensive audit trails. Enterprise customers receive detailed security documentation and can request additional compliance certifications as needed.'
              },
              {
                question: 'How accurate is the AI engine for B2B sales scenarios?',
                answer: 'Our Messaging Intelligence Engine™ maintains 94% accuracy in B2B lead qualification scenarios. The AI is trained specifically on business sales data and adapts to your industry vertical and sales process. We provide transparent confidence scoring and allow for custom model training for large deployments.'
              },
              {
                question: 'What level of customization is available for large deployments?',
                answer: 'Business customers can customize scoring models, data point weighting, integration workflows, and reporting dashboards. We offer white-label options, custom branding, and can deploy dedicated infrastructure for large-scale implementations. Our professional services team works with your technical teams to ensure optimal configuration.'
              },
              {
                question: 'How does pricing work for large volumes?',
                answer: 'Pricing is volume-based with significant discounts for scale. We offer annual contracts, multi-year agreements, and custom licensing options. Pricing includes platform access, integrations, support, and professional services. Contact our sales team for a customized quote based on your specific requirements.'
              },
              {
                question: 'What support and onboarding is provided for business customers?',
                answer: 'Business customers receive dedicated customer success management, priority technical support, and comprehensive onboarding including change management assistance. We provide training for sales teams, technical documentation, and ongoing optimization recommendations. Support includes 24/7 options for Business Plus customers.'
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Sales?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join leading organizations using SurFox to transform their sales operations with AI-driven intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all">
              Speak with Sales
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              SOC 2 Certified
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-emerald-400" />
              Global Infrastructure
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              99.9% Enterprise SLA
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
              <p className="text-slate-400 mb-6">Enterprise messaging intelligence platform powered by advanced AI.</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-400">SOC 2 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-400">GDPR Compliant</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Intelligence Engine</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Business</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Professional Services</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a></li>
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