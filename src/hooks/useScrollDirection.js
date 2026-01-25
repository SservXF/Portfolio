import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [prevScroll, setPrevScroll] = useState(0)
  const [visible, setVisible] = useState(true)
  const [scrollLocked, setScrollLocked] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      // Don't hide header when scroll is locked (during navigation)
      if (scrollLocked) {
        setVisible(true)
        setPrevScroll(currentScroll) // Update prevScroll even when locked
        return
      }

      const direction = currentScroll > prevScroll ? 'down' : 'up'

      if (currentScroll < 50) {
        setVisible(true)
      } else if (direction !== scrollDirection) {
        setScrollDirection(direction)
        setVisible(direction === 'up')
      }

      setPrevScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDirection, prevScroll, scrollLocked])

  return { scrollDirection, visible, setScrollLocked }
}