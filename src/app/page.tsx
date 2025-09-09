'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Play,
  Check,
  X,
  Brain,
  MessageSquare,
  Target,
  User,
  ChevronRight,
  Phone,
  Mail,
  Zap,
  Activity,
  Shield,
  Eye,
  TrendingUp,
  BarChart3,
  Clock,
  ArrowRight,
  Building,
  Users,
  Cpu,
  Database,
  Lightbulb,
  Layers,
  Gauge,
  Sparkles,
  Send,
  Bot,
  Menu,
  HelpCircle,
  Plus,
  Minus,
  FileText,
  Award,
  Globe
} from 'lucide-react'
import Nav from './components/nav'
import Head from 'next/head'

const SurFoxHomepage = () => {
  const [activeTab, setActiveTab] = useState('psychology')
  const [typingText, setTypingText] = useState('')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  const messages = [
    "Analyzing prospect response patterns...",
    "Identifying communication preferences...",
    "Qualifying based on budget and timeline..."
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

const toggleFAQ = (index: number) => {
  setActiveFAQ(activeFAQ === index ? null : index)
}

  return (
    <>
      <Head>
        <title>SMS Sales Automation Software | SurFox AI Platform</title>

        <meta
          name="description"
          content="AI-powered SMS automation that handles your entire outreach process. Upload leads, AI qualifies prospects through conversations, deliver only sales-ready contacts to your team."
        />
        <meta
          name="keywords"
          content="SMS sales automation, AI lead qualification, automated texting, sales AI platform, lead nurturing, prospect qualification, SMS outreach"
        />
        <link rel="canonical" href="https://www.getsurfox.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="SMS Sales Automation That Qualifies Leads | SurFox" />
        <meta
          property="og:description"
          content="AI handles your SMS outreach from initial contact to qualified handoff. No more manual texting or sorting replies."
        />
        <meta property="og:url" content="https://www.getsurfox.com" />
        <meta property="og:site_name" content="SurFox" />
        <meta property="og:image" content="https://www.getsurfox.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getSurFox" />
        <meta name="twitter:title" content="SMS Sales Automation That Qualifies Leads | SurFox" />
        <meta
          name="twitter:description"
          content="AI handles SMS outreach and qualification. You get only sales-ready prospects."
        />
        <meta name="twitter:image" content="https://www.getsurfox.com/og-image.jpg" />
        <meta name="twitter:creator" content="@TomFromSurFox" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SurFox',
              applicationCategory: 'Sales Automation Software',
              description:
                'AI-powered SMS automation platform that qualifies leads through intelligent conversations.',
              url: 'https://www.getsurfox.com',
              logo: 'https://www.getsurfox.com/logo.png',
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '197',
                highPrice: '1997',
                priceCurrency: 'USD'
              },
              sameAs: ['https://twitter.com/getSurFox', 'https://www.linkedin.com/company/surfox']
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">
        <Nav />

        {/* Subtle Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-40 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 pt-24 lg:pt-20 min-h-[85vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <MessageSquare className="w-4 h-4 mr-2 text-blue-300" />
                  <span className="text-blue-200 font-medium text-sm">AI SMS Automation Platform</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    AI Handles Your Entire SMS Outreach Process
                  </span>
                </h1>

                <div className="text-xl text-purple-200 space-y-4">
                  <p className="text-lg text-gray-300">
                    Upload your leads. AI texts them, qualifies them through natural conversations, and delivers only sales-ready prospects to your team.
                  </p>
                  <p className="text-lg text-gray-300">
                    No more manual texting, sorting through replies, or chasing unqualified leads. Focus on closing deals while AI handles the qualification process.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing')
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="relative flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Get Started
                    </div>
                  </button>

                  <Link href="#how-it-works">
                    <button className="px-6 py-3 border-2 border-purple-400/50 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                      See How It Works
                    </button>
                  </Link>
                </div>

                {/* Company Info */}
                <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-xl border border-purple-500/30 p-6 mt-6">
                  <p className="text-purple-200 text-base mb-3">
                    SurFox automates the SMS qualification process that typically requires hours of manual work per day. Our AI conducts natural conversations to identify prospects ready for sales calls.
                  </p>
                  <p className="text-purple-300 text-sm">Currently in beta with select partners</p>
                </div>
              </div>

              {/* AI Process Demo */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-purple-200">AI Qualification Process</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-xs">ACTIVE</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="bg-black/40 rounded-lg p-3 border border-cyan-500/30">
                      <div className="text-cyan-300 text-xs mb-2">Conversation Analysis</div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Response Style:</span>
                            <span className="text-yellow-400 font-bold">Professional</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Engagement:</span>
                            <span className="text-green-400 font-bold">High</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Timeline:</span>
                            <span className="text-blue-400 font-bold">Q1 2025</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Budget:</span>
                            <span className="text-green-400 font-bold">Qualified</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-3 border border-purple-400/30">
                      <div className="text-purple-300 text-xs mb-2">AI Processing:</div>
                      <div className="bg-black/60 rounded-lg p-2 font-mono text-xs text-green-300 min-h-[40px] flex items-center">
                        {typingText}
                        <span className="animate-pulse">|</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-full border border-green-400/30">
                      <Check className="w-3 h-3 mr-2 text-green-400" />
                      <span className="text-green-300 text-xs font-medium">Qualified for Handoff</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-xl">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="relative py-20 bg-black/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Manual SMS Outreach Doesn't Scale
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Sales teams spend hours each day sending texts, reading replies, and trying to identify which prospects are actually interested. This manual process limits your team's capacity and creates inconsistent qualification.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold text-red-300">Current Manual Process</h3>
                </div>
                <ul className="space-y-4 text-red-200">
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Time-consuming texting</strong> - Sales reps spend hours crafting and sending individual messages
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Inconsistent qualification</strong> - Different reps ask different questions and interpret responses differently
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Limited capacity</strong> - Can only handle a small number of prospects effectively
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Poor lead tracking</strong> - Conversations scattered across personal phones and systems
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <Bot className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-cyan-300">SurFox Automated Process</h3>
                </div>
                <ul className="space-y-4 text-cyan-200">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Automated conversations</strong> - AI handles all initial outreach and follow-up sequences
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Consistent qualification</strong> - Same qualification criteria applied to every prospect
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Unlimited scale</strong> - Handle thousands of prospects simultaneously
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Complete visibility</strong> - All conversations tracked and analyzed in one platform
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                How SurFox Works
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                A systematic approach to SMS qualification that removes manual work while improving consistency and scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  number: '1',
                  icon: Database,
                  title: 'Upload Lead Lists',
                  description: 'Import your prospect lists with phone numbers. SurFox integrates with your existing CRM or accepts CSV uploads.',
                  color: 'from-purple-500 to-cyan-500'
                },
                {
                  number: '2',
                  icon: MessageSquare,
                  title: 'AI Initiates Contact',
                  description: 'AI begins personalized SMS conversations with each prospect, adapting messaging based on industry and role.',
                  color: 'from-cyan-500 to-blue-500'
                },
                {
                  number: '3',
                  icon: Brain,
                  title: 'Conversation Management',
                  description: 'AI maintains natural conversations, answers questions, handles objections, and gathers qualification information.',
                  color: 'from-blue-500 to-purple-500'
                },
                {
                  number: '4',
                  icon: BarChart3,
                  title: 'Qualification Scoring',
                  description: 'AI evaluates prospects based on budget, timeline, authority, and interest level using consistent criteria.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  number: '5',
                  icon: TrendingUp,
                  title: 'Qualified Handoff',
                  description: 'Sales-ready prospects are escalated to your team with full conversation history and qualification notes.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  number: '6',
                  icon: Activity,
                  title: 'Continuous Optimization',
                  description: 'System learns from outcomes to improve conversation quality and qualification accuracy over time.',
                  color: 'from-pink-500 to-purple-500'
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-gray-900/60 to-purple-900/60 rounded-3xl border border-purple-400/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:scale-105">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-purple-300 mb-3">{step.number}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-purple-200 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="relative py-20 bg-black/20 backdrop-blur-xl" id="features">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Platform Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Built for sales teams who need to scale personalized outreach without sacrificing conversation quality or qualification consistency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Natural Conversation Flow</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  AI maintains contextual conversations that feel natural to prospects. Handles common questions and objections without breaking conversation flow.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Contextual response generation
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Objection handling protocols
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Conversation memory and context
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Qualification Framework</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Systematic qualification process that evaluates prospects across multiple criteria to ensure only sales-ready leads reach your team.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Budget and timeline assessment
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Decision-making authority verification
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Interest and urgency scoring
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Complete visibility into conversation performance, qualification rates, and optimization opportunities across your entire outreach program.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Conversation success metrics
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Qualification rate tracking
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Performance optimization insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                About SurFox
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Building the Future of Sales Automation</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  SurFox was founded to solve a fundamental problem in sales: the manual, time-consuming process of qualifying leads through individual conversations. Our AI platform enables sales teams to scale personalized outreach while maintaining conversation quality and improving qualification consistency.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're currently in beta with select partners, refining our platform based on real-world usage and feedback from sales teams across various industries.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-xl p-6 border border-purple-500/30">
                    <Building className="w-8 h-8 text-purple-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">Company Stage</h4>
                    <p className="text-gray-300">Pre-launch beta with select enterprise partners</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl p-6 border border-cyan-500/30">
                    <Target className="w-8 h-8 text-cyan-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">Mission</h4>
                    <p className="text-gray-300">Eliminate manual SMS qualification while improving conversion rates</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/60 to-purple-900/60 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-xl">
                <h4 className="text-xl font-bold text-white mb-4">Platform Development</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Core AI conversation engine</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Qualification framework and scoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Analytics and reporting dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">CRM integrations and API development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-black/20 backdrop-blur-xl" id="faq">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about AI SMS automation and our platform capabilities
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  question: 'How does the autonomous follow-up system work?',
                  answer:
                    "The AI analyzes prospect response patterns, engagement levels, and behavioral signals to determine optimal follow-up timing. It automatically schedules and sends follow-up messages without manual intervention, adjusting frequency and timing based on each prospect's interaction history."
                },
                {
                  question: 'What types of documents can I upload to the knowledge base?',
                  answer:
                    'You can upload product specifications, case studies, pricing sheets, company information, FAQs, sales presentations, and any other documents relevant to your sales process. The AI references this information during conversations to provide accurate, company-specific answers.'
                },
                {
                  question: 'How does the AI learning system improve over time?',
                  answer:
                    'The AI analyzes conversation outcomes, response rates, and qualification success to identify patterns that work best for different prospect types. As conversation volume increases, the system becomes more effective at personalizing approaches and identifying high-quality leads.'
                },
                {
                  question: 'What industries can use this platform?',
                  answer:
                    "Our platform works across B2B industries including SaaS, professional services, real estate, financial services, and more. The AI adapts its conversation style and qualification questions based on your industry and target market."
                },
                {
                  question: 'How do you ensure compliance with SMS regulations?',
                  answer:
                    "We follow TCPA guidelines and industry best practices for automated communications. This includes proper opt-in procedures, clear identification, and easy opt-out mechanisms. We recommend reviewing compliance requirements with your legal team."
                },
                {
                  question: 'Can I customize the qualification criteria and knowledge base?',
                  answer:
                    "Yes, qualification criteria can be customized based on your sales process and ideal customer profile. You can also continuously update your knowledge base with new documents, and the AI will immediately begin using this information in conversations."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 mb-4 backdrop-blur-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-500/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {activeFAQ === index ? (
                      <Minus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    )}
                  </button>
                  {activeFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Platform Pricing
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Transparent pricing based on your outreach volume and team size. All plans include core AI conversation and qualification capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <div className="text-3xl font-bold text-white mb-4">
                  $197<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">
                  For individual sales professionals getting started with AI automation
                </p>

                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>1,000 monthly conversations</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>AI conversation management</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Basic qualification framework</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Performance dashboard</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>1 team member</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>

                <button
                  onClick={() => (window.location.href = 'https://www.getsurfox.com/subscribe/starter')}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-xl hover:from-gray-600 hover:to-gray-500 transition-colors font-medium"
                >
                  Get Started
                </button>
              </div>

              {/* Growth Plan */}
              <div className="relative bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl border-2 border-purple-400/50 p-8 text-center backdrop-blur-xl transform scale-105 shadow-xl">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    Recommended
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                <div className="text-3xl font-bold text-white mb-4">
                  $497<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">For growing sales teams scaling their outreach operations</p>

                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>10,000 monthly conversations</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Everything in Starter, plus:</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Advanced conversation learning</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Custom qualification criteria</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Team performance analytics</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>5 team members</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>

                <button
                  onClick={() => (window.location.href = 'https://www.getsurfox.com/subscribe/growth')}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-colors font-medium shadow-lg"
                >
                  Start Trial
                </button>
              </div>

              {/* Scale Plan */}
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
                <div className="text-3xl font-bold text-white mb-4">
                  $1,997<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">For enterprise teams with high-volume outreach requirements</p>

                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>50,000+ monthly conversations</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Everything in Growth, plus:</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Advanced AI optimization</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Custom integration development</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>White-glove onboarding</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Dedicated success manager</span>
                  </li>
                </ul>

                <button
                  onClick={() => (window.location.href = 'https://www.getsurfox.com/subscribe/scale')}
                  className="w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-800/50 transition-colors font-medium"
                >
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 max-w-3xl mx-auto border border-blue-500/40">
                <h3 className="text-xl font-bold text-blue-300 mb-4">Enterprise & Custom Solutions</h3>
                <p className="text-gray-300 mb-6">Need higher volume limits, custom integrations, or white-label options? We offer tailored solutions for enterprise requirements.</p>
                <button
                  onClick={() => (window.location.href = '/contact-sales')}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg"
                >
                  Discuss Enterprise Needs
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-gray-400 mb-4">All plans include: 30-day trial period • No setup fees • Cancel anytime</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Ready to Scale Your SMS Outreach?
            </h2>
            <p className="text-xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join our beta program and see how AI automation can transform your lead qualification process. Start with a 30-day trial and experience the difference automated conversations can make for your sales team.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing')
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start 30-Day Trial
                </div>
              </button>
              <Link href="/demo">
                <button className="px-10 py-4 border-2 border-purple-400/50 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-xl p-6 max-w-2xl mx-auto border border-purple-500/30">
              <h3 className="font-bold mb-4 text-lg">Questions about our platform?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a href="mailto:tom@surfox.com" className="flex items-center text-purple-200 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  tom@surfox.com
                </a>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">Currently accepting beta partners</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SurFoxHomepage