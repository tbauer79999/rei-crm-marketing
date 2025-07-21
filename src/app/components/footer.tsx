'use client'

import React from 'react'
import Image from 'next/image'
import { Target } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="SurFox Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-gray-900">Sur</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fox</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">The world's first Sales Psychology AI Learning Engine.</p>
            <p className="text-sm text-gray-500 mb-6">Creating a new category in sales intelligence.</p>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-gray-600">Category Leader</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Revolution</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sales Psychology AI</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Behavioral Learning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Conversation Intelligence</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Live Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Real Estate</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">SaaS & Tech</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Financial Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Truth</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tom's Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Honest Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Development Status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy & Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2024 SurFox AI, Inc. Creating the Sales Psychology AI revolution.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-emerald-600 text-sm flex items-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              Sales Psychology AI™ Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}