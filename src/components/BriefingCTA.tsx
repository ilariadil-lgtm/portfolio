import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/components/Link";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { useTranslation } from "react-i18next";

interface BriefingCTAProps {
  title1?: string;
  title2?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
}

export const BriefingCTA: React.FC<BriefingCTAProps> = ({
  title1,
  title2,
  subtitle,
  description,
  buttonText,
}) => {
  const { t } = useTranslation();

  return (
    <section className="pt-24 md:pt-36 pb-32 md:pb-40 px-6 md:px-12 lg:px-24 bg-ink text-cream relative overflow-hidden border-t border-cream/5">
      {/* Background Subtle Grid/Dots or Radials */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#F7F4EC 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Glow Effect */}
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column: Text block containing title & narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-typewriter text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-cream/50 font-bold block">
              {subtitle || t("cta.subtitle")}
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-none tracking-tighter text-cream">
              <RevealText text={title1 || t("cta.title_1")} delay={0.1} />
              <RevealText
                text={title2 || t("cta.title_2")}
                delay={0.3}
                className="text-primary italic pr-2"
              />
            </h2>
            <p className="font-body text-lg text-cream/70 leading-relaxed max-w-xl">
              {description || t("cta.description")}
            </p>
          </div>

          {/* Right Column: CTA Button trigger */}
          <div className="lg:col-span-5 flex lg:justify-end justify-start items-center">
            <MagneticWrapper strength={20} className="w-full max-w-md">
              <Link
                to="/contatti"
                data-cursor="pointer"
                className="group inline-flex items-center gap-8 p-8 border border-white/10 bg-cream shadow-brutal-6 md:shadow-brutal-10 hover:translate-x-1 hover:-translate-y-1 hover:shadow-brutal-10 md:hover:shadow-brutal-15 transition-all duration-300 w-full justify-between"
              >
                <span className="relative z-10 flex items-center gap-4 text-[10px] sm:text-[11px] tracking-widest uppercase font-bold text-ink">
                  {buttonText || t("cta.button")}
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
