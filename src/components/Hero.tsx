"use client";

import { motion, useReducedMotion } from "framer-motion";

const heroCopyVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [.22, 1, .36, 1] as const, staggerChildren: 0.12, delayChildren: 0.08 }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [.22, 1, .36, 1] as const } }
};

// "use client";
// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowUpRight, Sparkles } from "lucide-react";
//
// export default function Hero() {
//   const reduce = useReducedMotion();
//
//   return <section className="hero-section" id="home">
//     <div className="hero-video-overlay" />
//     <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
//     <div className="hero-inner">
//       <motion.div className="hero-copy" initial={reduce ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
//         <div className="eyebrow"><Sparkles size={15} /> A little joy in every bite</div>
//         <h1>Make life<br /><span>a little more</span><br /><em>delicious.</em></h1>
//         <p>From nostalgic favourites to exciting new flavours, discover treats made to turn everyday moments into happy ones.</p>
//         <div className="hero-actions"><a className="button button-dark" href="#products">Explore our treats</a><a className="text-link" href="#about">Discover our story</a></div>
//         <div className="hero-note"><span className="note-dot" /> Crafting smiles since 1989</div>
//       </motion.div>
//       <div className="hero-art"><div className="art-sticker sticker-top">HAPPY<br />TASTE!</div><div className="art-sticker sticker-bottom">JOY<br />UNLIMITED ✳</div></div>
//     </div>
//     <div className="hero-bottom-label">CANDYLAKE® — THE JOY FACTORY</div>
//   </section>;
// }
//

export default function Hero() {
  const reduce = useReducedMotion();

  return <section className="hero-section" id="home">
    <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true" tabIndex={-1}>
      <source src="/videos/hero-1.mp4" type="video/mp4" />
    </video>
    <div className="hero-video-overlay" />
    <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
    <div className="hero-inner">
      <motion.div
        className="hero-copy"
        variants={heroCopyVariants}
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="eyebrow" variants={heroItemVariants}> A little joy in every bite</motion.div>
        <motion.h1 variants={heroItemVariants}>Make life<br /><span>a little more</span><br /><em>delicious.</em></motion.h1>
        <motion.p variants={heroItemVariants}>From nostalgic favourites to exciting new flavours, discover treats made to turn everyday moments into happy ones.</motion.p>
        <motion.div className="hero-actions" variants={heroItemVariants}><a className="button button-dark" href="/products">Explore our treats</a><a className="text-link" href="#about">Discover our story</a></motion.div>
        <motion.div className="hero-note" variants={heroItemVariants}><span className="note-dot" /> Crafting smiles since 1989</motion.div>
      </motion.div>

      <motion.div
        className="hero-art"
        initial={reduce ? false : { opacity: 0, x: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [.22, 1, .36, 1], delay: 0.12 }}
      >
        <div className="hero-candy-halo" aria-hidden="true" />
        <motion.div
          className="hero-candy-orbit"
          aria-hidden="true"
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          <span className="orbit-sweet orbit-sweet-one" />
          <span className="orbit-sweet orbit-sweet-two" />
          <span className="orbit-sweet orbit-sweet-three" />
        </motion.div>
        

<div className="hero-lollipop" aria-hidden="true">
  <div className="candy-glow" />

  <svg
    className="lollipop-character"
    viewBox="0 0 360 430"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Premium candy colors */}
      <linearGradient id="candy-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffb9d0" />
        <stop offset="30%" stopColor="#ff78a5" />
        <stop offset="65%" stopColor="#f04480" />
        <stop offset="100%" stopColor="#b91958" />
      </linearGradient>

      <linearGradient id="candy-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff4b5" />
        <stop offset="45%" stopColor="#ffca42" />
        <stop offset="100%" stopColor="#e89b19" />
      </linearGradient>

      <linearGradient id="candy-stick" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#d9a77b" />
        <stop offset="35%" stopColor="#fff8e8" />
        <stop offset="70%" stopColor="#fff0d2" />
        <stop offset="100%" stopColor="#d4a37c" />
      </linearGradient>

      <radialGradient id="candy-gloss" cx="28%" cy="18%" r="80%">
        <stop offset="0%" stopColor="#fff" stopOpacity=".85" />
        <stop offset="45%" stopColor="#fff" stopOpacity=".22" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>

      <radialGradient id="candy-cheeks">
        <stop offset="0%" stopColor="#ffb0c2" stopOpacity=".9" />
        <stop offset="100%" stopColor="#ff8aa9" stopOpacity="0" />
      </radialGradient>

      <filter id="candy-depth" x="-40%" y="-40%" width="180%" height="190%">
        <feDropShadow
          dx="0"
          dy="17"
          stdDeviation="13"
          floodColor="#8d244f"
          floodOpacity=".25"
        />
      </filter>

      <filter id="candy-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="7" />
      </filter>

      <clipPath id="candy-clip">
        <circle cx="180" cy="158" r="105" />
      </clipPath>
    </defs>

    {/* Floating character */}
    <g className="candy-float">

      <g className="candy-tilt">

        {/* Stick */}
        <path
          d="M165 252 L195 252 L198 386 Q180 405 162 386 Z"
          fill="url(#candy-stick)"
          stroke="#f1d1aa"
          strokeWidth="2"
        />

        <path
          d="M173 273 L175 377"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity=".65"
        />

        {/* Stick bottom shine */}
        <ellipse cx="180" cy="389" rx="17" ry="7" fill="#e6bd91" opacity=".45" />

        <g filter="url(#candy-depth)">

          {/* Outer golden candy border */}
          <circle
            cx="180"
            cy="158"
            r="119"
            fill="url(#candy-gold)"
          />

          {/* Inner candy */}
          <circle
            cx="180"
            cy="158"
            r="108"
            fill="url(#candy-body)"
            stroke="#fff0b8"
            strokeWidth="3"
          />

          {/* Candy surface details */}
          <g clipPath="url(#candy-clip)">

            <ellipse
              cx="145"
              cy="105"
              rx="90"
              ry="75"
              fill="url(#candy-gloss)"
            />

            <path
              d="M90 124 C110 65 165 42 210 68"
              stroke="#fff"
              strokeWidth="13"
              strokeLinecap="round"
              fill="none"
              opacity=".38"
            />

            <ellipse
              cx="126"
              cy="83"
              rx="32"
              ry="12"
              transform="rotate(-32 126 83)"
              fill="#fff"
              opacity=".82"
            />

            <ellipse
              cx="225"
              cy="215"
              rx="32"
              ry="17"
              fill="#ffb1c7"
              opacity=".12"
            />

            <circle cx="92" cy="174" r="9" fill="#fff" opacity=".12" />
            <circle cx="258" cy="125" r="13" fill="#fff" opacity=".12" />

          </g>

          {/* Eyebrows */}
          <g className="candy-brows" fill="none" stroke="#762445" strokeWidth="5" strokeLinecap="round">
            <path d="M126 125 Q137 117 148 124" />
            <path d="M212 124 Q224 117 235 125" />
          </g>

          {/* Eyes */}
          <g className="candy-eyes">

            <g className="candy-eye">
              <ellipse cx="139" cy="157" rx="12" ry="17" fill="#4a2038" />
              <ellipse cx="143" cy="150" rx="4.5" ry="6" fill="#fff" />
              <circle cx="133" cy="164" r="2.5" fill="#fff" opacity=".8" />
            </g>

            <g className="candy-eye">
              <ellipse cx="221" cy="157" rx="12" ry="17" fill="#4a2038" />
              <ellipse cx="225" cy="150" rx="4.5" ry="6" fill="#fff" />
              <circle cx="215" cy="164" r="2.5" fill="#fff" opacity=".8" />
            </g>

          </g>

          {/* Blush */}
          <ellipse cx="112" cy="191" rx="24" ry="15" fill="url(#candy-cheeks)" />
          <ellipse cx="248" cy="191" rx="24" ry="15" fill="url(#candy-cheeks)" />

          {/* Smile */}
          <g className="candy-smile">
            <path
              d="M153 185 Q180 220 207 185"
              fill="none"
              stroke="#762445"
              strokeWidth="7"
              strokeLinecap="round"
            />

            <path
              d="M163 193 Q180 205 197 193"
              fill="none"
              stroke="#ffb5c9"
              strokeWidth="3"
              strokeLinecap="round"
              opacity=".7"
            />
          </g>

          {/* Small decorative shine */}
          <path
            d="M249 88 L253 98 L263 102 L253 106 L249 116 L245 106 L235 102 L245 98 Z"
            fill="#fff"
            opacity=".95"
          />

        </g>
      </g>
    </g>

    {/* Orbiting sparkles */}
    <g className="candy-sparkle sparkle-one">
      <path d="M45 100 L51 115 L66 121 L51 127 L45 142 L39 127 L24 121 L39 115 Z" fill="#ffca42" />
    </g>

    <g className="candy-sparkle sparkle-two">
      <path d="M300 190 L305 201 L316 206 L305 211 L300 222 L295 211 L284 206 L295 201 Z" fill="#ff8eae" />
    </g>

    <g className="candy-sparkle sparkle-three">
      <path d="M65 265 L70 276 L81 281 L70 286 L65 297 L60 286 L49 281 L60 276 Z" fill="#ffca42" />
    </g>

    <circle className="candy-dot dot-one" cx="292" cy="75" r="5" fill="#ff83a7" />
    <circle className="candy-dot dot-two" cx="37" cy="200" r="4" fill="#ffc928" />

  </svg>
</div>

        <div className="art-sticker sticker-top">HAPPY<br />TASTE!</div>
        <div className="art-sticker sticker-bottom">JOY<br />UNLIMITED </div>
      </motion.div>
    </div>
    <div className="hero-bottom-label">CANDYLAKE® — THE JOY FACTORY</div>
  </section>;
}
