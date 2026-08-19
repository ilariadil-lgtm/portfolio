import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

interface NebulaImageSliderProps {
  images: string[];
}

export const NebulaImageSlider = ({ images }: NebulaImageSliderProps) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current && containerRef.current) {
        // Calcola quanto può scorrere: larghezza totale del contenuto meno larghezza del contenitore visibile
        const scrollWidth =
          sliderRef.current.scrollWidth - containerRef.current.offsetWidth;
        setSliderWidth(scrollWidth > 0 ? scrollWidth : 0);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    // Piccola latenza per assicurare che le immagini siano state caricate/renderizzate
    setTimeout(updateWidth, 200);

    return () => window.removeEventListener("resize", updateWidth);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="w-full relative overflow-hidden py-4 cursor-grab active:cursor-grabbing"
      ref={containerRef}
    >
      <motion.div
        ref={sliderRef}
        className="flex gap-6 md:gap-8 w-max px-6 md:px-12"
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
        dragElastic={0.15}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-[85vw] md:w-[60vw] lg:w-[50vw] flex-shrink-0 rounded-2xl overflow-hidden bg-[#050505] border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative group pointer-events-none"
          >
            <div className="h-6 md:h-8 bg-[#151515] border-b border-white/5 flex items-center px-3 md:px-4 shrink-0 z-20">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#27c93f]" />
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden bg-black">
              <div className="absolute inset-0 bg-white/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img loading="lazy" decoding="async"
                src={src}
                alt={`Project Gallery Image ${idx}`}
                className="w-full aspect-[4/3] md:aspect-video object-cover object-top transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
