import React, { useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { NebulaNav } from "./NebulaNav";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { NebulaFooter } from "./NebulaFooter";
import { RevealText } from "@/components/RevealText";

const HeroCanvas = React.lazy(() => import("./HeroCanvas").then(m => ({ default: m.HeroCanvas })));

import { NebulaProjectPhases, Phase } from "./NebulaProjectPhases";
import { NebulaProjectNavigation } from "./NebulaProjectNavigation";

interface NebulaProjectLayoutProps {
  title?: string;
  title1?: string;
  title2?: string;
  type?: string;
  description: React.ReactNode;
  phases?: Phase[];
  techList: string[];
  role: string;
  year: string;
  liveUrl?: string;
  prev?: { url: string; title: string };
  next?: { url: string; title: string };
  children: React.ReactNode;
}

export const NebulaProjectLayout = ({
  title,
  title1,
  title2,
  type = "PROJECT",
  description,
  phases,
  techList,
  role,
  year,
  liveUrl,
  prev,
  next,
  children
}: NebulaProjectLayoutProps) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: title || `${title1} ${title2}`,
    description: typeof description === 'string' ? description : `Project overview: ${title || title1}`,
  });

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Handle explicit title1 and title2, or fallback to splitting title
  let finalTitleStart = title1 || "";
  let finalTitleEnd = title2 || "";
  
  if (title && !title1 && !title2) {
    const words = title.trim().split(' ');
    finalTitleStart = words.slice(0, -1).join(' ');
    finalTitleEnd = words.at(-1) || '';
  }

  return (
    <div className="min-h-screen w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 flex flex-col relative overflow-hidden md:pl-20">
      <NebulaNav />

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

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[60vh] flex flex-col justify-end border-b border-white/5 z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-start">
          
          <Link to="/progetti" className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37] hover:text-white transition-colors mb-12 bg-[#d4af37]/5 px-4 py-2 border border-[#d4af37]/20 rounded-full backdrop-blur-md">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            {t('all_projects', 'ALL PROJECTS')}
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
               <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 block">
                 {type}
               </span>
            </div>
            
            <div className="flex flex-wrap items-baseline gap-x-6 pb-4">
               {finalTitleStart && (
                 <RevealText 
                   text={finalTitleStart} 
                   delay={0.1} 
                   className="font-bricolage font-black tracking-tighter text-5xl md:text-8xl lg:text-[7vw] leading-[0.9] text-white uppercase" 
                 />
               )}
               {finalTitleEnd && (
                 <RevealText 
                   text={finalTitleEnd} 
                   delay={0.2} 
                   className="font-fraunces italic font-light tracking-tight text-5xl md:text-8xl lg:text-[7vw] leading-[0.9] text-[#d4af37] pr-2" 
                 />
               )}
            </div>
          </motion.div>

          {/* Specs Grid (Bento/Telemetry Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 pt-12 mt-12 border-t border-white/5"
          >
            <div className="bg-black/40 border border-white/5 backdrop-blur-xl p-6 rounded-2xl flex flex-col justify-between group hover:border-[#d4af37]/30 hover:bg-black/60 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] mb-4">RUOLO</span>
              <span className="font-outfit font-light text-lg text-white group-hover:text-white">{role}</span>
            </div>
            <div className="bg-black/40 border border-white/5 backdrop-blur-xl p-6 rounded-2xl flex flex-col justify-between group hover:border-[#d4af37]/30 hover:bg-black/60 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] mb-4">ANNO</span>
              <span className="font-mono text-lg text-white group-hover:text-white">{year}</span>
            </div>
            <div className="md:col-span-2 bg-black/40 border border-white/5 backdrop-blur-xl p-6 rounded-2xl flex flex-col justify-between group hover:border-[#d4af37]/30 hover:bg-black/60 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] mb-4">TECNOLOGIE</span>
              <div className="flex flex-wrap gap-2">
                {techList.map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/90 font-mono text-[9px] uppercase tracking-[0.1em] group-hover:border-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center pb-32">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="bg-black/40 border border-white/5 backdrop-blur-xl p-8 md:p-16 rounded-3xl font-outfit font-light text-white/80 text-lg md:text-xl leading-relaxed mb-20 shadow-[0_0_50px_rgba(0,0,0,0.6)] [&>p]:mb-8 [&>p:last-child]:mb-0 [&>h3]:font-mono [&>h3]:text-[10px] [&>h3]:uppercase [&>h3]:tracking-[0.3em] [&>h3]:text-[#d4af37] [&>h3]:mb-4 [&>h3]:mt-12 [&>h2]:font-bricolage [&>h2]:font-bold [&>h2]:text-3xl [&>h2]:text-white [&>h2]:mb-6"
          >
            <div className="mb-8 pb-8 border-b border-white/10">
               <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">PANORAMICA PROGETTO</span>
            </div>
            {description}
          </motion.div>

          {phases && phases.length > 0 && (
            <div className="w-full mb-20">
              <NebulaProjectPhases phases={phases} />
            </div>
          )}

          {liveUrl && (
            <div className="flex justify-center mb-24 relative z-20">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-6 px-10 py-5 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] bg-[#d4af37]/5 hover:bg-[#d4af37]/20 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.05)] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-[#d4af37] group-hover:text-white transition-colors">VISITA IL SITO</span>
                <ArrowUpRight size={16} className="text-[#d4af37] group-hover:scale-125 transition-transform" />
              </a>
            </div>
          )}
        </div>

        {/* Visual Gallery */}
        {/* L'utente ha chiesto di assicurarsi che le immagini siano alla fine della pagina prima della fascia contatti */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-24 relative z-10">
          {children}
        </div>

        {prev && next && (
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-12">
            <NebulaProjectNavigation prev={prev} next={next} />
          </div>
        )}
      </main>
      <NebulaFooter />
    </div>
  );
};
