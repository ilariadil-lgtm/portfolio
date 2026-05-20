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
      title: "Nebula OS",
      type: "CLOUD_INTERFACE",
      image: "/assets/project-nebula.png",
      url: "/progetti/1",
      description: "Un'interfaccia neurale per la gestione di infrastrutture cloud distribuite."
    },
    {
      id: 2,
      title: "Zenith Hifi",
      type: "E-COMMERCE_EXPERIENCE",
      image: "/assets/project-zenith.png",
      url: "/progetti/2",
      description: "Esperienza d'acquisto immersiva per sistemi audio ad alta fedeltà."
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
            <span>INNOVAZIONE • CREATIVITÀ • RIGORE TECNICO •</span>
            <span>INNOVAZIONE • CREATIVITÀ • RIGORE TECNICO •</span>
          </motion.div>
        </div>
        <div className="relative z-20 flex whitespace-nowrap overflow-hidden -rotate-1 scale-105 mt-2 md:mt-4">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 font-typewriter text-[10px] uppercase tracking-[0.5em] text-[#C0392B] opacity-70"
          >
            <span>[ SYSTEM_STABLE ] // DATA_LINK: ACTIVE // LAT_41.9 // LONG_12.5 //</span>
            <span>[ SYSTEM_STABLE ] // DATA_LINK: ACTIVE // LAT_41.9 // LONG_12.5 //</span>
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
            className="font-typewriter text-[8px] rotate-90 whitespace-nowrap tracking-[0.5em]"
          >
            VISION / ENV_2.0
          </motion.span>
          <div className="w-[1px] flex-1 bg-primary/20 my-12" />
          <span className="font-typewriter text-[8px] rotate-90 whitespace-nowrap tracking-[0.5em]">© 2024</span>
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
              <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary">02 — Philosophy</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </motion.div>
            <div className="mb-16">
              {["L'estetica è", "funzionalità", "resa visibile."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`font-display text-6xl md:text-8xl lg:text-[7.5vw] font-bold leading-[0.85] tracking-tighter ${i === 1 ? 'text-primary italic' : 'text-[#3d0f1a]'}`}
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
              Unisco la poesia del design editoriale al rigore delle architetture digitali.
              Non scelgo tra visione e tecnica: le governo entrambe per eliminare il divario tra
              chi immagina un prodotto e chi lo costruisce. Trasformo la complessità in roadmap chiare,
              dove ogni pixel ha uno scopo e ogni riga di codice una responsabilità strategica.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link to="/percorso" className="group inline-flex items-center gap-6 font-typewriter text-[10px] uppercase tracking-[0.3em] text-primary">
                <span className="relative overflow-hidden">
                  Esplora la visione
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
            src={about?.profile_image ? (about.profile_image.startsWith('http') ? about.profile_image : `${BASE_URL}${about.profile_image}`) : "/assets/about-portrait.png"}
            alt="Portrait"
            className="w-full h-full object-cover absolute inset-0 mix-blend-luminosity group-hover:scale-105 transition-transform duration-2000"
          />
          <div className="absolute top-12 right-12 w-24 h-24 border border-white/5 backdrop-blur-md flex items-center justify-center">
            <span className="font-typewriter text-[7px] text-white/30 rotate-90 uppercase tracking-[0.4em]">Profile_v2.0</span>
          </div>
          <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-between h-full min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-10 opacity-60">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-typewriter text-[9px] uppercase tracking-[0.4em] text-background">Tech Stack</span>
              </div>
              <ul className="font-mono text-[11px] text-background/80 space-y-6 leading-relaxed">
                {services.length > 0 ? services.map((s: any, idx: number) => (
                  <motion.li
                    key={s.id}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="group/item flex items-center gap-4 transition-all duration-300"
                  >
                    <span className="w-4 h-[1px] bg-primary/40 group-hover/item:w-8 transition-all" />
                    <span className="group-hover/item:text-primary transition-colors cursor-default">{s.title}</span>
                  </motion.li>
                )) : (
                  <>
                    {["Python / Django", "React / TypeScript"].map((tech, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="group/item flex items-center gap-4 transition-all duration-300"
                      >
                        <span className="w-4 h-[1px] bg-primary/40 group-hover/item:w-8 transition-all" />
                        <span className="group-hover/item:text-primary transition-colors cursor-default">{tech}</span>
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
                "{about?.bio || "Caricamento biografia..."}"
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
              <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary">03 — Capabilities</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[7vw] font-bold leading-[0.85] tracking-tighter text-[#3d0f1a] mb-12">
              Skill <br />
              <span className="text-primary italic">Mapping.</span>
            </h2>
            <p className="font-body text-lg text-[#3d0f1a]/60 leading-relaxed max-w-md mb-12 border-l border-primary/20 pl-8">
              Visualizzazione tecnica delle core competencies. Ogni asse rappresenta una dimensione di rigore architettonico e creatività sistemica.
            </p>
            <div className="space-y-4">
              {[
                { label: "FRONTEND_DEV", value: "95%" },
                { label: "UX_ARCHITECTURE", value: "90%" },
                { label: "CLOUD_INTEGRATION", value: "85%" },
                { label: "PRODUCT_STRATEGY", value: "80%" }
              ].map((skill, i) => (
                <div key={i} className="flex items-center justify-between border-b border-primary/5 pb-2 group cursor-default">
                  <span className="font-typewriter text-[9px] uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{skill.label}</span>
                  <span className="font-typewriter text-[9px] text-primary font-bold">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center items-center h-[500px] md:h-[700px]">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
              <span className="font-display text-[30vw] font-black uppercase">DATA</span>
            </div>
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
                  points="50,10 90,35 85,75 50,90 15,75 10,35"
                  fill="rgba(192, 57, 43, 0.15)"
                  stroke="#C0392B"
                  strokeWidth="0.5"
                  className="backdrop-blur-md"
                  style={{ filter: "drop-shadow(0 0 10px rgba(192, 57, 43, 0.3))" }}
                />
              </svg>
              {[
                { label: "FRONTEND_DEV", top: "0%", left: "50%" },
                { label: "UI_UX_DESIGN", top: "30%", left: "100%" },
                { label: "CLOUD_ARCH", top: "75%", left: "95%" },
                { label: "VIBE_CODING", top: "100%", left: "50%" },
                { label: "BRAND_ID", top: "75%", left: "5%" },
                { label: "TEAM_LEAD", top: "30%", left: "0%" }
              ].map((l, i) => (
                <div key={i} className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2" style={{ top: l.top, left: l.left }}>
                  <div className="w-1 h-1 rounded-full bg-primary/40" />
                  <span className="font-typewriter text-[7px] uppercase tracking-[0.4em] text-primary/60 whitespace-nowrap bg-[#f5f2ed]/80 backdrop-blur-sm px-2 py-1 border border-primary/5">
                    {l.label}
                  </span>
                </div>
              ))}
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
              <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary">04 — Projects</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[10vw] font-bold leading-none tracking-tighter">
              Selected <br />
              <span className="text-primary italic">Missions.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Link to="/progetti" className="group flex items-center gap-6 font-typewriter text-[10px] uppercase tracking-[0.3em] text-primary">
              <span>View All Systems</span>
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <div className="font-typewriter text-[7px] uppercase tracking-[0.4em] opacity-40">Scroll horizontally to explore —&gt;</div>
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
                    <span className="absolute -top-10 left-0 font-typewriter text-[7px] tracking-widest opacity-40">LOC_ID: 00{item.id}</span>
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
                            <span className="font-typewriter text-[7px] text-white/60 uppercase tracking-[0.4em]">MISSION_TYPE</span>
                            <span className="font-display text-xs text-white font-bold">{item.type}</span>
                          </div>
                          <ArrowRight size={14} className="text-white" />
                        </div>
                        <div className="flex justify-between items-end border-t border-white/10 pt-4">
                          <span className="font-typewriter text-[7px] text-white/60">TECH: REACT / TS</span>
                          <span className="font-typewriter text-[7px] text-white/40">v2.0</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                  <div className="mt-8 p-6 bg-white/[0.03] backdrop-blur-3xl border border-editorial shadow-sm">
                    <span className="font-typewriter text-[8px] uppercase tracking-[0.5em] text-primary/40 block mb-3">Project_0{i + 1}</span>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-[#3d0f1a] mb-4">{item.title}</h3>
                    <p className="font-body text-[12px] text-[#3d0f1a]/60 leading-relaxed line-clamp-2 max-w-md">{item.description}</p>
                    <div className="flex items-center gap-4 mt-6">
                      <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-primary">Explore Mission</span>
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
            <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary/60 mb-4 block">Ready to start?</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter">
              FEEL LIKE <br />
              <span className="text-primary italic">COLLABORATING?</span>
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
                <span className="font-typewriter text-lg uppercase tracking-[0.4em]">Get in touch</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
            <span className="font-typewriter text-[7px] uppercase tracking-[0.4em] opacity-30">RESPONSE_TIME: &lt; 24H</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
