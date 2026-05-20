import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Filter, Grid, List } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Link } from "react-router-dom";

const BASE_URL = 'http://localhost:8000';

const Progetti = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data.results || data);
      } catch (error) {
        console.error("Errore nel caricamento dei progetti:", error);
      }
    };
    fetchProjects();
  }, []);

  const categories = ["ALL", "UX_DESIGN", "CLOUD_ARCH", "FRONTEND"];
  const filteredProjects = filter === "ALL" ? projects : projects.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />
      
      {/* ═══════════════════════════════════════════════════════════════════
           HERO — ARCHIVE UPLINK
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-32 md:pt-48 pb-24 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
               <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary">System_Archive // v2.4</span>
               <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <h1 className="font-display text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter mb-12">
              SELECTED <br />
              <span className="text-primary italic">MISSIONS.</span>
            </h1>
            <p className="font-body text-xl text-[#3d0f1a]/60 leading-relaxed max-w-xl border-l border-primary/20 pl-8">
              Documentazione tecnica dei sistemi digitali complessi sviluppati. Ogni progetto rappresenta un'iterazione verso la perfezione architettonica.
            </p>
          </motion.div>
        </div>

        {/* Technical Filter HUD */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-y border-editorial py-8">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-4 opacity-40">
              <Filter size={14} />
              <span className="font-typewriter text-[8px] uppercase tracking-[0.3em]">Filter_Protocol</span>
            </div>
            <div className="flex gap-8">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-typewriter text-[9px] uppercase tracking-[0.4em] transition-all relative ${filter === cat ? 'text-primary' : 'text-[#3d0f1a]/40 hover:text-[#3d0f1a]'}`}
                >
                  {cat}
                  {filter === cat && (
                    <motion.div layoutId="filterUnderline" className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6 opacity-30">
             <Grid size={16} className="text-primary cursor-pointer" />
             <List size={16} className="cursor-pointer" />
             <div className="w-[1px] h-4 bg-primary/20 mx-4" />
             <span className="font-typewriter text-[8px] uppercase tracking-[0.2em]">Showing: 0{filteredProjects.length} Systems</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           PROJECT GRID — ASYMMETRIC TECHNICAL LAYOUT
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pb-48 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-32 gap-x-12 lg:gap-x-24">
          {filteredProjects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className={`relative lg:col-span-${(i % 3 === 0) ? '8' : '4'} group`}
            >
               {/* BLUEPRINT FRAME */}
               <div className="absolute -inset-4 pointer-events-none z-0">
                  <svg className="w-full h-full text-primary/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,5 L0,0 L5,0 M95,0 L100,0 L100,5 M100,95 L100,100 L95,100 M5,100 L0,100 L0,95" fill="none" stroke="currentColor" strokeWidth="0.2" />
                  </svg>
               </div>

               <Link to={`/progetti/${project.id}`} className="block relative overflow-hidden group/box">
                  <div className="aspect-[16/9] bg-muted/10 overflow-hidden relative">
                    <motion.img 
                      src={project.image?.startsWith('http') ? project.image : `${BASE_URL}${project.image}`} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    
                    {/* HUD OVERLAY ON HOVER */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                       <div className="flex justify-between items-start">
                          <span className="font-typewriter text-[7px] text-white/60 tracking-[0.4em]">DEPLOY_ID: 00{project.id}</span>
                          <ArrowRight size={14} className="text-white" />
                       </div>
                       <div className="flex justify-between items-end border-t border-white/10 pt-4">
                          <span className="font-typewriter text-[7px] text-white/60">TECH_STACK: {project.type}</span>
                          <span className="font-typewriter text-[7px] text-white/40">© {project.year || "2024"}</span>
                       </div>
                    </div>
                  </div>
               </Link>

               <div className="mt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-typewriter text-[8px] uppercase tracking-[0.5em] text-primary/40">Chapter_0{i + 1}</span>
                    <div className="h-[1px] flex-1 bg-primary/5" />
                  </div>
                  <h3 className="font-display text-4xl font-bold text-[#3d0f1a] mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="font-body text-sm text-[#3d0f1a]/60 leading-relaxed max-w-md">
                    {project.description}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Progetti;
