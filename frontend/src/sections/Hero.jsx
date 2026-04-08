export default function Hero() {
  return (
    <section className="bg-bg-main w-full">

      {/* ── Mobile (default) ── */}
      <div className="md:hidden flex flex-col items-center gap-[22px] px-4 pt-[94px] pb-[40px]">

        {/* Profile photo */}
        <div className="flex justify-center">
          <img
            src="/images/profile.png"
            alt="Juan Azcona"
            className="w-[312px] h-[317px] object-cover object-top"
          />
        </div>

        {/* Hero text */}
        <div className="flex flex-col items-center gap-5 w-full">
          <p className="font-serif text-[48px] text-white leading-none tracking-[-2px] text-center">Hi,</p>
          <p className="font-serif text-[48px] leading-tight tracking-[-2px] text-center">
            <span className="text-white">I&apos;m </span>
            <span className="text-coral">Juan</span>
          </p>
          <p className="text-[#e0e0e0] text-[18px] text-center leading-relaxed tracking-[0.5px] w-[375px] max-w-full">
            Industrial Engineering Student<br />
            building real-world AI &amp; robotics solutions
          </p>
          <a
            href="mailto:azconajuan30@gmail.com"
            className="inline-flex items-center justify-center font-btn font-semibold text-[13px] text-white bg-coral px-[26px] py-[16px] rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-all duration-200 hover:bg-coral-hover hover:-translate-y-0.5"
          >
            💬 Let&apos;s Chat
          </a>
          <div className="flex gap-5 items-center justify-center">
            <a href="https://linkedin.com/in/juanazcona" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#e0e0e0] text-[13px] tracking-[0.5px] hover:text-coral transition-colors">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://github.com/Testin33" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#e0e0e0] text-[13px] tracking-[0.5px] hover:text-coral transition-colors">
              <GitHubIcon /> GitHub
            </a>
            <a href="mailto:azconajuan30@gmail.com"
              className="flex items-center gap-2.5 text-[#e0e0e0] text-[13px] tracking-[0.5px] hover:text-coral transition-colors">
              ✉ Email
            </a>
          </div>
        </div>

        {/* About Me sub-section */}
        <div className="flex flex-col items-center gap-4 w-full">
          <p className="font-semibold text-[12px] text-coral-hover tracking-[1px] uppercase text-center">
            About Me
          </p>
          <p className="font-serif text-[28px] text-white text-center leading-snug">
            Based in Paraguay &amp; Taiwan
          </p>
          <p className="text-[#e0e0e0] text-[16px] text-center tracking-[0.5px] font-light">
            I&apos;m a developer, researcher &amp; robotics champion.
          </p>
          <p className="text-[#e0e0e0] text-[14px] text-center leading-[29px] tracking-[0.3px] px-4">
            Industrial Engineering student focused on AI, robotics, and system optimization.
            Presented research at ICEAI 2025 (Japan) and recognized as a national robotics champion.
            I build solutions that improve efficiency, automation, and real-world decision-making.
          </p>
          <a href="#" className="text-[14px] text-coral-hover underline underline-offset-4 hover:text-coral transition-colors">
            ↓ Download CV
          </a>
        </div>
      </div>

      {/* ── Desktop (md+): 3-column, vertically centered ── */}
      <div className="hidden md:flex h-[calc(100vh-72px)] items-center max-w-[1440px] mx-auto px-20 gap-10 pt-[72px]">

        {/* Left */}
        <div className="flex-1 flex flex-col">
          <p className="font-serif text-[72px] text-white leading-none tracking-[-2px] mb-2">Hi,</p>
          <p className="font-serif text-[72px] leading-tight tracking-[-2px] mb-6">
            <span className="text-white">I&apos;m </span>
            <span className="text-coral">Juan</span>
          </p>
          <p className="text-[#e0e0e0] text-lg mb-9">Industrial Engineering Student</p>
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
        <div className="w-[400px] flex-shrink-0 flex items-end justify-center h-full">
          <img
            src="/images/profile.png"
            alt="Juan Azcona"
            className="w-full max-h-full object-contain object-bottom"
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
    <img
      src="https://www.figma.com/api/mcp/asset/8e4cd0e9-c52f-4fcf-97fe-a1bffda399bc"
      alt="LinkedIn"
      className="w-5 h-5"
      onError={(e) => { e.target.style.display = 'none' }}
    />
  )
}

function GitHubIcon() {
  return (
    <img
      src="https://www.figma.com/api/mcp/asset/c277607c-f413-4237-a81e-862d1ad5d04f"
      alt="GitHub"
      className="w-5 h-5"
      onError={(e) => { e.target.style.display = 'none' }}
    />
  )
}
