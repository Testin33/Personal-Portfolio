import { useState } from 'react'
import { skills } from '../data/honors'

const cvFiles = [
  { label: 'English',    file: '/cv/CV_curriculum_English.pdf' },
  { label: 'Spanish',    file: '/cv/CV_curriculum_Spanish.pdf' },
  { label: 'Portuguese', file: '/cv/CV_curriculum_Portuguese.pdf' },
]

export default function WhoIAm() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <section id="about" className="bg-bg-main w-full px-16 pt-16 pb-12">
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
            <div className="relative w-fit">
              <button
                onClick={() => setCvOpen((o) => !o)}
                className="font-bold text-[14px] text-coral-hover underline underline-offset-4 hover:text-coral transition-colors"
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
