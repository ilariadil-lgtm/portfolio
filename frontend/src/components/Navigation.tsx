import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "PERCORSO", path: "/percorso" },
  { label: "PROGETTI", path: "/progetti" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mx-auto px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? "max-w-[1200px] bg-[#f5f2ed]/80 backdrop-blur-xl border border-primary/5 shadow-2xl rounded-full" 
              : "max-w-full px-8 md:px-16 lg:px-24"
          }`}
        >
          <Link 
            to="/" 
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logo.png" 
              alt="Ilaria Diliberto" 
              className="h-7 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-body text-[9px] uppercase tracking-[0.4em] transition-all duration-300 group ${
                    location.pathname === item.path 
                      ? "text-primary" 
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary"
                    animate={{ width: location.pathname === item.path ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              ))}
            </nav>

            <Link 
              to="/contatti"
              className={`px-7 py-2.5 font-body text-[9px] uppercase tracking-[0.3em] transition-all duration-500 rounded-full border border-primary/20 hover:bg-primary hover:text-white ${
                scrolled ? "bg-primary/5" : "bg-transparent"
              }`}
            >
              Contatti
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#f5f2ed] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10 text-center">
              {navItems.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-display text-4xl font-bold tracking-tighter ${
                    location.pathname === item.path 
                      ? "text-primary" 
                      : "text-[#3d0f1a]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contatti"
                className="mt-6 px-10 py-4 bg-primary text-white font-body text-[11px] uppercase tracking-[0.3em] rounded-full"
              >
                CONTATTI
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
