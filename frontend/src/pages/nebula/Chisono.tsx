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
    title: "Chi Sono",
    description: "Ilaria Diliberto — Designer e sviluppatrice full-stack.",
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
    <div ref={containerRef} className="bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 relative overflow-hidden flex flex-col min-h-screen">
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
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      </div>

      <main className="relative z-20 w-full">
        
        {/* ═══════════════════════════════════════════════════════════════════
             1. HERO & HOLOGRAPHIC LEDGER (Fusion)
             ═══════════════════════════════════════════════════════════════════ */}
        <motion.section 
          style={{ y: yParallax, opacity: opacityParallax }}
          className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-32 pb-20 relative"
        >
          <div className="w-full max-w-7xl relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Left Column: Macro Typography & Bio */}
              <div className="lg:col-span-7 space-y-12">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#d4af37] font-medium block">
                    {t('about.bio_profile')}
                  </span>
                  <div className="w-12 h-[1px] bg-[#d4af37]/40" />
                </div>
                
                <div className="flex flex-col relative z-20">
                  <RevealText 
                    text={t('about.title_1') || "Ilaria"} 
                    delay={0.1} 
                    className="font-bricolage font-bold tracking-tighter text-[16vw] lg:text-[8vw] leading-[0.85] text-white/90 uppercase"
                  />
                  <RevealText 
                    text={t('about.title_2') || "Diliberto."} 
                    delay={0.2} 
                    className="font-fraunces italic font-light tracking-tight text-[18vw] lg:text-[9vw] leading-[0.85] text-[#d4af37] md:ml-12"
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="pl-6 border-l border-[#d4af37]/30 max-w-xl"
                >
                  <SkewWrapper intensity={3}>
                    <p className="font-inter font-light text-white/60 text-lg leading-[1.9]">
                      {about?.bio || t('about.bio_default')}
                    </p>
                  </SkewWrapper>
                </motion.div>
              </div>

              {/* Right Column: Holographic Ledger & Glass Monolith (Manifesto) */}
              <div className="lg:col-span-5 flex flex-col gap-16 mt-12 lg:mt-32">
                
                {/* Holographic Ledger */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", damping: 24, stiffness: 80, delay: 0.8 }}
                  className="border-l border-white/10 pl-8 space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">{t('about.professional_profile')}</span>
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50 animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: t('about.role_label'), val: t('about.role_val') },
                      { label: t('about.spec_label'), val: t('about.spec_val') },
                      { label: t('about.loc_label'), val: t('about.loc_val') },
                      { label: t('about.exp_label'), val: t('about.exp_val'), highlight: true }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center group cursor-default">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/50 transition-colors">{item.label}</span>
                        <span className={`font-mono text-[11px] uppercase tracking-widest ${item.highlight ? 'text-[#d4af37] font-medium text-[12px]' : 'text-white/80'}`}>{item.val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Glass Monolith (Manifesto) */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", damping: 24, stiffness: 80, delay: 1 }}
                  className="relative w-full max-w-[400px] aspect-[4/5] bg-white/[0.015] backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden group shadow-[0_0_50px_rgba(212,175,55,0.03)] hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] hover:border-[#d4af37]/30 transition-all duration-700"
                >
                  {/* Golden Laser Scanline */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent z-10 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                  />
                  
                  {/* Glass Noise Overlay */}
                  <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />

                  {/* Top Telemetry */}
                  <div className="flex justify-between items-start border-b border-white/10 pb-4 relative z-10">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/80 font-bold">{t('about.method_label')}</span>
                      <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#d4af37]/60 mt-1">{t('about.vision_label')}</span>
                    </div>
                    <span className="font-mono text-[8px] text-[#d4af37]">{t('about.name_label')}</span>
                  </div>

                  {/* Rules / Manifesto */}
                  <div className="space-y-6 my-auto pt-4 relative z-10">
                    {[
                      { num: "I.", label: t('about.rule1_label'), desc: t('about.rule1_desc') },
                      { num: "II.", label: t('about.rule2_label'), desc: t('about.rule2_desc') },
                      { num: "III.", label: t('about.rule3_label'), desc: t('about.rule3_desc') }
                    ].map((rule, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-fraunces text-sm italic font-light text-[#d4af37]">{rule.num}</span>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-white font-medium">{rule.label}</span>
                        </div>
                        <p className="font-inter font-light text-[12px] text-white/50 leading-relaxed pl-6">
                          {rule.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
             2. L'EVOLUZIONE (Skew-on-Scroll Timeline)
             ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center md:text-left">
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#d4af37] font-medium mb-4 block">{t('about.evo_label')}</span>
              <RevealText 
                text={t('about.evo_title_1') + " " + t('about.evo_title_2')} 
                className="font-bricolage text-5xl md:text-7xl font-bold leading-none tracking-tighter text-white" 
              />
            </div>

            <div className="space-y-32 relative before:absolute before:left-4 lg:before:left-12 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#d4af37]/0 before:via-[#d4af37]/30 before:to-[#d4af37]/0">
              {evolution.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative pl-12 lg:pl-24 group/timeline"
                >
                  {/* Glowing Node with pulse */}
                  <div className="absolute left-4 lg:left-12 -translate-x-1/2 w-4 h-4 bg-[#080808] rounded-full border-2 border-white/20 group-hover/timeline:border-[#d4af37] transition-colors duration-700 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="w-1.5 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37] opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-700" 
                    />
                  </div>

                    {/* Number & Period */}
                    <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start gap-4">
                      <div className="font-bricolage text-7xl md:text-8xl font-black text-white/5 select-none leading-none">
                        {step.num}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-medium whitespace-nowrap">{step.period}</span>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-6 space-y-4 pt-2">
                      <h3 className="font-bricolage text-4xl font-bold text-white/90">{step.title}</h3>
                      <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40 font-bold mb-4 block">{step.subtitle}</span>
                      <p className="font-inter font-light text-lg text-white/50 leading-[1.8] max-w-xl">
                        {step.description}
                      </p>
                    </div>

                    {/* Dark Glass HUD */}
                    <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 p-8 backdrop-blur-md rounded-2xl hover:border-[#d4af37]/30 hover:bg-white/[0.04] transition-all duration-500 group">
                      <div className="absolute top-6 right-6 text-white/10 group-hover:text-[#d4af37] transition-colors duration-500">
                        {step.icon}
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 mb-6 block font-medium">{t('about.phase_inventory')}</span>
                      <ul className="space-y-4">
                        {step.tech.map((t, idx) => (
                          <li key={idx} className="flex items-center gap-4">
                            <div className="w-1 h-1 rounded-full bg-[#d4af37]/50" />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
             3. COMPETENZE (Cluster Magnetici Organici)
             ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#d4af37] font-medium mb-4 block">{t('about.skills_label')}</span>
              <RevealText 
                text={t('about.skills_title_1') + " " + t('about.skills_title_2')} 
                className="font-bricolage text-5xl md:text-7xl font-bold leading-none tracking-tighter text-white" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
              {services.length > 0 ? services.slice(0,3).map((tech, i) => (
                <motion.div 
                  key={tech.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <span className="font-mono text-[9px] text-[#d4af37]/50">0{i + 1}</span>
                    <h3 className="font-fraunces italic text-3xl text-white/90">{tech.title}</h3>
                  </div>
                  <p className="font-inter font-light text-[14px] text-white/50 leading-relaxed">
                    {tech.description || t('about.tech_default')}
                  </p>
                  
                  {/* Semantic Cluster of Magnetic Pills */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {["Design System", "Prototyping", "UI/UX"].map((tag, j) => (
                       <MagneticWrapper key={j}>
                         <div className="px-4 py-2 rounded-full border border-white/10 text-white/40 font-mono text-[9px] uppercase tracking-widest hover:border-[#d4af37]/50 hover:text-[#d4af37] cursor-crosshair transition-colors duration-300">
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
                    className="flex flex-col gap-6 group"
                  >
                    <div className="flex items-center gap-4 border-b border-white/10 pb-6 group-hover:border-[#d4af37]/30 transition-colors duration-500">
                      <span className="font-mono text-[9px] text-[#d4af37]/50 group-hover:text-[#d4af37]">0{i + 1}</span>
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
