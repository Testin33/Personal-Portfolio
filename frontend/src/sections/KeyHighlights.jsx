import { Link } from 'react-router-dom'
import { highlights } from '../data/projects'

export default function KeyHighlights() {
  return (
    <section id="highlights" className="bg-bg-alt w-full px-16 py-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-[22px] mb-5">
          <p className="font-semibold text-[12px] text-coral tracking-[2px] uppercase">
            Experience
          </p>
          <p className="font-serif text-5xl text-white tracking-[-1px]">
            Key Highlights
          </p>
          <p className="text-[#e0e0e0] text-[16px] leading-relaxed">
            International research, national competitions, and academic excellence.
          </p>
          <hr className="border-t border-border-dark" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-8">
          {highlights.map((item) => {
            const card = (
              <div className="bg-bg-card border border-border-dark rounded-[12px] flex flex-col gap-5 p-4 hover:border-coral/40 transition-colors duration-200 h-full">
                {/* Banner */}
                <div className="w-full aspect-[16/10] rounded-[10px] overflow-hidden bg-bg-main flex items-center justify-center shrink-0">
                  {(item.cardBanner || item.banner) ? (
                    <img
                      src={item.cardBanner || item.banner}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-5xl">{item.icon}</span>
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[20px] flex-1">
                  <p className="font-semibold text-[12px] text-coral tracking-[1px] uppercase">
                    {item.tag}{item.subtag ? ` · ${item.subtag}` : ''}
                  </p>
                  <p className="font-serif font-bold text-[20px] text-white leading-[26px]">
                    {item.title}
                  </p>
                  <p className="text-[#e0e0e0] text-[14px] leading-[22.4px]">
                    {item.shortDesc}
                  </p>
                </div>
              </div>
            )

            return item.hasDetail ? (
              <Link key={item.slug} to={`/project/${item.slug}`} className="block h-full">
                {card}
              </Link>
            ) : (
              <div key={item.slug} className="h-full">{card}</div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
