import json

path = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl"
target = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx"

snapshots = []

with open(path, 'r') as f:
    for line in f:
        try:
            entry = json.loads(line)
        except:
            continue
            
        if entry.get('type') == 'TOOL_RESPONSE' or entry.get('type') == 'VIEW_FILE' or entry.get('source') == 'SYSTEM':
            content = entry.get('content', '')
            if isinstance(content, str) and f"File Path: `file://{target}`" in content:
                snapshots.append(content)

# We want to find a snapshot that has the SOTD style, meaning it doesn't have GlassTopNav, and it's long enough.
best_snapshot = None
for s in reversed(snapshots):
    lines = s.split('\n')
    if "The above content shows the entire" in s:
        # Full file!
        if "GlassTopNav" not in s and "font-bricolage" in s:
            best_snapshot = s
            break

if best_snapshot:
    lines = best_snapshot.split('\n')
    code_lines = []
    is_code = False
    for l in lines:
        if l.startswith('1: ') or (is_code and ': ' in l and l.split(': ')[0].isdigit()):
            is_code = True
            code_lines.append(l.split(': ', 1)[1])
        elif l.startswith('The above content shows the entire') or l.startswith('The above content does NOT'):
            break
    
    with open("real_index.tsx", "w") as f:
        f.write('\n'.join(code_lines))
    print(f"Saved real_index.tsx ({len(code_lines)} lines)")
else:
    print("Could not find a full SOTD snapshot.")

