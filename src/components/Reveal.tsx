import { useScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";
import { ArrowRight } from "lucide-react";

/* ══════════════════════════════════════════════════════════════════════════
   REVEAL COMPONENTS
   ══════════════════════════════════════════════════════════════════════════ */

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const transforms = {
    up: "translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${transforms[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const KineticLine = ({ className = "" }: { className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.3);
  return (
    <div
      ref={ref}
      className={`kinetic-line ${isVisible ? "visible" : ""} ${className}`}
    />
  );
};

export { useParallax };
