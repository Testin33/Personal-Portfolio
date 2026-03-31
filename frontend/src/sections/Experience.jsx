import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Experience() {
  return (
    <section id="projects" className="px-5 py-10 bg-bg-main border-t border-border-dark">
      {/* Section label */}
      <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-3">
        Experience
      </p>

      <h2 className="text-3xl font-semibold text-white mb-2">
        Key Highlights
      </h2>
      <p className="text-[#e0e0e0] text-sm mb-6">
        International research, national competitions, and academic excellence.
      </p>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ExperienceCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({ project }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="block bg-bg-card border border-border-dark rounded-2xl p-5 hover:border-coral/40 transition-colors duration-200"
    >
      {/* Icon placeholder */}
      <div className="w-9 h-9 rounded-lg bg-bg-alt border border-border-dark flex items-center justify-center mb-4">
        <span className="text-coral text-base">🏆</span>
      </div>

      {/* Tag + year */}
      <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-2">
        {project.tag} · {project.year}
      </p>

      {/* Title */}
      <h3 className="text-white font-semibold text-base mb-2 leading-snug">
        {project.title}
      </h3>

      {/* Short description */}
      <p className="text-[#e0e0e0] text-sm leading-relaxed">
        {project.shortDesc}
      </p>
    </Link>
  )
}
