import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface Phase {
  num?: string;
  id?: string;
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  image?: string;
}

interface NebulaProjectPhasesProps {
  phases: Phase[];
}

export const NebulaProjectPhases = ({ phases }: NebulaProjectPhasesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!phases || phases.length === 0) return null;

  return (
    <div className="w-full relative z-10 pt-16 pb-8">
      <div className="mb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">IL PROCESSO</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation List */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {phases.map((phase, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left py-4 px-5 rounded-2xl transition-all duration-500 relative flex items-center justify-between overflow-hidden group ${
                  isActive 
                    ? "border border-[#d4af37]/40 bg-gradient-to-r from-[#d4af37]/10 to-transparent shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]" 
                    : "border border-white/5 bg-black/20 hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-5">
                  <span className={`font-fraunces italic font-light text-xl transition-colors duration-300 ${
                    isActive ? "text-[#d4af37]" : "text-white/30 group-hover:text-white/60"
                  }`}>
                    {phase.num || phase.id}
                  </span>
                  <span className={`font-bricolage font-bold tracking-tight text-lg transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/50 group-hover:text-white"
                  }`}>
                    {phase.title}
                  </span>
                </div>
                <ChevronRight size={16} className={`transition-all duration-500 ${
                  isActive ? "text-[#d4af37] opacity-100 translate-x-0" : "text-white/20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Display Panel */}
        <div className="lg:col-span-7 flex items-stretch min-h-[450px]">
          <div className="w-full p-8 md:p-12 border border-white/5 bg-black/40 backdrop-blur-xl relative overflow-hidden flex flex-col justify-center rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            
            <div className="absolute top-0 left-0 w-full h-8 border-b border-white/5 flex items-center px-4 justify-end bg-white/[0.01]">
              <span className="font-mono text-[8px] uppercase tracking-widest text-white/30">
                FASE {activeIndex + 1}
              </span>
            </div>

            {/* Background grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.03)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none mt-8" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, filter: "blur(10px)", x: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full h-full flex flex-col mt-4"
              >
                {phases[activeIndex].subtitle && (
                  <h3 className="font-fraunces italic font-light text-2xl md:text-3xl text-white mb-6 leading-tight">
                    {phases[activeIndex].subtitle}
                  </h3>
                )}
                
                <div className="font-outfit font-light text-white/70 text-base md:text-lg leading-relaxed space-y-4">
                  {phases[activeIndex].description}
                </div>

                {phases[activeIndex].image && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 rounded-xl overflow-hidden border border-white/10 relative group"
                  >
                    <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img 
                      src={phases[activeIndex].image} 
                      alt={phases[activeIndex].title}
                      className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                )}


              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
