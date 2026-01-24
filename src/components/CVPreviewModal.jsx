import { Download, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function CVPreviewModal({ isOpen, onClose, cvUrl }) {
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--color-overlay)]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl h-[90vh] bg-[var(--color-card)] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)]">
                Curriculum Vitae
              </h2>
              <div className="flex items-center gap-2">
                <a
                  href={cvUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">{t('contact.downloadCV')}</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[var(--color-background-secondary)] transition-colors"
                  aria-label="Close"
                >
                  <X size={24} className="text-[var(--color-text-secondary)]" />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="flex-1 overflow-hidden bg-[var(--color-background-secondary)]">
              <iframe
                src={cvUrl}
                className="w-full h-full border-0"
                title="CV Preview"
              />
            </div>

            {/* Mobile Download Button (shown at bottom on mobile) */}
            <div className="sm:hidden p-4 border-t border-[var(--color-border)] bg-[var(--color-card)]">
              <a
                href={cvUrl}
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors font-medium"
              >
                <Download size={20} />
                <span>{t('contact.downloadCV')}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
