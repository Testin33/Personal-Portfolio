import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="px-5 py-10 bg-bg-main border-t border-border-dark">
      {/* Section label */}
      <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-3">
        Work
      </p>

      <h2 className="text-3xl font-semibold text-white mb-6">
        Featured Projects
      </h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/project/${project.slug}`}
            className="block bg-bg-card border border-border-dark rounded-2xl overflow-hidden hover:border-coral/40 transition-colors duration-200"
          >
            {project.banner && (
              <img
                src={project.banner}
                alt={project.title}
                className="w-full h-36 object-cover"
              />
            )}
            <div className="p-5">
              <p className="text-xs font-semibold text-coral tracking-widest uppercase mb-2">
                {project.tag} · {project.year}
              </p>
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-[#e0e0e0] text-sm leading-relaxed">
                {project.shortDesc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
