import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useDesign } from "../context/DesignContext";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "drag">("default");
  const [hidden, setHidden] = useState(false);
  // Controlla il device al momento del primo render — evita flash su mobile
  const [isTouch] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );
  const location = useLocation();
  const { design } = useDesign();
  const isEditorial = design === "editorial";

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Reset hover status when page changes
    setCursorType("default");
  }, [location.pathname]);

  useEffect(() => {
    if (isTouch) return; // Nessun listener su touch device

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering an element with data-cursor
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor], a, button');
      
      if (interactiveEl) {
        if (interactiveEl.hasAttribute('data-cursor')) {
          setCursorType(interactiveEl.getAttribute('data-cursor') as any);
        } else {
          setCursorType("pointer");
        }
      } else {
        setCursorType("default");
      }
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [cursorX, cursorY, isTouch]);

  // Non renderizzare su touch device
  if (isTouch) return null;

  const variants = isEditorial ? {
    default: { scale: 1, backgroundColor: "rgba(192, 57, 43, 0.4)", border: "1px solid rgba(192, 57, 43, 0.1)", width: 32, height: 32, x: "-50%", y: "-50%" },
    pointer: { scale: 1.5, backgroundColor: "rgba(192, 57, 43, 0)", border: "2px solid rgba(192, 57, 43, 1)", width: 32, height: 32, x: "-50%", y: "-50%" },
    view: { scale: 2.5, backgroundColor: "rgba(192, 57, 43, 0.9)", border: "0px solid transparent", width: 32, height: 32, x: "-50%", y: "-50%" },
    drag: { scale: 2.5, backgroundColor: "rgba(61, 15, 26, 0.9)", border: "0px solid transparent", width: 32, height: 32, x: "-50%", y: "-50%" }
  } : {
    // Nebula Awwwards Cursor: Bianco pieno con mix-blend-mode difference, oppure cerchio che si espande
    default: { scale: 1, backgroundColor: "rgba(255, 255, 255, 1)", border: "0px solid rgba(255, 255, 255, 0)", width: 12, height: 12, x: "-50%", y: "-50%" },
    pointer: { scale: 1, backgroundColor: "rgba(255, 255, 255, 0)", border: "1px solid rgba(255, 255, 255, 1)", width: 48, height: 48, x: "-50%", y: "-50%" },
    view: { scale: 1, backgroundColor: "rgba(255, 255, 255, 1)", border: "0px solid transparent", width: 80, height: 80, x: "-50%", y: "-50%" },
    drag: { scale: 1, backgroundColor: "rgba(255, 255, 255, 1)", border: "0px solid transparent", width: 80, height: 80, x: "-50%", y: "-50%" }
  };

  return (
    <>
      {/* Outer Spring Cursor */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex justify-center items-center overflow-hidden ${!isEditorial ? 'mix-blend-difference' : ''}`}
        style={{ x: cursorX, y: cursorY }}
        variants={variants}
        animate={hidden ? { opacity: 0 } : cursorType}
        transition={{ type: "spring", stiffness: isEditorial ? 150 : 250, damping: isEditorial ? 15 : 25, mass: 0.5 }}
      >
        <motion.span
          className="text-white font-typewriter text-[3px] uppercase tracking-widest font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: (cursorType === "view" || cursorType === "drag") ? 1 : 0 }}
        >
          {cursorType === "view" ? "VIEW" : cursorType === "drag" ? "DRAG" : ""}
        </motion.span>
      </motion.div>

      {/* Inner Dot Cursor (Solo per Editorial, in Nebula il dot è l'outer stesso che fa difference) */}
      {isEditorial && (
        <div 
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#c0392b] pointer-events-none z-[10000] transition-opacity duration-200"
          style={{
            transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
            opacity: (hidden || cursorType !== "default") ? 0 : 1
          }}
        />
      )}
    </>
  );
};
