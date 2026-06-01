import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export const NebulaFooter = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-black text-white/50 py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-[#d4af37]/20"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[150px] rounded-t-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Left Column */}
        <div className="md:col-span-5 space-y-8">
          <Link to="/" className="inline-block group">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-outfit text-xl tracking-tighter font-black text-white group-hover:text-[#d4af37] transition-colors">
                ILARIA DILIBERTO.
              </span>
            </div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#d4af37] uppercase font-bold">System Architect // Lead Designer</p>
          </Link>
          <p className="font-outfit font-light text-sm text-white/50 leading-relaxed max-w-sm">
            Costruisco infrastrutture digitali scalabili, interfacce neurali e piattaforme ad alta efficienza. L'anello di congiunzione tra codice puro ed estetica funzionale.
          </p>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-6">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 font-bold">Directory</span>
          <ul className="space-y-4">
            {[
              { path: "/chisono", label: "Profilo" },
              { path: "/servizi", label: "Servizi" },
              { path: "/progetti", label: "Archivio" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-outfit text-sm tracking-wide hover:text-[#d4af37] transition-colors flex items-center gap-2 group text-white/60">
                  <span className="w-2 h-[1px] bg-transparent group-hover:bg-[#d4af37] transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 space-y-8">
          <div className="relative p-8 border border-[#d4af37]/20 bg-[#020202] rounded-none hover:bg-white/[0.02] transition-all duration-500 overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.5)]">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 font-bold block mb-4">Uplink Station</span>
            <a href="mailto:hello@ilariadiliberto.com" className="flex items-center gap-4 text-white hover:text-[#d4af37] transition-colors font-mono tracking-widest font-bold text-xs mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d4af37]/80"></span>
              </span>
              HELLO@ILARIADILIBERTO.COM
            </a>
            <div className="flex items-center gap-4">
              {[Github, Linkedin, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 rounded-none bg-white/5 hover:bg-[#d4af37]/10 text-white/50 hover:text-[#d4af37] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="font-mono text-[10px] tracking-wider text-white/30">
          © {new Date().getFullYear()} Ilaria Diliberto. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="font-mono text-[10px] tracking-wider text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/cookies" className="font-mono text-[10px] tracking-wider text-white/30 hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </motion.footer>
  );
};
