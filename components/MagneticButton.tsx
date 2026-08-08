"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  type?: "button" | "submit";
};

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "solid",
  className,
  type = "button",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs tracking-widest2 uppercase font-semibold transition-colors duration-300 rounded-full";
  const styles = clsx(base, {
    "bg-espresso text-cream hover:bg-gold hover:text-espresso": variant === "solid",
    "border border-espresso text-espresso hover:bg-espresso hover:text-cream": variant === "outline",
  });

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
      }}
      className={clsx(styles, className)}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={typeof children === "string" ? children : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}
