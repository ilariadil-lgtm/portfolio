import { motion, AnimatePresence } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { NebulaFooter } from "./components/NebulaFooter";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  ArrowRight,
  MapPin,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import React, { useState, useEffect, Suspense } from "react";
const HeroCanvas = React.lazy(() =>
  import("./components/HeroCanvas").then((module) => ({
    default: module.HeroCanvas,
  })),
);
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTranslation } from "react-i18next";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const getContacts = (t: any) => [
  {
    label: "Email",
    detail: "info@ilariadiliberto.com",
    sub: t("contact.sub_email"),
    icon: <Mail size={17} />,
    href: "mailto:info@ilariadiliberto.com",
  },
  {
    label: "LinkedIn",
    detail: "Ilaria Diliberto",
    sub: t("contact.sub_linkedin"),
    icon: <Linkedin size={17} />,
    href: "https://www.linkedin.com/in/ilaria-diliberto/",
  },
  {
    label: "GitHub",
    detail: "@ilariadil-lgtm",
    sub: t("contact.sub_github"),
    icon: <Github size={17} />,
    href: "https://github.com/ilariadil-lgtm",
  },
  {
    label: "Instagram",
    detail: "@ilariadiliberto_tech",
    sub: t("contact.sub_instagram"),
    icon: <Instagram size={17} />,
    href: "https://www.instagram.com/ilariadiliberto_tech/",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
function InputField({
  label,
  name,
  type = "text",
  required = true,
  value,
  onChange,
  placeholder,
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
      <label
        htmlFor={name}
        className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 block mb-3 cursor-pointer"
      >
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
        className="w-full bg-transparent border-b border-white/10 py-3.5 text-white placeholder:text-white/20 font-outfit font-light text-base outline-none focus:border-[#d4af37] transition-colors duration-300"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required = true,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <div className="group relative">
      <label
        htmlFor={name}
        className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 block mb-3 cursor-pointer"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-b border-white/10 py-3.5 text-white font-outfit font-light text-base outline-none focus:border-[#d4af37] transition-colors duration-300 appearance-none rounded-none pr-8 cursor-pointer"
        >
          <option value="" disabled className="text-white/20 bg-[#080808]">Seleziona un'opzione</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#080808] text-white">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover:text-[#d4af37] transition-colors" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
const Contatti = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "Contatti",
    description:
      "Hai un progetto in mente? Scrivimi. Rispondo entro 24 ore per discutere la tua idea e trovare insieme la soluzione giusta.",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    onlinePresence: "",
    direction: "",
    objective: "",
    budget: "",
    website: "", // Honeypot
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
      // Mappatura personalizzata per soddisfare i requisiti del backend Django
      const payload = {
        name: formData.name,
        email: formData.email,
        // Generiamo il subject unendo Direzione e Budget prescelti
        subject: `Richiesta Nebula: ${formData.direction || "Generale"} (${formData.budget || "Budget non specificato"})`,
        // Raggruppiamo tutte le informazioni dettagliate del form nel corpo del message
        message: `
Dettagli del mittente:
- Nome: ${formData.name}
- Email: ${formData.email}
- Azienda / Progetto: ${formData.company || "N/D"}
- Sito web o social: ${formData.onlinePresence || "N/D"}

Informazioni Progetto:
- Seleziona un'offerta: ${formData.direction || "N/D"}
- Budget: ${formData.budget || "N/D"}

Parlami del tuo progetto:
${formData.objective}
        `.trim(),
      };

      // Passiamo il payload con 'as any' per aggirare i vincoli rigidi di TypeScript
      await api.sendContactMessage(payload as any);

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        onlinePresence: "",
        direction: "",
        objective: "",
        budget: "",
        website: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative lg:pl-24">
      <NebulaNav />
      <ScrollIndicator
        sections={["scroll.hero", "scroll.contact"].map((k) => t(k))}
      />

      {/* GLOBAL BACKGROUNDS (NEBULA AESTHETIC) */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <Suspense fallback={<div className="absolute inset-0 bg-[#080808]" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen opacity-70">
        <motion.div
          animate={{
            x: ["0%", "10%", "0%"],
            y: ["0%", "5%", "0%"],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#d4af37]/10 to-[#3d0f1a]/10 blur-[130px]"
        />
        <motion.div
          animate={{
            x: ["0%", "-10%", "0%"],
            y: ["0%", "-5%", "0%"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-indigo-900/10 to-[#3d0f1a]/5 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-rose-900/5 blur-[120px] mix-blend-screen"
        />
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4af37] flex items-center gap-2">
                  <span className="text-[10px]">✦</span> {t("contact.subtitle")}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap items-baseline gap-x-6 pb-4">
                <RevealText
                  text={t("contact.title_1")}
                  delay={0.1}
                  className="font-bricolage font-bold tracking-wider text-fluid-h1 leading-[1.1] text-white whitespace-nowrap uppercase"
                />
                <RevealText
                  text={t("contact.title_2")}
                  delay={0.2}
                  className="font-fraunces italic font-light tracking-wider text-fluid-h1 leading-[1.1] text-[#d4af37] whitespace-nowrap pr-2"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-outfit font-light text-white/60 text-lg leading-relaxed border-l border-[#d4af37]/30 pl-8">
                {t("contact.description")}
              </p>
              <div className="mt-8 pl-8 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">
                  {t("contact.available")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN SPLIT */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: info */}
          <motion.div
            className="lg:col-span-4 space-y-16 lg:pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] block mb-8">
                {t("contact.channels")}
              </span>
              <div className="space-y-4">
                {getContacts(t).map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    className="group flex items-center gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-[#d4af37]/40 hover:bg-gradient-to-r from-[#d4af37]/10 to-transparent hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.05)] transition-all duration-500 overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#d4af37] group-hover:border-[#d4af37]/50 transition-colors shrink-0">
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40 block mb-1">
                        {c.label}
                      </span>
                      <span className="font-bricolage font-black tracking-tight text-lg text-white group-hover:text-[#d4af37] transition-colors truncate block">
                        {c.detail}
                      </span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-[#d4af37] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 shrink-0"
                    />
                  </motion.a>
                ))}

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

            <div className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-2xl flex items-start gap-5">
              <MapPin size={18} className="text-[#d4af37] shrink-0" />
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] block mb-3">
                  {t("contact.hq_label")}
                </span>
                <p className="font-outfit font-light text-[15px] text-white">
                  {t("contact.hq_val")}
                </p>
                <p className="font-outfit font-light text-[13px] text-white/50 mt-2">
                  {t("contact.hq_desc")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-black/40 backdrop-blur-xl border border-white/5 p-10 md:p-16 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group-hover:bg-white/[0.03] transition-colors duration-700">
              {/* Terminal Top Bar */}
              <div className="absolute top-0 left-0 w-full h-8 border-b border-white/5 flex items-center px-4 justify-between bg-white/[0.01]">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-widest text-white/20">
                  SYS.CONTACT_PROTOCOL
                </span>
              </div>

              <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.04)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none mt-8" />

              <div className="relative z-10">
                <div className="mb-12">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] block mb-4">
                    {t("contact.send_msg_label")}
                  </span>
                  <h2
                    className="font-fraunces italic font-light leading-[0.9] tracking-tight text-white pr-2"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                  >
                    {t("contact.form_title_1")} <br />
                    <span className="text-[#d4af37]">
                      {t("contact.form_title_2")}
                    </span>
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
                      <CheckCircle
                        size={48}
                        className="text-[#d4af37]"
                        strokeWidth={1}
                      />
                      <div>
                        <p className="font-fraunces italic font-light text-4xl mb-4 text-white pr-2">
                          {t("contact.msg_sent_title")}
                        </p>
                        <p className="font-outfit font-light text-white/50 text-lg leading-relaxed">
                          {t("contact.msg_sent_desc")}
                        </p>
                      </div>
                      <button
                        onClick={() => setStatus("idle")}
                        className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 hover:text-[#d4af37] transition-colors mt-8"
                      >
                        Invia un altro messaggio
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="space-y-12">
                        {/* Riga 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                          <InputField
                            label={t("contact.form_name") || "Nome"}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t("contact.form_name_ph") || "Il tuo nome"}
                          />
                          <InputField
                            label={t("contact.form_email") || "Email"}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t("contact.form_email_ph") || "La tua email"}
                          />
                        </div>

                        {/* Riga 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                          <InputField
                            label="Azienda / Progetto"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nome dell'azienda o progetto"
                          />
                          <InputField
                            label="Sito web o social"
                            name="onlinePresence"
                            type="url"
                            required={false}
                            value={formData.onlinePresence}
                            onChange={handleChange}
                            placeholder="Sito web o link social (opzionale)"
                          />
                        </div>

                        {/* Riga 3 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                          <SelectField
                            label="Seleziona un'offerta"
                            name="direction"
                            value={formData.direction}
                            onChange={handleChange}
                            options={[
                              { label: "Sviluppo Custom", value: "Sviluppo Custom" },
                              { label: "Sviluppo MVP", value: "Sviluppo MVP" },
                              { label: "Sviluppo CMS", value: "Sviluppo CMS" },
                              { label: "Non sono sicuro", value: "Non sono sicuro" },
                            ]}
                          />
                          <SelectField
                            label="Budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            options={[
                              { label: "Fino a € 2.500", value: "Fino a € 2.500" },
                              { label: "Tra € 2.500 e € 6.000", value: "Tra € 2.500 e € 6.000" },
                              { label: "Oltre € 6.000", value: "Oltre € 6.000" },
                            ]}
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label
                          htmlFor="objective"
                          className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 block mb-3 cursor-pointer"
                        >
                          Parlami del tuo progetto
                        </label>
                        <textarea
                          id="objective"
                          name="objective"
                          required
                          rows={5}
                          value={formData.objective}
                          onChange={handleChange}
                          placeholder="Descrivi il tuo progetto e i tuoi obiettivi..."
                          className="w-full bg-transparent border-b border-white/10 py-3.5 text-white placeholder:text-white/20 font-outfit font-light text-base outline-none focus:border-[#d4af37] transition-colors duration-300 resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-500"
                        >
                          Qualcosa è andato storto. Prova di nuovo o scrivimi
                          via email.
                        </motion.p>
                      )}

                      <MagneticWrapper strength={20} className="w-full">
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="group relative flex items-center justify-between w-full p-8 rounded-2xl border border-[#d4af37]/30 bg-transparent hover:bg-[#d4af37]/10 hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500 disabled:opacity-50 mt-8 overflow-hidden"
                        >
                          <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                            {status === "loading"
                              ? t("contact.btn_sending")
                              : t("contact.btn_send")}
                          </span>
                          <ArrowRight
                            size={16}
                            className="relative z-10 text-[#d4af37] group-hover:translate-x-3 transition-transform duration-500"
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

      <NebulaFooter />
    </div>
  );
};

export default Contatti;