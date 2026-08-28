import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialPattiForniture = () => (
  <EditorialProjectLayout
    id="pattiforniture"
    titolo="Patti Forniture"
    titoloHero={
      <>
        Patti{" "}
        <span className="text-primary italic pr-2">Forniture</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2024"
    tech={[
      "UI/UX Design",
      "Information Architecture",
      "Copywriting",
      "WordPress Corporate",
    ]}
    immagineHero="/assets/projects/patti-forniture/homepage-hero.webp"
    immagineProcesso={[
      "/assets/projects/patti-forniture/chi-siamo.webp",
      "/assets/projects/patti-forniture/contatti.webp",
      "/assets/projects/patti-forniture/settore1.webp",
      "/assets/projects/patti-forniture/settore2.webp",
      "/assets/projects/patti-forniture/settore3.webp",
    ]}
    galleria={[
      "/assets/projects/patti-forniture/homepage-hero.webp",
      "/assets/projects/patti-forniture/settori.webp",
      "/assets/projects/patti-forniture/chi-siamo.webp",
      "/assets/projects/patti-forniture/settore1.webp",
      "/assets/projects/patti-forniture/settore2.webp",
      "/assets/projects/patti-forniture/settore3.webp",
      "/assets/projects/patti-forniture/contatti.webp",
    ]}
    paragrafi={{ ch1: 2,  ch3: 2,  ch4: 2,  ch5: 1 }}
    prev={{ url: "/progetti/villamasami", title: "Villa Masami" }}
    next={{ url: "/progetti/sicilcosmetic", title: "SicilCosmetic" }}
    liveUrl="https://www.pattiforniture.com/"
  />
);

export default EditorialPattiForniture;
