'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, Check, X, Brain, MessageSquare, Target, User, ChevronRight, Phone, Mail, Zap, Activity, Shield, Eye, TrendingUp, BarChart3, Clock, ArrowRight, Building, Users, Cpu, Database, Lightbulb, Layers, Gauge, Sparkles, Send, Bot, Menu } from 'lucide-react'
import Nav from './components/nav'

const SurFoxHomepage = () => {
  const [activeTab, setActiveTab] = useState('psychology')
  const [typingText, setTypingText] = useState('')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const messages = [
    "Hi Sarah, I see you're analytical - here's the exact ROI data you need...",
    "Mark, you seem decisive - let's cut to the chase and schedule that demo...",
    "Jennifer, I know you're skeptical - here's proof from companies just like yours..."
  ]

  // Typing animation effect
  useEffect(() => {
    const currentMessage = messages[currentMessageIndex]
    let index = 0
    const timer = setInterval(() => {
      if (index <= currentMessage.length) {
        setTypingText(currentMessage.slice(0, index))
        index++
      } else {
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
          setTypingText('')
        }, 2000)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentMessageIndex])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">
        <Nav /> 

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section - Fixed Above Fold */}
      <section className="relative py-12 pt-24 lg:pt-20 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2 text-red-300" />
                <span className="text-red-200 font-medium text-sm">The Evolution Is Here • Text Blasting Is Dead</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Stop blasting thousands of texts.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Start having conversations.
                </span>
              </h1>
              
              <div className="text-xl text-purple-200 space-y-4">
                <p>I spent 20 years watching text blasters fail because they treat every prospect the same.</p>
                <p className="text-lg text-gray-300">
                  <strong className="text-white">Some prospects need data, others need emotion. Some respond to pressure, others to patience.</strong>
                  <br />SurFox is agentic AI that has real conversations and learns each prospect's psychology.
                </p>
                <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 backdrop-blur-sm">
                  <Target className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-yellow-200 font-medium text-sm">End Of Text Blasting Era</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
<button
  className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <div className="relative flex items-center justify-center">
    <Play className="w-5 h-5 mr-2" />
    See AI Conversations
  </div>
</button>

<a
  href="#how-it-works"
  className="px-6 py-3 border-2 border-purple-400/50 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300"
>
  Why Blasting Failed
</a>

              </div>

              {/* Tom's Quote - Updated */}
              <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-xl border border-purple-500/30 p-6 mt-6">
                <p className="text-purple-200 text-base mb-3 italic">
                  "Text blasters send 10,000 generic messages and waste hours sorting replies. SurFox has intelligent conversations and only gives you qualified prospects."
                </p>
                <p className="text-purple-300 text-sm">
                  Tom Bauer, Founder & CEO
                </p>
              </div>
            </div>

            {/* Live AI Demo - Updated */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-purple-200">Agentic AI Conversations</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-xs">CONVERSING</span>
                  </div>
                </div>
                
                {/* AI Analysis Display - Updated */}
                <div className="space-y-3 mb-4">
                  <div className="bg-black/40 rounded-lg p-3 border border-cyan-500/30">
                    <div className="text-cyan-300 text-xs mb-2">AI Reading Prospect Psychology...</div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Decision Style:</span>
                          <span className="text-yellow-400 font-bold">Analytical</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Trust Level:</span>
                          <span className="text-red-400 font-bold">Skeptical</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Motivation:</span>
                          <span className="text-green-400 font-bold">ROI-Driven</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Communication:</span>
                          <span className="text-blue-400 font-bold">Direct</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Live Conversation Generation */}
                  <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-3 border border-purple-400/30">
                    <div className="text-purple-300 text-xs mb-2">Adaptive Conversation:</div>
                    <div className="bg-black/60 rounded-lg p-2 font-mono text-xs text-green-300 min-h-[40px] flex items-center">
                      {typingText}<span className="animate-pulse">|</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-full border border-green-400/30">
                    <Zap className="w-3 h-3 mr-2 text-green-400" />
                    <span className="text-green-300 text-xs font-medium">Psychology Match: 94%</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center transform -rotate-12 shadow-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Declaration Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-xl border-y border-red-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
              The Text Blasting Era Is Over.
              <br />
              <span className="text-white">The Conversation Era Begins Now.</span>
            </h2>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-400/30 backdrop-blur-sm mb-6">
              <Target className="w-5 h-5 mr-3 text-red-400" />
              <span className="text-red-200 font-bold">We're Taking Over</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                <X className="w-8 h-8 mr-3" />
                Text Blasters (The Old Way):
              </h3>
              <div className="space-y-4 text-red-200">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Send 10,000 identical messages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Manually sort through garbage replies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Waste hours on "not interested" responses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Treat analytical prospects like emotional ones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Never learn what actually works</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
                <Brain className="w-8 h-8 mr-3" />
                SurFox Agentic AI (The Future):
              </h3>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-2 mb-4 border border-yellow-400/30">
                <div className="text-xs font-bold text-yellow-300 flex items-center justify-center">
                  <Zap className="w-3 h-3 mr-2" />
                  INTELLIGENT CONVERSATIONS
                </div>
              </div>
              <div className="space-y-4 text-cyan-200">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>AI has real conversations with prospects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Only qualified prospects reach you</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Reads psychology and adapts in real-time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Learns from every conversation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Gets smarter while you sleep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition - Updated */}
      <section className="relative py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
              You're drowning in replies you can't use
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Text blasters create more work, not less. You send thousands of messages, then spend hours sorting through 
              "stop," "not interested," and "maybe later" responses. <em>That's not scaling — that's suffering.</em>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <X className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold text-red-300">Text Blasting Reality:</h3>
              </div>
              <ul className="space-y-4 text-red-200">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <strong>Mass generic messages</strong> — Same SMS to everyone, no personalization
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <strong>Manual reply sorting</strong> — Hours wasted reading "not interested" responses
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <strong>Zero psychology awareness</strong> — Treating skeptical prospects like decisive ones
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <strong>Sales reps become text operators</strong> — Spending day typing instead of selling
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-cyan-300">SurFox Conversation AI:</h3>
              </div>
              <ul className="space-y-4 text-cyan-200">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong>AI handles all conversations</strong> — No manual texting or reply sorting
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong>Only qualified prospects escalated</strong> — You only talk to ready buyers
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong>Psychology-based adaptation</strong> — Different approach for each personality type
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong>Sales reps focus on closing</strong> — AI does the work, you get the results
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Updated */}
      <section id="how-it-works" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              How Agentic AI Replaces Text Blasting
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              While text blasters send and hope, our AI reads psychology, has real conversations, and learns what works. 
              You get qualified prospects, not message volume.
            </p>
          </div>
          
          {/* Updated Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-900/60 to-purple-600/60 rounded-3xl border border-purple-400/40 p-8 text-center backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-300 mb-3">1</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Initiates Conversations</h3>
                <p className="text-purple-200 leading-relaxed">
                  Upload your cold leads. AI immediately begins personalized conversations based on industry, role, 
                  and available context. No generic blasting.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
            </div>
            
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-900/60 to-cyan-600/60 rounded-3xl border border-cyan-400/40 p-8 text-center backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/50">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-300 mb-3">2</div>
                <h3 className="text-2xl font-bold text-white mb-4">Reads Psychology & Adapts</h3>
                <p className="text-cyan-200 leading-relaxed">
                  As conversations develop, AI reads each prospect's psychology in real-time. 
                  Skeptical? Gets proof. Decisive? Moves fast. Analytical? Provides data.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500"></div>
            </div>
            
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-900/60 to-green-600/60 rounded-3xl border border-green-400/40 p-8 text-center backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-500/50">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-300 mb-3">3</div>
                <h3 className="text-2xl font-bold text-white mb-4">Delivers Qualified Prospects</h3>
                <p className="text-green-200 leading-relaxed">
                  Only when AI detects genuine buying interest do you get notified. 
                  No more sorting replies — just qualified prospects ready to close.
                </p>
              </div>
            </div>
          </div>

          {/* Keep the existing interactive demo but with updated content */}
          <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-white mb-8">Live Psychology vs Blasting Demo</h3>
            
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm">
                {[
                  { id: 'psychology', label: 'Psychology Engine', icon: Brain },
                  { id: 'learning', label: 'Learning System', icon: Lightbulb },
                  { id: 'adaptation', label: 'Real-Time Adaptation', icon: Zap }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[400px]">
              {activeTab === 'psychology' && (
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-black/40 rounded-2xl p-6 border border-cyan-500/30">
                    <h4 className="text-xl font-bold text-cyan-300 mb-6 flex items-center">
                      <User className="w-6 h-6 mr-3" />
                      Sarah Chen - Tech Executive
                    </h4>
                    <div className="space-y-4">
                      {[
                        { label: 'Communication Style', value: 'Direct & Data-Driven', color: 'blue' },
                        { label: 'Decision Making', value: 'Analytical & Cautious', color: 'yellow' },
                        { label: 'Trust Building', value: 'Skeptical - Needs Proof', color: 'red' },
                        { label: 'Motivation Trigger', value: 'ROI & Efficiency', color: 'green' }
                      ].map((trait, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl">
                          <span className="text-gray-300">{trait.label}</span>
                          <span className={`font-bold ${
                            trait.color === 'blue' ? 'text-blue-400' :
                            trait.color === 'yellow' ? 'text-yellow-400' :
                            trait.color === 'red' ? 'text-red-400' :
                            'text-green-400'
                          }`}>{trait.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-black/40 rounded-2xl p-6 border border-purple-500/30">
                    <h4 className="text-xl font-bold text-purple-300 mb-6 flex items-center">
                      <Bot className="w-6 h-6 mr-3" />
                      AI-Generated Conversation
                    </h4>
                    <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-4 border border-purple-400/30 mb-4">
                      <div className="text-white leading-relaxed text-sm">
                        <strong>AI:</strong> "Hi Sarah, I see you're in fintech. We helped a similar company reduce sales cycle by 34%. Here's the breakdown: [ROI data]. Worth a brief call to see if it applies to your situation?"
                        <br/><br/>
                        <strong>Sarah:</strong> "I'm skeptical. We've tried solutions before."
                        <br/><br/>
                        <strong>AI:</strong> "I completely understand. Here are 3 specific case studies from companies that had the same concern: [detailed proof]. No pitch, just facts."
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-green-400">
                        <Check className="w-4 h-4 mr-2" />
                        Adapts to skepticism with proof
                      </div>
                      <div className="flex items-center text-green-400">
                        <Check className="w-4 h-4 mr-2" />
                        Data-focused for analytical type
                      </div>
                      <div className="flex items-center text-green-400">
                        <Check className="w-4 h-4 mr-2" />
                        Acknowledges concerns directly
                      </div>
                      <div className="flex items-center text-green-400">
                        <Check className="w-4 h-4 mr-2" />
                        Industry-specific relevance
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'learning' && (
                <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        icon: MessageSquare,
                        title: 'Conversation Patterns',
                        desc: 'Learns which conversation flows work for skeptical vs decisive prospects, optimal response timing, objection handling that builds trust',
                        gradient: 'from-blue-500 to-cyan-500'
                      },
                      {
                        icon: Brain,
                        title: 'Psychology Mapping',
                        desc: 'Identifies communication styles that resonate with different personality types, builds psychological profiles for better targeting',
                        gradient: 'from-purple-500 to-pink-500'
                      },
                      {
                        icon: TrendingUp,
                        title: 'Qualification Intelligence',
                        desc: 'Maps successful prospect qualification sequences, learns buying signals vs polite interest, optimizes conversion timing',
                        gradient: 'from-green-500 to-emerald-500'
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-black/40 rounded-2xl p-6 border border-gray-700/50 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-400/30 text-center">
                    <h4 className="text-xl font-bold text-white mb-4">AI Learning Scales By Plan</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-black/40 rounded-xl p-4">
                        <div className="font-bold text-gray-400 mb-2">Starter Plan</div>
                        <div className="text-gray-400 font-bold">No Learning (Static AI)</div>
                        <div className="text-xs text-gray-500 mt-1">Same responses always</div>
                      </div>
                      <div className="bg-black/40 rounded-xl p-4">
                        <div className="font-bold text-gray-400 mb-2">Growth Plan</div>
                        <div className="text-purple-400 font-bold">100 Conversation Memory</div>
                        <div className="text-xs text-purple-300 mt-1">Learns patterns & improves</div>
                      </div>
                      <div className="bg-black/40 rounded-xl p-4">
                        <div className="font-bold text-gray-400 mb-2">Scale Plan</div>
                        <div className="text-cyan-400 font-bold">1,000 Conversation Memory</div>
                        <div className="text-xs text-cyan-300 mt-1">Advanced psychology insights</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'adaptation' && (
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl p-6 border border-red-400/30">
                    <h4 className="text-xl font-bold text-red-300 mb-4 flex items-center">
                      <X className="w-6 h-6 mr-3" />
                      Text Blaster Approach
                    </h4>
                    <div className="bg-black/60 rounded-xl p-4 mb-4">
                      <div className="text-red-200 text-sm mb-3"><strong>Generic Message:</strong></div>
                      <div className="text-white text-sm leading-relaxed">
                        "Hi! I have a great solution for your business. Click here to learn more!"
                      </div>
                    </div>
                    <div className="bg-black/60 rounded-xl p-4 mb-4">
                      <div className="text-red-200 text-sm mb-3"><strong>Prospect Response:</strong></div>
                      <div className="text-gray-300 text-sm italic">"I've heard this before from other vendors..."</div>
                    </div>
                    <div className="text-xs text-red-300 bg-red-900/30 rounded-lg p-3">
                      <strong>Result:</strong> Manual sorting required, low trust, generic follow-up or give up
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/40 to-green-600/40 rounded-2xl p-6 border border-green-400/30">
                    <h4 className="text-xl font-bold text-green-300 mb-4 flex items-center">
                      <Brain className="w-6 h-6 mr-3" />
                      SurFox AI Approach
                    </h4>
                    <div className="bg-black/60 rounded-xl p-4 mb-4">
                      <div className="text-green-200 text-sm mb-3"><strong>AI Detects Skepticism:</strong></div>
                      <div className="text-white text-sm leading-relaxed">
                        "I understand the skepticism - you've probably been burned before. Here are 3 verified results from companies just like yours: [specific data, case studies]. No sales pitch, just facts. Worth 10 minutes?"
                      </div>
                    </div>
                    <div className="text-xs text-green-300 bg-green-900/30 rounded-lg p-3">
                      <strong>Psychology Adaptation:</strong> Acknowledges skepticism, provides proof, builds trust, low-pressure ask
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What It Is / Isn't - Updated to be more aggressive */}
      <section className="relative py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Let me be crystal clear about what this is
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
              I built SurFox because I was tired of watching sales teams waste time with text blasting tools. 
              This isn't another mass texting platform — <strong className="text-white">this is agentic AI that completely replaces manual texting.</strong>
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-400/30 backdrop-blur-sm">
              <Target className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-red-200 font-bold text-sm">The End of Text Blasting Era</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-red-300 mb-8">This is NOT another text blaster:</h3>
              <ul className="space-y-6 text-red-200">
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-400" />
                  <div>
                    <strong className="block">Textus, Skipio, Launch Control clones</strong>
                    <span className="text-red-300">We don't blast thousands of identical messages</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-400" />
                  <div>
                    <strong className="block">Manual reply management</strong>
                    <span className="text-red-300">You won't sort through "stop" and "not interested" replies</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-400" />
                  <div>
                    <strong className="block">Generic message templates</strong>
                    <span className="text-red-300">No more one-size-fits-all SMS campaigns</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-400" />
                  <div>
                    <strong className="block">Sales reps as text operators</strong>
                    <span className="text-red-300">Your team won't spend days typing messages</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-300 mb-8">This IS the evolution:</h3>
              <ul className="space-y-6 text-cyan-200">
                <li className="flex items-start">
                  <Bot className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong className="block">Agentic AI that has conversations</strong>
                    <span className="text-cyan-300">AI conducts full conversations without human intervention</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Brain className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong className="block">Psychology-based engagement</strong>
                    <span className="text-cyan-300">Reads personality and adapts conversation style in real-time</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong className="block">Self-improving system</strong>
                    <span className="text-cyan-300">Gets smarter with every conversation, learns what works</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong className="block">Qualified-prospect-only delivery</strong>
                    <span className="text-cyan-300">Only escalates prospects who are actually ready to buy</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications - Keep the same but updated messaging */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Every industry is ready for the upgrade
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Text blasting failed across every industry. SurFox adapts to each industry's unique psychology, 
              terminology, and buying patterns. Real conversations replace generic blasts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Building, 
                title: 'Real Estate', 
                desc: 'Stop blasting "Are you still looking?" to every lead. AI has real conversations about their timeline and needs.',
                psychology: 'Adapts to emotional vs logical buyer personalities',
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: Cpu, 
                title: 'SaaS & Technology', 
                desc: 'End generic demo requests. AI understands technical vs business stakeholders and qualifies properly.',
                psychology: 'Technical depth for engineers, ROI focus for executives',
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                icon: Users, 
                title: 'Professional Services', 
                desc: 'Replace "When can we chat?" blasts with conversations about actual project needs and timing.',
                psychology: 'Decision-maker vs influencer conversation styles',
                gradient: 'from-green-500 to-emerald-500'
              },
              { 
                icon: TrendingUp, 
                title: 'Financial Services', 
                desc: 'Stop mass texting about loans. AI qualifies financial readiness and risk tolerance through conversation.',
                psychology: 'Conservative vs aggressive risk tolerance detection',
                gradient: 'from-yellow-500 to-orange-500'
              },
              { 
                icon: Shield, 
                title: 'Healthcare', 
                desc: 'End generic procedure reminders. AI understands comfort levels and decision-making preferences.',
                psychology: 'Adapts to anxiety levels and information needs',
                gradient: 'from-red-500 to-pink-500'
              },
              { 
                icon: Target, 
                title: 'Manufacturing', 
                desc: 'Replace procurement blasts with conversations that understand buying cycles and approval processes.',
                psychology: 'Engineering vs procurement vs executive mindsets',
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((industry, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-purple-500/50">
                <div className={`w-12 h-12 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{industry.desc}</p>
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-3 border border-purple-500/30">
                  <div className="text-sm text-purple-300 font-medium flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    {industry.psychology}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing - Updated for anti-blasting messaging */}
      <section id="pricing" className="relative py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Choose your plan
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Stop paying for text blasting tools that create more work. Start with AI that actually gets results.
            </p>
            <p className="text-lg text-purple-300 font-medium">
              Higher tiers = Smarter AI = Better conversations = More qualified prospects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <div className="text-3xl font-bold text-white mb-4">$197<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-4">Perfect for individual sales professionals tired of manual texting</p>
              
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 mb-6 border border-gray-600/30">
                <div className="text-sm font-medium text-gray-300">AI Capability:</div>
                <div className="text-sm text-gray-400">Basic conversations with context</div>
                <div className="text-xs text-gray-500 mt-1">No learning, but still way better than blasting</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>500 monthly leads</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>AI has real conversations (no blasting)</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Basic psychological profiling</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>AI auto-replies to prospects</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Cold follow-up automations</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>1 team seat</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.location.href = 'https://www.getsurfox.com/subscribe/starter'}
                className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-xl hover:from-gray-600 hover:to-gray-500 transition-colors font-medium"
              >
                Start Free Trial
              </button>
            </div>

            {/* Growth Plan */}
            <div className="relative bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl border-2 border-purple-400/50 p-8 text-center backdrop-blur-xl transform scale-105 shadow-2xl shadow-purple-500/25">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <div className="text-3xl font-bold text-white mb-4">$497<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-4">For teams ready to completely eliminate manual texting</p>
              
              <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-lg p-3 mb-6 border border-purple-400/30">
                <div className="text-sm font-medium text-purple-300">AI Capability:</div>
                <div className="text-sm text-purple-200">Learning AI with 100 conversation memory</div>
                <div className="text-xs text-purple-300 mt-1">Gets smarter with every conversation</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>2,500 monthly leads</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Everything in Starter, plus:</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Funnel module (Cold → Escalated)</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Escalation score threshold control</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>After-hours AI override toggle</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>1 AI knowledge base file upload</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Chrome extension</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>5 team seats</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Zapier/API integration</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.location.href = 'https://www.getsurfox.com/subscribe/growth'}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-colors font-medium shadow-lg"
              >
                Start Free Trial
              </button>
            </div>

            {/* Scale Plan */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
              <div className="text-3xl font-bold text-white mb-4">$1,997<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-4">For enterprise teams replacing text blasting completely</p>
              
              <div className="bg-gradient-to-r from-cyan-800/50 to-green-800/50 rounded-lg p-3 mb-6 border border-cyan-400/30">
                <div className="text-sm font-medium text-cyan-300">AI Capability:</div>
                <div className="text-sm text-cyan-200">Advanced AI with 1,000 conversation memory</div>
                <div className="text-xs text-cyan-300 mt-1">Expert-level psychology insights</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>10,000+ monthly leads</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Everything in Growth, plus:</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Unlimited AI knowledge base uploads</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Full access + team metrics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>15+ team seats</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Full RBAC (role-based access)</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Message A/B testing (AI)</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>White-glove onboarding & CSM</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.location.href = 'https://www.getsurfox.com/subscribe/scale'}
                className="w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-800/50 transition-colors font-medium"
              >
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-400 mb-4">
              All plans include: 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-4 max-w-2xl mx-auto border border-red-500/30">
              <p className="text-sm text-red-300 font-medium flex items-center justify-center">
                <Target className="w-4 h-4 mr-2" />
                Stop paying for text blasting tools that create more work. Pay for AI that delivers qualified prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Updated to be more aggressive */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Text blasting is dead. The future is here.
          </h2>
          <p className="text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stop wasting time sorting through "not interested" replies. You've got prospects sitting in your CRM right now 
            who are ready to buy — they just need someone who understands their psychology. Let SurFox find them for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-8">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                <Zap className="w-6 h-6 mr-3" />
                Join The Evolution
              </div>
            </button>
            <button className="px-12 py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
              See AI In Action
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-2xl p-6 max-w-2xl mx-auto border border-purple-500/30">
            <h3 className="font-bold mb-4 text-xl">Questions? Ready to eliminate manual texting?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a href="mailto:tom@surfox.com" className="flex items-center text-purple-200 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                tom@surfox.com
              </a>
              <a href="tel:+15551234567" className="flex items-center text-purple-200 hover:text-white transition-colors">
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