import AnimatedPage from '../components/AnimatedPage'

/**
 * Apparait de bas en haut
 * Dispait de haut en bas
 */
const overlayVariants = {
  initial: { y: '100%', opacity: 1 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '100%', opacity: 0 },
}

function Portfolio() {
  return (
    <AnimatedPage variants={overlayVariants}>
      <div className="h-screen">
        <h1>Portfolio</h1>
        <p>Here are some projects...</p>
      </div>
    </AnimatedPage>
  )
}

export default Portfolio