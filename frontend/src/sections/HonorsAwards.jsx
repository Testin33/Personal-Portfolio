import { honors } from '../data/honors'

export default function HonorsAwards() {
  return (
    <section id="honors" className="px-5 py-10 bg-bg-main border-t border-border-dark">
      <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-3">
        Recognition
      </p>
      <h2 className="text-3xl font-semibold text-white mb-2">
        Honors &amp; Awards
      </h2>
      <p className="text-[#e0e0e0] text-sm mb-6">
        Academic and competitive recognition from local to international stages.
      </p>

      <div className="flex flex-col gap-4">
        {honors.map((item, i) => (
          <div
            key={i}
            className="bg-bg-card border border-border-dark rounded-2xl p-5 flex gap-4 items-start"
          >
            <div className="w-9 h-9 shrink-0 rounded-lg bg-bg-alt border border-border-dark flex items-center justify-center text-base">
              {item.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                {item.title}
              </h3>
              <p className="text-[#e0e0e0] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
