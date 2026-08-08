import Link from "next/link";
import Reveal from "@/components/Reveal";

const collections = [
  {
    name: "Rituals",
    desc: "Time-honoured recipes, slow-roasted the traditional way.",
    accent: "bg-ghee-bg",
  },
  {
    name: "Daily Crunch",
    desc: "Everyday indulgence that never compromises on wellness.",
    accent: "bg-cheesy-bg",
  },
  {
    name: "Origins",
    desc: "Bold flavours inspired by streets and cities we love.",
    accent: "bg-imli-bg",
  },
];

export default function CollectionsStrip() {
  return (
    <section className="py-28 bg-parchment">
      <div className="container-lux">
        <Reveal className="max-w-xl mb-16">
          <p className="eyebrow text-gold mb-4">Collections</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Curated for every mood, every ritual.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <Link
                href="/products"
                className={`block rounded-3xl p-10 h-64 flex flex-col justify-between ${c.accent} hover:-translate-y-2 transition-transform duration-500`}
              >
                <span className="eyebrow text-espresso/50">Collection</span>
                <div>
                  <h3 className="font-display text-3xl mb-2">{c.name}</h3>
                  <p className="text-sm text-espresso/60">{c.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
