"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const videos = [
  { src: "/videos/Video.mp4", poster: "/videos/Video_poster.jpg", title: "Total Transformation", subtitle: "Results that speak for themselves" },
  { src: "/videos/Video_1.mp4", poster: "/videos/Video_1_poster.jpg", title: "Natural Beauty", subtitle: "Enhance your unique essence" },
  { src: "/videos/Video_2.mp4", poster: "/videos/Video_2_poster.jpg", title: "Premium Treatment", subtitle: "State-of-the-art technology" },
  { src: "/videos/Video_3.mp4", poster: "/videos/Video_3_poster.jpg", title: "Exclusive Experience", subtitle: "Personalized care just for you" },
  { src: "/videos/Video_4.mp4", poster: "/videos/Video_4_poster.jpg", title: "Rejuvenation", subtitle: "Your skin, renewed" },
  { src: "/videos/Video_5.mp4", poster: "/videos/Video_5_poster.jpg", title: "Art & Precision", subtitle: "Where science meets beauty" },
  { src: "/videos/Video_6.mp4", poster: "/videos/Video_6_poster.jpg", title: "Radiant Confidence", subtitle: "Feel extraordinary" },
  { src: "/videos/Video_7.mp4", poster: "/videos/Video_7_poster.jpg", title: "Real Results", subtitle: "Stories of transformation" },
  { src: "/videos/Video_8.mp4", poster: "/videos/Video_8_poster.jpg", title: "Your Moment", subtitle: "The luxury of self-care" },
]

export function VideoShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [currentIndex])

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground font-medium mb-4">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-6">
            <span className="block text-foreground">Moments of</span>
            <span className="block text-muted-foreground italic">Transformation</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Every treatment is a work of art. Discover the stories of those who
            trusted us to reveal their best version.
          </p>
        </motion.div>

        {/* Main Video Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  poster={videos[currentIndex].poster}
                >
                  <source src={videos[currentIndex].src} type="video/mp4" />
                </video>
              </motion.div>
            </AnimatePresence>

            {/* Overlay Gradient - only on top for title visibility */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

            {/* Video Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-16 left-0 right-0 px-6 md:px-10 pointer-events-none"
              >
                <h3 className="text-2xl md:text-4xl font-serif text-white mb-2">
                  {videos[currentIndex].title}
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  {videos[currentIndex].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isHovered ? 1 : 0.6, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isHovered ? 1 : 0.6, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Video Counter */}
            <div className="absolute top-6 right-6 text-white/80 text-sm font-medium tracking-wider bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(videos.length).padStart(2, '0')}</span>
            </div>
          </motion.div>

          {/* Thumbnail Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex gap-3 justify-center overflow-x-auto pb-4 px-4"
          >
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300",
                  currentIndex === index
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                    : "opacity-50 hover:opacity-80"
                )}
              >
                <Image
                  src={video.poster}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </motion.div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  currentIndex === index
                    ? "w-8 bg-foreground"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                )}
              />
            ))}
          </div>
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl font-serif italic text-muted-foreground">
            "True beauty is the projection of inner confidence"
          </blockquote>
          <cite className="block mt-4 text-sm tracking-[0.2em] uppercase text-muted-foreground/60">
            — Angelica Aesthetics
          </cite>
        </motion.div>
      </div>
    </section>
  )
}
