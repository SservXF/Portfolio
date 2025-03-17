import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const overlayVariants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: '-100%', opacity: 0 },
}

function BurgerMenuOverlay({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center z-50"
      initial="hidden"
      animate="visible"
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
    </motion.div>
  )
}

export default BurgerMenuOverlay