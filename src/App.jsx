import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'
import { Construction } from 'lucide-react'
import { useLanguage } from './context/LanguageContext'

const SHOW_WIP_BANNER = true

function WipBanner() {
  const { t } = useLanguage()
  if (!SHOW_WIP_BANNER) return null
  return (
    <div className="flex items-center justify-center gap-2 py-2 px-4 bg-[var(--color-background-secondary)] border-y border-[var(--color-border)] text-[var(--color-text-muted)] text-sm">
      <Construction size={14} />
      <span>{t('contact.wipBanner')}</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />
      <main>
        <HeroSection />
        <WipBanner />
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