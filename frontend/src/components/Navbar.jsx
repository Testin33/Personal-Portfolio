import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-bg-alt/90 backdrop-blur-md border-b border-border-dark">
        <Link to="/" className="font-serif text-xl text-coral tracking-tight">
          Juan
        </Link>

        <a
          href="mailto:azconajuan30@gmail.com"
          className="font-btn text-sm font-semibold text-white bg-coral px-5 py-2.5 rounded-full tracking-wide transition-colors duration-200 hover:bg-coral-hover"
        >
          Hire Me →
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 p-1"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-4 h-0.5 bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-alt/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-2xl font-serif">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-gray-400 text-3xl"
          >
            ×
          </button>
          {['About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-coral transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
