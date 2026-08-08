"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type LeadStep = "name" | "phone" | "email" | "concern" | "done";

type ChatLead = {
  name: string;
  phone: string;
  email: string;
  concern: string;
};

type Message = { from: "bot" | "user"; text: string };

const STORAGE_KEY = "svadura_chat_lead";

const prompts: Record<LeadStep, string> = {
  name: "Hi! I'm the SVADURA assistant. What's your name?",
  phone: "Great to meet you! What's the best phone number to reach you on?",
  email: "Thanks. And your email address?",
  concern: "Last thing — what can we help you with today?",
  done: "Thank you! Our team will get back to you shortly. Meanwhile, feel free to browse our flavours.",
};

/**
 * Client-side lead capture chatbot. Persists the lead object to
 * localStorage under `svadura_chat_lead` and is intentionally structured
 * so `submitLead()` can be swapped for a real API call
 * (e.g. POST /api/leads) once a backend is connected.
 */
export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<LeadStep>("name");
  const [input, setInput] = useState("");
  const [lead, setLead] = useState<ChatLead>({ name: "", phone: "", email: "", concern: "" });
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: prompts.name }]);

  function submitLead(finalLead: ChatLead) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(finalLead));
    } catch {
      // storage unavailable — no-op; a real backend call would go here instead
    }
    // Backend integration point:
    // fetch("/api/leads", { method: "POST", body: JSON.stringify(finalLead) });
  }

  function handleSend() {
    if (!input.trim()) return;
    const value = input.trim();
    setMessages((m) => [...m, { from: "user", text: value }]);
    setInput("");

    const nextLead = { ...lead };
    let nextStep: LeadStep = step;

    if (step === "name") {
      nextLead.name = value;
      nextStep = "phone";
    } else if (step === "phone") {
      nextLead.phone = value;
      nextStep = "email";
    } else if (step === "email") {
      nextLead.email = value;
      nextStep = "concern";
    } else if (step === "concern") {
      nextLead.concern = value;
      nextStep = "done";
      submitLead(nextLead);
    }

    setLead(nextLead);
    setStep(nextStep);

    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: prompts[nextStep] }]);
    }, 400);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold text-espresso shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        {open ? <X size={22} /> : <MessageSquare size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-40 w-[92vw] max-w-sm bg-cream rounded-2xl shadow-2xl border border-espresso/10 flex flex-col overflow-hidden"
            style={{ maxHeight: "70vh" }}
          >
            <div className="bg-espresso text-cream px-5 py-4">
              <p className="font-display text-lg">SVADURA Assistant</p>
              <p className="text-xs text-cream/60">Usually replies instantly</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 240 }}>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    m.from === "bot"
                      ? "bg-espresso/5 text-espresso rounded-tl-sm"
                      : "bg-gold text-espresso ml-auto rounded-tr-sm"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            {step !== "done" ? (
              <div className="p-3 border-t border-espresso/10 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your reply..."
                  className="flex-1 bg-espresso/5 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                  aria-label="Chat message"
                />
                <button
                  onClick={handleSend}
                  aria-label="Send message"
                  className="w-10 h-10 rounded-full bg-gold text-espresso flex items-center justify-center shrink-0"
                >
                  <Send size={16} />
                </button>
              </div>
            ) : (
              <div className="p-4 border-t border-espresso/10 text-center text-xs text-espresso/50">
                Conversation saved. We'll be in touch.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
