import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Layout, ShoppingBag, Sparkles, Wrench } from "lucide-react";
import { Link } from "@/components/Link";
import { BriefingCTA } from "@/components/BriefingCTA";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { useTranslation } from "react-i18next";

const Servizi = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: t("services.title_1") + " " + t("services.title_2"),
    description: t("services.description"),
  });

  const cards = [
    {
      ns: "service_sito",
      url: "/sito-aziendale",
      icon: <Layout size={22} />,
      num: "01",
    },
    {
      ns: "service_ecommerce",
      url: "/e-commerce",
      icon: <ShoppingBag size={22} />,
      num: "02",
    },
    {
      ns: "service_restyling",
      url: "/restyling",
      icon: <Sparkles size={22} />,
      num: "03",
    },
    {
      ns: "service_manutenzione",
      url: "/manutenzione",
      icon: <Wrench size={22} />,
      num: "04",
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-cream text-ink overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — SERVICES GATEWAY
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-52 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-[0.02] pointer-events-none">
          <span className="font-display text-[20vw] font-black uppercase tracking-tighter">
            {t("services.watermark")}
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:items-center items-start">
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">
                    {t("services.what_i_offer")}
                  </span>
                  <div className="w-12 h-[1px] bg-primary/20" />
                </div>
                <h1 className="flex whitespace-nowrap font-display text-[10vw] lg:text-[clamp(2rem,6.2vw,6.2rem)] font-bold leading-[1.1] md:leading-[0.85] tracking-tighter text-ink">
                  <RevealText text={t("services.title_1")} delay={0.1} />
                  <span className="ml-2 sm:ml-4">
                    <RevealText
                      text={t("services.title_2")}
                      delay={0.2}
                      className="text-primary italic pr-2"
                    />
                  </span>
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-body text-lg text-ink/80 leading-relaxed pl-8 border-l border-primary/25"
              >
                {t("services.description")}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           SERVICE CARDS — I 4 SERVIZI
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-ink/10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-typewriter text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
              {t("services.cards_label")}
            </span>
            <div className="w-12 h-[1px] bg-primary/20" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-2">
            {t("services.cards_title_1")} <span className="italic text-primary">{t("services.cards_title_2")}</span>
          </h2>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.ns}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 80, damping: 18 },
                },
              }}
              className="group flex flex-col p-8 border border-ink bg-white shadow-soft-8 hover:shadow-brutal-8 transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent top-0 group-hover:top-[100%] transition-all [transition-duration:3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <span className="font-typewriter text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
                    {card.num}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-ink/65 bg-primary/5 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                    {card.icon}
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4 leading-tight">
                  {t(`${card.ns}.title`)}
                </h3>
                <p className="font-body text-[15px] text-ink/70 leading-relaxed flex-1 mb-10">
                  {t(`${card.ns}.meta_desc`)}
                </p>

                <div className="pt-6 border-t border-ink/10">
                  <Link
                    to={card.url}
                    className="group/btn inline-flex items-center justify-between w-full font-typewriter text-[13px] uppercase tracking-[0.2em] text-ink group-hover:text-primary font-medium transition-colors"
                  >
                    <span className="relative overflow-hidden">
                      {t("services.discover_btn")}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                    </span>
                    <div className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white transition-all duration-500 transform group-hover/btn:scale-110">
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           COME LAVORIAMO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-12 lg:px-24 border-t border-editorial bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">
              {t("index.process_label")}
            </span>
            <div className="w-12 h-[1px] bg-primary/20" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tight text-ink mb-10 md:mb-12">
            {t("index.process_title_1")}{" "}
            <span className="text-primary italic pr-2">{t("index.process_title_2")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: n * 0.1 }}
                className="group h-full flex flex-col p-8 border border-ink bg-white shadow-soft-8 hover:shadow-brutal-8 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent top-0 group-hover:top-[100%] transition-all [transition-duration:3s] ease-in-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-4xl font-black text-ink/15">
                    {t(`index.process_${n}_num`)}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-ink/65 bg-primary/5 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                    <span className="font-display font-black text-base">{n}</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-4">
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

      <BriefingCTA />
      <Footer />
    </div>
  );
};

export default Servizi;
