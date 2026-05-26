import React from "react";
import { motion, Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const RevealText: React.FC<RevealTextProps> = ({ text, className = "", delay = 0, as: Component = "div" }) => {
  // Dividiamo il testo per parole
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      y: "120%",
      rotate: 2,
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.span variants={child} className="inline-block origin-bottom-left">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};
