import { Link } from "@/components/Link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const EditorialPackagesSection = () => {
  const { t } = useTranslation();
  return (
    <>
    {/* ═══════════════════════════════════════════════════════════════════
           LE TRE PORTE - ECOSISTEMI SU MISURA (Editorial Airy Style)
           ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1920px] mx-auto bg-cream border-b border-editorial relative z-20">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-20 md:mb-24">
            <div className="relative inline-block">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">
                  03 — I MIEI SERVIZI
                </span>
                <div className="w-12 h-[1px] bg-primary/20" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.05] tracking-tight text-ink relative pr-12">
                {t("index.home_pkg_title").split(" ")[0]} <br />
                <span className="text-primary italic pr-2">
                  {t("index.home_pkg_title").split(" ").slice(1).join(" ")}
                </span>
              </h2>
            </div>
            <div className="max-w-xl lg:pb-2">
              <p className="font-body text-xl text-ink/70 leading-relaxed border-l border-primary/20 pl-8">
                {t("index.home_pkg_subtitle")}
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Porta 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-8 md:p-10 border border-ink bg-white shadow-soft-8 hover:shadow-brutal-8 transition-all duration-500 h-full relative overflow-hidden"
            >
              {/* Dynamic Scrolling Scanning laser beam (da Servizi.tsx) */}
              <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent top-0 group-hover:top-[100%] transition-all [transition-duration:3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">
                    {t("index.home_pkg1_num")}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-ink/65 bg-primary/5 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                    <span className="font-display font-black text-xl">1</span>
                  </div>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                  {t("index.home_pkg1_title").split(" ")[0]} <br /><span className="italic text-primary">{t("index.home_pkg1_title").split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="font-typewriter text-[11px] uppercase tracking-[0.2em] text-ink/65 font-bold leading-relaxed mb-6">
                  {t("index.home_pkg1_tagline")}
                </p>
                <p className="font-body text-[15px] text-ink/70 leading-relaxed flex-1 mb-12">
                  {t("index.home_pkg1_desc")}
                </p>
                
                <div className="pt-8 border-t border-ink/10">
                  <Link
                    to="/sviluppo-cms"
                    className="group/btn inline-flex items-center justify-between w-full font-typewriter text-[13px] uppercase tracking-[0.25em] text-ink group-hover:text-primary font-medium transition-colors"
                  >
                    <span className="relative overflow-hidden">
                      {t("index.home_pkg1_btn")}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                    </span>
                    <div className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white transition-all duration-500 transform group-hover/btn:scale-110">
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Porta 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-8 md:p-10 border border-ink bg-white shadow-soft-8 hover:shadow-brutal-8 transition-all duration-500 h-full relative overflow-hidden"
            >
              {/* Dynamic Scrolling Scanning laser beam */}
              <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent top-0 group-hover:top-[100%] transition-all [transition-duration:3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">
                    {t("index.home_pkg2_num")}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-ink/65 bg-primary/5 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                    <span className="font-display font-black text-xl">2</span>
                  </div>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                  {t("index.home_pkg2_title").split(" ")[0]} <br /><span className="italic text-primary">{t("index.home_pkg2_title").split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="font-typewriter text-[11px] uppercase tracking-[0.2em] text-ink/65 font-bold leading-relaxed mb-6">
                  {t("index.home_pkg2_tagline")}
                </p>
                <p className="font-body text-[15px] text-ink/70 leading-relaxed flex-1 mb-12">
                  {t("index.home_pkg2_desc")}
                </p>
                
                <div className="pt-8 border-t border-ink/10">
                  <Link
                    to="/sviluppo-mvp"
                    className="group/btn inline-flex items-center justify-between w-full font-typewriter text-[13px] uppercase tracking-[0.25em] text-ink group-hover:text-primary font-medium transition-colors"
                  >
                    <span className="relative overflow-hidden">
                      {t("index.home_pkg2_btn")}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                    </span>
                    <div className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white transition-all duration-500 transform group-hover/btn:scale-110">
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Porta 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-8 md:p-10 border border-ink bg-white shadow-soft-8 hover:shadow-brutal-8 transition-all duration-500 h-full relative overflow-hidden"
            >
              {/* Dynamic Scrolling Scanning laser beam */}
              <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent top-0 group-hover:top-[100%] transition-all [transition-duration:3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">
                    {t("index.home_pkg3_num")}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-ink/65 bg-primary/5 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                    <span className="font-display font-black text-xl">3</span>
                  </div>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                  {t("index.home_pkg3_title").split(" ")[0]} <br /><span className="italic text-primary">{t("index.home_pkg3_title").split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="font-typewriter text-[11px] uppercase tracking-[0.2em] text-ink/65 font-bold leading-relaxed mb-6">
                  {t("index.home_pkg3_tagline")}
                </p>
                <p className="font-body text-[15px] text-ink/70 leading-relaxed flex-1 mb-12">
                  {t("index.home_pkg3_desc")}
                </p>
                
                <div className="pt-8 border-t border-ink/10">
                  <Link
                    to="/sviluppo-custom"
                    className="group/btn inline-flex items-center justify-between w-full font-typewriter text-[13px] uppercase tracking-[0.25em] text-ink group-hover:text-primary font-medium transition-colors"
                  >
                    <span className="relative overflow-hidden">
                      {t("index.home_pkg3_btn")}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                    </span>
                    <div className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white transition-all duration-500 transform group-hover/btn:scale-110">
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
      </section>
    </>
  );
};
