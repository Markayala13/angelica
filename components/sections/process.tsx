"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "I",
    title: "The Consultation",
    description: "Begin with a private assessment where we map your skin's unique characteristics, understand your goals, and craft a vision for your transformation.",
  },
  {
    number: "II",
    title: "Your Protocol",
    description: "Receive a bespoke treatment plan designed exclusively for you—calibrated to your skin type, lifestyle, and desired timeline.",
  },
  {
    number: "III",
    title: "The Reveal",
    description: "Experience the culmination of precision technology and expert care. Smooth, radiant skin that reflects the confidence within.",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 lg:py-44 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 lg:mb-32"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
            Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground max-w-2xl mx-auto leading-tight">
            Three steps to <span className="italic">radiance</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-px bg-foreground/10" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.2, 
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-center relative"
              >
                {/* Large Roman Numeral */}
                <div className="mb-8 relative">
                  <span className="text-7xl lg:text-8xl font-serif font-light text-foreground/[0.08]">
                    {step.number}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 border border-foreground/20 rounded-full flex items-center justify-center bg-background">
                    <span className="text-xs tracking-widest text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-serif font-medium text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-24"
        >
          Tailored protocols for all skin types — Complimentary initial consultation
        </motion.p>
      </div>
    </section>
  )
}
