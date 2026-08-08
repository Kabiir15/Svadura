"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { products } from "@/data/products";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yBack = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-espresso text-cream"
    >
      <motion.div
        style={{ y: yBack }}
        className="absolute inset-0 opacity-[0.08] bg-repeat"
        aria-hidden
      >
        <div
          className="w-full h-full"
          style={{ backgroundImage: "url('/images/pattern-floral.svg')", backgroundSize: "480px" }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="container-lux relative py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="eyebrow text-gold mb-6"
          >
            {"Premium Wellness Foods · Est. India"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02]"
          >
            Welcome to
            <br />
            <span className="italic text-gold-light">Svadura.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-8 text-cream/70 text-lg max-w-md"
          >
            Rediscover real wellness — premium roasted makhana, slow-crafted
            in small batches, made for those who snack with intention.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="/products" className="!bg-gold !text-espresso hover:!bg-cream">
              Browse Collections
            </MagneticButton>
            <MagneticButton href="/about" variant="outline" className="!border-cream !text-cream hover:!bg-cream hover:!text-espresso">
              Learn More
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div style={{ y: yFront }} className="relative h-[420px] lg:h-[560px]">
          {products.map((p, i) => (
            <motion.img
              key={p.slug}
              src={p.frontImage}
              alt={p.flavor}
              initial={{ opacity: 0, y: 40, rotate: -6 + i * 4 }}
              animate={{ opacity: 1, y: 0, rotate: -6 + i * 4 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -14, scale: 1.04, rotate: 0 }}
              style={{
                position: "absolute",
                width: "44%",
                top: `${(i % 2) * 42}%`,
                left: `${(i * 24) % 60}%`,
                zIndex: i,
              }}
              className="drop-shadow-2xl cursor-pointer"
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
