import { useScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

/* ══════════════════════════════════════════════════════════════════════════
   REVEAL COMPONENTS
   ══════════════════════════════════════════════════════════════════════════ */

const Reveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up"
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  direction?: "up" | "left" | "right";
}) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const transforms = {
    up: "translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12"
  };
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${transforms[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const KineticLine = ({ className = "" }: { className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.3);
  return (
    <div 
      ref={ref} 
      className={`kinetic-line ${isVisible ? "visible" : ""} ${className}`}
    />
  );
};

/* ══════════════════════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════════════════════ */

const evolution = [
  { 
    num: "01", 
    period: "2014 — 2018", 
    title: "Belle Arti", 
    subtitle: "PALERMO · BRESCIA",
    description: "Formazione classica in composizione visiva e teoria del colore. L'occhio estetico che ancora guida ogni decisione progettuale.",
    side: "art"
  },
  { 
    num: "02", 
    period: "2019 — 2021", 
    title: "UX Engineering", 
    subtitle: "DAL PIXEL AL CODICE",
    description: "Il passaggio dalla superficie all'architettura: React, design systems, accessibilità. Interfacce che funzionano, non solo belle.",
    side: "code"
  },
  { 
    num: "03", 
    period: "2022 — oggi", 
    title: "Cloud Architecture", 
    subtitle: "AWS · PRODUCT MANAGEMENT",
    description: "Infrastrutture scalabili, serverless, CI/CD. Dalla concezione al mercato, unendo visione strategica e padronanza tecnica.",
    side: "cloud"
  }
];

const projects = [
  {
    num: "I",
    title: "FreeLens",
    tagline: "Portfolio, booking e fatturazione in un'unica esperienza.",
    challenge: "I fotografi freelance gestivano portfolio, calendario e pagamenti su piattaforme separate. Frammentazione, tempo perso, clienti perduti.",
    vision: "Una piattaforma coesa che unifica l'intero workflow creativo: dalla showcase al pagamento.",
    tech: ["Django", "React", "AWS S3", "Stripe"]
  },
  {
    num: "II",
    title: "Visio",
    tagline: "Feedback creativi in tempo reale.",
    challenge: "Un'agenzia creativa aveva bisogno di gestire i feedback dei clienti sui deliverable visivi senza perdersi tra email e versioni.",
    vision: "Dashboard collaborativa con annotazioni live, versionamento automatico e notifiche intelligenti.",
    tech: ["React", "Node.js", "WebSocket", "AWS"]
  },
  {
    num: "III",
    title: "Sophia",
    tagline: "Percorsi terapeutici intelligenti.",
    challenge: "Una rete di professionisti della salute mentale faticava a coordinare appuntamenti e percorsi personalizzati.",
    vision: "Sistema di prenotazione intelligente con percorsi adattivi e insight per i terapeuti.",
    tech: ["Django", "React", "PostgreSQL", "Lambda"]
  }
];

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🎸" },
  { name: "React", icon: "⚛️" },
  { name: "AWS", icon: "☁️" },
  { name: "TypeScript", icon: "📘" }
];

/* ══════════════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════════════ */

const Index = () => {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — IMMERSIVE TYPOGRAPHY
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Abstract geometric element */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[70vh] bg-gradient-to-br from-primary/8 to-secondary/15 rounded-l-[100px]"
          style={{ transform: `translateY(calc(-50% + ${heroOffset}px))` }}
        />
        
        {/* Kinetic accent lines */}
        <div className="absolute top-32 left-[15%] w-px h-32 bg-gradient-to-b from-primary/60 to-transparent" />
        <div className="absolute bottom-40 right-[20%] w-24 h-px bg-gradient-to-r from-transparent to-primary/60" />
        
        <div ref={heroRef} className="relative z-10 w-full px-8 md:px-16 lg:px-24">
          {/* Small intro */}
          <div className="animate-fade-up mb-8" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground">
              UX Engineer · Cloud Specialist · Product Strategist
            </span>
          </div>

          {/* Giant Name */}
          <div className="relative">
            <h1 
              className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tight animate-fade-up"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              <span className="block">Ilaria</span>
              <span className="block text-stroke">Diliberto</span>
            </h1>
            
            {/* Overlapping accent */}
            <div 
              className="absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[20vw] md:text-[15vw] font-bold text-primary/5 pointer-events-none select-none"
              style={{ transform: `translateY(calc(-50% + ${heroOffset * 0.5}px))` }}
            >
              D
            </div>
          </div>

          {/* Subtitle positioned asymmetrically */}
          <div 
            className="mt-16 md:mt-20 ml-auto max-w-md text-right animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <div className="w-16 h-px bg-primary ml-auto mb-6" />
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Progetto esperienze digitali che uniscono<br />
              <span className="text-foreground font-medium">rigore estetico</span> e <span className="text-foreground font-medium">architettura scalabile</span>.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE EVOLUTION — VISUAL NARRATIVE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-20">
            <span className="font-display text-8xl md:text-9xl font-bold text-primary/10">01</span>
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary">The Evolution</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-1">Dall'Estetica al Codice</h2>
            </div>
          </div>
        </Reveal>

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
                    <h3 className="font-display text-3xl md:text-5xl font-bold mt-2">{step.title}</h3>
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

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECTS AS CHAPTERS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 bg-foreground text-background">
        <div className="px-8 md:px-16 lg:px-24">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-24">
              <span className="font-display text-8xl md:text-9xl font-bold text-primary/30">02</span>
              <div>
                <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary">I Capitoli</span>
                <h2 className="font-display text-4xl md:text-6xl font-bold mt-1 text-background">Progetti</h2>
              </div>
            </div>
          </Reveal>

          <div className="space-y-32 md:space-y-48">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 100}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Left: Number & Title */}
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2 lg:text-right" : ""}`}>
                    <span className="font-display text-8xl md:text-[12rem] font-bold leading-none text-primary/20">{project.num}</span>
                    <h3 className="font-display text-4xl md:text-6xl font-bold mt-4">{project.title}</h3>
                    <p className="font-body text-sm text-primary mt-4">{project.tagline}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-8">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-3 py-1 text-[10px] uppercase tracking-widest border border-primary/40 text-primary rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className={`lg:col-span-7 space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="space-y-4">
                      <div>
                        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">La Sfida</span>
                        <p className="font-body text-background/80 leading-relaxed mt-2">{project.challenge}</p>
                      </div>
                      <div>
                        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">La Visione</span>
                        <p className="font-body text-background/80 leading-relaxed mt-2">{project.vision}</p>
                      </div>
                    </div>
                    
                    <a href="#" className="link-expand inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors">
                      Esplora il progetto
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TECH STACK — FLOATING LOGOS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24 overflow-hidden">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-display text-8xl md:text-9xl font-bold text-primary/10">03</span>
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary">The Stack</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-1">Tecnologie</h2>
            </div>
          </div>
        </Reveal>

        <div className="relative h-[400px] md:h-[500px]">
          {/* Floating tech elements */}
          {techStack.map((tech, i) => {
            const positions = [
              { top: "10%", left: "15%", delay: "0s" },
              { top: "25%", left: "55%", delay: "0.5s" },
              { top: "60%", left: "25%", delay: "1s" },
              { top: "45%", left: "70%", delay: "1.5s" },
              { top: "75%", left: "50%", delay: "2s" }
            ];
            const pos = positions[i];
            
            return (
              <Reveal key={tech.name} delay={i * 150}>
                <div 
                  className="absolute flex flex-col items-center gap-3 animate-float"
                  style={{ 
                    top: pos.top, 
                    left: pos.left,
                    animationDelay: pos.delay
                  }}
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-primary/20 bg-background flex items-center justify-center text-4xl md:text-5xl shadow-lg">
                    {tech.icon}
                  </div>
                  <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{tech.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          VALUE PROPOSITION — SIGNATURE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24 border-t border-border">
        <Reveal>
          <div className="max-w-4xl">
            <span className="font-display text-8xl md:text-9xl font-bold text-primary/10">04</span>
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mt-8">
              "Progetto e guido l'evoluzione digitale delle imprese locali, integrando{" "}
              <span className="text-primary">strategia di prodotto</span>,{" "}
              <span className="text-stroke-primary">design d'impatto</span> e un{" "}
              <span className="text-primary">supporto costante</span>."
            </blockquote>
            
            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="mailto:ilaria@example.com"
                className="group inline-flex items-center gap-4 font-body text-sm uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
              >
                <span className="w-12 h-px bg-foreground group-hover:bg-primary group-hover:w-20 transition-all" />
                Costruiamo insieme
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-border px-8 md:px-16 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display text-2xl font-bold">Ilaria Diliberto</p>
            <p className="font-body text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} · Tutti i diritti riservati</p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="https://linkedin.com" className="link-expand font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" className="link-expand font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="mailto:ilaria@example.com" className="link-expand font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
