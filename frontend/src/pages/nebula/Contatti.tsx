import { motion, AnimatePresence } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { Mail, Linkedin, Github, Instagram, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { RevealText } from "@/components/RevealText";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const CONTACTS = [
  {
    label: "Email",
    detail: "ilaria.dil@gmail.com",
    sub: "Rispondo entro 24h",
    icon: <Mail size={17} />,
    href: "mailto:ilaria.dil@gmail.com",
  },
  {
    label: "LinkedIn",
    detail: "Ilaria Diliberto",
    sub: "Connettiti sulla piattaforma",
    icon: <Linkedin size={17} />,
    href: "https://www.linkedin.com/in/ilaria-diliberto/",
  },
  {
    label: "GitHub",
    detail: "@ilariadil-lgtm",
    sub: "Esplora il codice",
    icon: <Github size={17} />,
    href: "https://github.com/ilariadil-lgtm",
  },
  {
    label: "Instagram",
    detail: "@ilaryvision",
    sub: "Scopri i miei lavori",
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
      <label htmlFor={name} className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 block mb-3 cursor-pointer">
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
    website: "", // Honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen w-full bg-[#080808] text-slate-100 font-sans selection:bg-[#d4af37]/30 overflow-hidden flex flex-col relative">
      <NebulaNav />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                  CONTATTI E COLLABORAZIONI
                </span>
                <div className="w-12 h-[1px] bg-[#d4af37]/30" />
              </div>
              <h1 className="font-fraunces italic font-light leading-[0.9] tracking-tight text-white" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
                <RevealText text="Parlami del" delay={0.1} />
                <RevealText text="tuo progetto." delay={0.2} className="text-[#d4af37]" />
              </h1>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-outfit font-light text-white/60 text-lg leading-relaxed border-l border-[#d4af37]/30 pl-8">
                Hai un progetto in mente, vuoi un preventivo o semplicemente vuoi
                capire se posso aiutarti? Scrivimi — rispondo entro 24 ore.
              </p>
              <div className="mt-8 pl-8 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">
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
      <section className="px-6 md:px-12 lg:px-24 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* ── Left: info + canali ── */}
          <motion.div
            className="lg:col-span-4 space-y-16 lg:pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Canali diretti */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] block mb-8">
                CANALI DIRETTI
              </span>
              <div className="space-y-4">
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
                    className="group flex items-center gap-5 p-6 border border-white/5 bg-white/[0.02] hover:border-[#d4af37]/30 transition-all duration-500 rounded-none"
                  >
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#d4af37] transition-colors shrink-0">
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
            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-none flex items-start gap-5">
              <MapPin size={18} className="text-[#d4af37] shrink-0" />
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] block mb-3">
                  Sede operativa
                </span>
                <p className="font-outfit font-light text-[15px] text-white">
                  Sicilia, Italia
                </p>
                <p className="font-outfit font-light text-[13px] text-white/50 mt-2">
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
            <div className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-none relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-100 pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-12">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37] block mb-4">
                    INVIA UN MESSAGGIO
                  </span>
                  <h2 className="font-fraunces italic font-light leading-[0.9] tracking-tight text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                    Raccontami il <br />
                    <span className="text-[#d4af37]">tuo progetto.</span>
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
                      <CheckCircle size={48} className="text-[#d4af37]" strokeWidth={1} />
                      <div>
                        <p className="font-fraunces italic font-light text-4xl mb-4 text-white">Messaggio inviato!</p>
                        <p className="font-outfit font-light text-white/50 text-lg leading-relaxed">
                          Perfetto. Ti rispondo entro 24 ore — a presto.
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
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
                        <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 block mb-3 cursor-pointer">
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
                          className="w-full bg-transparent border-b border-white/10 py-3.5 text-white placeholder:text-white/20 font-outfit font-light text-base outline-none focus:border-[#d4af37] transition-colors duration-300 resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-500"
                        >
                          Qualcosa è andato storto. Prova di nuovo o scrivimi via email.
                        </motion.p>
                      )}

                      <MagneticWrapper strength={20} className="w-full">
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="group relative flex items-center justify-between w-full p-8 border border-[#d4af37]/30 bg-transparent hover:bg-[#d4af37]/10 transition-colors duration-500 disabled:opacity-50 mt-8"
                        >
                          <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                            {status === "loading" ? "INVIO IN CORSO..." : "INVIA MESSAGGIO"}
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
