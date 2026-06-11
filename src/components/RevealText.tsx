import React from "react";
import { motion, Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = "",
  delay = 0,
}) => {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  // Animazione pulita: opacity + y fisso in pixel.
  // Niente blur (causa clipping nei container overflow:hidden).
  // Niente y in percentuale (causa problemi di clip verticale).
  // Niente overflow:hidden sui wrapper parola.
  const child: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      style={{ columnGap: "0.22em", rowGap: "0.22em" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
