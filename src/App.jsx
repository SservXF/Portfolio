import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-[var(--color-text-muted)] text-sm border-t border-[var(--color-border)]">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  )
}