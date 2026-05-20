import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, Search, Filter, Rocket, Terminal, Layers, Layout, HardDrive, Cpu, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";

const BASE_URL = 'http://localhost:8000';

const NebulaProgetti = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden pt-32 pb-20">
      <NebulaNav />

      {/* ───────────────────────────────────────────────────────────────────
          BACKGROUND ELEMENTS
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono mb-6 uppercase tracking-widest">
              / / Central Archive
           </div>
           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight mb-8">
              ORBITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">MANIFEST</span>
           </h1>
           <p className="max-w-xl text-slate-500 leading-relaxed">
              Esplora i sistemi digitali e le infrastrutture che ho costruito. 
              Ogni progetto rappresenta una missione verso l'eccellenza tecnica e visiva.
           </p>
        </header>

        {/* Project Grid */}
        {loading ? (
          <div className="h-96 flex items-center justify-center font-mono text-cyan-400 animate-pulse">
             SYNCHRONIZING DATA...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {projects.map((project, i) => (
               <article 
                key={project.id}
                className="group relative rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-700 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)]"
               >
                  <Link to={`/progetti/${project.id}`} className="block">
                    <div className="aspect-[16/10] overflow-hidden relative">
                       <img 
                        src={project.image?.startsWith('http') ? project.image : `${BASE_URL}${project.image}`} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
                       />
                       {/* Glass Overlay on Hover */}
                       <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-slate-950/80 backdrop-blur-xl border border-white/10 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                          {project.type || "Digital Mission"}
                       </div>
                    </div>

                    <div className="p-10 space-y-6">
                       <div className="flex items-center justify-between">
                          <h2 className="text-3xl font-black tracking-tight group-hover:text-cyan-400 transition-colors uppercase">
                             {project.title}
                          </h2>
                          <span className="text-slate-700 font-black text-5xl opacity-0 group-hover:opacity-10 transition-opacity">
                             0{i + 1}
                          </span>
                       </div>
                       
                       <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                       </p>

                       <div className="flex flex-wrap gap-2 pt-4">
                          {typeof project.technologies === 'string' 
                            ? project.technologies.split(',').map((t: string) => (
                               <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                                  {t.trim()}
                               </span>
                            ))
                            : project.technologies?.map((t: string) => (
                               <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                                  {t}
                               </span>
                            ))
                          }
                       </div>

                       <div className="pt-8 flex items-center gap-4 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                          <span className="text-cyan-400">INITIATE LINK</span>
                          <ArrowRight size={18} className="text-cyan-400" />
                       </div>
                    </div>
                  </Link>
               </article>
            ))}
          </div>
        )}
      </main>

      <footer className="py-20 text-center border-t border-white/5 relative z-10 mt-32">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold tracking-tighter mb-4 text-slate-200">ILARIALAB<span className="text-cyan-400">.</span></h2>
            <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.4em]">Archived Data Systems // Project List Update 4.2</p>
         </div>
      </footer>
    </div>
  );
};

export default NebulaProgetti;
