import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialNewpop = () => (
  <EditorialProjectLayout
    id="newpop"
    titolo="Newpop"
    rotta="/progetti/newpop"
    titoloHero={
      <>
        Newpop<span className="text-primary italic pr-2">.</span>
      </>
    }
    anno="2024"
    tech={[
      "PrestaShop Integration",
      "UI/UX Design",
      "Visual Merchandising",
      "Information Architecture",
    ]}
    immagineHero="/assets/projects/newpop/homepage.webp"
    immagineProcesso="/assets/projects/newpop/homepage.webp"
    galleria={[
      "/assets/projects/newpop/homepage.webp",
      "/assets/projects/newpop/categoria.webp",
      "/assets/projects/newpop/prodotto.webp",
      "/assets/projects/newpop/marchi.webp",
      "/assets/projects/newpop/accedi.webp",
    ]}
    paragrafi={{ ch1: 1, ch3: 2, ch4: 2, ch5: 1 }}
    prev={{ url: "/progetti/sicilcosmetic", title: "SicilCosmetic" }}
    next={{ url: "/progetti/vinigambino", title: "Vini Gambino" }}
    liveUrl="https://www.newpop.it/"
  />
);

export default EditorialNewpop;
