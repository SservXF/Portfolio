import { useState } from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../config/personal'

export default function ProjectsSection() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <Section id="projects" variant="alternate">
      <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  )
}