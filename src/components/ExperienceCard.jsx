import { motion } from 'framer-motion'
import { Building2, MapPin, Calendar } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function ExperienceCard({ experience, index }) {
  const { t, getLocalizedContent } = useLanguage()

  const formatDate = (dateStr) => {
    if (!dateStr) return t('experience.present')
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_3rem_1fr] group"
    >
      {/* Date - left column (desktop only) */}
      <div className="hidden md:flex items-start justify-end pt-3 pr-4">
        <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
          <Calendar size={16} />
          <span className="text-sm font-medium">
            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
          </span>
        </div>
      </div>

      {/* Timeline - centre column on desktop, absolute left on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)] md:hidden">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-background)] group-hover:scale-125 transition-transform" />
      </div>
      <div className="hidden md:flex flex-col items-center">
        <div className="mt-3 shrink-0 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-background)] group-hover:scale-125 transition-transform z-10" />
        <div className="flex-1 w-px bg-[var(--color-border)]" />
      </div>

      {/* Content - right column */}
      <div className="pb-12 md:pl-4">
        {/* Mobile date */}
        <div className="md:hidden flex items-center gap-2 text-[var(--color-text-muted)] mb-2">
          <Calendar size={14} />
          <span className="text-xs font-medium">
            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
          </span>
        </div>

        <div className="bg-[var(--color-card)] rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
          <h3 className="font-serif text-xl font-semibold text-[var(--color-text)] mb-1">
            {getLocalizedContent(experience.role)}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-[var(--color-text-secondary)] mb-4">
            <div className="flex items-center gap-1">
              <Building2 size={16} />
              <span className="text-sm">{experience.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {getLocalizedContent(experience.description).map((item, i) => (
              <li
                key={i}
                className="text-[var(--color-text-secondary)] text-sm flex items-start gap-2"
              >
                <span className="text-[var(--color-primary)] mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-[var(--color-background-secondary)] text-[var(--color-text-muted)] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}