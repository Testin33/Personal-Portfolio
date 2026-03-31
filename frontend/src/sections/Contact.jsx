import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-5 py-10 bg-bg-main border-t border-border-dark">
      <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-3">
        Get In Touch
      </p>
      <h2 className="text-3xl font-semibold text-white mb-3">
        Let&apos;s Work Together
      </h2>
      <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
        Whether you have a project in mind, want to discuss a role, or just want to
        connect — my inbox is always open. I&apos;ll get back to you as soon as possible.
      </p>

      {/* Quick links */}
      <div className="flex flex-col gap-3 mb-8">
        <a
          href="mailto:azconajuan30@gmail.com"
          className="flex items-center gap-3 text-sm text-[#e0e0e0] hover:text-coral transition-colors duration-200"
        >
          <span className="w-8 h-8 rounded-lg bg-bg-card border border-border-dark flex items-center justify-center text-base">✉️</span>
          azconajuan30@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/juanazcona"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-[#e0e0e0] hover:text-coral transition-colors duration-200"
        >
          <span className="w-8 h-8 rounded-lg bg-bg-card border border-border-dark flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-coral">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </span>
          linkedin.com/in/juanazcona
        </a>
        <a
          href="https://github.com/Testin33"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-[#e0e0e0] hover:text-coral transition-colors duration-200"
        >
          <span className="w-8 h-8 rounded-lg bg-bg-card border border-border-dark flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#e0e0e0]">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </span>
          github.com/Testin33
        </a>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs text-[#999] mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full bg-bg-card border border-border-dark rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-coral transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-xs text-[#999] mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@email.com"
            required
            className="w-full bg-bg-card border border-border-dark rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-coral transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-xs text-[#999] mb-1.5">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            required
            rows={5}
            className="w-full bg-bg-card border border-border-dark rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-coral transition-colors duration-200 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full font-btn font-semibold text-sm text-white bg-coral py-3.5 rounded-xl tracking-wide transition-all duration-200 hover:bg-coral-hover disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message →'}
        </button>

        {status === 'sent' && (
          <p className="text-center text-sm text-green-400">Message sent! I'll be in touch soon.</p>
        )}
        {status === 'error' && (
          <p className="text-center text-sm text-red-400">Something went wrong. Try emailing me directly.</p>
        )}
      </form>
    </section>
  )
}
