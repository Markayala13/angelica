"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "An experience unlike any other. The discretion, the attention to detail, the results—everything speaks to a level of care I hadn't found elsewhere in the city.",
    name: "Victoria S.",
    title: "Creative Director",
    location: "Upper East Side",
  },
  {
    quote: "Finally, a space that understands what refined aesthetics truly means. No fanfare, just exceptional results delivered with absolute professionalism.",
    name: "Alexandra M.",
    title: "Managing Partner",
    location: "Tribeca",
  },
  {
    quote: "The consultation alone was worth the visit. They didn't just see my skin—they understood my lifestyle, my concerns, my aspirations. That level of insight is rare.",
    name: "Katherine L.",
    title: "Founder & CEO",
    location: "SoHo",
  },
  {
    quote: "In my line of work, discretion is everything. Angelica delivers results that speak for themselves while respecting my need for complete privacy.",
    name: "Elizabeth R.",
    title: "Investment Director",
    location: "Financial District",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  const navigate = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length
      return prev === 0 ? testimonials.length - 1 : prev - 1
    })
  }

  return (
    <section className="py-32 lg:py-44 bg-secondary relative overflow-hidden">
      {/* Large Quote Mark */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[400px] font-serif text-foreground/[0.02] select-none pointer-events-none leading-none">
        &ldquo;
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            Testimonials
          </span>
        </motion.div>

        <div className="max-w-4xl mx-auto relative min-h-[400px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-foreground leading-relaxed mb-12">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium text-foreground tracking-wide">
                  {testimonials[current].name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {testimonials[current].title} — {testimonials[current].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-20">
            <button
              onClick={() => navigate(-1)}
              className="p-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={1} />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-20">
            <button
              onClick={() => navigate(1)}
              className="p-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`h-px transition-all duration-500 ${
                index === current 
                  ? "w-8 bg-foreground" 
                  : "w-4 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 mt-16">
          Individual results may vary based on skin type and treatment plan
        </p>
      </div>
    </section>
  )
}
