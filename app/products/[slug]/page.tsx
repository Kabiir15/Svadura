import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.flavor} — ${product.collection}`,
    description: product.description,
    openGraph: {
      title: `${product.flavor} | SVADURA`,
      description: product.description,
      images: [product.frontImage],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return <ProductDetailClient product={product} related={related} />;
}
