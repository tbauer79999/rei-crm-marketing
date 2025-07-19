'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Rocket, Activity, Eye, Layers } from 'lucide-react'

const SurFoxVsLaunchControl = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFeatureSet, setActiveFeatureSet] = useState(0)
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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const testimonials = [
    {
      quote: "I was spending all day replying — now SurFox handles 90% of conversations.",
      author: "Real Estate Investor",
      metric: "90% Time Saved"
    },
    {
      quote: "Our hot leads are flagged automatically. I only step in when it matters.",
      author: "Sales Team Lead", 
      metric: "Auto Qualification"
    },
    {
      quote: "We stopped getting spam-flagged after switching to SurFox's randomizer.",
      author: "Marketing Agency",
      metric: "Spam-Safe Delivery"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-white">Sur</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fox</span>
              </span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                ← Back to Platform
              </a>
              <div className="w-px h-6 bg-slate-700"></div>
              <a href="https://app.getsurfox.com/login" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </a>
              <a href="#cta" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Try SurFox Free
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
              <a href="/" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">← Back to Platform</a>
              <div className="pt-4 border-t border-slate-800">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium mb-3">Sign In</a>
                <a href="#cta" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                  Try SurFox Free
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden pt-16">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
          <div 
            className="absolute w-[600px] h-[600px] bg-gradient-conic from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
            style={{
              top: '20%',
              left: '60%',
              transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
              animation: 'spin 60s linear infinite'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div>
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-300 border border-orange-600/30 mb-4">
                  <Rocket className="w-4 h-4 mr-2" />
                  Battle of the Tools
                </span>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2">
                      <Terminal className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-white">SurFox</div>
                    <div className="text-xs text-blue-400">AI Sales Rep</div>
                  </div>
                  
                  <div className="text-orange-400 text-2xl font-bold">⚡ VS ⚡</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-2">
                      <Rocket className="w-8 h-8 text-slate-400" />
                    </div>
                    <div className="text-sm font-bold text-slate-400">Launch Control</div>
                    <div className="text-xs text-slate-500">Campaign Tool</div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Smarter</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Selling
                </span>
                <br />
                <span className="text-white">vs Smarter Blasting</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                Launch Control is a power tool. SurFox is your AI sales rep.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                While Launch Control makes you script every message manually, SurFox AI handles 90% of conversations — never forgetting, never sleeping, always following up with perfect timing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#comparison" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                  See the Battle
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#demo" className="group border border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Try AI Demo
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center text-slate-400">
                  <Brain className="w-4 h-4 text-blue-400 mr-2" />
                  AI Conversation Memory
                </div>
                <div className="flex items-center text-slate-400">
                  <Zap className="w-4 h-4 text-emerald-400 mr-2" />
                  Auto Lead Escalation
                </div>
                <div className="flex items-center text-slate-400">
                  <Shield className="w-4 h-4 text-purple-400 mr-2" />
                  Spam-Safe Randomization
                </div>
                <div className="flex items-center text-slate-400">
                  <Target className="w-4 h-4 text-orange-400 mr-2" />
                  Hot Lead Detection
                </div>
              </div>
            </div>

            {/* Right Side - Rotating Testimonials */}
            <div className="relative">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-400" />
                    Why People Switch
                  </h3>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeTestimonial === index ? 'bg-blue-400' : 'bg-slate-600'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="text-3xl text-blue-400/30 mb-4">"</div>
                        <p className="text-slate-300 text-lg italic leading-relaxed mb-6">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-white">{testimonial.author}</div>
                            <div className="text-sm text-slate-400">Switched from Launch Control</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-emerald-400">{testimonial.metric}</div>
                            <div className="text-xs text-slate-500">Improvement</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">10x</div>
                    <div className="text-xs text-blue-100">Less Manual Work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Difference */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Fundamental Difference
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Both platforms send messages, but they operate in completely different universes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Launch Control Side */}
            <div className="bg-slate-800/30 border border-slate-700/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-400">Launch Control</h3>
                  <p className="text-slate-500">Manual Campaign Management</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-300 mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    You Do Everything
                  </h4>
                  <p className="text-sm text-slate-400">Script every message, monitor every reply, qualify every lead manually. Full control, full workload.</p>
                </div>
                
                <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-300 mb-2 flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Manual Monitoring
                  </h4>
                  <p className="text-sm text-slate-400">Watch dashboards, track responses, manually follow up. Miss a day, miss opportunities.</p>
                </div>
                
                <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-300 mb-2 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Template-Based
                  </h4>
                  <p className="text-sm text-slate-400">Fixed templates with variables. Risk spam flags at scale without careful variation.</p>
                </div>
              </div>
              
              <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4">
                <h4 className="font-semibold text-slate-300 mb-2">Best For:</h4>
                <p className="text-slate-400 text-sm">Campaign managers who want full control and don't mind manual work</p>
              </div>
            </div>

            {/* SurFox Side */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 ring-1 ring-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">SurFox</h3>
                  <p className="text-blue-300">AI-Powered Sales Rep</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
                    <Bot className="w-4 h-4 mr-2" />
                    AI Does Everything
                  </h4>
                  <p className="text-sm text-blue-200">AI writes messages, handles replies, qualifies leads, escalates when ready. You focus on closing.</p>
                </div>
                
                <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Smart Automation
                  </h4>
                  <p className="text-sm text-blue-200">AI monitors 24/7, never misses a signal, escalates hot leads instantly with full context.</p>
                </div>
                
                <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    Adaptive Intelligence
                  </h4>
                  <p className="text-sm text-blue-200">Never repeats messages, learns from every conversation, adapts tone per lead automatically.</p>
                </div>
              </div>
              
              <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">Best For:</h4>
                <p className="text-blue-200 text-sm">Sales teams who want hot leads surfaced automatically with minimal effort</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section id="comparison" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See exactly where SurFox's AI capabilities outshine Launch Control's manual approach.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { category: 'AI Intelligence', icon: Brain, color: 'blue' },
              { category: 'Lead Management', icon: Target, color: 'emerald' },
              { category: 'Automation & Efficiency', icon: Zap, color: 'purple' }
            ].map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureSet(index)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFeatureSet === index
                    ? `bg-gradient-to-r ${
                        category.color === 'blue' ? 'from-blue-600 to-blue-700' :
                        category.color === 'emerald' ? 'from-emerald-600 to-emerald-700' :
                        'from-purple-600 to-purple-700'
                      } text-white shadow-lg`
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.category}
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-800/50 border-b border-slate-700/50">
              <div className="col-span-6 p-4">
                <h3 className="font-semibold text-white">Feature</h3>
              </div>
              <div className="col-span-3 p-4 text-center border-l border-slate-700/50">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                    <Terminal className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-semibold text-white">SurFox</span>
                </div>
              </div>
              <div className="col-span-3 p-4 text-center border-l border-slate-700/50">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-slate-700 rounded-lg flex items-center justify-center mr-2">
                    <Rocket className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-medium text-slate-400">Launch Control</span>
                </div>
              </div>
            </div>

            {(() => {
              const features = [
                // AI Intelligence
                [
                  { feature: 'AI-driven conversations', surfox: true, launch: false },
                  { feature: 'Conversation memory per lead', surfox: true, launch: false },
                  { feature: 'AI personas & tone customization', surfox: true, launch: false },
                  { feature: 'Dynamic prompt injection', surfox: true, launch: false },
                  { feature: 'Anti-spam message randomization', surfox: true, launch: false }
                ],
                // Lead Management
                [
                  { feature: 'AI motivation scoring', surfox: true, launch: false },
                  { feature: 'Auto qualification logic', surfox: true, launch: false },
                  { feature: 'Auto lead escalation', surfox: true, launch: false },
                  { feature: 'Real-time hot lead alerts', surfox: true, launch: false },
                  { feature: 'Funnel visualization', surfox: true, launch: false }
                ],
                // Automation & Efficiency
                [
                  { feature: 'Chrome extension import', surfox: true, launch: false },
                  { feature: 'AI handles 90% of messages', surfox: true, launch: false },
                  { feature: 'Document-based AI training', surfox: true, launch: false },
                  { feature: 'Smart retry logic', surfox: true, launch: false },
                  { feature: 'Business hours awareness', surfox: true, launch: false }
                ]
              ];
              
              return features[activeFeatureSet].map((item, index) => (
                <div key={index} className="grid grid-cols-12 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                  <div className="col-span-6 p-4">
                    <span className="text-slate-300">{item.feature}</span>
                  </div>
                  <div className="col-span-3 p-4 text-center border-l border-slate-700/30">
                    {item.surfox ? (
                      <div className="flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-400" />
                        <span className="ml-2 text-emerald-400 font-medium">Yes</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <X className="w-5 h-5 text-red-400" />
                        <span className="ml-2 text-red-400">No</span>
                      </div>
                    )}
                  </div>
                  <div className="col-span-3 p-4 text-center border-l border-slate-700/30">
                    {item.launch ? (
                      <div className="flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-400" />
                        <span className="ml-2 text-emerald-400 font-medium">Yes</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <X className="w-5 h-5 text-red-400" />
                        <span className="ml-2 text-red-400">No</span>
                      </div>
                    )}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Workflow Comparison */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Daily Workflow
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See how your day changes when you switch from manual campaign management to AI automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Launch Control Workflow */}
            <div className="bg-slate-800/30 border border-slate-700/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-400 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3" />
                Launch Control Day
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-300">Write Campaign Messages</div>
                    <div className="text-sm text-slate-400">Script templates, set variables, plan sequences</div>
                    <div className="text-xs text-slate-500 mt-1">⏱ 45 minutes</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-300">Launch Campaigns</div>
                    <div className="text-sm text-slate-400">Upload lists, configure timing, monitor sending</div>
                    <div className="text-xs text-slate-500 mt-1">⏱ 30 minutes</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-300">Monitor & Reply</div>
                    <div className="text-sm text-slate-400">Check responses, manually reply to each lead</div>
                    <div className="text-xs text-slate-500 mt-1">⏱ 3+ hours</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-300">Qualify Leads</div>
                    <div className="text-sm text-slate-400">Manually assess interest, update statuses</div>
                    <div className="text-xs text-slate-500 mt-1">⏱ 1 hour</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-700/30 border border-slate-600/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-slate-400">5+ hours</div>
                <div className="text-sm text-slate-500">Daily time investment</div>
              </div>
            </div>

            {/* SurFox Workflow */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 ring-1 ring-blue-500/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3" />
                SurFox Day
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-300">Upload Leads</div>
                    <div className="text-sm text-blue-200">Chrome extension or CSV - AI takes over immediately</div>
                    <div className="text-xs text-blue-400 mt-1">⏱ 5 minutes</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-300">AI Engages Automatically</div>
                    <div className="text-sm text-blue-200">AI writes messages, handles replies, qualifies leads</div>
                    <div className="text-xs text-blue-400 mt-1">⏱ 0 minutes (automated)</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-300">Receive Hot Lead Alerts</div>
                    <div className="text-sm text-blue-200">Get notified when prospects are ready to close</div>
                    <div className="text-xs text-blue-400 mt-1">⏱ Real-time alerts</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-300">Close Qualified Deals</div>
                    <div className="text-sm text-blue-200">Jump in with full context when leads are hot</div>
                    <div className="text-xs text-blue-400 mt-1">⏱ 30 minutes</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/30 border border-blue-700/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-400">35 minutes</div>
                <div className="text-sm text-blue-500">Daily time investment</div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Time Savings Calculator</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-400 mb-2">5+ hours</div>
                  <div className="text-sm text-slate-500">Launch Control daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">35 min</div>
                  <div className="text-sm text-slate-400">SurFox daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">25+ hours</div>
                  <div className="text-sm text-slate-400">Saved per week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Still Scripting Every Message Manually?
          </h2>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
            Stop spending hours on campaign management. Let SurFox AI handle 90% of conversations while you focus on closing deals.
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            <strong className="text-slate-300">Free 14-day trial.</strong> Import your Launch Control leads and see the difference immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center">
              Try the AI Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all">
              See How We Escalate Leads
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              No manual scripting needed
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-400" />
              Setup in under 15 minutes
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-slate-500 mb-4">Trusted by teams who upgraded from manual tools</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {['RealtyPro', 'InvestCorp', 'SalesForce', 'LeadMaster'].map((company, index) => (
                <div key={index} className="text-slate-600 font-medium">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-white">Sur</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fox</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/" className="text-slate-400 hover:text-white transition-colors">Platform</a>
              <a href="/enterprise" className="text-slate-400 hover:text-white transition-colors">Enterprise</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a>
              <div className="text-slate-600">© 2024 SurFox AI</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SurFoxVsLaunchControl