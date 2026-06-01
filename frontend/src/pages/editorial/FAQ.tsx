import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { BriefingCTA } from "@/components/BriefingCTA";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

const getStaticFaqs = (t: any) => [
  {
    id: 1,
    question: t('faq.q1'),
    answer: t('faq.a1')
  },
  {
    id: 2,
    question: t('faq.q2'),
    answer: t('faq.a2')
  },
  {
    id: 3,
    question: t('faq.q3'),
    answer: t('faq.a3')
  },
  {
    id: 4,
    question: t('faq.q4'),
    answer: t('faq.a4')
  },
  {
    id: 5,
    question: t('faq.q5'),
    answer: t('faq.a5')
  },
];

const FaqItem = ({ faq, index }: { faq: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="border-b border-[#3d0f1a]/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-6 py-8 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5">
          <span className="font-typewriter text-[10px] text-primary/40 font-bold mt-1 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="font-display text-xl md:text-2xl font-bold text-[#3d0f1a] group-hover:text-primary transition-colors duration-300 leading-snug">
            {faq.question}
          </h2>
        </div>
        <div className="w-8 h-8 border border-primary/25 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-[16px] text-[#3d0f1a]/70 leading-relaxed pb-8 pl-10 max-w-2xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "FAQ",
    description: "Domande frequenti su come lavoro, i miei processi, tempi e costi. Tutto quello che devi sapere prima di iniziare un progetto insieme.",
  });

  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
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
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <span
            className="font-display font-black text-[#3d0f1a]/[0.025] pr-4"
            style={{ fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1 }}
          >
            {t('faq.watermark')}
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-bold">
                {t('faq.subtitle')}
              </span>
              <div className="w-10 h-[1px] bg-primary/25" />
            </div>
            <h1
              className="font-display font-bold leading-[0.85] tracking-tighter text-[#3d0f1a]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)" }}
            >
              {t('faq.title_1')}<br />
              <span className="text-primary italic">{t('faq.title_2')}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </section>

      <BriefingCTA />
      <Footer />
    </div>
  );
};

export default FAQ;
