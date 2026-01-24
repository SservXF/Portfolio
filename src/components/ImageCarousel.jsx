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

  // If no media or only one item, show simple image
  if (!media || media.length === 0) return null
  if (media.length === 1) {
    return (
      <img
        src={typeof media[0] === 'string' ? media[0] : media[0].url}
        alt={alt}
        className={className}
      />
    )
  }

  const currentMedia = typeof media[currentIndex] === 'string' 
    ? { url: media[currentIndex], duration: 5000 }
    : media[currentIndex]

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % media.length)
  }, [media.length])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

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

  const carousel = (
    <div 
      className="relative w-full h-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Display */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentMedia.url}
            alt={`${alt} - ${currentIndex + 1}`}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          goToPrev()
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
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
          className="absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
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
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X size={24} />
            </button>

            <div 
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image Display */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={currentMedia.url}
                    alt={`${alt} - ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
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
