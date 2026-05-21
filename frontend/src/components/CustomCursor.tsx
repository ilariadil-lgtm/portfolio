import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || 
        target.tagName === "A" || 
        target.tagName === "BUTTON" ||
        target.closest(".interactive") !== null
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Main dot */}
      <motion.div
        className="absolute w-2 h-2 bg-primary rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Outer technical ring */}
      <motion.div
        className="absolute w-8 h-8 border border-primary/20 rounded-full"
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.8 : 0.2,
          borderWidth: isPointer ? "1px" : "1px",
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Crosshair lines on hover */}
      <AnimatePresence>
        {isPointer && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <div className="w-[40px] h-[1px] bg-primary/40 absolute -left-[20px] top-0" />
            <div className="w-[1px] h-[40px] bg-primary/40 absolute left-0 -top-[20px]" />
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};
