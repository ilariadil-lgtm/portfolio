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

    # Rimuovi l'hud (div absolute con text-cyan-400)
    content = re.sub(r'<div className="absolute[^>]*text-cyan-400[^>]*>.*?</div>', '', content, flags=re.DOTALL)
    
    # Rimuovi opacity-50, opacity-70 dalle immagini
    content = content.replace('opacity-70 group-hover:opacity-100 transition-opacity duration-700', 'transition-transform duration-700 hover:scale-[1.02]')
    content = content.replace('opacity-50 group-hover:opacity-100 transition-opacity duration-700', 'transition-transform duration-700 hover:scale-[1.02]')
    content = content.replace('opacity-50 group-hover:opacity-100 transition-all duration-700', 'transition-transform duration-700 hover:scale-[1.02]')

    # Rimuovi i tag text-cyan-* e border-cyan-* dal description
    content = content.replace('border-cyan-500/50', 'border-[#d4af37]/30')
    content = content.replace('text-cyan-100', 'text-white/80')
    content = content.replace('text-cyan-400', 'text-[#d4af37]')
    content = content.replace('bg-[#030712]', 'bg-[#050505]')
    content = content.replace('bg-[#030712]/80', 'bg-transparent')

    # Pulizia layout della griglia immagini
    content = content.replace('rounded-[2rem]', 'rounded-none')
    content = content.replace('rounded-3xl', 'rounded-none')
    content = content.replace('border border-white/10', '')

    with open(file, 'w') as f:
        f.write(content)

print("Done")
