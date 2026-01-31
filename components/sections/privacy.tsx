"use client";

import { motion } from "framer-motion";
import { Lock, Eye, Clock } from "lucide-react";

const privacyFeatures = [
  {
    icon: Lock,
    title: "Private Entrance",
    description: "Discreet access through a dedicated entrance—no shared lobbies, no waiting rooms.",
  },
  {
    icon: Eye,
    title: "Complete Confidentiality",
    description: "Your records, your visits, your results. Everything stays between us.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Early morning, evening, and weekend appointments for those who value discretion.",
  },
];

export function Privacy() {
  return (
    <section className="py-28 md:py-36 bg-foreground text-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs tracking-[0.4em] text-background/50 font-sans uppercase mb-6"
            >
              Your Privacy, Our Priority
            </motion.p>

            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-balance"
              >
                Discretion is not a request.{" "}
                <span className="italic">It&apos;s a promise.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-background/70 text-lg leading-relaxed max-w-xl"
            >
              We understand that our clientele values privacy above all. From the moment 
              you arrive to long after you leave, every detail is designed to protect 
              your confidence and anonymity.
            </motion.p>
          </div>

          {/* Right features */}
          <div className="space-y-8">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:border-background/40 transition-colors duration-500">
                  <feature.icon className="w-5 h-5 text-background/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                  <p className="text-background/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 h-px bg-background/10 origin-left"
        />
      </div>
    </section>
  );
}
