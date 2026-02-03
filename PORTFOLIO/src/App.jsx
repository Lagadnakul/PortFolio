import { Navbar } from './layout/Navbar.jsx'
import { Hero } from './Sections/Hero.jsx'
import { About } from './Sections/About.jsx'
import { Projects } from './Sections/Projects.jsx'
import { Contact } from './Sections/Contact.jsx'
import { Experience } from './Sections/Experience.jsx'
import { Testimonials } from './Sections/Testimonials.jsx'
import { Button } from './Components/Button.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Experience />
        <Testimonials />
        <Button />
      </main>
    </div>
  )
}

export default App