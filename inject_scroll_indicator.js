const fs = require('fs');
const path = require('path');

const nebulaPath = '/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula';
const files = fs.readdirSync(nebulaPath).filter(f => f.endsWith('.tsx'));

const sectionsMap = {
  'Index.tsx': "['scroll.hero', 'scroll.about', 'scroll.work', 'scroll.metrics', 'scroll.skills', 'scroll.contact']",
  'Chisono.tsx': "['scroll.hero', 'scroll.mindset', 'scroll.skills', 'scroll.vision', 'scroll.contact']",
  'Servizi.tsx': "['scroll.hero', 'scroll.services', 'scroll.process', 'scroll.contact']",
  'Progetti.tsx': "['scroll.hero', 'scroll.archive', 'scroll.contact']",
  'Contatti.tsx': "['scroll.hero', 'scroll.contact']",
  'FAQ.tsx': "['scroll.hero', 'scroll.contact']",
  'Blog.tsx': "['scroll.hero', 'scroll.contact']",
  'Privacy.tsx': "['scroll.hero']",
  'Cookies.tsx': "['scroll.hero']",
};

files.forEach(file => {
  const filePath = path.join(nebulaPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip some pages
  if (['Privacy.tsx', 'Cookies.tsx'].includes(file)) return;

  const sectionsStr = sectionsMap[file] || "['scroll.hero', 'scroll.contact']";

  // If it doesn't have useTranslation, we can't easily map the t() function inside the component render.
  // Wait, we can just do: `sections={[t('scroll.hero'), t('scroll.about'), ...]}`
  // To do that, the component MUST have `const { t } = useTranslation();`.
  
  // Actually, we can just pass the array of translated strings if `t` is available.
  // Let's check if the file has useTranslation and t defined.
  if (!content.includes('import { useTranslation }')) {
    content = content.replace(/(import React.*?from ['"]react['"];)/, "$1\nimport { useTranslation } from 'react-i18next';");
  }
  
  if (!content.includes('const { t } = useTranslation();')) {
    // try to find the export const Component = () => {
    content = content.replace(/(export const [A-Za-z0-9_]+:?\s*(?:React\.FC)?\s*=\s*\([^)]*\)\s*=>\s*{)/, "$1\n  const { t } = useTranslation();");
  }

  // Import ScrollIndicator
  if (!content.includes('ScrollIndicator')) {
    content = content.replace(/(import { NebulaNav } from "\.\/components\/NebulaNav";)/, "$1\nimport { ScrollIndicator } from './components/ScrollIndicator';");
  }

  // Find <ScrollIndicator /> and replace with sections
  if (content.includes('<ScrollIndicator />')) {
    content = content.replace(
      /<ScrollIndicator \/>/g, 
      `<ScrollIndicator sections={${sectionsStr}.map(k => t(k))} />`
    );
  } else {
    // Add it after NebulaNav
    content = content.replace(
      /<NebulaNav \/>/g,
      `<NebulaNav />\n      <ScrollIndicator sections={${sectionsStr}.map(k => t(k))} />`
    );
  }

  fs.writeFileSync(filePath, content);
});

console.log('ScrollIndicator injected into all Nebula pages');
