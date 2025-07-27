export default function Contact() {
  return (
    <div className="flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-xl rounded-lg bg-white/10 p-8 shadow-lg backdrop-blur-md">
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">
          Contact Us
        </h2>
        <form
          action="https://formspree.io/f/your_form_id"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="mb-1 block text-white">Your name</label>
            <input
              type="text"
              name="name"
              required
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
              placeholder="Type your message..."
              className="w-full rounded-md bg-white/80 px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded bg-blue-500 py-2 px-6 font-medium text-white transition hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
