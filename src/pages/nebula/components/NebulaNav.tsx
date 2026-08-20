import React, { useState, useEffect } from "react";
import { percorsoIn, linguaDi } from "@/lib/lingua";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "@/components/Link";
import {
  Home,
  User,
  Briefcase,
  Folder,
  MessageSquare,
  Menu,
  X,
  Fingerprint,
  Volume2,
  VolumeX,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSound } from "../../../context/SoundContext";

export const NebulaNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { isMuted, toggleMute, playHover, playClick } = useSound();

  const toggleLanguage = () => {
    playClick();
    const altra = linguaDi(location.pathname) === "en" ? "it" : "en";
    navigate(percorsoIn(location.pathname, altra));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { name: t("nav.home", "Home"), path: "/", icon: <Home size={18} /> },
    {
      name: t("nav.projects", "Progetti"),
      path: "/progetti",
      icon: <Folder size={18} />,
    },
    {
      name: t("nav.about", "Chi sono"),
      path: "/chisono",
      icon: <User size={18} />,
    },
    {
      name: t("nav.services", "Servizi"),
      path: "/servizi",
      icon: <Briefcase size={18} />,
    },
    {
      name: t("nav.contact", "Parliamo"),
      path: "/contatti",
      icon: <MessageSquare size={18} />,
    },
  ];

  return (
    <>
      {/* 
        DESKTOP HUD (Left Sidebar) 
      */}
      <nav className="hidden lg:flex flex-col items-start justify-between fixed left-0 top-0 bottom-0 w-24 hover:w-80 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] z-[100] bg-[#050505] border-r border-white/5 overflow-hidden group/nav py-8">
        {/* Top Logo */}
        <div className="w-full flex items-center justify-start mb-8 h-24 px-4">
          <Link
            to="/"
            className="relative flex items-center justify-start transition-all duration-300 w-full h-full shrink-0"
          >
            <img decoding="async" fetchPriority="high"
              src="/id_nebula.webp"
              alt="ID"
              className="absolute left-1 w-16 h-16 object-contain group-hover/nav:opacity-0 group-hover/nav:scale-75 transition-all duration-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]"
            />
            <img decoding="async" fetchPriority="high"
              src="/logo_nebula.svg"
              alt="Ilaria Diliberto"
              className="absolute left-4 w-64 lg:w-72 h-auto object-contain object-left opacity-0 scale-90 group-hover/nav:opacity-100 group-hover/nav:scale-100 transition-all duration-500"
            />
          </Link>
        </div>

        {/* Center Links */}
        <div className="flex flex-col gap-2 w-full px-2">
          {links.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={playHover}
                onClick={playClick}
                className={`group relative flex items-center w-full h-14 rounded-xl transition-all duration-300 ${isActive ? "bg-gold/10" : "hover:bg-white/[0.04]"}`}
                aria-label={link.name}
              >
                <div
                  className={`w-20 h-14 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]" : "text-white/50 group-hover:text-white"}`}
                >
                  {React.cloneElement(link.icon as React.ReactElement, {
                    strokeWidth: isActive ? 2 : 1.5,
                    size: 22,
                  })}
                </div>
                <span
                  className={`absolute left-20 font-mono text-[11px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${isActive ? "text-gold font-bold opacity-0 group-hover/nav:opacity-100" : "text-white/50 group-hover:text-white opacity-0 group-hover/nav:opacity-100"}`}
                >
                  {link.name}
                </span>

                {isActive && (
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      className="w-[4px] h-7 bg-gold rounded-r-full shadow-[0_0_12px_rgba(212,175,55,0.6)] origin-center"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Controls (Sound & Lang) */}
        <div className="w-full flex flex-col gap-2 mt-auto mb-16 px-2">
          <button
            onClick={toggleLanguage}
            onMouseEnter={playHover}
            className="flex items-center w-full h-14 group relative rounded-xl hover:bg-white/[0.04] transition-all"
            aria-label="Toggle Language"
          >
            <div className="w-20 h-14 flex items-center justify-center text-white/50 group-hover:text-white transition-colors shrink-0">
              <Globe size={20} strokeWidth={1.5} />
            </div>
            <span className="absolute left-20 font-mono text-[11px] uppercase tracking-[0.2em] opacity-0 group-hover/nav:opacity-100 transition-opacity text-white/50 group-hover:text-white whitespace-nowrap">
              {i18n.language === "en" ? "EN" : "IT"}
            </span>
          </button>

          <button
            onClick={() => {
              playClick();
              toggleMute();
            }}
            onMouseEnter={playHover}
            className="flex items-center w-full h-14 group relative rounded-xl hover:bg-white/[0.04] transition-all"
            aria-label="Toggle Sound"
          >
            <div className="w-20 h-14 flex items-center justify-center transition-colors shrink-0">
              {isMuted ? (
                <VolumeX
                  size={20}
                  className="text-white/50 group-hover:text-white"
                  strokeWidth={1.5}
                />
              ) : (
                <Volume2
                  size={20}
                  className="text-gold"
                  strokeWidth={1.5}
                />
              )}
            </div>
            <span
              className={`absolute left-20 font-mono text-[11px] uppercase tracking-[0.2em] opacity-0 group-hover/nav:opacity-100 transition-opacity whitespace-nowrap ${isMuted ? "text-white/50 group-hover:text-white" : "text-gold"}`}
            >
              {isMuted ? "SND: OFF" : "SND: ON"}
            </span>
          </button>
        </div>
      </nav>

      {/* 
        MOBILE HUD (Bottom Dock) 
      */}
      <div
        className="lg:hidden fixed left-6 right-6 z-[100]"
        style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <nav className="flex items-center justify-between bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_0_40px_rgba(255,255,255,0.05)] px-4 py-3">
          <Link
            to="/"
            className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white"
          >
            <img decoding="async" fetchPriority="high"
              src="/id_nebula.webp"
              alt="ID"
              className="w-8 h-8 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          <div className="flex items-center gap-1">
            {links.slice(0, 3).map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== "/" &&
                  link.path !== "/nebula" &&
                  location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isActive ? "text-white bg-white/10" : "text-white/50"}`}
                >
                  {link.icon}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-100"
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
                  onMouseEnter={playHover}
                  onClick={() => {
                    playClick();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all text-white"
                >
                  <div className="text-white/70">{link.icon}</div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-100">
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.05] text-white font-mono text-[10px] uppercase tracking-widest"
                >
                  <Globe size={16} /> {i18n.language === "en" ? "EN" : "IT"}
                </button>
                <button
                  onClick={() => {
                    playClick();
                    toggleMute();
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.05] font-mono text-[10px] uppercase tracking-widest ${isMuted ? "text-white/60" : "text-gold"}`}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  {isMuted ? "OFF" : "ON"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* RIMOSSO OVERLAY DECORATIVO AGLI ANGOLI, nel design full-height non serve */}
    </>
  );
};
