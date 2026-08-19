import { motion, AnimatePresence } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { NebulaFooter } from "./components/NebulaFooter";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { RevealText } from "@/components/RevealText";

const getStaticFaqs = (t: any) => [
  {
    id: 1,
    question: t("faq.q1", "Come funziona il processo di sviluppo?"),
    answer: t(
      "faq.a1",
      "Il processo prevede tre fasi principali: scoperta e strategia, design e sviluppo, test e rilascio.",
    ),
  },
  {
    id: 2,
    question: t(
      "faq.q2",
      "Quali sono i tempi medi per la realizzazione di un progetto?",
    ),
    answer: t(
      "faq.a2",
      "I tempi variano a seconda della complessità. Un sito vetrina richiede in media 3-4 settimane, mentre web app o e-commerce richiedono tra le 6 e le 12 settimane.",
    ),
  },
  {
    id: 3,
    question: t("faq.q3", "Quali tecnologie utilizzi per lo sviluppo?"),
    answer: t(
      "faq.a3",
      "Utilizzo uno stack moderno basato su React, Vite e TailwindCSS per il front-end. Per il back-end, prediligo Node.js o Python/Django. A seconda del progetto, implemento Supabase o Firebase.",
    ),
  },
  {
    id: 4,
    question: t("faq.q4", "Fornisci servizi di manutenzione post-rilascio?"),
    answer: t(
      "faq.a4",
      "Sì, offro pacchetti di manutenzione mensili per aggiornamenti di sicurezza, monitoraggio delle performance e piccoli interventi evolutivi.",
    ),
  },
  {
    id: 5,
    question: t("faq.q5", "Lavori solo con clienti in Italia?"),
    answer: t(
      "faq.a5",
      "No, opero a livello internazionale. Molti dei miei clienti si trovano all'estero. Il flusso di lavoro asincrono e i meeting strategici permettono di collaborare perfettamente a distanza.",
    ),
  },
];

const FaqItem = ({ faq, index }: { faq: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-white/5"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-6 py-10 text-left group transition-colors duration-300 hover:bg-white/[0.02] px-6 md:px-8"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-8 md:gap-12 w-full">
          {/* Numero Progressivo */}
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 font-bold mt-2 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Contenuto principale: Domanda & Risposta espandibile */}
          <div className="flex-1">
            <h3 className="font-bricolage font-black tracking-tight text-xl md:text-3xl text-white group-hover:text-gold transition-colors duration-500 mb-2">
              {faq.question}
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-outfit font-light text-white/50 text-base md:text-lg leading-relaxed pt-6 pb-2 pr-6">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Icona Espandi/Comprimi */}
        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gold shrink-0 mt-1 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
    </motion.div>
  );
};

const NebulaFAQ = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "FAQ",
    description:
      "Domande frequenti su come lavoro, i miei processi, tempi e costi. Tutto quello che devi sapere prima di iniziare un progetto insieme.",
  });

  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchFaqs = async () => {
      try {
        const data = await api.getFaqs();
        const fetched = data.results || data;
        setFaqs(fetched.length > 0 ? fetched : getStaticFaqs(t));
      } catch (error) {
        setFaqs(getStaticFaqs(t));
      }
    };
    fetchFaqs();
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-night text-slate-100 font-sans selection:bg-gold/30 overflow-hidden flex flex-col relative lg:pl-24">
      <NebulaNav />
      <ScrollIndicator
        sections={["scroll.hero", "scroll.contact"].map((k) => t(k))}
      />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* HERO SECTION */}
      <section className="relative pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                KNOWLEDGE BASE
              </span>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>

            <h1 className="font-fraunces italic font-light text-[12vw] md:text-[8vw] lg:text-[clamp(2rem,7vw,7rem)] leading-[0.9] tracking-tight text-white mb-8 pr-2">
              <RevealText
                text="FAQ"
                delay={0.1}
                className="not-italic font-bricolage pr-2"
              />
              <br />
              <RevealText
                text="& Info."
                delay={0.2}
                className="text-gold"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="font-outfit font-light text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Domande frequenti su come lavoro, i miei processi, metodologie e
              tempistiche. Tutto ciò che ti serve sapere prima di iniziare la
              nostra collaborazione.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ ACCORDION LIST */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 z-10 relative">
        <div className="max-w-4xl mx-auto border-t border-white/5">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.id || i} faq={faq} index={i} />
          ))}
        </div>
      </section>
      <NebulaFooter />
    </div>
  );
};

export default NebulaFAQ;
