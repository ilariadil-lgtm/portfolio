import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";

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
        <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-neutral-500/5 to-white/10 blur-2xl opacity-50 rounded-[3rem]" />
        
        {/* Superhuman Glass Card */}
        <div className="relative rounded-[2.5rem] bg-white/[0.04] border border-white/[0.12] backdrop-blur-3xl shadow-[0_24px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] p-12 md:p-20 overflow-hidden flex flex-col items-center text-center">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">ORA TOCCA A TE</span>
          </div>

          <h2 className="font-sans text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-8 max-w-3xl">
            Costruiamo qualcosa <br /> di <span className="font-light italic text-white">unico.</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mb-12">
            Hai un'idea per una web app, un design system personalizzato o un e-commerce ad alte prestazioni? Inizializza il protocollo per concretizzare la tua visione digitale.
          </p>
          
          <Link 
            to="/contatti" 
            className="px-8 py-4 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_10px_20px_rgba(0,0,0,0.4)] text-white font-sans font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Terminal size={18} />
              INIZIALIZZA PROTOCOLLO
            </span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </motion.div>
    </section>
  );
};
