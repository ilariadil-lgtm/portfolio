import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export const NebulaFooter = () => {
  return (
    <footer className="relative bg-black text-slate-400 py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[150px] rounded-t-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Left Column */}
        <div className="md:col-span-5 space-y-8">
          <Link to="/" className="inline-block group">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-sans text-lg tracking-tight font-black text-white group-hover:text-neutral-300 transition-colors">
                ILARIA DILIBERTO.
              </span>
            </div>
            <p className="font-sans text-xs tracking-widest text-slate-500 uppercase font-bold">System Architect // Lead Designer</p>
          </Link>
          <p className="font-sans font-light text-sm text-slate-400 leading-relaxed max-w-sm">
            Costruisco infrastrutture digitali scalabili, interfacce neurali e piattaforme ad alta efficienza. L'anello di congiunzione tra codice puro ed estetica funzionale.
          </p>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-6">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-500 font-bold">Directory</span>
          <ul className="space-y-4">
            {[
              { path: "/chisono", label: "Profilo" },
              { path: "/servizi", label: "Servizi" },
              { path: "/progetti", label: "Archivio" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-sans text-sm tracking-wide hover:text-white transition-colors flex items-center gap-2 group text-slate-300">
                  <span className="w-2 h-[1px] bg-white/0 group-hover:bg-white transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 space-y-8">
          <div className="relative p-8 border border-white/[0.12] bg-white/[0.04] backdrop-blur-3xl rounded-[2rem] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-500 font-bold block mb-4">Uplink Station</span>
            <a href="mailto:hello@ilariadiliberto.com" className="flex items-center gap-4 text-white hover:text-neutral-300 transition-colors font-sans tracking-wide font-bold text-sm mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white/80"></span>
              </span>
              HELLO@ILARIADILIBERTO.COM
            </a>
            <div className="flex items-center gap-4">
              {[Github, Linkedin, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="font-sans text-[11px] tracking-wider text-slate-500">
          © {new Date().getFullYear()} Ilaria Diliberto. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="font-sans text-[11px] tracking-wider text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/cookies" className="font-sans text-[11px] tracking-wider text-slate-500 hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};
