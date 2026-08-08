import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { TrendingUp, Handshake, Store, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Partner with SVADURA — explore investment opportunities, B2B partnerships, retail expansion, and strategic collaboration in India's premium wellness food category.",
};

const opportunities = [
  { icon: TrendingUp, title: "Growth", desc: "A fast-scaling brand in India's premium wellness food category." },
  { icon: Handshake, title: "Strategic Partnerships", desc: "Collaboration opportunities across sourcing, distribution and retail." },
  { icon: Store, title: "Retail", desc: "Expansion across modern trade, quick commerce and general trade." },
  { icon: Building2, title: "B2B", desc: "Bulk and private-label opportunities for institutional partners." },
];

export default function InvestorPage() {
  return (
    <div className="pt-32">
      <section className="py-20 bg-espresso text-cream">
        <div className="container-lux">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold mb-4">Investor Relations</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight">
              Building India's next great wellness food brand.
            </h1>
            <p className="mt-6 text-cream/70 text-lg max-w-xl">
              SVADURA sits at the intersection of tradition and modern wellness —
              a premium makhana brand built for scale.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux">
          <Reveal className="max-w-xl mb-16">
            <p className="eyebrow text-gold mb-4">Opportunities</p>
            <h2 className="font-display text-4xl md:text-5xl">Ways to partner with us.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="p-8 rounded-3xl border border-espresso/10 h-full hover:border-gold/50 transition-colors">
                  <o.icon className="text-gold mb-6" size={28} strokeWidth={1.5} />
                  <h3 className="font-display text-xl mb-2">{o.title}</h3>
                  <p className="text-sm text-espresso/60">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-parchment">
        <div className="container-lux grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-gold mb-4">Mission & Vision</p>
            <h2 className="font-display text-3xl mb-6">
              Redefining wellness snacking for a billion Indians.
            </h2>
            <p className="text-espresso/60 leading-relaxed">
              SVADURA combines traditional Indian superfoods with modern, clean-label
              manufacturing to build a brand that can scale across categories, channels
              and geographies while staying true to its wellness roots.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden">
              <img src="/images/ghee-roast-front.webp" alt="SVADURA Classic Ghee Roast Makhana" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container-lux">
          <Reveal>
            <h2 className="font-display text-3xl mb-6">Interested in partnering with SVADURA?</h2>
            <MagneticButton href="/contact">Get in Touch</MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
