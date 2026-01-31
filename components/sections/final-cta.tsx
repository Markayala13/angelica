"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className="relative py-40 lg:py-56 bg-foreground text-background overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-[0.03]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-background/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-48 bg-gradient-to-b from-background/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-headline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] tracking-[0.4em] uppercase text-background/50 block mb-8"
          >
            Begin Your Transformation
          </motion.span>

          {/* Main Headline with Cinematic Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-[1.1]"
            >
              The confidence you deserve.
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h2
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-[1.1] italic text-background/60"
            >
              The results you expect.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-background/60 mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule your complimentary consultation and discover why Manhattan&apos;s 
            most discerning clientele choose Angelica Aesthetics.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
          >
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 text-xs tracking-[0.15em] uppercase px-10 py-7 rounded-none group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-background/30 text-background hover:bg-background/10 text-xs tracking-[0.15em] uppercase px-10 py-7 rounded-none bg-transparent"
            >
              Call 347-524-4770
            </Button>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-background/10"
          >
            <div className="text-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-background/40 block mb-4">
                Location
              </span>
              <p className="text-sm text-background/80 leading-relaxed">
                37 West 26th Street, 7th Floor
                <br />
                New York, NY 10010
              </p>
            </div>
            <div className="text-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-background/40 block mb-4">
                Contact
              </span>
              <p className="text-sm text-background/80 leading-relaxed">
                347-524-4770
                <br />
                concierge@angelicaaesthetics.com
              </p>
            </div>
            <div className="text-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-background/40 block mb-4">
                Hours
              </span>
              <p className="text-sm text-background/80 leading-relaxed">
                Monday – Friday: 9am – 7pm
                <br />
                Saturday: 10am – 5pm
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />
    </section>
  )
}
