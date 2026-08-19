import { EditorialProjectLayout } from "./components/EditorialProjectLayout";

export const EditorialStorageHub = () => (
  <EditorialProjectLayout
    id="storagehub"
    titolo="StorageHub"
    rotta="/progetti/storagehub"
    titoloHero={
      <>
        Storage<span className="text-primary italic pr-2">Hub</span>
        <span className="text-ink not-italic pr-2">.</span>
      </>
    }
    anno="2026"
    tech={[
      "React 18",
      "Django 4 + DRF",
      "PostgreSQL",
      "ROpenAI & Gemini API",
      "UX Strategy",
    ]}
    immagineHero="/assets/projects/storage-hub/dashboard.webp"
    immagineProcesso={[
      "/assets/projects/storage-hub/balck.webp",
      "/assets/projects/storage-hub/cerca.webp",
      "/assets/projects/storage-hub/filtri.webp",
      "/assets/projects/storage-hub/fornitore.webp",
      "/assets/projects/storage-hub/log.webp",
    ]}
    galleria={[
      "/assets/projects/storage-hub/dashboard.webp",
      "/assets/projects/storage-hub/catalogo.webp",
      "/assets/projects/storage-hub/categorie.webp",
      "/assets/projects/storage-hub/movimenti.webp",
      "/assets/projects/storage-hub/prodotto.webp",
      "/assets/projects/storage-hub/registro.webp",
      "/assets/projects/storage-hub/stat.webp",
      "/assets/projects/storage-hub/fornitori.webp",
      "/assets/projects/storage-hub/magazziniere.webp",
    ]}
    paragrafi={{ ch1: 1,  ch3: 2,  ch4: 2,  ch5: 1 }}
    prev={{ url: "/progetti/loghi", title: "Branding & Loghi" }}
    next={{ url: "/progetti/freelens", title: "Freelens" }}
  />
);

export default EditorialStorageHub;
