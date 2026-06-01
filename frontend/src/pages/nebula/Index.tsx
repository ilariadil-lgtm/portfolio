import React, { useEffect, useState, useRef } from "react";
import { api } from "@/lib/api";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { HeroCanvas } from "./components/HeroCanvas";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const skills = [
  "React & Next.js", "WebGL & Three.js", "Framer Motion", "Tailwind CSS",
  "UI/UX Design", "Typography", "Art Direction", "Interaction Design",
  "Django REST", "PostgreSQL", "System Architecture", "Performance Optimization"
];

const NebulaIndex = () => {
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);

  // Mouse Trail Logic for Projects
  const [hoveredProject, setHoveredProject] = useState<any | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 100, damping: 20 });
  const springY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    springX.set(mousePos.x);
    springY.set(mousePos.y);
  }, [mousePos, springX, springY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setFeaturedProjects((data.results || data).slice(0, 4));
      } catch (error) {
        console.error("Errore:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#050505] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative">
      <NebulaNav />

      {/* AMBIENT EFFECTS & WEBGL BACKGROUND */}
      <HeroCanvas />

      <main className="relative z-10 w-full min-h-screen flex flex-col pointer-events-none">
        
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 lg:px-24 pointer-events-auto">
          <motion.div style={{ y: yParallax }} className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-8"
            >
              Creative Developer & Product Designer
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-bricolage font-bold text-6xl md:text-8xl lg:text-[11vw] leading-[0.85] tracking-tight uppercase max-w-5xl mx-auto"
            >
              DIGITAL <br/><span className="font-fraunces italic text-[#d4af37] font-light">ARTISAN</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="mt-12 md:mt-16 text-lg md:text-2xl font-light text-white/60 max-w-3xl font-inter leading-[1.6]"
            >
              Fondo logica architetturale ed estetica editoriale per creare ecosistemi digitali che si distinguono. Niente compromessi, solo eccellenza visiva e codice solido.
            </motion.p>
          </motion.div>
        </section>

        {/* MARQUEE */}
        <div className="py-16 md:py-24 border-y border-white/5 bg-[#050505]/30 backdrop-blur-md overflow-hidden flex whitespace-nowrap pointer-events-auto">
           <motion.div 
             animate={{ x: ["0%", "-50%"] }} 
             transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
             className="flex gap-16 items-center"
           >
             {[...Array(6)].map((_, i) => (
                <h2 key={i} className="text-5xl md:text-8xl font-bricolage font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                   ARCHITETTURA DELL'INFORMAZIONE <span className="text-[#d4af37] px-8">✦</span>
                </h2>
             ))}
           </motion.div>
        </div>

        {/* ABOUT & SKILLS A PILL */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505] pointer-events-auto">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 relative">
                 <div className="aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                    <img src="/assets/profile/portrait.webp" alt="Ilaria Diliberto" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                 </div>
              </div>
              <div className="lg:col-span-7 flex flex-col items-start gap-12">
                 <div className="flex flex-col gap-6">
                   <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37]">01. L'Approccio</span>
                   <h2 className="font-bricolage text-4xl md:text-5xl font-bold leading-tight">L'ESTETICA INCONTRA LA LOGICA STRUTTURALE.</h2>
                   <p className="font-inter text-lg text-white/60 leading-[1.8] max-w-2xl">
                      Ogni pixel, ogni transizione e ogni riga di codice è pensata per creare un'esperienza immersiva. Costruisco ecosistemi digitali che combinano le più moderne tecnologie frontend con una direzione artistica di stampo editoriale.
                   </p>
                 </div>
                 
                 <div className="w-full">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-6 block">02. Stack & Skills</span>
                    <div className="flex flex-wrap gap-3">
                       {skills.map((skill, idx) => (
                          <div key={idx} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-[#d4af37]/20 hover:border-[#d4af37]/50 hover:text-[#d4af37] transition-all cursor-default font-inter text-sm">
                             {skill}
                          </div>
                       ))}
                    </div>
                 </div>

                 <MagneticWrapper>
                   <Link to="/chisono" className="mt-4 px-8 py-4 border border-white/20 rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300">
                      Scopri il Profilo Completo
                   </Link>
                 </MagneticWrapper>
              </div>
           </div>
        </section>

        {/* INTERACTIVE SELECTED WORKS (BRUTALIST GRID & MOUSE TRAIL) */}
        <section className="relative py-32 border-t border-white/10 bg-[#020202] pointer-events-auto overflow-hidden">
          
          {/* Subtle Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[#d4af37] opacity-[0.03] blur-[120px] pointer-events-none" />

          {/* Architectural Background Grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-4 md:grid-cols-12 gap-0">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white/[0.02] h-full hidden md:block" />
              ))}
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 z-10">
            {/* Header */}
            <div className="mb-24 md:mb-32">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-6 block">04 — Lavori Selezionati</span>
              <h2 className="font-bricolage text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-none text-white">
                Selected Works
              </h2>
            </div>

            {/* Project List */}
            <div className="flex flex-col border-t border-white/10">
              {featuredProjects.map((project, index) => (
                <Link 
                  key={project.id || index} 
                  to={`/progetti/${project.slug}`}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative flex flex-col md:flex-row md:items-center py-12 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500"
                >
                  {/* Left Number */}
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="font-bricolage font-black text-6xl md:text-8xl text-white/5 group-hover:text-white/10 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Title & Tags */}
                  <div className="md:w-3/4 flex flex-col justify-center gap-3">
                    <h3 className="font-bricolage text-4xl md:text-6xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#d4af37]">
                      {project.type || "BRAND IDENTITY • UI/UX DESIGN • WEB"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="mt-20 text-center">
              <MagneticWrapper>
                <Link to="/progetti" className="inline-flex items-center gap-4 text-white/50 font-mono text-xs uppercase tracking-[0.3em] hover:text-[#d4af37] transition-colors pb-4 border-b border-white/10 hover:border-[#d4af37]">
                  Tutto l'Archivio <ArrowUpRight size={16} />
                </Link>
              </MagneticWrapper>
            </div>
          </div>

          {/* Mouse Trail Image */}
          <motion.div 
             className="pointer-events-none fixed top-0 left-0 w-[320px] h-[420px] z-50 overflow-hidden shadow-2xl mix-blend-exclusion"
             style={{ 
               x: springX, 
               y: springY,
               translateX: "-50%",
               translateY: "-50%",
               opacity: hoveredProject ? 1 : 0,
               scale: hoveredProject ? 1 : 0.8,
             }}
          >
             {hoveredProject && (
                <img 
                  src={hoveredProject.main_image?.startsWith('/') ? hoveredProject.main_image : (hoveredProject.main_image ? `${BASE_URL}${hoveredProject.main_image}` : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')} 
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover grayscale opacity-90"
                />
             )}
          </motion.div>
        </section>

      </main>

      <div className="pointer-events-auto">
         <NebulaBriefingCTA />
         <NebulaFooter />
      </div>
    </div>
  );
};

export default NebulaIndex;
