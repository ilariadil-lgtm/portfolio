import React from "react";
import { Link as LinkRouter, useLocation, type LinkProps } from "react-router-dom";
import { linguaDi, percorsoIn } from "@/lib/lingua";

/**
 * Link che resta nella lingua in cui stai navigando.
 *
 * I percorsi si scrivono sempre in italiano — <Link to="/servizi"> — perche
 * l'italiano e la lingua sorgente. Se pero l'indirizzo corrente e sotto /en,
 * la destinazione viene tradotta: /servizi diventa /en/servizi.
 *
 * Senza questo, da /en/servizi un clic su "Progetti" portava a /progetti, e
 * l'indirizzo — che comanda sulla lingua — riportava in italiano.
 *
 * Gli indirizzi esterni e le ancore passano intatti.
 */
export const Link: React.FC<LinkProps & React.RefAttributes<HTMLAnchorElement>> = ({
  to,
  ...resto
}) => {
  const { pathname } = useLocation();
  const interno = typeof to === "string" && to.startsWith("/");
  const destinazione =
    interno && linguaDi(pathname) === "en" ? percorsoIn(to as string, "en") : to;

  return <LinkRouter to={destinazione} {...resto} />;
};
