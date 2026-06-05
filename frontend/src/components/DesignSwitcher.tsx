import React from "react";
import { useDesign } from "../context/DesignContext";
import { Sparkles, PenTool } from "lucide-react";

export const DesignSwitcher = () => {
  const { design, toggleDesign } = useDesign();

  return (
    <button
      onClick={toggleDesign}
      className={`fixed z-[100] flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-500 shadow-2xl group ${
        design === "editorial"
          ? "bottom-6 left-6 md:bottom-8 md:left-8 bg-primary text-primary-foreground border-primary/20 hover:scale-105"
          : "top-6 right-6 lg:top-auto lg:bottom-8 lg:right-8 bg-white/10 text-white border-white/20 backdrop-blur-xl hover:bg-white/20 hover:border-[#d4af37]/50 hover:scale-105"
      }`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {design === "editorial" ? (
          <Sparkles size={18} className="animate-in fade-in zoom-in duration-500" />
        ) : (
          <PenTool size={18} className="animate-in fade-in zoom-in duration-500 text-[#d4af37]" />
        )}
      </div>
      <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-500 whitespace-nowrap px-0 group-hover:px-1 ${
        design === "editorial" ? "text-primary-foreground" : "text-white/80 group-hover:text-white"
      }`}>
        {design === "editorial" ? "SWITCH TO NEBULA" : "SWITCH TO EDITORIAL"}
      </span>
    </button>
  );
};
