import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Code2, Calendar, Fingerprint, Activity } from "lucide-react";
import { NebulaNav } from "./NebulaNav";
import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";

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
  type = "CLASSIFIED_FILE",
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
    description: typeof description === 'string' ? description : `Dossier: ${title}`,
  });

  return (
    <div className="h-screen w-full bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-hidden flex">
      <NebulaNav />

      {/* ───────────────────────────────────────────────────────────────────
          AMBIENT EFFECTS
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50 z-[90]" />
      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50 z-[90]" />

      <main className="flex-1 flex flex-col lg:flex-row pl-0 md:pl-24 w-full h-full relative z-10">
        
        {/* ───────────────────────────────────────────────────────────────────
            LEFT PANEL: FIXED TELEMETRY DOSSIER
            ─────────────────────────────────────────────────────────────────── */}
        <div className="w-full lg:w-[45%] h-full flex flex-col p-6 md:p-12 border-r border-white/5 relative bg-[#030712]">
          {/* Top Back Link & Status */}
          <div className="flex justify-between items-center mb-12">
            <Link to="/progetti" className="group flex items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Chiudi Dossier
            </Link>
            <div className="flex items-center gap-2 font-mono text-[9px] text-cyan-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              Access Granted
            </div>
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar pr-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              
              {/* Title & Type */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 font-mono text-[9px] uppercase tracking-widest mb-6">
                  TYPE: {type}
                </span>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-100 leading-[0.9]">
                  {title}
                </h1>
              </div>

              {/* Description */}
              <div className="font-sans font-light text-slate-400 text-sm md:text-base leading-relaxed mb-12 border-l-2 border-cyan-500/30 pl-6 py-2 [&>p]:mb-6 [&>p:last-child]:mb-0 [&>h3]:font-mono [&>h3]:text-[10px] [&>h3]:uppercase [&>h3]:tracking-[0.4em] [&>h3]:text-cyan-400 [&>h3]:mb-3 [&>h3]:mt-8 [&>h3:first-child]:mt-0 [&>h2]:font-sans [&>h2]:font-bold [&>h2]:text-2xl [&>h2]:text-slate-100 [&>h2]:mb-4">
                {description}
              </div>

              {/* Tech Specs Terminal */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <Activity size={14} className="text-cyan-400" />
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-slate-300">Technical Data</span>
                </div>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-widest text-slate-500 mb-1">Role</span>
                    <span className="font-sans font-bold text-sm text-slate-200">{role}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-widest text-slate-500 mb-1">Year</span>
                    <span className="font-mono font-bold text-sm text-slate-200">{year}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block font-mono text-[8px] uppercase tracking-widest text-slate-500 mb-3">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {techList.map(t => (
                        <span key={t} className="px-2 py-1 rounded bg-[#030712] border border-white/10 text-cyan-400 font-mono text-[9px] uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Link */}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500 hover:border-cyan-400 transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-cyan-400 group-hover:text-[#030712]">Inizializza Protocollo Esterno</span>
                  <ArrowUpRight size={16} className="text-cyan-400 group-hover:text-[#030712]" />
                </a>
              )}
            </motion.div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
            RIGHT PANEL: SCROLLABLE VISUAL DATABASE
            ─────────────────────────────────────────────────────────────────── */}
        <div className="w-full lg:w-[55%] h-full overflow-y-auto hide-scrollbar bg-[#030712] relative">
          <div className="p-6 md:p-12 min-h-full flex flex-col gap-12">
            
            {/* Top right HUD marker */}
            <div className="hidden lg:flex justify-end sticky top-0 z-20 mb-8 pointer-events-none">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600 bg-[#030712] px-2">VISUAL.LOG</span>
            </div>

            {/* Media Content passed as children */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 1 }}
              className="flex flex-col gap-12 pb-24"
            >
              {children}
            </motion.div>
            
          </div>
        </div>

      </main>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
