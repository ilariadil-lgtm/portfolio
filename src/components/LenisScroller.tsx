import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useLocation } from "react-router-dom";

interface LenisScrollerProps {
  children: React.ReactNode;
}

export const LenisScroller: React.FC<LenisScrollerProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname } = useLocation();

  // Su touch device il browser gestisce lo scroll nativo meglio di Lenis
  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    // Su touch device non inizializzare Lenis — lascia lo scroll nativo
    if (isTouchDevice) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva cinematica
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Magnetic Scroll Snapping (Awwwards Style)
    let isSnapping = false;
    let snapTimeout: NodeJS.Timeout | null = null;

    lenis.on("scroll", () => {
      if (isSnapping) return;

      if (snapTimeout) clearTimeout(snapTimeout);

      // Debounce: wait 150ms after the last scroll event to snap
      snapTimeout = setTimeout(() => {
        const sections = document.querySelectorAll(".snap-start");
        let closestSection: Element | null = null;
        let minDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          // Magnet radius: 45% of viewport height
          if (
            distance < minDistance &&
            distance < window.innerHeight * 0.45 &&
            distance > 5
          ) {
            minDistance = distance;
            closestSection = section;
          }
        });

        if (closestSection) {
          isSnapping = true;
          lenis.scrollTo(closestSection, {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            onComplete: () => {
              setTimeout(() => {
                isSnapping = false;
              }, 50);
            },
          });
        }
      }, 150);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (snapTimeout) clearTimeout(snapTimeout);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isTouchDevice]);

  // Al cambio pagina, forza lo scroll in cima
  useEffect(() => {
    if (lenisRef.current) {
      // Desktop: usa Lenis per scroll immediato
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      // Mobile: scroll nativo
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return <>{children}</>;
};
