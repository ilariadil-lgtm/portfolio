import React, { useEffect, useState, useRef } from "react";
import { api } from "@/lib/api";
import { ArrowRight, Box, Circle, Hexagon, Triangle } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { motion, useScroll, useTransform } from "framer-motion";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const NebulaProgetti = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data.results || data);
      } catch (error) {
        console.error("Errore nel caricamento dei progetti:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // For horizontal scroll effect if using mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0 && !e.shiftKey) {
        // Only override if the user is scrolling vertically without shift
        // This makes vertical mouse scroll move the horizontal container
        e.preventDefault();
        el.scrollBy({ left: e.deltaY * 1.5, behavior: 'smooth' });
      }
    };
    
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="h-screen w-full bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-hidden relative flex flex-col">
      <NebulaNav />

      {/* ───────────────────────────────────────────────────────────────────
          AMBIENT EFFECTS
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50 z-10" />

      {/* ───────────────────────────────────────────────────────────────────
          HEADER / TOP BAR
          ─────────────────────────────────────────────────────────────────── */}
      <header className="relative z-10 pl-0 md:pl-32 pt-8 pr-8 flex justify-between items-end pb-4 border-b border-white/5">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-mono mb-4 uppercase tracking-widest">
              / / DATA CORE ARCHIVE
           </div>
           <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Project <span className="text-cyan-400">Database</span>
           </h1>
        </div>
        <div className="hidden md:flex items-center gap-4 text-cyan-400/50 font-mono text-[9px] uppercase tracking-widest">
          <span>Scroll Horizontal</span>
          <ArrowRight size={14} />
        </div>
      </header>

      {/* ───────────────────────────────────────────────────────────────────
          HORIZONTAL SCROLL GALLERY
          ─────────────────────────────────────────────────────────────────── */}
      <main 
        ref={scrollRef}
        className="flex-1 relative z-10 w-full overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory hide-scrollbar pl-0 md:pl-24"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex h-full py-12 px-6 md:px-12 gap-8 md:gap-16 items-center min-w-max">
          
          {/* Intro Slide */}
          <div className="w-[85vw] md:w-[400px] shrink-0 snap-center h-[60vh] flex flex-col justify-center">
            <Hexagon size={48} className="text-cyan-400 mb-8 opacity-20" />
            <h2 className="text-3xl font-bold font-sans tracking-tight mb-4">
              Esplora i sistemi digitali costruiti.
            </h2>
            <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm">
              Ogni progetto rappresenta una missione verso l'eccellenza tecnica e visiva. Trascina o usa la rotellina del mouse per navigare il database.
            </p>
          </div>

          {loading ? (
            <div className="w-[300px] h-full flex items-center justify-center font-mono text-[10px] text-cyan-400 animate-pulse uppercase tracking-widest">
               Synchronizing Data...
            </div>
          ) : (
            projects.map((project, i) => (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-[85vw] md:w-[600px] lg:w-[800px] shrink-0 snap-center h-[70vh] group relative"
              >
                <Link to={`/progetti/${project.slug || project.id}`} className="block w-full h-full">
                  <div className="w-full h-full bg-[#030712]/80 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)] transition-all duration-700">
                    
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Image Area */}
                    <div className="w-full md:w-[60%] h-[50%] md:h-full relative overflow-hidden bg-black border-b md:border-b-0 md:border-r border-white/10">
                      <img 
                        src={project.image?.startsWith('http') || project.image?.startsWith('/') ? project.image : `${BASE_URL}${project.image}`} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-[40%] h-[50%] md:h-full p-8 md:p-10 flex flex-col justify-between relative z-20 bg-[#030712]/50">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-bold">
                            {project.project_type || project.type || "FILE.DAT"}
                          </span>
                          <span className="font-mono text-xl text-white/10 font-black">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase mb-4 text-white">
                          {project.title}
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {typeof project.technologies === 'string' 
                            ? project.technologies.split(',').slice(0, 3).map((t: string) => (
                               <span key={t} className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[8px] uppercase tracking-widest text-slate-400">
                                  {t.trim()}
                               </span>
                            ))
                            : project.technologies?.slice(0, 3).map((t: string) => (
                               <span key={t} className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[8px] uppercase tracking-widest text-slate-400">
                                  {t}
                               </span>
                            ))
                          }
                        </div>
                        
                        <div className="flex items-center gap-4 text-cyan-400 font-mono text-[10px] uppercase tracking-widest font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                          <span>Inizializza Profilo</span>
                          <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.article>
            ))
          )}

          {/* End Slide */}
          <div className="w-[85vw] md:w-[300px] shrink-0 snap-center h-[60vh] flex flex-col items-center justify-center border-l border-white/5">
            <Circle size={32} className="text-slate-600 mb-6" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">END OF DATABASE</span>
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

export default NebulaProgetti;
