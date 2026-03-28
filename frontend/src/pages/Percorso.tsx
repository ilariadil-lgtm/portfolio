import { Reveal, KineticLine } from "@/components/Reveal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const Percorso = () => {
  const [about, setAbout] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutData, servData] = await Promise.all([
          api.getAbout(),
          api.getServices()
        ]);
        setAbout(aboutData);
        setServices(servData.results || servData);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };
    fetchData();
  }, []);

  const evolution = [
    { 
      num: "01", 
      period: "2014 — 2018", 
      title: "Belle Arti", 
      subtitle: "PALERMO · BRESCIA",
      description: "Formazione classica in composizione visiva e teoria del colore. L'occhio estetico che ancora guida ogni decisione progettuale. Quattro anni tra schizzi, tipografia e storia dell'arte hanno costruito le fondamenta del mio approccio al design.",
      side: "art"
    },
    { 
      num: "02", 
      period: "2019 — 2021", 
      title: "UX Engineering", 
      subtitle: "DAL PIXEL AL CODICE",
      description: "Il passaggio dalla superficie all'architettura: React, design systems, accessibilità. Interfacce che funzionano, non solo belle. Ho imparato che il codice è un materiale creativo quanto la matita.",
      side: "code"
    },
    { 
      num: "03", 
      period: "2022 — oggi", 
      title: "Cloud Architecture", 
      subtitle: "AWS · PRODUCT MANAGEMENT",
      description: "Infrastrutture scalabili, serverless, CI/CD. Dalla concezione al mercato, unendo visione strategica e padronanza tecnica. Oggi guido prodotti digitali dalla prima idea al rilascio in produzione.",
      side: "cloud"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-16 px-8 md:px-16 lg:px-24">
        <Reveal>
          <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary">The Evolution</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4 leading-[0.9]">
            Dall'Estetica<br />
            <span className="text-stroke">al Codice</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-body text-muted-foreground leading-relaxed mt-8 max-w-xl">
            {about?.bio || "Un viaggio che inizia tra i corridoi dell'Accademia di Belle Arti e arriva alle architetture cloud. La stessa ossessione per i dettagli, applicata a scale sempre più ampie."}
          </p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="relative py-16 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="space-y-32 md:space-y-48">
          {evolution.map((step, i) => (
            <div 
              key={step.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Content */}
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-6 lg:order-2" : ""}`}>
                <Reveal direction={i % 2 === 0 ? "left" : "right"} delay={100}>
                  <span className="font-display text-7xl md:text-8xl font-bold text-primary/15">{step.num}</span>
                  <div className={`mt-4 ${i % 2 === 1 ? "ml-auto" : ""}`}>
                    <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{step.period}</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">{step.title}</h2>
                    <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mt-2">{step.subtitle}</p>
                    <KineticLine className={`mt-4 ${i % 2 === 1 ? "ml-auto" : ""}`} />
                    <p className="font-body text-muted-foreground leading-relaxed mt-6 max-w-md">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Visual Element */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Reveal delay={300}>
                  <div className="relative aspect-square max-w-[300px] mx-auto lg:mx-0">
                    <div className={`absolute inset-0 rounded-full border border-primary/20 ${
                      step.side === "art" ? "bg-gradient-to-br from-secondary/20 to-transparent" :
                      step.side === "code" ? "bg-gradient-to-br from-primary/10 to-transparent" :
                      "bg-gradient-to-br from-muted to-transparent"
                    }`} />
                    <div className="absolute inset-4 rounded-full border border-dashed border-primary/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl md:text-7xl font-bold text-primary/20">{step.num}</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24 border-t border-border">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-display text-8xl md:text-9xl font-bold text-primary/10">04</span>
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary">The Stack</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-1">Tecnologie</h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {services.map((tech, i) => (
            <Reveal key={tech.id} delay={i * 100}>
              <div className="flex flex-col items-center gap-4 p-8 border border-border rounded-lg hover:border-primary/30 transition-colors">
                <span className="font-display text-3xl font-bold text-primary">{tech.title.substring(0,2)}</span>
                <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">{tech.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Percorso;
