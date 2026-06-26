import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface Phase {
  num?: string;
  id?: string;
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  image?: string | string[];
  objectPosition?: string;
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
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
          IL PROCESSO
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation List */}
        <div className="lg:col-span-4 flex flex-col gap-0 border-t border-white/10">
          {phases.map((phase, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left py-6 transition-all duration-500 relative flex items-center justify-between group border-b border-white/10 ${
                  isActive
                    ? "bg-gradient-to-r from-[#d4af37]/5 to-transparent px-4"
                    : "hover:px-4 hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`font-fraunces italic font-light text-2xl md:text-3xl transition-colors duration-300 ${
                      isActive
                        ? "text-[#d4af37]"
                        : "text-white/20 group-hover:text-[#d4af37]/70"
                    }`}
                  >
                    {phase.num || phase.id}
                  </span>
                  <span
                    className={`font-bricolage font-medium tracking-tight text-xl transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/50 group-hover:text-white"
                    }`}
                  >
                    {phase.title}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className={`transition-all duration-500 ${
                    isActive
                      ? "text-[#d4af37] opacity-100 translate-x-0"
                      : "text-white/20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Display Panel */}
        <div className="lg:col-span-8 flex items-stretch ">
          <div className="w-full lg:pl-12 py-6 relative flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full h-full flex flex-col"
              >
                {phases[activeIndex].subtitle && (
                  <h3 className="font-fraunces italic font-light text-3xl md:text-4xl text-[#d4af37] mb-8 leading-tight pr-2">
                    {phases[activeIndex].subtitle}
                  </h3>
                )}

                <div className="font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
                  {phases[activeIndex].description}
                </div>

                {phases[activeIndex].image && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`mt-10 ${Array.isArray(phases[activeIndex].image) && phases[activeIndex].image.length > 1 ? "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar" : "block"}`}
                  >
                    {Array.isArray(phases[activeIndex].image) ? (
                      phases[activeIndex].image.map((img, i) => (
                        <div
                          key={i}
                          className="shrink-0 w-[85%] md:w-[65%] snap-center rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl flex flex-col aspect-[4/3] md:aspect-[16/10] relative group"
                        >
                          {/* Browser Bar */}
                          <div className="h-6 md:h-8 bg-[#151515] border-b border-white/5 flex items-center px-3 md:px-4 shrink-0 z-20">
                            <div className="flex gap-1.5 md:gap-2">
                              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#ff5f56]" />
                              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#ffbd2e]" />
                              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                          </div>
                          {/* Screen */}
                          <div className="flex-1 relative overflow-hidden bg-black">
                            <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                            <img
                              src={img}
                              alt={`${phases[activeIndex].title} ${i + 1}`}
                              className={`absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 ${phases[activeIndex].objectPosition || "object-top"}`}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl flex flex-col aspect-[4/3] md:aspect-[16/10] relative group">
                        {/* Browser Bar */}
                        <div className="h-8 md:h-10 bg-[#151515] border-b border-white/5 flex items-center px-4 gap-2 shrink-0 z-20">
                          <div className="flex gap-1.5 md:gap-2">
                            <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-[#27c93f]" />
                          </div>
                          <div className="flex-1 ml-4 bg-white/5 rounded-md h-5 md:h-6 flex items-center px-3 max-w-[200px]">
                            <span className="text-[9px] md:text-[10px] text-white/30 font-mono tracking-wider truncate">
                              {phases[activeIndex].title.toLowerCase()}.design
                            </span>
                          </div>
                        </div>
                        {/* Screen */}
                        <div className="flex-1 relative overflow-hidden bg-black">
                          <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                          <img
                            src={phases[activeIndex].image as string}
                            alt={phases[activeIndex].title}
                            className={`absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 ${phases[activeIndex].objectPosition || "object-top"}`}
                          />
                        </div>
                      </div>
                    )}
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
