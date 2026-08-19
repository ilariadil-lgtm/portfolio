import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePageMeta, injectSchema } from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { BriefingCTA } from "@/components/BriefingCTA";
import { ProjectNavigation } from "@/components/ProjectNavigation";

const CustomDetails = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  usePageMeta({
    title: "Sviluppo Custom",
    description:
      "Infrastruttura dedicata per progetti che hanno superato i limiti di una piattaforma pronta: architettura, logica e scalabilita disegnate su misura.",
    canonical: "/sviluppo-custom",
  });

  useEffect(
    () =>
      injectSchema({
        "@type": "Service",
        name: "Sviluppo web custom",
        serviceType: "Sviluppo Custom",
        provider: { "@type": "Person", name: "Ilaria Diliberto" },
        areaServed: "IT",
        description:
          "Infrastruttura dedicata per progetti che hanno superato i limiti di una piattaforma pronta: architettura, logica e scalabilita disegnate su misura.",
        url: "https://ilariadiliberto.com/sviluppo-custom",
      }),
    [],
  );

  return (
    <div className="min-h-[100dvh] bg-cream text-ink selection:bg-primary/30 font-body">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
           HERO 
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col pt-40 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-cream">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#3d0f1a 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Back link */}
        <div className="relative z-20 mb-12 md:mb-16 max-w-screen-xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Link to="/servizi" className="group inline-flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.4em] text-ink/65 hover:text-primary transition-colors font-semibold">
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />{t("custom_details.torna_ai_servizi")}</Link>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto w-full flex-1 flex flex-col justify-start md:justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* LEFT: Titolo ed introduzione ORIGINALI */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                
                <div className="overflow-hidden mb-6">
                  <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium block">{t("custom_details.infrastruttura_dedicata")}</motion.span>
                </div>

                <h1 className="relative font-display leading-[1.1] md:leading-[0.85] tracking-tighter">
                  <div className="overflow-hidden pt-4 pb-8 w-max max-w-full">
                    <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="block text-[12vw] lg:text-[clamp(3.5rem,8vw,8rem)] font-bold text-ink pr-4 break-words whitespace-normal leading-none">{t("custom_details.sviluppo")}<span className="text-primary italic pr-2"> Custom</span>
                      <span className="text-ink not-italic pr-2">.</span>
                    </motion.span>
                  </div>
                </h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="mt-4 max-w-2xl">
                  <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed font-medium">{t("custom_details.nessun_limite_logico_nessun_vincolo_tecnolog")}</p>
                </motion.div>
                
                {/* Due Call to Action integrate sotto la descrizione */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="mt-12 flex flex-col sm:flex-row gap-6">
                  <a href="mailto:info@ilariadiliberto.com" className="group inline-flex items-center justify-center gap-4 bg-ink text-cream px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest shadow-[6px_6px_0px_#c0392b] hover:shadow-[2px_2px_0px_#c0392b] hover:translate-y-[4px] hover:translate-x-[4px] transition-all">{t("custom_details.prenota_una_call_gratuita")}<ArrowUpRight size={14} className="text-primary group-hover:scale-110 transition-transform" />
                  </a>
                  <Link to="/contatti" className="group inline-flex items-center justify-center gap-4 border border-ink/20 bg-transparent text-ink px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest hover:border-ink hover:bg-white/50 transition-all">{t("custom_details.parlami_del_tuo_progetto")}<ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
              </motion.div>
            </div>

            {/* RIGHT: Card con il nuovo stile */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end pt-8 lg:pt-0">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                className="relative w-full h-full"
              >
                {/* Il doppio bordo wireframe sfalsato dietro la card (shadow vuota) */}
                <div className="absolute inset-0 border border-ink translate-x-2 translate-y-2 pointer-events-none" />
                
                {/* Il container principale della card */}
                <div className="relative bg-white border border-ink p-8 md:p-10 flex flex-col h-full text-ink z-10">
                  
                  {/* Testo Descrittivo */}
                  <div>
                      <h2 className="font-display text-3xl font-bold mb-2">{t("custom_details.hero_title")}</h2>
                      <span className="font-typewriter text-[9px] uppercase tracking-[0.2em] font-semibold opacity-60 block mb-6">{t("custom_details.infrastruttura_dedicata")}</span>
                  </div>

                  <p className="font-body text-[15px] md:text-base text-ink/80 leading-relaxed font-medium mb-10">{t("custom_details.per_i_brand_e_le_aziende")}</p>

                  {/* Timeline with huge number */}
                  <div className="mb-8 flex items-baseline gap-3">
                    <span className="font-display text-5xl font-black tracking-tighter">8-12</span>
                    <span className="font-body text-base text-ink/70">{t("custom_details.settimane")}</span>
                  </div>

                  <div className="w-full h-[1px] bg-ink/10 mb-8" />

                  {/* Deliverable Checklist */}
                  <div className="space-y-4 flex-1 mb-10">
                    <div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">{t("custom_details.architettura_dati_backend_su_misura")}</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">{t("custom_details.sviluppo_api_proprietarie")}</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">{t("custom_details.integrazione_con_sistemi_aziendali")}</span></div>
<div className="flex items-start gap-3"><CheckCircle2 size={18} className="text-ink mt-0.5 shrink-0 opacity-80" strokeWidth={1.5} /><span className="font-body text-[15px] text-ink/90">{t("custom_details.pannello_di_amministrazione")}</span></div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 01 — THE PROBLEM
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-ink/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">{t("custom_details.01_il_problema")}</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              <h2 className="lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-ink">{t("custom_details.il_limite_delle_soluzioni_standard")}</h2>
              <div className="lg:col-span-5 flex items-center">
                <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed font-medium text-justify">{t("custom_details.sotto_una_certa_soglia_di_complessita")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 02 — THE MISSION
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-cream border-t border-ink/5">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
            <div className="flex items-center justify-start gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">{t("custom_details.02_l_architettura")}</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              <h3 className="lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-ink">
                Design <span className="text-primary italic pr-2">{t("custom_details.e_tecnologia")}</span>{t("custom_details.proprietari")}</h3>
              <div className="lg:col-span-5 flex items-center">
                <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed font-medium text-justify">{t("custom_details.direzione_artistica_e_ui_ux_progettate")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 03 — I PILASTRI (Processo)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3d0f1a_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">{t("custom_details.03_esclusivita")}</span>
              <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-ink">{t("custom_details.un_progetto_alla_volta")}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FASE 01 CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative p-8 md:p-12 border border-ink bg-cream hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />
                <h3 className="font-display text-3xl font-bold mb-4 text-ink group-hover:text-primary transition-colors duration-300">{t("custom_details.focus_assoluto")}</h3>
                <p className="font-body text-base text-ink/80 leading-relaxed mt-4 text-justify">{t("custom_details.ogni_sviluppo_custom_viene_seguito_con")}</p>
            </motion.div>

            {/* FASE 02 CARD */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="group relative p-8 md:p-12 border border-ink bg-cream hover:bg-white hover:border-primary transition-all duration-500 shadow-[8px_8px_0px_rgba(61,15,26,0.05)] hover:shadow-[8px_8px_0px_#c0392b]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/10 group-hover:bg-primary transition-colors duration-500" />
                <h3 className="font-display text-3xl font-bold mb-4 text-ink group-hover:text-primary transition-colors duration-300">{t("custom_details.slot_dedicato")}</h3>
                <p className="font-body text-base text-ink/80 leading-relaxed mt-4 text-justify">{t("custom_details.non_sto_dividendo_la_mia_attenzione")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CH. 04 — DELIVERABLES E TECH SPEC (Pricing style)
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-cream border-t border-ink/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] text-primary font-medium">{t("custom_details.04_cosa_ottieni")}</span>
                <div className="w-12 h-[1px] bg-primary/20" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-ink">{t("custom_details.8_12_settimane_di_sviluppo_dedicato")}</h2>
              <p className="font-body text-lg text-ink/80 leading-relaxed border-l border-primary/25 pl-8 mt-8 text-justify">{t("custom_details.ogni_sistema_custom_viene_rilasciato_con")}</p>
              
              <div className="pt-10">
                 <p className="font-body text-base font-medium text-ink mb-6 text-justify">{t("custom_details.se_il_tuo_business_ha_smesso")}</p>
                 <Link to="/contatti" className="group inline-flex items-center justify-center gap-4 bg-ink text-cream px-8 py-4 font-typewriter text-[10px] uppercase tracking-widest shadow-[6px_6px_0px_#c0392b] hover:shadow-[2px_2px_0px_#c0392b] hover:translate-y-[4px] hover:translate-x-[4px] transition-all">{t("custom_details.parlami_del_tuo_progetto")}<ArrowUpRight size={14} className="text-primary group-hover:scale-110 transition-transform" />
                 </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            {/* Tech Spec Card - Packages style */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="border-2 border-primary bg-white p-8 md:p-10 flex flex-col group relative shadow-[8px_8px_0px_#c0392b]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-typewriter text-[9px] uppercase tracking-widest px-4 py-1.5 font-bold whitespace-nowrap">{t("custom_details.specifiche_tecniche")}</div>
              
              <div className="mb-8 mt-2 pb-8 border-b border-ink/10 flex justify-between items-end">
                <div>
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold block mb-2">{t("custom_details.timeline")}</span>
                  <span className="font-display text-3xl font-black text-ink">{t("custom_details.8_12_sett")}</span>
                </div>
                <div className="text-right">
                  <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold block mb-2">
                    RUOLO
                  </span>
                  <span className="font-display text-xl font-bold italic">{t("custom_details.hero_title")}</span>
                </div>
              </div>

              <div className="mb-10">
                <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-ink/65 block mb-6 font-semibold">{t("custom_details.deliverables")}</span>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">{t("custom_details.architettura_dati_backend_su_misura")}</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">{t("custom_details.sviluppo_api_proprietarie")}</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">{t("custom_details.integrazione_con_sistemi_aziendali")}</span></li>
<li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /><span className="font-body text-[14px] text-ink/80">{t("custom_details.pannello_di_amministrazione")}</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-ink/10">
                <span className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-ink/65 block mb-6 font-semibold">{t("custom_details.stack_tecnologico")}</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 font-semibold">{t("custom_details.node_django")}</span>
<span className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 font-semibold">{t("custom_details.postgresql")}</span>
<span className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 font-semibold">AWS</span>
<span className="px-3 py-1.5 border border-ink/20 font-typewriter text-[9px] uppercase tracking-widest text-ink/80 font-semibold">React</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectNavigation prev={{ url: "/sviluppo-mvp", title: "Sviluppo MVP" }} next={{ url: "/sviluppo-cms", title: "Sviluppo CMS" }} archiveUrl="/servizi" archiveTitle="Servizi" prevLabel={t("custom_details.servizio_precedente")} nextLabel={t("custom_details.servizio_successivo")} />
      <BriefingCTA
        subtitle="IL PROSSIMO PASSO"
        title1="Costruiamo"
        title2="senza limiti."
        description="Se il tuo business ha smesso di stare dentro a un template, è il momento di costruire qualcosa che non ha limiti."
        buttonText="PARLAMI DEL TUO PROGETTO"
      />
      <Footer />
    </div>
  );
};
export default CustomDetails;
