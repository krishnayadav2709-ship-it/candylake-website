// 

"use client";

import { useEffect, useRef, type ReactNode } from "react";
import "./ScrollReveal.css";

export default function ScrollReveal({
  children,
}: {
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reduceMotion.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          if (element.hasAttribute("data-reveal")) {
            const group = element.closest<HTMLElement>(
              "[data-reveal-group]"
            );

            const groupItems = group
              ? Array.from(
                  group.querySelectorAll<HTMLElement>("[data-reveal]")
                )
              : [element];

            const index = groupItems.indexOf(element);

            const stagger = Math.min(index * 110, 440);

            element.style.transitionDelay = `${stagger}ms`;

            element.classList.add("reveal-visible");
          }

          if (element.hasAttribute("data-reveal-image")) {
            element.classList.add("reveal-image-visible");
          }

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    const registerTargets = () => {
      const targets = container.querySelectorAll<HTMLElement>(
        [
          "[data-reveal]:not(.reveal-observed)",
          "[data-reveal-image]:not(.reveal-observed)",
        ].join(",")
      );

      targets.forEach((target) => {
        target.classList.add("reveal-observed");
        observer.observe(target);
      });
    };

    container.classList.add("scroll-reveal-ready");

    registerTargets();

    const mutationObserver = new MutationObserver(() => {
      registerTargets();
    });

    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      container.classList.remove("scroll-reveal-ready");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="scroll-reveal-container"
    >
      {children}
    </div>
  );
}