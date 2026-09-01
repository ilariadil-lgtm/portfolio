import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "Blog",
    description:
      "Riflessioni su design, sviluppo web e strategia digitale. Articoli tecnici e pensieri sul mestiere di costruire prodotti digitali.",
  });

  return (
    <div className="min-h-[100dvh] bg-cream text-ink overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-52 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#3d0f1a 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Watermark */}
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <span
            className="font-display font-black text-ink/[0.025] pr-4"
            style={{ fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1 }}
          >
            {t("blog.watermark")}
          </span>
        </div>

        <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-bold">
                {t("blog.subtitle")}
              </span>
              <div className="w-10 h-[1px] bg-primary/25" />
            </div>
            <h1
              className="font-display font-bold leading-[1.1] md:leading-[0.85] tracking-tighter text-ink"
              style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)" }}
            >
              {t("blog.title_1")}
              <br />
              <span className="text-primary italic pr-2">
                {t("blog.title_2")}
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-24 text-center border-t border-ink/10"
          >
            <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-bold block mb-6">
              {t("blog.coming_soon_label")}
            </span>
            <p className="font-display text-3xl md:text-4xl font-bold text-ink italic pr-2">
              {t("blog.coming_soon_title")}
            </p>
            <p className="font-body text-ink/65 mt-4">
              {t("blog.coming_soon_desc")}
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
