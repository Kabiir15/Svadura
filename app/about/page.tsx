import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Sparkles, Leaf, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The SVADURA story — premium wellness foods rooted in Indian heritage, crafted with clean-label ingredients and mindful eating in mind.",
};

const values = [
  { icon: Leaf, title: "Natural First", desc: "Real ingredients you can pronounce, nothing you can't." },
  { icon: Sparkles, title: "Mindful Craft", desc: "Every batch slow-roasted with care, never rushed." },
  { icon: Heart, title: "Rooted in Heritage", desc: "Honouring generations of traditional Indian snacking." },
];

const timeline = [
  { year: "The Origin", text: "SVADURA began with a simple question: why does wellness snacking have to feel like a compromise?" },
  { year: "The Craft", text: "We turned to makhana — a traditional Indian superfood — and reimagined it for a new generation." },
  { year: "The Collections", text: "From Rituals to Origins, every flavour tells a story rooted in real places and real ingredients." },
  { year: "Today", text: "SVADURA is built for anyone who wants to snack with intention, without sacrificing flavour." },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      <section className="py-20 bg-espresso text-cream">
        <div className="container-lux">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight">
              Wellness, redefined for the modern Indian palate.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux max-w-3xl">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.1} className="flex gap-8 py-8 border-b border-espresso/10 last:border-0">
              <span className="eyebrow text-gold w-32 shrink-0">{t.year}</span>
              <p className="text-lg text-espresso/70 font-display">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-parchment">
        <div className="container-lux">
          <Reveal className="max-w-xl mb-16">
            <p className="eyebrow text-gold mb-4">Our Values</p>
            <h2 className="font-display text-4xl md:text-5xl">What we stand for.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-cream h-full">
                  <v.icon className="text-gold mb-6" size={28} strokeWidth={1.5} />
                  <h3 className="font-display text-xl mb-2">{v.title}</h3>
                  <p className="text-sm text-espresso/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-gold mb-4">Mission</p>
            <h2 className="font-display text-3xl mb-6">
              To make real, clean-label wellness snacking accessible and irresistible.
            </h2>
            <p className="text-espresso/60 leading-relaxed">
              We believe snacking shouldn't be a trade-off between health and flavour.
              Every SVADURA product is built around traditional Indian superfoods,
              prepared with clean-label ingredients and no compromises.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow text-gold mb-4">Vision</p>
            <h2 className="font-display text-3xl mb-6">
              A world where mindful eating is the norm, not the exception.
            </h2>
            <p className="text-espresso/60 leading-relaxed">
              We're building SVADURA to be the everyday wellness brand for the modern
              Indian household — rooted in heritage, designed for the future.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
