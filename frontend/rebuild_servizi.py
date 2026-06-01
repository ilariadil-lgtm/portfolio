import re

file_path = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Servizi.tsx"

new_content = """import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowUpRight } from "lucide-react";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";

const NebulaServizi = () => {
  usePageMeta({
    title: "Servizi e Competenze",
    description: "Sviluppo Frontend, Product Design, E-Commerce Strategy.",
  });
  
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchServices = async () => {
      try {
        const data = await api.getServices();
        setServices(data.results || data);
      } catch (error) {
        console.error("Errore:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#050505] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col">
      <NebulaNav />

      <header className="pt-40 pb-20 md:pt-56 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-8 block">
            Competenze
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-bricolage font-bold text-6xl md:text-8xl lg:text-[9vw] leading-[0.85] tracking-tight uppercase"
          >
            AREE DI <br/><span className="font-fraunces italic text-white/50 font-light">INTERVENTO</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {services.map((service, index) => (
            <div key={service.id || index} className="border-t border-white/10 pt-12">
              <h2 className="font-bricolage text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-[#d4af37]">
                {service.title}
              </h2>
              <p className="font-inter font-light text-lg md:text-xl text-white/70 leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
          {services.length === 0 && (
             <div className="text-white/50 font-inter">Caricamento competenze...</div>
          )}
        </div>
      </section>

      <NebulaBriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default NebulaServizi;
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Servizi rebuilt")
