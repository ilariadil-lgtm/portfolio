import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, animate, MotionValue, useSpring, AnimationPlaybackControls } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { KineticText } from "./KineticText";

interface NavPointProps {
  angle: number;
  radiusSpring: MotionValue<number>;
  label: string;
  detail: string;
  to: string;
  index: number;
  counterRotation: MotionValue<number>;
  onHover: (index: number | null) => void;
}

const NavPoint: React.FC<NavPointProps> = ({ angle, radiusSpring, label, detail, to, index, counterRotation, onHover }) => {
  const [isLocalHover, setIsLocalHover] = useState(false);

  const xTransform = useTransform(radiusSpring, (r) => {
    const angleRad = angle * (Math.PI / 180);
    return 50 + (r / 2) * Math.cos(angleRad);
  });
  const yTransform = useTransform(radiusSpring, (r) => {
    const angleRad = angle * (Math.PI / 180);
    return 50 + (r / 2) * Math.sin(angleRad);
  });

  const left = useTransform(xTransform, (x) => `${x}%`);
  const top = useTransform(yTransform, (y) => `${y}%`);

  // Dynamically align tooltips away from the center of the rotating triangle:
  // - Index 0: Top vertex (above) -> bottom-full, horizontally centered
  // - Index 1: Bottom-right vertex (right) -> left-full, vertically centered
  // - Index 2: Bottom-left vertex (left) -> right-full, vertically centered
  const wrapperClass =
    index === 0
      ? "absolute bottom-full left-1/2 -translate-x-1/2 pb-6 flex flex-col items-center pointer-events-auto z-[100]"
      : index === 1
      ? "absolute left-full top-1/2 -translate-y-1/2 pl-6 flex items-center pointer-events-auto z-[100]"
      : "absolute right-full top-1/2 -translate-y-1/2 pr-6 flex items-center pointer-events-auto z-[100]";

  const getAnimationProps = () => {
    switch (index) {
      case 0: // Top
        return {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 }
        };
      case 1: // Right
        return {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 }
        };
      case 2: // Left
        return {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 }
        };
      default:
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 }
        };
    }
  };

  const anim = getAnimationProps();

  return (
    <motion.div
      className="absolute z-30 pointer-events-auto md:cursor-none interactive"
      style={{ left, top, x: "-50%", y: "-50%" }}
      onMouseEnter={() => {
        setIsLocalHover(true);
        onHover(index);
      }}
      onMouseLeave={() => {
        setIsLocalHover(false);
        onHover(null);
      }}
    >
      <Link to={to}>
        <div className="relative flex items-center justify-center w-24 h-24 group">
          <motion.div
            className="w-3 h-3 rounded-full bg-[#C0392B]"
            animate={{
              scale: isLocalHover ? 1.5 : 1,
              boxShadow: isLocalHover ? "0 0 30px rgba(192, 57, 43, 0.6)" : "0 0 0px rgba(192, 57, 43, 0)"
            }}
          />

          <AnimatePresence>
            {isLocalHover && (
              <div className={wrapperClass}>
                <motion.div
                  {...anim}
                  style={{ rotate: counterRotation }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="whitespace-nowrap bg-[#f5f2ed]/98 backdrop-blur-3xl p-4 md:p-6 border border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-8 h-[1px] bg-primary/30" />
                    <span className="block font-typewriter text-[12px] uppercase tracking-[0.5em] text-primary font-medium">
                      {label}
                    </span>
                  </div>
                  <span className="block font-display text-lg font-bold text-[#3d0f1a] tracking-tight">
                    {detail}
                  </span>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </motion.div>
  );
};


// ═══════════════════════════════════════════════════════════════════
// EDITORIAL THEME ONLY - Componente esclusivo del tema "Editorial"
// (Il tema Nebula usa HeroCanvas.tsx all'interno di pages/nebula)
// ═══════════════════════════════════════════════════════════════════

export const CreativeHero: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isGraphicHovered, setIsGraphicHovered] = useState(false);
  const rotationValue = useMotionValue(0);
  const counterRotation = useTransform(rotationValue, (v) => -v);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 300 });

  const tiltX = useSpring(useTransform(mouseY, [0, 800], [4, -4]), { stiffness: 40, damping: 25 });
  const tiltY = useSpring(useTransform(mouseX, [0, 1200], [-4, 4]), { stiffness: 40, damping: 25 });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 60]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // SMOOTH POLYGON ANIMATION (Static radius on hover to prevent chase behavior)
  const radius1 = useSpring(85, { stiffness: 80, damping: 20 });
  const radius2 = useSpring(85, { stiffness: 80, damping: 20 });
  const radius3 = useSpring(85, { stiffness: 80, damping: 20 });

  useEffect(() => {
    radius1.set(85);
    radius2.set(85);
    radius3.set(85);
  }, [radius1, radius2, radius3]);

  const rotationControls = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    if (hoveredPoint === null && !isGraphicHovered) {
      rotationControls.current = animate(rotationValue, rotationValue.get() + 360, {
        duration: 100,
        ease: "linear",
        repeat: Infinity
      });
    } else {
      if (rotationControls.current) rotationControls.current.stop();
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rotationControls.current) rotationControls.current.stop();
    };
  }, [hoveredPoint, isGraphicHovered, rotationValue]);

  // Points calculation for the polygon
  const [points, setPoints] = useState("100,15 173.6,142.5 26.4,142.5");

  useEffect(() => {
    const unsubscribe1 = radius1.on("change", () => updatePoints());
    const unsubscribe2 = radius2.on("change", () => updatePoints());
    const unsubscribe3 = radius3.on("change", () => updatePoints());

    function updatePoints() {
      const v = [-90, 30, 150];
      const r = [radius1.get(), radius2.get(), radius3.get()];
      const pts = v.map((angle, i) => {
        const rad = (angle) * (Math.PI / 180);
        const x = 100 + r[i] * Math.cos(rad);
        const y = 100 + r[i] * Math.sin(rad);
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      }).join(" ");
      setPoints(pts);
    }

    return () => {
      unsubscribe1();
      unsubscribe2();
      unsubscribe3();
    };
  }, [radius1, radius2, radius3]);



  return (
    <section className="relative min-h-[100vh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-[#f5f2ed]">
      {/* BACKGROUND INFRASTRUCTURE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 lg:gap-12 items-center relative z-10 max-w-screen-2xl mx-auto">
        <div className="lg:col-span-5 flex flex-col justify-center relative z-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="overflow-hidden mb-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-typewriter text-[14px] uppercase text-primary font-medium tracking-[0.3em] block"
              >
                {t('hero.tags')}
              </motion.span>
            </div>

            <h1 className="relative font-display leading-[0.85] tracking-tighter">
              <motion.div style={{ y: y1 }} className="overflow-hidden">
                <KineticText 
                  text="ilaria" 
                  delay={0.2} 
                  mode="char"
                  className="block text-[14vw] lg:text-[8.5vw] font-bold text-[#3d0f1a]"
                />
              </motion.div>
              <motion.div style={{ y: y1 }} className="overflow-hidden -mt-2 lg:-mt-4">
                <div className="flex items-baseline">
                  <KineticText 
                    text="diliberto" 
                    delay={0.6} 
                    mode="char"
                    className="block text-[14vw] lg:text-[8.5vw] font-bold text-primary italic pr-2"
                  />
                  <span className="block text-[14vw] lg:text-[8.5vw] font-bold text-[#3d0f1a] not-italic leading-none translate-y-2 pr-2">.</span>
                </div>
              </motion.div>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 lg:mt-12 max-w-[34rem]"
            >
              <p className="font-body text-sm md:text-base text-[#3d0f1a]/60 leading-relaxed border-l-2 border-primary/10 pl-6 lg:pl-8 py-2">
                "{t('hero.description')}"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── SVG Graphic column ── */}
        <div className="lg:col-span-7 relative z-50 flex justify-center items-center h-[300px] sm:h-[400px] lg:h-[700px] perspective-1000">
          <motion.div
            className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[580px]"
            onMouseEnter={() => setIsGraphicHovered(true)}
            onMouseLeave={() => setIsGraphicHovered(false)}
            style={{
              y: y2,
              opacity,
              rotateX: tiltX,
              rotateY: tiltY,
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ rotate: rotationValue, transformStyle: "preserve-3d" }}
            >
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full overflow-visible">
                <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="3 3" className="text-primary/20" />
                <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.05" className="text-primary/10" />
                <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.05" className="text-primary/10" />

                <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.15" className="text-primary/15" />

                <motion.circle
                  cx="100" cy="100" r="40"
                  fill="none" stroke="currentColor" strokeWidth="0.4"
                  className="text-primary/30"
                  animate={{ r: hoveredPoint !== null ? 45 : 40 }}
                />

                {/* ── Desktop: Triangolo ── */}
                <polygon
                  points={points}
                  fill="rgba(192, 57, 43, 0.05)"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  className="text-primary transition-all duration-300 hidden lg:block"
                />

                {/* ── Mobile: Cerchio interattivo ad archi (Soluzione Ottimale) ── */}
                <g className="lg:hidden">
                  {[
                    { label: t('nav.about'), to: "/chisono", rot: 220, tx: 100, ty: 22 },
                    { label: t('nav.services'), to: "/servizi", rot: 340, tx: 172, ty: 142 },
                    { label: t('nav.projects'), to: "/progetti", rot: 100, tx: 28, ty: 142 }
                  ].map((arc, i) => (
                    <Link to={arc.to} key={i} className="group outline-none cursor-pointer pointer-events-auto">
                      <circle
                        cx="100" cy="100" r="70"
                        fill="none" stroke="currentColor" strokeWidth="16"
                        strokeDasharray="122.17 400"
                        transform={`rotate(${arc.rot} 100 100)`}
                        className="text-primary/0 group-hover:text-primary/10 transition-colors duration-300"
                      />
                      <circle
                        cx="100" cy="100" r="70"
                        fill="none" stroke="currentColor" strokeWidth="1"
                        strokeDasharray="122.17 400"
                        transform={`rotate(${arc.rot} 100 100)`}
                        className="text-primary/50 group-hover:text-primary group-hover:stroke-[1.5] transition-all duration-300"
                      />
                      <text x={arc.tx} y={arc.ty} textAnchor="middle" className="font-typewriter text-[6px] uppercase tracking-[0.2em] fill-primary/70 group-hover:fill-primary transition-colors duration-300">
                        {arc.label}
                      </text>
                    </Link>
                  ))}
                </g>

                <defs>
                  <path id="textCircle" d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                </defs>
                <text className="font-typewriter text-[4px] uppercase tracking-[0.8em] fill-primary/20">
                  <textPath xlinkHref="#textCircle">{t('hero.circle_text')}</textPath>
                </text>
              </svg>

              {/* NavPoints: solo su desktop (lg+) dove c'è spazio per i tooltip */}
              <div className="hidden lg:block">
                {[0, 1, 2].map((i) => {
                  const angles = [-90, 30, 150];
                  const springs = [radius1, radius2, radius3];
                  const labels = [t('hero.point1_label'), t('hero.point2_label'), t('hero.point3_label')];
                  const details = [t('hero.point1_desc'), t('hero.point2_desc'), t('hero.point3_desc')];
                  const links = ["/chisono", "/servizi", "/progetti"];
                  return (
                    <NavPoint
                      key={i}
                      angle={angles[i]} radiusSpring={springs[i]}
                      label={labels[i]} detail={details[i]} to={links[i]} index={i}
                      counterRotation={counterRotation}
                      onHover={setHoveredPoint}
                    />
                  );
                })}
              </div>

              {/* Mobile links replaced by interactive SVG arcs above */}
            </motion.div>

            {/* CENTRAL BLOOM CORE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-primary/20 blur-xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        style={{ opacity }}
      >
        <span className="font-typewriter text-[12px] uppercase tracking-[0.5em] text-primary font-medium">{t('hero.explore')}</span>
        <div className="w-[1px] h-16 bg-primary/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary/60"
            animate={{ y: ["0%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
