"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { Product } from "@/data/products";

export default function ProductDetailCopy({ product }: { product: Product }) {
  const reduce = useReducedMotion();
  const enter = (delay: number): MotionProps => reduce ? {} : {
    initial: { y: 12 },
    animate: { y: 0 },
    transition: { duration: .55, delay, ease: "easeOut" }
  };

  return <div className="product-detail-copy" data-reveal="right">
    <motion.div className="eyebrow product-detail-eyebrow" {...enter(0)}>{product.category} <span>✳</span> CandyLake treats</motion.div>
    <motion.h1 {...enter(.04)}>{product.name}</motion.h1>
    <motion.p className="product-detail-lead" {...enter(.08)}>{product.description}</motion.p>
    <motion.p className="product-detail-description" {...enter(.12)}>{product.details}</motion.p>
    <motion.div className="product-detail-highlights" {...enter(.16)}>
      <h2>A little more to love</h2>
      <ul>{product.highlights.map((highlight, index) => <motion.li
        key={highlight}
        initial={reduce ? false : { x: 8 }}
        animate={{ x: 0 }}
        transition={{ duration: .45, delay: reduce ? 0 : .2 + index * .07, ease: "easeOut" }}
      ><Check size={17} />{highlight}</motion.li>)}</ul>
    </motion.div>
    <motion.div {...enter(.22)}>
      <Link href="/contact" className="button button-dark">Ask us about this treat</Link>
    </motion.div>
    <motion.p className="product-detail-note" {...enter(.26)}>Product pack image shown for identification; packaging may vary.</motion.p>
  </div>;
}
