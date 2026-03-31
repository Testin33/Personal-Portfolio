import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bg-alt border-t border-border-dark px-5 py-8 text-center">
      <p className="font-serif text-xl text-white mb-2">Juan.</p>
      <p className="text-text-muted text-xs mb-4">
        © 2025 Juan. Built with React + FastAPI.
      </p>
      <nav className="flex justify-center gap-6 text-sm text-[#e0e0e0]">
        {[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/#projects' },
          { label: 'About', to: '/#about' },
          { label: 'Contact', href: 'mailto:azconajuan30@gmail.com' },
        ].map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-coral transition-colors duration-200"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.to}
              className="hover:text-coral transition-colors duration-200"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </footer>
  )
}
