import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GITHUB_ICON_PATH, LINKEDIN_ICON_PATH } from '../constants/socialIcons'

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
            <path d={GITHUB_ICON_PATH} />
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
            <path d={LINKEDIN_ICON_PATH} />
          </svg>
        </a>
        {/* We can add more icons here */}
      </div>
    </motion.div>
  )
}

export default BurgerMenuOverlay