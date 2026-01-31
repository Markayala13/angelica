import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { DiscountPopup } from "@/components/discount-popup"
import { Hero } from "@/components/sections/hero"
import { Press } from "@/components/sections/press"
import { ValueProps } from "@/components/sections/value-props"
import { Stats } from "@/components/sections/stats"
import { Features } from "@/components/sections/features"
import { Privacy } from "@/components/sections/privacy"
import { Testimonials } from "@/components/sections/testimonials"
import { Process } from "@/components/sections/process"
import { Gallery } from "@/components/sections/gallery"
import { Pricing } from "@/components/sections/pricing"
import { FinalCTA } from "@/components/sections/final-cta"
import { VideoShowcase } from "@/components/sections/video-showcase"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Press />
        <ValueProps />
        <Stats />
        <section id="services">
          <Features />
        </section>
        <VideoShowcase />
        <Privacy />
        <Testimonials />
        <section id="process">
          <Process />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          <FinalCTA />
        </section>
      </main>
      <Footer />
      <MobileCTA />
      <DiscountPopup />
    </>
  )
}
