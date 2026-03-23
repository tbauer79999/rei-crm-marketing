'use client'

import React, { useState } from 'react'

const API_URL = 'https://api.surfox.ai/api/public/contact-sales';

export default function SupportClient() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'support', email, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
      alert('Thanks! Our support team will get back to you shortly.');
      setEmail('')
      setMessage('')
    } catch {
      alert('Something went wrong. Please email support@getsurfox.com directly.');
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-card-bg p-8 rounded-lg shadow-sm shadow-blue-500/5">
        <h1 className="text-2xl font-semibold mb-4">Contact SurFox Support</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium" htmlFor="email">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full p-2 border border-white/[0.1] rounded mb-4"
            required
          />

          <label className="block mb-2 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            className="w-full p-2 border border-white/[0.1] rounded mb-4"
            required
          />

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}
