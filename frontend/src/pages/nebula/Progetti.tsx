import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { NebulaFooter } from "./components/NebulaFooter";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const NebulaProgetti = () => {
  usePageMeta({
    title: "Progetti",
    description: "Esplora i sistemi digitali costruiti. Web app, design systems ed e-commerce ad alte prestazioni.",
  });

  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <div className="min-h-screen w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative">
      <NebulaNav />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* ───────────────────────────────────────────────────────────────────
          HERO SECTION
          ─────────────────────────────────────────────────────────────────── */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
             <div className="inline-flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">SELECTED WORKS</span>
                <div className="w-12 h-[1px] bg-[#d4af37]/30" />
             </div>
             <h1 className="font-fraunces italic font-light text-[11vw] lg:text-[7vw] leading-[0.9] tracking-tight text-white mb-6">
                <RevealText text="Esplora" delay={0.1} />
                <RevealText text="i progetti." delay={0.2} className="text-[#d4af37]" />
             </h1>
          </div>
          <div className="max-w-xs md:pb-4">
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 1 }}
               className="font-outfit font-light text-white/50 text-lg leading-relaxed border-l border-[#d4af37]/30 pl-6"
             >
               Ogni progetto rappresenta una missione verso l'eccellenza tecnica e l'armonia visiva. Esplora le soluzioni digitali sviluppate.
             </motion.p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          VERTICAL GALLERY
          ─────────────────────────────────────────────────────────────────── */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center pb-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-32">
          {loading ? (
            <div className="w-full py-32 flex flex-col items-center justify-center font-mono text-[10px] text-[#d4af37] animate-pulse uppercase tracking-[0.2em] gap-4">
               <Hexagon size={24} className="animate-spin-slow opacity-50" />
               Retrieving data...
            </div>
          ) : (
            projects.map((project, i) => (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full group relative"
              >
                <Link to={`/progetti/${project.slug || project.id}`} className="block w-full">
                  <div className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                    
                    {/* Image Area */}
                    <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-[16/10] relative overflow-hidden bg-white/5 group-hover:border-[#d4af37]/30 transition-all duration-700">
                      <img 
                        src={project.image?.startsWith('http') || project.image?.startsWith('/') ? project.image : `${BASE_URL}${project.image}`} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-2/5 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">
                          {project.project_type || project.type || "CASE STUDY"}
                        </span>
                        <span className="font-fraunces italic font-light text-2xl text-white/20">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h2 className="font-bricolage font-black tracking-tight text-4xl lg:text-5xl mb-6 text-white group-hover:text-[#d4af37] transition-colors duration-500">
                        {project.title}
                      </h2>
                      <p className="font-outfit font-light text-white/50 text-base leading-relaxed mb-8">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-12">
                        {typeof project.technologies === 'string' 
                          ? project.technologies.split(',').slice(0, 3).map((t: string) => (
                             <span key={t} className="px-3 py-1.5 border border-white/10 text-white/70 text-[8px] uppercase tracking-[0.1em] font-mono">
                                {t.trim()}
                             </span>
                          ))
                          : project.technologies?.slice(0, 3).map((t: string) => (
                             <span key={t} className="px-3 py-1.5 border border-white/10 text-white/70 text-[8px] uppercase tracking-[0.1em] font-mono">
                                {t}
                             </span>
                          ))
                        }
                      </div>
                      
                      <div className="flex items-center gap-4 text-[#d4af37] font-mono text-[10px] uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">
                        <span>EXPLORE PROJECT</span>
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))
          )}
        </div>
      </main>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default NebulaProgetti;
