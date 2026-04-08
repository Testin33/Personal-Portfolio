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
    <section id="contact" className="bg-bg-alt w-full px-4 py-[60px] md:px-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-5 mb-5">
          <p className="font-semibold text-[12px] text-coral tracking-[2px] uppercase">
            Get In Touch
          </p>
          <p className="font-serif text-[36px] text-white tracking-[-1px] md:text-5xl">
            Let&apos;s Work Together
          </p>
          <p className="text-[#e0e0e0] text-[16px] leading-relaxed">
            Open to internships, collaborations, and interesting projects.
          </p>
          <hr className="border-t border-border-dark" />
        </div>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-16">

          {/* Left — message + socials */}
          <div className="flex flex-col gap-5">
            <p className="text-[#e0e0e0] text-[15px] leading-[27px]">
              Whether you have a project in mind, want to discuss a role, or just want to
              connect, my inbox is always open. I&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex gap-5 items-center">
              <a href="https://linkedin.com/in/juanazcona" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#e0e0e0] text-[13px] tracking-[0.5px] hover:text-coral transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/Testin33" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#e0e0e0] text-[13px] tracking-[0.5px] hover:text-coral transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                GitHub
              </a>
              <a href="mailto:azconajuan30@gmail.com"
                className="flex items-center gap-2.5 text-[#e0e0e0] text-[13px] tracking-[0.5px] hover:text-coral transition-colors">
                ✉ Email
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[13px] text-[#e0e0e0] tracking-[0.5px]">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-bg-card border border-border-dark rounded-[30px] px-4 py-[14px] text-[14px] text-white placeholder-[#757575] focus:outline-none focus:border-coral transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[13px] text-[#e0e0e0] tracking-[0.5px]">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full bg-bg-card border border-border-dark rounded-[30px] px-4 py-[14px] text-[14px] text-white placeholder-[#757575] focus:outline-none focus:border-coral transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold text-[13px] text-[#e0e0e0] tracking-[0.5px]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={6}
                className="w-full bg-bg-card border border-border-dark rounded-[8px] px-4 py-[14px] text-[14px] text-white placeholder-[#757575] focus:outline-none focus:border-coral transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-btn font-semibold text-[14px] text-white bg-coral px-8 py-4 rounded-[6px] w-fit tracking-wide transition-all duration-200 hover:bg-coral-hover hover:translate-x-1 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>

            {status === 'sent' && (
              <p className="text-sm text-green-400">Message sent! I&apos;ll be in touch soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Try emailing me directly.</p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
