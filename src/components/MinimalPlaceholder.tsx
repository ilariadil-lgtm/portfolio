import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link";
import { ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

interface MinimalPlaceholderProps {
  title: string;
  description: string;
  backLabel: string;
  backUrl: string;
}

/**
 * Sezione nuova della rivoluzione del sito (PIANO-RIVOLUZIONE-SITO.md), non
 * ancora progettata: Fase 1 mette in piedi solo l'indirizzo e la navigazione,
 * grafica e testi definitivi arrivano in Fase 2/3. Serve comunque una pagina
 * vera — con titolo, meta description e abbastanza testo — non un guscio vuoto.
 */
export const MinimalPlaceholder = ({ title, description, backLabel, backUrl }: MinimalPlaceholderProps) => {
  usePageMeta({ title, description });

  return (
    <div className="min-h-[100dvh] bg-cream text-ink selection:bg-primary/30 font-body flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center px-6 md:px-12 lg:px-24 pt-40 pb-24">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
          <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-medium">
            In costruzione
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-ink">
            {title}
          </h1>
          <p className="font-body text-lg text-ink/70 leading-relaxed">
            {description}
          </p>
          <Link
            to={backUrl}
            className="group inline-flex items-center gap-3 font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium"
          >
            {backLabel}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MinimalPlaceholder;
