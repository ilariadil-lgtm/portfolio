// convert-webp.js
// Esegui questo script con: node convert-webp.js
// Richiede l'installazione di sharp: npm install sharp

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Aggiungi sharp come dipendenza se non l'hai fatto:
// npm install sharp --save-dev
try {
  var sharp = (await import('sharp')).default;
} catch (e) {
  console.error("ERRORE: Devi prima installare 'sharp'. Esegui: npm install sharp --save-dev");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, 'public');

// Cerca tutte le immagini nelle cartelle
const getAllFiles = (dirPath, arrayOfFiles) => {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  
  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const processImages = async () => {
  console.log("Ricerca delle immagini in public/...");
  const files = getAllFiles(directoryPath, []);
  const images = files.filter(f => f.match(/\.(png|jpg|jpeg)$/i));
  
  console.log(`Trovate ${images.length} immagini da convertire.`);
  
  let count = 0;
  for (const file of images) {
    const ext = path.extname(file);
    const basePath = file.replace(ext, '');
    const webpPath = `${basePath}.webp`;
    
    if (!fs.existsSync(webpPath)) {
      try {
        await sharp(file)
          .webp({ quality: 80 })
          .toFile(webpPath);
        console.log(`Convertito: ${path.basename(file)} -> ${path.basename(webpPath)}`);
        count++;
      } catch (err) {
        console.error(`Errore convertendo ${file}:`, err);
      }
    }
  }
  
  console.log(`\nCompletato! ${count} nuove immagini .webp create.`);
  console.log("Ricordati di aggiornare i percorsi nel codice da .jpg/.png a .webp dove necessario.");
};

processImages();
