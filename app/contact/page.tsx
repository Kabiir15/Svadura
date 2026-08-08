import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { brand } from "@/data/products";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SVADURA — reach us via WhatsApp, email, phone or our contact form.",
};

export default function ContactPage() {
  const whatsappLink = `${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <div className="pt-32 pb-24">
      <div className="container-lux">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow text-gold mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl">We'd love to hear from you.</h1>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-16">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2 space-y-8">
            <ContactItem icon={MapPin} label="Address" value={brand.address} />
            <ContactItem icon={Mail} label="Email" value={brand.email} href={`mailto:${brand.email}`} />
            <ContactItem icon={Phone} label="Phone" value={brand.phone} href={`tel:${brand.phone.replace(/\s/g, "")}`} />
            <ContactItem icon={Clock} label="Business Hours" value="Mon – Sat, 10:00 AM – 6:00 PM IST" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 eyebrow bg-[#25D366] text-white rounded-full px-6 py-4 w-fit hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>

            <div className="rounded-2xl overflow-hidden border border-espresso/10 aspect-video bg-parchment flex items-center justify-center text-espresso/40 text-sm">
              Google Maps — location embed
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center shrink-0">
        <Icon size={16} className="text-gold" />
      </div>
      <div>
        <p className="eyebrow text-espresso/40">{label}</p>
        <p className="text-espresso/80 mt-1">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
