import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialBaglioLauria = () => (
  <EditorialProjectLayout
    id="bagliolauria"
    titolo="Baglio Lauria"
    titoloHero={
      <>
        Baglio{" "}
        <span className="text-primary italic pr-2">Lauria</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2023"
    tech={[
      "UI/UX Design",
      "Copywriting & Content",
      "WordPress Layout",
      "Hospitality Design",
    ]}
    immagineHero="/assets/projects/baglio-lauria/homepage.webp"
    immagineProcesso={[
      "/assets/projects/baglio-lauria/contatti.webp",
      "/assets/projects/baglio-lauria/dintorni.webp",
      "/assets/projects/baglio-lauria/il-baglio.webp",
      "/assets/projects/baglio-lauria/lecamere.webp",
      "/assets/projects/baglio-lauria/servizi.webp",
    ]}
    galleria={[
      "/assets/projects/baglio-lauria/homepage.webp",
      "/assets/projects/baglio-lauria/il-baglio.webp",
      "/assets/projects/baglio-lauria/lecamere.webp",
      "/assets/projects/baglio-lauria/servizi.webp",
      "/assets/projects/baglio-lauria/dintorni.webp",
      "/assets/projects/baglio-lauria/contatti.webp",
    ]}
    paragrafi={{ ch1: 1,  ch3: 2,  ch4: 2,  ch5: 1 }}
    prev={{ url: "/progetti/vinigambino", title: "Vini Gambino" }}
    next={{ url: "/progetti/villamima", title: "Villa Mima" }}
    liveUrl="https://www.bagliolauria.com/"
  />
);

export default EditorialBaglioLauria;
