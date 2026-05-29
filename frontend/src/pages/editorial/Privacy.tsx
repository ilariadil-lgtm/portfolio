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

const Privacy = () => {
  usePageMeta({
    title: "Privacy Policy",
    description: "Informativa sulla privacy di Ilaria Diliberto. Come vengono raccolti e trattati i dati personali.",
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
              Privacy<br />
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
          <Section title="Titolare del trattamento">
            <p>
              Ilaria Diliberto — P.IVA 03065860847<br />
              Sicilia, Italia<br />
              Email: <a href="mailto:ilaria.dil@gmail.com" className="text-primary hover:underline">ilaria.dil@gmail.com</a>
            </p>
          </Section>

          <Section title="Dati raccolti">
            <p>
              Questo sito raccoglie i dati che gli utenti forniscono volontariamente attraverso il modulo di contatto:
              nome, indirizzo email, e contenuto del messaggio.
            </p>
            <p>
              Non vengono raccolti dati di navigazione, non vengono utilizzati cookie di profilazione,
              e non vengono ceduti dati a terze parti.
            </p>
          </Section>

          <Section title="Finalità del trattamento">
            <p>
              I dati personali raccolti tramite il form di contatto vengono utilizzati esclusivamente
              per rispondere alle richieste degli utenti e non per scopi commerciali o di marketing.
            </p>
          </Section>

          <Section title="Base giuridica">
            <p>
              Il trattamento si basa sul consenso espresso dell'utente al momento dell'invio del modulo
              di contatto (art. 6, par. 1, lett. a) del GDPR).
            </p>
          </Section>

          <Section title="Conservazione dei dati">
            <p>
              I messaggi ricevuti vengono conservati per il tempo strettamente necessario a evadere
              la richiesta, e comunque non oltre 12 mesi dalla ricezione.
            </p>
          </Section>

          <Section title="Diritti dell'interessato">
            <p>
              Puoi esercitare i diritti previsti dagli artt. 15-22 del GDPR (accesso, rettifica,
              cancellazione, limitazione, portabilità e opposizione) scrivendo a{" "}
              <a href="mailto:ilaria.dil@gmail.com" className="text-primary hover:underline">
                ilaria.dil@gmail.com
              </a>.
            </p>
          </Section>

          <div className="border-t border-[#3d0f1a]/10 pt-10">
            <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-[#3d0f1a]/40">
              Questa informativa verrà aggiornata al momento della messa online del dominio ufficiale
              con eventuali strumenti di analisi e cookie tecnici.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
