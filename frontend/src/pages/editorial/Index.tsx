import { useParallax } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CreativeHero } from "@/components/CreativeHero";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const BASE_URL = 'http://localhost:8000';

const Index = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [about, setAbout] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projData, aboutData, servData] = await Promise.all([
          api.getProjects(),
          api.getAbout(),
          api.getServices()
        ]);
        setProjects(projData.results || projData);
        setAbout(aboutData);
        setServices(servData.results || servData);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };
    fetchData();
  }, []);

  const fallbackProjects = [
    {
      id: 1,
      title: "Chario Hifi",
      type: "Sviluppo Web • Tema Proprietario • UI/UX Design",
      image: "/assets/project-nebula.png",
      url: "/progetti/1",
      description: "L'alta fedeltà digitale. Sito premium creato col mio tema proprietario Sophia."
    },
    {
      id: 2,
      title: "StorageHub",
      type: "Web app gestionale",
      image: "/assets/project-zenith.png",
      url: "/progetti/2",
      description: "Una web app intelligente che semplifica e automatizza la gestione dell'inventario."
    },
    {
      id: 3,
      title: "Freelens",
      type: "Project Management",
      image: "/assets/project-zenith.png",
      url: "/progetti/3",
      description: "Spazio digitale per gestire progetti e task riprendendo il controllo del tuo tempo."
    }
  ];

  const displayProjects = projects.length > 0 ? projects.slice(0, 3) : fallbackProjects;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO SECTION — PREMIUM UPLINK
           ═══════════════════════════════════════════════════════════════════ */}
      <CreativeHero />

      {/* ═══════════════════════════════════════════════════════════════════
           TRI-LAYER CINEMATIC MARQUEE — CREATIVE PRO
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-32 border-b border-editorial overflow-hidden bg-[#f5f2ed]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
        >
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#3d0f1a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </motion.div>

        <div className="flex whitespace-nowrap overflow-hidden -rotate-2 opacity-5 pointer-events-none">
          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 font-display text-[12vw] font-black text-stroke-primary text-transparent"
          >
            <span>UX ARCHITECTURE • DIGITAL STRATEGY • CLOUD DESIGN •</span>
            <span>UX ARCHITECTURE • DIGITAL STRATEGY • CLOUD DESIGN •</span>
          </motion.div>
        </div>
        <div className="relative z-10 flex whitespace-nowrap overflow-hidden rotate-1 scale-110 -mt-24 md:-mt-32">
          <motion.div
            animate={{ x: [-1500, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 font-display text-[6vw] font-bold text-primary mix-blend-multiply opacity-90"
          >
            <span>IDENTITÀ VISIVA • ECOSISTEMI DIGITALI • GESTIONE FLUIDA </span>
            <span>IDENTITÀ VISIVA • ECOSISTEMI DIGITALI • GESTIONE FLUIDA</span>
          </motion.div>
        </div>
        <div className="relative z-20 flex whitespace-nowrap overflow-hidden -rotate-1 scale-105 mt-2 md:mt-4">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="flex gap-20 font-typewriter text-[13px] uppercase tracking-[0.5em] text-primary font-medium"
            >
              <span>[ PROCESSO: FLUIDO ] // VISIONE: EMPATICA // LAT_38.1 // LONG_13.3 //</span>
              <span>[ PROCESSO: FLUIDO ] // VISIONE: EMPATICA // LAT_38.1 // LONG_13.3 //</span>
            </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           ABOUT PREVIEW — PREMIUM ANIMATIONS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-[5%_55%_40%] border-b border-editorial bg-[#f5f2ed] overflow-hidden">
        <div className="hidden lg:flex border-r border-editorial flex-col items-center py-12 justify-between opacity-30 select-none">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-typewriter text-[11px] text-primary font-medium rotate-90 whitespace-nowrap tracking-[0.5em]"
          >
            ARCHITETTURA DIGITALE / ENV_2026
          </motion.span>
          <div className="w-[1px] flex-1 bg-primary/20 my-12" />
          <span className="font-typewriter text-[11px] text-primary font-medium rotate-90 whitespace-nowrap tracking-[0.5em]">© 2026</span>
        </div>

        <div className="p-8 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-editorial flex flex-col justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none"
          />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">02 — IL MIO APPROCCIO</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </motion.div>
            <div className="mb-16">
              {["Do forma alle tue idee,", "dal design al prodotto digitale completo"].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`font-display text-4xl md:text-6xl lg:text-[4vw] font-bold leading-[0.95] tracking-tighter ${i === 1 ? 'text-primary italic' : 'text-[#3d0f1a]'}`}
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-body text-xl text-[#3d0f1a]/70 leading-relaxed max-w-xl mb-16"
            >
              "Il mio percorso parte dal graphic design: la cura per l'identità visiva e per i dettagli è da sempre la mia base.
              Ma per dare davvero vita a un progetto ho capito che non basta fermarsi all'estetica.

              Oggi creo siti web, e-commerce e app gestendo il processo a 360 gradi come Tech Product Manager.
              Ascolto le tue necessità, curo la grafica e mi occupo dello sviluppo pratico.
              Il mio obiettivo non è solo consegnarti un prodotto che funzioni alla perfezione,
              ma rendere tutto il lavoro fluido, umano e privo di intoppi tecnici."
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link to="/chisono" className="group inline-flex items-center gap-6 font-typewriter text-[13px] uppercase tracking-[0.25em] text-primary font-medium">
                <span className="relative overflow-hidden">
                  Scopri i servizi
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#3d0f1a] group">
          <motion.img
            initial={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 0.4, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src={about?.profile_image ? (about.profile_image.startsWith('http') ? about.profile_image : `${BASE_URL}${about.profile_image}`) : "/assets/about-portrait.jpg"}
            alt="Portrait"
            className="w-full h-full object-cover absolute inset-0 mix-blend-luminosity group-hover:scale-105 transition-transform duration-2000"
          />
          <div className="absolute top-12 right-12 w-24 h-24 border border-white/5 backdrop-blur-md flex items-center justify-center">
            <span className="font-typewriter text-[11px] text-white rotate-90 uppercase tracking-[0.3em] font-medium">Tech PM</span>
          </div>
          <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-between h-full min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-background" />
                <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-background font-medium">COSA FACCIO</span>
              </div>
              <ul className="font-mono text-[13px] text-background space-y-6 leading-relaxed font-medium">
                {services.length > 0 ? services.map((s: any, idx: number) => (
                  <motion.li
                    key={s.id}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="group/item flex items-center gap-4 transition-all duration-300"
                  >
                    <span className="w-4 h-[1px] bg-background/30 group-hover/item:bg-white group-hover/item:w-8 transition-all" />
                    <span className="group-hover/item:text-white transition-colors cursor-default">{s.title}</span>
                  </motion.li>
                )) : (
                  <>
                    {["UI & UX Design", "WordPress / Prestashop", "Gestione Progetti (Tech PM)"].map((tech, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="group/item flex items-center gap-4 transition-all duration-300"
                      >
                        <span className="w-4 h-[1px] bg-background/30 group-hover/item:bg-white group-hover/item:w-8 transition-all" />
                        <span className="group-hover/item:text-white transition-colors cursor-default">{tech}</span>
                      </motion.li>
                    ))}
                  </>
                )}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 pt-8 border-t border-background/10"
            >
              <p className="font-body text-[15px] italic leading-relaxed text-background/60 max-w-sm">
                "{about?.bio || "Ilaria Diliberto — Tech Product Manager"}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           TECHNICAL SKILL RADAR — ARCHITECTURAL DATA
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#f5f2ed] border-b border-editorial overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">03 — LE MIE COMPETENZE</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[6vw] font-bold leading-[0.85] tracking-tighter text-[#3d0f1a] mb-12">
              Le mie <br />
              <span className="text-primary italic">aree di competenza.</span>
            </h2>
            <p className="font-body text-lg text-[#3d0f1a]/60 leading-relaxed max-w-md mb-12 border-l border-primary/20 pl-8">
              Non credo nei confini rigidi tra chi disegna e chi programma.
              Questo schema riassume il mio bagaglio tecnico e creativo:
              un mix di competenze nato per curare ogni aspetto del tuo progetto.
              Dalla creazione di un'identità visiva forte allo sviluppo di siti web ed e-commerce,
              fino alla gestione di tutte le fasi di lavoro.
            </p>
            <div className="space-y-4">
              {[
                { label: "UI & UX DESIGN", value: "95%" },
                { label: "SVILUPPO WEB", value: "90%" },
                { label: "WORDPRESS & PRESTASHOP", value: "85%" },
                { label: "TECH PRODUCT MANAGEMENT", value: "80%" }
              ].map((skill, i) => (
                <div key={i} className="flex items-center justify-between border-b border-primary/5 pb-2 group cursor-default">
                  <span className="font-typewriter text-[13px] uppercase tracking-widest text-primary font-medium transition-colors">{skill.label}</span>
                  <span className="font-typewriter text-[13px] text-primary font-black">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center items-center h-[500px] md:h-[700px]">
            <div className="relative w-full max-w-[500px] aspect-square">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {[20, 40, 60, 80, 100].map((r, i) => (
                  <circle key={i} cx="50" cy="50" r={r / 2} fill="none" stroke="currentColor" strokeWidth="0.1" className="text-primary/20" />
                ))}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const x = 50 + 50 * Math.cos((angle - 90) * (Math.PI / 180));
                  const y = 50 + 50 * Math.sin((angle - 90) * (Math.PI / 180));
                  return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="currentColor" strokeWidth="0.1" className="text-primary/30" />;
                })}
                <motion.polygon
                  initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
                  whileInView={{ pathLength: 1, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  points="50,10 82.5,31.25 86.8,71.25 50,90 15.36,70 13.19,28.75"
                  fill="rgba(192, 57, 43, 0.15)"
                  stroke="#C0392B"
                  strokeWidth="0.5"
                  className="backdrop-blur-md"
                  style={{ filter: "drop-shadow(0 0 10px rgba(192, 57, 43, 0.3))" }}
                />
              </svg>
              {[
                { label: "Branding & Loghi", top: "0%", left: "50%", type: "vertical" },
                { label: "Materiali Editoriali", top: "25%", left: "93.3%", type: "right" },
                { label: "Web Design", top: "75%", left: "93.3%", type: "right" },
                { label: "Sviluppo Frontend", top: "100%", left: "50%", type: "vertical" },
                { label: "E-commerce", top: "75%", left: "6.7%", type: "left" },
                { label: "Gestione Progetti", top: "25%", left: "6.7%", type: "left" }
              ].map((l, i) => {
                let layoutClass = "";
                let transformStr = "";
                if (l.type === "vertical") {
                  layoutClass = "flex flex-col items-center gap-2";
                  transformStr = "translate(-50%, -3px)";
                } else if (l.type === "right") {
                  layoutClass = "flex flex-row items-center gap-2";
                  transformStr = "translate(-3px, -50%)";
                } else {
                  layoutClass = "flex flex-row-reverse items-center gap-2";
                  transformStr = "translate(calc(-100% + 3px), -50%)";
                }

                return (
                  <div
                    key={i}
                    className={`absolute pointer-events-none ${layoutClass}`}
                    style={{ top: l.top, left: l.left, transform: transformStr }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                    <span className="font-typewriter text-[11px] uppercase tracking-[0.2em] text-primary font-medium whitespace-nowrap bg-[#f5f2ed]/90 backdrop-blur-sm px-3 py-1.5 border border-primary/20 shadow-sm">
                      {l.label}
                    </span>
                  </div>
                );
              })}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-primary/10 rounded-full flex items-center justify-center pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           HORIZONTAL BLUEPRINT SLIDER — PROJECTS
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-[#f5f2ed] relative overflow-hidden border-b border-editorial">
        <div className="px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-typewriter text-[13px] uppercase tracking-[0.3em] text-primary font-medium">04 — PROGETTI</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[7vw] font-bold leading-none tracking-tighter">
              Dal problema <br />
              <span className="text-primary italic">al prodotto.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Link to="/progetti" className="group flex items-center gap-6 font-typewriter text-[13px] uppercase tracking-[0.25em] text-primary font-medium">
              <span>Tutti i progetti</span>
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <div className="font-typewriter text-[11px] uppercase tracking-[0.3em] text-primary font-medium">Scorri per scoprire —&gt;</div>
          </div>
        </div>

        <div className="relative z-10 w-full overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex gap-20 md:gap-32 px-6 md:px-12 pb-12 w-max">
            {displayProjects.map((item, i) => (
              <div key={item.id} className="relative group/proj snap-center w-[85vw] md:w-[65vw] lg:w-[50vw]">
                <div className="relative">
                  <div className="absolute -inset-6 pointer-events-none">
                    <svg className="w-full h-full text-primary/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,5 L0,0 L5,0 M95,0 L100,0 L100,5 M100,95 L100,100 L95,100 M5,100 L0,100 L0,95" fill="none" stroke="currentColor" strokeWidth="0.2" />
                    </svg>
                    <span className="absolute -top-10 left-0 font-typewriter text-[10px] tracking-widest text-primary font-medium">LOC_ID: 00{item.id}</span>
                  </div>
                  <Link to={item.url} className="block relative overflow-hidden group/box perspective-1000">
                    <motion.div whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }} className="relative aspect-[16/9] overflow-hidden bg-muted/10 border border-editorial shadow-xl">
                      <motion.img src={item.image?.startsWith('http') ? item.image : `${BASE_URL}${item.image}`} alt={item.title} className="w-full h-full object-cover grayscale opacity-80 group-hover/box:grayscale-0 group-hover/box:opacity-100 transition-all duration-1000" />
                      <div className="absolute inset-0 pointer-events-none">
                        <motion.div className="absolute top-0 left-0 w-full h-[1px] bg-primary/40 z-20" initial={{ top: "-10%" }} whileHover={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                      </div>
                      <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover/box:opacity-100 transition-all duration-700">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-1">
                            <span className="font-typewriter text-[7px] text-white/60 uppercase tracking-[0.4em]">Tipologia</span>
                            <span className="font-display text-xs text-white font-bold">{item.type}</span>
                          </div>
                          <ArrowRight size={14} className="text-white" />
                        </div>
                        <div className="flex justify-between items-end border-t border-white/10 pt-4">
                          <span className="font-typewriter text-[7px] text-white/60"></span>
                          <span className="font-typewriter text-[7px] text-white/40"></span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                  <div className="mt-8 p-6 bg-white/[0.03] backdrop-blur-3xl border border-editorial shadow-sm">
                    <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium block mb-3">Progetto_0{i + 1}</span>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-[#3d0f1a] mb-4">{item.title}</h3>
                    <p className="font-body text-[14px] text-[#3d0f1a]/60 leading-relaxed line-clamp-2 max-w-md">{item.description}</p>
                    <div className="flex items-center gap-4 mt-6">
                      <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-primary font-medium">Esplora il progetto</span>
                      <div className="w-8 h-[1px] bg-primary/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — MINIMALIST EDITORIAL STRIP
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#3d0f1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#C0392B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <span className="font-typewriter text-[12px] uppercase tracking-[0.3em] text-white font-medium mb-4 block">Ora tocca a te</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter">
              Costruiamo <br />
              <span className="text-primary italic">qualcosa di unico?</span>
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <Link
              to="/contatti"
              className="group relative flex items-center gap-8 py-6 px-12 border border-white/10 hover:border-primary transition-colors duration-500 overflow-hidden"
            >
              {/* Hover Fill */}
              <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative z-10 flex items-center gap-6">
                <span className="font-typewriter text-xl uppercase tracking-[0.4em] font-medium">PARLIAMONE</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
            <span className="font-typewriter text-[11px] uppercase tracking-[0.3em] text-white/70 font-medium">Rispondo entro 24h</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
