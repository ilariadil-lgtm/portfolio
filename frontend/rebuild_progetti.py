import re

file_path = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Progetti.tsx"

new_content = """import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const fallbackProjects = [
  { id: 1, title: "StorageHub", slug: "storagehub", year: "2026", main_image: "/assets/projects/storage-hub/dashboard.webp" },
  { id: 2, title: "Freelens", slug: "freelens", year: "2026", main_image: "/assets/projects/freelens/home.webp" },
  { id: 3, title: "Villa Masami", slug: "villamasami", year: "2025", main_image: "/assets/projects/villamasami/home.webp" },
  { id: 4, title: "Newpop", slug: "newpop", year: "2025", main_image: "/assets/projects/newpop/home.webp" },
  { id: 5, title: "Patti Forniture", slug: "pattiforniture", year: "2025", main_image: "/assets/projects/pattiforniture/home.webp" },
  { id: 6, title: "SicilCosmetic", slug: "sicilcosmetic", year: "2024", main_image: "/assets/projects/sicilcosmetic/home.webp" },
  { id: 7, title: "Baglio Lauria", slug: "bagliolauria", year: "2024", main_image: "/assets/projects/bagliolauria/home.webp" },
  { id: 8, title: "Chario Hi-Fi", slug: "chariohifi", year: "2024", main_image: "/assets/projects/chario/home.webp" },
  { id: 9, title: "Vini Gambino", slug: "vinigambino", year: "2024", main_image: "/assets/projects/gambino/home.webp" },
  { id: 10, title: "Villa Mima", slug: "villamima", year: "2023", main_image: "/assets/projects/villamima/home.webp" },
  { id: 11, title: "Sophia Theme", slug: "sophiatheme", year: "2023", main_image: "" }
];

const NebulaProgetti = () => {
  usePageMeta({
    title: "Lavori Selezionati",
    description: "Esplora i progetti, e-commerce e piattaforme digitali.",
  });
  
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        const apiProjects = data.results || data;
        if (apiProjects.length > 0) {
          setProjects(apiProjects);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        setProjects(fallbackProjects);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#050505] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col">
      <NebulaNav />

      <header className="pt-40 pb-20 md:pt-56 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-8 block">
            Archivio
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-bricolage font-bold text-6xl md:text-8xl lg:text-[9vw] leading-[0.85] tracking-tight uppercase"
          >
            LAVORI <br/><span className="font-fraunces italic text-white/50 font-light">SELEZIONATI</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <Link 
                key={project.id} 
                to={`/progetti/${project.slug}`}
                className="group flex flex-col gap-6"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
                  <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                  <img 
                    src={project.main_image?.startsWith('/') ? project.main_image : (project.main_image ? `${BASE_URL}${project.main_image}` : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">{project.year || "2024"}</span>
                  <h3 className="font-bricolage text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default NebulaProgetti;
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Progetti rebuilt")
