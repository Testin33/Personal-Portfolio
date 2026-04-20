import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-bg-main w-full px-16 pt-12 pb-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center gap-5 mb-[60px]">
          <p className="font-semibold text-[12px] text-coral tracking-[2px] uppercase text-center">
            Work
          </p>
          <p className="font-serif text-5xl text-white tracking-[-1px] text-center">
            Featured Projects
          </p>
          <a
            href="#"
            className="font-bold text-[14px] text-coral-hover underline underline-offset-4 hover:text-coral transition-colors"
          >
            View all projects →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="block bg-bg-card border border-border-dark rounded-[12px] overflow-hidden hover:border-coral/40 transition-colors duration-200"
            >
              {/* Photo placeholder / banner */}
              <div className="w-full aspect-[16/9] bg-white rounded-[10px] overflow-hidden">
                {project.banner ? (
                  <img
                    src={project.banner}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : null}
              </div>

              {/* Text body */}
              <div className="flex flex-col gap-[13px] items-center py-6 px-4">
                <p className="font-semibold text-[11px] text-coral tracking-[1.5px] uppercase text-center w-full">
                  {project.tag}
                </p>
                <p className="font-serif font-bold text-[20px] text-white text-center leading-[26px]">
                  {project.title}
                </p>
                <p className="text-[#e0e0e0] text-[14px] leading-[22.4px] text-left w-full">
                  {project.shortDesc}
                </p>

                {project.tech && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-[rgba(0,212,212,0.08)] border border-[rgba(0,212,212,0.2)] text-[#4ecdc4] text-[11px] font-semibold px-[10px] py-[5px] rounded-[20px] tracking-[0.5px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
