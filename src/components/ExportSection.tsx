// "use client";
// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowUpRight, Globe2 } from "lucide-react";
// const markets = ["Canada", "United States", "UAE", "Brazil", "Malaysia", "Australia", "United Kingdom", "South Africa"];
// export default function ExportSection() {
//   const reduce = useReducedMotion();
//   return <section className="section export-section" id="export">
//     <div className="export-candy-field" aria-hidden="true">
//       <motion.span
//         className="export-candy export-candy-wrap"
//         animate={reduce ? undefined : { y: [0, -13, 0], rotate: [-9, 8, -9], scale: [1, 1.05, 1] }}
//         transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <svg viewBox="0 0 90 64" focusable="false">
//           <defs>
//             <linearGradient id="export-wrap" x1="0" x2="1" y1="0" y2="1">
//               <stop offset="0" stopColor="#ff9bb5" />
//               <stop offset=".55" stopColor="#ef477b" />
//               <stop offset="1" stopColor="#ba245b" />
//             </linearGradient>
//           </defs>
//           <path d="m27 20-21-13 6 22-6 22 22-14m36-17L84 7l-6 22 6 22-22-14" fill="url(#export-wrap)" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
//           <rect x="24" y="16" width="42" height="32" rx="16" fill="url(#export-wrap)" />
//           <path d="M33 21h23a11 11 0 0 1 0 22H33a11 11 0 0 1 0-22Z" fill="none" stroke="#ffe8ae" strokeWidth="4" />
//           <ellipse cx="38" cy="22" rx="9" ry="3" transform="rotate(-20 38 22)" fill="#fff" opacity=".72" />
//         </svg>
//       </motion.span>
//       <motion.span
//         className="export-candy export-candy-pop"
//         animate={reduce ? undefined : { y: [0, 10, 0], rotate: [8, -10, 8], scale: [1, .95, 1] }}
//         transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: .45 }}
//       >
//         <svg viewBox="0 0 64 84" focusable="false">
//           <defs>
//             <linearGradient id="export-pop" x1="0" x2="1" y1="0" y2="1">
//               <stop offset="0" stopColor="#fff07d" />
//               <stop offset=".55" stopColor="#ffc928" />
//               <stop offset="1" stopColor="#ed9f20" />
//             </linearGradient>
//           </defs>
//           <path d="m29 44 7 1-1 35a4 4 0 0 1-8 0l-1-35Z" fill="#fff5e3" stroke="#ddc9ae" strokeWidth="2" />
//           <circle cx="32" cy="30" r="25" fill="url(#export-pop)" stroke="#fff" strokeWidth="2" />
//           <path d="M18 28c2-9 16-14 23-7 6 6 0 13-9 15-6 2-8 6-4 10m-3-26c8-5 17 1 16 7" fill="none" stroke="#e84e7f" strokeWidth="4" strokeLinecap="round" />
//           <ellipse cx="23" cy="14" rx="8" ry="3" transform="rotate(-30 23 14)" fill="#fff" opacity=".75" />
//         </svg>
//       </motion.span>
//     </div>
//     <div className="export-layout"><motion.div className="export-copy" data-reveal="left" initial={reduce ? false : { y: 28 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65, ease: "easeOut" }}><div className="eyebrow"><Globe2 size={14} /> A world of possibilities</div><h2>Good things<br />know <span>no borders.</span></h2><p>With experience in the Indian market and a passion for delightful flavours, CandyLake looks forward to building lasting partnerships across the globe.</p><a className="button button-dark" href="/contact">contact us</a></motion.div>
//       <motion.div className="market-panel" data-reveal="right" initial={reduce ? false : { y: 36, scale: .97 }} whileInView={{ y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, ease: "easeOut", delay: .12 }}><div className="market-panel-head"><span>OUR WORLDWIDE OUTLOOK</span><Globe2 size={20} /></div><div className="market-grid" data-reveal-group>{markets.map((m, i) => <motion.div className="market" data-reveal={i % 2 === 0 ? "left" : "right"} key={m} initial={reduce ? false : { y: 10 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .4, delay: reduce ? 0 : i * .06, ease: "easeOut" }}><span>0{i + 1}</span>{m}<ArrowUpRight size={15} /></motion.div>)}</div><div className="market-footer">LET&apos;S MAKE THE WORLD A LITTLE SWEETER ✳</div></motion.div>
//     </div>
//   </section>;
// }


"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
  Sphere,
} from "react-simple-maps";
import worldData from "world-atlas/countries-110m.json";
import type { GeoJsonObject } from "geojson";
import {
  ArrowUpRight,
  Globe2,
  Plane,
  MapPin,
  Package,
} from "lucide-react";

const india: [number, number] = [78.9, 20.5];
// react-simple-maps handles TopoJSON at runtime, but its geography prop types only GeoJSON.
const worldGeography = worldData as unknown as GeoJsonObject;

const markets = [
  { name: "Canada", coordinates: [-106, 56] as [number, number] },
  { name: "United States", coordinates: [-98, 39] as [number, number] },
  { name: "United Kingdom", coordinates: [-3, 55] as [number, number] },
  { name: "UAE", coordinates: [54, 24] as [number, number] },
  { name: "Brazil", coordinates: [-51, -10] as [number, number] },
  { name: "Malaysia", coordinates: [102, 4] as [number, number] },
  { name: "Australia", coordinates: [134, -25] as [number, number] },
  { name: "South Africa", coordinates: [24, -29] as [number, number] },
];

export default function ExportSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section export-section cl-global-export" id="export">
      <div className="export-layout">

        {/* LEFT CONTENT */}

        <motion.div
          className="export-copy cl-export-copy"
          initial={reduce ? false : { opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85 }}
        >
          <span className="eyebrow">
            <Globe2 size={15} />
            OUR GLOBAL PRESENCE
          </span>

          <h2>
            Sweetness
            <br />
            without <span>borders.</span>
          </h2>

          <p>
            From India to destinations around the world,
            CandyLake brings a little sweetness to every corner.
          </p>

          <div className="cl-export-highlights">
            <div className="cl-highlight">
              <span className="cl-highlight-icon">
                <Globe2 size={19} />
              </span>
              <div>
                <strong>Global reach</strong>
                <small>Connecting markets worldwide</small>
              </div>
            </div>

            <div className="cl-highlight">
              <span className="cl-highlight-icon">
                <Package size={19} />
              </span>
              <div>
                <strong>Made in India</strong>
                <small>Sweet creations, delivered globally</small>
              </div>
            </div>

            <div className="cl-highlight">
              <span className="cl-highlight-icon">
                <Plane size={19} />
              </span>
              <div>
                <strong>International exports</strong>
                <small>Across multiple continents</small>
              </div>
            </div>
          </div>

          <a href="/contact" className="button button-dark">
            Explore with us
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        {/* RIGHT SIDE - PREMIUM MAP */}

        <motion.div
          className="cl-global-map-wrapper"
          initial={reduce ? false : { opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="cl-map-card">

            {/* MAP HEADER */}

            <div className="cl-map-header">
              <div className="cl-map-heading">
                <h3>Our World of Exports</h3>

                <p>Connecting India to international markets</p>
              </div>
            </div>

            {/* MAP VISUAL */}

            <div className="cl-map-visual">

              <div className="cl-map-background-glow" />
              <div className="cl-map-grid" />

              <div className="cl-map-floating cl-float-one">✦</div>
              <div className="cl-map-floating cl-float-two">✧</div>
              <div className="cl-map-floating cl-float-three">✦</div>

              <div className="cl-map-svg-container">
                <ComposableMap
                  width={900}
                  height={510}
                  projection="geoNaturalEarth1"
                  projectionConfig={{
                    scale: 165,
                    center: [5, 5],
                  }}
                  style={{
                    width: "100%",
                    height: "auto",
                    overflow: "visible",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="clPremiumLand"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#24435A" />
                      <stop offset="50%" stopColor="#19374D" />
                      <stop offset="100%" stopColor="#102A40" />
                    </linearGradient>

                    <radialGradient id="clOriginGlow">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="30%" stopColor="#66E1C3" />
                      <stop offset="100%" stopColor="#2CA98F" />
                    </radialGradient>

                    <filter id="clMapBlur">
                      <feGaussianBlur stdDeviation="7" />
                    </filter>
                  </defs>

                  {/* Globe */}

                  <Sphere
                    fill="#13283B"
                    stroke="#29485B"
                    strokeWidth={1.5}
                  />

                  {/* Countries */}

                  <Geographies geography={worldGeography}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          className="cl-map-country"
                          fill="url(#clPremiumLand)"
                          stroke="#416074"
                          strokeWidth={0.8}
                          style={{ outline: "none" }}
                        />
                      ))
                    }
                  </Geographies>

                  {/* Export routes */}

                  {markets.map((market, index) => (
                    <Line
                      key={market.name}
                      from={india}
                      to={market.coordinates}
                      stroke="#F2A2AC"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeDasharray="5 8"
                      fill="none"
                      className={`cl-premium-route cl-premium-route-${index}`}
                    />
                  ))}

                  {/* Destination points */}

                  {markets.map((market, index) => (
                    <Marker
                      key={market.name}
                      coordinates={market.coordinates}
                    >
                      <g
                        className="cl-destination-marker"
                        role="img"
                        aria-label={market.name}
                        tabIndex={0}
                      >
                        <g className={`cl-premium-marker cl-premium-marker-${index}`}>
                          <circle
                            r={13}
                            fill="#F4A1A9"
                            opacity={0.14}
                          />
                          <circle
                            r={7}
                            fill="#F4A1A9"
                            opacity={0.24}
                          />
                          <circle
                            r={4}
                            fill="#F7B7B8"
                            stroke="#FFFFFF"
                            strokeWidth={1.4}
                          />
                          <circle r={1.4} fill="#FFFFFF" />
                        </g>
                        <g
                          className="cl-map-country-tooltip"
                          transform={
                            index === 0
                              ? "translate(-108,-40)"
                              : index === 1
                                ? "translate(16,18)"
                                : index === 3
                                  ? "translate(-74,-40)"
                                : "translate(16,-40)"
                          }
                          aria-hidden="true"
                        >
                          <rect
                            width={market.name.length * 10 + 28}
                            height={40}
                            rx={10}
                          />
                          <text x={14} y={26}>
                            {market.name}
                          </text>
                        </g>
                      </g>
                    </Marker>
                  ))}

                  {/* Animated route highlights */}

                  {markets.map((market, index) => (
                    <Marker
                      key={`moving-${market.name}`}
                      coordinates={market.coordinates}
                    >
                      <circle
                        r={2.8}
                        className={`cl-premium-particle cl-premium-particle-${index}`}
                        fill="#FFFFFF"
                      />
                    </Marker>
                  ))}

                  {/* India origin */}

                  <Marker coordinates={india}>
                    <g className="cl-premium-origin">
                      <circle
                        r={27}
                        fill="#43D5B1"
                        opacity={0.09}
                      />
                      <circle
                        r={18}
                        fill="#43D5B1"
                        opacity={0.16}
                      />
                      <circle
                        r={11}
                        fill="url(#clOriginGlow)"
                        stroke="#FFFFFF"
                        strokeWidth={2.5}
                      />
                      <circle r={3.5} fill="#FFFFFF" />
                    </g>
                    <g
                      className="cl-map-country-tooltip"
                      transform="translate(-36,20)"
                      aria-hidden="true"
                    >
                      <rect width={78} height={40} rx={10} />
                      <text x={14} y={26}>
                        India
                      </text>
                    </g>
                  </Marker>

                </ComposableMap>
              </div>

            </div>

            {/* MAP FOOTER */}

            <div className="cl-map-footer">

              <div className="cl-map-footer-top">
                <div>
                  <span className="cl-footer-kicker">
                    <MapPin size={13} />
                    OUR DESTINATIONS
                  </span>
                  <strong>Across the globe</strong>
                </div>

                <div className="cl-destination-count">
                  <strong>08</strong>
                  <span>MARKETS</span>
                </div>
              </div>

              <div className="cl-map-bottom-line">
                <span>
                  <i className="cl-route-legend" />
                  International export connections
                </span>

                <span className="cl-map-bottom-brand">
                  CANDYLAKE <span>♥</span>
                </span>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
