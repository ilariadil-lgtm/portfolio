const fs = require('fs');

const itPath = '/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/it.json';
const it = JSON.parse(fs.readFileSync(itPath, 'utf8'));

it.scroll = {
  ...it.scroll,
  hero: "INTRO",
  about: "CHI SONO",
  skills: "COMPETENZE",
  mindset: "APPROCCIO",
  vision: "VISIONE",
  work: "PROGETTI",
  metrics: "METRICHE",
  contact: "CONTATTI",
  services: "SERVIZI",
  process: "PROCESSO",
  archive: "ARCHIVIO"
};

fs.writeFileSync(itPath, JSON.stringify(it, null, 2));

console.log('JSON scroll translations updated');
