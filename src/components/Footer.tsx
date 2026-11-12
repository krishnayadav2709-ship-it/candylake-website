"use client";

import Image from "next/image";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const emails = ["info@candylake.in", "wecare@candylake.in", "exports@candylake.in"];
const phones = ["+91 6263460660", "+91 8989005954"];

export default function Footer() {
  const reduce = useReducedMotion();
  return <footer className="footer">
    <motion.span className="footer-sweet footer-sweet-one" aria-hidden="true" animate={reduce ? undefined : { y: [0, -9, 0], rotate: [-12, 8, -12] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>🍬</motion.span>
    <motion.span className="footer-sweet footer-sweet-two" aria-hidden="true" animate={reduce ? undefined : { y: [0, 8, 0], rotate: [9, -10, 9] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: .5 }}>🍭</motion.span>
    <motion.div
      className="footer-main"
      data-reveal-group
      initial={reduce ? false : { y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: .2 }}
      transition={{ duration: .65, ease: [.22, 1, .36, 1] }}
    >
      <div className="footer-brand" data-reveal="left">
        <Image src="/images/logo.png" alt="CandyLake logo" width={150} height={58} className="footer-logo" />
        <p>Making everyday moments<br />a little more joyful.</p>
      </div>
      <div className="footer-column footer-contact" data-reveal="right">
        <h2>Contact us</h2>
        <div className="footer-contact-list">
          {emails.map(email => <a key={email} href={`mailto:${email}`}><Mail size={16} />{email}</a>)}
          {phones.map(phone => <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`}><Phone size={16} />{phone}</a>)}
        </div>
      </div>
      <div className="footer-column footer-locations" data-reveal="left">
        <h2>Our locations</h2>
        <address><Building2 size={17} /><span><b>Unit 1 · Paras Food Products</b>360/1, SDA Compound, Nemawar Rd, Indore, Madhya Pradesh 452001</span></address>
        <address><MapPin size={17} /><span><b>Unit 2 · Candylake Nutritions Pvt. Ltd.</b>38/1 &amp; 38/2, Gram - Kapaliyakhedi, Indore (M.P.)</span></address>
      </div>
    </motion.div>
    <motion.div className="footer-bottom" data-reveal="right" initial={reduce ? false : { y: 10 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, ease: [.22, 1, .36, 1], delay: .08 }}><span>© {new Date().getFullYear()} CandyLake. All rights reserved.</span></motion.div>
  </footer>;
}
