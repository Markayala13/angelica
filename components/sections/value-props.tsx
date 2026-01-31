"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const props = [
  {
    number: "01",
    title: "Bespoke Protocols",
    description: "Every treatment is meticulously calibrated to your unique skin profile. No templates. No compromises.",
  },
  {
    number: "02",
    title: "Absolute Discretion",
    description: "A private sanctuary designed for those who value anonymity as much as results. By appointment only.",
  },
  {
    number: "03",
    title: "Lasting Transformation",
    description: "Advanced technology meets artful expertise. Results that endure, confidence that radiates.",
  },
]

export function ValueProps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-secondary relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-l from-foreground to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
            The Angelica Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground max-w-2xl leading-tight">
            Crafted for the <span className="italic">discerning few</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {props.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.2 + index * 0.15, 
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              {/* Number */}
              <span className="text-[120px] lg:text-[180px] font-serif font-light text-foreground/[0.03] absolute -top-12 -left-4 select-none pointer-events-none">
                {prop.number}
              </span>
              
              <div className="relative pt-8 border-t border-foreground/10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6 block">
                  {prop.number}
                </span>
                <h3 className="text-xl lg:text-2xl font-serif font-medium text-foreground mb-4 group-hover:text-muted-foreground transition-colors duration-500">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
