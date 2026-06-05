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

const NebulaCookies = () => {
  const { t, i18n } = useTranslation();
  usePageMeta({
    title: t('legal.cookies_title', "Cookie Policy"),
    description: t('legal.cookies_desc', "Informativa sui cookie"),
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
            
            <h1 className="font-fraunces italic font-light leading-[0.9] tracking-tight text-white mb-8" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
              <RevealText text={t('legal.cookies_h1_1', "Cookie")} delay={0.1} />
              <br />
              <RevealText text={t('legal.cookies_h1_2', "Policy.")} delay={0.2} className="text-[#d4af37]" />
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
          <Section title={t('legal.cookies_sec1_title', "1. Cosa sono i Cookie?")}>
            <p>
              {t('legal.cookies_sec1_p1', "I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente, dove vengono memorizzati per poi essere ritrasmessi agli stessi siti alla visita successiva.")}
            </p>
          </Section>

          <Section title={t('legal.cookies_sec2_title', "2. Tipologie di Cookie Utilizzati")}>
            <p>
              {t('legal.cookies_sec2_p1', "Questo sito utilizza esclusivamente Cookie Tecnici strettamente necessari al corretto funzionamento della piattaforma. Non vengono impiegati cookie di profilazione per inviare messaggi pubblicitari in linea con le tue preferenze.")}
            </p>
            <p dangerouslySetInnerHTML={{ __html: t('legal.cookies_sec2_p2', "Il sito può ospitare cookie di terze parti (es. <strong>Google Analytics</strong> in forma anonimizzata) per statistiche di navigazione globali e non traccianti a livello personale.") }} />
          </Section>

          <Section title={t('legal.cookies_sec3_title', "3. Tabella dei Cookie")}>
            <div className="border border-white/10 overflow-hidden bg-white/[0.02]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] font-bold p-4 text-left">{t('legal.cookies_table_h1', "NOME")}</th>
                    <th className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] font-bold p-4 text-left">{t('legal.cookies_table_h2', "SCOPO")}</th>
                    <th className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] font-bold p-4 text-left">{t('legal.cookies_table_h3', "DURATA")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-mono text-[11px] text-white">_ga (Google Analytics)</td>
                    <td className="p-4 text-white/50">{t('legal.cookies_table_d1_2', "Analitiche e statistiche aggregate")}</td>
                    <td className="p-4 text-white/50">{t('legal.cookies_table_d1_3', "2 anni")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title={t('legal.cookies_sec4_title', "4. Gestione dei Cookie")}>
            <p>
              {t('legal.cookies_sec4_p1', "L'utente può gestire le preferenze relative ai cookie direttamente all'interno del proprio browser, impedendo ad esempio che terze parti possano installarne. Disabilitando tutti i cookie il funzionamento di questo sito potrebbe essere compromesso.")}
            </p>
          </Section>

          <Section title={t('legal.cookies_sec5_title', "5. Consenso")}>
            <p>
              {t('legal.cookies_sec5_p1', "Navigando sul sito senza disabilitare i cookie nel proprio browser, l'utente acconsente al loro utilizzo in conformità alla presente Cookie Policy.")}
            </p>
          </Section>

          <div className="border-t border-white/5 pt-10">
            <p className="font-outfit text-base text-white/50">
              {t('legal.cookies_footer', "Per chiarimenti o domande sulla gestione dei cookie, contattami a ")}
              <a href="mailto:ilaria.dil@gmail.com" className="text-[#d4af37] hover:text-white transition-colors">
                ilaria.dil@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      <NebulaFooter />
    </div>
  );
};

export default NebulaCookies;
