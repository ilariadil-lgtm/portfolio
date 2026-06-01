import React, { useEffect, useState, Suspense } from "react";
import { api } from "@/lib/api";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { RevealText } from "@/components/RevealText";
import { HeroCanvas } from "./components/HeroCanvas";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const NebulaIndex = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Parallax Values per Awwwards Scroll
  const parallaxSlow = useTransform(scrollY, [0, 3000], [0, -100]);
  const parallaxFast = useTransform(scrollY, [0, 3000], [0, -250]);

  // Interactive Glow
  const [mousePosGlow, setMousePosGlow] = useState({ x: 0, y: 0 });
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
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 100;
      const y = (clientY / window.innerHeight - 0.5) * 100;
      setMousePosGlow({ x, y });
      setMousePos({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const displayProjects = projects.slice(0, 4);

  return (
    <div className="min-h-screen w-full bg-[#050505] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative">
      <NebulaNav />

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {/* HERO SECTION */}
        <motion.section 
          style={{ y: yParallax, opacity: opacityParallax }}
          className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden"
        >
          <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row relative z-20">
            {/* Left Content Column */}
            <div className="flex-1 flex flex-col justify-center max-w-4xl pt-10 md:pt-0">
              <div className="flex flex-col relative z-20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4af37] flex items-center gap-2">
                    <span className="text-[10px]">✦</span> CREATIVE TECH PARTNER
                  </span>
                </div>
                
                <div className="flex flex-col pb-4">
                  <RevealText 
                    text="DESIGNING" 
                    delay={0.1} 
                    className="font-bricolage font-extrabold uppercase tracking-tighter text-6xl md:text-8xl lg:text-[8vw] leading-[0.9] text-white whitespace-nowrap" 
                  />
                  <div className="flex items-center gap-3">
                    <RevealText 
                      text="DIGITAL" 
                      delay={0.2} 
                      className="font-bricolage font-extrabold uppercase tracking-tighter text-6xl md:text-8xl lg:text-[8vw] leading-[0.9] text-[#d4af37] whitespace-nowrap" 
                    />
                    <RevealText 
                      text="FUTURES." 
                      delay={0.3} 
                      className="font-bricolage font-extrabold uppercase tracking-tighter text-6xl md:text-8xl lg:text-[8vw] leading-[0.9] text-white/40 whitespace-nowrap" 
                    />
                  </div>
                </div>
              </div>

              <motion.p 
                className="text-neutral-400 font-inter font-light text-base md:text-lg max-w-md leading-relaxed mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Costruiamo interfacce audaci e infrastrutture solide per farti scalare senza limiti. Dalla brand identity allo sviluppo web avanzato.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12"
              >
                <MagneticWrapper>
                  <Link to="/contatti" className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 hover:border-white/50 bg-transparent text-white font-inter text-sm tracking-widest uppercase transition-all duration-500 overflow-hidden">
                    <span className="relative z-10">Inizia un progetto</span>
                    <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </MagneticWrapper>
              </motion.div>
            </div>

            {/* Right Content Column (WebGL Fluid Sphere) */}
            <motion.div 
              className="absolute right-[-10%] lg:right-[-5vw] top-[20%] lg:top-[15%] h-[60vh] w-[90vw] lg:w-[45vw] flex items-center justify-center pointer-events-auto z-10"
              animate={{ x: mousePosGlow.x * -0.5, y: mousePosGlow.y * -0.5 }}
              transition={{ type: "spring", bounce: 0, duration: 2 }}
            >
              <Suspense fallback={
                <div className="w-[80%] aspect-square rounded-full border-[1px] border-[#d4af37]/20 bg-black/40 flex items-center justify-center backdrop-blur-3xl animate-pulse">
                  <div className="font-mono text-xs text-[#d4af37] tracking-[0.3em] uppercase">Loading WebGL...</div>
                </div>
              }>
                <HeroCanvas />
              </Suspense>
            </motion.div>
            
          </div>
        </motion.section>

        {/* ───────────────────────────────────────────────────────────────────
             ABOUT — DRAMATIC QUOTE
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 py-32 md:py-48 overflow-hidden"
        >
          {/* Decorative huge number */}
          <motion.span 
            style={{ y: parallaxFast }}
            className="absolute right-0 top-0 font-bricolage font-black text-[30vw] leading-none text-white/[0.03] select-none pointer-events-none pr-8"
          >
            02
          </motion.span>

          <div className="px-6 md:px-12 lg:px-24 relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-12 block">02 — L'Approccio</span>

            {/* Massive editorial quote */}
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-bricolage font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white max-w-5xl mb-16"
            >
              Costruisco identità visive e prodotti{" "}
              <span className="font-fraunces italic font-light text-[#d4af37]">digitali completi.</span>
              {" "}Dalla visione creativa allo{" "}
              <span className="font-fraunces italic font-light text-white/70">sviluppo tecnico.</span>
            </motion.h2>

            <div className="flex flex-col md:flex-row md:items-start gap-12 max-w-5xl">
              <div className="md:w-1/2 h-[1px] bg-white/10 mt-4 hidden md:block" />
              <div className="md:w-1/2">
                <p className="font-inter text-base text-white/60 leading-[1.9] font-light mb-8">
                  Non credo nei confini rigidi tra chi disegna e chi programma. Il mio background nel graphic design mi garantisce la cura per il dettaglio estetico, mentre la competenza tecnica mi permette di trasformare l'estetica in interfacce web, e-commerce e app perfettamente funzionanti.
                </p>
                <MagneticWrapper>
                  <Link to="/chisono" className="group inline-flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white hover:text-[#d4af37] transition-colors duration-300">
                    <span className="relative">
                      Esplora il profilo
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#d4af37] group-hover:w-full transition-all duration-700 ease-out" />
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </MagneticWrapper>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ───────────────────────────────────────────────────────────────────
             TECHNICAL SKILLS (AWWWARDS MINIMAL) 
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 md:px-12 lg:px-24 py-32 relative z-20"
        >
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-6 block">03 — Le Competenze</span>
                <RevealText text="Design. Code. Product." className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white" />
              </div>
              <p className="font-inter text-sm text-white/60 max-w-xs font-light leading-relaxed">
                Un approccio ibrido che unisce sensibilità estetica e rigore tecnico.
              </p>
            </div>

            {/* PILL / TAG GRID */}
            <div className="space-y-12">

              {/* Cluster 1: Design */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">— Design</span>
                <div className="flex flex-wrap gap-3">
                  {["UI Design", "UX Research", "Design Systems", "Wireframing", "Prototipazione", "Brand Identity", "Typography"].map((tag) => (
                    <span key={tag} className="group px-5 py-3 border border-white/10 text-white/50 font-inter text-sm font-medium tracking-wide rounded-none hover:border-[#d4af37]/60 hover:text-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cluster 2: Dev */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">— Sviluppo</span>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "WebGL / Three.js", "Django REST", "WordPress", "WooCommerce"].map((tag) => (
                    <span key={tag} className="group px-5 py-3 border border-white/10 text-white/50 font-inter text-sm font-medium tracking-wide rounded-none hover:border-[#d4af37]/60 hover:text-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cluster 3: Strategy */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">— Strategia & Prodotto</span>
                <div className="flex flex-wrap gap-3">
                  {["Product Management", "Sprint Planning", "E-commerce Strategy", "SEO Tecnico", "Analytics", "CRO"].map((tag) => (
                    <span key={tag} className="group px-5 py-3 border border-white/10 text-white/50 font-inter text-sm font-medium tracking-wide rounded-none hover:border-[#d4af37]/60 hover:text-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.section>

        {/* MARQUEE STRIP — tra Skills e Progetti */}
        <div className="w-full overflow-hidden border-y border-white/5 py-5 relative z-20">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-12 flex-shrink-0">
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/20">UI Design</span>
                <span className="text-[#d4af37]/40 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/20">Web Development</span>
                <span className="text-[#d4af37]/40 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/20">Brand Identity</span>
                <span className="text-[#d4af37]/40 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/20">Product Strategy</span>
                <span className="text-[#d4af37]/40 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/20">Framer Motion</span>
                <span className="text-[#d4af37]/40 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/20">WebGL</span>
                <span className="text-[#d4af37]/40 text-xs">✦</span>
                <span className="font-bricolage font-bold text-sm uppercase tracking-[0.2em] text-white/20">E-commerce</span>
                <span className="text-[#d4af37]/40 text-xs">✦</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
             PROJECTS — DRAMATIC LIST
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="py-32 relative z-20"
        >
          <div className="px-6 md:px-12 lg:px-24 mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-6 block">04 — Lavori Selezionati</span>
            <RevealText text="SELECTED WORKS" className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white" />
          </div>

          <div className="w-full border-t border-white/10">
            <div className="relative">
              
              {/* Mouse Trail Image */}
              <motion.div 
                className="hidden lg:block fixed pointer-events-none z-50 w-[380px] aspect-[16/10] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.9)] border border-white/10"
                animate={{ 
                  x: mousePos.x, 
                  y: mousePos.y,
                  opacity: hoveredProject !== null ? 1 : 0,
                  scale: hoveredProject !== null ? 1 : 0.85
                }}
                transition={{ type: "spring", damping: 28, stiffness: 140, mass: 0.4 }}
                style={{ translateX: "-50%", translateY: "-60%", left: 0, top: 0 }}
              >
                {displayProjects.map((p: any) => (
                  <img 
                    key={p.id}
                    src={p.image?.startsWith('http') || p.image?.startsWith('/') ? p.image : `${BASE_URL}${p.image}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${hoveredProject === p.id ? 'opacity-100' : 'opacity-0'}`} 
                    alt={p.title}
                  />
                ))}
              </motion.div>

              {displayProjects.map((item, i) => (
                <Link 
                  key={item.id} 
                  to={item.url} 
                  className="group relative flex items-center border-b border-white/5 hover:border-white/20 transition-all duration-500 cursor-crosshair overflow-hidden"
                  onMouseEnter={() => setHoveredProject(item.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-full flex items-center gap-6 md:gap-12 px-6 md:px-12 lg:px-24 py-10 md:py-14">
                    {/* Progressive number */}
                    <span className="font-bricolage font-black text-4xl md:text-6xl lg:text-8xl text-white/10 group-hover:text-white/20 transition-colors duration-500 tabular-nums flex-shrink-0 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Title + type */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bricolage font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-white/60 group-hover:text-white transition-colors duration-500 truncate">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/70 group-hover:text-[#d4af37] transition-colors mt-3 block">
                        {item.type}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-6 group-hover:translate-x-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center">
                        <ArrowUpRight size={20} strokeWidth={1.5} className="text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-20 px-6">
            <MagneticWrapper>
              <Link to="/progetti" className="group flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors p-4">
                <span className="relative">
                  Visualizza tutti i progetti
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700 ease-out" />
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
              </Link>
            </MagneticWrapper>
          </div>
        </motion.section>

        <NebulaBriefingCTA />

        <NebulaFooter />
      </main>
    </div>
  );
};

export default NebulaIndex;
