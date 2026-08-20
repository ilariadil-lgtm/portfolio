import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialSicilCosmetic = () => (
  <EditorialProjectLayout
    id="sicilcosmetic"
    titolo="SicilCosmetic"
    titoloHero={
      <>
        Sicil
        <span className="text-primary italic pr-2">Cosmetic</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2025"
    tech={[
      "PrestaShop Configuration",
      "E-commerce UI/UX",
      "Catalog Management",
      "Copywriting & Layout",
    ]}
    immagineHero="/assets/projects/sicil-cosmetic/account.webp"
    immagineProcesso={[
      "/assets/projects/sicil-cosmetic/brand.webp",
      "/assets/projects/sicil-cosmetic/carrello.webp",
      "/assets/projects/sicil-cosmetic/carrello2.webp",
      "/assets/projects/sicil-cosmetic/categoria.webp",
      "/assets/projects/sicil-cosmetic/checkout.webp",
    ]}
    galleria={[
      "/assets/projects/sicil-cosmetic/homepage.webp",
      "/assets/projects/sicil-cosmetic/categoria.webp",
      "/assets/projects/sicil-cosmetic/paginaprodotto.webp",
      "/assets/projects/sicil-cosmetic/prodottimarca.webp",
      "/assets/projects/sicil-cosmetic/brand.webp",
      "/assets/projects/sicil-cosmetic/carrello.webp",
      "/assets/projects/sicil-cosmetic/carrello2.webp",
      "/assets/projects/sicil-cosmetic/checkout.webp",
      "/assets/projects/sicil-cosmetic/account.webp",
      "/assets/projects/sicil-cosmetic/contatti.webp",
    ]}
    paragrafi={{ ch1: 1,  ch3: 2,  ch4: 2,  ch5: 1 }}
    prev={{ url: "/progetti/pattiforniture", title: "Patti Forniture" }}
    next={{ url: "/progetti/newpop", title: "Newpop" }}
    liveUrl="https://www.sicilcosmetic.com/"
  />
);

export default EditorialSicilCosmetic;
