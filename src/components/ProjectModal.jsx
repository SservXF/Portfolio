import { Github, ExternalLink } from 'lucide-react'
import Modal from './Modal'
import { useLanguage } from '../context/LanguageContext'
import ImageCarousel from './ImageCarousel'

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t, getLocalizedContent } = useLanguage()

  if (!project) return null

  // Support both old 'image' format and new 'media' format
  const projectMedia = project.media || (project.image ? [project.image] : null)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Image - pinned at top, never scrolls away */}
      {projectMedia && (
        <div className="relative h-48 md:h-64 shrink-0 overflow-hidden bg-[var(--color-background-tertiary)]">
          <ImageCarousel
            media={projectMedia}
            alt={project.title}
            className="w-full h-full"
            showFullscreenButton={true}
            objectFit="cover"
          />
        </div>
      )}

      {/* Content - flex column so only description stretches */}
      <div className="flex flex-col flex-1 min-h-0 p-6 md:p-8">
        <h2 className="shrink-0 font-serif text-2xl md:text-3xl font-semibold text-[var(--color-text)] mb-4">
          {project.title}
        </h2>

        <p className="overflow-y-auto flex-1 min-h-0 text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          {getLocalizedContent(project.longDescription)}
        </p>

        <div className="shrink-0 mb-6">
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

        <div className="shrink-0 flex flex-wrap gap-4">
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
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-on-primary)] rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
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