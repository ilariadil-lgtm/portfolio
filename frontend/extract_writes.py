import json

path = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl"

writes = []

with open(path, 'r') as f:
    for line in f:
        try:
            entry = json.loads(line)
        except:
            continue
            
        step = entry.get('step_index', 0)
        
        if entry.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in entry:
            for call in entry['tool_calls']:
                if call['name'] == 'write_to_file' and 'Index.tsx' in str(call.get('args', {})):
                    content = call['args'].get('CodeContent', '')
                    writes.append((step, content))

print(f"Found {len(writes)} writes.")
for i, (step, content) in enumerate(writes):
    with open(f"write_{step}.tsx", "w") as f:
        f.write(content)

