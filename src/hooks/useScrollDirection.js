import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [prevScroll, setPrevScroll] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
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
  }, [scrollDirection, prevScroll])

  return { scrollDirection, visible }
}