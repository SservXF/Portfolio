import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const overlayVariants = {
  initial: { y: '-100%', opacity: 0 }, // Status initial, il est caché tout en haut en opacity 0
  animate: { y: 0, opacity: 1 },    // Status animate, il se déplace vers le bas en opacity 1
  exit: { y: '-100%', opacity: 0 },   // Status exit, il se déplace vers le haut en opacity 0
}

function BurgerMenuOverlay({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center z-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={overlayVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="flex flex-col space-y-8" onClick={(e) => e.stopPropagation()}>
        <Link to="/" className="text-3xl text-white" onClick={onClose}>
          Home
        </Link>
        <Link to="/portfolio" className="text-3xl text-white" onClick={onClose}>
          Portfolio
        </Link>
        <Link to="/about" className="text-3xl text-white" onClick={onClose}>
          About
        </Link>
        <Link to="/contact" className="text-3xl text-white" onClick={onClose}>
          Contact
        </Link>
      </nav>
      {/* Social icons at the bottom left */}
      <div className="absolute bottom-4 left-4 flex space-x-4">
        <a
          href="https://github.com/SservXF"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
        {/* GitHub icon */}
          <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577
            0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73
            1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.931
            0-1.31.467-2.381 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.02.005
            2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.839 1.233 1.91 1.233 3.22 0
            4.609-2.803 5.624-5.475 5.921.43.369.823 1.096.823 2.209 0 1.594-.015 2.877-.015 3.267 0 .319.192.694.8.576C20.565 21.795
            24 17.302 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/servan-yazici"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
        {/* LinkedIn icon */}
          <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.028-3.042-1.853-3.042-1.855 0-2.137 1.445-2.137
            2.939v5.672h-3.553V9h3.414v1.561h.049c.477-.9 1.637-1.853 3.367-1.853 3.599 0 4.266 2.368 4.266 5.451v6.293zM5.337
            7.433c-1.144 0-2.072-.928-2.072-2.073A2.073 2.073 0 015.337 3.287c1.145 0 2.073.928 2.073 2.073s-.928
            2.073-2.073 2.073zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 
            23.225.792 24 1.771 24h20.451C23.206 24 24 23.225 24 22.271V1.729C24 .774 23.206 0 22.225 0z" />
          </svg>
        </a>
        {/* We can add more icons here */}
      </div>
    </motion.div>
  )
}

export default BurgerMenuOverlay