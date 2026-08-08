import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  return {
    title: `${product.flavor} | ${product.collection}`,
    description: product.description,
    openGraph: {
      title: `${product.flavor} | SVADURA`,
      description: product.description,
      images: [product.frontImage],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return notFound();

  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <ProductDetailClient
      product={product}
      related={related}
    />
  );
}