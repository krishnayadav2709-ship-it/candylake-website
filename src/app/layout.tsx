import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "CandyLake | Joy Unlimited",
  description: "Discover delightful candies, eclairs, wafers and confectionery from CandyLake.",
  metadataBase: new URL("https://www.candylake.in")
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body><ScrollReveal>{children}</ScrollReveal></body></html>;
}
