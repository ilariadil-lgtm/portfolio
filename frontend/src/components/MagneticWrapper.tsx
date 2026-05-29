import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ 
  children, 
  strength = 30, // Ampiezza del movimento magnetico in px
  className = "" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  // Su touch device l'effetto magnetico non ha senso — skip tutto
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered || !ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      // Calcola il centro dell'elemento
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calcola la distanza tra il mouse e il centro dell'elemento
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Limita la forza magnetica al perimetro dell'elemento * strength
      // e assegnala allo spring
      x.set((distanceX / rect.width) * strength);
      y.set((distanceY / rect.height) * strength);
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      // Quando il mouse esce, torna mollemente al centro
      x.set(0);
      y.set(0);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered, x, y, strength]);

  // Su mobile: restituisce children senza wrapping spring
  if (isTouchDevice) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
