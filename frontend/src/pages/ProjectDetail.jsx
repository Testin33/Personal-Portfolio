import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Footer from '../components/Footer'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center text-white">
        <p>Project not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-main">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 md:px-16 bg-bg-alt/90 backdrop-blur-md border-b border-border-dark">
        <Link to="/" className="text-[#e0e0e0] hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </Link>
        <button className="flex flex-col gap-1.5 p-1">
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-4 h-0.5 bg-white" />
        </button>
      </header>

      <main className="pt-[72px]">
        <div className="md:max-w-3xl md:mx-auto">
        {/* Section label + title */}
        <div className="px-5 pt-6 pb-4 md:px-0">
          <h1 className="text-2xl font-semibold text-white">Key Highlights</h1>
        </div>

        {/* Banner image */}
        {project.banner && (
          <div className="mx-5 md:mx-0 rounded-xl overflow-hidden mb-6">
            <img
              src={project.banner}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="px-5 md:px-0">
          {/* Tag + year */}
          <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-2">
            {project.tag} · {project.year}
          </p>

          {/* Title */}
          <h2 className="text-xl font-semibold text-white mb-4 leading-snug">
            {project.title}
          </h2>

          {/* Body — structured sections or plain text */}
          <div className="text-[#e0e0e0] text-sm leading-relaxed space-y-6">
            {project.sections
              ? project.sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-white text-base font-semibold mb-2">{section.heading}</h3>
                    {section.paragraphs?.map((p, j) => (
                      <p key={j} className="mb-2">{p}</p>
                    ))}
                    {section.items && (
                      <ul className="list-disc list-inside space-y-1">
                        {section.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              : project.body.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
          </div>

          {/* Proof of work */}
          {project.proofOfWork?.length > 0 && (
            <div className="mt-8">
              <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-4">
                Proof of Work
              </p>
              <div className="grid grid-cols-2 gap-3">
                {project.proofOfWork.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden bg-bg-card">
                    <img
                      src={img}
                      alt={`Proof ${i + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pb-10" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
