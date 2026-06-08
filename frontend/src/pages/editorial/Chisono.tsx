import { motion, Variants } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Box, Cpu, Globe, Layers } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";

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
    description: "Ilaria Diliberto — Designer e sviluppatrice full-stack. Dalla Accademia di Belle Arti al prodotto digitale: il percorso che unisce estetica, codice e strategia.",
  });


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
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — CHI SONO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-32 md:pt-44 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">

            {/* Left Column: Typography & Bio Info */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium block">
                    {t('about.bio_profile')}
                  </span>
                  <div className="w-12 h-[1px] bg-primary/20" />
                </div>

                {/* Reveal Text Animations for Title */}
                <motion.h1 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="font-display text-[12vw] lg:text-[6.5vw] font-bold leading-[0.85] tracking-tighter text-[#3d0f1a] mb-8"
                >
                  <span className="overflow-hidden inline-block py-3 -my-3">
                    <motion.span variants={wordVariants} className="inline-block origin-bottom-left">
                      {t('about.title_1')}
                    </motion.span>
                  </span>
                  <span className="overflow-hidden inline-block py-3 -my-3">
                    <motion.span variants={wordVariants} transition={{ delay: 0.15 }} className="inline-block origin-bottom-left text-primary italic pr-2">
                      &nbsp;{t('about.title_2')}
                    </motion.span>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="font-body text-l text-[#3d0f1a]/80 leading-relaxed pl-8 border-l border-primary/25 max-w-xl"
                >
                  {t('about.bio_default')}
                </motion.p>
              </motion.div>

              {/* Technical Specifications Ledger */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#3d0f1a] shadow-[10px_10px_0px_#c0392b] max-w-xl"
              >
                <div className="px-6 py-4 border-b border-[#3d0f1a]/10 flex items-center justify-between">
                  <span className="font-typewriter text-[10px] uppercase tracking-[0.2em] text-[#3d0f1a]/60 font-medium">{t('about.professional_profile')}</span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#3d0f1a]/10" />
                    <span className="w-2 h-2 rounded-full bg-[#3d0f1a]/10" />
                  </div>
                </div>
                <div className="divide-y divide-[#3d0f1a]/5">
                  {[
                    { label: t('about.role_label'), val: t('about.role_val') },
                    { label: t('about.spec_label'), val: t('about.spec_val') },
                    { label: t('about.loc_label'), val: t('about.loc_val') },
                    { label: t('about.exp_label'), val: t('about.exp_val'), highlight: true }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center px-6 py-4">
                      <span className="font-typewriter text-[11px] uppercase tracking-widest text-[#3d0f1a]/60 font-medium">{item.label}</span>
                      <span className={`font-mono text-[12px] ${item.highlight ? 'text-primary font-semibold' : 'text-[#3d0f1a] font-medium'}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Premium Blueprint Manifesto */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[400px] aspect-[4/5] border border-[#3d0f1a]/10 bg-white p-3 shadow-[15px_15px_0px_rgba(61,15,26,0.05)] group hover:shadow-[15px_15px_0px_rgba(192,57,43,0.1)] transition-shadow duration-500"
                data-cursor="view"
              >
                {/* Content Container with scanner animation */}
                <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden border border-[#3d0f1a]/5 select-none bg-[#f5f2ed]">
                  {/* Animated Scanline Laser Beam */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#c0392b]/30 to-transparent z-10 pointer-events-none"
                  />

                  {/* Top Ledger Telemetry */}
                  <div className="flex justify-between items-start border-b border-[#3d0f1a]/10 pb-4 relative z-10">
                    <div className="flex flex-col">
                      <span className="font-typewriter text-[9px] uppercase tracking-[0.25em] text-[#3d0f1a] font-bold">{t('about.method_label')}</span>
                      <span className="font-typewriter text-[7px] uppercase tracking-[0.2em] text-[#3d0f1a]/50 font-medium mt-1">{t('about.vision_label')}</span>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] animate-pulse" />
                      <span className="font-mono text-[8px] text-[#c0392b]">{t('about.name_label')}</span>
                    </div>
                  </div>

                  {/* Main Rules Text Block */}
                  <div className="space-y-6 my-auto pt-4 relative z-10">
                    {[
                      { num: "I.", label: t('about.rule1_label'), desc: t('about.rule1_desc') },
                      { num: "II.", label: t('about.rule2_label'), desc: t('about.rule2_desc') },
                      { num: "III.", label: t('about.rule3_label'), desc: t('about.rule3_desc') }
                    ].map((rule, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm italic font-bold text-[#c0392b] pr-2">{rule.num}</span>
                          <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#3d0f1a] font-bold">{rule.label}</span>
                        </div>
                        <p className="font-body text-[13px] text-[#3d0f1a]/70 leading-relaxed pl-4">
                          {rule.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           TIMELINE — ARCHITECTURAL PHASES
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-white border-y border-[#3d0f1a]/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium mb-4 block">{t('about.evo_label')}</span>
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tighter"
            >
              <span className="overflow-hidden inline-block py-3 -my-3">
                <motion.span variants={wordVariants} className="inline-block origin-bottom-left">
                  {t('about.evo_title_1')}
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block py-3 -my-3">
                <motion.span variants={wordVariants} transition={{ delay: 0.15 }} className="inline-block origin-bottom-left text-primary italic pr-2">
                  &nbsp;{t('about.evo_title_2')}
                </motion.span>
              </span>
            </motion.h2>
          </div>

          <div className="space-y-24 relative before:absolute before:left-4 lg:before:left-12 before:top-2 before:bottom-2 before:w-[1px] before:bg-dashed before:border-l before:border-primary/20">
            {evolution.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative pl-12 lg:pl-24"
              >
                {/* Timeline dot inside connector */}
                <div className="absolute left-4 lg:left-12 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-10 shadow-sm" />

                {/* Display Number */}
                <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start gap-4">
                  <div className="font-display text-7xl md:text-8xl font-black text-[#3d0f1a]/10 select-none leading-none">
                    {step.num}
                  </div>
                  <span className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-primary/60 font-medium whitespace-nowrap">{step.period}</span>
                </div>

                {/* Title & Narrative Description */}
                <div className="lg:col-span-6 space-y-4 pt-2">
                  <h3 className="font-display text-4xl font-bold text-[#3d0f1a]">{step.title}</h3>
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.4em] text-[#3d0f1a]/50 font-bold mb-4 block">{step.subtitle}</span>
                  <p className="font-body text-lg text-[#3d0f1a]/70 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Technical Spec HUD Card */}
                <div
                  className="lg:col-span-4 bg-[#f5f2ed] border border-[#3d0f1a]/10 p-8 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b] hover:border-[#3d0f1a]/30 transition-all duration-300 relative group cursor-pointer"
                  data-cursor="pointer"
                >
                  <div className="absolute top-6 right-6 text-[#3d0f1a]/20 group-hover:text-primary transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="font-typewriter text-[8px] uppercase tracking-[0.3em] text-[#3d0f1a]/40 mb-6 block font-medium">{t('about.phase_inventory')}</span>
                  <ul className="space-y-3.5">
                    {step.tech.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-primary/70" />
                        <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#3d0f1a] font-medium">{t}</span>
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
           CAPABILITIES MATRIX — TECHNICAL GRID (Rivisitata)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#f5f2ed] text-[#3d0f1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium mb-4 block">{t('about.skills_label')}</span>
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="font-display text-5xl md:text-7xl font-black leading-none tracking-tighter"
            >
              <span className="overflow-hidden inline-block py-3 -my-3">
                <motion.span variants={wordVariants} className="inline-block origin-bottom-left">
                  {t('about.skills_title_1')}
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block py-3 -my-3">
                <motion.span variants={wordVariants} transition={{ delay: 0.15 }} className="inline-block origin-bottom-left text-primary italic pr-2">
                  &nbsp;{t('about.skills_title_2')}
                </motion.span>
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('about.fallback1_title'), desc: t('about.fallback1_desc') },
              { title: t('about.fallback2_title'), desc: t('about.fallback2_desc') },
              { title: t('about.fallback3_title'), desc: t('about.fallback3_desc') }
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-[#3d0f1a] bg-white shadow-[10px_10px_0px_rgba(61,15,26,0.1)] hover:shadow-[10px_10px_0px_#c0392b] transition-all duration-300 min-h-[320px]"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform bg-primary/5">
                    <Box size={20} />
                  </div>
                  <span className="font-typewriter text-[9px] text-[#3d0f1a]/30 font-medium">0{i + 1}</span>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">{tech.title}</h3>
                <p className="font-body text-[14px] text-[#3d0f1a]/70 leading-relaxed">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Chisono;
