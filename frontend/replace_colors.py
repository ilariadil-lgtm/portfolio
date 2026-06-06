import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Substitutions
    # #f5f2ed -> bg-background or text-background (usually background)
    # Often used in className="... bg-[#f5f2ed] ..."
    # Let's just do precise replacements.
    
    original_content = content
    
    content = re.sub(r'bg-\[\#f5f2ed\]', 'bg-background', content)
    content = re.sub(r'text-\[\#f5f2ed\]', 'text-background', content)
    content = re.sub(r'fill-\[\#f5f2ed\]', 'fill-background', content)
    content = re.sub(r'bg-\[\#3d0f1a\]', 'bg-primary', content)
    content = re.sub(r'text-\[\#3d0f1a\]', 'text-primary', content)
    content = re.sub(r'text-\[\#C0392B\]', 'text-primary', content) # or maybe destructive, but probably primary variant
    content = re.sub(r'bg-\[\#C0392B\]', 'bg-primary', content)
    content = re.sub(r'fill-\[\#3d0f1a\]', 'fill-primary', content)
    content = re.sub(r'"#f5f2ed"', 'hsl(var(--background))', content)
    content = re.sub(r'"#3d0f1a"', 'hsl(var(--primary))', content)
    content = re.sub(r'"#C0392B"', 'hsl(var(--primary))', content)
    
    # Also ignore case for hexes just in case
    content = re.sub(r'bg-\[\#F5F2ED\]', 'bg-background', content)
    content = re.sub(r'text-\[\#F5F2ED\]', 'text-background', content)
    content = re.sub(r'bg-\[\#3D0F1A\]', 'bg-primary', content)
    content = re.sub(r'text-\[\#3D0F1A\]', 'text-primary', content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
