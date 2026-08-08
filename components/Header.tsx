"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { products } from "@/data/products";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Investor", href: "/investor" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const results = query
    ? products.filter((p) =>
        `${p.flavor} ${p.collection}`.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-lg border-b border-espresso/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-lux flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-espresso">
            SVADURA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.slice(0, 1).map((l) => (
            <Link key={l.href} href={l.href} className="eyebrow text-espresso/80 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="eyebrow flex items-center gap-1 text-espresso/80 hover:text-gold transition-colors">
              Products <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[560px] bg-cream border border-espresso/10 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-4"
                >
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-espresso/5 transition-colors"
                    >
                      <img
                        src={p.frontImage}
                        alt={p.flavor}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-display text-sm text-espresso">{p.flavor}</p>
                        <p className="text-xs text-espresso/50">{p.collection}</p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="col-span-2 text-center eyebrow text-gold pt-2 border-t border-espresso/10"
                  >
                    View All Products
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="eyebrow text-espresso/80 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="p-2 text-espresso hover:text-gold transition-colors"
          >
            <Search size={20} />
          </button>
          <MagneticLoginHint />
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 text-espresso"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-espresso/10 bg-cream"
          >
            <div className="container-lux py-4">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search flavours, collections..."
                className="w-full bg-transparent border-b border-espresso/30 py-2 font-display text-xl focus:outline-none"
              />
              {results.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {results.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/products/${r.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="text-sm text-espresso/70 hover:text-gold"
                      >
                        {r.flavor} — {r.collection}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-espresso text-cream flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-display text-2xl">SVADURA</span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl"
              >
                Products
              </Link>
            </nav>
            <div className="mt-auto space-y-2 text-cream/60 text-sm">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block hover:text-gold"
                >
                  {p.flavor}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MagneticLoginHint() {
  return (
    <Link
      href="/contact"
      className="hidden md:inline-block eyebrow text-gold border border-gold/40 rounded-full px-4 py-2 hover:bg-gold hover:text-espresso transition-colors"
    >
      Get 10% Off
    </Link>
  );
}
