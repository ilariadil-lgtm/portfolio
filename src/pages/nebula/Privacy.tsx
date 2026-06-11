import { motion } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { RevealText } from "@/components/RevealText";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-white/5 pt-10 pb-4">
    <h2 className="font-bricolage font-black tracking-tight text-xl md:text-2xl text-white mb-6 group-hover:text-[#d4af37] transition-colors">{title}</h2>
    <div className="font-outfit font-light text-white/50 text-base md:text-lg leading-relaxed space-y-4 max-w-3xl">
      {children}
    </div>
  </div>
);

const NebulaPrivacy = () => {
  const { t, i18n } = useTranslation();
  usePageMeta({
    title: t('legal.privacy_title', "Privacy Policy"),
    description: t('legal.privacy_desc', "Informativa sulla privacy"),
  });

  return (
    <div className="min-h-screen w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative md:pl-20">
      <NebulaNav />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* HERO SECTION */}
      <section className="relative pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                {t('legal.privacy_label', "LEGAL & COMPLIANCE")}
              </span>
              <div className="w-12 h-[1px] bg-[#d4af37]/30" />
            </div>
            
            <h1 className="font-fraunces italic font-light leading-[0.9] tracking-tight text-white mb-8 pr-2" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
              <RevealText text={t('legal.privacy_h1_1', "Privacy")} delay={0.1} />
              <br />
              <RevealText text={t('legal.privacy_h1_2', "Policy.")} delay={0.2} className="text-[#d4af37]" />
            </h1>

            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mt-6 pl-8 border-l border-white/10">
              {t('legal.last_updated', "ULTIMO AGGIORNAMENTO:")} {new Date().toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'it-IT', { year: 'numeric', month: 'long' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 z-10 relative">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Section title={t('legal.privacy_sec1_title', "1. Titolare del Trattamento")}>
            <p dangerouslySetInnerHTML={{ __html: t('legal.privacy_sec1_content', "Ilaria Diliberto<br/>Email: ilaria.dil@gmail.com") }} />
          </Section>

          <Section title={t('legal.privacy_sec2_title', "2. Dati raccolti e finalità")}>
            <p>
              {t('legal.privacy_sec2_p1', "Raccogliamo i dati personali che ci fornisci volontariamente tramite il modulo di contatto (nome, email, oggetto, messaggio) al fine di rispondere alle tue richieste di collaborazione e di fornirti le informazioni richieste.")}
            </p>
            <p>
              {t('legal.privacy_sec2_p2', "I dati di navigazione (indirizzi IP, log di sistema) vengono acquisiti dai sistemi informatici preposti al funzionamento del sito, unicamente per ricavare informazioni statistiche anonime e controllare il corretto funzionamento.")}
            </p>
          </Section>

          <Section title={t('legal.privacy_sec3_title', "3. Base Giuridica")}>
            <p>
              {t('legal.privacy_sec3_p1', "Il trattamento si basa sul legittimo interesse del Titolare o sull'esecuzione di misure precontrattuali adottate su richiesta dell'utente.")}
            </p>
          </Section>

          <Section title={t('legal.privacy_sec4_title', "4. Conservazione dei Dati")}>
            <p>
              {t('legal.privacy_sec4_p1', "I dati forniti saranno conservati per il tempo strettamente necessario a gestire la tua richiesta o in base agli obblighi di legge previsti.")}
            </p>
          </Section>

          <Section title={t('legal.privacy_sec5_title', "5. Diritti dell'Utente")}>
            <p>
              {t('legal.privacy_sec5_p1', "Hai il diritto di chiedere al Titolare l'accesso, la rettifica, la cancellazione dei dati, o la limitazione del trattamento. Puoi esercitare i tuoi diritti scrivendo all'indirizzo email indicato.")}
            </p>
          </Section>

          <Section title={t('legal.privacy_sec6_title', "6. Contatti")}>
            <p>
              {t('legal.privacy_sec6_p1', "Per qualsiasi dubbio o richiesta relativa alla presente Privacy Policy, contattami all'indirizzo: ")}
              <a href="mailto:ilaria.dil@gmail.com" className="text-[#d4af37] hover:text-white transition-colors">
                ilaria.dil@gmail.com
              </a>.
            </p>
          </Section>

          <div className="border-t border-white/5 pt-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
              {t('legal.privacy_footer', "ILARIA DILIBERTO © 2026. TUTTI I DIRITTI RISERVATI.")}
            </p>
          </div>
        </motion.div>
      </section>

      <NebulaFooter />
    </div>
  );
};

export default NebulaPrivacy;
