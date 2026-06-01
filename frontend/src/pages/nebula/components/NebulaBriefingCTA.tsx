import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";

export const NebulaBriefingCTA = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative z-20 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="w-full max-w-6xl relative"
      >
        {/* Glow effect behind the card */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/5 via-white/5 to-[#d4af37]/5 blur-2xl opacity-50 rounded-none" />
        
        {/* Editorial Glass Card */}
        <div className="relative rounded-none bg-[#020202]/80 border-t border-[#d4af37]/20 p-12 md:p-20 flex flex-col items-center text-center">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#d4af37]">ORA TOCCA A TE</span>
          </div>

          <RevealText 
            text="Costruiamo qualcosa di unico." 
            className="font-space text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white mb-8 max-w-3xl uppercase" 
          />
          
          <p className="font-inter text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-2xl mb-12">
            Hai un'idea per una web app, un design system personalizzato o un e-commerce ad alte prestazioni? Inizializza il protocollo per concretizzare la tua visione digitale.
          </p>
          
          <MagneticWrapper>
            <Link 
              to="/contatti" 
              className="group px-8 py-4 border border-[#d4af37]/30 bg-transparent text-[#d4af37] font-mono uppercase tracking-widest font-bold text-xs hover:bg-[#d4af37]/10 transition-colors flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Terminal size={18} />
                INIZIALIZZA PROTOCOLLO
              </span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </Link>
          </MagneticWrapper>

        </div>
      </motion.div>
    </section>
  );
};
