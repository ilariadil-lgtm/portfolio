import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const NebulaProcessSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-4">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
          {t("index.process_label")}
        </span>
        <div className="w-12 h-[1px] bg-gold/20" />
      </div>
      <h2 className="font-bricolage text-3xl md:text-5xl font-bold text-white mb-16">
        {t("index.process_title_1")}{" "}
        <span className="font-fraunces italic font-light text-gold">
          {t("index.process_title_2")}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {[1, 2, 3, 4].map((n) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: n * 0.1 }}
            className="border-t border-white/15 pt-6"
          >
            <span className="font-bricolage text-3xl font-black text-white/15">
              {t(`index.process_${n}_num`)}
            </span>
            <h3 className="font-bricolage text-xl font-bold text-white mt-3 mb-3">
              {t(`index.process_${n}_title`)}
            </h3>
            <p className="font-outfit font-light text-[15px] text-white/60 leading-relaxed">
              {t(`index.process_${n}_desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
