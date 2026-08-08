import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { brand } from "@/data/products";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing your use of the SVADURA website and products.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="August 2026">
      <p>
        By accessing or using this website, you agree to be bound by these
        Terms & Conditions. If you do not agree, please do not use this site.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Use of Website</h2>
      <p>
        This website and its content are owned by {brand.legalName}. You may
        browse and use it for personal, non-commercial purposes only.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Product Information</h2>
      <p>
        We strive to ensure product descriptions, nutrition and pricing
        information are accurate. Actual packaging may vary; always refer to
        the physical product label for the most current information.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Limitation of Liability</h2>
      <p>
        {brand.legalName} shall not be liable for any indirect, incidental or
        consequential damages arising from the use of this website.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Governing Law</h2>
      <p>These terms are governed by the laws of India.</p>
      <h2 className="font-display text-2xl text-espresso pt-4">Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${brand.email}`} className="text-gold underline">{brand.email}</a>.
      </p>
    </LegalLayout>
  );
}
