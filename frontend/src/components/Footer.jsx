import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bg-alt border-t border-border-dark px-4 py-[30px] md:px-16 md:py-10">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">

        <p className="font-serif text-[18px] text-coral text-center">
          Juan Azcona
        </p>

        <p className="text-[13px] text-text-muted text-center">
          © 2025 Juan
        </p>

        <nav className="flex gap-6">
          {[
            { label: 'Home', to: '/' },
            { label: 'Projects', to: '/#projects' },
            { label: 'About', to: '/#about' },
            { label: 'Contact', to: '/#contact' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-[13px] text-text-muted hover:text-coral transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </footer>
  )
}
