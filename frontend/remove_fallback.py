import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Find the fallbackProjects array definition
    # Usually const fallbackProjects = [ ... ];
    content = re.sub(r'(?s)const fallbackProjects\s*=\s*\[.*?\];', '', content)
    
    # Also find where it's used, e.g. const projects = data || fallbackProjects;
    # Or const displayProjects = ... || fallbackProjects;
    content = re.sub(r'\|\|\s*fallbackProjects', '', content)
    content = re.sub(r'\?\?\s*fallbackProjects', '', content)

    # Check if we need to add a toast import if we use sonner
    if 'useQuery' in content and 'fallbackProjects' in original_content:
        # It's likely using react-query
        if 'toast' not in content:
            # Try to add import { toast } from "sonner";
            content = re.sub(r'(import.*?from "react";)', r'\1\nimport { toast } from "sonner";', content)
        
        # Add error handling to useQuery or just a generic useEffect
        if 'isError' in content and 'useEffect' in content:
            # Add a useEffect to show toast on error
            toast_effect = """
  useEffect(() => {
    if (isError) {
      toast.error("Errore nel caricamento dei progetti dal server.");
    }
  }, [isError]);
"""
            # Inject it after the query definition
            content = re.sub(r'(const \{.*?isError.*?\} = useQuery.*?\}\);)', r'\1' + toast_effect, content, flags=re.DOTALL)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for f in [
    'src/pages/editorial/Index.tsx',
    'src/pages/nebula/Index.tsx',
    'src/pages/editorial/Progetti.tsx',
    'src/pages/nebula/Progetti.tsx'
]:
    if os.path.exists(f):
        process_file(f)

