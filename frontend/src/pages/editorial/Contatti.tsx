import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Linkedin, Github, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";

const CONTACTS = [
  {
    label: "Email",
    detail: "hello@ilariavision.com",
    sub: "Rispondo entro 24h",
    icon: <Mail size={17} />,
    href: "mailto:hello@ilariavision.com",
  },
  {
    label: "LinkedIn",
    detail: "Ilaria Diliberto",
    sub: "Connettiti sulla piattaforma",
    icon: <Linkedin size={17} />,
    href: "https://linkedin.com",
  },
  {
    label: "GitHub",
    detail: "@ilariavision",
    sub: "Esplora il codice",
    icon: <Github size={17} />,
    href: "https://github.com",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
const InputField = ({
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
}) => (
  <div className="group relative">
    <label htmlFor={name} className="font-typewriter text-[8px] uppercase tracking-[0.45em] text-white/35 block mb-3 cursor-pointer">
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
      className="w-full bg-transparent border-b border-white/12 py-3.5 text-white placeholder:text-white/20 font-body text-base outline-none focus:border-primary transition-colors duration-300"
    />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
const Contatti = () => {
  usePageMeta({
    title: "Contatti",
    description: "Hai un progetto in mente? Scrivimi. Rispondo entro 24 ore per discutere la tua idea e trovare insieme la soluzione giusta.",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await api.sendContactMessage(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
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
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none">
          <span
            className="font-display font-black text-[#3d0f1a]/[0.025] pr-4"
            style={{ fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1 }}
          >
            CONTATTI
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
                <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-semibold">
                  05 — CONTATTI
                </span>
                <div className="w-10 h-[1px] bg-primary/25" />
              </div>
              <h1
                className="font-display font-black leading-[0.85] tracking-tighter text-[#3d0f1a]"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
              >
                Parliamoci <br />
                <span className="text-primary italic">liberamente.</span>
              </h1>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-body text-xl text-[#3d0f1a]/70 leading-relaxed border-l border-primary/25 pl-8">
                Hai un progetto in mente, vuoi un preventivo o semplicemente vuoi
                capire se posso aiutarti? Scrivimi — rispondo entro 24 ore.
              </p>
              <div className="mt-6 pl-8 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                <span className="font-typewriter text-[9px] uppercase tracking-[0.35em] text-[#3d0f1a]/40">
                  Disponibile per nuovi progetti
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
              <span className="font-typewriter text-[9px] uppercase tracking-[0.45em] text-primary font-semibold block mb-7">
                Canali diretti
              </span>
              <div className="space-y-3">
                {CONTACTS.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    className="group flex items-center gap-5 p-5 border border-primary/10 bg-white/30 hover:bg-white/70 hover:border-primary/25 transition-all duration-400"
                  >
                    <div className="w-10 h-10 border border-primary/15 flex items-center justify-center text-primary/50 group-hover:text-primary group-hover:border-primary/40 transition-all duration-400 shrink-0">
                      {c.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-typewriter text-[8px] uppercase tracking-[0.35em] text-[#3d0f1a]/35 block mb-1">
                        {c.label}
                      </span>
                      <span className="font-display text-base font-black text-[#3d0f1a] group-hover:text-primary transition-colors truncate block">
                        {c.detail}
                      </span>
                    </div>
                    <ArrowRight
                      size={13}
                      className="text-primary/25 group-hover:text-primary group-hover:translate-x-1 transition-all duration-400 shrink-0"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Sede */}
            <div className="p-6 border border-primary/10 bg-white/30 flex items-start gap-4">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <div>
                <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-primary font-semibold block mb-2">
                  Sede operativa
                </span>
                <p className="font-body text-[15px] text-[#3d0f1a]/65">
                  Roma, Italia
                </p>
                <p className="font-body text-[13px] text-[#3d0f1a]/40 mt-1">
                  Lavoro da remoto su tutto il territorio nazionale e internazionale.
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
            <div className="bg-[#3d0f1a] text-white p-10 md:p-14 relative overflow-hidden shadow-2xl">
              {/* top accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary" />
              {/* dot grid */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#c0392b 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative z-10">
                <div className="mb-10">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary/60 block mb-4">
                    Invia un messaggio
                  </span>
                  <h2
                    className="font-display font-black leading-[0.9] tracking-tighter"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    Raccontami il <br />
                    <span className="text-primary italic">tuo progetto.</span>
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
                        <p className="font-display text-3xl font-black mb-3">Messaggio inviato!</p>
                        <p className="font-body text-white/60 text-lg leading-relaxed">
                          Perfetto. Ti rispondo entro 24 ore — a presto.
                        </p>
                      </div>
                      <button
                        onClick={() => setStatus("idle")}
                        className="font-typewriter text-[9px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors mt-4"
                      >
                        Invia un altro messaggio
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
                          label="Il tuo nome"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Mario Rossi"
                        />
                        <InputField
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="mario@esempio.com"
                        />
                      </div>

                      <InputField
                        label="Oggetto"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Di cosa vuoi parlare?"
                      />

                      <div className="group">
                        <label htmlFor="message" className="font-typewriter text-[8px] uppercase tracking-[0.45em] text-white/35 block mb-3 cursor-pointer">
                          Messaggio
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Raccontami la tua idea, il tuo progetto o la tua necessità..."
                          className="w-full bg-transparent border-b border-white/12 py-3.5 text-white placeholder:text-white/20 font-body text-base outline-none focus:border-primary transition-colors duration-300 resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="font-typewriter text-[9px] uppercase tracking-[0.35em] text-red-400"
                        >
                          Qualcosa è andato storto. Prova di nuovo o scrivimi via email.
                        </motion.p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group relative flex items-center justify-between w-full p-7 border border-white/10 hover:border-primary/50 overflow-hidden transition-all duration-500 disabled:opacity-50"
                      >
                        {/* fill on hover */}
                        <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10 font-typewriter text-[11px] uppercase tracking-[0.4em] text-white font-semibold">
                          {status === "loading" ? "Invio in corso..." : "Invia messaggio"}
                        </span>
                        <ArrowRight
                          size={18}
                          className="relative z-10 text-white group-hover:translate-x-3 transition-transform duration-500"
                        />
                      </button>
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
