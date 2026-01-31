"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 600)
  })

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 px-4 py-4"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block">
            Free Consultation
          </span>
          <span className="text-sm font-medium text-foreground">
            347-524-4770
          </span>
        </div>
        <Button className="rounded-none px-6 py-5 text-xs tracking-[0.15em] uppercase">
          <span>Reserve</span>
          <ArrowRight className="ml-2 w-3 h-3" />
        </Button>
      </div>
    </motion.div>
  )
}
