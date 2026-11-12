"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { resetProductTilt, updateProductTilt } from "@/lib/productTilt";

type ProductDetailArtworkProps = {
  image: string;
  name: string;
};

const candies = [
  { className: "detail-candy-one", emoji: "🍬", duration: 4.8, delay: 0 },
  { className: "detail-candy-two", emoji: "🍭", duration: 5.4, delay: 0.6 },
  { className: "detail-candy-three", emoji: "🍫", duration: 4.5, delay: 1.1 }
];

export default function ProductDetailArtwork({ image, name }: ProductDetailArtworkProps) {
  const reduce = useReducedMotion();

  return <div className="product-detail-visual-art" data-reveal="left" onPointerMove={updateProductTilt} onPointerLeave={resetProductTilt}>
    <motion.span
      className="product-detail-orbit"
      aria-hidden="true"
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
    />
    {candies.map(candy => <motion.span
      key={candy.className}
      className={`detail-floating-candy ${candy.className}`}
      aria-hidden="true"
      animate={reduce ? undefined : {
        y: [0, -13, 0, 9, 0],
        rotate: [-9, 8, -5, 10, -9],
        scale: [1, 1.08, 1]
      }}
      transition={{ duration: candy.duration, delay: candy.delay, repeat: Infinity, ease: "easeInOut" }}
    >{candy.emoji}</motion.span>)}
    <motion.div
      className="product-detail-image-wrap"
      initial={reduce ? false : { y: 16, scale: .97 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: .7, ease: "easeOut" }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={image} alt={`${name} packaging`} width={800} height={800} priority sizes="(max-width: 760px) 90vw, 48vw" />
      </motion.div>
    </motion.div>
    <span className="product-art-caption">A little joy in every bite </span>
  </div>;
}
