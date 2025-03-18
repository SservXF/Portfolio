import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerMenuOverlay from './BurgerMenuOverlay'
import { AnimatePresence } from 'framer-motion'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <>
      <header className="sticky top-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-800 text-white z-60">
        <div className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
          <Link to="/">Servan</Link>
        </div>
        <button onClick={toggleMenu} className="cursor-pointer flex justify-center items-center">
          {menuOpen ? (
            // close icon
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // burger menu icon
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>
      <AnimatePresence>
        {menuOpen && <BurgerMenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

export default Header