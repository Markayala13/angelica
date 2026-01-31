"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Link2 } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Laser Hair Removal", href: "#" },
    { name: "Skin Treatments", href: "#" },
    { name: "Consultation", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                Angelica Aesthetics
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Manhattan&apos;s premier private laser studio. Where precision technology 
                meets personalized care for those who expect extraordinary results.
              </p>
            </motion.div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-6">
                  Services
                </span>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-6">
                  Company
                </span>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-6">
                  Connect
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/angelica_aesthetics_?igsh=MWE3Zzl1anE1MWlrbQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/AngelicaAesthetics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linktr.ee/Angelica_Aesthetics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="Linktree"
                  >
                    <Link2 className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-foreground/10 mb-12" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            &copy; {new Date().getFullYear()} Angelica Aesthetics. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Elegant Sign-off */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <span className="text-6xl lg:text-8xl font-serif font-light text-foreground/[0.03]">
            A
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
