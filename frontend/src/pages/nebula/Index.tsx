import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, Cpu, Globe, Rocket, Terminal, Layers, Zap, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";

const BASE_URL = 'http://localhost:8000';

import { motion, AnimatePresence } from "framer-motion";

const NebulaIndex = () => {
  const [about, setAbout] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutData, prodData] = await Promise.all([
          api.getAbout(),
          api.getProjects()
        ]);
        setAbout(aboutData);
        setProjects(prodData.results || prodData);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };
    fetchData();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fallbackProjects = [
    {
      id: 1,
      title: "Nebula OS",
      type: "CLOUD_INTERFACE",
      image: "/assets/project-nebula.png",
      url: "/progetti/1",
      description: "Un'interfaccia neurale per la gestione di infrastrutture cloud distribuite."
    },
    {
      id: 2,
      title: "Zenith Hifi",
      type: "E-COMMERCE_EXPERIENCE",
      image: "/assets/project-zenith.png",
      url: "/progetti/2",
      description: "Esperienza d'acquisto immersiva per sistemi audio ad alta fedeltà."
    }
  ];

  const displayProjects = projects.length > 0 ? projects.slice(0, 3) : fallbackProjects;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <NebulaNav />

      {/* ───────────────────────────────────────────────────────────────────
          DYNAMIC BACKGROUND ORBS
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)` }}
        />
        <div 
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${-mousePos.x * 0.03}px, ${-mousePos.y * 0.03}px)` }}
        />
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          HERO SECTION — GLASS OVERLAY
          ─────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-in fade-in slide-in-from-left duration-700">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-400">System Online / Versione 2.0</span>
              </div>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                CRAFTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500">
                   DIGITAL
                </span> <br />
                SYNERGY.
              </h1>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
                 Un'esperienza immersiva dove il <strong>Design</strong> incontra la <strong>Cloud Intelligence</strong>. 
                 Sviluppo interfacce ad alte prestazioni con un'anima estetica cristallina.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                 <Link to="/progetti" className="group relative px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold flex items-center gap-4 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                    Initialize Orbit
                    <Zap size={18} className="group-hover:rotate-12 transition-transform" />
                 </Link>
                 <Link to="/contatti" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold backdrop-blur-xl hover:bg-white/10 transition-all">
                    Join Network
                 </Link>
              </div>
            </div>

            {/* Virtual Glass Card */}
            <div className="lg:w-1/2 relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border border-white/10 backdrop-blur-2xl bg-white/[0.02] p-1 flex items-center justify-center">
                  <div className="w-full h-full bg-[#030712]/40 rounded-[22px] overflow-hidden flex items-center justify-center relative">
                     <div className="text-center space-y-6">
                        <Layers size={80} className="mx-auto text-cyan-400/50 animate-bounce transition-all duration-3000" />
                        <div className="space-y-2">
                           <h3 className="text-2xl font-bold tracking-tight">Cloud Native Design</h3>
                           <p className="text-sm text-slate-500 font-mono">Status: Decrypting Potential...</p>
                        </div>
                     </div>
                     {/* Decorative Elements */}
                     <div className="absolute top-8 right-8 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          TECH GRID — TRANSPARENT BLUR
          ─────────────────────────────────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: <Cpu className="text-cyan-400" />, title: "Full Stack", desc: "Django & React Symphony" },
               { icon: <Globe className="text-emerald-400" />, title: "AWS Cloud", desc: "Serverless Infrastructures" },
               { icon: <Zap className="text-yellow-400" />, title: "Real-time", desc: "Optimized Performance" },
               { icon: <MousePointer2 className="text-purple-400" />, title: "UX Craft", desc: "User-centric Flows" }
             ].map((item, i) => (
               <div key={i} className="p-8 rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
                     {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────
          SELECTED MISSIONS (PROJECTS) — TECHNICAL BLUEPRINT BOXES
          ─────────────────────────────────────────────────────────────────── */}
      <section className="py-48 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
            <div className="relative">
               <div className="flex items-center gap-3 mb-4 opacity-50">
                  <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-cyan-400">Sector_03</span>
                  <div className="w-12 h-[1px] bg-cyan-400/20" />
               </div>
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
                 SELECTED <br />
                 <span className="text-cyan-400">MISSIONS.</span>
               </h2>
            </div>
            <Link to="/progetti" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-all">
               View All Systems <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="space-y-64 relative z-10">
            {displayProjects.map((item, i) => (
              <div key={item.id} className="relative group/proj">
                {/* MONUMENTAL BACKGROUND TITLE */}
                <div className={`absolute inset-0 flex items-center ${i % 2 !== 0 ? 'justify-start' : 'justify-end'} opacity-[0.02] pointer-events-none select-none z-0`}>
                  <span className="text-[25vw] font-black leading-none uppercase tracking-tighter text-white">
                    {item.title.split(' ')[0]}
                  </span>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-center relative z-10`}>
                  
                  {/* BLUEPRINT BOX CONTAINER */}
                  <div className={`lg:col-span-9 relative ${i % 2 !== 0 ? 'lg:col-start-4' : 'lg:col-start-1'}`}>
                    
                    {/* ARCHITECTURAL FRAME (SVG) */}
                    <div className="absolute -inset-8 pointer-events-none">
                      <svg className="w-full h-full text-cyan-500/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,5 L0,0 L5,0 M95,0 L100,0 L100,5 M100,95 L100,100 L95,100 M5,100 L0,100 L0,95" fill="none" stroke="currentColor" strokeWidth="0.2" />
                        <circle cx="0" cy="0" r="0.5" fill="currentColor" />
                        <circle cx="100" cy="0" r="0.5" fill="currentColor" />
                        <circle cx="100" cy="100" r="0.5" fill="currentColor" />
                        <circle cx="0" cy="100" r="0.5" fill="currentColor" />
                      </svg>
                      {/* Coordinate markers */}
                      <span className="absolute -top-12 -left-4 font-mono text-[7px] tracking-widest opacity-30 text-cyan-400">LOC_X: {200 + i * 42}.90 // SYS_SYNC_OK</span>
                      <span className="absolute -bottom-12 -right-4 font-mono text-[7px] tracking-widest opacity-30 text-cyan-400">MISSION_ID: 0x00{item.id}</span>
                    </div>

                    <Link to={`/progetti/${item.id}`} className="block relative overflow-hidden group/box perspective-1000">
                      <motion.div
                        whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="relative aspect-[16/9] overflow-hidden bg-white/[0.02] border border-white/5 shadow-2xl rounded-sm"
                      >
                        <motion.img 
                          src={item.image?.startsWith('http') ? item.image : `${BASE_URL}${item.image}`} 
                          alt={item.title} 
                          className="w-full h-full object-cover grayscale opacity-40 group-hover/box:grayscale-0 group-hover/box:opacity-80 transition-all duration-1000"
                        />
                        
                        {/* SCANNING HUD EFFECT */}
                        <div className="absolute inset-0 pointer-events-none">
                          <motion.div 
                            className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20"
                            initial={{ top: "-10%" }}
                            whileHover={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 to-transparent opacity-0 group-hover/box:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Technical Spec HUD */}
                        <div className="absolute inset-0 p-12 flex flex-col justify-between opacity-0 group-hover/box:opacity-100 transition-all duration-700 delay-100">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                              <span className="font-mono text-[8px] text-cyan-400/60 uppercase tracking-[0.4em]">SYSTEM_MODULE</span>
                              <span className="text-xl text-white font-black tracking-tight">{item.type || "MISSION"}</span>
                            </div>
                            <div className="w-14 h-14 rounded-full border border-cyan-400/20 flex items-center justify-center bg-cyan-400/5 backdrop-blur-md">
                              <ArrowRight size={20} className="text-cyan-400" />
                            </div>
                          </div>
                          <div className="flex justify-between items-end border-t border-white/10 pt-8">
                            <div className="flex flex-col gap-1">
                              <span className="font-mono text-[8px] text-cyan-400/60 uppercase tracking-[0.4em]">TECH_RESOURCES</span>
                              <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">RE_ACT / TYPE_SCR / AWS_NOD</span>
                            </div>
                            <span className="font-mono text-[8px] text-white/20 uppercase tracking-[0.5em]">NEBULA_OS_v2.4</span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </div>

                  {/* OVERLAPPING INFO CARD */}
                  <div className={`lg:col-span-4 relative z-30 pointer-events-none mt-12 lg:mt-0 ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1 lg:-mr-32 text-right' : 'lg:col-start-9 lg:-ml-32'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="p-10 md:p-14 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-cyan-400/40 block mb-6">
                        MISSION_NO. 0{i + 1}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black leading-none text-white mb-6">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-10 max-w-xs">
                        {item.description || "Un'esperienza digitale progettata per ridefinire i confini tra architettura cloud e design visivo."}
                      </p>
                      <div className={`flex items-center gap-4 ${i % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                         <div className="w-8 h-[1px] bg-cyan-400/20" />
                         <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-cyan-400">Initialize Uplink</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 relative z-10">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">ILARIALAB<span className="text-cyan-400">.</span></h2>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.4em]">Protocol: Continuous Discovery / / 2024</p>
         </div>
      </footer>
    </div>
  );
};

export default NebulaIndex;
