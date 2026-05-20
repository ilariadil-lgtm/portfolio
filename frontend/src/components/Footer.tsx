import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f2ed] border-t border-editorial px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background Monumental Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center opacity-[0.03] select-none pointer-events-none translate-y-[-20%]">
        <span className="font-display text-[25vw] font-black uppercase tracking-tighter text-[#3d0f1a]">VISION</span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
        
        {/* BRAND & VISION SECTION */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-typewriter text-[9px] uppercase tracking-[0.4em] text-primary">System Core v2.4</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-black text-[#3d0f1a] leading-none mb-8">
              ILARIA <br />
              <span className="text-primary italic">DILIBERTO.</span>
            </h3>
            <p className="font-body text-sm text-[#3d0f1a]/60 leading-relaxed max-w-sm">
              Architettura digitale, design editoriale e rigore tecnico fusi in un'unica visione creativa. Progettiamo il futuro del web, un pixel alla volta.
            </p>
          </div>
          
          <div className="mt-12 lg:mt-0 flex items-center gap-6">
             <div className="flex flex-col gap-1">
                <span className="font-typewriter text-[7px] uppercase tracking-[0.2em] opacity-40">Local Time</span>
                <span className="font-typewriter text-[9px] font-bold text-primary">ROME_ITALY // {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
             </div>
             <div className="w-[1px] h-8 bg-primary/10" />
             <div className="flex flex-col gap-1">
                <span className="font-typewriter text-[7px] uppercase tracking-[0.2em] opacity-40">Status</span>
                <span className="font-typewriter text-[9px] font-bold text-green-600 tracking-widest">SYSTEM_ACTIVE</span>
             </div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="lg:col-span-3">
          <span className="font-typewriter text-[9px] uppercase tracking-[0.6em] text-primary/40 block mb-10">Directory</span>
          <ul className="space-y-4">
            {[
              { label: "Home", to: "/" },
              { label: "Selected Missions", to: "/progetti" },
              { label: "The Vision", to: "/percorso" },
              { label: "Tech Stack", to: "/servizi" },
              { label: "Contact Uplink", to: "/contatti" }
            ].map((link, i) => (
              <li key={i}>
                <Link 
                  to={link.to} 
                  className="group flex items-center justify-between font-display text-lg text-[#3d0f1a] hover:text-primary transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL & CONNECT */}
        <div className="lg:col-span-4">
          <span className="font-typewriter text-[9px] uppercase tracking-[0.6em] text-primary/40 block mb-10">Connectivity</span>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "LinkedIn", icon: <Linkedin size={14} />, href: "https://linkedin.com" },
              { label: "GitHub", icon: <Github size={14} />, href: "https://github.com" },
              { label: "Email", icon: <Mail size={14} />, href: "mailto:hello@ilariavision.com" },
              { label: "Website", icon: <Globe size={14} />, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-primary/5 hover:border-primary/20 hover:bg-white/50 transition-all group"
              >
                <div className="text-primary/40 group-hover:text-primary transition-colors">
                  {social.icon}
                </div>
                <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#3d0f1a]/60 group-hover:text-[#3d0f1a] transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/40 border border-primary/5 backdrop-blur-sm">
            <span className="font-typewriter text-[7px] uppercase tracking-[0.4em] text-primary/40 block mb-2">Newsletter_Protocol</span>
            <p className="font-body text-[10px] text-[#3d0f1a]/60 mb-4">Ricevi aggiornamenti tecnici e visivi ogni mese.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="EMAIL_ADDR" 
                className="bg-transparent border-b border-primary/20 font-typewriter text-[9px] py-2 flex-1 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="text-primary hover:scale-110 transition-transform">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative pt-12 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8 font-typewriter text-[8px] uppercase tracking-[0.4em] text-[#3d0f1a]/40">
          <span>© {currentYear} ILARIA DILIBERTO</span>
          <div className="w-1 h-1 rounded-full bg-primary/20" />
          <span>ALL_RIGHTS_RESERVED</span>
          <div className="w-1 h-1 rounded-full bg-primary/20" />
          <span className="hidden md:inline">BUILT_WITH_RIGOR</span>
        </div>
        
        <div className="flex items-center gap-6 font-typewriter text-[8px] uppercase tracking-[0.4em] text-[#3d0f1a]/40">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy_Policy</Link>
          <Link to="/cookies" className="hover:text-primary transition-colors">Cookie_Settings</Link>
          <span className="text-primary/20">COORD: 41.90°N 12.49°E</span>
        </div>
      </div>

      {/* Corner Technical Markers */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/10" />
    </footer>
  );
};
