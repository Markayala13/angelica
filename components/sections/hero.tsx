"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/Video_poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Elegant Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="inline-block text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground font-medium drop-shadow-lg">
              Manhattan&apos;s Premier Private Laser Studio
            </span>
          </motion.div>

          {/* Main Headline - Cinematic Reveal */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium tracking-tight text-foreground leading-[0.95]"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            >
              <span className="block">Effortless Radiance.</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium tracking-tight text-muted-foreground leading-[0.95]"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            >
              <span className="block italic">Timeless Confidence.</span>
            </motion.h1>
          </div>

          {/* Subtitle with Staggered Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl mx-auto mb-14"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed drop-shadow-lg">
              Where precision laser technology meets
              <span className="text-foreground font-medium"> uncompromising privacy</span>.
              Curated treatments for those who expect nothing less than extraordinary.
            </p>
          </motion.div>

          {/* CTAs with Elegant Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="text-sm tracking-[0.15em] uppercase px-10 py-7 rounded-none group relative overflow-hidden"
            >
              <a href="#contact">
                <span className="relative z-10 flex items-center">
                  Reserve Your Consultation
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-sm tracking-[0.15em] uppercase px-10 py-7 rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-500 bg-transparent"
            >
              <a href="#pricing">Explore Services</a>
            </Button>
          </motion.div>

          {/* Elegant Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Discover</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Side Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
      >
        <div className="w-px h-20 bg-foreground/20" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground -rotate-90 whitespace-nowrap origin-center">Est. 2024</span>
        <div className="w-px h-20 bg-foreground/20" />
      </motion.div>
    </section>
  )
}
