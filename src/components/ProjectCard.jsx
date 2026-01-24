import { motion } from 'framer-motion'
import { Github, ExternalLink, Eye } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function ProjectCard({ project, onClick, index }) {
  const { t, getLocalizedContent } = useLanguage()

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer bg-[var(--color-card)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl"
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-[var(--color-background-tertiary)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
          {project.title}
        </h3>

        <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
          {getLocalizedContent(project.description)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-[var(--color-background-secondary)] text-[var(--color-text-muted)] rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-[var(--color-background-secondary)] text-[var(--color-text-muted)] rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Github size={16} />
              <span>{t('projects.viewCode')}</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <ExternalLink size={16} />
              <span>{t('projects.liveDemo')}</span>
            </a>
          )}
          <button
            onClick={onClick}
            className="ml-auto flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            <Eye size={16} />
            <span>{t('projects.details')}</span>
          </button>
        </div>
      </div>
    </motion.article>
  )
}