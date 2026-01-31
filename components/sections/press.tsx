"use client";

import { motion } from "framer-motion";

const publications = [
  { name: "LUXE", letterSpacing: "0.4em" },
  { name: "MAISON BELLE", letterSpacing: "0.15em" },
  { name: "ÉCLAT", letterSpacing: "0.3em" },
  { name: "AURA", letterSpacing: "0.35em" },
  { name: "THE REFINED", letterSpacing: "0.12em" },
];

export function Press() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.4em] text-muted-foreground font-sans uppercase"
          >
            As Featured In
          </p>
        </motion.div>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-12 md:gap-20 flex-wrap"
          >
            {publications.map((pub, index) => (
              <motion.div
                key={pub.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <span
                  className="font-serif text-lg md:text-xl text-muted-foreground/60 group-hover:text-foreground transition-colors duration-500"
                  style={{ letterSpacing: pub.letterSpacing }}
                >
                  {pub.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
