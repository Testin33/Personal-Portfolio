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
              <div className="bg-bg-card border border-border-dark rounded-[12px] flex flex-col gap-5 p-4 hover:border-coral/40 transition-colors duration-200">
                {/* Banner */}
                <div className="w-full aspect-[366/206] rounded-[30px] overflow-hidden bg-bg-main flex items-center justify-center">
                  {item.banner ? (
                    <img
                      src={item.banner}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl">{item.icon}</span>
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[20px]">
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
              <Link key={item.slug} to={`/project/${item.slug}`} className="block">
                {card}
              </Link>
            ) : (
              <div key={item.slug}>{card}</div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
