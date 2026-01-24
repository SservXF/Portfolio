import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import ExperienceCard from '../components/ExperienceCard'
import { useLanguage } from '../context/LanguageContext'
import { experiences } from '../config/personal'

export default function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <Section id="experience">
      <SectionTitle
        title={t('experience.title')}
        subtitle={t('experience.subtitle')}
      />

      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}