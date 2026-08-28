import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialVillaMima = () => (
  <EditorialProjectLayout
    id="villamima"
    titolo="Villa Mima"
    titoloHero={
      <>
        Villa<span className="text-primary italic pr-2"> Mima</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2023"
    tech={[
      "UI/UX Design",
      "WordPress Environment",
      "Copywriting & Storytelling",
      "Wedding & Event Industry",
    ]}
    immagineHero="/assets/projects/villa-mima/home-hero.webp"
    immagineProcesso={[
      "/assets/projects/villa-mima/contatti.webp",
      "/assets/projects/villa-mima/la-villa.webp",
      "/assets/projects/villa-mima/menu.webp",
      "/assets/projects/villa-mima/paesaggio.webp",
    ]}
    galleria={[
      "/assets/projects/villa-mima/home-hero.webp",
      "/assets/projects/villa-mima/la-villa.webp",
      "/assets/projects/villa-mima/paesaggio.webp",
      "/assets/projects/villa-mima/menu.webp",
      "/assets/projects/villa-mima/piastrelle.webp",
      "/assets/projects/villa-mima/ristorante.webp",
      "/assets/projects/villa-mima/wedding.webp",
      "/assets/projects/villa-mima/servizi.webp",
      "/assets/projects/villa-mima/contatti.webp",
    ]}
    paragrafi={{ ch1: 2,  ch3: 2,  ch4: 2,  ch5: 1 }}
    prev={{ url: "/progetti/bagliolauria", title: "Baglio Lauria" }}
    next={{ url: "/progetti/loghi", title: "Branding & Loghi" }}
    liveUrl="https://www.villamima.it/"
  />
);

export default EditorialVillaMima;
