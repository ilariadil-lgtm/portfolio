import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialViniGambino = () => (
  <EditorialProjectLayout
    id="vinigambino"
    titolo="Vini Gambino"
    titoloHero={
      <>
        Vini{" "}
        <span className="text-primary italic pr-2">Gambino</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2024"
    tech={[
      "UI/UX & Graphic Layout",
      "WordPress Environment",
      "Hospitality & E-commerce",
      "Visual Storytelling",
    ]}
    immagineHero="/assets/projects/vini-gambino/homepage-hero.webp"
    immagineProcesso={[
      "/assets/projects/vini-gambino/e-shop.webp",
      "/assets/projects/vini-gambino/vino.webp",
      "/assets/projects/vini-gambino/le-terre.webp",
      "/assets/projects/vini-gambino/vino2.webp",
      "/assets/projects/vini-gambino/raggiungici.webp",
    ]}
    galleria={[
      "/assets/projects/vini-gambino/homepage-hero.webp",
      "/assets/projects/vini-gambino/chisiamo.webp",
      "/assets/projects/vini-gambino/e-shop.webp",
      "/assets/projects/vini-gambino/ivini.webp",
      "/assets/projects/vini-gambino/le-terre.webp",
      "/assets/projects/vini-gambino/news.webp",
      "/assets/projects/vini-gambino/vino.webp",
      "/assets/projects/vini-gambino/vino2.webp",
      "/assets/projects/vini-gambino/distributori.webp",
      "/assets/projects/vini-gambino/contatti.webp",
    ]}
    paragrafi={{ ch1: 1,  ch3: 2,  ch4: 2,  ch5: 1 }}
    prev={{ url: "/progetti/newpop", title: "Newpop" }}
    next={{ url: "/progetti/bagliolauria", title: "Baglio Lauria" }}
    liveUrl="https://www.vinigambino.it/"
  />
);

export default EditorialViniGambino;
