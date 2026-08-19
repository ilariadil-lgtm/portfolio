import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { RevealText } from "@/components/RevealText";

export const NebulaPackagesSection = () => {
  const { t } = useTranslation();
  return (
    <>
    {/* ───────────────────────────────────────────────────────────────────
             ECOSISTEMI SU MISURA (LE TRE PORTE - NEBULA EDITION) 
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 md:px-12 lg:px-24 py-32 relative z-20"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-white/10 pb-10">
              <div className="md:w-[60%]">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold block">
                    03 — I MIEI SERVIZI
                  </span>
                </div>
                <div className="flex flex-col">
                  <RevealText
                    text={t("index.home_pkg_title").split(" ")[0]}
                    className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
                  />
                  <RevealText
                    text={t("index.home_pkg_title").split(" ").slice(1).join(" ")}
                    delay={0.1}
                    className="font-fraunces text-4xl md:text-5xl lg:text-6xl italic font-light tracking-tight text-gold"
                  />
                </div>
              </div>
              <div className="md:w-[40%] flex justify-start md:justify-end">
                <p className="font-inter text-sm text-white/60 max-w-sm font-light leading-relaxed">
                  {t("index.home_pkg_subtitle")}
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Porta 1 */}
              <div className="h-full relative border border-white/5 p-8 md:p-10 bg-white/[0.02] backdrop-blur-md hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-700 flex flex-col group overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
                <div className="absolute -bottom-4 -right-2 font-bricolage text-[140px] leading-none font-black text-white/[0.04] group-hover:text-gold/[0.08] transition-colors duration-500 select-none pointer-events-none z-0">
                  01
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8 group-hover:border-gold/20 transition-colors duration-500">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      {t("index.home_pkg1_num")}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 bg-white/[0.02] group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                      <span className="font-bricolage font-black text-xl">1</span>
                    </div>
                  </div>

                  <h3 className="font-bricolage text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {t("index.home_pkg1_title").split(" ")[0]} <br /><span className="italic font-fraunces font-light text-gold">{t("index.home_pkg1_title").split(" ").slice(1).join(" ")}</span>
                  </h3>
                  
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/80 font-bold leading-relaxed mb-6">
                    {t("index.home_pkg1_tagline")}
                  </p>
                  <p className="font-outfit text-[15px] text-white/60 leading-relaxed flex-1 mb-12">
                    {t("index.home_pkg1_desc")}
                  </p>
                  
                  <div className="pt-8 border-t border-white/5 mt-auto">
                    <Link
                      to="/sviluppo-cms"
                      className="group/btn inline-flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-gold transition-colors"
                    >
                      <span className="relative overflow-hidden">
                        {t("index.home_pkg1_btn")}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-gold group-hover/btn:text-gold transition-all duration-500">
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Porta 2 */}
              <div className="h-full relative border border-white/5 p-8 md:p-10 bg-white/[0.02] backdrop-blur-md hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-700 flex flex-col group overflow-hidden rounded-3xl" style={{ transitionDelay: "150ms" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
                <div className="absolute -bottom-4 -right-2 font-bricolage text-[140px] leading-none font-black text-white/[0.04] group-hover:text-gold/[0.08] transition-colors duration-500 select-none pointer-events-none z-0">
                  02
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8 group-hover:border-gold/20 transition-colors duration-500">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      {t("index.home_pkg2_num")}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 bg-white/[0.02] group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                      <span className="font-bricolage font-black text-xl">2</span>
                    </div>
                  </div>

                  <h3 className="font-bricolage text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {t("index.home_pkg2_title").split(" ")[0]} <br /><span className="italic font-fraunces font-light text-gold">{t("index.home_pkg2_title").split(" ").slice(1).join(" ")}</span>
                  </h3>
                  
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/80 font-bold leading-relaxed mb-6">
                    {t("index.home_pkg2_tagline")}
                  </p>
                  <p className="font-outfit text-[15px] text-white/60 leading-relaxed flex-1 mb-12">
                    {t("index.home_pkg2_desc")}
                  </p>
                  
                  <div className="pt-8 border-t border-white/5 mt-auto">
                    <Link
                      to="/sviluppo-mvp"
                      className="group/btn inline-flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-gold transition-colors"
                    >
                      <span className="relative overflow-hidden">
                        {t("index.home_pkg2_btn")}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-gold group-hover/btn:text-gold transition-all duration-500">
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Porta 3 */}
              <div className="h-full relative border border-white/5 p-8 md:p-10 bg-white/[0.02] backdrop-blur-md hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-700 flex flex-col group overflow-hidden rounded-3xl" style={{ transitionDelay: "300ms" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />
                <div className="absolute -bottom-4 -right-2 font-bricolage text-[140px] leading-none font-black text-white/[0.04] group-hover:text-gold/[0.08] transition-colors duration-500 select-none pointer-events-none z-0">
                  03
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8 group-hover:border-gold/20 transition-colors duration-500">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      {t("index.home_pkg3_num")}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 bg-white/[0.02] group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                      <span className="font-bricolage font-black text-xl">3</span>
                    </div>
                  </div>

                  <h3 className="font-bricolage text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {t("index.home_pkg3_title").split(" ")[0]} <br /><span className="italic font-fraunces font-light text-gold">{t("index.home_pkg3_title").split(" ").slice(1).join(" ")}</span>
                  </h3>
                  
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/80 font-bold leading-relaxed mb-6">
                    {t("index.home_pkg3_tagline")}
                  </p>
                  <p className="font-outfit text-[15px] text-white/60 leading-relaxed flex-1 mb-12">
                    {t("index.home_pkg3_desc")}
                  </p>
                  
                  <div className="pt-8 border-t border-white/5 mt-auto">
                    <Link
                      to="/sviluppo-custom"
                      className="group/btn inline-flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-gold transition-colors"
                    >
                      <span className="relative overflow-hidden">
                        {t("index.home_pkg3_btn")}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-gold group-hover/btn:text-gold transition-all duration-500">
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* MARQUEE STRIP — tra Skills e Progetti */}
        <div className="w-full overflow-hidden border-y border-white/5 py-5 relative z-20">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-12 flex-shrink-0"
              >
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/50">
                  UX ARCHITECTURE
                </span>
                <span className="text-gold/70 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/50">
                  DIGITAL STRATEGY
                </span>
                <span className="text-gold/70 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/50">
                  CLOUD DESIGN
                </span>
                <span className="text-gold/70 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/50">
                  IDENTITÀ VISIVA
                </span>
                <span className="text-gold/70 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/50">
                  ECOSISTEMI DIGITALI
                </span>
                <span className="text-gold/70 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/50">
                  GESTIONE FLUIDA
                </span>
                <span className="text-gold/70 text-xs">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
    </>
  );
};
