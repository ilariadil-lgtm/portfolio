import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 w-[1px] h-[30vh] bg-white/[0.05] z-50 pointer-events-none hidden md:block">
      <motion.div
        className="w-[2px] bg-[#d4af37] origin-top shadow-[0_0_15px_rgba(212,175,55,0.8)] -translate-x-[0.5px]"
        style={{ scaleY, height: "100%" }}
      />
      <div className="absolute top-0 -translate-y-full -translate-x-[4px] font-mono text-[8px] text-[#d4af37]/50 uppercase tracking-[0.3em] mb-4">
        Start
      </div>
      <div className="absolute bottom-0 translate-y-full -translate-x-[4px] font-mono text-[8px] text-[#d4af37]/50 uppercase tracking-[0.3em] mt-4">
        End
      </div>
    </div>
  );
};
