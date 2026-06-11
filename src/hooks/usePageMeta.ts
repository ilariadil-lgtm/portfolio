import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  ogImage?: string;
  themeColor?: string;
}

const BASE_TITLE = "Ilaria Diliberto";
const BASE_OG_IMAGE = "/og-image.jpg"; // da creare in /public

/**
 * Hook che aggiorna dinamicamente title, meta description e og tags
 * per ogni pagina senza dipendenze esterne (no react-helmet).
 */
export const usePageMeta = ({ title, description, ogImage, themeColor }: PageMetaProps) => {
  useEffect(() => {
    const fullTitle = `${title} — ${BASE_TITLE}`;
    const image = ogImage ?? BASE_OG_IMAGE;
    const color = themeColor ?? "#080808";

    // Title
    document.title = fullTitle;

    // Meta description
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", "website");

    // Twitter Card
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:card", "summary_large_image");

    // Theme Color
    setMeta("name", "theme-color", color);

    // Cleanup: ripristina il titolo base all'unmount
    return () => {
      document.title = `${BASE_TITLE} — UX Design & Sviluppo Web`;
    };
  }, [title, description, ogImage, themeColor]);
};

// Helper: trova o crea un tag <meta> e ne imposta il content
function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}
