import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Twitter, Terminal, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const NebulaFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Orologio in tempo reale
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", hour12: false })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    }, 60000); // aggiornamento ogni minuto
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-black text-white/50 py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-[#d4af37]/20 snap-start"
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
            <p className="font-mono text-xs tracking-[0.2em] text-[#d4af37] uppercase font-bold">{t('footer.subtitle').toUpperCase()}</p>
          </Link>
          <p className="font-outfit font-light text-sm text-white/50 leading-relaxed max-w-sm whitespace-pre-wrap">
            {t('footer.description')}
          </p>

          <div className="relative p-8 border border-[#d4af37]/20 bg-white/5 rounded-none hover:bg-white/10 transition-all duration-500 overflow-hidden backdrop-blur-sm mt-4">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 font-bold block mb-4">{t('footer.work_together').toUpperCase()}</span>
            <p className="font-outfit text-sm text-white/60 mb-6">
              {t('footer.work_together_desc')}
            </p>
            <Link to="/contatti" className="flex items-center gap-3 text-white hover:text-[#d4af37] transition-colors font-mono tracking-widest font-bold text-xs">
              {t('footer.contact_me').toUpperCase()}
              <ArrowRight size={14} />
            </Link>
          </div>        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-6">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 font-bold">{t('footer.explore').toUpperCase()}</span>
          <ul className="space-y-4">
            {[
              { path: "/", label: t("nav.home") },
              { path: "/progetti", label: t("nav.projects") },
              { path: "/chisono", label: t("nav.about") },
              { path: "/servizi", label: t("nav.services") },
              { path: "/contatti", label: t("nav.contact") },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-outfit text-sm tracking-wide hover:text-[#d4af37] transition-colors relative inline-block group text-white/60">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="inline-block transform group-hover:translate-x-4 transition-transform duration-300">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Network Column */}
        <div className="md:col-span-4 space-y-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 font-bold block mb-4">NETWORK</span>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "LINKEDIN", icon: Linkedin, href: "https://www.linkedin.com/in/ilaria-diliberto/" },
                { label: "GITHUB", icon: Github, href: "https://github.com/ilariadil-lgtm" },
                { label: "EMAIL", icon: Mail, href: "mailto:ilaria.dil@gmail.com" },
                { label: "INSTAGRAM", icon: Instagram, href: "https://www.instagram.com/ilaryvision/" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-white/10 bg-white/5 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/30 text-white/50 hover:text-[#d4af37] transition-all">
                  <social.icon size={14} />
                  <span className="font-mono text-[10px] tracking-wider">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 flex justify-between items-center mt-auto">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">{t('footer.base_label').toUpperCase()}</span>
              <span className="font-mono text-xs text-white tracking-widest">Italia // <time dateTime={currentTime}>{currentTime}</time></span>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">{t('footer.status_label').toUpperCase()}</span>
              <span className="font-mono text-xs text-green-500 tracking-widest flex items-center gap-2">
                {t('footer.available').replace(' ✓', '')} <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-wrap items-center gap-4">
          <p className="font-mono text-[10px] tracking-wider text-white/30">
            © {currentYear} ILARIA DILIBERTO
          </p>
          <span className="hidden md:inline font-mono text-[10px] tracking-wider text-white/30 border-l border-white/10 pl-4">
            {t('footer.all_rights').toUpperCase()}
          </span>
          <span className="hidden md:inline font-mono text-[10px] tracking-wider text-white/30 border-l border-white/10 pl-4">
            {t('footer.tailored').toUpperCase()}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/privacy" className="font-mono text-[10px] tracking-wider text-white/30 hover:text-white transition-colors uppercase">PRIVACY POLICY</Link>
          <Link to="/cookies" className="font-mono text-[10px] tracking-wider text-white/30 hover:text-white transition-colors uppercase">COOKIE POLICY</Link>
          <span className="font-mono text-[10px] tracking-wider text-[#d4af37]/50 uppercase">P.IVA: 03065860847</span>
        </div>
      </div>
    </motion.footer>
  );
};
