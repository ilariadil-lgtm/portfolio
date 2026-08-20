/**
 * CloudFront Function — viewer request.
 *
 * Il prerender genera /en/services/index.html, ma il visitatore chiede
 * /en/services. S3 non e un server web: non sa che a una cartella corrisponde
 * un index. Questa funzione riscrive la richiesta prima che arrivi all'origine.
 *
 *   /                  → /index.html
 *   /servizi           → /servizi/index.html
 *   /en/services       → /en/services/index.html
 *   /assets/x-a1b2.js  → invariato (ha un'estensione)
 *
 * Va associata al behavior predefinito come "viewer request".
 * Non tocca /api/*, che ha un behavior suo verso l'EC2.
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Ha gia un'estensione: e un file, passa intatto.
  if (uri.match(/\.[a-zA-Z0-9]+$/)) {
    return request;
  }

  // Normalizza la barra finale e aggiunge l'indice.
  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  } else {
    request.uri = uri + "/index.html";
  }

  return request;
}
