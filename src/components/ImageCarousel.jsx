import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageCarousel({ 
  media = [], 
  alt = '', 
  autoPlay = true,
  className = '',
  showFullscreenButton = false
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const previousOverflowRef = useRef('')
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 })
  const isDraggingRef = useRef(false)
  const [displayIndex, setDisplayIndex] = useState(media.length) // Actual position in tripled array
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Enable animation after initial render to prevent slide-in on mount
  useEffect(() => {
    setShouldAnimate(true)
  }, [])

  // If no media or only one item, show simple image
  if (!media || media.length === 0) return null
  if (media.length === 1) {
    return (
      <img
        src={typeof media[0] === 'string' ? media[0] : media[0].url}
        alt={alt}
        className={className}
        draggable="false"
      />
    )
  }

  const currentMedia = typeof media[currentIndex] === 'string' 
    ? { url: media[currentIndex], duration: 5000 }
    : media[currentIndex]

  const goToNext = useCallback(() => {
    setDirection(1)
    setDisplayIndex(prev => prev + 1)
    setCurrentIndex((prev) => (prev + 1) % media.length)
  }, [media.length])

  const goToPrev = () => {
    setDirection(-1)
    setDisplayIndex(prev => prev - 1)
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    const diff = index - currentIndex
    setDisplayIndex(prev => prev + diff)
    setCurrentIndex(index)
  }

  // Reset displayIndex when it wraps too far
  useEffect(() => {
    if (displayIndex >= media.length * 2) {
      // Wrapped forward past the end of middle set - wait for animation, then snap back instantly
      setTimeout(() => {
        setShouldAnimate(false)
        setDisplayIndex(displayIndex - media.length)
        // Re-enable animation on next frame
        requestAnimationFrame(() => setShouldAnimate(true))
      }, 300)
    } else if (displayIndex < media.length) {
      // Wrapped backward past the start of middle set - wait for animation, then snap back instantly
      setTimeout(() => {
        setShouldAnimate(false)
        setDisplayIndex(displayIndex + media.length)
        // Re-enable animation on next frame
        requestAnimationFrame(() => setShouldAnimate(true))
      }, 300)
    }
  }, [displayIndex, media.length])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || media.length <= 1 || isFullscreen) return

    const duration = currentMedia.duration || 5000
    const timer = setTimeout(goToNext, duration)

    return () => clearTimeout(timer)
  }, [currentIndex, autoPlay, isPaused, media.length, currentMedia.duration, goToNext, isFullscreen])

  // Handle escape key for fullscreen
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isFullscreen])

  // Prevent body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen) {
      // Save current overflow state before changing it
      previousOverflowRef.current = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else if (previousOverflowRef.current !== null) {
      // Restore previous overflow state only when closing fullscreen
      document.body.style.overflow = previousOverflowRef.current
    }
    
    // Cleanup on unmount
    return () => {
      if (isFullscreen && previousOverflowRef.current !== null) {
        document.body.style.overflow = previousOverflowRef.current
      }
    }
  }, [isFullscreen])

  // Swipe detection
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const handleDragStart = () => {
    isDraggingRef.current = true
    document.body.setAttribute('data-carousel-dragging', 'true')
  }

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x)
    
    // Trigger slide on any drag movement or high velocity swipe
    if (offset.x < -1 || swipe < -swipeConfidenceThreshold) {
      goToNext()
    } else if (offset.x > 1 || swipe > swipeConfidenceThreshold) {
      goToPrev()
    }

    // Reset drag flag after a longer delay to prevent modal close on drag release
    setTimeout(() => {
      isDraggingRef.current = false
      document.body.removeAttribute('data-carousel-dragging')
    }, 300)
  }

  const handleClick = (e) => {
    if (isDraggingRef.current) {
      e.stopPropagation()
      e.preventDefault()
    }
  }

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0
      }
    }
  }

  const carousel = (
    <div 
      className="relative w-full h-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={handleClick}
    >
      {/* Main Image Display */}
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${displayIndex * 100}%` }}
          transition={shouldAnimate ? { type: "tween", duration: 0.3, ease: "easeOut" } : { duration: 0 }}
          drag="x"
          dragElastic={0.7}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {/* Render images three times for infinite wrapping */}
          {[...media, ...media, ...media].map((item, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={typeof item === 'string' ? item : item.url}
                alt={`${alt} - ${(index % media.length) + 1}`}
                className={className}
                draggable="false"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows - Always visible on mobile */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          goToPrev()
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              goToSlide(index)
            }}
            className={`h-2 rounded-full transition-all border border-white/30 ${
              index === currentIndex
                ? 'bg-white w-6 shadow-lg'
                : 'bg-white/60 hover:bg-white/90 w-2 shadow-md'
            }`}
            style={{
              boxShadow: index === currentIndex 
                ? '0 0 8px rgba(0, 0, 0, 0.5), 0 0 2px rgba(255, 255, 255, 0.8)' 
                : '0 0 4px rgba(0, 0, 0, 0.4)'
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Fullscreen Button */}
      {showFullscreenButton && !isFullscreen && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsFullscreen(true)
          }}
          className="absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-black/50 hover:bg-black/70 text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10"
          aria-label="Fullscreen"
        >
          <Maximize2 size={18} />
        </button>
      )}
    </div>
  )

  return (
    <>
      {carousel}
      
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={(e) => {
              if (!isDraggingRef.current) {
                setIsFullscreen(false)
              }
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                if (!isDraggingRef.current) {
                  setIsFullscreen(false)
                }
              }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X size={24} />
            </button>

            <div 
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            >
              {/* Main Image Display */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {media.map((item, index) => {
                  // Calculate position with wrapping for smooth animation
                  let offset = index - currentIndex
                  if (offset > media.length / 2) {
                    offset -= media.length
                  } else if (offset < -media.length / 2) {
                    offset += media.length
                  }

                  return (
                    <motion.div
                      key={index}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={false}
                      animate={{
                        x: `${offset * 100}%`,
                        opacity: index === currentIndex ? 1 : 0
                      }}
                      transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                      drag="x"
                      dragElastic={0.7}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={typeof item === 'string' ? item : item.url}
                        alt={`${alt} - ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                        draggable="false"
                      />
                    </motion.div>
                  )
                })}
              </div>

              {/* Navigation Arrows in Fullscreen */}
              {media.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      goToPrev()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      goToNext()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={28} />
                  </button>

                  {/* Dots in Fullscreen */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {media.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          goToSlide(index)
                        }}
                        className={`h-2.5 rounded-full transition-all border border-white/50 ${
                          index === currentIndex
                            ? 'bg-white w-8'
                            : 'bg-white/40 hover:bg-white/60 w-2.5'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
