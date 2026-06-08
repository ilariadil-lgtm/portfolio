const fs = require('fs');

const itPath = '/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/it.json';
const enPath = '/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/locales/en.json';

const it = JSON.parse(fs.readFileSync(itPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Add scroll keys
it.scroll = {
  start: "INIZIO",
  end: "FINE",
  hero: "HERO",
  about: "ABOUT",
  work: "PROGETTI",
  metrics: "METRICHE",
  skills: "SKILLS",
  contact: "CONTATTI",
  mindset: "MINDSET",
  vision: "VISION",
  services: "SERVIZI",
  process: "PROCESSO",
  archive: "ARCHIVIO"
};

en.scroll = {
  start: "START",
  end: "END",
  hero: "HERO",
  about: "ABOUT",
  work: "WORK",
  metrics: "METRICS",
  skills: "SKILLS",
  contact: "CONTACT",
  mindset: "MINDSET",
  vision: "VISION",
  services: "SERVICES",
  process: "PROCESS",
  archive: "ARCHIVE"
};

// Also ensure all_projects exists in IT
it.all_projects = "Tutti i progetti";

fs.writeFileSync(itPath, JSON.stringify(it, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log('JSON updated');
