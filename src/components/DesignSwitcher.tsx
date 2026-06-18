import React, { useState, useEffect } from "react";
import { useDesign } from "../context/DesignContext";
import { Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const DesignSwitcher = () => {
  const { design, toggleDesign } = useDesign();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem("hasSeenSwitcherTooltip");
    if (!hasSeenTooltip) {
      // Small delay so it appears smoothly after page load
      const timer = setTimeout(() => {
        setShowTooltip(true);
        // Auto-hide after 5 seconds to prevent overlapping content permanently on mobile
        setTimeout(() => {
          setShowTooltip(false);
          localStorage.setItem("hasSeenSwitcherTooltip", "true");
        }, 5000);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClick = () => {
    if (showTooltip) {
      setShowTooltip(false);
      localStorage.setItem("hasSeenSwitcherTooltip", "true");
    }
    toggleDesign();
  };

  return (
    <div
      className={`fixed z-[100] ${design === "editorial" ? "bottom-6 left-6 md:bottom-8 md:left-8" : "top-6 right-6 lg:top-auto lg:bottom-8 lg:right-8"}`}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className={`absolute whitespace-nowrap px-4 py-2 rounded-lg shadow-2xl backdrop-blur-md pointer-events-none ${
              design === "editorial"
                ? "bottom-full left-0 mb-4 bg-primary text-background border border-primary/20"
                : "top-full lg:bottom-full lg:top-auto right-0 mt-4 lg:mb-4 lg:mt-0 bg-white/10 text-white border border-white/20"
            }`}
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
              </span>
              Cambia tema
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleClick}
        className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-500 shadow-2xl group ${
          design === "editorial"
            ? "bg-primary text-background border-primary/20 hover:bg-[#080808] hover:text-[#d4af37] hover:scale-105"
            : "bg-white/10 text-white border-white/20 backdrop-blur-xl hover:bg-white hover:text-black hover:scale-105"
        }`}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {design === "editorial" ? (
            <Sparkles
              size={18}
              className="animate-in fade-in zoom-in duration-500 group-hover:text-[#d4af37] transition-colors"
            />
          ) : (
            <BookOpen
              size={18}
              className="animate-in fade-in zoom-in duration-500 group-hover:text-black transition-colors"
            />
          )}
        </div>
        <span
          className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden max-w-0 group-hover:max-w-[180px] transition-all duration-500 whitespace-nowrap px-0 group-hover:px-1 ${
            design === "editorial"
              ? "group-hover:text-[#d4af37]"
              : "text-white/80 group-hover:text-black"
          }`}
        >
          {design === "editorial" ? "PASSA A NEBULA" : "PASSA A EDITORIAL"}
        </span>
      </button>
    </div>
  );
};
