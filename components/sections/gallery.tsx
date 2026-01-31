"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const images = [
  {
    src: "/images/treatment-1.png",
    alt: "Laser Treatment Session",
    width: "col-span-2",
    height: "row-span-2",
  },
  {
    src: "/images/treatment-2.jpeg",
    alt: "Precision Mapping",
    width: "col-span-1",
    height: "row-span-1",
  },
  {
    src: "/images/treatment-3.jpeg",
    alt: "Advanced Technology",
    width: "col-span-1",
    height: "row-span-1",
  },
  {
    src: "/images/specialist.jpeg",
    alt: "Our Specialist",
    width: "col-span-1",
    height: "row-span-2",
  },
  {
    src: "/images/treatment-5.jpeg",
    alt: "The Experience",
    width: "col-span-1",
    height: "row-span-1",
  },
]

function GalleryImage({ image, index }: { image: typeof images[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${image.width} ${image.height} relative overflow-hidden group`}
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </motion.div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-700" />
      
      {/* Caption on Hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <span className="text-xs tracking-[0.2em] uppercase text-background font-medium">
          {image.alt}
        </span>
      </div>
    </motion.div>
  )
}

export function Gallery() {
  return (
    <section className="py-32 lg:py-44 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24"
        >
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
              Our Sanctuary
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight">
              A glimpse inside
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-6 lg:mt-0 text-sm lg:text-base lg:text-right">
            Where modern elegance meets clinical precision. Our Manhattan studio, designed for your complete comfort and privacy.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
          {images.map((image, index) => (
            <GalleryImage key={image.src} image={image} index={index} />
          ))}
        </div>

        {/* Studio Address */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            37 West 26th Street, 7th Floor — Manhattan, NY
          </span>
        </motion.div>
      </div>
    </section>
  )
}
