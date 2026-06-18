import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

interface SkewWrapperProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const SkewWrapper: React.FC<SkewWrapperProps> = ({
  children,
  className = "",
  intensity = 20,
}) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out the velocity
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Map velocity to a skew value
  const skewVelocity = useTransform(
    smoothVelocity,
    [-1000, 1000],
    [-intensity, intensity],
  );

  return (
    <motion.div style={{ skewY: skewVelocity }} className={className}>
      {children}
    </motion.div>
  );
};
