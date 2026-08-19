import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialVillaMasami = () => (
  <EditorialProjectLayout
    id="villamasami"
    titolo="Villa Masami"
    rotta="/progetti/villamasami"
    titoloHero={
      <>
        Villa
        <span className="text-primary italic pr-2"> Masami</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2025"
    tech={[
      "Brand & Logo Design",
      "UI/UX Design",
      "Copywriting",
      "WordPress (Bilingual)",
    ]}
    immagineHero="/assets/projects/villa-masami/struttura.webp"
    immagineProcesso={[
      "/assets/projects/villa-masami/camera-matrimoniale-2.webp",
      "/assets/projects/villa-masami/camera-matrimoniale.webp",
      "/assets/projects/villa-masami/camera-singola.webp",
      "/assets/projects/villa-masami/contatti.webp",
      "/assets/projects/villa-masami/homepage.webp",
    ]}
    galleria={[
      "/assets/projects/villa-masami/struttura.webp",
      "/assets/projects/villa-masami/camera-matrimoniale.webp",
      "/assets/projects/villa-masami/camera-singola.webp",
      "/assets/projects/villa-masami/camera-matrimoniale-2.webp",
      "/assets/projects/villa-masami/le-nostre-camere.webp",
      "/assets/projects/villa-masami/servizi.webp",
      "/assets/projects/villa-masami/contatti.webp",
      "/assets/projects/villa-masami/struttura.webp",
    ]}
    paragrafi={{ ch1: 2,  ch3: 2,  ch4: 2,  ch5: 1 }}
    prev={{ url: "/progetti/freelens", title: "Freelens" }}
    next={{ url: "/progetti/bagliolauria", title: "Baglio Lauria" }}
    liveUrl="https://villamasami.it"
  />
);

export default EditorialVillaMasami;
