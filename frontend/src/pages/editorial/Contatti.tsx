import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Linkedin, Github, Instagram, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { useTranslation } from "react-i18next";

const getContacts = (t: any) => [
  {
    label: "Email",
    detail: "ilaria.dil@gmail.com",
    sub: t('contact.sub_email'),
    icon: <Mail size={17} />,
    href: "mailto:ilaria.dil@gmail.com",
  },
  {
    label: "LinkedIn",
    detail: "Ilaria Diliberto",
    sub: t('contact.sub_linkedin'),
    icon: <Linkedin size={17} />,
    href: "https://www.linkedin.com/in/ilaria-diliberto/",
  },
  {
    label: "GitHub",
    detail: "@ilariadil-lgtm",
    sub: t('contact.sub_github'),
    icon: <Github size={17} />,
    href: "https://github.com/ilariadil-lgtm",
  },
  {
    label: "Instagram",
    detail: "@ilaryvision",
    sub: t('contact.sub_instagram'),
    icon: <Instagram size={17} />,
    href: "https://www.instagram.com/ilaryvision/",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
function InputField({
  label, name, type = "text", required = true, value, onChange, placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <div className="group relative">
      <label htmlFor={name} className="font-typewriter text-[9px] uppercase tracking-[0.45em] text-[#3d0f1a]/60 block mb-3 font-bold cursor-pointer">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#3d0f1a]/20 py-3.5 text-[#3d0f1a] placeholder:text-[#3d0f1a]/30 font-body text-base outline-none focus:border-primary transition-colors duration-300"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
const Contatti = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "Contatti",
    description: "Hai un progetto in mente? Scrivimi. Rispondo entro 24 ore per discutere la tua idea e trovare insieme la soluzione giusta.",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) {
      // Honeypot tripped (bot)
      setStatus("success"); 
      return;
    }
    
    setStatus("loading");
    try {
      await api.sendContactMessage(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <span
            className="font-display font-black text-[#3d0f1a]/[0.025] pr-4"
            style={{ fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1 }}
          >
            {t('contact.watermark')}
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-bold">
                  {t('contact.subtitle')}
                </span>
                <div className="w-10 h-[1px] bg-primary/25" />
              </div>
              <h1
                className="font-display font-bold leading-[0.85] tracking-tighter text-[#3d0f1a]"
                style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)" }}
              >
                <RevealText text={t('contact.title_1')} delay={0.1} />
                <RevealText text={t('contact.title_2')} delay={0.2} className="text-primary italic" />
              </h1>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-body text-xl text-[#3d0f1a]/70 leading-relaxed border-l border-primary/25 pl-8">
                {t('contact.description')}
              </p>
              <div className="mt-6 pl-8 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                <span className="font-typewriter text-[9px] uppercase tracking-[0.35em] text-[#3d0f1a]/50 font-bold">
                  {t('contact.available')}
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           MAIN SPLIT — canali + form
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── Left: info + canali ── */}
          <motion.div
            className="lg:col-span-4 space-y-12 lg:pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Canali diretti */}
            <div>
              <span className="font-typewriter text-[9px] uppercase tracking-[0.45em] text-primary font-bold block mb-7">
                {t('contact.channels')}
              </span>
              <div className="space-y-3">
                {getContacts(t).map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    className="group flex items-center gap-5 p-5 border border-[#3d0f1a]/10 bg-white shadow-[6px_6px_0px_rgba(61,15,26,0.05)] hover:shadow-[6px_6px_0px_#c0392b] hover:border-primary/20 hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-400"
                  >
                    <div className="w-10 h-10 border border-[#3d0f1a]/10 flex items-center justify-center text-[#3d0f1a]/40 bg-primary/5 group-hover:text-primary group-hover:border-primary/30 transition-all duration-400 shrink-0">
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-typewriter text-[8px] uppercase tracking-[0.35em] text-[#3d0f1a]/40 block mb-1 font-bold">
                        {c.label}
                      </span>
                      <span className="font-display text-base font-black text-[#3d0f1a] group-hover:text-primary transition-colors truncate block">
                        {c.detail}
                      </span>
                    </div>
                    <ArrowRight
                      size={13}
                      className="text-primary/0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-400 shrink-0"
                    />
                  </motion.a>
                ))}

                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Sede */}
            <div className="p-6 border border-[#3d0f1a]/10 bg-white flex items-start gap-4">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <div>
                <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-primary font-bold block mb-2">
                  {t('contact.hq_label')}
                </span>
                <p className="font-body text-[15px] text-[#3d0f1a]/70">
                  {t('contact.hq_val')}
                </p>
                <p className="font-body text-[13px] text-[#3d0f1a]/50 mt-1">
                  {t('contact.hq_desc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-[#3d0f1a] p-10 md:p-14 relative overflow-hidden shadow-[15px_15px_0px_#c0392b]">

              <div className="relative z-10">
                <div className="mb-10">
                  <span className="font-typewriter text-[10px] uppercase tracking-[0.5em] text-primary block mb-4 font-bold">
                    {t('contact.send_msg_label')}
                  </span>
                  <h2
                    className="font-display font-black leading-[0.9] tracking-tighter text-[#3d0f1a]"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    {t('contact.form_title_1')} <br />
                    <span className="text-primary italic">{t('contact.form_title_2')}</span>
                  </h2>
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-24 gap-6 text-center"
                    >
                      <CheckCircle size={48} className="text-primary" strokeWidth={1.5} />
                      <div>
                        <p className="font-display text-3xl font-black mb-3 text-[#3d0f1a]">{t('contact.msg_sent_title')}</p>
                        <p className="font-body text-[#3d0f1a]/70 text-lg leading-relaxed">
                          {t('contact.msg_sent_desc')}
                        </p>
                      </div>
                      <button
                        onClick={() => setStatus("idle")}
                        className="font-typewriter text-[9px] uppercase tracking-[0.4em] text-[#3d0f1a]/40 hover:text-primary transition-colors mt-4 font-bold"
                      >
                        {t('contact.send_another')}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <InputField
                          label={t('contact.form_name')}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.form_name_ph')}
                        />
                        <InputField
                          label={t('contact.form_email')}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.form_email_ph')}
                        />
                      </div>

                      <InputField
                        label={t('contact.form_subject')}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t('contact.form_subject_ph')}
                      />

                      <div className="group">
                        <label htmlFor="message" className="font-typewriter text-[9px] uppercase tracking-[0.45em] text-[#3d0f1a]/60 block mb-3 font-bold cursor-pointer">
                          {t('contact.form_message')}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t('contact.form_message_ph')}
                          className="w-full bg-transparent border-b border-[#3d0f1a]/20 py-3.5 text-[#3d0f1a] placeholder:text-[#3d0f1a]/30 font-body text-base outline-none focus:border-primary transition-colors duration-300 resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="font-typewriter text-[9px] uppercase tracking-[0.35em] text-red-500 font-bold"
                        >
                          {t('contact.form_error')}
                        </motion.p>
                      )}

                      <MagneticWrapper strength={20} className="w-full">
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          data-cursor="pointer"
                          className="group relative flex items-center justify-between w-full p-7 border border-[#3d0f1a] bg-[#f5f2ed] hover:bg-primary overflow-hidden transition-all duration-500 disabled:opacity-50 mt-4"
                        >
                          <span className="relative z-10 font-typewriter text-[11px] uppercase tracking-[0.4em] text-[#3d0f1a] group-hover:text-white font-bold transition-colors">
                            {status === "loading" ? t('contact.btn_sending') : t('contact.btn_send')}
                          </span>
                          <ArrowRight
                            size={18}
                            className="relative z-10 text-[#3d0f1a] group-hover:text-white group-hover:translate-x-3 transition-transform duration-500"
                          />
                        </button>
                      </MagneticWrapper>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
