"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, RotateCw, Share2, Link as LinkIcon } from "lucide-react";

type Props = {
  images: { src: string; label: string }[];
  productName: string;
};

const LENS_SIZE = 160;
const ZOOM = 2.2;

export default function ProductGallery({ images, productName }: Props) {
  const [active, setActive] = useState(0);
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });
  const [fullscreen, setFullscreen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [copied, setCopied] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const current = images[active];

  function handleMouseMove(e: React.MouseEvent) {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensX = Math.min(Math.max(x - LENS_SIZE / 2, 0), rect.width - LENS_SIZE);
    const lensY = Math.min(Math.max(y - LENS_SIZE / 2, 0), rect.height - LENS_SIZE);
    setLensPos({ x: lensX, y: lensY });

    const bgX = -(lensX * ZOOM);
    const bgY = -(lensY * ZOOM);
    setBgPos({ x: bgX, y: bgY });
  }

  function handleShare() {
    if (navigator.share) {
      navigator.share({ title: productName, url: window.location.href }).catch(() => {});
    } else {
      handleCopy();
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="lg:sticky lg:top-28">
      <div className="flex gap-4">
        {/* thumbnails */}
        <div className="hidden md:flex flex-col gap-3">
          {images.map((img, i) => (
            <button
              key={img.label}
              onClick={() => setActive(i)}
              aria-label={`View ${img.label}`}
              className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                active === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* main image with magnifier */}
        <div className="flex-1">
          <div
            ref={imgRef}
            onMouseEnter={() => setShowLens(true)}
            onMouseLeave={() => setShowLens(false)}
            onMouseMove={handleMouseMove}
            className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-b from-espresso/5 to-espresso/10 cursor-zoom-in touch-pinch-zoom"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.src}
                src={current.src}
                alt={`${productName} — ${current.label}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-6"
              />
            </AnimatePresence>

            {showLens && (
              <div
                className="magnifier-lens hidden lg:block rounded-lg"
                style={{
                  width: LENS_SIZE,
                  height: LENS_SIZE,
                  left: lensPos.x,
                  top: lensPos.y,
                }}
              />
            )}

            <button
              onClick={() => setFullscreen(true)}
              aria-label="View fullscreen"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center hover:bg-gold transition-colors"
            >
              <ZoomIn size={18} />
            </button>
          </div>

          {/* zoomed preview panel, desktop only */}
          {showLens && (
            <div
              className="hidden lg:block absolute top-0 left-full ml-6 w-[420px] h-[420px] rounded-3xl border border-espresso/10 shadow-2xl overflow-hidden bg-cream z-20"
              style={{
                backgroundImage: `url(${current.src})`,
                backgroundSize: `${100 * ZOOM}%`,
                backgroundPosition: `${bgPos.x}px ${bgPos.y}px`,
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

          {/* mobile thumbnails */}
          <div className="flex md:hidden gap-3 mt-4">
            {images.map((img, i) => (
              <button
                key={img.label}
                onClick={() => setActive(i)}
                className={`w-14 h-14 rounded-xl overflow-hidden border-2 shrink-0 ${
                  active === i ? "border-gold" : "border-transparent opacity-60"
                }`}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4 text-xs text-espresso/60">
            <button onClick={handleShare} className="flex items-center gap-1 hover:text-gold">
              <Share2 size={14} /> Share
            </button>
            <button onClick={handleCopy} className="flex items-center gap-1 hover:text-gold">
              <LinkIcon size={14} /> {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </div>
      </div>

      {/* fullscreen viewer */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-espresso/95 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setFullscreen(false)}
              aria-label="Close fullscreen viewer"
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-cream/10 text-cream flex items-center justify-center hover:bg-cream/20"
            >
              <X size={22} />
            </button>
            <button
              onClick={() => setRotation((r) => r + 90)}
              aria-label="Rotate image"
              className="absolute top-6 left-6 w-12 h-12 rounded-full bg-cream/10 text-cream flex items-center justify-center hover:bg-cream/20"
            >
              <RotateCw size={20} />
            </button>
            <motion.img
              src={current.src}
              alt={`${productName} full view`}
              animate={{ rotate: rotation }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] object-contain touch-pinch-zoom"
            />
            <div className="absolute bottom-6 flex gap-3">
              {images.map((img, i) => (
                <button
                  key={img.label}
                  onClick={() => setActive(i)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 ${
                    active === i ? "border-gold" : "border-cream/20"
                  }`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
