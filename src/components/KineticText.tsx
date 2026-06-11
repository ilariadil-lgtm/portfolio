import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: "char" | "word";
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  className = "",
  delay = 0,
  mode = "char",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Dividiamo per parola prima
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: mode === "char" ? 0.02 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { 
      opacity: 0, 
      y: "100%", 
      rotateX: -90 
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 100,
        mass: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      style={{ columnGap: "0.25em", rowGap: 0, perspective: "1000px" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{
            display: "inline-flex",
            overflow: "hidden", // Cruciale per l'effetto di reveal verticale
          }}
        >
          {mode === "char" ? (
            word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={child}
                style={{ display: "inline-block", transformOrigin: "bottom center" }}
              >
                {char}
              </motion.span>
            ))
          ) : (
            <motion.span
              variants={child}
              style={{ display: "inline-block", transformOrigin: "bottom center" }}
            >
              {word}
            </motion.span>
          )}
        </span>
      ))}
    </motion.div>
  );
};
