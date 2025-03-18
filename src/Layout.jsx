import React from 'react'
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row flex-1"> {/* Container for sidebar and main content */}
        <main className="flex-1 md:ml-16"> {/* Add margin-left on desktop to account for sidebar */}
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <LeftBar />
      </div>
    </div>
  )
}

export default Layout