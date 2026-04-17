import { skills } from '../data/honors'

export default function WhoIAm() {
  return (
    <section id="about" className="bg-bg-main w-full px-16 py-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center gap-[29px] mb-[29px]">
          <p className="font-semibold text-[12px] text-coral tracking-[2px] uppercase text-center">
            About Me
          </p>
          <p className="font-serif text-5xl text-white tracking-[-1px] text-center">
            Who I Am
          </p>
          <hr className="border-t border-border-dark w-full" />
        </div>

        <div className="grid grid-cols-2 gap-16">

          {/* Bio + CV */}
          <div className="flex flex-col gap-5">
            <p className="text-[#e0e0e0] text-[15px] leading-[27px]">
              I&apos;m an IT student and researcher based in Paraguay, with experience spanning
              Machine Learning and Robotics. I&apos;ve had the privilege of presenting research at{' '}
              <strong className="text-white font-bold">ICEAI 2025</strong> in Nagoya, Japan,
              competing internationally in robotics, and studying abroad in Taiwan.
            </p>
            <p className="text-[#e0e0e0] text-[15px] leading-[27px]">
              My academic journey has been marked by top rankings and merit scholarships, but
              what drives me most is building things that solve real problems — from automated
              handwashing stations to AI-powered agricultural tools.
            </p>
            <p className="text-[#e0e0e0] text-[15px] leading-[27px]">
              I&apos;m actively looking for internships and junior roles in{' '}
              <strong className="text-white font-bold">ML Engineering</strong>,{' '}
              <strong className="text-white font-bold">Full Stack Development</strong>, or{' '}
              <strong className="text-white font-bold">Requirements Engineering</strong>.
              My portfolio is available in English, Spanish, Portuguese, and Chinese.
            </p>
            <a
              href="#"
              className="font-bold text-[14px] text-coral-hover underline underline-offset-4 hover:text-coral transition-colors w-fit"
            >
              ↓ Download CV
            </a>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-5">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-[14px]">
                <p className="font-semibold text-[12px] text-coral tracking-[1.5px] uppercase">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-[10px]">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-bg-card border border-border-dark text-[#e0e0e0] text-[13px] px-[15px] py-[6px] rounded-[20px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
