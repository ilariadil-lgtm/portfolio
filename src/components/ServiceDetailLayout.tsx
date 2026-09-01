import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { Link } from "@/components/Link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { BriefingCTA } from "@/components/BriefingCTA";
import { ProjectNavigation } from "@/components/ProjectNavigation";

interface ServiceDetailLayoutProps {
  /** Chiave i18n del servizio, es. "service_sito" — usata come prefisso per titolo/testo/comprende/tempi. */
  ns: string;
  url: string;
  /** Voci opzionali dell'elenco "Comprende" — se assente, la card non le mostra (vedi Restyling). */
  comprende?: string[];
  tempi?: string;
  prev: { url: string; title: string };
  next: { url: string; title: string };
}

export const ServiceDetailLayout = ({ ns, url, comprende, tempi, prev, next }: ServiceDetailLayoutProps) => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  usePageMeta({
    title: t(`${ns}.title`),
    description: t(`${ns}.meta_desc`),
  });

  useEffect(
    () =>
      injectSchema({
        "@type": "Service",
        name: t(`${ns}.title`),
        provider: { "@type": "Person", name: "Ilaria Diliberto" },
        areaServed: "IT",
        description: t(`${ns}.meta_desc`),
        url: `https://ilariadiliberto.com${url}`,
      }),
    [ns, url],
  );

  return (
    <div className="min-h-[100dvh] bg-cream text-ink selection:bg-primary/30 font-body">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col pt-40 md:pt-48 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-cream">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#3d0f1a 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-20 mb-12 md:mb-16 max-w-screen-xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Link to="/servizi" className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-ink/65 hover:text-primary transition-colors font-semibold">
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              {t("service_detail.back")}
            </Link>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT: Title, description, CTAs */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="overflow-hidden mb-6">
                  <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium block">
                    {t("service_detail.services_label")}
                  </motion.span>
                </div>

                <h1 className="font-display text-[12vw] lg:text-[clamp(3rem,6.5vw,6rem)] font-bold leading-[1.05] tracking-tighter text-ink mb-8">
                  {t(`${ns}.title`)}
                </h1>

                <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed max-w-2xl">
                  {t(`${ns}.text`)}
                </p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="mt-12 flex flex-col sm:flex-row gap-6">
                  <a href="mailto:info@ilariadiliberto.com" className="group inline-flex items-center justify-center gap-4 bg-ink text-cream px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest shadow-brutal-6 hover:shadow-brutal-2 hover:translate-y-[4px] hover:translate-x-[4px] transition-all">
                    {t("project_nav.book_call")}
                    <ArrowUpRight size={14} className="text-primary group-hover:scale-110 transition-transform" />
                  </a>
                  <Link to="/contatti" className="group inline-flex items-center justify-center gap-4 border border-ink/20 bg-transparent text-ink px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest hover:border-ink hover:bg-white/50 transition-all">
                    {t("service_detail.talk_to_me")}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: Wireframe spec card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md"
              >
                <div className="absolute inset-0 border border-ink translate-x-2 translate-y-2 pointer-events-none" />
                <div className="relative bg-white border border-ink p-8 md:p-10 flex flex-col text-ink z-10">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.2em] font-semibold opacity-60 block mb-2">
                    {t("service_detail.services_label")}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{t(`${ns}.title`)}</h2>

                  <p className="font-body text-[15px] text-ink/80 leading-relaxed mb-8">
                    {t(`${ns}.meta_desc`)}
                  </p>

                  {tempi && (
                    <>
                      <div className="w-full h-[1px] bg-ink/10 mb-6" />
                      <div className="mb-8">
                        <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold block mb-2">
                          {t("service_detail.timing")}
                        </span>
                        <span className="font-display text-2xl md:text-3xl font-black tracking-tight">{tempi}</span>
                      </div>
                    </>
                  )}

                  {comprende && comprende.length > 0 && (
                    <>
                      <div className="w-full h-[1px] bg-ink/10 mb-6" />
                      <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-ink/65 block mb-5 font-semibold">
                        {t("service_detail.includes")}
                      </span>
                      <ul className="space-y-3">
                        {comprende.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="font-body text-[14px] text-ink/85">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           COME LAVORIAMO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-editorial bg-white">
        <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">
              {t("index.process_label")}
            </span>
            <div className="w-12 h-[1px] bg-primary/20" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tight text-ink mb-16">
            {t("index.process_title_1")}{" "}
            <span className="text-primary italic pr-2">{t("index.process_title_2")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: n * 0.1 }}
                className="border-t border-ink/15 pt-6"
              >
                <span className="font-display text-3xl font-black text-ink/15">
                  {t(`index.process_${n}_num`)}
                </span>
                <h3 className="font-display text-xl font-bold text-ink mt-3 mb-3">
                  {t(`index.process_${n}_title`)}
                </h3>
                <p className="font-body text-[15px] text-ink/65 leading-relaxed">
                  {t(`index.process_${n}_desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectNavigation
        prev={prev}
        next={next}
        archiveUrl="/servizi"
        archiveTitle={t("service_detail.all_services")}
        prevLabel={t("service_detail.prev_service")}
        nextLabel={t("service_detail.next_service")}
      />
      <BriefingCTA />
      <Footer />
    </div>
  );
};
