import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Folder, MessageSquare, Menu, X, Fingerprint } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const NebulaNav = () => {
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { name: "Home", path: "/nebula", icon: <Home size={18} /> },
    { name: "Progetti", path: "/progetti", icon: <Folder size={18} /> },
    { name: "Chi sono", path: "/chisono", icon: <User size={18} /> },
    { name: "Servizi", path: "/servizi", icon: <Briefcase size={18} /> },
    { name: "Parliamo", path: "/contatti", icon: <MessageSquare size={18} /> }
  ];

  return (
    <>
      {/* 
        DESKTOP HUD (Left Sidebar) 
      */}
      <nav className="hidden md:flex flex-col items-start justify-between fixed left-0 top-0 bottom-0 w-20 hover:w-56 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[100] bg-[#050505] border-r border-white/5 overflow-hidden group/nav py-8">
        
        {/* Top Logo */}
        <div className="w-full flex justify-center mb-12">
          <Link to="/" className="flex items-center justify-center transition-all duration-300 shrink-0">
            <Fingerprint size={22} strokeWidth={1.5} className="text-[#d4af37]" />
          </Link>
        </div>

        {/* Center Links */}
        <div className="flex flex-col gap-4 w-full">
          {links.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && link.path !== '/nebula' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-6 w-full h-12 transition-all duration-300 ${isActive ? 'text-[#d4af37]' : 'text-white/40 hover:text-white'}`}
                aria-label={link.name}
              >
                <div className="w-20 h-12 flex items-center justify-center shrink-0">
                  {React.cloneElement(link.icon as React.ReactElement, { strokeWidth: 1.5, size: 22 })}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest whitespace-nowrap opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300">
                  {link.name}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeNav" 
                    className="absolute left-0 w-[3px] h-6 bg-[#d4af37] top-1/2 -translate-y-1/2" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom Telemetry */}
        {/* Bottom Telemetry (spostata in alto per fare spazio al DesignSwitcher) */}
        <div className="w-full flex justify-center mt-auto mb-16">
          <div className="flex flex-col items-center gap-4 opacity-100 group-hover/nav:opacity-0 transition-opacity duration-300">
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
            <div className="flex flex-col items-center gap-1 font-mono text-[8px] tracking-widest text-[#d4af37]/40 [writing-mode:vertical-lr] rotate-180">
              <span>SYS.ON</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 
        MOBILE HUD (Bottom Dock) 
      */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100]">
        <nav className="flex items-center justify-between bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_0_40px_rgba(255,255,255,0.05)] px-4 py-3">
          <Link to="/" className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
            <Fingerprint size={20} />
          </Link>
          
          <div className="flex items-center gap-1">
            {links.slice(0, 3).map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && link.path !== '/nebula' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? 'text-white bg-white/10' : 'text-white/40'}`}
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
              className="absolute bottom-20 left-0 right-0 p-6 bg-[#050505]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col gap-2"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all text-white"
                >
                  <div className="text-white/70">{link.icon}</div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-100">{link.name}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* RIMOSSO OVERLAY DECORATIVO AGLI ANGOLI, nel design full-height non serve */}
    </>
  );
};
