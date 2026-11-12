import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | CandyLake",
  description: "Get in touch with CandyLake for product enquiries, partnerships, exports or general questions."
};

export default function ContactPage() {
  return <>
    <Navbar />
    <main>
      <ContactSection />
    </main>
    <Footer />
  </>;
}
