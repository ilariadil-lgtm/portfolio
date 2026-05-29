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

    return () => {
      cancelAnimationFrame(rafId);
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
