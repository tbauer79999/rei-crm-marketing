'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Check, X, Phone, Zap, Target, Users, Filter, TrendingUp, BarChart3, Brain, Settings, Star, Menu } from 'lucide-react'

const SurFoxV2 = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('performance')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [typingText, setTypingText] = useState('Better Leads')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  // Typing animation
  useEffect(() => {
    const words = ['Better Leads', 'More Wins', 'Real Results', 'Less Effort']
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

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
        cursorDotRef.current.style.left = e.clientX + 'px'
        cursorDotRef.current.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
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
      {/* Custom Cursor - Desktop Only */}
      <div 
        ref={cursorRef}
        className="hidden lg:block fixed w-10 h-10 border-2 border-purple-600 rounded-full pointer-events-none transition-all duration-100 z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={cursorDotRef}
        className="hidden lg:block fixed w-1 h-1 bg-purple-600 rounded-full pointer-events-none z-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

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
                Your Sales Team Deserves
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block min-h-[1.2em]">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop wasting 80% of your time on tire-kickers. Our AI pre-qualifies every lead, 
                so you only talk to people ready to buy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="#" className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center">
                  Get Pre-Qualified Leads
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
                  <h3 className="text-xl font-bold text-gray-900">Today's Hot Leads</h3>
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Live Now
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Sarah Mitchell', status: 'Ready to sell • Motivated by job relocation', score: 96 },
                    { name: 'Michael Chen', status: 'Cash buyer • Looking for investment property', score: 92 },
                    { name: 'Jennifer Davis', status: 'Inherited property • Wants quick sale', score: 94 }
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
                        <div className="text-xs text-gray-500">Qualification Score</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-10 bg-white rounded-lg shadow-lg p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold">New qualified lead!</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-10 bg-white rounded-lg shadow-lg p-4 text-center animate-float animation-delay-2000">
                  <div className="text-3xl font-black text-purple-600">87%</div>
                  <div className="text-xs text-gray-500">Close Rate</div>
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
              { number: '73%', label: 'Less Time on Phone' },
              { number: '3.2x', label: 'Higher Close Rate' },
              { number: '94%', label: 'Lead Quality Score' },
              { number: '2,847', label: 'Happy Sales Teams' }
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
              The Problem Isn't Your Sales Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're wasting time talking to people who will never buy. We fix that.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">😤</span>
                Your Current Reality
              </h3>
              <ul className="space-y-4">
                {[
                  '50+ calls to find one serious buyer',
                  '"Just looking" wastes hours daily',
                  'Hot leads go cold while you chase ghosts',
                  'No idea who\'s actually motivated',
                  'Burnout from endless rejection'
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
                Your Future with SurFox
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                  'Every call is with a qualified prospect',
                  'AI filters out time-wasters 24/7',
                  'Prospects are warmed up and ready',
                  'Know their pain points before calling',
                  'Close more deals in less time'
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
              From Cold Lead to Closed Deal in 4 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI does the heavy lifting, so you can focus on what you do best: closing.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gray-200">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-2000 w-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: '📥', step: 1, title: 'Leads Flow In', description: 'Your marketing keeps working as usual. We integrate with any lead source.' },
                { icon: '🤖', step: 2, title: 'AI Qualifies 24/7', description: 'Our AI engages instantly, asking the right questions to identify serious buyers.' },
                { icon: '🔥', step: 3, title: 'Prospects Get Warmed', description: 'Qualified leads are educated and prepared for your conversation.' },
                { icon: '💰', step: 4, title: 'You Close Deals', description: 'Talk only to motivated prospects who are ready to move forward.' }
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
              A Command Center Built for Closers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time insights, AI optimization, and total control over your pipeline.
            </p>
          </div>
          
          <div>
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {[
                { id: 'performance', label: 'Team Performance', icon: TrendingUp },
                { id: 'ai', label: 'AI Optimization', icon: Brain },
                { id: 'analytics', label: 'Lead Analytics', icon: BarChart3 },
                { id: 'automation', label: 'Automation Rules', icon: Settings }
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
                      Track Every Rep, Every Deal, Every Dollar
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Get a bird's-eye view of your entire sales operation. See who's crushing it, who needs help, and where the opportunities are.
                    </p>
                    <ul className="space-y-3">
                      {['Individual rep scorecards', 'Revenue attribution tracking', 'Win rate optimization insights'].map((item, index) => (
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
                      AI That Gets Smarter Every Day
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Our AI doesn't just qualify leads—it learns from every interaction to get better at finding your perfect prospects.
                    </p>
                    <ul className="space-y-3">
                      {['A/B test conversation flows', 'Optimize qualification criteria', 'Custom AI training for your market'].map((item, index) => (
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
                      Know Everything Before You Call
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Deep insights into every lead's journey, pain points, and readiness to buy. Never go into a call blind again.
                    </p>
                    <ul className="space-y-3">
                      {['Complete conversation history', 'Pain point identification', 'Buying timeline tracking'].map((item, index) => (
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
                      Set It and Forget It Automation
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Create custom rules for lead routing, follow-ups, and escalations. Your pipeline runs itself while you close deals.
                    </p>
                    <ul className="space-y-3">
                      {['Smart lead distribution', 'Automated follow-up sequences', 'Custom escalation rules'].map((item, index) => (
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
                        {activeTab === 'performance' && 'Sales Team Performance'}
                        {activeTab === 'ai' && 'AI Optimization Center'}
                        {activeTab === 'analytics' && 'Lead Intelligence'}
                        {activeTab === 'automation' && 'Automation Rules'}
                      </h4>
                      <button className="bg-purple-600 text-white px-4 py-1 rounded-lg text-sm font-semibold">
                        {activeTab === 'ai' ? '+ New Test' : 'Export'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {activeTab === 'performance' && (
                      <>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">$1.2M</div>
                            <div className="text-sm text-gray-600">Total Revenue</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">89%</div>
                            <div className="text-sm text-gray-600">Qualification Rate</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-600">3.2x</div>
                            <div className="text-sm text-gray-600">ROI Increase</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { name: 'Sarah Chen', leads: 45, won: 8, revenue: '$240,000', rate: '17.8%' },
                            { name: 'Mike Rodriguez', leads: 52, won: 12, revenue: '$360,000', rate: '23.1%' }
                          ].map((rep, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="font-semibold text-purple-600">{rep.name}</div>
                              <div className="text-sm text-gray-600">{rep.leads} leads</div>
                              <div className="text-sm font-semibold text-green-600">{rep.revenue}</div>
                              <div className="text-sm text-gray-600">{rep.rate}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    
                    {activeTab === 'ai' && (
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h5 className="font-semibold">Opening Line Test</h5>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                              Running
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">Testing: Hot Lead Conversion</p>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <div className="font-semibold text-blue-900 mb-2">🏆 Variant B Leading (+7%)</div>
                            <div className="flex justify-between text-xs text-blue-700 mb-2">
                              <span>Participants: 1,247</span>
                              <span>Confidence: Significant</span>
                            </div>
                            <div className="w-full bg-blue-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'analytics' && (
                      <div>
                        <div className="mb-6">
                          <div className="h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-purple-600 mb-1">92%</div>
                              <div className="text-sm text-gray-600">Average Lead Score</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-semibold text-gray-900">Top Pain Points Identified</h5>
                          {[
                            { point: 'Need to relocate quickly', percentage: 45 },
                            { point: 'Inherited property issues', percentage: 38 },
                            { point: 'Financial distress', percentage: 32 }
                          ].map((item, index) => (
                            <div key={index}>
                              <div className="flex justify-between text-sm mb-1">
                                <span>{item.point}</span>
                                <span className="font-semibold">{item.percentage}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" 
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
                          { condition: 'If qualification score > 90%', action: 'Then assign to top performer', color: 'purple' },
                          { condition: 'If no response in 2 hours', action: 'Then send SMS reminder', color: 'pink' }
                        ].map((rule, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <div className={`w-4 h-4 bg-${rule.color}-600 rounded-full mr-3`}></div>
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
              Sales Teams That Stopped Chasing Ghosts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from teams who transformed their sales process with SurFox.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I went from 50 calls a day to 8. Same number of deals closed, but now I actually have time to prepare for each conversation. Game changer.",
                author: 'Sarah Chen',
                role: 'Senior Sales Rep • Real Estate',
                avatar: 'SC',
                metric: 'Time Saved',
                value: '84%'
              },
              {
                quote: "My close rate went from 15% to 47% overnight. When everyone you talk to is pre-qualified, selling becomes a conversation, not a battle.",
                author: 'Marcus Rodriguez',
                role: 'Sales Manager • Solar',
                avatar: 'MR',
                metric: 'Close Rate',
                value: '3.1x'
              },
              {
                quote: "We scaled from 5 to 25 reps without losing quality. The AI ensures everyone gets the same high-quality leads. It's like cloning your best qualifier.",
                author: 'Jennifer Wu',
                role: 'VP of Sales • B2B SaaS',
                avatar: 'JW',
                metric: 'Team Growth',
                value: '5x'
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
              Pricing That Scales With Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Only pay for qualified leads. No setup fees. Cancel anytime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                description: 'Perfect for individual reps',
                price: 97,
                features: [
                  'Up to 50 qualified leads',
                  'Basic AI qualification',
                  'Email support',
                  'CRM integrations'
                ],
                featured: false
              },
              {
                name: 'Professional',
                description: 'For high-performing teams',
                price: 297,
                features: [
                  'Up to 200 qualified leads',
                  'Advanced AI + A/B testing',
                  'Priority phone support',
                  'All integrations + API',
                  'Team performance analytics'
                ],
                featured: true
              },
              {
                name: 'Enterprise',
                description: 'For scaling organizations',
                price: 'Custom',
                features: [
                  'Unlimited qualified leads',
                  'Custom AI training',
                  'Dedicated success manager',
                  'Custom integrations',
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
              Everything you need to know about transforming your sales process.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'What exactly is a "qualified lead"?',
                answer: 'A qualified lead is someone who has been engaged by our AI, answered key qualifying questions, expressed genuine interest, meets your specific criteria (budget, timeline, need), and has agreed to speak with you. We use a proprietary scoring system that ensures you only pay for leads that are actually worth your time.'
              },
              {
                question: 'How quickly will I see results?',
                answer: 'Most clients see qualified leads within 24-48 hours of setup. The AI starts working immediately on your existing leads, and you\'ll notice the difference in call quality from day one. Full optimization typically happens within the first 2 weeks as the AI learns your specific market.'
              },
              {
                question: 'Will this work with my CRM?',
                answer: 'Yes! We integrate seamlessly with all major CRMs including Salesforce, HubSpot, Pipedrive, Follow Up Boss, and more. We also offer API access for custom integrations. Setup takes about 15 minutes with our step-by-step guide.'
              },
              {
                question: 'What if I\'m not satisfied with lead quality?',
                answer: 'We have a 94% satisfaction rate, but if you receive a lead that doesn\'t meet your criteria, simply mark it in the dashboard and you won\'t be charged. Plus, we offer a 30-day money-back guarantee if you\'re not seeing the results you expected.'
              },
              {
                question: 'How is this different from other lead services?',
                answer: 'Unlike lead generation services that send you cold contacts, we take YOUR existing leads and qualify them using AI. We don\'t generate leads - we make sure the leads you already have are actually worth calling. It\'s like having a top qualifier working 24/7 just for you.'
              },
              {
                question: 'Can I customize the AI\'s approach?',
                answer: 'Absolutely! You can customize qualification criteria, conversation scripts, and even the AI\'s tone to match your brand. Our Professional and Enterprise plans include A/B testing so you can optimize what works best for your specific market.'
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
            Ready to Stop Wasting Time on Tire-Kickers?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join 2,847 sales teams who only talk to qualified prospects.
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
              <p className="mb-6">We don't close deals. We deliver people ready to buy.</p>
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