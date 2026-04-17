import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-4 bg-bg-alt/90 backdrop-blur-md border-b border-border-dark">
      <Link to="/" className="font-serif text-xl text-coral tracking-tight">
        Juan
      </Link>

      <div className="flex items-center gap-8 text-sm text-[#e0e0e0]">
        {['About', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-coral transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="mailto:azconajuan30@gmail.com"
        className="font-btn text-sm font-semibold text-white bg-coral px-5 py-2.5 rounded-full tracking-wide transition-colors duration-200 hover:bg-coral-hover"
      >
        Hire Me →
      </a>
    </nav>
  )
}