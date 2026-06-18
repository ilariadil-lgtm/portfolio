import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

interface PreloaderProps {
  onComplete: () => void;
}

export const NebulaPreloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const { active, progress: realProgress } = useProgress();

  // Ref per tracciare lo stato di Drei senza far ricaricare il setInterval
  const loadingStatus = useRef({ active, realProgress });
  useEffect(() => {
    loadingStatus.current = { active, realProgress };
  }, [active, realProgress]);

  useEffect(() => {
    // Rimosso check prefers-reduced-motion per garantire che l'animazione funzioni sempre

    let current = 0;
    const interval = setInterval(() => {
      const status = loadingStatus.current;
      let next = current + Math.floor(Math.random() * 8) + 2;

      // Se le risorse 3D stanno ancora caricando, cappiamo l'animazione finta al 90%
      // a meno che il realProgress non sia superiore
      if (status.active && next > 90) {
        next = 90;
      }

      if (status.realProgress > next) {
        next = Math.floor(status.realProgress);
      }

      if (next >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsExiting(true), 800);
      } else {
        current = next;
        setProgress(current);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          key="nebula-preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-start pt-64 md:justify-center md:pt-0 bg-[#020202] overflow-hidden"
        >
          {/* Subtle noise */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
            style={{ mixBlendMode: "overlay" }}
          />

          <div className="relative z-20 w-full px-8 md:px-24 flex flex-col items-center justify-start md:justify-center h-full">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center text-center mb-16"
            >
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4af37] mb-6">
                ogni pixel conta.
              </span>
              <div className="flex items-baseline gap-x-3 md:gap-x-4">
                <span className="font-bricolage font-bold text-5xl md:text-7xl lg:text-[clamp(2rem,7vw,7rem)] tracking-wider text-white">
                  ilaria
                </span>
                <span className="font-fraunces italic font-light text-5xl md:text-7xl lg:text-[clamp(2rem,7vw,7rem)] tracking-wider text-[#d4af37] pr-2">
                  diliberto.
                </span>
              </div>
            </motion.div>

            <div className="w-full max-w-xs md:max-w-md flex flex-col gap-4">
              <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/70">
                <span>Loading Assets</span>
                <span className="text-white font-bold">{progress}%</span>
              </div>

              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#d4af37]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "linear" }}
                />
              </div>
            </div>
          </div>

          {/* Minimal branding */}
          <motion.div
            className="absolute bottom-10 flex justify-between w-full px-8 md:px-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hidden md:inline">
              Inizializzazione del sistema
            </span>
            <span>PORTFOLIO © 2026</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
