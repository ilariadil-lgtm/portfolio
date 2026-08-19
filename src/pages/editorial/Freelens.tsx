import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialFreelens = () => (
  <EditorialProjectLayout
    id="freelens"
    titolo="Freelens"
    rotta="/progetti/freelens"
    titoloHero={
      <>
        Free<span className="text-primary italic pr-2">lens</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2026"
    tech={[
      "React 18 & TypeScript",
      "Tailwind & Shadcn UI",
      "Supabase & PostgreSQL",
      "Edge Functions & AI AP",
    ]}
    immagineHero="/assets/projects/freelens/home.webp"
    immagineProcesso={[
      "/assets/projects/freelens/ai.webp",
      "/assets/projects/freelens/aichiaro.webp",
      "/assets/projects/freelens/cercachiaro.webp",
      "/assets/projects/freelens/contatti.webp",
      "/assets/projects/freelens/creaaccountchiaro.webp",
    ]}
    galleria={[
      "/assets/projects/freelens/home.webp",
      "/assets/projects/freelens/dash.webp",
      "/assets/projects/freelens/progetti.webp",
      "/assets/projects/freelens/preventivi.webp",
      "/assets/projects/freelens/profilo.webp",
      "/assets/projects/freelens/materiali.webp",
      "/assets/projects/freelens/ore.webp",
      "/assets/projects/freelens/impochiaro.webp",
      "/assets/projects/freelens/accedi.webp",
    ]}
    paragrafi={{ ch1: 1,  ch3: 1,  ch4: 1,  ch5: 1 }}
    prev={{ url: "/progetti/storagehub", title: "StorageHub" }}
    next={{ url: "/progetti/villamasami", title: "Villa Masami" }}
  />
);

export default EditorialFreelens;
