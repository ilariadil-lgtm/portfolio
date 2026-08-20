import { useState, useEffect } from "react";
import { percorsoIn, type Lingua } from "@/lib/lingua";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSound } from "../context/SoundContext";
import { useDesign } from "../context/DesignContext";

const navItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/chisono" },
  { key: "services", path: "/servizi" },
  { key: "projects", path: "/progetti" },
];

// ═══════════════════════════════════════════════════════════════════
// EDITORIAL THEME ONLY - Componente esclusivo del tema "Editorial"
// (Il tema Nebula usa NebulaNav.tsx all'interno di pages/nebula)
// ═══════════════════════════════════════════════════════════════════

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { isMuted, toggleMute, playHover, playClick } = useSound();
  const { design } = useDesign();

  const navigate = useNavigate();

  // Cambiare lingua significa cambiare indirizzo: /servizi ↔ /en/servizi.
  // Cosi la pagina inglese e condivisibile e indicizzabile.
  const changeLanguage = (lng: string) => {
    playClick();
    navigate(percorsoIn(location.pathname, lng as Lingua));
  };

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "pt-[calc(env(safe-area-inset-top)+1rem)] pb-4 px-4"
            : "pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-6 px-6 md:px-12 lg:px-20"
        }`}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`transition-all duration-500 ${
            scrolled
              ? "max-w-[1200px] w-full px-6 py-4 bg-cream border border-primary/10 shadow-[0_20px_40px_-15px_rgba(61,15,26,0.2)] rounded-full mx-auto flex items-center justify-between"
              : "max-w-screen-2xl mx-auto flex items-center justify-between w-full"
          }`}
        >
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
            aria-label="Torna alla Home"
          >
            <img decoding="async" fetchPriority="high"
              src={
                design === "editorial"
                  ? "/logo_editorial.svg"
                  : "/logo_nebula.svg"
              }
              alt="Ilaria Diliberto"
              className="w-56 md:w-72 lg:w-80 h-auto object-contain object-left shrink-0"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <nav
              className="flex items-center gap-8"
              aria-label="Navigazione principale"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className={`relative font-body text-[11px] uppercase tracking-[0.3em] transition-all duration-300 group ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {t(`nav.${item.key}`)}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary"
                    animate={{
                      width: location.pathname === item.path ? "100%" : "0%",
                    }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 border-l border-primary/20 pl-4">
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
                aria-pressed={!isMuted}
                className={`font-body text-[11px] uppercase tracking-[0.2em] transition-all ${isMuted ? "text-foreground/40 hover:text-primary" : "text-primary font-bold"}`}
              >
                {isMuted ? "SND: OFF" : "SND: ON"}
              </button>
              <span className="text-primary/20 text-[11px]">|</span>
              <button
                onClick={() => changeLanguage("it")}
                aria-label="Seleziona lingua italiana"
                aria-pressed={i18n.language === "it"}
                className={`font-body text-[11px] uppercase tracking-[0.2em] transition-all ${i18n.language === "it" ? "text-primary font-bold" : "text-foreground/40 hover:text-primary"}`}
              >
                IT
              </button>
              <span className="text-primary/20 text-[11px]" aria-hidden="true">
                |
              </span>
              <button
                onClick={() => changeLanguage("en")}
                aria-label="Select English language"
                aria-pressed={i18n.language === "en"}
                className={`font-body text-[11px] uppercase tracking-[0.2em] transition-all ${i18n.language === "en" ? "text-primary font-bold" : "text-foreground/40 hover:text-primary"}`}
              >
                EN
              </button>
            </div>

            <Link
              to="/contatti"
              onMouseEnter={playHover}
              onClick={playClick}
              className={`px-7 py-3 font-body text-[11px] uppercase tracking-[0.3em] transition-all duration-500 rounded-full border border-primary/20 hover:bg-primary hover:text-white ${
                scrolled ? "bg-primary/5" : "bg-transparent"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center text-primary rounded-full border border-primary/20 hover:bg-primary/5 transition-colors"
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Menu di navigazione"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 min-h-[100dvh] z-40 bg-background flex flex-col items-center justify-start pt-32 md:pt-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-10 text-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    to={item.path}
                    className={`font-display text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-ink"
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + navItems.length * 0.07,
                  duration: 0.5,
                }}
              >
                <Link
                  to="/contatti"
                  className="mt-6 px-10 py-4 bg-primary text-white font-body text-[11px] uppercase tracking-[0.3em] rounded-full inline-block"
                >
                  {t("nav.contact")}
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + (navItems.length + 1) * 0.07,
                  duration: 0.5,
                }}
                className="flex items-center gap-6 mt-4"
              >
                <button
                  onClick={() => changeLanguage("it")}
                  aria-label="Seleziona lingua italiana"
                  aria-pressed={i18n.language === "it"}
                  className={`font-body text-[13px] uppercase tracking-[0.2em] transition-all ${i18n.language === "it" ? "text-primary font-bold" : "text-ink/65 hover:text-primary"}`}
                >
                  IT
                </button>
                <span
                  className="text-primary/20 text-[13px]"
                  aria-hidden="true"
                >
                  |
                </span>
                <button
                  onClick={() => changeLanguage("en")}
                  aria-label="Select English language"
                  aria-pressed={i18n.language === "en"}
                  className={`font-body text-[13px] uppercase tracking-[0.2em] transition-all ${i18n.language === "en" ? "text-primary font-bold" : "text-ink/65 hover:text-primary"}`}
                >
                  EN
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
