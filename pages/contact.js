'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        subject: `Message from ${form.name} vivilx`,
      }),
    })

    const data = await res.json()
    setStatus(data.success ? 'success' : 'error')
    setLoading(false)
    if (data.success) setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-xl rounded-lg bg-white/10 p-8 shadow-lg backdrop-blur-md">
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-white">Your name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-md bg-white/80 px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-white">Your email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-md bg-white/80 px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-white">Your message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="w-full rounded-md bg-white/80 px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="rounded bg-blue-500 py-2 px-6 font-medium text-white transition hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-2 text-center text-green-400">
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="mt-2 text-center text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
