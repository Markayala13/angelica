"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const features = [
  {
    title: "Precision Without Compromise",
    subtitle: "Technology",
    description: "Our state-of-the-art laser systems adapt in real-time to your skin's unique response. Each pulse is calculated, each treatment refined to your exact specifications.",
    image: "/images/treatment-1.png",
  },
  {
    title: "Your Time, Respected",
    subtitle: "Efficiency",
    description: "Sessions designed around your schedule—never the other way around. Arrive, transform, and return to your world. Most treatments complete in under 45 minutes.",
    image: "/images/treatment-4.jpeg",
  },
  {
    title: "Comfort Elevated",
    subtitle: "Experience",
    description: "From our signature cooling technology to our carefully curated environment, every detail exists to ensure your complete ease. This is self-care, redefined.",
    image: "/images/treatment-7.jpeg",
  },
  {
    title: "Beyond the Treatment",
    subtitle: "Aftercare",
    description: "Your journey extends past our doors. Receive personalized protocols, direct access to our specialists, and unwavering support throughout your transformation.",
    image: "/images/specialist.jpeg",
  },
]

function FeatureItem({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const isReversed = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center ${
        isReversed ? "" : ""
      }`}
    >
      {/* Image with Parallax */}
      <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-0 -top-12 -bottom-12">
            <Image
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Elegant Overlay Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
        </div>
        {/* Decorative Frame */}
        <div className={`absolute -bottom-4 ${isReversed ? '-left-4' : '-right-4'} w-32 h-32 border border-foreground/10`} />
      </div>

      {/* Content */}
      <div className={`${isReversed ? "lg:order-1 lg:text-right" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 block">
            {feature.subtitle}
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-6 leading-tight">
            {feature.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-base lg:text-lg max-w-md">
            {feature.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Features() {
  return (
    <section className="py-32 lg:py-44 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 lg:mb-32"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
            The Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground max-w-3xl mx-auto leading-tight">
            Every detail, <span className="italic">intentional</span>
          </h2>
        </motion.div>

        <div className="space-y-32 lg:space-y-44">
          {features.map((feature, index) => (
            <FeatureItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
