import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  animate,
  MotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const NavPoint: React.FC<NavPointProps> = ({
  angle,
  radiusSpring,
  label,
  detail,
  to,
  index,
  counterRotation,
  onHover,
}) => {
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

  const wrapperClass =
    index === 0
      ? "absolute bottom-full left-1/2 -translate-x-1/2 pb-6 flex flex-col items-center pointer-events-auto z-[100]"
      : index === 1
        ? "absolute left-full top-1/2 -translate-y-1/2 pl-6 flex items-center pointer-events-auto z-[100]"
        : "absolute right-full top-1/2 -translate-y-1/2 pr-6 flex items-center pointer-events-auto z-[100]";

  const getAnimationProps = () => {
    switch (index) {
      case 0:
        return {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        };
      case 1:
        return {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
        };
      case 2:
        return {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
        };
      default:
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
        };
    }
  };

  const anim = getAnimationProps();

  return (
    <motion.div
      className="absolute z-30 pointer-events-auto cursor-pointer"
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
            className="w-3 h-3 rounded-full bg-[#d4af37]"
            animate={{
              scale: isLocalHover ? 1.5 : 1,
              boxShadow: isLocalHover
                ? "0 0 30px rgba(212, 175, 55, 0.6)"
                : "0 0 0px rgba(212, 175, 55, 0)",
            }}
          />

          <AnimatePresence>
            {isLocalHover && (
              <div className={wrapperClass}>
                <motion.div
                  {...anim}
                  style={{ rotate: counterRotation }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="whitespace-nowrap bg-[#080808]/90 backdrop-blur-xl p-4 md:p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-8 h-[1px] bg-[#d4af37]/50" />
                    <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-[#d4af37]">
                      {label}
                    </span>
                  </div>
                  <span className="block font-inter text-lg font-light text-white tracking-tight">
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

export const NebulaGraphic = () => {
  const { t } = useTranslation();
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isGraphicHovered, setIsGraphicHovered] = useState(false);
  const rotationValue = useMotionValue(0);
  const counterRotation = useTransform(rotationValue, (v) => -v);

  const radius1 = useSpring(85, { stiffness: 80, damping: 20 });
  const radius2 = useSpring(85, { stiffness: 80, damping: 20 });
  const radius3 = useSpring(85, { stiffness: 80, damping: 20 });

  useEffect(() => {
    radius1.set(85);
    radius2.set(85);
    radius3.set(85);
  }, [radius1, radius2, radius3]);

  const rotationControls = useRef<any>(null);

  useEffect(() => {
    if (hoveredPoint === null && !isGraphicHovered) {
      rotationControls.current = animate(
        rotationValue,
        rotationValue.get() + 360,
        {
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        },
      );
    } else {
      if (rotationControls.current) rotationControls.current.stop();
    }
    return () => {
      if (rotationControls.current) rotationControls.current.stop();
    };
  }, [hoveredPoint, isGraphicHovered, rotationValue]);

  const [points, setPoints] = useState("100,15 173.6,142.5 26.4,142.5");

  useEffect(() => {
    const unsubscribe1 = radius1.on("change", () => updatePoints());
    const unsubscribe2 = radius2.on("change", () => updatePoints());
    const unsubscribe3 = radius3.on("change", () => updatePoints());

    function updatePoints() {
      const v = [-90, 30, 150];
      const r = [radius1.get(), radius2.get(), radius3.get()];
      const pts = v
        .map((angle, i) => {
          const rad = angle * (Math.PI / 180);
          const x = 100 + r[i] * Math.cos(rad);
          const y = 100 + r[i] * Math.sin(rad);
          return `${x.toFixed(2)},${y.toFixed(2)}`;
        })
        .join(" ");
      setPoints(pts);
    }
    return () => {
      unsubscribe1();
      unsubscribe2();
      unsubscribe3();
    };
  }, [radius1, radius2, radius3]);

  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center pointer-events-auto">
      <motion.div
        className="relative w-full h-full"
        onMouseEnter={() => setIsGraphicHovered(true)}
        onMouseLeave={() => setIsGraphicHovered(false)}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ rotate: rotationValue }}
        >
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full overflow-visible"
          >
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.1"
              strokeDasharray="3 3"
              className="opacity-40"
            />
            <line
              x1="100"
              y1="5"
              x2="100"
              y2="195"
              stroke="#ffffff"
              strokeWidth="0.05"
              className="opacity-20"
            />
            <line
              x1="5"
              y1="100"
              x2="195"
              y2="100"
              stroke="#ffffff"
              strokeWidth="0.05"
              className="opacity-20"
            />

            <circle
              cx="100"
              cy="100"
              r="65"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.15"
              className="opacity-20"
            />

            <motion.circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.4"
              className="opacity-50"
              animate={{ r: hoveredPoint !== null ? 45 : 40 }}
            />

            <polygon
              points={points}
              fill="rgba(212, 175, 55, 0.05)"
              stroke="#d4af37"
              strokeWidth="0.8"
              className="transition-all duration-300 opacity-80"
            />

            <defs>
              <path
                id="textCircle"
                d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <text className="font-mono text-[4px] uppercase tracking-[0.8em] fill-white opacity-30">
              <textPath xlinkHref="#textCircle">
                {t("hero.circle_text")}
              </textPath>
            </text>
          </svg>

          {/* NavPoints Desktop */}
          <div className="hidden lg:block">
            {[0, 1, 2].map((i) => {
              const angles = [-90, 30, 150];
              const springs = [radius1, radius2, radius3];
              const labels = [
                t("hero.point1_label"),
                t("hero.point2_label"),
                t("hero.point3_label"),
              ];
              const details = [
                t("hero.point1_desc"),
                t("hero.point2_desc"),
                t("hero.point3_desc"),
              ];
              const links = ["/chisono", "/servizi", "/progetti"];
              return (
                <NavPoint
                  key={i}
                  angle={angles[i]}
                  radiusSpring={springs[i]}
                  label={labels[i]}
                  detail={details[i]}
                  to={links[i]}
                  index={i}
                  counterRotation={counterRotation}
                  onHover={setHoveredPoint}
                />
              );
            })}
          </div>

          {/* Mobile Links */}
          <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-5 whitespace-nowrap z-20">
            {[
              { label: t("nav.about"), to: "/chisono" },
              { label: t("nav.services"), to: "/servizi" },
              { label: t("nav.projects"), to: "/progetti" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Central Bloom Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-[#d4af37]/20 blur-xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
        </div>
      </motion.div>
    </div>
  );
};
