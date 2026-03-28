import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Chi sono", path: "/percorso" },
  { label: "Servizi", path: "/blog" }, // Temporaneamente al blog in mancanza di una pagina dedicata
  { label: "Progetti", path: "/progetti" },
  { label: "Contatti", path: "/contatti" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-2xl border-b border-white/5 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Logo (Left) */}
        <Link to="/" className="relative z-50 flex items-center group">
          <img 
            src="/logo.png" 
            alt="Ilaria Diliberto Logo" 
            className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu + CTA (Right) */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-body text-[13px] uppercase tracking-[0.2em] transition-all duration-300 group ${
                  location.pathname === item.path 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? "w-full" : "w-0"
                }`} />
              </Link>
            ))}
          </nav>

          <Button 
            asChild
            variant="default" 
            className="rounded-none px-8 py-6 font-body text-[10px] uppercase tracking-[0.2em] h-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group"
          >
            <Link to="/contatti" className="flex items-center gap-2">
              Scrivimi
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-foreground transition-transform duration-300 active:scale-90"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="animate-in fade-in zoom-in duration-300" /> : <Menu size={24} className="animate-in fade-in zoom-in duration-300" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-12 text-center w-full px-12">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-display text-4xl font-bold tracking-tighter transition-all duration-300 ${
                location.pathname === item.path 
                  ? "text-primary scale-110" 
                  : "text-foreground hover:text-primary"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            asChild
            size="lg"
            className="rounded-none w-full max-w-xs mt-8 font-body text-[11px] uppercase tracking-[0.2em] py-8"
          >
            <Link to="/contatti">Scrivimi</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
