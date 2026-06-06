import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(5, Math.max(0, Math.round(latest * 5)));
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const sections = ["HERO", "ABOUT", "WORK", "METRICS", "SKILLS", "CONTACT"];

  return (
    <div className="fixed right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 w-[1px] h-[40vh] min-h-[300px] bg-white/[0.05] z-50 pointer-events-none hidden md:block">
      
      <div className="absolute top-0 -translate-y-8 left-1/2 -translate-x-1/2 font-mono text-[8px] text-[#d4af37] uppercase tracking-[0.4em] font-medium whitespace-nowrap opacity-60">
        INIZIO
      </div>

      <motion.div
        className="absolute top-0 left-0 w-[1px] bg-[#d4af37] origin-top shadow-[0_0_8px_rgba(212,175,55,0.4)]"
        style={{ scaleY, height: "100%" }}
      />
      
      {/* Snap Points */}
      {sections.map((sec, i) => (
        <div 
          key={sec}
          className="absolute left-1/2 w-2 h-2 rounded-full transition-all duration-300"
          style={{ top: `${(i / 5) * 100}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className={`w-full h-full rounded-full transition-all duration-300 ${activeIndex >= i ? 'bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)] scale-100' : 'bg-[#d4af37]/20 scale-50'}`} />
          
          {/* Label */}
          <div className={`absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[8px] tracking-[0.3em] transition-all duration-500 whitespace-nowrap ${activeIndex === i ? 'opacity-100 text-[#d4af37] translate-x-0' : 'opacity-0 text-white/40 translate-x-2'}`}>
            {sec}
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 translate-y-8 left-1/2 -translate-x-1/2 font-mono text-[8px] text-[#d4af37] uppercase tracking-[0.4em] font-medium whitespace-nowrap opacity-60">
        FINE
      </div>
      
    </div>
  );
};
