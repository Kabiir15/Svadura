"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-[90svh] flex items-center justify-center bg-espresso text-cream text-center px-6">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow text-gold mb-6"
        >
          Page Not Found
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-7xl md:text-9xl"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-cream/60 max-w-md mx-auto"
        >
          This crunch seems to have wandered off. Let's get you back to
          something delicious.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <MagneticButton href="/" className="!bg-gold !text-espresso hover:!bg-cream">
            Back to Home
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
