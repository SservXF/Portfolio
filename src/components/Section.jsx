import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Section({
  id,
  children,
  className = '',
  variant = 'default',
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const bgClass =
    variant === 'alternate'
      ? 'bg-[var(--color-background-secondary)]'
      : 'bg-[var(--color-background)]'

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-32 ${bgClass} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}