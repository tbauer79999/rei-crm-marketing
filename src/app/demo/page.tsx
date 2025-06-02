"use client"
import React, { useState } from 'react'
import { ArrowRight, Brain, CheckCircle, MessageSquare } from 'lucide-react'
import ConversationStep from './ConversationStep'

interface Scenario {
  id: number
  title: string
  message: string
  description: string
}

const MinimalDemo = () => {
  const [step, setStep] = useState(1)
  const [company, setCompany] = useState('')
  const [industry, setIndustry] = useState('')
  const [offering, setOffering] = useState('')
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null)
  const [selectedFollowUp, setSelectedFollowUp] = useState<Scenario | null>(null)
  const [conversationHistory, setConversationHistory] = useState<Array<{role: string, content: string}>>([])
  const [showFollowUps, setShowFollowUps] = useState(false)
  const [aiInsights, setAiInsights] = useState<any>(null)
  const [conversationData, setConversationData] = useState<any>(null)

  // Industry options as specified in directive
  const industryOptions = [
    "Real Estate (Wholesalers/Flippers)",
    "Car Sales", 
    "Mortgages",
    "Staffing Agencies",
    "Home Services"
  ]

  // Dynamic scenarios based on industry - all universally applicable but with industry context
  const scenarios: Scenario[] = [
    { 
      id: 1, 
      title: "Confused Lead", 
      message: "Who is this?", 
      description: "The lead doesn't remember who contacted them." 
    },
    { 
      id: 2, 
      title: "Soft Rejection", 
      message: "Not interested", 
      description: "The lead responds negatively but not firmly." 
    },
    { 
      id: 3, 
      title: "Info Seeker", 
      message: "How does it work?", 
      description: "The lead is asking for more information." 
    }
  ]

  // Get industry-specific problem text
  const getIndustryProblemText = () => {
    switch(industry) {
      case "Real Estate (Wholesalers/Flippers)":
        return "Most Investors Face"
      case "Car Sales":
        return "Most Car Sales Teams Face"
      case "Mortgages":
        return "Most Mortgage Teams Face"
      case "Staffing Agencies":
        return "Most Staffing Agencies Face"
      case "Home Services":
        return "Most Home Service Teams Face"
      default:
        return "Most Sales Teams Face"
    }
  }

  // Get industry-specific AI response for initial contact
  const getIndustryAIResponse = (scenario: Scenario) => {
    const companyName = company || "our company"
    
    switch(industry) {
      case "Real Estate (Wholesalers/Flippers)":
        switch(scenario.id) {
          case 1: return `Hi there! This is Sarah from ${companyName}. You filled out a form on our website asking about quick cash offers for properties. I wanted to reach out personally - do you have 2 minutes to chat about your property situation?`
          case 2: return `No worries at all! I completely understand. Just so you know, we specialize in unique situations - inherited properties, properties that need work, or when you need to sell quickly. If anything changes, feel free to reach out. Have a great day!`
          case 3: return `Great question! We make cash offers on properties in any condition. Here's how it works: I ask a few quick questions about your property, then we can usually give you a fair cash offer within 24 hours. No repairs needed, no realtor fees. Would you like me to walk you through it?`
        }
        break;
      
      case "Car Sales":
        switch(scenario.id) {
          case 1: return `Hi there! This is Mike from ${companyName}. You filled out a form on our website asking about our vehicle inventory. I wanted to reach out personally - do you have 2 minutes to chat about what you're looking for?`
          case 2: return `No problem at all! I totally understand. Just so you know, we specialize in helping people find the right vehicle for their needs - whether it's financing, trade-ins, or finding specific models. If anything changes, feel free to reach out. Have a great day!`
          case 3: return `Excellent question! We make the car buying process simple and transparent. Here's how it works: I ask a few questions about what you're looking for, then we can show you options that fit your needs and budget. We handle financing, trade-ins, everything. Would you like me to walk you through it?`
        }
        break;

      case "Mortgages":
        switch(scenario.id) {
          case 1: return `Hi there! This is Jennifer from ${companyName}. You filled out a form on our website asking about mortgage options. I wanted to reach out personally - do you have 2 minutes to chat about your home financing needs?`
          case 2: return `No worries at all! I completely understand. Just so you know, we specialize in unique financing situations - first-time buyers, refinancing, or investment properties. If anything changes, feel free to reach out. Have a great day!`
          case 3: return `Great question! We help people secure the best mortgage rates and terms. Here's how it works: I ask a few questions about your situation, then we can usually pre-qualify you and show you options within 24 hours. No obligation. Would you like me to walk you through it?`
        }
        break;

      case "Staffing Agencies":
        switch(scenario.id) {
          case 1: return `Hi there! This is David from ${companyName}. You filled out a form on our website about staffing solutions for your company. I wanted to reach out personally - do you have 2 minutes to chat about your hiring needs?`
          case 2: return `No problem at all! I totally understand. Just so you know, we specialize in unique staffing situations - temporary staff, specialized roles, or urgent hiring needs. If anything changes, feel free to reach out. Have a great day!`
          case 3: return `Excellent question! We connect companies with qualified candidates quickly. Here's how it works: I ask a few questions about your staffing needs, then we can usually provide candidate options within 48 hours. Pre-screened and ready to interview. Would you like me to walk you through it?`
        }
        break;

      case "Home Services":
        switch(scenario.id) {
          case 1: return `Hi there! This is Lisa from ${companyName}. You filled out a form on our website asking about our home services. I wanted to reach out personally - do you have 2 minutes to chat about your project?`
          case 2: return `No worries at all! I completely understand. Just so you know, we specialize in unique situations - emergency repairs, large projects, or when you need work done quickly. If anything changes, feel free to reach out. Have a great day!`
          case 3: return `Great question! We provide reliable home services with transparent pricing. Here's how it works: I ask a few questions about your project, then we can usually provide a quote within 24 hours. Licensed, insured, guaranteed work. Would you like me to walk you through it?`
        }
        break;
    }
    
    // Fallback generic response
    switch(scenario.id) {
      case 1: return `Hi there! This is Sarah from ${companyName}. You filled out a form asking about our services. Do you have 2 minutes to chat?`
      case 2: return `No problem! I understand. Feel free to reach out if anything changes. Have a great day!`
      case 3: return `Great question! Let me walk you through how we can help you. Do you have a few minutes?`
      default: return `Hi! I'm Sarah with ${companyName}. You filled out a form asking about our services. Do you have 2 minutes to chat?`
    }
  }

  const handleScenarioClick = (scenario: Scenario) => {
    setSelectedScenario(scenario)
    
    const aiResponse = getIndustryAIResponse(scenario)
    setConversationHistory([
      { role: 'user', content: scenario.message },
      { role: 'assistant', content: aiResponse }
    ])
    
    // Generate AI insights for initial scenario
    const insights = {
      strategy: scenario.id === 1 ? "Re-establish context without overwhelming" : 
               scenario.id === 2 ? "Plant seeds for future contact" : 
               "Provide specific value while qualifying",
      psychology: scenario.id === 1 ? "Confusion often masks genuine interest" :
                 scenario.id === 2 ? "Objections usually indicate underlying motivation" :
                 "Information seeking suggests evaluation mode",
      signals: scenario.id === 1 ? ["Quick response", "Asking for clarification", "Not hostile"] :
              scenario.id === 2 ? ["Said 'right now' not 'never'", "Responded vs ignored", "Defensive tone"] :
              ["Specific questions", "Process-oriented", "Evaluating options"]
    }
    setAiInsights(insights)
    setStep(3)
  }

  const getFollowUpOptions = (scenario: Scenario) => {
    const followUps = {
      1: [
        {
          id: 11,
          title: "Polite Deflection",
          message: "Oh okay, but I'm not really looking to sell right now",
          description: "The lead is trying to disengage politely, but not firmly shutting the door."
        },
        {
          id: 12,
          title: "Cautious Interest",
          message: "What kind of offers are we talking about?",
          description: "The lead is curious but hesitant — possibly unsure of legitimacy or value."
        },
        {
          id: 13,
          title: "Direct Engagement",
          message: "Actually, I might be interested. What's the process?",
          description: "The lead is ready to engage seriously and is asking about next steps."
        }
      ],
      2: [
        {
          id: 21,
          title: "Firm Goodbye",
          message: "Thanks for understanding. Have a good day.",
          description: "The lead is cutting off the conversation — low interest."
        },
        {
          id: 22,
          title: "Curious Despite Objection",
          message: "What kind of situations are you talking about?",
          description: "Despite rejecting, the lead shows curiosity — mixed signals."
        },
        {
          id: 23,
          title: "Sudden Urgency",
          message: "How quickly can you close?",
          description: "The lead is urgently interested in your ability to act fast."
        }
      ],
      3: [
        {
          id: 31,
          title: "Decision Delay",
          message: "I need to think about it and talk to my spouse",
          description: "The lead is stalling — classic delay tactic with external excuse."
        },
        {
          id: 32,
          title: "Urgent Situation",
          message: "We inherited this property and need to sell fast",
          description: "The lead has strong motivation and a time-sensitive need."
        },
        {
          id: 33,
          title: "Price Shopping",
          message: "What's your typical offer compared to market value?",
          description: "The lead is comparing options — competitive scenario."
        }
      ]
    }

    return followUps[scenario.id as keyof typeof followUps] || []
  }

  const handleFollowUpClick = (followUp: Scenario) => {
    setSelectedFollowUp(followUp)
    setConversationHistory(prev => [...prev, 
      { role: 'user', content: followUp.message },
      { role: 'assistant', content: `Great question! Let me provide you with more specific details about how we can help you with ${company}.` }
    ])
    
    // Enhanced insights for follow-up
    const enhancedInsights = {
      ...aiInsights,
      finalStrategy: followUp.id.toString().endsWith('3') ? "Direct sales approach - high intent detected" :
                    followUp.id.toString().endsWith('2') ? "Educational nurturing - build trust first" :
                    "Long-term relationship building - plant seeds",
      leadType: followUp.id.toString().endsWith('3') ? "Hot Prospect" :
               followUp.id.toString().endsWith('2') ? "Warm Lead" : 
               "Cold Nurture",
      nextSteps: followUp.id.toString().endsWith('3') ? ["Schedule consultation within 24 hours", "Prepare detailed proposal"] :
                followUp.id.toString().endsWith('2') ? ["Send targeted educational content", "Follow up in 3-5 days"] :
                ["Add to nurture sequence", "Monthly value-add communications"]
    }
    setAiInsights(enhancedInsights)
    setShowFollowUps(false)
    setStep(4)
  }

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Advanced AI Intelligence Demo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Watch AI Think Like a Sales Expert
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly how our AI analyzes, strategizes, and adapts in real-time. 
              Every decision explained with professional-grade intelligence.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Business</h2>
                <p className="text-gray-600">So our AI can personalize every response for your exact situation</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Austin Solutions"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select 
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your industry...</option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product/Service You're Selling</label>
                <input
                  type="text"
                  placeholder="e.g., Quick cash offers, Vehicle financing, Home loans"
                  value={offering}
                  onChange={(e) => setOffering(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!company || !industry || !offering}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:hover:scale-100"
              >
                Start AI Intelligence Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <div className="flex items-center justify-center space-x-8 text-gray-500 text-sm mt-6">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Setup in 60 seconds
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Results in 24 hours
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  30-day guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pick Your Challenge Scenario
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a difficult lead response. You'll see our AI analyze it in real-time, 
              craft the perfect reply, and adapt as the conversation evolves.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 mb-8 border border-blue-200 bg-blue-50">
            <h3 className="font-semibold text-blue-900 mb-2">Business Context:</h3>
            <p className="text-blue-800">
              <strong>{company}</strong> • {industry} • {offering}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-white rounded-2xl shadow-lg border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border-gray-200 hover:border-purple-300 group"
                onClick={() => handleScenarioClick(scenario)}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-800 font-medium italic text-lg">"{scenario.message}"</p>
                </div>

                <div className="bg-red-50 p-3 rounded-lg border border-red-200 mb-4">
                  <p className="text-xs text-red-700">
                    <strong>Why This Usually Fails:</strong> Most {getIndustryProblemText().toLowerCase()} send generic pitches that bore them
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105">
                  Watch AI Analyze This
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Each scenario demonstrates different AI strategies for lead qualification and conversion in {industry.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (step === 3) {
    return (
      <ConversationStep 
        company={company} 
        industry={industry}
        offering={offering}
        selectedScenario={selectedScenario} 
        onComplete={(data) => setStep(4)} 
      />
    )
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">🚀 Complete AI Analysis</h1>
          
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h3 className="font-bold mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Full Conversation
            </h3>
            
            <div className="space-y-4">
              {conversationHistory.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'assistant' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-lg max-w-md ${
                    msg.role === 'assistant' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm mb-1 opacity-70">
                      {msg.role === 'assistant' ? `${company} AI` : 'Lead'}
                    </p>
                    <p>{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h3 className="font-bold mb-4">Enhanced AI Analysis</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <span className="text-gray-700">Motivation Level:</span>
                <div className="bg-gray-200 rounded-full h-3 mt-1">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm text-gray-600">85%</span>
              </div>
              <div>
                <span className="text-gray-700">Urgency Score:</span>
                <div className="bg-gray-200 rounded-full h-3 mt-1">
                  <div className="bg-orange-500 h-3 rounded-full" style={{width: '72%'}}></div>
                </div>
                <span className="text-sm text-gray-600">72%</span>
              </div>
              <div>
                <span className="text-gray-700">Conversion Probability:</span>
                <div className="bg-gray-200 rounded-full h-3 mt-1">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '88%'}}></div>
                </div>
                <span className="text-sm text-gray-600">88%</span>
              </div>
            </div>

            {conversationData && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">🎯 Final Strategy</h4>
                    <p className="text-blue-800 text-sm">{conversationData.analysis.finalStrategy}</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-2">📋 Lead Classification</h4>
                    <p className="text-indigo-800 text-sm font-semibold">{conversationData.analysis.leadType}</p>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-900 mb-2">⚡ Recommended Next Steps</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    {conversationData.analysis.nextSteps?.map((step: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2 text-orange-600" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">🔥 FINAL LEAD SCORE: 88/100</h2>
            <p className="text-xl mb-4">✅ QUALIFIED HOT PROSPECT</p>
            <p className="mb-6">This lead is ready for immediate contact!</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setStep(1)
                  setSelectedScenario(null)
                  setSelectedFollowUp(null)
                  setConversationHistory([])
                  setShowFollowUps(false)
                }}
                className="bg-white text-green-600 px-6 py-3 rounded font-bold hover:bg-gray-100"
              >
                Try Another Scenario
              </button>
              <button 
                onClick={() => window.location.href = '/#pricing'}
                className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700"
              >
                Get This AI Working For Me
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MinimalDemo