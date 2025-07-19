'use client'

import React from 'react'
import { Brain, Target } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-gray-900">Sur</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fox</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">The world's first Messaging Intelligence platform.</p>
            <p className="text-sm text-gray-500 mb-6">Transforming conversations across every industry with behavioral AI.</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">50+ Signal Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">94% Accuracy</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Messaging Intelligence</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Signal Analysis</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Conversation AI</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Chrome Extension</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Real Estate</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">SaaS & Tech</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">All Industries</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2024 SurFox AI, Inc. Leading the Messaging Intelligence revolution.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-emerald-600 text-sm flex items-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              Messaging Intelligence™ Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}