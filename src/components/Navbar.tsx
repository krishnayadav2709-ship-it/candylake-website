"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const links = [{ label: "Home", href: "/" }, { label: "Our Story", href: "/#about" }, { label: "Products", href: "/products" }, { label: "Export", href: "/#export" }, { label: "Contact", href: "/contact" }];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return <header className="site-header">
    <nav className="nav-shell">
      <a href="/" className="brand" aria-label="CandyLake home">
        <Image src="/images/logo.png" alt="logo" width={170} height={64} priority className="brand-logo" />
      </a>
      <div className="desktop-links">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
      <button className="mobile-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    <AnimatePresence initial={false}>
      {open && <motion.div
        className="mobile-menu"
        id="mobile-navigation"
        initial={reduce ? false : { y: -10 }}
        animate={{ y: 0 }}
        exit={{ y: -10 }}
        transition={{ duration: reduce ? .1 : .22, ease: [.22, 1, .36, 1] }}
      >{links.map((link, index) => <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} initial={reduce ? false : { x: -8 }} animate={{ x: 0 }} transition={{ duration: .2, delay: reduce ? 0 : index * .035 }}>{link.label}</motion.a>)}</motion.div>}
    </AnimatePresence>
  </header>;
}
