import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface PreloaderProps {
  onComplete: () => void;
}

// ── costanti ────────────────────────────────────────────────────────────────
const BG_COLOR = "hsl(var(--background))";
const TEXT_COLOR = "hsl(var(--primary))";
const STAIN_COLOR = "hsl(345, 50%, 25%)";

const CHAR_DELAY = 60;
const DELETE_DELAY = 35;
const PAUSE_WRITE = 1000;
const PAUSE_STAIN = 400;

// ── componente Typewriter Avanzato ──────────────────────────────────────────
const TypewriterSequence: React.FC<{
  onFinished: () => void;
  phrase1: string;
  phrase2: string;
}> = ({ onFinished, phrase1, phrase2 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [step, setStep] = useState(1); // 1: write p1, 2: delete p1, 3: write p2

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const fullText = step === 1 ? phrase1 : phrase2;

      if (step === 2) {
        // Cancellazione
        if (text.length > 0) {
          setText(text.slice(0, -1));
          timeout = setTimeout(tick, DELETE_DELAY);
        } else {
          setStep(3);
          timeout = setTimeout(tick, PAUSE_WRITE);
        }
      } else {
        // Scrittura
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
          timeout = setTimeout(tick, CHAR_DELAY);
        } else {
          if (step === 1) {
            timeout = setTimeout(() => {
              setIsDeleting(true);
              setStep(2);
              tick();
            }, PAUSE_WRITE);
          } else {
            // Finito tutto
            setTimeout(onFinished, PAUSE_STAIN);
          }
        }
      }
    };

    timeout = setTimeout(tick, CHAR_DELAY);
    return () => clearTimeout(timeout);
  }, [step, text.length, onFinished, phrase1, phrase2]);

  return (
    <div className="relative inline-block px-4">
      <span className="font-typewriter text-[clamp(16px,2.5vw,28px)] font-normal tracking-tight leading-none text-primary">
        {text}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[2px] h-[0.8em] bg-[hsl(345,50%,25%)] ml-1 align-middle"
      />
    </div>
  );
};

// ── componente principale ───────────────────────────────────────────────────
export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<"typewriter" | "stain" | "exit">(
    "typewriter",
  );

  const phrase1 = t("preloader.phrase1", "ogni pixel conta.");
  const phrase2 = t("preloader.phrase2", "ilaria diliberto.");

  useEffect(() => {
    // Rimosso check prefers-reduced-motion per garantire che l'animazione funzioni sempre
  }, [onComplete]);

  const handleSequenceFinished = useCallback(() => {
    setPhase("stain");
  }, []);

  useEffect(() => {
    if (phase === "stain") {
      const timer = setTimeout(() => {
        setPhase("exit");
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== "exit" && (
        <motion.div
          key="preloader-main"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center pt-56 md:pt-0 overflow-hidden bg-background"
        >
          {/* Noise texture overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E')]"></div>

          {/* The Stain (Red Ball) */}
          {phase === "stain" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 40, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="absolute w-[100px] h-[100px] rounded-full bg-[hsl(345,50%,25%)] z-10"
            />
          )}

          {/* Content Container */}
          <div className="relative z-20 text-center">
            {phase === "typewriter" ? (
              <TypewriterSequence
                onFinished={handleSequenceFinished}
                phrase1={phrase1}
                phrase2={phrase2}
              />
            ) : (
              <motion.div
                animate={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-typewriter text-[clamp(16px,2.5vw,28px)] font-normal tracking-tight leading-none text-primary"
              >
                {phrase2}
              </motion.div>
            )}
          </div>

          {/* Institutional labels */}
          <motion.span
            className="absolute top-10 left-12 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#c8bfb5]"
            animate={{ opacity: phase === "stain" ? 0 : 1 }}
          >
            portfolio — 2026
          </motion.span>
          <motion.span
            className="absolute bottom-9 right-12 font-sans text-[10px] tracking-[0.14em] text-[#c8bfb5]"
            animate={{ opacity: phase === "stain" ? 0 : 1 }}
          >
            ilaria diliberto
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
