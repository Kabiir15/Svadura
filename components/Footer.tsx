"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { brand, products } from "@/data/products";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-espresso text-cream pt-20 pb-8">
      <div className="container-lux">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
          <div className="md:col-span-4">
            <span className="font-display text-3xl tracking-wide">{brand.name}</span>
            <p className="mt-4 text-cream/60 text-sm max-w-xs">
              {brand.category}. Rediscover real wellness, one crunch at a time.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="p-2 border border-cream/20 rounded-full hover:border-gold hover:text-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 border border-cream/20 rounded-full hover:border-gold hover:text-gold transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 border border-cream/20 rounded-full hover:border-gold hover:text-gold transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link href="/about" className="hover:text-cream">About</Link></li>
              <li><Link href="/investor" className="hover:text-cream">Investor</Link></li>
              <li><Link href="/contact" className="hover:text-cream">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-gold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="hover:text-cream">
                    {p.flavor}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-gold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link href="/privacy-policy" className="hover:text-cream">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cream">Terms & Conditions</Link></li>
              <li><Link href="/return-refund" className="hover:text-cream">Return & Refund</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-gold mb-4">Newsletter</h4>
            <p className="text-sm text-cream/60 mb-3">Join for launches & offers.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-cream/5 border border-cream/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="eyebrow bg-gold text-espresso rounded-full px-4 py-2 hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-xs text-gold">You're on the list — thank you.</p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} {brand.legalName}. All rights reserved.</p>
          <p>{brand.address}</p>
        </div>
      </div>
    </footer>
  );
}
