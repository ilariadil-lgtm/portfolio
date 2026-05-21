import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Avvolge ogni pagina con una transizione fluida in entrata e uscita.
 * Usa una combinazione opacity + leggero traslato verticale — elegante,
 * non intrusivo, compatibile con lo scroll restore.
 */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 18,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -12,
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: [0.16, 1, 0.3, 1],
  duration: 0.55,
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};
