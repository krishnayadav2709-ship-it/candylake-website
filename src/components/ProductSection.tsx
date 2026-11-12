// "use client";
// import { useEffect, useMemo, useRef, useState } from "react";
// import { motion, useReducedMotion, useScroll } from "framer-motion";
// import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { products } from "@/data/products";
// import { resetProductTilt, updateProductTilt } from "@/lib/productTilt";

// const categories = ["All treats", "Candies", "Wafers", "Lollipops", "Toffees"];
// export default function ProductSection({ catalog = false }: { catalog?: boolean }) {
//   const [active, setActive] = useState("All treats");
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);
//   const dragged = useRef(false);
//   const hoverInterval = useRef<number | null>(null);
//   const reduce = useReducedMotion();
//   const { scrollXProgress } = useScroll({ container: sliderRef });
//   const visible = useMemo(() => active === "All treats" ? products : products.filter(p => p.category === active), [active]);

//   useEffect(() => {
//     sliderRef.current?.scrollTo({ left: 0, behavior: "smooth" });
//   }, [active]);

//   useEffect(() => () => {
//     if (hoverInterval.current !== null) window.clearInterval(hoverInterval.current);
//   }, []);


//   const moveSlider = (direction: -1 | 1) => {
//     const slider = sliderRef.current;
//     if (slider) slider.scrollBy({ left: direction * slider.clientWidth * 0.85, behavior: "smooth" });
//   };

//   const stopHoverScroll = () => {
//     if (hoverInterval.current !== null) window.clearInterval(hoverInterval.current);
//     hoverInterval.current = null;
//     sliderRef.current?.classList.remove("is-hover-scrolling");
//   };

//   const startHoverScroll = (direction: -1 | 1) => {
//     if (hoverInterval.current !== null) return;
//     sliderRef.current?.classList.add("is-hover-scrolling");
//     hoverInterval.current = window.setInterval(() => {
//       const slider = sliderRef.current;
//       if (!slider) {
//         stopHoverScroll();
//         return;
//       }

//       const maxScroll = slider.scrollWidth - slider.clientWidth;
//       const nextScroll = Math.max(0, Math.min(maxScroll, slider.scrollLeft + direction * 8));
//       if (nextScroll === slider.scrollLeft) {
//         stopHoverScroll();
//         return;
//       }

//       slider.scrollLeft = nextScroll;
//     }, 16);
//   };

//   const handleSliderKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
//     if (catalog || event.target !== event.currentTarget) return;

//     switch (event.key) {
//       case "ArrowLeft":
//         event.preventDefault();
//         moveSlider(-1);
//         break;
//       case "ArrowRight":
//         event.preventDefault();
//         moveSlider(1);
//         break;
//       case "PageUp":
//         event.preventDefault();
//         moveSlider(-1);
//         break;
//       case "PageDown":
//         event.preventDefault();
//         moveSlider(1);
//         break;
//       case "Home":
//         event.preventDefault();
//         sliderRef.current?.scrollTo({ left: 0, behavior: "smooth" });
//         break;
//       case "End":
//         event.preventDefault();
//         sliderRef.current?.scrollTo({ left: sliderRef.current.scrollWidth, behavior: "smooth" });
//         break;
//     }
//   };

//   const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
//     if (catalog || event.pointerType !== "mouse" || event.button !== 0) return;
//     dragStart.current = { x: event.clientX, scrollLeft: event.currentTarget.scrollLeft };
//     dragged.current = false;
//   };

//   const dragSlider = (event: React.PointerEvent<HTMLDivElement>) => {
//     if (!dragStart.current) return;
//     const distance = event.clientX - dragStart.current.x;
//     if (Math.abs(distance) > 5) dragged.current = true;
//     if (dragged.current) event.currentTarget.scrollLeft = dragStart.current.scrollLeft - distance;
//   };

//   const endDrag = () => {
//     dragStart.current = null;
//     if (dragged.current) window.setTimeout(() => { dragged.current = false; }, 0);
//   };

//   return <section className={`section products-section${catalog ? " catalog-section" : ""}`} id="products">
//     {!catalog && <motion.span
//       className="products-section-candy"
//       aria-hidden="true"
//       animate={reduce ? undefined : { y: [0, -13, 0, 7, 0], rotate: [-8, 8, -5, 10, -8], scale: [1, 1.04, 1] }}
//       transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
//     >
//       <svg viewBox="0 0 100 82" focusable="false">
//         <defs>
//           <linearGradient id="section-sweet-pink" x1="0" x2="1" y1="0" y2="1">
//             <stop offset="0" stopColor="#fff0f5" />
//             <stop offset=".48" stopColor="#f7a9c5" />
//             <stop offset="1" stopColor="#e96f9e" />
//           </linearGradient>
//           <linearGradient id="section-sweet-wrap-pink" x1="0" x2="1" y1="0" y2="1">
//             <stop offset="0" stopColor="#ffdce8" />
//             <stop offset="1" stopColor="#f08bb0" />
//           </linearGradient>
//         </defs>
//         <path d="m28 25-22-12 5 20-5 20 23-13m44-35 22 12-5 20 5 20-23-13" fill="url(#section-sweet-wrap-pink)" stroke="#cf4f7c" strokeWidth="2.5" strokeLinejoin="round" />
//         <path d="m11 16 13 9m-13 22 13-7m52-24L63 25m13 22-13-7" fill="none" stroke="#fff4f8" strokeWidth="3" strokeLinecap="round" opacity=".95" />
//         <rect x="22" y="15" width="56" height="48" rx="22" fill="url(#section-sweet-pink)" stroke="#cf4f7c" strokeWidth="2.5" />
//         <path d="M32 22c8-6 28-7 37-1" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".75" />
//         <circle cx="41" cy="39" r="4.3" fill="#26384a" />
//         <circle cx="60" cy="39" r="4.3" fill="#26384a" />
//         <circle cx="42" cy="37.5" r="1.3" fill="#fff" />
//         <circle cx="61" cy="37.5" r="1.3" fill="#fff" />
//         <ellipse cx="33" cy="48" rx="5" ry="3" fill="#ff9db1" opacity=".8" />
//         <ellipse cx="68" cy="48" rx="5" ry="3" fill="#ff9db1" opacity=".8" />
//         <path d="M45 48q5 7 11 0" fill="none" stroke="#26384a" strokeWidth="2.7" strokeLinecap="round" />
//         <circle cx="31" cy="29" r="2" fill="#fff" opacity=".9" />
//         <circle cx="69" cy="28" r="1.6" fill="#fff" opacity=".8" />
//       </svg>
//     </motion.span>}
//     <motion.div className="section-heading-row" data-reveal="left" initial={false} whileInView={reduce ? undefined : { y: [16, 0] }} viewport={{ once: true, amount: .35 }} transition={{ duration: .6, ease: [.22, 1, .36, 1] }}><div><div className="eyebrow"> Find your happy</div><h2>Small treats.<br /><span>Big feelings.</span></h2></div><p data-reveal="right">There&apos;s a flavour for every mood, a little surprise for every moment. Find your next favourite.</p></motion.div>
//     <motion.div className="product-controls-row" data-reveal="right" initial={false} whileInView={reduce ? undefined : { y: [12, 0] }} viewport={{ once: true, amount: .35 }} transition={{ duration: .55, ease: [.22, 1, .36, 1], delay: .08 }}>
//       <div className="filter-row" aria-label="Filter products by category">{categories.map(c => <button key={c} type="button" className={active === c ? "filter active" : "filter"} aria-pressed={active === c} onClick={() => setActive(c)}>{c}</button>)}</div>
//       {!catalog && <div className="product-slider-controls" aria-label="Product slider controls">
//         <button type="button" className="slider-arrow" aria-label="Show previous products" onClick={() => moveSlider(-1)}><ArrowLeft size={18} /></button>
//         <button type="button" className="slider-arrow" aria-label="Show next products" onClick={() => moveSlider(1)}><ArrowRight size={18} /></button>
//       </div>}
//     </motion.div>
//     <div className={`product-carousel-wrap${catalog ? " catalog-carousel-wrap" : ""}`}>
//       <motion.div ref={sliderRef} layout className={`product-grid${catalog ? " catalog-grid" : ""}`} data-reveal-group role="region" aria-label={catalog ? "Products" : "Products. Use the left and right arrow keys to scroll."} aria-roledescription={catalog ? undefined : "carousel"} tabIndex={0} onKeyDown={handleSliderKeyDown} onPointerDown={startDrag} onPointerMove={dragSlider} onPointerUp={endDrag} onPointerCancel={endDrag} onClickCapture={event => { if (dragged.current) { event.preventDefault(); event.stopPropagation(); } }}>
//         {visible.map((p, i) => <motion.div layout key={p.name} className="product-card-reveal" data-reveal={i % 2 === 0 ? "left" : "right"} initial={false} whileInView={reduce ? undefined : { y: [28, 0], rotate: [1, 0] }} viewport={{ once: true, amount: .2 }} transition={{ delay: (i % 4) * .09, duration: .7, ease: [.22, 1, .36, 1] }}>
//           <article className={`product-card tone-${p.color}`} role="group" aria-roledescription="slide" aria-label={`${p.name}, ${i + 1} of ${visible.length}`} onPointerMove={updateProductTilt} onPointerLeave={resetProductTilt}>
//             <Link href={`/products/${p.slug}`} className="product-card-link" aria-label={`Learn more about ${p.name}`}>
//               <div className="product-visual">
//                 <span className="product-category">{p.category}</span>
//                 <span className="product-sparkle" aria-hidden="true" />
//                 <span className="product-orbit" aria-hidden="true" />
//                 <Image className="product-image" src={p.image} alt={`${p.name} product`} width={600} height={600} sizes="(max-width: 760px) 82vw, 360px" />
//                 <div className="product-info">
//                   <div><h3>{p.name}</h3><p>{p.description}</p></div>
//                   <span className="product-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
//                 </div>
//               </div>
//             </Link>
//           </article>
//         </motion.div>)}
//       </motion.div>
//       {!catalog && <>
//         <button type="button" tabIndex={-1} className="product-hover-zone product-hover-zone-left" aria-label="Hover to scroll to previous products" onMouseEnter={() => startHoverScroll(-1)} onMouseLeave={stopHoverScroll}><ArrowLeft size={29} aria-hidden="true" /></button>
//         <button type="button" tabIndex={-1} className="product-hover-zone product-hover-zone-right" aria-label="Hover to scroll to next products" onMouseEnter={() => startHoverScroll(1)} onMouseLeave={stopHoverScroll}><ArrowRight size={29} aria-hidden="true" /></button>
//       </>}
//     </div>
//     {!catalog && <div className="product-scroll-progress" aria-hidden="true"><motion.span style={{ scaleX: scrollXProgress, transformOrigin: "left" }} /></div>}
//     <p className="catalogue-note" data-reveal="left">Product pack images shown for product identification; packaging may vary.</p>
//     {!catalog && <Link className="button button-dark catalog-link" data-reveal="right" href="/products">Explore all products</Link>}
//   </section>;
// }



"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { resetProductTilt, updateProductTilt } from "@/lib/productTilt";

const categories = ["All treats", "Candies", "Wafers", "Lollipops", "Toffees"];

export default function ProductSection({
  catalog = false,
}: {
  catalog?: boolean;
}) {
  const [active, setActive] = useState("All treats");

  const sliderRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);
  const dragged = useRef(false);
  const hoverInterval = useRef<number | null>(null);

  const reduce = useReducedMotion();

  const { scrollXProgress } = useScroll({
    container: sliderRef,
  });

  const visible = useMemo(
    () =>
      active === "All treats"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  );

  // Category change par slider starting position par reset hoga
  useEffect(() => {
    sliderRef.current?.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }, [active]);

  // Cleanup hover interval
  useEffect(
    () => () => {
      if (hoverInterval.current !== null) {
        window.clearInterval(hoverInterval.current);
      }
    },
    []
  );

  // INSTANT PRODUCT SLIDER NAVIGATION
  const moveSlider = (direction: -1 | 1) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const distance = slider.clientWidth * 0.85;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    const nextPosition = Math.max(
      0,
      Math.min(maxScroll, slider.scrollLeft + direction * distance)
    );

    // Instant jump without smooth animation
    slider.scrollTo({
      left: nextPosition,
      behavior: "instant",
    });
  };

  // Stop hover scrolling
  const stopHoverScroll = () => {
    if (hoverInterval.current !== null) {
      window.clearInterval(hoverInterval.current);
    }

    hoverInterval.current = null;

    sliderRef.current?.classList.remove("is-hover-scrolling");
  };

  // Hover auto scrolling
  const startHoverScroll = (direction: -1 | 1) => {
    if (hoverInterval.current !== null) return;

    sliderRef.current?.classList.add("is-hover-scrolling");

    hoverInterval.current = window.setInterval(() => {
      const slider = sliderRef.current;

      if (!slider) {
        stopHoverScroll();
        return;
      }

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      const nextScroll = Math.max(
        0,
        Math.min(maxScroll, slider.scrollLeft + direction * 8)
      );

      if (nextScroll === slider.scrollLeft) {
        stopHoverScroll();
        return;
      }

      slider.scrollLeft = nextScroll;
    }, 16);
  };

  // Keyboard navigation
  const handleSliderKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (catalog || event.target !== event.currentTarget) return;

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        moveSlider(-1);
        break;

      case "ArrowRight":
        event.preventDefault();
        moveSlider(1);
        break;

      case "PageUp":
        event.preventDefault();
        moveSlider(-1);
        break;

      case "PageDown":
        event.preventDefault();
        moveSlider(1);
        break;

      case "Home":
        event.preventDefault();
        sliderRef.current?.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        break;

      case "End":
        event.preventDefault();

        if (sliderRef.current) {
          sliderRef.current.scrollTo({
            left: sliderRef.current.scrollWidth,
            behavior: "smooth",
          });
        }
        break;
    }
  };

  // Mouse drag start
  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (catalog || event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    dragStart.current = {
      x: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    };

    dragged.current = false;
  };

  // Mouse drag movement
  const dragSlider = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;

    const distance = event.clientX - dragStart.current.x;

    if (Math.abs(distance) > 5) {
      dragged.current = true;
    }

    if (dragged.current) {
      event.currentTarget.scrollLeft =
        dragStart.current.scrollLeft - distance;
    }
  };

  // Mouse drag end
  const endDrag = () => {
    dragStart.current = null;

    if (dragged.current) {
      window.setTimeout(() => {
        dragged.current = false;
      }, 0);
    }
  };

  return (
    <section
      className={`section products-section${
        catalog ? " catalog-section" : ""
      }`}
      id="products"
    >
      {!catalog && (
        <motion.span
          className="products-section-candy"
          aria-hidden="true"
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -13, 0, 7, 0],
                  rotate: [-8, 8, -5, 10, -8],
                  scale: [1, 1.04, 1],
                }
          }
          transition={{
            duration: 4.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 82" focusable="false">
            <defs>
              <linearGradient
                id="section-sweet-pink"
                x1="0"
                x2="1"
                y1="0"
                y2="1"
              >
                <stop offset="0" stopColor="#fff0f5" />
                <stop offset=".48" stopColor="#f7a9c5" />
                <stop offset="1" stopColor="#e96f9e" />
              </linearGradient>

              <linearGradient
                id="section-sweet-wrap-pink"
                x1="0"
                x2="1"
                y1="0"
                y2="1"
              >
                <stop offset="0" stopColor="#ffdce8" />
                <stop offset="1" stopColor="#f08bb0" />
              </linearGradient>
            </defs>

            <path
              d="m28 25-22-12 5 20-5 20 23-13m44-35 22 12-5 20 5 20-23-13"
              fill="url(#section-sweet-wrap-pink)"
              stroke="#cf4f7c"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            <path
              d="m11 16 13 9m-13 22 13-7m52-24L63 25m13 22-13-7"
              fill="none"
              stroke="#fff4f8"
              strokeWidth="3"
              strokeLinecap="round"
              opacity=".95"
            />

            <rect
              x="22"
              y="15"
              width="56"
              height="48"
              rx="22"
              fill="url(#section-sweet-pink)"
              stroke="#cf4f7c"
              strokeWidth="2.5"
            />

            <path
              d="M32 22c8-6 28-7 37-1"
              fill="none"
              stroke="#fff"
              strokeWidth="4"
              strokeLinecap="round"
              opacity=".75"
            />

            <circle cx="41" cy="39" r="4.3" fill="#26384a" />
            <circle cx="60" cy="39" r="4.3" fill="#26384a" />
            <circle cx="42" cy="37.5" r="1.3" fill="#fff" />
            <circle cx="61" cy="37.5" r="1.3" fill="#fff" />

            <ellipse
              cx="33"
              cy="48"
              rx="5"
              ry="3"
              fill="#ff9db1"
              opacity=".8"
            />

            <ellipse
              cx="68"
              cy="48"
              rx="5"
              ry="3"
              fill="#ff9db1"
              opacity=".8"
            />

            <path
              d="M45 48q5 7 11 0"
              fill="none"
              stroke="#26384a"
              strokeWidth="2.7"
              strokeLinecap="round"
            />

            <circle cx="31" cy="29" r="2" fill="#fff" opacity=".9" />
            <circle cx="69" cy="28" r="1.6" fill="#fff" opacity=".8" />
          </svg>
        </motion.span>
      )}

      {/* SECTION HEADING */}
      <motion.div
        className="section-heading-row"
        data-reveal="left"
        initial={false}
        whileInView={
          reduce ? undefined : { y: [16, 0] }
        }
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div>
          <div className="eyebrow">Find your happy</div>

          <h2>
            Small treats.
            <br />
            <span>Big feelings.</span>
          </h2>
        </div>

        <p data-reveal="right">
          There&apos;s a flavour for every mood, a little surprise for every
          moment. Find your next favourite.
        </p>
      </motion.div>

      {/* PRODUCT CONTROLS */}
      <motion.div
        className="product-controls-row"
        data-reveal="right"
        initial={false}
        whileInView={
          reduce ? undefined : { y: [12, 0] }
        }
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.08,
        }}
      >
        <div className="filter-row" aria-label="Filter products by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={active === c ? "filter active" : "filter"}
              aria-pressed={active === c}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {!catalog && (
          <div
            className="product-slider-controls"
            aria-label="Product slider controls"
          >
            <button
              type="button"
              className="slider-arrow"
              aria-label="Show previous products"
              onClick={() => moveSlider(-1)}
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              className="slider-arrow"
              aria-label="Show next products"
              onClick={() => moveSlider(1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </motion.div>

      {/* PRODUCT CAROUSEL */}
      <div
        className={`product-carousel-wrap${
          catalog ? " catalog-carousel-wrap" : ""
        }`}
      >
        <motion.div
          ref={sliderRef}
          layout
          className={`product-grid${catalog ? " catalog-grid" : ""}`}
          data-reveal-group
          role="region"
          aria-label={
            catalog
              ? "Products"
              : "Products. Use the left and right arrow keys to scroll."
          }
          aria-roledescription={catalog ? undefined : "carousel"}
          tabIndex={0}
          onKeyDown={handleSliderKeyDown}
          onPointerDown={startDrag}
          onPointerMove={dragSlider}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={(event) => {
            if (dragged.current) {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        >
          {visible.map((p, i) => (
            <motion.div
              layout
              key={p.name}
              className="product-card-reveal"
              data-reveal={i % 2 === 0 ? "left" : "right"}
              initial={false}
              whileInView={
                reduce
                  ? undefined
                  : { y: [28, 0], rotate: [1, 0] }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: (i % 4) * 0.09,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <article
                className={`product-card tone-${p.color}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${p.name}, ${i + 1} of ${visible.length}`}
                onPointerMove={updateProductTilt}
                onPointerLeave={resetProductTilt}
              >
                <Link
                  href={`/products/${p.slug}`}
                  className="product-card-link"
                  aria-label={`Learn more about ${p.name}`}
                >
                  <div className="product-visual">
                    <span className="product-category">{p.category}</span>

                    <span
                      className="product-sparkle"
                      aria-hidden="true"
                    />

                    <span
                      className="product-orbit"
                      aria-hidden="true"
                    />

                    <Image
                      className="product-image"
                      src={p.image}
                      alt={`${p.name} product`}
                      width={600}
                      height={600}
                      sizes="(max-width: 760px) 82vw, 360px"
                    />

                    <div className="product-info">
                      <div>
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                      </div>

                      <span
                        className="product-arrow"
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </motion.div>
          ))}
        </motion.div>

        {/* HOVER SCROLL CONTROLS */}
        {!catalog && (
          <>
            <button
              type="button"
              tabIndex={-1}
              className="product-hover-zone product-hover-zone-left"
              aria-label="Hover to scroll to previous products"
              onMouseEnter={() => startHoverScroll(-1)}
              onMouseLeave={stopHoverScroll}
            >
              <ArrowLeft size={29} aria-hidden="true" />
            </button>

            <button
              type="button"
              tabIndex={-1}
              className="product-hover-zone product-hover-zone-right"
              aria-label="Hover to scroll to next products"
              onMouseEnter={() => startHoverScroll(1)}
              onMouseLeave={stopHoverScroll}
            >
              <ArrowRight size={29} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* SCROLL PROGRESS */}
      {!catalog && (
        <div className="product-scroll-progress" aria-hidden="true">
          <motion.span
            style={{
              scaleX: scrollXProgress,
              transformOrigin: "left",
            }}
          />
        </div>
      )}

      <p className="catalogue-note" data-reveal="left">
        Product pack images shown for product identification; packaging may
        vary.
      </p>

      {!catalog && (
        <Link
          className="button button-dark catalog-link"
          data-reveal="right"
          href="/products"
        >
          Explore all products
        </Link>
      )}
    </section>
  );
}
