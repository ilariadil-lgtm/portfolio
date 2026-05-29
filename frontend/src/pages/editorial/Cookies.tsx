import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-[#3d0f1a]/10 pt-10 pb-4">
    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#3d0f1a] mb-6 italic">{title}</h2>
    <div className="font-body text-[16px] text-[#3d0f1a]/70 leading-relaxed space-y-4 max-w-3xl">
      {children}
    </div>
  </div>
);

const Cookies = () => {
  usePageMeta({
    title: "Cookie Policy",
    description: "Informativa sull'uso dei cookie di questo sito web.",
  });

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* HERO */}
      <section className="pt-32 md:pt-48 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-bold">
                LEGALE
              </span>
              <div className="w-10 h-[1px] bg-primary/25" />
            </div>
            <h1
              className="font-display font-bold leading-[0.85] tracking-tighter text-[#3d0f1a]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Cookie<br />
              <span className="text-primary italic">Policy.</span>
            </h1>
            <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-[#3d0f1a]/40 mt-6">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Section title="Cosa sono i cookie">
            <p>
              I cookie sono piccoli file di testo salvati sul dispositivo dell'utente durante la
              navigazione su un sito web. Permettono al sito di ricordare le preferenze e alcune
              informazioni sull'utente tra una visita e l'altra.
            </p>
          </Section>

          <Section title="Cookie utilizzati da questo sito">
            <p>
              Questo sito utilizza esclusivamente cookie tecnici strettamente necessari al
              funzionamento del sito, come la memorizzazione della preferenza di tema (editorial/nebula).
            </p>
            <p>
              <strong className="text-[#3d0f1a]">Non vengono utilizzati:</strong> cookie di profilazione,
              cookie di terze parti, strumenti di analisi (Google Analytics o simili), pixel di tracking
              o cookie pubblicitari.
            </p>
          </Section>

          <Section title="Cookie tecnici presenti">
            <div className="border border-[#3d0f1a]/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-[#3d0f1a]/10">
                    <th className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-primary font-bold p-4 text-left">Nome</th>
                    <th className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-primary font-bold p-4 text-left">Scopo</th>
                    <th className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-primary font-bold p-4 text-left">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#3d0f1a]/5">
                    <td className="p-4 font-typewriter text-[12px] text-[#3d0f1a]">portfolio-design</td>
                    <td className="p-4 text-[#3d0f1a]/60">Memorizza la preferenza del tema (localStorage)</td>
                    <td className="p-4 text-[#3d0f1a]/60">Persistente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Come disabilitare i cookie">
            <p>
              Puoi disabilitare i cookie direttamente dalle impostazioni del tuo browser.
              Tieni presente che disabilitare i cookie tecnici potrebbe compromettere il corretto
              funzionamento del sito.
            </p>
          </Section>

          <Section title="Aggiornamenti">
            <p>
              Questa policy verrà aggiornata al momento della messa online del dominio ufficiale,
              qualora venissero introdotti strumenti di analisi o altri cookie non tecnici.
            </p>
          </Section>

          <div className="border-t border-[#3d0f1a]/10 pt-10">
            <p className="font-body text-[15px] text-[#3d0f1a]/60">
              Per qualsiasi domanda:{" "}
              <a href="mailto:ilaria.dil@gmail.com" className="text-primary hover:underline">
                ilaria.dil@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
