import { Link } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'

function Home() {
  return (
    <AnimatedPage>
      <div>
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