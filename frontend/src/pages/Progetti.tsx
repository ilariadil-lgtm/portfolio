import { Reveal } from "@/components/Reveal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const BASE_URL = 'http://localhost:8000';

const Progetti = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data.results || data);
      } catch (error) {
        console.error("Errore nel caricamento dei progetti:", error);
      }
    };
    fetchProjects();
  }, []);

  const romanize = (num: number) => {
    const lookup: any = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    for (let i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-16 px-8 md:px-16 lg:px-24">
        <Reveal>
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary opacity-60">I Capitoli</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4 leading-[0.9]">
            Progetti<br />
            <span className="text-stroke">Selezionati</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-body text-muted-foreground leading-relaxed mt-8 max-w-xl opacity-80">
            Ogni progetto è un capitolo: una sfida tecnica affrontata con visione 
            di prodotto e cura per i dettagli. Ecco i lavori che raccontano meglio 
            il mio approccio.
          </p>
        </Reveal>
      </section>

      {/* Projects */}
      <section className="relative py-16 md:py-32">
        <div className="space-y-0">
          {projects.map((project, i) => {
            const techList = typeof project.technologies === 'string' 
              ? project.technologies.split(',').map((t: string) => t.trim()) 
              : project.technologies;

            return (
              <article 
                key={project.id || i} 
                className={`${i % 2 === 0 ? "bg-background" : "bg-foreground text-background"} py-32 md:py-48 relative overflow-hidden`}
              >
                <div className="px-8 md:px-16 lg:px-24 relative">
                  {/* Giant serial number background */}
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                    <span className={`font-display text-[18rem] md:text-[24rem] lg:text-[28rem] font-bold leading-none ${
                      i % 2 === 0 ? "text-foreground opacity-[0.02]" : "text-background opacity-[0.03]"
                    }`}>
                      {romanize(project.order || i + 1)}
                    </span>
                  </div>

                  <Reveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
                      {/* Left: Identity */}
                      <div className="lg:col-span-4">
                        <span className={`font-display text-[10rem] md:text-[14rem] font-bold leading-none ${
                          i % 2 === 0 ? "text-primary/10" : "text-primary/20"
                        }`}>
                          {romanize(project.order || i + 1)}
                        </span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold -mt-8">{project.title}</h2>
                        <p className={`font-body text-[10px] uppercase tracking-[0.2em] mt-4 opacity-60 ${
                          i % 2 === 0 ? "text-primary" : "text-primary"
                        }`}>
                          {project.tagline || (techList ? techList.join(' / ') : '')}
                        </p>
                        <p className={`font-body text-[10px] uppercase tracking-[0.2em] mt-4 ${
                          i % 2 === 0 ? "text-muted-foreground" : "text-muted-foreground"
                        } opacity-60`}>
                          {project.year || new Date(project.created_at).getFullYear()}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-8">
                          {techList?.map((t: string) => (
                            <span 
                              key={t} 
                              className={`px-3 py-1 text-[10px] uppercase tracking-widest border rounded-full ${
                                i % 2 === 0 
                                  ? "border-primary/30 text-primary" 
                                  : "border-primary/40 text-primary"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="lg:col-span-8 space-y-8">
                        <div className="aspect-[16/9] w-full overflow-hidden mb-8 bg-muted/10">
                          <img 
                            src={project.image?.startsWith('http') ? project.image : `${BASE_URL}${project.image}`} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="md:col-span-2">
                            <span className={`font-body text-[10px] uppercase tracking-[0.3em] ${
                              i % 2 === 0 ? "text-muted-foreground" : "text-muted-foreground"
                            }`}>
                              Descrizione
                            </span>
                            <p className={`font-body leading-relaxed mt-3 ${
                              i % 2 === 0 ? "text-foreground" : "text-background"
                            }`}>
                              {project.description}
                            </p>
                          </div>
                          
                          {project.project_url && (
                            <div>
                                <a 
                                  href={project.project_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] py-4 border-b ${
                                    i % 2 === 0 ? "border-primary text-primary" : "border-background text-background"
                                  }`}
                                >
                                  Progetto Live <ArrowRight size={14} />
                                </a>
                            </div>
                          )}

                          {project.github_url && (
                            <div>
                                <a 
                                  href={project.github_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] py-4 border-b ${
                                    i % 2 === 0 ? "border-primary text-primary" : "border-background text-background"
                                  }`}
                                >
                                  Repository GitHub <ArrowRight size={14} />
                                </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Progetti;
