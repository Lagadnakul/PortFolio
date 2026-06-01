import { Navbar } from './layout/Navbar.jsx'
import { About } from './sections/About.jsx'
import { Contact } from './sections/Contact.jsx'
import { Experience } from './sections/Experience.jsx'
import { Hero } from './sections/Hero.jsx'
import { Projects } from './sections/Projects.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App