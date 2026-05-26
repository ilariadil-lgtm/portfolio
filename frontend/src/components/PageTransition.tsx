import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* 
        Sipario di Entrata (In) - Copre lo schermo scendendo dall'alto
        Appare all'inizio della rotta e scorre verso il basso
      */}
      <motion.div
        className="fixed inset-0 z-[100] bg-[#3d0f1a] transform-gpu pointer-events-none origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* 
        Sipario di Uscita (Out) - Sale dal basso per coprire
        Viene triggerato al momento del cambio pagina
      */}
      <motion.div
        className="fixed inset-0 z-[100] bg-[#3d0f1a] transform-gpu pointer-events-none origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Contenuto di pagina */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40, filter: "blur(10px)", scale: 0.98 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};
