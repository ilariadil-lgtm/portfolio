import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialPortfolio = () => (
  <EditorialProjectLayout
    id="portfolio"
    titolo="Portfolio"
    rotta="/progetti/portfolio"
    titoloHero={
      <>
        Ilaria
        <span className="text-primary italic pr-2">Portfolio</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2025"
    tech={[
      "React + Vite",
      "Framer Motion",
      "Three.js",
      "Web Audio API",
      "Lenis Scroll",
      "i18n IT/EN",
    ]}
    immagineHero="/assets/projects/portfolio/split.png"
    immagineProcesso={[
      "/assets/projects/portfolio/split.png",
      "/assets/projects/portfolio/editorial.png",
      "/assets/projects/portfolio/nebula.png",
    ]}
    galleria={[
      "/assets/projects/portfolio/split.png",
      "/assets/projects/portfolio/editorial.png",
      "/assets/projects/portfolio/nebula.png",
    ]}
    paragrafi={{ ch1: 1,  ch3: 1,  ch4: 1,  ch5: 1 }}
    prev={{ url: "/progetti/storagehub", title: "StorageHub" }}
    next={{ url: "/progetti/villamasami", title: "Villa Masami" }}
  />
);

export default EditorialPortfolio;
