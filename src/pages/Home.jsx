import { Link } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'

const homeVariants = {
  initial: { y: '-100%', opacity: 1 },
  animate: { y: '0%', opacity: 1 },
  exit: { y: '-100%', opacity: 1 },
}

function Home() {
  return (
    <AnimatedPage variants={homeVariants}>
      <div className="h-screen">
        <h1>Home</h1>
        <nav>
          <Link to="/portfolio">Portfolio</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/contact">Contact</Link>
        </nav>
        <p>Welcome to my portfolio website.</p>
      </div>
    </AnimatedPage>
  )
}

export default Home