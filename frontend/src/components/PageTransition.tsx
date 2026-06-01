import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useDesign } from "../context/DesignContext";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const { design } = useDesign();
  const isEditorial = design === "editorial";
  const transitionColor = isEditorial ? "#3d0f1a" : "#050505"; // Bordeaux per Editorial, Deep Black per Nebula

  return (
    <>
      {/*
        Sipario di Entrata
      */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[100] transform-gpu pointer-events-none origin-bottom"
        style={{ backgroundColor: transitionColor }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/*
        Sipario di Uscita
      */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[100] transform-gpu pointer-events-none origin-top"
        style={{ backgroundColor: transitionColor }}
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
