import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import CollectionsStrip from "@/components/home/CollectionsStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BenefitsSection from "@/components/home/BenefitsSection";
import HowToEat from "@/components/home/HowToEat";
import ProductShowcase from "@/components/home/ProductShowcase";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "SVADURA — Rediscover Real Wellness",
  description:
    "Premium roasted makhana crafted for mindful snacking — Classic Ghee Roast, Cheesy Garlic Burst, Banarasi Imli Pop, Seoul Spice Glaze.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <CollectionsStrip />
      <WhyChooseUs />
      <BenefitsSection />
      <HowToEat />

      <section className="py-28 bg-espresso text-cream text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-repeat"
          style={{ backgroundImage: "url('/images/pattern-floral.svg')", backgroundSize: "420px" }}
        />
        <div className="container-lux relative">
          <Reveal>
            <p className="eyebrow text-gold mb-4">Join The Ritual</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
              Snacking, reimagined for the mindful.
            </h2>
            <div className="mt-10">
              <MagneticButton href="/products" variant="outline" className="!border-cream !text-cream hover:!bg-cream hover:!text-espresso">
                Explore Products
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
