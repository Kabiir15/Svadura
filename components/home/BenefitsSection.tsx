"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const benefits = [
  { label: "Protein Rich" },
  { label: "Gluten Free" },
  { label: "Light & Digestive" },
  { label: "Mineral Rich" },
  { label: "Calcium" },
  { label: "Magnesium" },
  { label: "Traditional Superfood" },
];

export default function BenefitsSection() {
  return (
    <section className="py-28 bg-espresso text-cream">
      <div className="container-lux">
        <Reveal className="max-w-xl mb-16">
          <p className="eyebrow text-gold mb-4">Makhana Benefits</p>
          <h2 className="font-display text-4xl md:text-5xl">
            A traditional superfood, made modern.
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-4">
          {benefits.map((b, i) => (
            <motion.span
              key={b.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.06 }}
              className="px-6 py-3 rounded-full border border-cream/20 text-sm hover:border-gold hover:text-gold transition-colors cursor-default"
            >
              {b.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
