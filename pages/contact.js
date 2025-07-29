'use client'

import { useState, useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null)
      }, 5000) // Clear status after 5 seconds

      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
    // Clear the error for this field when the user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (form.message.length > 500) {
      newErrors.message = 'Message is too long (max 500 characters)'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const debouncedSubmit = useCallback(
    debounce(async () => {
      if (!validateForm()) return

      setLoading(true)
      // Remove this line: setStatus(null)

      try {
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
        if (data.success) setForm({ name: '', email: '', message: '' })
      } catch (error) {
        setStatus('error')
        console.error('Network error:', error)
      } finally {
        setLoading(false)
      }
    }, 300),
    [form]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    debouncedSubmit()
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
              className="rounded bg-blue-500 px-6 py-2 font-medium text-white transition hover:bg-blue-600 disabled:opacity-50"
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
