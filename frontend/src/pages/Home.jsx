import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import KeyHighlights from '../sections/KeyHighlights'
import WhoIAm from '../sections/WhoIAm'
import FeaturedProjects from '../sections/FeaturedProjects'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Navbar />
      <main>
        <Hero />
        <KeyHighlights />
        <WhoIAm />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
