import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket, Terminal, Layers, Layout, HardDrive, Cpu, ExternalLink } from "lucide-react";

export const NebulaNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Orbit", path: "/progetti", icon: <Rocket size={16} /> },
    { name: "Logbook", path: "/chisono", icon: <Terminal size={16} /> },
    { name: "Archive", path: "/blog", icon: <Layers size={16} /> },
    { name: "Signal", path: "/contatti", icon: <ExternalLink size={16} /> }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 py-4 md:px-12 ${
        scrolled ? "bg-slate-950/40 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 group transition-opacity hover:opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <img 
            src="/logo.png" 
            alt="Ilaria Diliberto" 
            className="h-7 md:h-9 w-auto filter brightness-0 invert"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-cyan-400 flex items-center gap-2 ${
                location.pathname === link.path ? "text-cyan-400" : "text-slate-400"
              }`}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">{link.icon}</span>
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contatti" 
            className="px-6 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all hover:scale-105"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[-1] bg-slate-950/95 backdrop-blur-3xl transition-all duration-700 flex flex-col items-center justify-center gap-12 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-3xl font-black tracking-tighter hover:text-cyan-400 transition-all ${
              location.pathname === link.path ? "text-cyan-400" : "text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
};
