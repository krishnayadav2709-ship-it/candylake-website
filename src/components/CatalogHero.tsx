"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const characters = [
  { className: "catalog-candy-pink", color: "#f34d82", light: "#ff9db8", delay: 0, duration: 2.4 },
  { className: "catalog-candy-yellow", color: "#ffbf24", light: "#ffe27a", delay: .35, duration: 2.7 },
  { className: "catalog-candy-blue", color: "#7564d8", light: "#a99cff", delay: .7, duration: 2.5 }
];

function DancingCandy({ color, light }: { color: string; light: string }) {
  return <svg viewBox="0 0 180 190" role="presentation" focusable="false">
    <defs>
      <linearGradient id={`wrapper-${color.slice(1)}`} x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor={light} />
        <stop offset="1" stopColor={color} />
      </linearGradient>
    </defs>
    <path d="M47 70 13 48l8 40-7 37 37-20M133 70l34-22-8 40 7 37-37-20" fill={light} stroke={color} strokeWidth="5" strokeLinejoin="round" />
    <path d="M44 55c0-12 20-20 46-20s46 8 46 20v66c0 12-20 21-46 21s-46-9-46-21z" fill={`url(#wrapper-${color.slice(1)})`} stroke={color} strokeWidth="5" />
    <path d="M53 67c16 10 58 10 74 0M53 108c16-10 58-10 74 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".55" />
    <ellipse cx="74" cy="87" rx="5" ry="7" fill="#291b2a" />
    <ellipse cx="106" cy="87" rx="5" ry="7" fill="#291b2a" />
    <path d="M82 101q8 9 16 0" fill="none" stroke="#291b2a" strokeWidth="4" strokeLinecap="round" />
    <path d="m60 126-8 22m68-22 8 22" fill="none" stroke="#291b2a" strokeWidth="5" strokeLinecap="round" />
    <path d="M52 150q-11 0-13 9m89-9q11 0 13 9" fill="none" stroke="#291b2a" strokeWidth="5" strokeLinecap="round" />
    <path d="m48 79-19-3m103 3 19-3" fill="none" stroke="#291b2a" strokeWidth="4" strokeLinecap="round" />
    <circle cx="64" cy="97" r="5" fill="#ffb5c8" opacity=".9" />
    <circle cx="116" cy="97" r="5" fill="#ffb5c8" opacity=".9" />
  </svg>;
}

export default function CatalogHero() {
  const reduce = useReducedMotion();

  return <section className="catalog-intro">
    <div className="catalog-hero-inner">
      <motion.div
        className="catalog-hero-copy"
        data-reveal="left"
        initial={reduce ? false : { x: -24 }}
        animate={{ x: 0 }}
        transition={{ duration: .7, ease: "easeOut" }}
      >
        <div className="eyebrow"><Sparkles size={14} /> Made for your happy moments</div>
        <h1>Meet your next<br /><span>favourite treat.</span></h1>
        <p>From fruity pops and crispy wafers to creamy candies and chewy toffees, there is a little joy for every kind of sweet tooth.</p>
        <div className="catalog-hero-actions">
          <Link href="#products" className="button button-dark">Explore the treats</Link>
          <span>Small treats. Big feelings.</span>
        </div>
      </motion.div>

      <div className="catalog-candy-stage" data-reveal="right" aria-label="Three cheerful dancing candy characters">
        <motion.span className="catalog-hero-orbit catalog-orbit-one" aria-hidden="true" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} />
        <motion.span className="catalog-hero-orbit catalog-orbit-two" aria-hidden="true" animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} />
        <motion.span className="catalog-hero-sparkle sparkle-a" aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.35, 1], rotate: [0, 18, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>✦</motion.span>
        <motion.span className="catalog-hero-sparkle sparkle-b" aria-hidden="true" animate={reduce ? undefined : { scale: [1, .7, 1], rotate: [0, -20, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: .4 }}>✳</motion.span>
        {characters.map((candy, index) => <motion.div
          key={candy.className}
          className={`catalog-dancer ${candy.className}`}
          initial={reduce ? false : { opacity: 0, y: 30, scale: .8 }}
          animate={reduce ? { opacity: 1, y: 0, scale: 1 } : {
            opacity: 1,
            y: [0, -15, 0, -8, 0],
            rotate: index === 1 ? [0, 9, 0, -9, 0] : [0, -10, 0, 10, 0],
            scale: [1, 1.04, .98, 1.02, 1]
          }}
          transition={reduce ? { duration: .4 } : {
            opacity: { duration: .5, delay: candy.delay },
            y: { duration: candy.duration, repeat: Infinity, ease: "easeInOut", delay: candy.delay },
            rotate: { duration: candy.duration, repeat: Infinity, ease: "easeInOut", delay: candy.delay },
            scale: { duration: candy.duration, repeat: Infinity, ease: "easeInOut", delay: candy.delay }
          }}
          aria-hidden="true"
        >
          <DancingCandy color={candy.color} light={candy.light} />
        </motion.div>)}
        <span className="catalog-stage-label">JOY, WRAPPED UP</span>
      </div>
    </div>
    <Link href="/#products" className="catalog-home-link" data-reveal="left">A taste of CandyLake, at home ↓</Link>
  </section>;
}
