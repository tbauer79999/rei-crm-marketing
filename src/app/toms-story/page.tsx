'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FoundersLetter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      
      {/* Animated Background Elements - Match Homepage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Letter Container */}
      <div className="max-w-5xl mx-auto px-6 py-20 pt-32 relative z-10">
        
        {/* Page Header - Match Your Brand */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 backdrop-blur-sm mb-6">
            <Image 
              src="/logo.png" 
              alt="SurFox Logo" 
              width={24} 
              height={24}
              className="w-6 h-6 mr-3"
            />
            <span className="text-purple-200 font-medium">A Letter from the Founder</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Why I Built SurFox
            </span>
          </h1>
          <p className="text-xl text-purple-200">An honest letter from Tom Bauer</p>
        </div>

        {/* Paper Letter Effect */}
        <div className="relative">
          {/* Paper Shadow/Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-white/10 to-cyan-500/20 rounded-3xl blur-xl"></div>
          
          {/* Main Paper */}
          <div 
            className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
                linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)
              `,
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.25),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `
            }}
          >
            
            {/* Paper Texture Overlay */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.02) 2px,
                    rgba(0, 0, 0, 0.02) 3px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.02) 2px,
                    rgba(0, 0, 0, 0.02) 3px
                  )
                `
              }}
            ></div>
            
            {/* Letter Header */}
            <div className="relative bg-gradient-to-r from-purple-50/80 to-cyan-50/80 border-b border-gray-200/50 px-12 py-10">
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
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Fox</span>
                  </div>
                  <div className="text-sm text-gray-600">Sales Psychology AI</div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2">A Letter from the Founder</h2>
              <p className="text-gray-600">December 2024</p>
            </div>
            
            {/* Letter Content */}
            <div className="relative px-12 py-10">
              <div className="prose prose-lg prose-gray max-w-none">
                
                <p className="text-lg text-gray-800 leading-relaxed mb-6 font-medium">
                  I grew up in a tiny town in Michigan — youngest of seven. My parents weren't the book-smart, business-type people. They were the hard work, show-up-for-your-neighbor kind. They raised us with grit, decency, and a simple rule: treat people right.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I spent the next 20 years in sales. And through all of it — good years, rough years, huge wins, dry spells — one truth kept rising to the top:
                </p>
                
                <div className="text-center my-8">
                  <div className="inline-block bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl px-8 py-6 border-l-4 border-purple-500 shadow-sm">
                    <p className="text-2xl font-bold text-gray-900 mb-2">
                      "It's never about the product."
                    </p>
                    <p className="text-2xl font-bold text-purple-600">
                      "It's always about the people."
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  People don't care how much you know until they know how much you care. The sales that stick — the ones that turn into long-term relationships — come from dignity, from listening, from <em className="text-purple-600 font-semibold">real</em> respect.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Most companies treat sales like a numbers game. Hammer the phones. Burn the list. Spray and pray. I've never believed in that. It's not a numbers game — it's an <em className="text-cyan-600 font-semibold">efficiency</em> game.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you've worked in sales, you know the phrase <em className="text-gray-600 italic">"dumpster diving"</em>. It's when you're told to dig into the old, cold, "dead" leads. But here's the truth: there's gold in there. There are diamonds. Most teams just didn't have the tools to <em className="text-purple-600 font-semibold">see</em> it.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  That's why I created <strong className="text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-xl">SurFox</strong>.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Most platforms scan 2–4 data points and call it "lead scoring." SurFox looks at 50. Not just surface data like open rates or replies — but behavior, timing, tone, engagement signals, and more.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-xl p-6 my-8 border border-purple-200/50">
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    SurFox was built to do what other platforms can't: <strong className="text-purple-600">Turn cold leads into hot ones.</strong> Not with gimmicks. Not with mass blasts. But with intelligence, timing, and respect.
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  If you're here, thank you. I'm proud of what we're building. And I'm looking forward to showing you what SurFox is truly capable of.
                </p>
                
                {/* Signature Section */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <div className="flex flex-col">
                    <p className="text-lg text-gray-700 mb-6">Sincerely,</p>
                    
                    {/* Handwritten Signature */}
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-purple-600 transform -rotate-1 select-none" style={{fontFamily: 'Brush Script MT, cursive'}}>
                        Tom Bauer
                      </div>
                    </div>
                    
                    <div className="text-gray-600">
                      <p className="font-semibold text-gray-800">Tom Bauer</p>
                      <p className="text-sm">Founder & CEO, SurFox</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Letter Footer */}
            <div className="relative bg-gradient-to-r from-gray-50/80 to-purple-50/80 border-t border-gray-200/50 px-12 py-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Ready to see what SurFox can do for your business?</p>
                </div>
                <div className="flex gap-4">
                  <Link href="/#demo" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                    Try SurFox Free
                  </Link>
                  <Link href="/" className="border border-purple-300 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Site */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center text-purple-300 hover:text-white transition-colors">
            ← Back to SurFox
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FoundersLetter