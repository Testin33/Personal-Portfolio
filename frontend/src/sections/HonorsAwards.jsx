import { honors } from '../data/honors'

export default function HonorsAwards() {
  return (
    <section id="honors" className="bg-bg-alt w-full px-4 py-[22px] md:px-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-[22px] mb-[22px]">
          <p className="font-semibold text-[12px] text-coral tracking-[2px] uppercase">
            Recognition
          </p>
          <p className="font-serif text-[36px] text-white tracking-[-1px] md:text-5xl">
            Honors &amp; Awards
          </p>
          <p className="text-[#e0e0e0] text-[16px] leading-relaxed">
            Academic and competitive recognition from local to international stages.
          </p>
          <hr className="border-t border-border-dark" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-[22px] md:grid md:grid-cols-2 md:gap-6">
          {honors.map((item, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border-dark rounded-[12px] flex gap-4 p-[17px] items-center min-h-[165px]"
            >
              {/* Emoji badge */}
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-[24px] bg-[rgba(255,107,91,0.12)] border border-[rgba(255,107,91,0.3)] flex items-center justify-center text-[22px]">
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-[6px] flex-1">
                <p className="font-serif font-bold text-[18px] text-white leading-[23.4px]">
                  {item.title}
                </p>
                <p className="text-[#e0e0e0] text-[13px] leading-[19.5px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
