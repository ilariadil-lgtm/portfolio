import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ScrollIndicatorProps {
  sections: string[];
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  sections,
}) => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Calculate active section based on scroll progress and number of sections
      const sectionsCount = sections.length - 1 || 1;
      const index = Math.min(
        sectionsCount,
        Math.max(0, Math.round(latest * sectionsCount)),
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, sections.length]);

  return (
    <div className="fixed right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 w-[1px] h-[40vh] min-h-[300px] bg-white/[0.05] z-50 pointer-events-none hidden md:block">
      <div className="absolute top-0 -translate-y-8 left-1/2 -translate-x-1/2 font-mono text-[8px] text-gold uppercase tracking-[0.4em] font-medium whitespace-nowrap opacity-60">
        {t("scroll.start", "START")}
      </div>

      <motion.div
        className="absolute top-0 left-0 w-[1px] bg-gold origin-top shadow-[0_0_8px_rgba(212,175,55,0.4)]"
        style={{ scaleY, height: "100%" }}
      />

      {/* Snap Points */}
      {sections.map((sec, i) => (
        <div
          key={sec}
          className="absolute left-1/2 w-2 h-2 rounded-full transition-all duration-300"
          style={{
            top: `${(i / Math.max(1, sections.length - 1)) * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`w-full h-full rounded-full transition-all duration-300 ${activeIndex >= i ? "bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] scale-100" : "bg-gold/20 scale-50"}`}
          />

          {/* Label */}
          <div
            className={`absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[8px] tracking-[0.3em] transition-all duration-500 whitespace-nowrap ${activeIndex === i ? "opacity-100 text-gold translate-x-0" : "opacity-0 text-white/50 translate-x-2"}`}
          >
            {sec}
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 translate-y-8 left-1/2 -translate-x-1/2 font-mono text-[8px] text-gold uppercase tracking-[0.4em] font-medium whitespace-nowrap opacity-60">
        {t("scroll.end", "END")}
      </div>
    </div>
  );
};
