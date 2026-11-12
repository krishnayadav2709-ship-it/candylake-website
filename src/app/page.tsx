import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";
import ExportSection from "@/components/ExportSection";
import Footer from "@/components/Footer";

export default function Home() {
  return <>
    <Navbar />
    <main>
      <Hero />
      {/* <div className="ticker" aria-label="CandyLake brand promise"><div className="ticker-track">
        {Array.from({ length: 2 }).map((_, i) => <span key={i}>JOY UNLIMITED ✳ MADE TO MAKE YOU SMILE ✳ A LITTLE SWEETNESS, A LOT OF HAPPINESS ✳ </span>)}
      </div></div> */}
      <ProductSection />
      <AboutSection />
      <ExportSection />
    </main>
    <Footer />
  </>;
}
