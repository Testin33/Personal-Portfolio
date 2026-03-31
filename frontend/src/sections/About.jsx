export default function About() {
  return (
    <section id="about" className="px-5 py-10 bg-bg-main border-t border-border-dark">
      {/* Section label */}
      <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-3">
        About Me
      </p>

      {/* Heading */}
      <h2 className="font-serif text-3xl text-white leading-snug mb-3">
        Based in Paraguay &amp; Taiwan
      </h2>

      {/* Tagline */}
      <p className="text-[#e0e0e0] text-base italic mb-4">
        i&apos;m a developer, researcher &amp; robotics champion.
      </p>

      {/* Bio */}
      <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
        Industrial Engineering student focused on AI, robotics, and system
        optimization. Presented research at ICEAI 2025 (Japan) and recognized
        as a national robotics champion. I build solutions that improve
        efficiency, automation, and real-world decision-making.
      </p>

      {/* Download CV */}
      <a
        href="/cv.pdf"
        download
        className="inline-flex items-center gap-1.5 text-sm text-coral hover:text-coral-hover transition-colors duration-200"
      >
        ↓ Download CV
      </a>
    </section>
  )
}
