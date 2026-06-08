import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-[#3d0f1a]/10 pt-10 pb-4">
    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#3d0f1a] mb-6 italic pr-2">{title}</h2>
    <div className="font-body text-[16px] text-[#3d0f1a]/70 leading-relaxed space-y-4 max-w-3xl">
      {children}
    </div>
  </div>
);

const Cookies = () => {
  const { t, i18n } = useTranslation();
  usePageMeta({
    title: t('legal.cookies_title'),
    description: t('legal.cookies_desc'),
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
                {t('legal.privacy_label')}
              </span>
              <div className="w-10 h-[1px] bg-primary/25" />
            </div>
            <h1
              className="font-display font-bold leading-[0.85] tracking-tighter text-[#3d0f1a]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {t('legal.cookies_h1_1')}<br />
              <span className="text-primary italic pr-2">{t('legal.cookies_h1_2')}</span>
            </h1>
            <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-[#3d0f1a]/40 mt-6">
              {t('legal.last_updated')} {new Date().toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'it-IT', { year: 'numeric', month: 'long' })}
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
          <Section title={t('legal.cookies_sec1_title')}>
            <p>
              {t('legal.cookies_sec1_p1')}
            </p>
          </Section>

          <Section title={t('legal.cookies_sec2_title')}>
            <p>
              {t('legal.cookies_sec2_p1')}
            </p>
            <p dangerouslySetInnerHTML={{ __html: t('legal.cookies_sec2_p2') }} />
          </Section>

          <Section title={t('legal.cookies_sec3_title')}>
            <div className="border border-[#3d0f1a]/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-[#3d0f1a]/10">
                    <th className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-primary font-bold p-4 text-left">{t('legal.cookies_table_h1')}</th>
                    <th className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-primary font-bold p-4 text-left">{t('legal.cookies_table_h2')}</th>
                    <th className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-primary font-bold p-4 text-left">{t('legal.cookies_table_h3')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#3d0f1a]/5">
                    <td className="p-4 font-typewriter text-[12px] text-[#3d0f1a]">{t('legal.cookies_table_d1_1')}</td>
                    <td className="p-4 text-[#3d0f1a]/60">{t('legal.cookies_table_d1_2')}</td>
                    <td className="p-4 text-[#3d0f1a]/60">{t('legal.cookies_table_d1_3')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title={t('legal.cookies_sec4_title')}>
            <p>
              {t('legal.cookies_sec4_p1')}
            </p>
          </Section>

          <Section title={t('legal.cookies_sec5_title')}>
            <p>
              {t('legal.cookies_sec5_p1')}
            </p>
          </Section>

          <div className="border-t border-[#3d0f1a]/10 pt-10">
            <p className="font-body text-[15px] text-[#3d0f1a]/60">
              {t('legal.cookies_footer')}
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
