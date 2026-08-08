import type { Metadata } from "next";
import ProductsPageClient from "@/components/ProductsPageClient";

export const metadata: Metadata = {
  title: "Products — Premium Roasted Makhana",
  description:
    "Browse SVADURA's full range: Classic Ghee Roast, Cheesy Garlic Burst, Banarasi Imli Pop and Seoul Spice Glaze makhana.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
