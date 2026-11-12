"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye, Handshake, Heart, Lightbulb, ShieldCheck, Target } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Our mission",
    text: "Bring Joy Unlimited to everyday life with delightful sweets, trusted quality and flavours made to be shared."
  },
  {
    icon: Eye,
    title: "Our vision",
    text: "Keep moving confectionery forward through thoughtful innovation, high standards and a wider world of choice."
  },
  {
    icon: Handshake,
    title: "Our promise",
    text: "Build lasting relationships with customers, colleagues and partners through honesty, care and exceptional service."
  }
];

const values = [
  { icon: ShieldCheck, title: "Quality & consistency" },
  { icon: Heart, title: "Customer happiness" },
  { icon: Lightbulb, title: "Continuous innovation" },
  { icon: Handshake, title: "Integrity & teamwork" }
];

export default function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section className="about-section" id="about" aria-labelledby="story-heading">
      <div className="about-shape shape-a" aria-hidden="true" />
      <div className="about-shape shape-b" aria-hidden="true" />

      <div className="section about-section-inner">
        <motion.header
          className="story-heading"
          initial={false}
          whileInView={reduce ? undefined : { y: [10, 0] }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 id="story-heading" data-reveal="left">More than sweets.<br /><em>Moments of joy.</em></h2>
          <p data-reveal="right">
            A family&apos;s belief in better treats grew into a promise to bring a little more happiness to
            everyday life. This is the story behind CandyLake.
          </p>
        </motion.header>

        <div className="about-layout">
          <motion.div
            className="about-left"
            data-reveal="left"
            initial={false}
            whileInView={reduce ? undefined : { y: [12, 0] }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="about-showcase">
              <span className="showcase-kicker">A little joy, since 1989</span>
              <div className="showcase-orbit showcase-orbit-one" aria-hidden="true" />
              <div className="showcase-orbit showcase-orbit-two" aria-hidden="true" />
              <motion.div
                className="showcase-pack showcase-pack-main"
                animate={reduce ? undefined : { y: [0, -9, 0], rotate: [-4, 0, -4] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/images/products/Coco_Crush.png" alt="Coco Crush candy pack" width={360} height={360} sizes="(max-width: 760px) 48vw, 260px" />
              </motion.div>
              <motion.div
                className="showcase-pack showcase-pack-side"
                aria-hidden="true"
                animate={reduce ? undefined : { y: [0, 8, 0], rotate: [8, 2, 8] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <Image src="/images/products/Strawberry1.png" alt="" width={240} height={240} sizes="(max-width: 760px) 28vw, 160px" />
              </motion.div>
              <motion.div
                className="showcase-pack showcase-pack-third"
                aria-hidden="true"
                animate={reduce ? undefined : { y: [0, -7, 0], rotate: [-7, -2, -7] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <Image src="/images/products/Bombzz1.png" alt="" width={240} height={240} sizes="(max-width: 760px) 24vw, 140px" />
              </motion.div>
              <motion.div
                className="showcase-pack showcase-pack-fourth"
                aria-hidden="true"
                animate={reduce ? undefined : { y: [0, 6, 0], rotate: [5, 1, 5] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              >
                <Image src="/images/products/pop-loli.png" alt="" width={220} height={220} sizes="(max-width: 760px) 22vw, 125px" />
              </motion.div>
              <div className="showcase-note"><span>Made for sharing</span></div>
            </div>
            <motion.div
              className="about-stamp"
              aria-label="Established in 1989, India"
              initial={false}
              animate={reduce ? undefined : { rotate: [10, 13, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              EST.<br /><b>1989</b><br />INDIA
            </motion.div>
          </motion.div>

          <motion.div
            className="about-right"
            data-reveal="right"
            initial={false}
            whileInView={reduce ? undefined : { y: [12, 0] }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          >
            <span className="story-origin">The story of Paras Food Products</span>
            <h3 className="story-copy-title">Rooted in <em>tradition.</em><br />Made for tomorrow.</h3>
            <p>
              Founded by Mr. Dayal Das Ji Pahuja in 1989, Paras Food Products began with a simple
              commitment to quality, innovation and customer happiness. That belief still guides every
              sweet moment we make.
            </p>
            <p>
              Today, CandyLake and Kandy bring together candies, chocolates and wafers for families
              across more than 50 cities in India — made with expertise and care to meet global standards.
            </p>
            <div className="story-stats" aria-label="CandyLake at a glance">
              <div><strong>1989</strong><span>Our beginning</span></div>
              <div><strong>50+</strong><span>Cities reached in India</span></div>
              <div><strong>2</strong><span>Beloved brands</span></div>
            </div>
            <Link className="story-link" href="/products">Meet our treats <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </motion.div>
        </div>

        <div className="story-principles" data-reveal-group aria-label="Our mission, vision and promise">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              className="story-principle"
              data-reveal={index % 2 === 0 ? "left" : "right"}
              key={title}
              initial={false}
              whileInView={reduce ? undefined : { y: [12, 0] }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.12 }}
            >
              <span className="story-principle-icon"><Icon size={20} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>

        <div className="story-values">
          <span data-reveal="left">What we believe in</span>
          <ul data-reveal-group>
            {values.map(({ icon: Icon, title }, index) => (
              <li key={title} data-reveal={index % 2 === 0 ? "right" : "left"}><Icon size={15} aria-hidden="true" />{title}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
