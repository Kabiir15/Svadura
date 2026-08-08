import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatbotWidget from "@/components/ChatbotWidget";
import BackToTop from "@/components/BackToTop";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://svadura.com"),
  title: {
    default: "SVADURA — Rediscover Real Wellness | Premium Makhana",
    template: "%s | SVADURA",
  },
  description:
    "SVADURA crafts premium roasted makhana — Classic Ghee Roast, Cheesy Garlic Burst, Banarasi Imli Pop and Seoul Spice Glaze. Gluten-free, clean-label, protein-rich wellness snacking, made in India.",
  keywords: [
    "SVADURA",
    "premium makhana",
    "roasted fox nuts",
    "healthy snacks India",
    "gluten free snacks",
    "clean label snacks",
  ],
  openGraph: {
    title: "SVADURA — Rediscover Real Wellness",
    description:
      "Premium roasted makhana crafted for mindful snacking. Gluten-free, clean-label, protein-rich.",
    url: "https://svadura.com",
    siteName: "SVADURA",
    images: ["/images/ghee-roast-front.webp"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVADURA — Rediscover Real Wellness",
    description: "Premium roasted makhana crafted for mindful snacking.",
    images: ["/images/ghee-roast-front.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-espresso focus:text-cream focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <WhatsAppButton />
        <ChatbotWidget />
        <BackToTop />
      </body>
    </html>
  );
}
