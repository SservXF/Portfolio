import AnimatedPage from '../components/AnimatedPage'

/**
 * Apparait de bas en haut
 * Dispait de haut en bas
 */
const overlayVariants = {
  initial: { y: '100vh', opacity: 1 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '100vh', opacity: 1 },
}

function Portfolio() {
  return (
    <AnimatedPage variants={overlayVariants}>
      <div>
        <h1>Portfolio</h1>
        <p>Here are some projects...</p>
      </div>
    </AnimatedPage>
  )
}

export default Portfolio