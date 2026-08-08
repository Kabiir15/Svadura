"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

const collections = ["All", "Rituals", "Daily Crunch", "Origins"] as const;

const accentBg: Record<string, string> = {
  ghee: "bg-ghee-bg",
  cheesy: "bg-cheesy-bg",
  imli: "bg-imli-bg",
  seoul: "bg-seoul-bg",
};

export default function ProductsPageClient() {
  const [filter, setFilter] = useState<(typeof collections)[number]>("All");

  const filtered =
    filter === "All" ? products : products.filter((p) => p.collection === filter);

  return (
    <div className="pt-36 pb-24">
      <div className="container-lux">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow text-gold mb-4">Products</p>
          <h1 className="font-display text-5xl md:text-6xl">Every flavour, crafted with intention.</h1>
        </Reveal>

        <div className="flex flex-wrap gap-3 mb-12">
          {collections.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`eyebrow px-5 py-2.5 rounded-full border transition-colors ${
                filter === c
                  ? "bg-espresso text-cream border-espresso"
                  : "border-espresso/20 text-espresso/60 hover:border-espresso"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Link
                href={`/products/${p.slug}`}
                className="group block rounded-3xl overflow-hidden border border-espresso/10 hover:border-gold/60 transition-colors h-full"
              >
                <div className={`${accentBg[p.accent]} aspect-[4/3] flex items-center justify-center p-8`}>
                  <img
                    src={p.frontImage}
                    alt={p.flavor}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow text-espresso/40">{p.collection}</p>
                  <h3 className="font-display text-2xl mt-1">{p.flavor}</h3>
                  <p className="text-sm text-espresso/60 mt-2 line-clamp-2">{p.tagline}</p>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-gold font-semibold text-lg">₹{p.price}</span>
                    <span className="eyebrow text-espresso/50 group-hover:text-gold transition-colors">
                      View Product →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
