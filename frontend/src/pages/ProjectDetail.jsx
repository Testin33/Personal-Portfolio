import { useParams, Link } from 'react-router-dom'
import { projects, highlights } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProjectDetail() {
  const { slug } = useParams()
  const item = highlights.find((h) => h.slug === slug) || projects.find((p) => p.slug === slug)

  if (!item) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center text-white">
        <p>Not found.</p>
      </div>
    )
  }

  const isHighlight = highlights.some((h) => h.slug === slug)

  return (
    <div className="min-h-screen bg-bg-main">
      <Navbar />

      <main className="pt-[72px] pb-20">
        <div className="max-w-[860px] mx-auto px-8">

          {/* Back link + section label */}
          <div className="flex items-center justify-between py-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#a0a0a0] text-sm hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back
            </Link>
            <p className="font-semibold text-[12px] text-coral tracking-[2px] uppercase">
              {isHighlight ? 'Key Highlights' : 'Featured Projects'}
            </p>
          </div>

          {/* Main card */}
          <div className="bg-bg-card border border-border-dark rounded-[12px] overflow-hidden">

            {/* Banner image */}
            {item.banner && (
              <div className="w-full overflow-hidden rounded-t-[12px]">
                <img
                  src={item.banner}
                  alt={item.title}
                  className="w-full h-auto block"
                />
              </div>
            )}

            <div className="px-8 py-8 flex flex-col gap-6">

              {/* Tag + title */}
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-[12px] text-coral tracking-[1px] uppercase">
                  {item.tag}{item.subtag ? ` · ${item.subtag}` : ''}
                  {item.year ? ` · ${item.year}` : ''}
                </p>
                <h1 className="font-serif font-bold text-[28px] text-white leading-snug">
                  {item.title}
                </h1>
              </div>

              <hr className="border-t border-border-dark" />

              {/* Body content */}
              <div className="text-[#e0e0e0] text-[15px] leading-[1.75] space-y-5">
                {item.sections
                  ? item.sections.map((section, i) => (
                      <div key={i} className="space-y-4">
                        {section.heading && (
                          <h2 className="text-white text-[17px] font-semibold">{section.heading}</h2>
                        )}
                        {section.paragraphs?.map((p, j) => (
                          <p key={j}>{p}</p>
                        ))}
                        {section.items && (
                          <ul className="list-disc list-inside space-y-1 pl-2">
                            {section.items.map((it, j) => (
                              <li key={j}>{it}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))
                  : item.body
                  ? item.body.split('\n\n').map((para, i) => <p key={i}>{para}</p>)
                  : <p>{item.shortDesc}</p>
                }
              </div>

              {/* Tech tags */}
              {item.tech && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-[rgba(0,212,212,0.08)] border border-[rgba(0,212,212,0.2)] text-[#4ecdc4] text-[11px] font-semibold px-[10px] py-[5px] rounded-[20px] tracking-[0.5px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Proof of Work */}
              {item.proofOfWork?.length > 0 && (
                <div className="flex flex-col gap-4 pt-2">
                  <p className="font-semibold text-[12px] text-coral tracking-[1px] uppercase">
                    Proof of Work
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {item.proofOfWork.map((img, i) => (
                      <div key={i} className="rounded-[12px] overflow-hidden bg-bg-main">
                        <img
                          src={img}
                          alt={`Proof ${i + 1}`}
                          className="w-full h-auto block"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
