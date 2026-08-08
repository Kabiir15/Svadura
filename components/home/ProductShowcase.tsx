import Link from "next/link";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

const accentBg: Record<string, string> = {
  ghee: "bg-ghee-bg",
  cheesy: "bg-cheesy-bg",
  imli: "bg-imli-bg",
  seoul: "bg-seoul-bg",
};

export default function ProductShowcase() {
  return (
    <section className="py-28">
      <div className="container-lux">
        <Reveal className="max-w-xl mb-16">
          <p className="eyebrow text-gold mb-4">Our Flavours</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Four expressions of one obsession: real ingredients, real crunch.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/products/${p.slug}`}
                className="group block rounded-3xl overflow-hidden border border-espresso/10 hover:border-gold/60 transition-colors"
              >
                <div className={`${accentBg[p.accent]} aspect-square flex items-center justify-center p-6 overflow-hidden`}>
                  <img
                    src={p.frontImage}
                    alt={p.flavor}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="eyebrow text-espresso/40">{p.collection}</p>
                  <h3 className="font-display text-xl mt-1">{p.flavor}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gold font-semibold">₹{p.price}</span>
                    <span className="eyebrow text-espresso/50 group-hover:text-gold transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
