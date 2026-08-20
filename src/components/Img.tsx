import React from "react";

/**
 * Immagine con sorgenti multiple.
 *
 * Ogni file in /assets ha accanto una variante a 700 px con lo stesso nome piu
 * il suffisso -700: un telefono scarica in media il 29% del peso. La variante
 * esiste per tutte le immagini referenziate, anche per quelle gia piccole —
 * in quel caso e una copia — cosi il srcset non punta mai nel vuoto.
 *
 * Gli SVG non hanno varianti: sono vettoriali, scalano da soli.
 */
type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** Larghezza dichiarata al browser. Predefinito: tutta la finestra. */
  sizes?: string;
  /** Sopra la piega: parte subito e con priorita alta. */
  primaria?: boolean;
};

export const Img: React.FC<Props> = ({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  primaria = false,
  ...resto
}) => {
  const vettoriale = src.endsWith(".svg");
  const piccola = vettoriale ? src : src.replace(/(\.[a-zA-Z0-9]+)$/, "-700$1");

  return (
    <img
      src={src}
      {...(vettoriale ? {} : { srcSet: `${piccola} 700w, ${src} 1400w`, sizes })}
      alt={alt}
      loading={primaria ? "eager" : "lazy"}
      decoding="async"
      {...(primaria ? { fetchPriority: "high" as const } : {})}
      {...resto}
    />
  );
};
