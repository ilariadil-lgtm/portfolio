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
