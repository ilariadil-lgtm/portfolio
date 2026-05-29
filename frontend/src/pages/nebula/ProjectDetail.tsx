import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "@/lib/api";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Cpu, Layout, HardDrive, Terminal, Zap, ShieldCheck } from "lucide-react";
import { NebulaNav } from "./components/NebulaNav";

const BASE_URL = 'http://localhost:8000';

const NebulaProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (id) {
          const data = await api.getProject(id);
          setProject(data);
        }
      } catch (error) {
        console.error("Errore nel caricamento del progetto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pl-0 md:pl-32 bg-[#030712] flex items-center justify-center font-mono text-cyan-400 animate-pulse">
        SYNCHRONIZING CASE STUDY...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pl-0 md:pl-32 bg-[#030712] flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-black tracking-tighter">DATA LOSS / 404</h1>
        <Link to="/progetti" className="px-6 py-2 bg-[#030712] text-slate-950 rounded-xl font-bold uppercase text-xs tracking-widest">
          Return to Hub
        </Link>
      </div>
    );
  }

  const techList = typeof project.technologies === 'string' 
    ? project.technologies.split(',').map((t: string) => t.trim()) 
    : project.technologies;

  return (
    <div className="min-h-screen pl-0 md:pl-32 bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden pt-32 pb-20">
      <NebulaNav />

      {/* Hero Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-700/5 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Grid */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
           <div className="lg:col-span-8">
              <Link to="/progetti" className="inline-flex items-center gap-2 text-cyan-400 font-mono text-[10px] uppercase tracking-widest mb-10 hover:translate-x-[-4px] transition-transform">
                 <ArrowLeft size={14} /> / / BACK TO REPOSTORY
              </Link>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
                 {project.title}
              </h1>
           </div>
           
           <div className="lg:col-span-4 pb-4">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
                 <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                       <span className="text-slate-500">TYPE:</span>
                       <span className="text-cyan-400 uppercase tracking-widest font-bold">{project.type || "PRODUCT"}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                       <span className="text-slate-500">STATUS:</span>
                       <span className="text-emerald-400 uppercase tracking-widest font-bold">DEPLOYED</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                       <span className="text-slate-500">VERSION:</span>
                       <span className="text-yellow-400 uppercase tracking-widest font-bold">{project.year || "3.1.0"}</span>
                    </div>
                 </div>
              </div>
           </div>
        </header>

        {/* Featured Image - Glass Frame */}
        <section className="mb-32">
           <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[42px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative aspect-[21/9] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                 <img 
                   src={project.image?.startsWith('http') ? project.image : `${BASE_URL}${project.image}`} 
                   alt={project.title} 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-40"></div>
              </div>
           </div>
        </section>

        {/* content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-48">
           {/* Left: Mission Statement */}
           <div className="lg:col-span-12 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                 <div className="space-y-8">
                    <div className="flex gap-4 items-center">
                       <Terminal className="text-cyan-400" />
                       <h2 className="text-3xl font-black uppercase tracking-tighter">Mission briefing</h2>
                    </div>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                       {project.description}
                    </p>
                 </div>
                 
                 <div className="space-y-12">
                     {/* Tech Card */}
                     <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-8 border-l-2 border-cyan-400 pl-4">System Stack</h3>
                        <div className="flex flex-wrap gap-2">
                           {techList?.map((tech: string) => (
                              <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-xl font-mono text-[10px] uppercase tracking-widest text-slate-300">
                                 {tech}
                              </span>
                           ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6">
                           {project.project_url && (
                              <a href={project.project_url} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase transition-colors hover:text-cyan-400">
                                 <ExternalLink size={14} /> View Link
                              </a>
                           )}
                           {project.github_url && (
                              <a href={project.github_url} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase transition-colors hover:text-cyan-400">
                                 <Github size={14} /> Repository
                              </a>
                           )}
                        </div>
                     </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA: Next Mission */}
        <section className="py-32 border-t border-white/5 text-center">
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">READY FOR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">NEW ORIGINS?</span></h2>
           <Link to="/progetti" className="group inline-flex items-center gap-8 px-12 py-6 rounded-full bg-[#030712] text-slate-950 font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="uppercase text-sm tracking-widest">Return to Base</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-white/5 opacity-40">
         <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em]">Data Stream: ILARIALAB OS / / Encrypted with 256-bit stardust</p>
         </div>
      </footer>
    </div>
  );
};

export default NebulaProjectDetail;
