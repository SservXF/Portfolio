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
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 gap-8 group"
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[var(--color-border)]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-background)] group-hover:scale-125 transition-transform" />
      </div>

      {/* Date - Left side on desktop */}
      <div className="hidden md:block md:col-span-2 text-right pr-8">
        <div className="flex items-center justify-end gap-2 text-[var(--color-text-muted)]">
          <Calendar size={16} />
          <span className="text-sm font-medium">
            {formatDate(experience.startDate)} — {formatDate(experience.endDate)}
          </span>
        </div>
      </div>

      {/* Content - Right side */}
      <div className="md:col-span-3 pb-12">
        {/* Mobile date */}
        <div className="md:hidden flex items-center gap-2 text-[var(--color-text-muted)] mb-2">
          <Calendar size={14} />
          <span className="text-xs font-medium">
            {formatDate(experience.startDate)} — {formatDate(experience.endDate)}
          </span>
        </div>

        <div className="bg-[var(--color-card)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
          <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">
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