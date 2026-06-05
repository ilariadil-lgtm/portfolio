import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";

import { useTranslation } from "react-i18next";

export const NebulaBriefingCTA = () => {
  const { t } = useTranslation();
  return (
    <section className="relative z-20 w-full border-t border-white/10 px-6 md:px-12 lg:px-24 py-32 snap-start">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12 relative"
      >
        <div className="flex-1 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-8 block">
            {t('cta.subtitle', '05 — ORA TOCCA A TE')}
          </span>

          <h2 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            {t('cta.title_1', 'Costruiamo')} <span className="font-fraunces text-[#d4af37] italic font-light tracking-wide">{t('cta.title_2', 'qualcosa di unico.')}</span>
          </h2>
          
          <p className="font-inter text-base md:text-lg text-white/50 leading-relaxed font-light mb-0 max-w-2xl">
            {t('cta.description')}
          </p>
        </div>
        
        <div className="flex-shrink-0 mb-2">
          <MagneticWrapper>
            <Link to="/contatti" className="group inline-flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white hover:text-[#d4af37] transition-colors duration-300">
              <span className="relative overflow-hidden">
                {t('cta.button')}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4af37] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </MagneticWrapper>
        </div>
      </motion.div>
    </section>
  );
};
