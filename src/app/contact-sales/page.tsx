'use client'

import React, { useState } from 'react'

const ContactSalesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to Supabase, API route, or email service
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! Our sales team will contact you shortly.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full bg-black/40 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
          Franchise & White Label Opportunities
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Interested in partnering with SurFox at the franchise or white label level? 
          Fill out the form below and our sales team will be in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-200 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Tell us a little about your interest..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all shadow-lg"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSalesPage
