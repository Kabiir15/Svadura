import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[90svh] flex items-center justify-center text-center px-6 pt-20">
      <div>
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="text-gold" size={32} />
        </div>
        <p className="eyebrow text-gold mb-4">Message Received</p>
        <h1 className="font-display text-4xl md:text-6xl mb-6">Thank you.</h1>
        <p className="text-espresso/60 max-w-md mx-auto">
          We've received your message and our team will get back to you
          shortly. In the meantime, explore our full range of flavours.
        </p>
        <div className="mt-10">
          <MagneticButton href="/products">Explore Products</MagneticButton>
        </div>
      </div>
    </div>
  );
}
