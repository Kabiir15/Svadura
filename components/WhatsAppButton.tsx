"use client";

import { MessageCircle } from "lucide-react";
import { brand } from "@/data/products";

export default function WhatsAppButton() {
  const link = `${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SVADURA on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
