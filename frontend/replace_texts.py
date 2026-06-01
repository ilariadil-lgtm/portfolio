import re

file_path = "src/pages/nebula/Index.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("NEVER<br/>GIVE<br/>UP", "DIGI<br/>TAL<br/>ARCH<br/>ITE<br/>CT")
content = content.replace("YOU<br/>CAN", "WEB<br/>DEV")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
