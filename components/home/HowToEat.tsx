import Reveal from "@/components/Reveal";
import { Coffee, Dumbbell, Clapperboard, PartyPopper } from "lucide-react";

const moments = [
  { icon: Coffee, title: "With Tea", desc: "The perfect crunchy companion to your evening chai." },
  { icon: Dumbbell, title: "Post Workout", desc: "A light, protein-rich bite to refuel mindfully." },
  { icon: Clapperboard, title: "Movie Time", desc: "Guilt-free crunch for your favourite watch-list." },
  { icon: PartyPopper, title: "Celebrations", desc: "Share a bowl of Svadura at every gathering." },
];

export default function HowToEat() {
  return (
    <section className="py-28 bg-parchment">
      <div className="container-lux">
        <Reveal className="max-w-xl mb-16">
          <p className="eyebrow text-gold mb-4">How To Eat</p>
          <h2 className="font-display text-4xl md:text-5xl">Fits every moment of your day.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="p-8 rounded-3xl bg-cream h-full hover:-translate-y-2 transition-transform duration-500">
                <m.icon className="text-gold mb-6" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl mb-2">{m.title}</h3>
                <p className="text-sm text-espresso/60">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
