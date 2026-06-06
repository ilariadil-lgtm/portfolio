import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Find <img ...> tags and add loading="lazy" if not present
    # We want to be careful not to add it to images that might be critical LCP (like hero images), 
    # but the Awwwards report suggested aggressive lazy loading, so we'll add it to all <img> tags that don't have it.
    
    # We can use a regex to match <img (not containing loading="lazy") ... >
    # Because HTML regex is tricky, we'll do something simpler:
    # Find all <img ...> tags
    def replacer(match):
        img_tag = match.group(0)
        if 'loading="lazy"' not in img_tag and "loading='lazy'" not in img_tag and 'loading={' not in img_tag:
            return img_tag.replace('<img', '<img loading="lazy"')
        return img_tag
        
    content = re.sub(r'<img[^>]+>', replacer, content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
