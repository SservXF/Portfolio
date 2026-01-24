import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import EducationTimeline from '../components/EducationTimeline'
import { useLanguage } from '../context/LanguageContext'

export default function EducationSection() {
  const { t } = useLanguage()

  return (
    <Section id="education" variant="alternate">
      <SectionTitle
        title={t('education.title')}
        subtitle={t('education.subtitle')}
      />
      <EducationTimeline />
    </Section>
  )
}