import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { brand } from "@/data/products";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SVADURA collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <p>
        {brand.legalName} ("SVADURA", "we", "us") respects your privacy. This
        policy explains what information we collect through this website, how
        we use it, and the choices you have.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Information We Collect</h2>
      <p>
        We may collect information you provide directly — such as your name,
        phone number, email address and message — when you use our contact
        form, chatbot, or newsletter signup.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">How We Use Information</h2>
      <p>
        We use the information you share to respond to enquiries, process
        orders where applicable, send updates you've opted into, and improve
        our products and services.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Data Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect
        your information against unauthorised access, alteration or disclosure.
      </p>
      <h2 className="font-display text-2xl text-espresso pt-4">Contact Us</h2>
      <p>
        For any privacy-related queries, please write to us at{" "}
        <a href={`mailto:${brand.email}`} className="text-gold underline">{brand.email}</a>{" "}
        or call {brand.phone}.
      </p>
    </LegalLayout>
  );
}
