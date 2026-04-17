export default function Hero() {
  return (
    <section className="bg-bg-main w-full">
      <div className="flex items-center max-w-[1440px] mx-auto px-20 gap-10 pt-[72px] py-20">

        {/* Left */}
        <div className="flex-1 flex flex-col">
          <p className="font-serif text-[72px] text-white leading-none tracking-[-2px] mb-2">Hi,</p>
          <p className="font-serif text-[72px] leading-tight tracking-[-2px] mb-6">
            <span className="text-white">I&apos;m </span>
            <span className="text-coral">Juan</span>
          </p>
          <p className="text-[#e0e0e0] text-lg mb-9">
            Industrial Engineering Student<br />
            building real-world AI &amp; robotics solutions
          </p>
          <a
            href="mailto:azconajuan30@gmail.com"
            className="inline-flex items-center gap-2 font-btn font-semibold text-sm text-white bg-coral px-7 py-3.5 rounded-md tracking-wide w-fit mb-12 transition-all duration-300 hover:bg-coral-hover hover:translate-x-1 hover:shadow-[0_8px_16px_rgba(255,107,91,0.3)]"
          >
            Hire Me →
          </a>
          <div className="flex flex-col gap-5">
            <a href="https://linkedin.com/in/juanazcona" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#e0e0e0] text-sm hover:text-coral hover:translate-x-1 transition-all duration-200">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://github.com/Testin33" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#e0e0e0] text-sm hover:text-coral hover:translate-x-1 transition-all duration-200">
              <GitHubIcon /> GitHub
            </a>
            <a href="mailto:azconajuan30@gmail.com"
              className="flex items-center gap-2.5 text-[#e0e0e0] text-sm hover:text-coral hover:translate-x-1 transition-all duration-200">
              ✉ Email
            </a>
          </div>
        </div>

        {/* Center — photo */}
        <div className="w-[360px] flex-shrink-0 flex items-end justify-center">
          <img
            src="/images/profile.png"
            alt="Juan Azcona"
            className="w-full h-[480px] object-contain object-bottom"
          />
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col pl-5">
          <p className="text-xs font-semibold text-coral-hover tracking-widest uppercase mb-2">About Me</p>
          <p className="font-serif text-[28px] text-white leading-snug mb-5">Based in Paraguay &amp; Taiwan</p>
          <p className="text-[#e0e0e0] text-base italic leading-relaxed mb-4">
            I&apos;m a developer, researcher &amp; robotics champion.
          </p>
          <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
            Industrial Engineering student focused on AI, robotics, and system optimization.
            Presented research at ICEAI 2025 (Japan) and recognized as a national robotics champion.
          </p>
          <a href="#" className="text-sm text-coral-hover underline underline-offset-4 hover:text-coral transition-colors">
            ↓ Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}