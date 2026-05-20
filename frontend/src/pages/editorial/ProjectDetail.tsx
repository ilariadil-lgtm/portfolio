import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "@/lib/api";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Cpu, Globe, Hash, Zap } from "lucide-react";

const BASE_URL = 'http://localhost:8000';

export const EditorialProjectDetail = () => {
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
        console.error("Errore nel carimento del progetto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-typewriter text-[10px] uppercase tracking-[0.5em] text-primary"
        >
          Initializing_Uplink...
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex flex-col items-center justify-center space-y-6 text-[#3d0f1a]">
        <h1 className="font-display text-4xl font-bold">System_Not_Found</h1>
        <Link to="/progetti" className="font-typewriter text-[10px] uppercase tracking-widest text-primary hover:underline">
          Return_to_Archive
        </Link>
      </div>
    );
  }

  const techList = typeof project.technologies === 'string' 
    ? project.technologies.split(',').map((t: string) => t.trim()) 
    : project.technologies;

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO — PROJECT MISSION UPLINK
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 md:pt-48 pb-24 px-6 md:px-12 lg:px-24">
        {/* Background Technical Markers */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link to="/progetti" className="group inline-flex items-center gap-4 font-typewriter text-[9px] uppercase tracking-[0.4em] text-primary mb-16">
              <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
              Archive_Index
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-8">
                   <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary">Mission_Deployment // {project.type}</span>
                   <div className="w-12 h-[1px] bg-primary/20" />
                </div>
                <h1 className="font-display text-[12vw] md:text-[9vw] font-black leading-[0.8] tracking-tighter mb-4">
                  {project.title.split(' ')[0]} <br />
                  <span className="text-primary italic">{project.title.split(' ').slice(1).join(' ')}</span>
                </h1>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 pb-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-white/40 border border-primary/5 p-8 backdrop-blur-3xl shadow-sm relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Hash size={40} />
                 </div>
                 <div className="space-y-6 relative z-10">
                    <div className="flex flex-col gap-1">
                       <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] opacity-40">System_Status</span>
                       <span className="font-typewriter text-[10px] text-green-600 font-medium tracking-widest uppercase">Live_Deployment</span>
                    </div>
                    <div className="flex flex-col gap-1">
                       <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] opacity-40">Release_Date</span>
                       <span className="font-display text-xl font-bold">{project.year || "2024"}</span>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CINEMATIC MEDIA — IMMERSIVE VIEW
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 mb-32 relative">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[21/9] w-full overflow-hidden bg-[#3d0f1a] group shadow-2xl"
        >
          <img 
            src={project.image?.startsWith('http') ? project.image : `${BASE_URL}${project.image}`} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-2000"
          />
          {/* Scanning Line */}
          <motion.div 
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-[100px] bg-gradient-to-b from-primary/10 to-transparent opacity-30 pointer-events-none"
          />
          
          <div className="absolute top-12 left-12 p-4 border border-white/10 backdrop-blur-md hidden md:block">
             <span className="font-typewriter text-[7px] text-white/40 uppercase tracking-[0.5em]">Frame_Buffer // Lossless</span>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           TECHNICAL SPEC SHEET — BLUEPRINT LAYOUT
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 mb-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          
          {/* Left: The Narrative */}
          <div className="lg:col-span-7 space-y-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="flex items-center gap-6">
                <h2 className="font-display text-4xl md:text-5xl font-black italic text-primary">The Vision.</h2>
                <div className="h-[1px] flex-1 bg-primary/10" />
              </div>
              <p className="font-body text-xl md:text-2xl text-[#3d0f1a]/80 leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-12 border-t border-primary/5">
                 <div className="space-y-4">
                    <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] opacity-40">Challenge</span>
                    <p className="font-body text-sm text-[#3d0f1a]/60 italic">"Ottimizzare la risposta neurale del sistema mantenendo un'estetica brutale."</p>
                 </div>
                 <div className="space-y-4">
                    <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] opacity-40">Achievement</span>
                    <p className="font-body text-sm text-[#3d0f1a]/60 italic">"Riduzione della latenza del 40% con un design system scalabile."</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="flex items-center gap-6">
                <h2 className="font-display text-4xl md:text-5xl font-black text-[#3d0f1a]">The Craft.</h2>
                <div className="h-[1px] flex-1 bg-primary/10" />
              </div>
              <p className="font-body text-base text-[#3d0f1a]/60 leading-relaxed columns-1 md:columns-2 gap-12">
                 Ogni pixel è stato posizionato con intenzione, bilanciando l'estetica editoriale con una User Experience fluida. 
                 L'architettura sottostante garantisce scalabilità e performance, permettendo al design di respirare senza compromessi tecnici.
                 Il sistema utilizza un approccio "Technical Blueprint" che valorizza la precisione ingegneristica trasformandola in elemento decorativo.
              </p>
            </motion.div>
          </div>

          {/* Right: Technical Specs HUD */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#3d0f1a] text-white p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />
              
              <div className="space-y-12 relative z-10">
                <div>
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary/60 block mb-10">Tech_Stack_Audit</span>
                  <div className="flex flex-wrap gap-3">
                    {techList?.map((tech: string) => (
                      <span key={tech} className="px-4 py-2 border border-white/10 hover:border-primary transition-colors font-typewriter text-[10px] uppercase tracking-widest text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-8 pt-12 border-t border-white/10">
                  {project.project_url && (
                    <a 
                      href={project.project_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group text-white/60 hover:text-primary transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Globe size={14} />
                        <span className="font-typewriter text-[10px] uppercase tracking-[0.3em]">System_Live</span>
                      </div>
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  )}
                  {project.github_url && (
                    <a 
                      href={project.github_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group text-white/60 hover:text-primary transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Github size={14} />
                        <span className="font-typewriter text-[10px] uppercase tracking-[0.3em]">Code_Repository</span>
                      </div>
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 border border-editorial flex flex-col justify-between h-48 group hover:bg-white/50 transition-all"
            >
               <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-primary">Role_Assignment</span>
               <div className="flex items-end justify-between">
                  <h4 className="font-display text-3xl font-black italic">Lead Designer <br /> & Developer.</h4>
                  <Zap size={24} className="text-primary/20 group-hover:text-primary transition-colors" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CTA — NEXT CHAPTER Protokoll
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-48 border-t border-editorial text-center relative overflow-hidden bg-white/30">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="font-typewriter text-[10px] uppercase tracking-[0.8em] text-primary/40 mb-12 block">End_Of_Transmission</span>
          <h2 className="font-display text-6xl md:text-[8vw] font-black leading-[0.85] tracking-tighter mb-24">
            PRONTO PER IL <br />
            <span className="text-primary italic">PROSSIMO LIVE?</span>
          </h2>
          
          <Link 
            to="/progetti" 
            className="group relative inline-flex items-center gap-12 px-16 py-8 bg-[#3d0f1a] text-white overflow-hidden transition-all duration-700"
          >
             <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
             <span className="relative z-10 font-typewriter text-sm uppercase tracking-[0.4em]">Back_to_Archive</span>
             <ArrowRight size={20} className="relative z-10 group-hover:translate-x-4 transition-transform duration-700" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
