import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Award } from 'lucide-react'
import Modal from './Modal'
import { useLanguage } from '../context/LanguageContext'
import { education } from '../config/personal'

export default function EducationTimeline() {
  const { getLocalizedContent } = useLanguage()
  const [selectedEducation, setSelectedEducation] = useState(null)

  return (
    <>
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

        {/* Education Items */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <button
                onClick={() => setSelectedEducation(edu)}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-card)] border-4 border-[var(--color-primary)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg"
                aria-label={`View details for ${getLocalizedContent(edu.degree)}`}
              >
                <GraduationCap
                  size={24}
                  className="text-[var(--color-primary)] md:hidden"
                />
                <GraduationCap
                  size={28}
                  className="text-[var(--color-primary)] hidden md:block"
                />
              </button>

              {/* Content Card */}
              <div
                className={`ml-20 w-[calc(100%-5rem)] md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedEducation(edu)}
                  className="bg-[var(--color-card)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all cursor-pointer shadow-md hover:shadow-xl"
                >
                  <div className="text-[var(--color-primary)] font-bold text-lg mb-1">
                    {edu.year}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                    {getLocalizedContent(edu.degree)}
                  </h3>
                  <div className="flex items-center gap-2 text-[var(--color-text-secondary)] mb-2">
                    <MapPin size={14} />
                    <span className="text-sm">
                      {edu.institution} • {edu.location}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Detail Modal */}
      <Modal
        isOpen={!!selectedEducation}
        onClose={() => setSelectedEducation(null)}
      >
        {selectedEducation && (
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <GraduationCap
                  size={32}
                  className="text-[var(--color-primary)]"
                />
              </div>
              <div>
                <div className="text-[var(--color-primary)] font-bold">
                  {selectedEducation.year}
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text)]">
                  {getLocalizedContent(selectedEducation.degree)}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[var(--color-text-secondary)] mb-6">
              <MapPin size={18} />
              <span>
                {selectedEducation.institution} • {selectedEducation.location}
              </span>
            </div>

            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              {getLocalizedContent(selectedEducation.description)}
            </p>

            {selectedEducation.achievements && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-text)] mb-3">
                  <Award size={20} className="text-[var(--color-accent)]" />
                  Achievements
                </h3>
                <ul className="space-y-2">
                  {getLocalizedContent(selectedEducation.achievements).map(
                    (achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[var(--color-text-secondary)]"
                      >
                        <span className="text-[var(--color-accent)]">✦</span>
                        <span>{achievement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  )
}