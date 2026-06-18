import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// ═══════════════════════════════════════════════════════════════════
// EDITORIAL THEME ONLY - Componente esclusivo del tema "Editorial"
// (Il tema Nebula usa NebulaFooter.tsx all'interno di pages/nebula)
// ═══════════════════════════════════════════════════════════════════

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Orologio in tempo reale
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    }, 1000); // aggiornamento ogni secondo
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#f5f2ed] border-t border-editorial px-6 md:px-12 lg:px-24 pt-20 pb-[calc(5rem+env(safe-area-inset-bottom))] relative overflow-hidden">
      {/* Background Monumental Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center opacity-[0.03] select-none pointer-events-none translate-y-[-20%]">
        <span className="font-display text-[25vw] font-black uppercase tracking-tighter text-[#3d0f1a]">
          ilaria
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
        {/* BRAND & VISION SECTION */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-typewriter text-[14px] uppercase tracking-[0.3em] text-primary font-medium">
                {t("footer.subtitle")}
              </span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-black text-[#3d0f1a] leading-none mb-8">
              Ilaria <br />
              <span className="text-primary italic pr-2">Diliberto.</span>
            </h3>
            <p className="font-body text-sm text-[#3d0f1a]/60 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          <div className="mt-10 lg:mt-0 flex flex-wrap items-center gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
                {t("footer.base_label")}
              </span>
              <span className="font-typewriter text-[14px] font-medium text-primary">
                {t("footer.italy")} //{" "}
                <time dateTime={currentTime}>{currentTime}</time>
              </span>
            </div>
            <div className="w-[1px] h-10 bg-primary/20 hidden sm:block" />
            <div className="flex flex-col gap-1.5">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
                {t("footer.status_label")}
              </span>
              <span className="font-typewriter text-[13px] font-medium text-green-600 tracking-widest">
                {t("footer.available")}
              </span>
            </div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="lg:col-span-3">
          <span className="font-typewriter text-[14px] uppercase tracking-[0.4em] text-primary font-medium block mb-8 md:mb-10">
            {t("footer.explore")}
          </span>
          <ul className="space-y-3 md:space-y-4">
            {[
              { label: t("nav.home"), to: "/" },
              { label: t("nav.projects"), to: "/progetti" },
              { label: t("nav.about"), to: "/chisono" },
              { label: t("nav.services"), to: "/servizi" },
              { label: t("nav.contact"), to: "/contatti" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="group flex items-center justify-between font-display text-xl md:text-2xl text-[#3d0f1a] hover:text-primary transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL & CONNECT */}
        <div className="lg:col-span-4">
          <span className="font-typewriter text-[14px] uppercase tracking-[0.4em] text-primary font-medium block mb-8 md:mb-10">
            {t("footer.network")}
          </span>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              {
                label: "LinkedIn",
                icon: <Linkedin size={18} />,
                href: "https://www.linkedin.com/in/ilaria-diliberto/",
              },
              {
                label: "GitHub",
                icon: <Github size={18} />,
                href: "https://github.com/ilariadil-lgtm",
              },
              {
                label: "Email",
                icon: <Mail size={18} />,
                href: "mailto:info@ilariadiliberto.com",
              },
              {
                label: "Instagram",
                icon: <Instagram size={18} />,
                href: "https://www.instagram.com/ilariadiliberto_tech/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center gap-3 md:gap-4 p-4 md:p-5 border border-primary/20 hover:border-primary/40 hover:bg-white/50 transition-all group"
              >
                <div className="text-primary group-hover:opacity-85 transition-opacity shrink-0">
                  {social.icon}
                </div>
                <span className="font-typewriter text-[12px] uppercase tracking-widest text-primary font-medium group-hover:opacity-85 transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 md:mt-12 p-6 md:p-8 bg-white/40 border border-primary/20 backdrop-blur-sm">
            <span className="font-typewriter text-[12px] uppercase tracking-[0.4em] text-primary font-medium block mb-2">
              {t("footer.work_together")}
            </span>
            <p className="font-body text-[14px] text-primary mb-5 leading-relaxed">
              {t("footer.work_together_desc")}
            </p>
            <Link
              to="/contatti"
              className="group inline-flex items-center gap-3 font-typewriter text-[11px] uppercase tracking-[0.35em] text-primary font-semibold"
            >
              <span className="relative overflow-hidden">
                {t("footer.contact_me")}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative pt-12 border-t border-primary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-typewriter text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
          <span>© {currentYear} Ilaria Diliberto</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary hidden sm:block" />
          <span>{t("footer.all_rights")}</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary hidden md:block" />
          <span className="hidden md:inline">{t("footer.tailored")}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-typewriter text-[11px] uppercase tracking-[0.25em] text-primary font-medium">
          <a
            href="https://www.iubenda.com/privacy-policy/46903805"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/80 transition-colors"
          >
            Privacy policy
          </a>
          <a
            href="https://www.iubenda.com/privacy-policy/46903805/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/80 transition-colors"
          >
            Cookie policy
          </a>
          <span className="text-primary/70">P.IVA: 03065860847</span>
        </div>
      </div>
    </footer>
  );
};
