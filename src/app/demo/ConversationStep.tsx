"use client"
import React, { useState, useEffect } from 'react'
import { MessageSquare, Brain, ArrowRight, Zap, Target, CheckCircle, TrendingUp, AlertCircle, Clock, User } from 'lucide-react'

interface ConversationStepProps {
  company: string
  industry: string    // Add this
  offering: string    // Add this
  selectedScenario: any
  onComplete: (data: any) => void
}

const ConversationStep = ({ company, industry, offering, selectedScenario, onComplete }: ConversationStepProps) => {
  const [phase, setPhase] = useState<'story' | 'analyzing' | 'responding' | 'reveal' | 'choice' | 'final'>('story')
  const [showMessage, setShowMessage] = useState(false)
  const [showAIResponse, setShowAIResponse] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [selectedChoice, setSelectedChoice] = useState<any>(null)
  const [showFinalResponse, setShowFinalResponse] = useState(false)

  const getAIResponse = () => {
    switch(selectedScenario?.id) {
      case 1: // "Who is this?"
        return `Hi there! This is Sarah from ${company}. You filled out a form on our website asking about quick cash offers for properties. I wanted to reach out personally - do you have 2 minutes to chat about your property situation?`
      case 2: // "Not interested"
        return `No worries at all! I completely understand. Just so you know, we specialize in unique situations - inherited properties, properties that need work, or when you need to sell quickly. If anything changes, feel free to reach out. Have a great day!`
      case 3: // "How does it work?"
        return `Great question! We make cash offers on properties in any condition. Here's how it works: I ask a few quick questions about your property, then we can usually give you a fair cash offer within 24 hours. No repairs needed, no realtor fees. Would you like me to walk you through it?`
      default:
        return `Hi! I'm Sarah with ${company}. You filled out a form asking about our services. Do you have 2 minutes to chat?`
    }
  }

// Get dynamic industry-specific problem text
const getIndustryProblemText = () => {
  switch(industry) {
    case "Real Estate (Wholesalers/Flippers)": return "Most Investors Face"
    case "Car Sales": return "Most Car Sales Teams Face"
    case "Mortgages": return "Most Mortgage Teams Face"
    case "Staffing Agencies": return "Most Staffing Agencies Face"
    case "Home Services": return "Most Home Service Teams Face"
    default: return "Most Sales Teams Face"
  }
}


  const getChoices = () => {
    switch(selectedScenario?.id) {
      case 1: // "Who is this?"
        return [
          {
            id: 1,
            title: "Polite Deflection",
            message: "Oh right... but I'm not really looking to sell right now",
            description: "Lead remembers but tries to disengage politely"
          },
          {
            id: 2,
            title: "Cautious Interest", 
            message: "What kind of cash offers are we talking about?",
            description: "Lead is curious but hesitant about legitimacy"
          },
          {
            id: 3,
            title: "Direct Engagement",
            message: "Actually, I might be interested. What's the process?",
            description: "Lead is ready to engage seriously"
          }
        ]
      case 2: // "Not interested"
        return [
          {
            id: 1,
            title: "Firm Goodbye",
            message: "Thanks for understanding. Have a good day.",
            description: "Lead firmly ends conversation"
          },
          {
            id: 2,
            title: "Curious Despite Objection",
            message: "Wait, what kind of unique situations?",
            description: "Despite rejecting, lead shows curiosity"
          },
          {
            id: 3,
            title: "Sudden Urgency",
            message: "Actually... how quickly can you close?",
            description: "Lead reveals urgent need to sell"
          }
        ]
      case 3: // "How does it work?"
        return [
          {
            id: 1,
            title: "Decision Delay",
            message: "I need to think about it and talk to my spouse",
            description: "Classic delay tactic with external excuse"
          },
          {
            id: 2,
            title: "Urgent Situation",
            message: "We inherited this property and need to sell fast",
            description: "Strong motivation with time-sensitive need"
          },
          {
            id: 3,
            title: "Price Shopping",
            message: "What's your typical offer compared to market value?",
            description: "Lead is comparing options - competitive scenario"
          }
        ]
      default:
        return []
    }
  }

  const getFinalAIResponse = (choice: any) => {
    if (selectedScenario?.id === 1) {
      switch(choice.id) {
        case 1: return `I totally understand! No pressure at all. Just know that if your situation ever changes - maybe job relocation, inheritance, or you just want to avoid the hassle of traditional selling - we're here to help. Is it okay if I send you a quick text every few months with market updates?`
        case 2: return `Absolutely fair question! We typically offer 70-85% of market value, but you save on repairs, realtor fees, and closing costs. Plus we can close in 7-14 days instead of 3-6 months. Would you like me to run some quick numbers on your property to see if it makes sense?`
        case 3: return `Perfect! It's really straightforward. I'll ask about your property's condition, square footage, and your timeline. Then our team runs comps and we make you a no-obligation cash offer within 24 hours. If you like it, we can close in as little as 7 days. What's the address?`
      }
    } else if (selectedScenario?.id === 2) {
      switch(choice.id) {
        case 1: return `You too! Take care.`
        case 2: return `Great question! Things like inherited properties where families need to split proceeds quickly, houses that need major repairs that would cost too much to fix, or when someone needs to relocate for work and can't wait months for a traditional sale. Sound familiar?`
        case 3: return `We can typically close in 7-14 days once you accept our offer. Sometimes even faster if needed. What's driving the urgency - job relocation, financial situation, or something else? That helps us understand how we can best help you.`
      }
    } else if (selectedScenario?.id === 3) {
      switch(choice.id) {
        case 1: return `Absolutely, that's a smart approach! While you're thinking about it, would it be helpful if I sent you a free market analysis for your property? No obligation, but it gives you real numbers to discuss. I can have that to you by tomorrow.`
        case 2: return `Oh wow, that's exactly what we specialize in! Inherited properties can be really stressful to deal with, especially when family members need their share quickly. We've helped hundreds of families in this exact situation. Can you tell me a bit about the property and your timeline?`
        case 3: return `Great question! It depends on the property, but typically we offer 70-85% of market value. Here's why that often works better: no realtor fees (saves 6%), no repairs needed (often saves 10-20%), and we close fast so no carrying costs. Plus you get certainty instead of hoping for the right buyer. Want me to run actual numbers on your property?`
      }
    }
    return "Thank you for your time!"
  }

  const scenarioContext = {
    1: {
      title: "The Confused Lead Challenge",
      problem: "Most investors panic when leads say \"Who is this?\" and either give up or over-explain everything at once, killing the conversation.",
      insight: "But confusion often masks genuine interest. They responded - they didn't ignore you.",
      strategy: "Re-establish context quickly without overwhelming, then pivot to value."
    },
    2: {
      title: "The Soft Rejection Challenge", 
      problem: "When leads say \"Not interested,\" most investors either get pushy or give up completely.",
      insight: "But they said 'right now' - not 'never.' That's a huge difference that most people miss.",
      strategy: "Acknowledge gracefully while planting seeds for future contact."
    },
    3: {
      title: "The Info Seeker Challenge",
      problem: "Most investors send generic pitches to info seekers, boring them with irrelevant details.",
      insight: "Information seeking actually shows high intent - they're evaluating their options.",
      strategy: "Provide specific value while qualifying their timeline and motivation."
    }
  }

  const currentScenario = scenarioContext[selectedScenario?.id as keyof typeof scenarioContext]

  useEffect(() => {
    if (phase === 'story') {
      const timer = setTimeout(() => setShowMessage(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [phase])

  const handleContinue = () => {
    if (phase === 'story') {
      setPhase('analyzing')
      setTimeout(() => setPhase('responding'), 2000)
      setTimeout(() => {
        setShowAIResponse(true)
        setPhase('reveal')
      }, 4000)
      setTimeout(() => {
        setShowAnalysis(true)
        setPhase('choice')
      }, 6000)
    }
  }

  const handleChoiceSelect = (choice: any) => {
    setSelectedChoice(choice)
    setPhase('final')
    setTimeout(() => setShowFinalResponse(true), 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Story Introduction */}
        {phase === 'story' && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentScenario.title}
            </h1>
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
              <h3 className="text-xl font-bold text-red-800 mb-4">The Problem {getIndustryProblemText()}</h3>                   <p className="text-red-700 text-lg">{currentScenario.problem}</p>
              </div>

              <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-4">But Here's What They're Missing</h3>
                <p className="text-amber-700 text-lg">{currentScenario.insight}</p>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Our AI's Strategic Approach</h3>
                <p className="text-blue-700 text-lg">{currentScenario.strategy}</p>
              </div>

              <button
                onClick={handleContinue}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Watch Our AI Handle This Challenge
                <ArrowRight className="w-6 h-6 ml-3 inline" />
              </button>
            </div>
          </div>
        )}

        {/* AI Processing Animation */}
        {phase !== 'story' && (
          <>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                🧠 AI Intelligence in Action
              </h1>
              <p className="text-lg text-gray-600">
                Watch how our AI turns this challenging response into an opportunity
              </p>
            </div>

            {/* Business Context */}
            <div className="bg-white rounded-xl p-6 mb-8 border border-blue-200 bg-blue-50">
              <h3 className="font-semibold text-blue-900 mb-2">Business Context:</h3>
              <p className="text-blue-800">
                <strong>{company}</strong> • {industry} • {offering}
              </p>
            </div>

            {/* Conversation Display */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Live Conversation Analysis
              </h3>
              
              <div className="space-y-8">
                {/* Lead Message */}
                <div className="flex justify-start animate-slide-in">
                  <div className="bg-gray-100 p-6 rounded-2xl max-w-md shadow-sm">
                    <div className="flex items-center mb-2">
                      <User className="w-4 h-4 text-gray-600 mr-2" />
                      <p className="text-sm text-gray-600">Incoming Lead Response</p>
                    </div>
                    <p className="text-xl font-semibold text-gray-900">"{selectedScenario?.message}"</p>
                  </div>
                </div>

                {/* AI Processing States */}
                {phase === 'analyzing' && (
                  <div className="flex justify-center">
                    <div className="bg-purple-100 p-6 rounded-2xl border border-purple-300 animate-pulse">
                      <div className="flex items-center space-x-3">
                        <Brain className="w-6 h-6 text-purple-600 animate-spin" />
                        <span className="text-purple-800 font-medium">AI is analyzing intent and motivation...</span>
                      </div>
                    </div>
                  </div>
                )}

                {phase === 'responding' && (
                  <div className="flex justify-center">
                    <div className="bg-blue-100 p-6 rounded-2xl border border-blue-300 animate-pulse">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-6 h-6 text-blue-600" />
                        <span className="text-blue-800 font-medium">Crafting personalized response strategy...</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Response */}
                {showAIResponse && (
                  <div className="flex justify-end animate-slide-in">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-2xl max-w-lg shadow-lg">
                      <div className="flex items-center mb-2">
                        <Brain className="w-4 h-4 text-blue-100 mr-2" />
                        <p className="text-sm text-blue-100">{company} AI Response</p>
                      </div>
                      <p className="text-lg leading-relaxed">{getAIResponse()}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Analysis Reveal */}
            {showAnalysis && (
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  🎯 Why This Response Works
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-green-800 mb-2">Context Restored</h4>
                    <p className="text-green-700 text-sm">Reminds them why you're calling without being defensive</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-800 mb-2">Value Demonstrated</h4>
                    <p className="text-blue-700 text-sm">Shows specific benefit without overwhelming with details</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-purple-800 mb-2">Respectful Approach</h4>
                    <p className="text-purple-700 text-sm">Acknowledges their response appropriately</p>
                  </div>
                </div>
              </div>
            )}

            {/* Choice Selection */}
            {phase === 'choice' && (
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🎭 Choose Your Own Adventure
                </h3>
                <p className="text-center text-gray-600 mb-8">How does the lead respond? Pick a scenario to see our AI adapt in real-time:</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {getChoices().map((choice, index) => (
                    <div
                      key={choice.id}
                      onClick={() => handleChoiceSelect(choice)}
                      className="bg-gray-50 p-6 rounded-xl cursor-pointer hover:bg-gray-100 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
                    >
                      <h4 className="font-bold text-gray-900 mb-3">{choice.title}</h4>
                      <div className="bg-white p-4 rounded-lg mb-4 border border-gray-200">
                        <p className="italic text-gray-800 font-medium">"{choice.message}"</p>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{choice.description}</p>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold">
                        Choose This Response
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Final AI Response */}
            {phase === 'final' && selectedChoice && (
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  🚀 Complete Conversation
                </h3>
                
                <div className="space-y-6">
                  {/* Original exchange */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-4 rounded-2xl max-w-md">
                      <div className="flex items-center mb-1">
                        <User className="w-3 h-3 text-gray-600 mr-2" />
                        <p className="text-xs text-gray-600">Lead</p>
                      </div>
                      <p className="font-medium">"{selectedScenario?.message}"</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white p-4 rounded-2xl max-w-lg">
                      <div className="flex items-center mb-1">
                        <Brain className="w-3 h-3 text-blue-100 mr-2" />
                        <p className="text-xs text-blue-100">{company} AI</p>
                      </div>
                      <p>{getAIResponse()}</p>
                    </div>
                  </div>

                  {/* Follow-up exchange */}
                  <div className="flex justify-start animate-slide-in">
                    <div className="bg-gray-100 p-4 rounded-2xl max-w-md">
                      <div className="flex items-center mb-1">
                        <User className="w-3 h-3 text-gray-600 mr-2" />
                        <p className="text-xs text-gray-600">Lead Response</p>
                      </div>
                      <p className="font-medium">"{selectedChoice.message}"</p>
                    </div>
                  </div>

                  {showFinalResponse && (
                    <div className="flex justify-end animate-slide-in">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl max-w-lg">
                        <div className="flex items-center mb-1">
                          <Brain className="w-3 h-3 text-green-100 mr-2" />
                          <p className="text-xs text-green-100">{company} AI - Advanced Response</p>
                        </div>
                        <p>{getFinalAIResponse(selectedChoice)}</p>
                      </div>
                    </div>
                  )}
                </div>

                {showFinalResponse && (
                  <>
                    {/* Secret Sauce Explanation */}
                    <div className="mt-12 space-y-8">
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-200">
                        <div className="text-center mb-8">
                          <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-800 rounded-full text-lg font-bold mb-4">
                            <Brain className="w-6 h-6 mr-3" />
                            🔥 THIS IS OUR SECRET SAUCE
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Why This AI Response Is Pure Gold
                          </h3>
                          <p className="text-lg text-gray-600 mb-4">
                            Most investors would have killed this lead. Here's what our AI did differently:
                          </p>
                          <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 mb-6">
                            <p className="text-blue-800 font-semibold text-center">
                              🎯 This conversation successfully advanced the lead from <strong>Cold Contact</strong> to <strong>Qualified Interest</strong> (Stage 2 of your sales pipeline)
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                              <h4 className="font-bold text-red-800 mb-3 flex items-center">
                                <AlertCircle className="w-5 h-5 mr-2" />
                                What 95% of Investors Do WRONG
                              </h4>
                              {selectedChoice.id === 3 ? (
                                <ul className="text-red-700 space-y-2 text-sm">
                                  <li>• Send generic "we buy houses" pitch</li>
                                  <li>• Don't address their specific urgency</li>
                                  <li>• Miss the emotional motivation signals</li>
                                  <li>• Fail to build trust before pushing for info</li>
                                </ul>
                              ) : selectedChoice.id === 2 ? (
                                <ul className="text-red-700 space-y-2 text-sm">
                                  <li>• Get defensive about their objection</li>
                                  <li>• Push harder instead of pulling back</li>
                                  <li>• Miss the curiosity signal completely</li>
                                  <li>• Don't educate - just sell harder</li>
                                </ul>
                              ) : (
                                <ul className="text-red-700 space-y-2 text-sm">
                                  <li>• Give up immediately</li>
                                  <li>• Don't plant seeds for future contact</li>
                                  <li>• Miss the politeness as a positive signal</li>
                                  <li>• Fail to add value for later</li>
                                </ul>
                              )}
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                              <h4 className="font-bold text-green-800 mb-3 flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2" />
                                What Our AI Did RIGHT
                              </h4>
                              {selectedChoice.id === 3 ? (
                                <ul className="text-green-700 space-y-2 text-sm">
                                  <li>• Recognized urgency signals immediately</li>
                                  <li>• Asked qualifying questions to understand motivation</li>
                                  <li>• Positioned speed as competitive advantage</li>
                                  <li>• Built credibility before asking for details</li>
                                </ul>
                              ) : selectedChoice.id === 2 ? (
                                <ul className="text-green-700 space-y-2 text-sm">
                                  <li>• Caught the curiosity beneath the objection</li>
                                  <li>• Educated instead of selling</li>
                                  <li>• Used specific examples they could relate to</li>
                                  <li>• Made them feel understood, not pressured</li>
                                </ul>
                              ) : (
                                <ul className="text-green-700 space-y-2 text-sm">
                                  <li>• Gracefully planted seeds for future contact</li>
                                  <li>• Offered ongoing value (market updates)</li>
                                  <li>• Respected their timeline while staying connected</li>
                                  <li>• Positioned as helpful expert, not pushy salesperson</li>
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Advanced Psychology Analysis */}
                      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                          <Brain className="w-8 h-8 mr-3 text-purple-600" />
                          Advanced Psychology Analysis
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <TrendingUp className="w-10 h-10 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Intent Detection</h4>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <div className="text-3xl font-bold text-blue-600 mb-1">
                                {selectedChoice.id === 3 ? '95%' : selectedChoice.id === 2 ? '75%' : '45%'}
                              </div>
                              <p className="text-sm text-blue-700">
                                {selectedChoice.id === 3 ? 'High Intent at This Stage' : selectedChoice.id === 2 ? 'Growing Interest Detected' : 'Future Potential Identified'}
                              </p>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Clock className="w-10 h-10 text-orange-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Urgency Analysis</h4>
                            <div className="bg-orange-50 p-4 rounded-lg">
                              <div className="text-3xl font-bold text-orange-600 mb-1">
                                {selectedChoice.id === 3 ? '88%' : selectedChoice.id === 2 ? '65%' : '35%'}
                              </div>
                              <p className="text-sm text-orange-700">
                                {selectedChoice.id === 3 ? 'Time Sensitive - Current Stage' : selectedChoice.id === 2 ? 'Moderate Urgency Detected' : 'Low Time Pressure'}
                              </p>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Target className="w-10 h-10 text-green-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Next Stage Readiness</h4>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <div className="text-3xl font-bold text-green-600 mb-1">
                                {selectedChoice.id === 3 ? '92%' : selectedChoice.id === 2 ? '78%' : '55%'}
                              </div>
                              <p className="text-sm text-green-700">
                                {selectedChoice.id === 3 ? 'Ready for Human Contact' : selectedChoice.id === 2 ? 'High Potential for Stage 3' : 'Continue AI Nurturing'}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-600 text-center">
                            <strong>Note:</strong> These scores reflect the lead's current state for determining next actions, not final conversion probability.
                          </p>
                        </div>
                      </div>

                      {/* Strategic Action Plan */}
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-black p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">
                          🎯 AI-Generated Sales Pipeline Action Plan
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-white mb-4 text-lg">Current Sales Stage:</h4>
                            <div className="bg-white bg-opacity-90 p-6 rounded-xl">
                              <div className="text-2xl font-bold mb-2 text-black">
                                {selectedChoice.id === 3 ? '🔥 STAGE 3: DISCOVERY READY' : selectedChoice.id === 2 ? '🌡️ STAGE 2: QUALIFIED INTEREST' : '❄️ STAGE 1: AUTOMATED NURTURING'}
                              </div>
                              <p className="text-black">
                                {selectedChoice.id === 3 ? 'Ready for immediate human discovery call' : selectedChoice.id === 2 ? 'AI successfully qualified interest - human follow-up recommended' : 'AI to continue nurturing - human intervention not yet needed'}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold text-white mb-4 text-lg">Immediate Next Steps for Sales Rep:</h4>
                            <div className="space-y-3">
                              {(selectedChoice.id === 3 ? [
                                "Initiate Stage 3: Schedule discovery call within 24 hours",
                                "Prepare property analysis template for consultation", 
                                "Gather preliminary comp data for offer preparation"
                              ] : selectedChoice.id === 2 ? [
                                "Send targeted case study addressing their specific situation",
                                "Schedule Stage 3: Discovery call within 3-5 days",
                                "Provide educational content about unique situations"
                              ] : [
                                "No immediate human action required",
                                "AI continues Stage 1 nurturing sequence",
                                "Review AI progress in 30 days"
                              ]).map((step, index) => (
                                <div key={index} className="flex items-center bg-white bg-opacity-90 p-3 rounded-lg">
                                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                                  <span className="text-black">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* AI's Ongoing Strategy */}
                        <div className="mt-8 bg-white bg-opacity-90 p-6 rounded-xl">
                          <h4 className="font-bold text-black mb-4 text-lg">AI's Ongoing Nurturing Strategy (If No Human Follow-up):</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-black mb-2">Next 7 Days:</h5>
                              <ul className="text-black text-sm space-y-1">
                                {selectedChoice.id === 3 ? (
                                  <>
                                    <li>• Day 2: Send market timing analysis</li>
                                    <li>• Day 4: Share similar success story</li>
                                    <li>• Day 7: Attempt to schedule consultation</li>
                                  </>
                                ) : selectedChoice.id === 2 ? (
                                  <>
                                    <li>• Day 2: Send educational content about process</li>
                                    <li>• Day 5: Share market analysis for their area</li>
                                    <li>• Day 7: Re-engage with new value proposition</li>
                                  </>
                                ) : (
                                  <>
                                    <li>• Day 3: Send helpful market update</li>
                                    <li>• Day 7: Share seasonal market insights</li>
                                    <li>• Continue monthly value-add communications</li>
                                  </>
                                )}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-black mb-2">Long-term Sequence:</h5>
                              <ul className="text-black text-sm space-y-1">
                                {selectedChoice.id === 3 ? (
                                  <>
                                    <li>• Week 2: Case study follow-up if no response</li>
                                    <li>• Week 4: Market urgency update</li>
                                    <li>• Month 2: Re-qualify with new approach</li>
                                  </>
                                ) : selectedChoice.id === 2 ? (
                                  <>
                                    <li>• Week 2: Advanced educational series</li>
                                    <li>• Month 1: Re-engage with market changes</li>
                                    <li>• Month 3: New value proposition test</li>
                                  </>
                                ) : (
                                  <>
                                    <li>• Month 1: Seasonal market update</li>
                                    <li>• Month 3: Re-qualification attempt</li>
                                    <li>• Month 6: Comprehensive market report</li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 text-center">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
                        <h3 className="text-3xl font-bold mb-4">
                          💡 This Is Just ONE Conversation
                        </h3>
                        <p className="text-xl mb-6 text-purple-100">
                          Our AI strategically advanced this lead through your sales pipeline. Imagine this level of intelligence working 24/7 on ALL your leads, autonomously guiding them through every stage until they are truly qualified and ready for human contact.
                        </p>
                        <button
                          onClick={() => {
                            // Navigate to pricing instead of completing demo
                            window.location.href = '/#pricing'
                          }}
                          className="bg-white text-purple-600 px-16 py-6 rounded-xl font-bold text-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          🚀 Get This AI Working For Me
                          <ArrowRight className="w-8 h-8 ml-4 inline" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ConversationStep