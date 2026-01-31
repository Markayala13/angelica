"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on post-treatment surveys",
  },
  {
    number: 12,
    suffix: "K+",
    label: "Treatments Performed",
    description: "Since our founding",
  },
  {
    number: 15,
    suffix: "",
    label: "Years of Excellence",
    description: "In aesthetic medicine",
  },
  {
    number: 100,
    suffix: "%",
    label: "Medical-Grade Equipment",
    description: "FDA-cleared technology",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] text-muted-foreground font-sans uppercase mb-6">
            The Numbers Speak
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Results You Can <span className="italic">Trust</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center relative group"
            >
              {/* Vertical divider (except first item) */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-24 bg-border" />
              )}
              
              <div className="py-8">
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground block mb-4">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </span>
                <h3 className="font-sans text-sm tracking-[0.2em] uppercase text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 pt-16 border-t border-border"
        >
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
                Medical Director
              </p>
              <p className="font-serif text-lg">Board Certified Dermatologist</p>
              <p className="text-sm text-muted-foreground mt-1">
                Cornell Medical School
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
                Certifications
              </p>
              <p className="font-serif text-lg">ASLMS Member</p>
              <p className="text-sm text-muted-foreground mt-1">
                American Society for Laser Medicine
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
                Technology Partner
              </p>
              <p className="font-serif text-lg">Candela Medical</p>
              <p className="text-sm text-muted-foreground mt-1">
                GentleMax Pro Platform
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
