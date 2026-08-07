import { useEffect } from 'react';

type Theme = 'editorial' | 'nebula';

export function useThemeFavicon(theme: Theme) {
  useEffect(() => {
    // Definizione dei percorsi base per ciascun tema
    const basePath = theme === 'nebula' ? '/favicon-nebula' : '/favicon-editorial';

    // Elementi nel DOM da aggiornare
    const icon32 = document.querySelector('link[rel="icon"][sizes="32x32"]') as HTMLLinkElement;
    const icon16 = document.querySelector('link[rel="icon"][sizes="16x16"]') as HTMLLinkElement;
    const iconIco = document.querySelector('link[rel="icon"][sizes="any"]') as HTMLLinkElement;
    const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    const iconSvg = document.querySelector('link[rel="icon"][type="image/svg+xml"]') as HTMLLinkElement;

    // Aggiungiamo un timestamp per forzare il refresh della cache del browser
    const timestamp = new Date().getTime();

    // Se troviamo i tag, aggiorniamo il loro attributo href
    if (icon32) icon32.href = `${basePath}/favicon-32x32.png?v=${timestamp}`;
    if (icon16) icon16.href = `${basePath}/favicon-16x16.png?v=${timestamp}`;
    if (iconIco) iconIco.href = `${basePath}/favicon.ico?v=${timestamp}`;
    if (appleTouchIcon) appleTouchIcon.href = `${basePath}/apple-touch-icon.png?v=${timestamp}`;
    if (iconSvg) iconSvg.href = `${basePath}/favicon.svg?v=${timestamp}`;

  }, [theme]);
}
