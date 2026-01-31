"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

const packageCategories = [
  { id: "face", label: "Face" },
  { id: "body", label: "Body" },
  { id: "legs-arms", label: "Legs & Arms" },
  { id: "unlimited", label: "Unlimited" },
]

const packages = {
  face: [
    { area: "Upper Lip", sessions: "6 Sessions", price: "$150" },
    { area: "Chin", sessions: "6 Sessions", price: "$225" },
    { area: "Face + Neck", sessions: "6 Sessions", price: "$499" },
  ],
  body: [
    { area: "Belly Line", sessions: "6 Sessions", price: "$299" },
    { area: "Bikini Line", sessions: "6 Sessions", price: "$399" },
    { area: "Brazilian", sessions: "6 Sessions", price: "$599" },
    { area: "Inner Thighs", sessions: "6 Sessions", price: "$450" },
    { area: "Shoulders", sessions: "6 Sessions", price: "$599" },
    { area: "Buttocks", sessions: "6 Sessions", price: "$499" },
    { area: "Lower Back", sessions: "6 Sessions", price: "$360" },
    { area: "Full Back", sessions: "6 Sessions", price: "$799" },
    { area: "Abdomen + Chest", sessions: "6 Sessions", price: "$799" },
  ],
  "legs-arms": [
    { area: "Half Arm", sessions: "6 Sessions", price: "$499" },
    { area: "Full Arms", sessions: "6 Sessions", price: "$599" },
    { area: "Half Leg", sessions: "6 Sessions", price: "$599" },
  ],
  unlimited: [
    { area: "Brazilian", sessions: "Unlimited", price: "$999", highlight: true },
    { area: "Armpits", sessions: "Unlimited", price: "$599", highlight: true },
  ],
}

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("face")

  const currentPackages = packages[activeCategory as keyof typeof packages]

  return (
    <section ref={ref} className="py-32 lg:py-44 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground max-w-2xl mx-auto leading-tight mb-6">
            Treatment <span className="italic">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing reflecting the quality, privacy, and personalized attention you deserve.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
        >
          {packageCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-300",
                activeCategory === category.id
                  ? "bg-foreground text-background"
                  : "bg-transparent text-muted-foreground border border-border hover:border-foreground/40"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentPackages.map((pkg, index) => (
              <motion.div
                key={pkg.area}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={cn(
                  "group relative p-8 transition-all duration-500 border",
                  "highlight" in pkg && pkg.highlight
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card border-border hover:border-foreground/30"
                )}
              >
                {/* Unlimited Badge */}
                {"highlight" in pkg && pkg.highlight && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-foreground text-[9px] tracking-[0.2em] uppercase">
                    Best Value
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={cn(
                    "text-lg font-serif font-medium mb-1",
                    "highlight" in pkg && pkg.highlight ? "text-background" : "text-foreground"
                  )}>
                    {pkg.area}
                  </h3>
                  <span className={cn(
                    "text-[10px] tracking-[0.2em] uppercase",
                    "highlight" in pkg && pkg.highlight ? "text-background/60" : "text-muted-foreground"
                  )}>
                    {pkg.sessions}
                  </span>
                </div>

                <div className={cn(
                  "text-3xl font-serif font-light mb-6",
                  "highlight" in pkg && pkg.highlight ? "text-background" : "text-foreground"
                )}>
                  {pkg.price}
                </div>

                <div className={cn(
                  "w-full h-px mb-6",
                  "highlight" in pkg && pkg.highlight ? "bg-background/20" : "bg-border"
                )} />

                <span className={cn(
                  "flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase",
                  "highlight" in pkg && pkg.highlight
                    ? "text-background/60"
                    : "text-muted-foreground"
                )}>
                  <span>Per package</span>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-muted/50 border border-border p-10 lg:p-14 text-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
              Bespoke Experience
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
              Looking for a <span className="italic">custom package?</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              For multiple areas or comprehensive transformation plans, we create personalized packages tailored to your goals and timeline.
            </p>
            <Button 
              className="rounded-none px-10 py-6 text-xs tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/90 group"
            >
              <span>Request Custom Quote</span>
              <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
            All packages include consultation, personalized protocol, and aftercare support
          </p>
          <a 
            href="#consultation" 
            className="text-xs tracking-[0.15em] uppercase text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Request Full Pricing Guide
          </a>
        </motion.div>
      </div>
    </section>
  )
}
