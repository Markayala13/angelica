"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Process", href: "#process" },
  { name: "Gallery", href: "#gallery" },
  { name: "Investment", href: "#pricing" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4"
            : "bg-transparent py-6 lg:py-8"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="relative z-50">
              <Image
                src="/logo.png"
                alt="Angelica Aesthetics"
                width={300}
                height={120}
                className="h-20 lg:h-28 w-auto"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-6">
              <motion.a 
                href="#consultation" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Consultation
              </motion.a>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Button asChild className="rounded-none px-6 py-5 text-xs tracking-[0.15em] uppercase">
                  <a href="#contact">Reserve</a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" strokeWidth={1} />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" strokeWidth={1} />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Full Screen Elegant */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            {/* Decorative Lines */}
            <div className="absolute top-1/4 left-8 w-px h-32 bg-foreground/5" />
            <div className="absolute bottom-1/4 right-8 w-px h-32 bg-foreground/5" />

            <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4"
              >
                Navigation
              </motion.span>

              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.3 + index * 0.1, 
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif font-medium text-foreground block hover:text-muted-foreground transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col gap-4 mt-12"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-none px-10 py-6 text-xs tracking-[0.15em] uppercase"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Reserve Now</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-none px-10 py-6 text-xs tracking-[0.15em] uppercase bg-transparent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Consultation
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-12 text-center"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
                  Manhattan
                </span>
                <span className="text-xs text-muted-foreground">
                  347-524-4770
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
