import re

file_path = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx"

new_content = """import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion, useScroll, useTransform } from "framer-motion";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const NebulaIndex = () => {
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setFeaturedProjects((data.results || data).slice(0, 4));
      } catch (error) {
        console.error("Errore nel caricamento dei progetti:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#050505] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col">
      <NebulaNav />

      {/* AMBIENT EFFECTS (CLEAN EDITORIAL LUXURY) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
        <motion.div 
          className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#d4af37] blur-[120px] md:blur-[180px] opacity-[0.06] mix-blend-screen"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#d4af37] blur-[100px] md:blur-[160px] opacity-[0.04]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 lg:px-24">
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
        <div className="py-20 border-y border-white/5 bg-[#050505]/50 backdrop-blur-md overflow-hidden flex whitespace-nowrap">
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

        {/* CHI SONO HIGHLIGHT */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5 relative">
                 <div className="aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                    <img src="/assets/profile/portrait.webp" alt="Ilaria Diliberto" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                 </div>
              </div>
              <div className="md:col-span-7 flex flex-col items-start gap-8">
                 <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37]">01. L'Approccio</span>
                 <h2 className="font-bricolage text-4xl md:text-6xl font-bold leading-tight">L'ESTETICA INCONTRA LA LOGICA STRUTTURALE.</h2>
                 <p className="font-inter text-lg text-white/60 leading-[1.8] max-w-2xl">
                    Ogni pixel, ogni transizione e ogni riga di codice è pensata per creare un'esperienza immersiva. Non sviluppo solo siti web, ma costruisco piattaforme che raccontano storie attraverso l'interazione e il design curatoriale.
                 </p>
                 <Link to="/chisono" className="mt-4 px-8 py-4 border border-white/20 rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300">
                    Scopri di Più
                 </Link>
              </div>
           </div>
        </section>

        {/* SELECTED WORKS GALLERY (HORIZONTAL-LIKE GRID) */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <h2 className="font-bricolage text-5xl md:text-7xl font-bold uppercase tracking-tight">Selected<br/><span className="font-fraunces italic font-light text-white/50">Works</span></h2>
              <Link to="/progetti" className="inline-flex items-center gap-4 text-white/50 font-mono text-xs uppercase tracking-[0.3em] hover:text-[#d4af37] transition-colors pb-4 border-b border-white/10 hover:border-[#d4af37]">
                Tutto l'Archivio <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-32">
              {featuredProjects.map((project, index) => (
                <Link 
                  key={project.id || index} 
                  to={`/progetti/${project.slug}`}
                  className={`group flex flex-col gap-8 ${index % 2 !== 0 ? 'md:mt-48' : ''}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                    <img 
                      src={project.main_image?.startsWith('/') ? project.main_image : (project.main_image ? `${BASE_URL}${project.main_image}` : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bricolage text-3xl font-bold uppercase tracking-tight">{project.title}</h3>
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">{project.type || "Digital Platform"}</span>
                    </div>
                    <span className="font-fraunces italic text-lg text-[#d4af37]">{project.year || "2024"}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default NebulaIndex;
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Index V3 rebuilt")
