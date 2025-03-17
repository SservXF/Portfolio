import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/portfolio">Portfolio</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>
      <p>Welcome to my portfolio website.</p>
    </div>
  )
}

export default Home