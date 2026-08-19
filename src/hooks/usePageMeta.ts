import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  ogImage?: string;
  themeColor?: string;
  canonical?: string;
}

const BASE_TITLE = "Ilaria Diliberto";
const BASE_URL = "https://ilariadiliberto.com";
const BASE_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * Hook che aggiorna dinamicamente title, meta description, og tags e canonical
 * per ogni pagina senza dipendenze esterne (no react-helmet).
 */
export const usePageMeta = ({ title, description, ogImage, themeColor, canonical }: PageMetaProps) => {
  useEffect(() => {
    const fullTitle = `${title} — ${BASE_TITLE}`;
    // Garantisce sempre URL assoluti per og:image (richiesto dai crawler social)
    const rawImage = ogImage ?? BASE_OG_IMAGE;
    const image = rawImage.startsWith("http") ? rawImage : `${BASE_URL}${rawImage}`;

    // Title
    document.title = fullTitle;

    // Meta description
    setMeta("name", "description", description);

    // Canonical URL
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : null;
    if (canonicalUrl) {
      let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute("href", canonicalUrl);
    }

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", "website");
    if (canonicalUrl) setMeta("property", "og:url", canonicalUrl);

    // Twitter Card
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:card", "summary_large_image");

    // Il colore del tema lo governa App.tsx in base al tema attivo:
    // qui si tocca solo se la pagina ne chiede uno suo.
    if (themeColor) setMeta("name", "theme-color", themeColor);

    // Cleanup: ripristina il titolo base all'unmount
    return () => {
      document.title = `${BASE_TITLE} — UX Design & Sviluppo Web`;
    };
  }, [title, description, ogImage, themeColor, canonical]);
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

/**
 * Inietta un blocco JSON-LD di structured data nel <head>.
 * Usare in useEffect nelle pagine che necessitano di Schema.org.
 * @example injectSchema({ "@type": "Person", "name": "Ilaria Diliberto" })
 */
export function injectSchema(data: Record<string, unknown>) {
  const id = "schema-jsonld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify({ "@context": "https://schema.org", ...data });
  return () => { el?.parentNode?.removeChild(el!); };
}

