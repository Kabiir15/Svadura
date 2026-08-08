"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(2, "Please add a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    // Backend integration point: replace with a real API call, e.g.
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} className="input-lux" placeholder="Your name" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone")} className="input-lux" placeholder="+91 00000 00000" />
        </Field>
      </div>
      <Field label="Email" error={errors.email?.message}>
        <input {...register("email")} className="input-lux" placeholder="you@example.com" />
      </Field>
      <Field label="Subject" error={errors.subject?.message}>
        <input {...register("subject")} className="input-lux" placeholder="How can we help?" />
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea {...register("message")} rows={5} className="input-lux resize-none" placeholder="Tell us more..." />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="eyebrow bg-espresso text-cream rounded-full px-8 py-4 hover:bg-gold hover:text-espresso transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-2 text-gold text-sm pt-2"
          >
            <CheckCircle2 size={18} />
            Message sent — we'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .input-lux {
          width: 100%;
          background: transparent;
          border-bottom: 1px solid rgba(27, 19, 16, 0.2);
          padding: 0.75rem 0.25rem;
          font-family: var(--font-manrope);
        }
        .input-lux:focus {
          outline: none;
          border-color: #b98a2e;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-espresso/50 block mb-1">{label}</span>
      {children}
      {error && <span className="text-xs text-seoul mt-1 block">{error}</span>}
    </label>
  );
}
