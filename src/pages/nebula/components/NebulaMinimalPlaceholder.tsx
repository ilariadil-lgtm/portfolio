import { NebulaNav } from "./NebulaNav";
import { NebulaFooter } from "./NebulaFooter";
import { Link } from "@/components/Link";
import { ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

interface NebulaMinimalPlaceholderProps {
  title: string;
  description: string;
  backLabel: string;
  backUrl: string;
}

/**
 * Sezione nuova della rivoluzione del sito (PIANO-RIVOLUZIONE-SITO.md), non
 * ancora progettata: Fase 1 mette in piedi solo l'indirizzo e la navigazione,
 * grafica e testi definitivi arrivano in Fase 2/3.
 */
export const NebulaMinimalPlaceholder = ({ title, description, backLabel, backUrl }: NebulaMinimalPlaceholderProps) => {
  usePageMeta({ title, description });

  return (
    <div className="min-h-[100dvh] w-full bg-night text-slate-100 font-sans selection:bg-gold/30 flex flex-col lg:pl-24">
      <NebulaNav />
      <main className="flex-1 flex items-center px-6 md:px-12 pt-40 pb-24">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold font-medium">
            In costruzione
          </span>
          <h1 className="font-fraunces text-4xl md:text-6xl font-bold tracking-tight text-white">
            {title}
          </h1>
          <p className="font-outfit font-light text-lg text-white/70 leading-relaxed">
            {description}
          </p>
          <Link
            to={backUrl}
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold font-medium"
          >
            {backLabel}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
      <NebulaFooter />
    </div>
  );
};

export default NebulaMinimalPlaceholder;
