'use client'

import React from 'react'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Contact SurFox Support</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="block mb-2 font-medium" htmlFor="email">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />

          <label className="block mb-2 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          This form is for demonstration purposes only.
        </p>
      </div>
    </div>
  )
}
