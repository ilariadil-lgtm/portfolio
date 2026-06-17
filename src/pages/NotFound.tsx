import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // 404
  }, [location.pathname]);

  return (
    <div className="min-h-[100dvh] bg-background text-primary overflow-hidden selection:bg-primary/30">
      <Navigation />

      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Watermark di sfondo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display font-black text-primary/[0.025]"
            style={{ fontSize: "clamp(120px, 30vw, 400px)", lineHeight: 1 }}
          >
            404
          </span>
        </div>

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#3d0f1a 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-bold block mb-8">
              ERRORE — 404
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-black leading-[0.85] tracking-tighter text-primary mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Pagina non<br />
            <span className="text-primary italic pr-2">trovata.</span>
          </motion.h1>

          <motion.p
            className="font-body text-lg text-primary/60 leading-relaxed mb-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            La pagina che stai cercando non esiste o è stata spostata.
            Torna alla home e riparti da lì.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-background font-typewriter text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-primary transition-colors duration-300"
            >
              Torna alla Home
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/progetti"
              className="inline-flex items-center gap-4 px-8 py-4 border border-primary/25 text-primary font-typewriter text-[10px] uppercase tracking-[0.4em] font-bold hover:border-primary/60 transition-colors duration-300"
            >
              Vedi i Progetti
            </Link>
          </motion.div>

          {/* Technical marker */}
          <motion.div
            className="mt-16 font-typewriter text-[9px] uppercase tracking-[0.3em] text-primary/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            [ PATH: {location.pathname} ] [ STATUS: 404_NOT_FOUND ]
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
