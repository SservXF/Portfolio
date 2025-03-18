import { motion } from 'framer-motion'

const defaultVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
}

const defaultTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
}

function AnimatedPage({ children, variants = defaultVariants, transition = defaultTransition, ...rest }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage