import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, animate, MotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

interface NavPointProps {
  left: string;
  top: string;
  label: string;
  detail: string;
  to: string;
  index: number;
  counterRotation: MotionValue<number>;
  onHover: (index: number | null) => void;
}

const NavPoint: React.FC<NavPointProps> = ({ left, top, label, detail, to, index, counterRotation, onHover }) => {
  const [isLocalHover, setIsLocalHover] = useState(false);
  const [coords, setCoords] = useState({ x: "0.00", y: "0.00" });

  useEffect(() => {
    if (isLocalHover) {
      const interval = setInterval(() => {
        setCoords({
          x: (Math.random() * 100).toFixed(2),
          y: (Math.random() * 100).toFixed(2)
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isLocalHover]);

  return (
    <motion.div
      className="absolute z-30 pointer-events-auto cursor-none interactive"
      animate={{ left, top }}
      transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
      style={{ x: "-50%", y: "-50%" }}
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
          <AnimatePresence>
            {isLocalHover && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-12 -left-12 font-typewriter text-[7px] text-primary/40 pointer-events-none"
              >
                <div className="flex flex-col gap-1">
                  <span>LOC_X: {coords.x}</span>
                  <span>LOC_Y: {coords.y}</span>
                  <span>SYNC: ACTIVE</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="w-3 h-3 rounded-full bg-[#C0392B]"
            animate={{
              scale: isLocalHover ? 1.5 : 1,
              boxShadow: isLocalHover ? "0 0 30px rgba(192, 57, 43, 0.6)" : "0 0 0px rgba(192, 57, 43, 0)"
            }}
          />

          <AnimatePresence>
            {isLocalHover && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ rotate: counterRotation }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-full ml-12 whitespace-nowrap bg-[#f5f2ed]/98 backdrop-blur-3xl p-6 border border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-[100]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-[1px] bg-primary/30" />
                  <span className="block font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary opacity-60">
                    {label}
                  </span>
                </div>
                <span className="block font-display text-lg font-bold text-[#3d0f1a] tracking-tight">
                  {detail}
                </span>
                <div className="mt-4 flex items-center justify-between opacity-30">
                  <span className="font-typewriter text-[7px]">v2.4 // PRO</span>
                  <span className="font-typewriter text-[7px]">0{index + 1}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </motion.div>
  );
};

export const CreativeHero: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
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

  // SMOOTH POLYGON ANIMATION
  const radius1 = useSpring(hoveredPoint === 0 ? 115 : 85, { stiffness: 80, damping: 20 });
  const radius2 = useSpring(hoveredPoint === 1 ? 115 : 85, { stiffness: 80, damping: 20 });
  const radius3 = useSpring(hoveredPoint === 2 ? 115 : 85, { stiffness: 80, damping: 20 });

  useEffect(() => {
    radius1.set(hoveredPoint === 0 ? 115 : 85);
    radius2.set(hoveredPoint === 1 ? 115 : 85);
    radius3.set(hoveredPoint === 2 ? 115 : 85);
  }, [hoveredPoint, radius1, radius2, radius3]);

  const rotationControls = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    if (hoveredPoint === null) {
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
  }, [hoveredPoint, rotationValue]);

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

  const getNavPointStyle = (index: number) => {
    const v = [-90, 30, 150];
    const r = [radius1.get() / 2, radius2.get() / 2, radius3.get() / 2];
    const angleRad = v[index] * (Math.PI / 180);
    const x = 50 + r[index] * Math.cos(angleRad);
    const y = 50 + r[index] * Math.sin(angleRad);
    return { left: `${x}%`, top: `${y}%` };
  };

  return (
    <section className="relative min-h-[100vh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-[#f5f2ed]">
      {/* BACKGROUND INFRASTRUCTURE — CINEMATIC HUD */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[200px] bg-gradient-to-b from-primary/5 to-transparent opacity-20"
        />
        <motion.div
          style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
          className="absolute z-50 w-24 h-24 hidden lg:block"
        >
          <div className="absolute inset-0 border border-primary/10 rounded-full scale-50" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/5" />
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-primary/5" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-typewriter text-[6px] tracking-widest text-primary/40 uppercase">Target_Lock</div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 lg:gap-12 items-center relative z-10 max-w-screen-2xl mx-auto">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="overflow-hidden mb-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary block"
              >
                Visione // Esecuzione
              </motion.span>
            </div>

            <h1 className="relative font-display leading-[0.85] tracking-tighter">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[14vw] lg:text-[8.5vw] font-bold text-[#3d0f1a]"
                  style={{ y: y1 }}
                >
                  ilaria
                </motion.span>
              </div>
              <div className="overflow-hidden -mt-2 lg:-mt-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[14vw] lg:text-[8.5vw] font-bold text-primary italic"
                  style={{ y: y1 }}
                >
                  diliberto<span className="text-[#3d0f1a] not-italic">.</span>
                </motion.span>
              </div>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 lg:mt-12 max-w-sm"
            >
              <p className="font-body text-sm md:text-base text-[#3d0f1a]/60 leading-relaxed border-l-2 border-primary/10 pl-6 lg:pl-8 py-2 italic">
                "Allineo design, sviluppo e obiettivi di business. Guido la creazione di prodotti digitali complessi, trasformando la visione creativa in una roadmap concreta e scalabile."
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 relative flex justify-center items-center h-[500px] lg:h-[700px] perspective-1000">
          <motion.div
            className="relative aspect-square w-full max-w-[580px]"
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
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full overflow-visible translate-z-[-20px]">
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

                <polygon
                  points={points}
                  fill="rgba(192, 57, 43, 0.05)"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  className="text-primary transition-all duration-300"
                />

                <defs>
                  <path id="textCircle" d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                </defs>
                <text className="font-typewriter text-[3.5px] uppercase tracking-[0.8em] fill-primary/20">
                  <textPath xlinkHref="#textCircle">PROGETTAZIONE • SVILUPPO • ORCHESTRAZIONE</textPath>
                </text>
              </svg>

              {[0, 1, 2].map((i) => {
                const style = getNavPointStyle(i);
                const labels = ["01 — Portfolio", "02 — Percorso", "03 — Contatti"];
                const details = ["Selected Missions", "Vision & Strategy", "Join the Network"];
                return (
                  <NavPoint
                    key={i}
                    left={style.left} top={style.top}
                    label={labels[i]} detail={details[i]} to="/progetti" index={i}
                    counterRotation={counterRotation}
                    onHover={setHoveredPoint}
                  />
                );
              })}
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20"
        style={{ opacity }}
      >
        <span className="font-typewriter text-[8px] uppercase tracking-[0.5em]">VAI GIÙ</span>
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
