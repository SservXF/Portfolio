import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function ImageCarousel({ 
  media = [], 
  alt = '', 
  autoPlay = true,
  className = '',
  showFullscreenButton = false
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    skipSnaps: false,
    containScroll: 'trimSnaps',
    dragFree: false,
    slidesToScroll: 1
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const isDraggingRef = useRef(false)
  const pointerDownPositionRef = useRef({ x: 0, y: 0 })

  // Convert media to lightbox slides format
  const lightboxSlides = media.map(item => ({
    src: typeof item === 'string' ? item : item.url,
    alt: alt
  }))

  // Track current slide for Embla
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    
    // Track drag events to prevent click on drag
    const onPointerDown = (event) => {
      isDraggingRef.current = false
      document.body.removeAttribute('data-carousel-dragging')
      // Store initial position
      pointerDownPositionRef.current = {
        x: event.clientX || 0,
        y: event.clientY || 0
      }
    }
    
    const onPointerMove = (event) => {
      // Only track if pointer started on carousel
      if (pointerDownPositionRef.current.x === 0 && pointerDownPositionRef.current.y === 0) return
      
      // Only consider it dragging if moved more than 5 pixels
      const deltaX = Math.abs((event.clientX || 0) - pointerDownPositionRef.current.x)
      const deltaY = Math.abs((event.clientY || 0) - pointerDownPositionRef.current.y)
      
      if (deltaX > 5 || deltaY > 5) {
        isDraggingRef.current = true
        document.body.setAttribute('data-carousel-dragging', 'true')
      }
    }
    
    const onPointerUp = () => {
      // Reset position tracking
      pointerDownPositionRef.current = { x: 0, y: 0 }
      
      setTimeout(() => {
        isDraggingRef.current = false
        document.body.removeAttribute('data-carousel-dragging')
      }, 50)
    }
    
    const container = emblaApi.rootNode()
    container.addEventListener('pointerdown', onPointerDown)
    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerup', onPointerUp)
    
    // Global pointerup listener to ensure cleanup even if released outside carousel
    window.addEventListener('pointerup', onPointerUp)
    
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
      container.removeEventListener('pointerdown', onPointerDown)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [emblaApi, onSelect])

  // Auto-play functionality - resets on any slide change
  useEffect(() => {
    if (!autoPlay || !emblaApi || media.length <= 1 || isPaused || lightboxOpen) return

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(autoplayInterval)
  }, [emblaApi, autoPlay, media.length, isPaused, currentIndex, lightboxOpen]) // Added lightboxOpen to disable autoplay in fullscreen

  // Navigation functions
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi])

  if (!media || media.length === 0) return null

  return (
    <>
      <div 
        className="relative w-full h-full group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Embla Carousel */}
        <div className="overflow-hidden h-full w-full" ref={emblaRef}>
          <div className="flex h-full gap-0" style={{ touchAction: 'pan-y', margin: 0 }}>
            {media.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 h-full overflow-hidden" style={{ margin: 0, padding: 0 }}>
                <img
                  src={typeof item === 'string' ? item : item.url}
                  alt={`${alt} - ${index + 1}`}
                  className={className}
                  draggable="false"
                  style={{ 
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.05)',
                    backfaceVisibility: 'hidden',
                    margin: 0,
                    padding: 0
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Only show if multiple images */}
        {media.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                scrollPrev()
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                scrollNext()
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
                    scrollTo(index)
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
          </>
        )}

        {/* Fullscreen Button */}
        {showFullscreenButton && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightboxOpen(true)
            }}
            className="absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-black/50 hover:bg-black/70 text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10"
            aria-label="Fullscreen"
          >
            <Maximize2 size={18} />
          </button>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentIndex}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' } }}
      />
    </>
  )
}