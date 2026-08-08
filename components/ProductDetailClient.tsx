"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import type { Product } from "@/data/products";

const accentBg: Record<string, string> = {
  ghee: "bg-ghee-bg",
  cheesy: "bg-cheesy-bg",
  imli: "bg-imli-bg",
  seoul: "bg-seoul-bg",
};
const accentText: Record<string, string> = {
  ghee: "text-ghee-dark",
  cheesy: "text-cheesy-dark",
  imli: "text-imli-dark",
  seoul: "text-seoul-dark",
};

const faqs = [
  {
    q: "Is this product gluten-free?",
    a: "Yes, unless otherwise stated in the allergen section above for this specific flavour — please check the ingredient and allergen details carefully.",
  },
  {
    q: "How should I store this product?",
    a: "Store in a dry place and consume immediately after opening for the best crunch and flavour.",
  },
  {
    q: "Where is SVADURA made?",
    a: "All SVADURA products are proudly made in India, manufactured and marketed by Svadura Wellness Foods, Patna, Bihar.",
  },
];

export default function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [nutritionView, setNutritionView] = useState<"per8g" | "per100g">("per8g");

  return (
    <div className="pt-32 pb-24">
      <div className="container-lux">
        {/* breadcrumb */}
        <nav className="text-xs text-espresso/40 mb-8 eyebrow">
          <Link href="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gold">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-espresso/70">{product.flavor}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          <ProductGallery
            productName={product.flavor}
            images={[
              { src: product.frontImage, label: "Front" },
              { src: product.backImage, label: "Back" },
            ]}
          />

          <div>
            <Reveal>
              <span className={`inline-block eyebrow px-4 py-1.5 rounded-full ${accentBg[product.accent]} ${accentText[product.accent]}`}>
                {product.collection}
              </span>
              <h1 className="font-display text-4xl md:text-5xl mt-5">{product.flavor}</h1>
              <p className="text-espresso/60 mt-2 italic">{product.tagline}</p>

              <div className="flex items-baseline gap-3 mt-6">
                <span className="text-3xl font-semibold text-gold">₹{product.price}</span>
                <span className="text-sm text-espresso/40">Net Wt. {product.netWeight}</span>
              </div>

              <p className="mt-6 text-espresso/70 leading-relaxed">{product.description}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {product.badges.map((b) => (
                  <span key={b} className="text-xs px-3 py-1.5 rounded-full border border-espresso/15 text-espresso/60">
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton href="/contact">Enquire to Order</MagneticButton>
                <MagneticButton href="/contact" variant="outline">
                  Login & Get 10% Off
                </MagneticButton>
              </div>

              {product.advisory && (
                <p className="mt-8 text-xs text-seoul-dark bg-seoul-bg/60 border border-seoul/20 rounded-xl p-4">
                  <strong>Advisory:</strong> {product.advisory}
                </p>
              )}
            </Reveal>
          </div>
        </div>

        {/* Nutrition, Ingredients, Allergen, Storage */}
        <Reveal className="mt-24 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl">Nutritional Information</h2>
              <div className="flex gap-2 text-xs">
                <button
                  onClick={() => setNutritionView("per8g")}
                  className={`px-3 py-1.5 rounded-full border ${nutritionView === "per8g" ? "bg-espresso text-cream border-espresso" : "border-espresso/20 text-espresso/60"}`}
                >
                  Per {product.netWeight}
                </button>
                <button
                  onClick={() => setNutritionView("per100g")}
                  className={`px-3 py-1.5 rounded-full border ${nutritionView === "per100g" ? "bg-espresso text-cream border-espresso" : "border-espresso/20 text-espresso/60"}`}
                >
                  Per 100g
                </button>
              </div>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-espresso/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment text-left">
                    <th className="p-4 font-medium">Nutrient</th>
                    <th className="p-4 font-medium">Amount</th>
                    <th className="p-4 font-medium">%RDA (per 100g)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(product.nutrition.per8g).map((label, i) => (
                    <tr key={label} className={i % 2 === 0 ? "" : "bg-parchment/40"}>
                      <td className="p-4 text-espresso/70">{label}</td>
                      <td className="p-4 font-medium">{product.nutrition[nutritionView][label]}</td>
                      <td className="p-4 text-espresso/50">{product.nutrition.rda[label]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-8">
            <InfoBlock title="Ingredients" text={product.ingredients} />
            <InfoBlock title="Allergen" text={product.allergen} />
            <InfoBlock title="Storage" text={product.storage} />
            <InfoBlock title="FSSAI Lic. No." text={product.fssai} />
          </div>
        </Reveal>

        {/* Benefits */}
        <Reveal className="mt-20">
          <h2 className="font-display text-2xl mb-6">Benefits</h2>
          <div className="flex flex-wrap gap-3">
            {product.benefits.map((b) => (
              <span key={b} className={`px-5 py-3 rounded-2xl text-sm ${accentBg[product.accent]}`}>
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal className="mt-20 max-w-3xl">
          <h2 className="font-display text-2xl mb-6">Frequently Asked Questions</h2>
          <div className="divide-y divide-espresso/10 border-t border-b border-espresso/10">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-display text-lg">{f.q}</span>
                  <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }}>
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-espresso/60 text-sm max-w-2xl">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Related products */}
        <Reveal className="mt-24">
          <h2 className="font-display text-2xl mb-8">You May Also Like</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-espresso/10 hover:border-gold/50 transition-colors"
              >
                <div className={`${accentBg[p.accent]} aspect-square flex items-center justify-center p-5`}>
                  <img src={p.frontImage} alt={p.flavor} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="eyebrow text-espresso/40">{p.collection}</p>
                  <h3 className="font-display text-lg mt-1">{p.flavor}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="eyebrow text-gold mb-2">{title}</h3>
      <p className="text-sm text-espresso/60 leading-relaxed">{text}</p>
    </div>
  );
}
