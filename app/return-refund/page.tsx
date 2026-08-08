import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { brand } from "@/data/products";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: "SVADURA's policy on returns, replacements and refunds for damaged or incorrect orders.",
};

export default function ReturnRefundPage() {
  return (
    <LegalLayout title="Return & Refund Policy" updated="August 2026">
      <p>
        Because SVADURA products are food items, we accept returns only in
        the case of damaged, defective or incorrect items received.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Eligibility</h2>
      <p>
        Please contact us within 48 hours of delivery with photos of the
        product and packaging if you've received a damaged, defective or
        incorrect item.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Process</h2>
      <p>
        Write to us at{" "}
        <a href={`mailto:${brand.email}`} className="text-gold underline">{brand.email}</a>{" "}
        or call {brand.phone} with your order details. Our team will review
        and respond with the next steps within 2–3 business days.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Refunds</h2>
      <p>
        Approved refunds will be processed to the original payment method
        within 7–10 business days.
      </p>
    </LegalLayout>
  );
}
