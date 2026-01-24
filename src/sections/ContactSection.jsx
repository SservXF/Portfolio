import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import { useLanguage } from '../context/LanguageContext'
import { personalInfo } from '../config/personal'

export default function ContactSection() {
  const { t } = useLanguage()

  const contactLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: Github,
      color: 'hover:bg-gray-800 hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: Linkedin,
      color: 'hover:bg-blue-600 hover:text-white',
    },
  ]

  return (
    <Section id="contact">
      <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <div className="max-w-xl mx-auto text-center">
        {/* Main Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href={personalInfo.cvUrl}
            download
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-full hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span>{t('contact.downloadCV')}</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-medium rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            <Mail size={20} />
            <span>{t('contact.email')}</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-[var(--color-text-muted)] mb-4">
            {t('contact.or')}
          </p>
          <div className="flex items-center justify-center gap-4">
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full bg-[var(--color-background-secondary)] flex items-center justify-center text-[var(--color-text-secondary)] transition-all ${link.color}`}
                aria-label={link.name}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Email Display */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-[var(--color-text-muted)]"
        >
          {personalInfo.email}
        </motion.p>
      </div>
    </Section>
  )
}