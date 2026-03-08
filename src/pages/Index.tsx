import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, Linkedin, Github } from "lucide-react";

/* ── Scroll-reveal wrapper ── */
const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollReveal(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ── Data ── */
const journey = [
  { year: "2014 – 2018", title: "Accademia di Belle Arti", place: "Palermo & Brescia", text: "Formazione in Graphic Design: composizione visiva, teoria del colore, tipografia. Lo sguardo estetico che ancora oggi guida ogni decisione progettuale." },
  { year: "2019 – 2021", title: "UX Engineering", place: "Dal pixel al codice", text: "Il passaggio dalla superficie all'architettura: React, design systems, accessibilità. Costruire interfacce che funzionano davvero, non solo belle da vedere." },
  { year: "2022 – oggi", title: "Cloud & Product", place: "AWS · Product Management", text: "Infrastrutture scalabili, CI/CD, serverless. Guidare prodotti dalla concezione al mercato, unendo visione strategica e padronanza tecnica." },
];

const projects = [
  {
    title: "FreeLens",
    problem: "I fotografi freelance gestivano portfolio, booking e fatturazione su piattaforme separate, perdendo tempo e clienti.",
    solution: "Una piattaforma integrata che unifica portfolio, calendario e pagamenti in un'unica esperienza fluida.",
    tech: ["Django", "React", "AWS S3", "Stripe"],
  },
  {
    title: "Visio",
    problem: "Un'agenzia creativa aveva bisogno di un tool interno per gestire i feedback dei clienti sui deliverable visivi.",
    solution: "Dashboard collaborativa con annotazioni in tempo reale, versionamento dei file e notifiche automatiche.",
    tech: ["React", "Node.js", "WebSocket", "AWS"],
  },
  {
    title: "Sophia",
    problem: "Una rete di professionisti della salute mentale faticava a coordinare appuntamenti e percorsi terapeutici.",
    solution: "Sistema di prenotazione intelligente con percorsi personalizzati e report per i terapeuti.",
    tech: ["Django", "React", "PostgreSQL", "AWS Lambda"],
  },
];

/* ── Page ── */
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ═══ HERO ═══ */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-up max-w-3xl">
          <p className="font-body mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            UX Engineer · Cloud Specialist
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl">
            Ilaria<br />Diliberto
          </h1>
          <div className="mx-auto mt-8 h-px w-16 bg-primary" />
          <p className="font-body mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Progetto e guido l'evoluzione digitale delle imprese locali, integrando strategia di prodotto, design d'impatto e un supporto costante.
          </p>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-10 animate-bounce">
          <div className="h-8 w-px bg-primary/40" />
        </div>
      </section>

      {/* ═══ IL PERCORSO ═══ */}
      <section className="mx-auto max-w-3xl px-6 py-28">
        <Reveal>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary">Il Percorso</p>
          <h2 className="font-display mt-2 text-4xl font-bold sm:text-5xl">Dall'Estetica al Codice</h2>
        </Reveal>

        <div className="mt-16 space-y-16">
          {journey.map((step, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="relative border-l-2 border-primary/20 pl-8">
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">{step.year}</span>
                <h3 className="font-display mt-1 text-2xl font-bold">{step.title}</h3>
                <p className="font-body mt-0.5 text-sm text-secondary">{step.place}</p>
                <p className="font-body mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ FILOSOFIA ═══ */}
      <section className="border-y border-border bg-muted/30 px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary">Filosofia</p>
            <blockquote className="font-display mt-6 text-3xl font-bold italic leading-snug sm:text-4xl md:text-5xl">
              "Unire la precisione del pixel alla scalabilità del cloud"
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
              Il business dei tuoi clienti merita una presenza online che cresca senza compromessi.
              Dalla prima bozza al deploy in produzione, ogni decisione è guidata dalla stessa ossessione: costruire qualcosa che duri, che funzioni e che racconti chi sei davvero.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ I CAPITOLI ═══ */}
      <section className="mx-auto max-w-4xl px-6 py-28">
        <Reveal>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary">I Capitoli</p>
          <h2 className="font-display mt-2 text-4xl font-bold sm:text-5xl">Progetti</h2>
        </Reveal>

        <div className="mt-16 space-y-12">
          {projects.map((proj, i) => (
            <Reveal key={i} delay={i * 150}>
              <article className="group rounded-lg border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{proj.title}</h3>
                <div className="mt-4 space-y-3 font-body text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Problema:</span> {proj.problem}</p>
                  <p><span className="font-semibold text-foreground">Soluzione:</span> {proj.solution}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="border-t border-border px-6 py-28 text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold leading-snug sm:text-5xl">
            Costruiamo insieme il prossimo capitolo del tuo business.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <a
            href="mailto:ilaria@example.com"
            className="font-body mt-10 inline-block rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Parliamone
          </a>
        </Reveal>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-body text-xs text-muted-foreground">© {new Date().getFullYear()} Ilaria Diliberto</p>
          <div className="flex gap-5">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin size={18} /></a>
            <a href="https://github.com" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary"><Github size={18} /></a>
            <a href="mailto:ilaria@example.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-primary"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
