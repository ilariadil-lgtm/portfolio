import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FloatingCTAProps {
  url: string;
}

export const FloatingCTA = ({ url }: FloatingCTAProps) => {
  if (!url) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 pointer-events-auto"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2.5 md:gap-3 px-5 py-3 md:px-6 md:py-3.5 bg-[#3d0f1a] text-[#f5f2ed] border border-[#f5f2ed]/10 rounded-full font-typewriter text-[9px] md:text-[10px] uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(61,15,26,0.2)] hover:bg-primary hover:shadow-[0_15px_35px_rgba(192,57,43,0.35)] transition-all duration-500 hover:-translate-y-1 font-semibold whitespace-nowrap"
      >
        Visita il sito
        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </motion.div>
  );
};
