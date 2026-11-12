import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import CatalogHero from "@/components/CatalogHero";

export const metadata: Metadata = {
  title: "Our Products | CandyLake",
  description: "Explore CandyLake candies, toffees, wafers and lollipops. Find a new favourite and discover each treat."
};

export default function ProductsPage() {
  return <>
    <Navbar />
    <main>
      <CatalogHero />
      <ProductSection catalog />
    </main>
    <Footer />
  </>;
}
