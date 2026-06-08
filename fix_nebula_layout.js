const fs = require('fs');
const path = '/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/components/NebulaProjectLayout.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('import { useTranslation }')) {
  content = content.replace('import { Link } from "react-router-dom";', 'import { Link } from "react-router-dom";\nimport { useTranslation } from "react-i18next";');
}

if (!content.includes('const { t } = useTranslation();')) {
  content = content.replace('export const NebulaProjectLayout: React.FC<NebulaProjectLayoutProps> = ({', 'export const NebulaProjectLayout: React.FC<NebulaProjectLayoutProps> = ({\n  const { t } = useTranslation();\n');
  // wait, I need to place it inside the function body, not inside the props destructuring.
}

fs.writeFileSync(path, content);
