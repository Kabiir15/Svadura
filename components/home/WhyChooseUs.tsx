import Reveal from "@/components/Reveal";
import { Leaf, Sparkles, MapPin, Recycle } from "lucide-react";

const items = [
  { icon: Leaf, title: "Clear Ingredients", desc: "No fillers, no confusing labels — just what you'd expect." },
  { icon: Sparkles, title: "Boldly Simple", desc: "Flavour built from real spice and craft, not shortcuts." },
  { icon: MapPin, title: "Local Sourcing", desc: "Makhana sourced from trusted growers across India." },
  { icon: Recycle, title: "Minimal Impact", desc: "Snacks with substance, made with care for what's next." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28">
      <div className="container-lux">
        <Reveal className="max-w-xl mb-16">
          <p className="eyebrow text-gold mb-4">Why Svadura</p>
          <h2 className="font-display text-4xl md:text-5xl">Snacks with substance.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="p-8 rounded-3xl border border-espresso/10 h-full hover:border-gold/50 hover:shadow-xl transition-all duration-300">
                <item.icon className="text-gold mb-6" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-espresso/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
