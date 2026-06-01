import os
import glob
import re

files = glob.glob('/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/*.tsx')
ignore = ['Index.tsx', 'Chisono.tsx', 'Progetti.tsx', 'Contatti.tsx', 'Servizi.tsx', 'Blog.tsx', 'FAQ.tsx', 'Privacy.tsx', 'Cookies.tsx', 'ProjectDetail.tsx', 'Loghi.tsx']

for file in files:
    filename = os.path.basename(file)
    if filename in ignore:
        continue
    
    with open(file, 'r') as f:
        content = f.read()

    # Find all image src attributes
    # E.g. src="/assets/projects/storage-hub/dashboard.webp"
    # or src={`/assets/projects/freelens/${img}`}
    
    # Actually, it's easier to find the project folder:
    folder_match = re.search(r'/assets/projects/([^/]+)/', content)
    if not folder_match:
        print(f"Skipping {filename}, no images found")
        continue
        
    folder = folder_match.group(1)
    
    # We can just extract all literal webp/jpg/png files from the folder in the actual filesystem!
    project_dir = f"/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/public/assets/projects/{folder}"
    
    if not os.path.exists(project_dir):
        print(f"Dir not found: {project_dir}")
        continue
        
    images = []
    for ext in ['*.webp', '*.png', '*.jpg']:
        images.extend(glob.glob(f"{project_dir}/{ext}"))
        
    if not images:
        continue
        
    # Sort them, try to find "home", "main", "dashboard" for mainImage
    main_img = None
    gallery = []
    
    for img in images:
        basename = os.path.basename(img)
        if any(x in basename.lower() for x in ['home', 'main', 'dashboard', 'cover']):
            main_img = basename
            break
            
    if not main_img:
        main_img = os.path.basename(images[0])
        
    for img in images:
        basename = os.path.basename(img)
        if basename != main_img:
            gallery.append(basename)
            
    # Now rewrite the component!
    # We replace the entire <NebulaProjectLayout ... > ... </NebulaProjectLayout>
    # Wait, description is complex. We shouldn't rewrite the whole thing.
    
    # Let's just append mainImage="..." gallery={["...", "..."]} to the NebulaProjectLayout props!
    # And delete the children!
    
    # Match the children. The children are everything after the `>` of the opening <NebulaProjectLayout ...> tag
    # until the closing </NebulaProjectLayout>
    
    # Find the tag
    match = re.search(r'(<NebulaProjectLayout[^>]*>)(.*?)(</NebulaProjectLayout>)', content, re.DOTALL)
    if not match:
        continue
        
    opening = match.group(1)
    children = match.group(2)
    closing = match.group(3)
    
    # Insert props into opening tag before the >
    # Strip the last >
    opening = opening.rstrip()
    if opening.endswith('>'):
        opening = opening[:-1]
        
    props_str = f'\n      mainImage="/assets/projects/{folder}/{main_img}"\n      gallery={{[' + ', '.join([f'"/assets/projects/{folder}/{g}"' for g in gallery]) + ']}}\n    >'
    
    new_content = content[:match.start()] + opening + props_str + closing + content[match.end():]
    
    with open(file, 'w') as f:
        f.write(new_content)
        
print("Rewrite complete")
