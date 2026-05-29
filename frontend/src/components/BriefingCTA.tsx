import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";

export const BriefingCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#3d0f1a] text-[#f5f2ed] relative overflow-hidden border-t border-[#f5f2ed]/5">
      {/* Background Subtle Grid/Dots or Radials */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f5f2ed 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Glow Effect */}
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text block containing title & narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-typewriter text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#f5f2ed]/50 font-bold block">
              ORA TOCCA A TE
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-none tracking-tighter text-[#f5f2ed]">
              <RevealText text="Costruiamo" delay={0.1} />
              <RevealText text="qualcosa di unico." delay={0.3} className="text-primary italic" />
            </h2>
            <p className="font-body text-lg text-[#f5f2ed]/70 leading-relaxed max-w-xl">
              Hai un'idea per una web app, un design system personalizzato o un e-commerce ad alte prestazioni? Colleghiamo le nostre stazioni per concretizzare la tua visione digitale.
            </p>
          </div>

          {/* Right Column: CTA Button trigger */}
          <div className="lg:col-span-5 flex lg:justify-end justify-start items-center">
            <MagneticWrapper strength={20} className="w-full max-w-md">
              <Link
                to="/contatti"
                data-cursor="pointer"
                className="group inline-flex items-center gap-8 p-8 border border-white/10 bg-[#f5f2ed] shadow-[6px_6px_0px_#c0392b] md:shadow-[10px_10px_0px_#c0392b] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#c0392b] md:hover:shadow-[15px_15px_0px_#c0392b] transition-all duration-300 w-full justify-between"
              >
                <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-[#3d0f1a] font-bold group-hover:text-primary transition-colors">
                  PARLIAMONE
                </span>
                <ArrowRight size={18} className="text-[#3d0f1a] group-hover:text-primary group-hover:translate-x-4 transition-all duration-500" />
              </Link>
            </MagneticWrapper>
          </div>
          
        </div>
      </div>
    </section>
  );
};
