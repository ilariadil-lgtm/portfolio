import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/*
        Sipario di Entrata — blocco bordeaux che copre lo schermo e poi
        si ritrae (scaleY 1→0 da bottom). Si vede solo all'entrata.
      */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[100] bg-[#3d0f1a] transform-gpu pointer-events-none origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/*
        Sipario di Uscita — blocco che sale dal basso quando si cambia
        pagina (exit di AnimatePresence, scaleY 0→1 da top).
      */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[100] bg-[#3d0f1a] transform-gpu pointer-events-none origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/*
        Il contenuto di pagina NON viene wrappato in motion.div con opacity
        perché blocca l'avvio delle animazioni `animate` (marquee, etc.)
        sui figli durante la transizione di entrata.
        Il curtain scaleY sopra è sufficiente come transizione visiva.
      */}
      {children}
    </>
  );
};
