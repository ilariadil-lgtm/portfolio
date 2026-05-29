import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Rocket, Terminal, Layers, ExternalLink, Menu, X, Fingerprint, Crosshair, Hexagon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const NebulaNav = () => {
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOpen, setIsOpen] = useState(false); // For mobile menu expansion

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { name: "ORBIT", path: "/", icon: <Hexagon size={18} /> },
    { name: "ARCHIVE", path: "/progetti", icon: <Rocket size={18} /> },
    { name: "LOGBOOK", path: "/chisono", icon: <Terminal size={18} /> },
    { name: "JOURNAL", path: "/blog", icon: <Layers size={18} /> },
    { name: "SIGNAL", path: "/contatti", icon: <ExternalLink size={18} /> }
  ];

  return (
    <>
      {/* 
        DESKTOP HUD (Left Sidebar) 
      */}
      <nav className="hidden md:flex flex-col items-center justify-between fixed left-6 top-6 bottom-6 w-20 z-[100] bg-[#030712]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_0_40px_rgba(34,211,238,0.05)] py-8">
        
        {/* Top Logo */}
        <Link to="/" className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
          <Fingerprint size={24} className="text-slate-100 group-hover:text-cyan-400 transition-colors" />
        </Link>

        {/* Center Links */}
        <div className="flex flex-col gap-6 w-full items-center">
          {links.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className="group relative flex justify-center w-full"
                aria-label={link.name}
              >
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${isActive ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-400' : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.05]'}`}>
                  {link.icon}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav" 
                      className="absolute inset-0 border border-cyan-400/50 rounded-2xl shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Hover Tooltip */}
                <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#030712] border border-white/10 rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap z-50">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400">{link.name}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Telemetry */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="flex flex-col items-center gap-1 font-mono text-[8px] tracking-widest text-slate-500 [writing-mode:vertical-lr] rotate-180">
            <span>SYS.ONLINE</span>
            <span className="text-cyan-400">{time}</span>
          </div>
        </div>
      </nav>

      {/* 
        MOBILE HUD (Bottom Dock) 
      */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100]">
        <nav className="flex items-center justify-between bg-[#030712]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_0_40px_rgba(34,211,238,0.1)] px-4 py-3">
          <Link to="/" className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400">
            <Fingerprint size={20} />
          </Link>
          
          <div className="flex items-center gap-1">
            {links.slice(0, 3).map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-400'}`}
                >
                  {link.icon}
                </Link>
              );
            })}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Expanded Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 left-0 right-0 p-6 bg-[#030712]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col gap-4"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all"
                >
                  <div className="text-cyan-400">{link.icon}</div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-100">{link.name}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 
        HUD Decorative Overlay (Screen corners)
      */}
      <div className="fixed inset-0 pointer-events-none z-[90] hidden md:block">
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-500/20" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-500/20" />
      </div>
    </>
  );
};
