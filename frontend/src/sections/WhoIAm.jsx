import { skills } from '../data/honors'

export default function WhoIAm() {
  return (
    <section id="about" className="px-5 py-10 bg-bg-main border-t border-border-dark">
      <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-3">
        About Me
      </p>
      <h2 className="text-3xl font-semibold text-white mb-4">
        Who I Am
      </h2>

      <p className="text-[#e0e0e0] text-sm leading-relaxed mb-4">
        I'm an IE student and researcher based in Paraguay, with experience spanning
        Machine Learning, Full Stack Development, and Robotics. I've had the privilege
        of presenting research at{' '}
        <span className="text-coral font-semibold">ICEAI 2025</span> in Nagoya, Japan,
        competing internationally, and studying abroad in Taiwan.
      </p>
      <p className="text-[#e0e0e0] text-sm leading-relaxed mb-4">
        My academic journey has been marked by top rankings and merit scholarships,
        but what drives me most is building things that solve real problems — from
        automated harvesting systems to AI-powered agricultural tools.
      </p>
      <p className="text-[#e0e0e0] text-sm leading-relaxed mb-5">
        I'm actively looking for internships and junior roles in{' '}
        <span className="text-white font-medium">ML Engineering</span>,{' '}
        <span className="text-white font-medium">Full Stack Development</span>, or{' '}
        <span className="text-white font-medium">Requirements Engineering</span>. My
        portfolio is available in English, Spanish, Portuguese, and Chinese.
      </p>

      <a
        href="/cv.pdf"
        download
        className="inline-flex items-center gap-1.5 text-sm text-coral hover:text-coral-hover transition-colors duration-200 mb-8"
      >
        ↓ Download CV
      </a>

      {/* Skills */}
      <div className="flex flex-col gap-5 mt-2">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-semibold text-[#999] tracking-widest uppercase mb-2">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-[#e0e0e0] bg-bg-card border border-border-dark px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
