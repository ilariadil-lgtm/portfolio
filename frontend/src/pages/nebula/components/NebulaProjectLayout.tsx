import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { NebulaNav } from "./NebulaNav";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { NebulaFooter } from "./NebulaFooter";
import { NebulaBriefingCTA } from "./NebulaBriefingCTA";

interface NebulaProjectLayoutProps {
  title: string;
  type?: string;
  description: React.ReactNode;
  techList: string[];
  role: string;
  year: string;
  liveUrl?: string;
  children: React.ReactNode;
}

export const NebulaProjectLayout = ({
  title,
  type = "PROJECT",
  description,
  techList,
  role,
  year,
  liveUrl,
  children
}: NebulaProjectLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: title,
    description: typeof description === 'string' ? description : `Project overview: ${title}`,
  });

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-screen w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 flex flex-col relative">
      <NebulaNav />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[70vh] flex flex-col justify-end border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-start">
          
          <Link to="/progetti" className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-[#d4af37] transition-colors mb-12">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            ALL PROJECTS
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-6 block">
              {type}
            </span>
            <h1 className="font-fraunces italic font-light text-6xl md:text-8xl lg:text-[8vw] text-white tracking-tight leading-[0.9] mb-12">
              {title}
            </h1>
          </motion.div>

          {/* Specs Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/10"
          >
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2">ROLE</span>
              <span className="font-sans font-light text-sm text-white/80">{role}</span>
            </div>
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2">YEAR</span>
              <span className="font-mono text-sm text-white/80">{year}</span>
            </div>
            <div className="col-span-2">
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mb-3">TECH STACK</span>
              <div className="flex flex-wrap gap-2">
                {techList.map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-full border border-white/10 text-white/70 font-mono text-[9px] uppercase tracking-[0.1em]">
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
        <div className="max-w-4xl mx-auto w-full px-6 md:px-12 py-24">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-sans font-light text-white/60 text-lg md:text-xl leading-relaxed mb-20 [&>p]:mb-8 [&>p:last-child]:mb-0 [&>h3]:font-mono [&>h3]:text-xs [&>h3]:uppercase [&>h3]:tracking-[0.2em] [&>h3]:text-[#d4af37] [&>h3]:mb-4 [&>h3]:mt-12 [&>h2]:font-fraunces [&>h2]:italic [&>h2]:text-3xl [&>h2]:text-white [&>h2]:mb-6"
          >
            {description}
          </motion.div>

          {liveUrl && (
            <div className="flex justify-center mb-24">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-6 px-8 py-4 rounded-full border border-white/10 hover:border-[#d4af37]/50 hover:bg-white/5 transition-all duration-300">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-white group-hover:text-[#d4af37] transition-colors">VISIT LIVE SITE</span>
                <ArrowUpRight size={16} className="text-[#d4af37] group-hover:scale-110 transition-transform" />
              </a>
            </div>
          )}
        </div>

        {/* Visual Gallery */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-24">
          {children}
        </div>
      </main>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};
