import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductDetailCopy from "@/components/ProductDetailCopy";
import ProductDetailArtwork from "@/components/ProductDetailArtwork";
import { products } from "@/data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(product => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) return { title: "Product not found | CandyLake" };
  return {
    title: `${product.name} | CandyLake`,
    description: product.description
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();

  return <>
    <Navbar />
    <main className="product-detail-page">
      <div className="product-page-candy product-page-candy-one" aria-hidden="true">🍬</div>
      <div className="product-page-candy product-page-candy-two" aria-hidden="true">🍭</div>
      <div className="product-page-candy product-page-candy-three" aria-hidden="true">🍫</div>
      <div className="product-detail-shell">
        <Link href="/products" className="detail-back-link"><ArrowLeft size={16} /> All products</Link>
        <div className="product-detail-layout">
          <div className={`product-detail-visual tone-${product.color}`}>
            <ProductDetailArtwork image={product.image} name={product.name} />
          </div>
          <ProductDetailCopy product={product} />
        </div>
      </div>
      <section className="product-detail-footer-cta">
        <p>Still looking for your favourite?</p>
        <Link href="/products">Discover all our treats <ArrowUpRight size={17} /></Link>
      </section>
    </main>
    <Footer />
  </>;
}
