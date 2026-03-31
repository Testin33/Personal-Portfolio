export default function Hero() {
  return (
    <section className="pt-[72px] bg-bg-main">
      {/* Profile photo */}
      <div className="mx-5 mt-4 rounded-2xl overflow-hidden bg-bg-card border border-border-dark">
        <img
          src="/images/profile.png"
          alt="Juan Azcona"
          className="w-full object-cover object-top max-h-72"
        />
      </div>

      {/* Headline */}
      <div className="px-5 pt-6 pb-2 text-center animate-fade-in-up animation-delay-100">
        <p className="font-serif text-5xl text-white leading-tight tracking-tight">
          Hi,
        </p>
        <p className="font-serif text-5xl leading-tight tracking-tight mt-1">
          <span className="text-white">I&apos;m </span>
          <span className="text-coral">Juan</span>
        </p>
      </div>

      {/* Subtitle */}
      <p className="px-8 text-center text-[#e0e0e0] text-base leading-relaxed mt-3 animate-fade-in-up animation-delay-200">
        Industrial Engineering Student<br />
        building real-world AI &amp; robotics solutions
      </p>

      {/* Let's Chat button */}
      <div className="flex justify-center mt-5 animate-fade-in-up animation-delay-300">
        <a
          href="mailto:azconajuan30@gmail.com"
          className="inline-flex items-center gap-2 font-btn font-semibold text-sm text-white bg-coral px-6 py-3 rounded-full tracking-wide transition-all duration-200 hover:bg-coral-hover hover:-translate-y-0.5"
        >
          <span>💬</span> Let&apos;s Chat
        </a>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-6 mt-5 pb-8 animate-fade-in-up animation-delay-400">
        <a
          href="https://linkedin.com/in/juanazcona"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#e0e0e0] text-sm hover:text-coral transition-colors duration-200"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <a
          href="https://github.com/Testin33"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#e0e0e0] text-sm hover:text-coral transition-colors duration-200"
        >
          <GitHubIcon />
          GitHub
        </a>
        <a
          href="mailto:azconajuan30@gmail.com"
          className="flex items-center gap-1.5 text-[#e0e0e0] text-sm hover:text-coral transition-colors duration-200"
        >
          <EmailIcon />
          Email
        </a>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}
