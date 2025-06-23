'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Check, X, Phone, Zap, Target, Users, Filter, TrendingUp, BarChart3, Brain, Settings, Star, Menu } from 'lucide-react'

const SurFoxV2 = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('performance')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [typingText, setTypingText] = useState('Warm Leads')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  


  // Typing animation
  useEffect(() => {
    const words = ['Warm Leads', 'Hot Prospects', 'Ready Buyers', 'Real Conversations']
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
        setTimeout(typeAnimation, isDeleting ? 50 : 100)
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
    setTimeout(() => setIsLoading(false), 1500)
  }, [])


  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
 
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-4' : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="SurFox Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SurFox
              </span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group">
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="/demo" className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group">
                Demo
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#platform" className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group">
                Platform
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group">
                Results
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Start Free Trial
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t mt-4">
            <div className="px-4 py-4 space-y-4">
              <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900 font-medium">How It Works</a>
              <a href="/demo" className="block text-gray-600 hover:text-gray-900 font-medium">Demo</a>
              <a href="#platform" className="block text-gray-600 hover:text-gray-900 font-medium">Platform</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-gray-900 font-medium">Results</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#" className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full font-semibold text-center">
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -top-48 -right-24 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute w-96 h-96 -bottom-48 -left-24 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Turn Cold Leads Into
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block min-h-[1.2em]">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our Messaging Intelligence Engine™ analyzes 50 data points in real-time to warm up your cold leads. 
                You only get notified when they're ready to buy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="#" className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center">
                  Get Warm Leads Daily
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="group bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-purple-600 hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch 2-Min Demo
                </a>
              </div>
              
              <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  30-day money back
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Setup in 5 minutes
                </div>
              </div>
            </div>
            
            {/* 3D Dashboard Mockup */}
            <div className="relative perspective-1000">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-y-[-15deg] rotate-x-[5deg] transition-transform hover:rotate-y-[-5deg] hover:rotate-x-[2deg]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Messaging Intelligence Engine™</h3>
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Live Analysis
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Sarah Mitchell', status: 'Engaged 12 times • High intent signals detected', score: 96, dataPoints: '47/50' },
                    { name: 'Michael Chen', status: 'Asked about pricing • Budget confirmed', score: 92, dataPoints: '45/50' },
                    { name: 'Jennifer Davis', status: 'Timeline urgent • Decision maker confirmed', score: 94, dataPoints: '46/50' }
                  ].map((lead, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 flex justify-between items-center hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]">
                      <div>
                        <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                        <p className="text-sm text-gray-600">{lead.status}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {lead.score}%
                        </div>
                        <div className="text-xs text-gray-500">Data Points: {lead.dataPoints}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-10 bg-white rounded-lg shadow-lg p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold">Lead is now warm!</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-10 bg-white rounded-lg shadow-lg p-4 text-center animate-float animation-delay-2000">
                  <div className="text-3xl font-black text-purple-600">50</div>
                  <div className="text-xs text-gray-500">Data Points Analyzed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '89%', label: 'Lead Warm-Up Rate' },
              { number: '50', label: 'Data Points Analyzed' },
              { number: '24/7', label: 'AI Engagement' },
              { number: '5.2x', label: 'Conversion Increase' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Cold Leads Are Killing Your Sales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your team wastes time on unresponsive leads. Our Messaging Intelligence Engine™ changes that.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">😤</span>
                Without SurFox
              </h3>
              <ul className="space-y-4">
                {[
                  'Cold outreach gets ignored or deleted',
                  'No idea who\'s interested or why',
                  'Sales team calls unresponsive leads',
                  'Prospects aren\'t ready to talk',
                  'Conversion rates stay low'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-red-700">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500 rounded-full opacity-10"></div>
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center relative z-10">
                <span className="text-3xl mr-3">🚀</span>
                With SurFox
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                  'AI engages and warms every lead',
                  '50 data points reveal buying intent',
                  'Sales only calls warm prospects',
                  'Leads are educated and ready',
                  'Close rates skyrocket'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-green-700">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              The Messaging Intelligence Engine™ Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              50 data points. Real-time analysis. Warm leads delivered to your team.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gray-200">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-2000 w-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: '📥', step: 1, title: 'Import Cold Leads', description: 'Connect your CRM or upload your lead list. We work with any source.' },
                { icon: '🤖', step: 2, title: 'AI Engages Instantly', description: 'Our AI starts personalized conversations, analyzing 50 data points per lead.' },
                { icon: '🔥', step: 3, title: 'Leads Get Warmed', description: 'Through intelligent messaging, cold leads become warm prospects.' },
                { icon: '🔔', step: 4, title: 'You Get Notified', description: 'When leads are ready, your sales team gets alerted with full context.' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform mx-auto mb-4 relative">
                      {item.icon}
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Intelligence That Drives Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your Messaging Intelligence Engine™ in real-time and watch cold leads transform.
            </p>
          </div>
          
          <div>
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {[
                { id: 'performance', label: 'Engine Analytics', icon: TrendingUp },
                { id: 'ai', label: '50 Data Points', icon: Brain },
                { id: 'analytics', label: 'Lead Warming', icon: BarChart3 },
                { id: 'automation', label: 'Alert Settings', icon: Settings }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                )
              })}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${activeTab === 'performance' || activeTab === 'analytics' ? 'order-1' : 'order-2'}`}>
                {activeTab === 'performance' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Watch Your Engine Work in Real-Time
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      The Messaging Intelligence Engine™ shows you exactly how your leads are warming up, with full transparency into every interaction.
                    </p>
                    <ul className="space-y-3">
                      {['Real-time engagement metrics', 'Lead temperature tracking', 'Conversion pathway analysis'].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {activeTab === 'ai' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      50 Data Points = Perfect Timing
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Our proprietary algorithm analyzes 50 distinct behavioral and contextual data points to determine the exact moment a lead is ready for sales outreach.
                    </p>
                    <ul className="space-y-3">
                      {['Engagement frequency & depth', 'Content interest mapping', 'Buying signal detection'].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {activeTab === 'analytics' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      From Cold to Hot: Track the Journey
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      See exactly how the Messaging Intelligence Engine™ warms up each lead, with detailed insights into what's working.
                    </p>
                    <ul className="space-y-3">
                      {['Lead temperature progression', 'Engagement history timeline', 'Interest topic analysis'].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {activeTab === 'automation' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Smart Alerts When It Matters
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Configure intelligent alerts based on the 50 data points. Get notified only when leads meet your exact criteria.
                    </p>
                    <ul className="space-y-3">
                      {['Custom alert thresholds', 'Team routing rules', 'Priority lead notifications'].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              <div className={`${activeTab === 'performance' || activeTab === 'analytics' ? 'order-2' : 'order-1'}`}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-[1.02] transition-transform">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">
                        {activeTab === 'performance' && 'Messaging Intelligence Engine™'}
                        {activeTab === 'ai' && '50 Data Points Analysis'}
                        {activeTab === 'analytics' && 'Lead Warming Progress'}
                        {activeTab === 'automation' && 'Alert Configuration'}
                      </h4>
                      <button className="bg-purple-600 text-white px-4 py-1 rounded-lg text-sm font-semibold">
                        {activeTab === 'ai' ? 'View All' : 'Configure'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {activeTab === 'performance' && (
                      <>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">2,847</div>
                            <div className="text-sm text-gray-600">Leads Engaged</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">89%</div>
                            <div className="text-sm text-gray-600">Warm Rate</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-600">437</div>
                            <div className="text-sm text-gray-600">Ready Now</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { name: 'Real Estate Campaign', engaged: 145, warm: 89, ready: 23 },
                            { name: 'B2B Software Leads', engaged: 203, warm: 156, ready: 41 }
                          ].map((campaign, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="font-semibold text-purple-600">{campaign.name}</div>
                              <div className="text-sm text-gray-600">{campaign.engaged} engaged</div>
                              <div className="text-sm font-semibold text-orange-600">{campaign.warm} warm</div>
                              <div className="text-sm font-bold text-green-600">{campaign.ready} ready</div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    
                    {activeTab === 'ai' && (
                      <div className="space-y-4">
                        <div className="mb-4">
                          <h5 className="font-semibold mb-3">Top Contributing Data Points</h5>
                          {[
                            { point: 'Message open rate', value: '92%', impact: 'High' },
                            { point: 'Link click behavior', value: '67%', impact: 'High' },
                            { point: 'Response sentiment', value: 'Positive', impact: 'Medium' },
                            { point: 'Time spent reading', value: '3.2 min', impact: 'High' },
                            { point: 'Question engagement', value: '4/5', impact: 'Very High' }
                          ].map((data, index) => (
                            <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                              <span className="text-sm">{data.point}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold">{data.value}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  data.impact === 'Very High' ? 'bg-red-100 text-red-700' :
                                  data.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                                  'bg-yellow-100 text-yellow-700'
                                }`}>
                                  {data.impact}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'analytics' && (
                      <div>
                        <div className="mb-6">
                          <div className="h-32 bg-gradient-to-r from-blue-100 via-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-purple-600 mb-1">℃</div>
                              <div className="text-sm text-gray-600">Lead Temperature Map</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-semibold text-gray-900">Warming Progress</h5>
                          {[
                            { stage: 'Cold → Lukewarm', count: 847, percentage: 45 },
                            { stage: 'Lukewarm → Warm', count: 623, percentage: 78 },
                            { stage: 'Warm → Hot', count: 289, percentage: 92 }
                          ].map((item, index) => (
                            <div key={index}>
                              <div className="flex justify-between text-sm mb-1">
                                <span>{item.stage}</span>
                                <span className="font-semibold">{item.count} leads</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-400 via-orange-400 to-red-400 h-2 rounded-full" 
                                  style={{ width: `${item.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'automation' && (
                      <div className="space-y-4">
                        {[
                          { condition: 'If 40+ data points triggered', action: 'Alert top sales rep immediately', color: 'red' },
                          { condition: 'If engagement score > 85%', action: 'Send to senior closer', color: 'orange' },
                          { condition: 'If responds within 1 hour', action: 'Mark as high priority', color: 'green' }
                        ].map((rule, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <div className={`w-4 h-4 bg-${rule.color}-500 rounded-full mr-3`}></div>
                              <span className="text-sm font-semibold">{rule.condition}</span>
                            </div>
                            <div className="flex items-center ml-7">
                              <ArrowRight className="w-4 h-4 text-gray-400 mr-3" />
                              <span className="text-sm text-gray-600">{rule.action}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Sales Teams Love the Messaging Intelligence Engine™
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how teams are transforming cold leads into warm conversations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The 50 data points analysis is incredible. We know exactly when to reach out, and prospects are actually happy to hear from us. Our close rate tripled.",
                author: 'Sarah Chen',
                role: 'VP Sales • Real Estate Tech',
                avatar: 'SC',
                metric: 'Leads Warmed',
                value: '847/mo'
              },
              {
                quote: "We went from cold calling all day to having warm conversations with interested prospects. The Messaging Intelligence Engine changed everything for us.",
                author: 'Marcus Rodriguez',
                role: 'Sales Director • SaaS',
                avatar: 'MR',
                metric: 'Response Rate',
                value: '73%'
              },
              {
                quote: "Having AI warm up our leads 24/7 means my team only talks to people ready to buy. It's like having 100 SDRs working around the clock.",
                author: 'Jennifer Wu',
                role: 'CEO • Marketing Agency',
                avatar: 'JW',
                metric: 'ROI Increase',
                value: '5.2x'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-2 relative">
                <div className="text-6xl text-purple-600 opacity-20 absolute top-4 right-4">"</div>
                <p className="text-gray-700 mb-6 relative z-10 italic">"{testimonial.quote}"</p>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">{testimonial.metric}</div>
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {testimonial.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Pay Only for Warm Leads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No setup fees. No cold leads. Just warm prospects ready to buy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                description: 'Perfect for testing the waters',
                price: 97,
                features: [
                  'Up to 100 cold leads warmed',
                  'Basic Messaging Intelligence',
                  'Email support',
                  'CRM integrations'
                ],
                featured: false
              },
              {
                name: 'Professional',
                description: 'For serious sales teams',
                price: 297,
                features: [
                  'Up to 500 cold leads warmed',
                  'Full 50 data point analysis',
                  'Priority support',
                  'All integrations + API',
                  'Custom alert rules'
                ],
                featured: true
              },
              {
                name: 'Enterprise',
                description: 'For scaling organizations',
                price: 'Custom',
                features: [
                  'Unlimited lead warming',
                  'Custom data point configuration',
                  'Dedicated success manager',
                  'White-label options',
                  'SLA guarantees'
                ],
                featured: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 ${
                plan.featured 
                  ? 'border-2 border-purple-600 shadow-2xl scale-105' 
                  : 'border-2 border-gray-200 shadow-lg'
              }`}>
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <div className="text-center mb-8">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-4xl font-black text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className={`block text-center py-3 px-6 rounded-full font-bold transition-all ${
                  plan.featured
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                    : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              🔒 All plans include: 30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Questions? We've Got Answers
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the Messaging Intelligence Engine™.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'What exactly is the Messaging Intelligence Engine™?',
                answer: 'Our proprietary AI system that engages with your cold leads through intelligent conversations. It analyzes 50 different data points in real-time - from engagement patterns to content interests to response timing - to determine when a lead has warmed up and is ready for sales outreach.'
              },
              {
                question: 'What are the 50 data points you analyze?',
                answer: 'We analyze behavioral signals (open rates, click patterns, response times), contextual indicators (content preferences, question types, urgency language), engagement depth (time spent, pages viewed, return visits), and buying signals (budget mentions, timeline discussions, decision-maker involvement). Each data point is weighted based on your specific industry and sales process.'
              },
              {
                question: 'How long does it take to warm up a lead?',
                answer: 'It varies based on the lead and industry, but typically we see cold leads warming up within 7-14 days of engagement. Some leads warm faster (2-3 days) if they\'re already in-market, while others may take 30+ days. The beauty is our AI works 24/7, so you\'re always nurturing leads even while you sleep.'
              },
              {
                question: 'Will this work with my existing CRM and tools?',
                answer: 'Absolutely! We integrate seamlessly with all major CRMs including Salesforce, HubSpot, Pipedrive, and more. We also connect with your email marketing tools, calendar systems, and communication platforms. Setup typically takes less than 30 minutes.'
              },
              {
                question: 'How do I know when a lead is ready?',
                answer: 'When our Messaging Intelligence Engine™ determines a lead has crossed the threshold (based on your customized data point settings), you\'ll receive an instant notification via email, SMS, or directly in your CRM. The alert includes the full conversation history and key insights about what the lead is interested in.'
              },
              {
                question: 'What makes this different from email automation?',
                answer: 'Traditional email automation sends the same messages to everyone. Our Messaging Intelligence Engine™ has dynamic, personalized conversations with each lead, adapting based on their responses and behavior. It\'s like having a skilled SDR engaging with each lead individually, but powered by AI that never sleeps.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all ${
                    activeFaq === index ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rotate-45' : ''
                  }`}>
                    <span className="text-2xl leading-none">+</span>
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Turn Cold Leads Into Warm Conversations?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let our Messaging Intelligence Engine™ warm up your leads while you focus on closing deals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center justify-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all">
              Schedule a Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2" />
              30-day money back
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2" />
              Setup in 5 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="SurFox Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SurFox
                </h3>
              </div>
              <p className="mb-6">Powered by the Messaging Intelligence Engine™</p>
              <div className="flex gap-4">
                {/* Social links would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 SurFox AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                SOC 2 Certified
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                GDPR Compliant
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-\[-15deg\] {
          transform: rotateY(-15deg);
        }
        
        .rotate-x-\[5deg\] {
          transform: rotateX(5deg);
        }
        
        .hover\:rotate-y-\[-5deg\]:hover {
          transform: rotateY(-5deg);
        }
        
        .hover\:rotate-x-\[2deg\]:hover {
          transform: rotateX(2deg);
        }
      `}</style>
    </div>
  )
}

export default SurFoxV2