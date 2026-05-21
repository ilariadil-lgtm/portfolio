import React from "react";
import { useDesign } from "../context/DesignContext";
import { Sparkles, PenTool } from "lucide-react";

export const DesignSwitcher = () => {
  const { design, toggleDesign } = useDesign();

  return (
    <button
      onClick={toggleDesign}
      className={`fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-500 shadow-2xl group ${
        design === "editorial"
          ? "bg-primary text-primary-foreground border-primary/20 hover:scale-105"
          : "bg-white/10 text-white border-white/20 backdrop-blur-xl hover:bg-white/20 hover:scale-105"
      }`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {design === "editorial" ? (
          <PenTool size={18} className="animate-in fade-in zoom-in duration-500" />
        ) : (
          <Sparkles size={18} className="animate-in fade-in zoom-in duration-500 text-emerald-400" />
        )}
      </div>
      <span className="font-sans text-xs font-bold uppercase tracking-widest overflow-hidden max-w-0 group-hover:max-w-[120px] transition-all duration-500 whitespace-nowrap px-0 group-hover:px-1">
        {design === "editorial" ? "Switch to Glass" : "Switch to Editorial"}
      </span>
    </button>
  );
};
