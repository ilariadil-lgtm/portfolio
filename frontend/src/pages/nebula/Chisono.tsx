import React, { Suspense, useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { ArrowUpRight, Box, Cpu, Globe, Layers } from "lucide-react";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { RevealText } from "@/components/RevealText";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { SkewWrapper } from "./components/SkewWrapper";

const HeroCanvas = React.lazy(() => import("./components/HeroCanvas").then(module => ({ default: module.HeroCanvas })));

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

const Chisono = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: t('about.title_1', "Chi Sono"),
    description: t('about.bio_default', "Ilaria Diliberto — Designer e sviluppatrice full-stack."),
  });
  
  const [about, setAbout] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const [aboutData, servData] = await Promise.all([
          api.getAbout(),
          api.getServices()
        ]);
        setAbout(aboutData);
        setServices(servData.results || servData);
      } catch (error) {
        console.error("Errore nel caricamento dati:", error);
      }
    };
    fetchData();

    // Abilita lo scroll snapping nativo
    document.documentElement.classList.add("snap-y", "snap-mandatory");
    
    return () => {
      document.documentElement.classList.remove("snap-y", "snap-mandatory");
    };
  }, []);

  const evolution = [
    {
      num: "01",
      period: "2013 — 2020",
      title: t('about.evo1_title'),
      subtitle: t('about.evo1_sub'),
      description: t('about.evo1_desc'),
      tech: [t('about.evo1_tech1'), t('about.evo1_tech2'), t('about.evo1_tech3')],
      icon: <Layers size={22} />
    },
    {
      num: "02",
      period: "2021 — 2025",
      title: t('about.evo2_title'),
      subtitle: t('about.evo2_sub'),
      description: t('about.evo2_desc'),
      tech: [t('about.evo2_tech1'), t('about.evo2_tech2'), t('about.evo2_tech3')],
      icon: <Cpu size={22} />
    },
    {
      num: "03",
      period: "2025 — oggi",
      title: t('about.evo3_title'),
      subtitle: t('about.evo3_sub'),
      description: t('about.evo3_desc'),
      tech: [t('about.evo3_tech1'), t('about.evo3_tech2'), t('about.evo3_tech3')],
      icon: <Globe size={22} />
    }
  ];

  return (
    <div ref={containerRef} className="bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 relative overflow-hidden flex flex-col min-h-screen md:pl-20">
      <NebulaNav />
      <ScrollIndicator />

      {/* ═════════════════════════════════════════════════════
          GLOBAL BACKGROUNDS (NEBULA AESTHETIC)
          ═════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <Suspense fallback={<div className="absolute inset-0 bg-[#080808]" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen opacity-70">
        <motion.div 
          animate={{ x: ["0%", "10%", "0%"], y: ["0%", "5%", "0%"], scale: [1, 1.15, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#d4af37]/10 to-[#3d0f1a]/10 blur-[130px]" 
        />
        <motion.div 
          animate={{ x: ["0%", "-10%", "0%"], y: ["0%", "-5%", "0%"], scale: [1, 1.1, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-indigo-900/10 to-[#3d0f1a]/5 blur-[140px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-rose-900/5 blur-[120px] mix-blend-screen" 
        />
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      </div>

      <main className="relative z-20 w-full">
        
        {/* ═══════════════════════════════════════════════════════════════════
             1. HERO SECTION (Allineata all'Homepage)
             ═══════════════════════════════════════════════════════════════════ */}
        <motion.section 
          style={{ y: yParallax, opacity: opacityParallax }}
          className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden snap-start"
        >

          {/* Bagliore focus per i testi */}
          <div className="absolute top-[40%] left-[10%] -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-[#d4af37]/[0.03] blur-[120px] pointer-events-none z-10" />

          {/* TESTO IN PRIMO PIANO - Riportato a sinistra */}
          <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col relative z-20 pointer-events-none">
            <div className="max-w-4xl pt-10 md:pt-0">
              <div className="flex flex-col relative z-20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4af37] flex items-center gap-2">
                    <span className="text-[10px]">✦</span> {t('about.bio_profile')}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-baseline gap-x-6 pb-4">
                  <RevealText 
                    text={t('about.title_1') || "Chi"} 
                    delay={0.1} 
                    className="font-bricolage font-bold tracking-wider text-6xl md:text-7xl lg:text-[6.5vw] leading-[1.1] text-white whitespace-nowrap uppercase" 
                  />
                  <RevealText 
                    text={t('about.title_2') || "Sono."} 
                    delay={0.2} 
                    className="font-fraunces italic font-light tracking-wider text-6xl md:text-7xl lg:text-[6.5vw] leading-[1.1] text-[#d4af37] whitespace-nowrap" 
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-6 border-l-2 border-[#d4af37]/20 pl-6 pointer-events-auto max-w-2xl"
              >
                <p className="text-neutral-400 font-inter font-light text-base md:text-lg leading-relaxed mb-12">
                  {about?.bio || t('about.bio_default')}
                </p>

                {/* Il Manifesto - Restore texts from Editorial */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                  {[
                    { num: "I.", label: t('about.rule1_label'), desc: t('about.rule1_desc') },
                    { num: "II.", label: t('about.rule2_label'), desc: t('about.rule2_desc') },
                    { num: "III.", label: t('about.rule3_label'), desc: t('about.rule3_desc') }
                  ].map((rule, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-fraunces italic text-[#d4af37] text-sm">{rule.num}</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/80">{rule.label}</span>
                      </div>
                      <p className="font-inter font-light text-[12px] text-white/40 leading-relaxed">
                        {rule.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* META DATI A DESTRA - Simmetria Architetturale */}
            <div className="hidden lg:flex absolute right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 flex-col items-end text-right gap-8 opacity-60 pointer-events-none border-r-2 border-[#d4af37]/20 pr-6">
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#d4af37]/60">{t('about.role_label')}</span>
                <span className="font-inter text-xs tracking-[0.2em] text-white font-light">{t('about.role_val')}</span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#d4af37]/60">{t('about.loc_label')}</span>
                <span className="font-inter text-xs tracking-[0.2em] text-white font-light">{t('about.loc_val')}</span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#d4af37]/60">{t('about.exp_label')}</span>
                <span className="font-inter text-xs tracking-[0.2em] text-[#d4af37] font-light">{t('about.exp_val')}</span>
              </div>
            </div>

          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
             2. L'EVOLUZIONE (Skew-on-Scroll Timeline)
             ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-24 snap-start">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center md:text-left">
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#d4af37] font-medium mb-4 block">01 — {t('about.evo_label')}</span>
              <RevealText 
                text={t('about.evo_title_1') + " " + t('about.evo_title_2')} 
                className="font-bricolage text-5xl md:text-7xl font-bold leading-none tracking-tighter text-white" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {evolution.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between group hover:border-[#d4af37]/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
                >
                  {/* Numero in background (Watermark) */}
                  <div className="absolute -bottom-4 -right-2 font-bricolage text-[140px] leading-none font-black text-white/[0.04] group-hover:text-[#d4af37]/[0.08] transition-colors duration-500 select-none pointer-events-none">
                    {step.num}
                  </div>
                  
                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Header: Period & Icon */}
                    <div className="flex justify-between items-start mb-8 pb-4 border-b border-white/10 group-hover:border-[#d4af37]/20 transition-colors duration-500">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#d4af37] font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                          FASE {step.num}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">{step.period}</span>
                      </div>
                      <div className="text-white/20 group-hover:text-[#d4af37] transition-colors duration-500">
                        {step.icon}
                      </div>
                    </div>

                    {/* Body: Title & Desc */}
                    <div className="mb-12">
                      <h3 className="font-bricolage text-2xl lg:text-3xl font-bold text-white/90 mb-2 group-hover:text-white transition-colors">{step.title}</h3>
                      <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/30 font-bold block mb-4">{step.subtitle}</span>
                      <p className="font-inter font-light text-[13px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                        {step.description}
                      </p>
                    </div>

                    {/* Footer: Tech Stack Pills */}
                    <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-[#d4af37]/10 transition-colors">
                      <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 mb-4 block font-medium group-hover:text-white/50 transition-colors">{t('about.phase_inventory')}</span>
                      <div className="flex flex-wrap gap-2">
                        {step.tech.map((t, idx) => (
                          <div key={idx} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/60 font-mono text-[8px] uppercase tracking-widest group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/5 group-hover:text-[#d4af37] transition-all duration-300">
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
             3. COMPETENZE (Cluster Magnetici Organici)
             ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-20 snap-start">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center md:text-left">
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#d4af37] font-medium mb-4 block">02 — {t('about.skills_label')}</span>
              <RevealText 
                text={t('about.skills_title_1') + " " + t('about.skills_title_2')} 
                className="font-bricolage text-5xl md:text-7xl font-bold leading-none tracking-tighter text-white" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.length > 0 ? services.slice(0,3).map((tech, i) => (
                <motion.div 
                  key={tech.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between group hover:border-[#d4af37]/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden gap-6"
                >
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6 group-hover:border-[#d4af37]/20 transition-colors duration-500">
                    <span className="font-mono text-[9px] text-[#d4af37]/50 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#d4af37] animate-pulse" />
                      0{i + 1}
                    </span>
                    <h3 className="font-fraunces italic text-3xl text-white/90">{tech.title}</h3>
                  </div>
                  <p className="font-inter font-light text-[14px] text-white/50 leading-relaxed">
                    {tech.description || t('about.tech_default')}
                  </p>
                  
                  {/* Semantic Cluster of Magnetic Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5 group-hover:border-[#d4af37]/10 transition-colors">
                    {["Design System", "Prototyping", "UI/UX"].map((tag, j) => (
                       <MagneticWrapper key={j}>
                         <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/60 font-mono text-[8px] uppercase tracking-widest group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/5 group-hover:text-[#d4af37] cursor-crosshair transition-all duration-300">
                           {tag}
                         </div>
                       </MagneticWrapper>
                    ))}
                  </div>
                </motion.div>
              )) : (
                [
                  { title: t('about.fallback1_title'), desc: t('about.fallback1_desc'), tags: ["UI Design", "UX Research", "Brand Identity"] },
                  { title: t('about.fallback2_title'), desc: t('about.fallback2_desc'), tags: ["React / Next.js", "WebGL", "Framer Motion"] },
                  { title: t('about.fallback3_title'), desc: t('about.fallback3_desc'), tags: ["Architecture", "Django", "System Design"] }
                ].map((tech, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between group hover:border-[#d4af37]/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden gap-6"
                  >
                    <div className="flex items-center gap-4 border-b border-white/10 pb-6 group-hover:border-[#d4af37]/20 transition-colors duration-500">
                      <span className="font-mono text-[9px] text-[#d4af37]/50 group-hover:text-[#d4af37] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#d4af37] animate-pulse" />
                        0{i + 1}
                      </span>
                      <h3 className="font-fraunces italic font-light text-3xl text-white/70 group-hover:text-white transition-colors duration-500">{tech.title}</h3>
                    </div>
                    <p className="font-inter font-light text-[14px] text-white/50 leading-[1.8]">
                      {tech.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                      {tech.tags.map((tag, j) => (
                         <MagneticWrapper key={j}>
                           <div className="px-4 py-2 rounded-full border border-white/5 text-white/30 font-mono text-[9px] uppercase tracking-widest hover:border-[#d4af37]/40 hover:bg-[#d4af37]/5 hover:text-[#d4af37] cursor-crosshair transition-all duration-300">
                             {tag}
                           </div>
                         </MagneticWrapper>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

      </main>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default Chisono;
