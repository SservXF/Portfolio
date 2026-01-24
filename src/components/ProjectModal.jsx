import { Github, ExternalLink } from 'lucide-react'
import Modal from './Modal'
import { useLanguage } from '../context/LanguageContext'

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t, getLocalizedContent } = useLanguage()

  if (!project) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 md:p-8">
        {/* Image */}
        {project.image && (
          <div className="relative h-64 md:h-80 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 overflow-hidden bg-[var(--color-background-tertiary)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          {getLocalizedContent(project.longDescription)}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
            {t('projects.technologies')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium bg-[var(--color-background-secondary)] text-[var(--color-text)] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-background-secondary)] text-[var(--color-text)] rounded-lg hover:bg-[var(--color-background-tertiary)] transition-colors"
            >
              <Github size={20} />
              <span>{t('projects.viewCode')}</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              <ExternalLink size={20} />
              <span>{t('projects.liveDemo')}</span>
            </a>
          )}
        </div>
      </div>
    </Modal>
  )
}