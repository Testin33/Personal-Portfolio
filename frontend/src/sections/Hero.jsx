import { useState } from 'react'

const cvFiles = [
  { label: 'English',    file: '/cv/CV_curriculum_English.pdf' },
  { label: 'Spanish',    file: '/cv/CV_curriculum_Spanish.pdf' },
  { label: 'Portuguese', file: '/cv/CV_curriculum_Portuguese.pdf' },
]

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <section id="about" className="bg-bg-main w-full">
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
            href="#contact"
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
              <EmailIcon /> Email
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
          <div className="relative w-fit">
            <button
              onClick={() => setCvOpen((o) => !o)}
              className="text-sm text-coral-hover underline underline-offset-4 hover:text-coral transition-colors"
            >
              ↓ Download CV
            </button>
            {cvOpen && (
              <div className="absolute left-0 top-full mt-2 bg-bg-card border border-border-dark rounded-[8px] overflow-hidden z-10 min-w-[160px]">
                {cvFiles.map(({ label, file }) => (
                  <a
                    key={label}
                    href={file}
                    download
                    onClick={() => setCvOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#e0e0e0] hover:bg-bg-alt hover:text-coral transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-1 15v-5.5c0-1.383-.561-2.5-2.188-2.5-.988 0-1.65.543-1.922 1.063V12H11v7h3v-3.878c0-1.073.203-2.122 1.5-2.122 1.279 0 1.5 1.214 1.5 2.189V18h3zM7.5 10.5A1.5 1.5 0 1 0 7.5 7.5a1.5 1.5 0 0 0 0 3zM9 18v-7H6v7h3z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
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