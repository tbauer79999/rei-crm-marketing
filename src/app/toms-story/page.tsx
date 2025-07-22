'use client'

import React from 'react'
import Image from 'next/image'

const FoundersLetter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      
      {/* Letter Container */}
      <div className="max-w-4xl mx-auto px-6 py-20 pt-32">
        <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-200 overflow-hidden">
          
          {/* Letter Header */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-12 py-10">
            <div className="flex items-center space-x-4 mb-6">
              <Image 
                src="/logo.png" 
                alt="SurFox Logo" 
                width={48} 
                height={48}
                className="w-12 h-12"
              />
              <div>
                <div className="text-2xl font-semibold text-gray-900">
                  <span className="text-gray-900">Sur</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fox</span>
                </div>
                <div className="text-sm text-gray-600">Messaging Intelligence Platform</div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-2">A Letter from the Founder</h1>
            <p className="text-gray-600">December 2024</p>
          </div>
          
          {/* Letter Content */}
          <div className="px-12 py-10">
            <div className="prose prose-lg prose-gray max-w-none">
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I grew up in a tiny town in Michigan — youngest of seven. My parents weren't the book-smart, business-type people. They were the hard work, show-up-for-your-neighbor kind. They raised us with grit, decency, and a simple rule: treat people right.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I spent the next 20 years in sales. And through all of it — good years, rough years, huge wins, dry spells — one truth kept rising to the top:
              </p>
              
              <p className="text-xl font-semibold text-gray-900 mb-6 text-center py-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                It's never about the product. It's always about the people.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                People don't care how much you know until they know how much you care. The sales that stick — the ones that turn into long-term relationships — come from dignity, from listening, from <em>real</em> respect.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Most companies treat sales like a numbers game. Hammer the phones. Burn the list. Spray and pray. I've never believed in that. It's not a numbers game — it's an <em>efficiency</em> game.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you've worked in sales, you know the phrase <em>dumpster diving</em>. It's when you're told to dig into the old, cold, "dead" leads. But here's the truth: there's gold in there. There are diamonds. Most teams just didn't have the tools to <em>see</em> it.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                That's why I created <strong className="text-blue-600">SurFox</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Most platforms scan 2–4 data points and call it "lead scoring." SurFox looks at 50. Not just surface data like open rates or replies — but behavior, timing, tone, engagement signals, and more.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SurFox was built to do what other platforms can't: <strong className="text-gray-900">Turn cold leads into hot ones.</strong> Not with gimmicks. Not with mass blasts. But with intelligence, timing, and respect.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                If you're here, thank you. I'm proud of what we're building. And I'm looking forward to showing you what SurFox is truly capable of.
              </p>
              
              {/* Signature Section */}
              <div className="border-t border-gray-200 pt-8 mt-12">
                <div className="flex flex-col">
                  <p className="text-lg text-gray-700 mb-6">Sincerely,</p>
                  
                  {/* Handwritten Signature Placeholder */}
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-blue-600 transform -rotate-1" style={{fontFamily: 'cursive'}}>
                      Tom Bauer
                    </div>
                    {/* Replace with actual signature image when available */}
                    {/* <Image src="/tom-signature.png" alt="Tom Bauer Signature" width={200} height={60} /> */}
                  </div>
                  
                  <div className="text-gray-600">
                    <p className="font-medium">Tom Bauer</p>
                    <p className="text-sm">Founder & CEO, SurFox</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Letter Footer */}
          <div className="bg-gray-50 border-t border-gray-200 px-12 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-sm text-gray-600">
                <p>Ready to see what SurFox can do for your business?</p>
              </div>
              <div className="flex gap-4">
                <a href="/#demo" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                  Try SurFox Free
                </a>
                <a href="/" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Context */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            This letter represents Tom's authentic journey and the values that drive SurFox. 
            We're building something different — a platform that treats prospects with dignity while delivering real results.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoundersLetter