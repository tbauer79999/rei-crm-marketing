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
                Advanced AI analyzes 
                <span className="text-blue-400 font-semibold"> 50+ behavioral data points</span> 
                in real-time, delivering qualified prospects when they're ready to engage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="group border border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  See How It Works
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
                  Get started in minutes
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                  Let AI qualify leads while you sleep
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                  No technical setup required
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
                  Automate conversations across campaigns
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Track AI performance and lead quality
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  Customize follow-up pacing and urgency
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
                  Multi-tenant controls
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  Team-level settings, custom AI roles
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                  SLA, priority support, white-labeled ops
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
              { number: '500K+', label: 'Messages Processed Daily', icon: Database },
              { number: '94%', label: 'AI Accuracy Rate', icon: Target },
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

      {/* How It Works */}
      <section id="intelligence" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <Terminal className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">Messaging Intelligence Engine™</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How SurFox Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced AI processes your conversations and data to identify the hottest prospects automatically.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Database, 
                  step: '01', 
                  title: 'Connect Your Data', 
                  description: 'Link your CRM, email, or messaging platforms. SurFox integrates with the tools you already use.' 
                },
                { 
                  icon: Brain, 
                  step: '02', 
                  title: 'AI Analyzes Everything', 
                  description: 'Our AI scans conversations, behavior patterns, and 50+ signals to understand lead quality in real-time.' 
                },
                { 
                  icon: Target, 
                  step: '03', 
                  title: 'Get Instant Scores', 
                  description: 'Every lead gets a readiness score with 94% accuracy. Know exactly who to focus on first.' 
                },
                { 
                  icon: Zap, 
                  step: '04', 
                  title: 'Take Action', 
                  description: 'Receive alerts when prospects are hot, with context on what makes them ready to buy.' 
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
                quote: "The platform's security compliance and seamless integration made adoption smooth across our global sales organization. ROI was clear within 60 days.",
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
                price: '$29',
                period: 'per month',
                features: [
                  'Up to 1,000 leads/month',
                  'Basic AI scoring and alerts',
                  'Email integration',
                  'Community support',
                  'Core analytics dashboard'
                ],
                cta: 'Start Free Trial',
                popular: false
              },
              {
                name: 'Growth',
                description: 'For growing teams and agencies',
                price: '$99',
                period: 'per month',
                features: [
                  'Up to 10,000 leads/month',
                  'Advanced AI features',
                  'CRM integrations',
                  'Priority email support',
                  'Custom scoring models',
                  'Team collaboration tools'
                ],
                cta: 'Start Free Trial',
                popular: true
              },
              {
                name: 'Enterprise',
                description: 'For large organizations',
                price: 'Custom',
                period: 'contact sales',
                features: [
                  'Unlimited lead processing',
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
                <li><a href="/security" className="text-slate-400 hover:text-white transition-colors">Security</a></li>
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