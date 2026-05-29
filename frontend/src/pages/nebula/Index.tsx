import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, ArrowUpRight, Cpu, Globe, Terminal, Zap, Fingerprint, Activity, Code2, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion } from "framer-motion";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Componente temporaneo per testare la Navigation Superiore in stile Glassmorphism
const GlassTopNav = () => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-2xl hidden md:flex items-center justify-between px-6 py-4 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_8px_32px_rgba(0,0,0,0.6)]"
    >
      <div className="text-white font-sans font-bold tracking-tight text-lg">ID.</div>
      <div className="flex items-center gap-8 text-sm font-sans font-medium text-slate-300">
        <Link to="/progetti" className="hover:text-white transition-colors">Lavori</Link>
        <Link to="/chisono" className="hover:text-white transition-colors">Chi Sono</Link>
        <Link to="/servizi" className="hover:text-white transition-colors">Servizi</Link>
        <Link to="/blog" className="hover:text-white transition-colors">Archivio</Link>
      </div>
      <Link to="/contatti" className="px-5 py-2 rounded-full bg-white text-black font-sans font-bold text-sm hover:scale-105 transition-transform">
        Contattami
      </Link>
    </motion.div>
  );
};

const NebulaIndex = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const [projData, servData] = await Promise.all([
          api.getProjects(),
          api.getServices()
        ]);
        setProjects(projData.results || projData);
        setServices(servData.results || servData);
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
      title: "Villa Masami",
      type: "Brand Identity • UI/UX Design • Web",
      image: "/assets/projects/villa-masami/homepage.webp",
      url: "/progetti/villamasami",
      description: "Un progetto digitale completo. Cura integrale dell'identità della struttura, dal logo allo sviluppo WordPress."
    },
    {
      id: 2,
      title: "Freelens",
      type: "SaaS Management • UI/UX Design",
      image: "/assets/projects/freelens/home.webp",
      url: "/progetti/freelens",
      description: "Spazio digitale di project management per gestire progetti e task, riprendendo il controllo del proprio tempo con un'interfaccia focalizzata."
    },
    {
      id: 3,
      title: "StorageHub",
      type: "Sviluppo Web Full-Stack • Cloud Management",
      image: "/assets/projects/storage-hub/dashboard.webp",
      url: "/progetti/storagehub",
      description: "Una web app intelligente di storage e inventory management su scala enterprise."
    }
  ];

  const displayProjects = projects.length > 0 ? projects.slice(0, 3) : fallbackProjects;

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-white/20 overflow-hidden relative">
      
      {/* ───────────────────────────────────────────────────────────────────
          NAVIGATION (TEMPORARY DUAL TEST)
          ─────────────────────────────────────────────────────────────────── */}
      <NebulaNav />
      <GlassTopNav />

      {/* ───────────────────────────────────────────────────────────────────
          AMBIENT EFFECTS (SUPERHUMAN DARK GLASSMORPHISM)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0B0C10]">
        {/* Soft colorful deep background blobs */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/10 blur-[130px] mix-blend-screen"
        />
        
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/10 blur-[150px] mix-blend-screen"
        />

        {/* Ambient tracker */}
        <motion.div 
          className="absolute w-[40vw] h-[40vw] rounded-full bg-blue-500/5 blur-[120px] transition-transform duration-1000 ease-out mix-blend-screen"
          style={{ transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)` }}
        />
      </div>

      <main className="relative z-10 w-full min-h-screen pl-0 md:pl-24 flex flex-col">
        
        {/* ───────────────────────────────────────────────────────────────────
             HERO SECTION (GLASSMORPHISM STYLE)
             ─────────────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-32 pb-24">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              className="lg:col-span-8 flex flex-col gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] w-max">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-300">UX Designer & Web Developer</span>
              </div>
              
              <h1 className="font-sans text-6xl md:text-8xl lg:text-[8.5vw] leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-600 drop-shadow-sm">
                <span className="font-light">Architettura</span><br />
                <span className="font-bold">Digitale.</span>
              </h1>
              
              <p className="font-sans text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
                Progetto e costruisco ecosistemi digitali su misura: siti web, e-commerce e web app con estrema cura, precisione estetica e performance elevate.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <Link to="/progetti" className="px-8 py-4 rounded-full bg-white text-black font-sans font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                  Esplora il core
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contatti" className="px-8 py-4 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_10px_20px_rgba(0,0,0,0.3)] text-white font-sans font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                  Inizializza Protocollo
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-4 relative h-full min-h-[400px] flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.2 }}
            >
              {/* Superhuman Glass Card Decorative Object */}
              <div className="w-full aspect-[3/4] rounded-3xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-3xl shadow-[0_24px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] p-8 flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] group-hover:bg-indigo-400/30 transition-colors duration-1000" />
                
                <div className="flex justify-between items-start relative z-10">
                  <Fingerprint size={32} className="text-white opacity-80" />
                  <span className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-500">ID.001</span>
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-1 bg-white/50 rounded-full mb-4" />
                  <h3 className="text-white font-sans font-bold text-xl mb-2">System Active</h3>
                  <p className="text-slate-400 font-sans text-sm line-clamp-3">
                    Monitoring all aesthetic values. Performance metrics optimal.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
             TRI-LAYER CINEMATIC MARQUEE 
             ─────────────────────────────────────────────────────────────────── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          
          <div className="flex whitespace-nowrap overflow-hidden -rotate-2 opacity-20 pointer-events-none">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 font-sans text-[8vw] font-black text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              <span>UX ARCHITECTURE • DIGITAL STRATEGY • CLOUD DESIGN •&nbsp;</span>
              <span>UX ARCHITECTURE • DIGITAL STRATEGY • CLOUD DESIGN •&nbsp;</span>
            </motion.div>
          </div>
          <div className="relative z-10 flex whitespace-nowrap overflow-hidden rotate-1 scale-110 -mt-12 md:-mt-24">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 font-sans text-[5vw] font-bold text-white/90 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span>IDENTITÀ VISIVA • ECOSISTEMI DIGITALI • GESTIONE FLUIDA •&nbsp;</span>
              <span>IDENTITÀ VISIVA • ECOSISTEMI DIGITALI • GESTIONE FLUIDA •&nbsp;</span>
            </motion.div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
             ABOUT PREVIEW (GLASSMORPHISM)
             ─────────────────────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-24 py-32 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">02 — Il Mio Approccio</span>
                <div className="w-12 h-[1px] bg-white/30" />
              </div>
              <h2 className="font-sans text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-white mb-8">
                Do forma alle tue idee, <br/>
                dal design al prodotto <br/>
                <span className="text-neutral-400 italic font-light">digitale completo.</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.2 }}
              className="rounded-[2.5rem] bg-white/[0.04] border border-white/[0.12] backdrop-blur-3xl p-10 md:p-14 shadow-[0_24px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              
              <p className="font-sans text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-10 relative z-10">
                "Il mio percorso parte dal graphic design: la cura per l'identità visiva e per i dettagli è da sempre la mia base. Ma per dare davvero vita a un progetto ho capito che non basta fermarsi all'estetica.
                <br /><br />
                Oggi creo siti web, e-commerce e app gestendo il processo a 360 gradi come Tech Product Manager. Ascolto le tue necessità, curo la grafica e mi occupo dello sviluppo pratico. Il mio obiettivo non è solo consegnarti un prodotto che funzioni alla perfezione, ma rendere tutto il lavoro fluido, umano e privo di intoppi tecnici."
              </p>
              
              <Link to="/chisono" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors relative z-10">
                Esplora i servizi
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
             TECHNICAL SKILL RADAR 
             ─────────────────────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-24 py-32 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">03 — Le Mie Competenze</span>
                <div className="w-12 h-[1px] bg-white/30" />
              </div>
              <h2 className="font-sans text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white mb-10">
                Aree di <br />
                <span className="text-neutral-500 italic font-light">Competenza.</span>
              </h2>
              <p className="font-sans text-lg text-slate-400 leading-relaxed mb-12 border-l-2 border-white/20 pl-6">
                Non credo nei confini rigidi tra chi disegna e chi programma. Questo schema riassume il mio bagaglio tecnico e creativo: un mix di competenze nato per curare ogni aspetto del tuo progetto.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "UI & UX DESIGN", value: "95%" },
                  { label: "SVILUPPO WEB", value: "90%" },
                  { label: "WORDPRESS & PRESTASHOP", value: "85%" },
                  { label: "TECH PRODUCT MANAGEMENT", value: "80%" }
                ].map((skill, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 group cursor-default">
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">{skill.label}</span>
                    <span className="font-mono text-xs text-neutral-400 font-bold">{skill.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 relative h-[500px] flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 30, damping: 20 }}
            >
              {/* Superhuman Glass Radar Mockup */}
              <div className="relative w-[400px] h-[400px] rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-3xl flex items-center justify-center shadow-[0_24px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
                {[200, 300, 400].map((size, i) => (
                  <div key={i} className="absolute rounded-full border border-white/5" style={{ width: size, height: size }} />
                ))}
                
                {/* Simulated Radar Polygon */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible z-10">
                  <motion.polygon
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    points="50,10 82.5,31.25 86.8,71.25 50,90 15.36,70 13.19,28.75"
                    fill="rgba(255, 255, 255, 0.05)"
                    stroke="#ffffff"
                    strokeWidth="0.5"
                    style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))" }}
                  />
                </svg>

                <div className="absolute w-2 h-2 rounded-full bg-white animate-pulse z-20 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
             PROJECTS HORIZONTAL SLIDER (GLASS CARDS)
             ─────────────────────────────────────────────────────────────────── */}
        <section className="py-32 relative z-20">
          <div className="px-6 md:px-12 lg:px-24 flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">04 — PROGETTI</span>
                <div className="w-12 h-[1px] bg-white/30" />
              </div>
              <h2 className="font-sans text-5xl md:text-7xl font-black leading-none tracking-tighter text-white">
                Dal problema <br />
                <span className="text-neutral-400 italic font-light">al prodotto.</span>
              </h2>
            </div>
            <Link to="/progetti" className="group inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] text-white font-sans text-sm hover:bg-white/10 transition-colors">
              Tutti i progetti
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-12 lg:px-24">
            <div className="flex gap-8 md:gap-12 w-max pb-12">
              {displayProjects.map((item, i) => (
                <div key={item.id} className="snap-center w-[85vw] md:w-[60vw] lg:w-[45vw]">
                  <Link to={item.url} className="block relative group rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 border border-white/10">
                    <img 
                      src={
                        item.image?.startsWith('http') || item.image?.startsWith('/')
                          ? item.image
                          : `${BASE_URL}${item.image}`
                      } 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Superhuman Glass Bottom Panel */}
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-slate-900/60 backdrop-blur-2xl border-t border-white/[0.12] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">{item.type}</span>
                      <h3 className="text-2xl font-bold text-white font-sans">{item.title}</h3>
                      <p className="text-slate-300 text-sm line-clamp-2 mt-2">{item.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NebulaBriefingCTA />

        <NebulaFooter />
      </main>
    </div>
  );
};

export default NebulaIndex;
