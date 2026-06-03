import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/chisono" },
  { key: "services", path: "/servizi" },
  { key: "projects", path: "/progetti" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mx-auto px-6 py-4 flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? "max-w-[1200px] bg-[#f5f2ed]/80 backdrop-blur-xl border border-primary/5 shadow-2xl rounded-full" 
              : "max-w-full px-8 md:px-16 lg:px-24"
          }`}
        >
          <Link 
            to="/" 
            className="hover:opacity-80 transition-opacity"
            aria-label="Torna alla Home"
          >
            <img 
              src="/logo.webp" 
              alt="Ilaria Diliberto" 
              width="140"
              height="28"
              className="h-5 md:h-7 w-auto object-contain shrink-0"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8" aria-label="Navigazione principale">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-body text-[11px] uppercase tracking-[0.3em] transition-all duration-300 group ${
                    location.pathname === item.path 
                      ? "text-primary" 
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {t(`nav.${item.key}`)}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary"
                    animate={{ width: location.pathname === item.path ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 border-l border-primary/20 pl-4">
              <button 
                onClick={() => changeLanguage('it')} 
                className={`font-body text-[11px] uppercase tracking-[0.2em] transition-all ${i18n.language === 'it' ? 'text-primary font-bold' : 'text-foreground/40 hover:text-primary'}`}
              >
                IT
              </button>
              <span className="text-primary/20 text-[11px]">|</span>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`font-body text-[11px] uppercase tracking-[0.2em] transition-all ${i18n.language === 'en' ? 'text-primary font-bold' : 'text-foreground/40 hover:text-primary'}`}
              >
                EN
              </button>
            </div>

            <Link 
              to="/contatti"
              className={`px-7 py-3 font-body text-[11px] uppercase tracking-[0.3em] transition-all duration-500 rounded-full border border-primary/20 hover:bg-primary hover:text-white ${
                scrolled ? "bg-primary/5" : "bg-transparent"
              }`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-primary/20 pr-4 mr-2">
              <button 
                onClick={() => changeLanguage('it')} 
                className={`font-body text-[11px] uppercase tracking-[0.2em] transition-all ${i18n.language === 'it' ? 'text-primary font-bold' : 'text-foreground/40 hover:text-primary'}`}
              >
                IT
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`font-body text-[11px] uppercase tracking-[0.2em] transition-all ${i18n.language === 'en' ? 'text-primary font-bold' : 'text-foreground/40 hover:text-primary'}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-primary"
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="fixed inset-0 z-40 bg-[#f5f2ed] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10 text-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={item.path}
                    className={`font-display text-4xl font-bold tracking-tighter ${
                      location.pathname === item.path 
                        ? "text-primary" 
                        : "text-[#3d0f1a]"
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.07, duration: 0.5 }}
              >
                <Link 
                  to="/contatti"
                  className="mt-6 px-10 py-4 bg-primary text-white font-body text-[11px] uppercase tracking-[0.3em] rounded-full inline-block"
                >
                  {t('nav.contact')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
