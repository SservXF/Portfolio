import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../config/personal'

const socialLinks = [
  {
    name: 'GitHub',
    url: personalInfo.github,
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
]

export default function SocialLinks({ size = 'md', showLabels = false }) {
  const iconSize = size === 'lg' ? 24 : 20
  const buttonClass =
    size === 'lg'
      ? 'w-12 h-12'
      : 'w-10 h-10'

  return (
    <div className={`flex items-center ${showLabels ? 'gap-4' : 'gap-3'}`}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target={social.name !== 'Email' ? '_blank' : undefined}
          rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${buttonClass} rounded-full bg-[var(--color-background-secondary)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background-tertiary)] transition-colors`}
          aria-label={social.name}
        >
          <social.icon size={iconSize} />
        </motion.a>
      ))}
    </div>
  )
}