import json

path = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl"
target = "src/pages/nebula/Index.tsx"
target_full = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx"

current_content = ""
# Read the initial write_to_file
with open(path, 'r') as f:
    for line in f:
        try:
            entry = json.loads(line)
        except:
            continue
            
        step = entry.get('step_index', 0)
        if step > 1700: # Stop before git checkout disaster
            break
            
        # Handle VIEW_FILE if it contains the full file
        if entry.get('type') == 'TOOL_RESPONSE' or entry.get('type') == 'VIEW_FILE' or entry.get('source') == 'SYSTEM':
            content = entry.get('content', '')
            if isinstance(content, str) and f"File Path: `file://{target_full}`" in content and "The above content shows the entire, complete file contents" in content:
                # Extract the code
                lines = content.split('\n')
                code_lines = []
                is_code = False
                for l in lines:
                    if l.startswith('1: ') or (is_code and ': ' in l and l.split(': ')[0].isdigit()):
                        is_code = True
                        code_lines.append(l.split(': ', 1)[1])
                    elif l.startswith('The above content shows the entire') or l.startswith('The above content does NOT'):
                        break
                current_content = '\n'.join(code_lines)
                
        # Handle write_to_file
        if entry.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in entry:
            for call in entry['tool_calls']:
                if call['name'] == 'write_to_file' and (target in call['args'].get('TargetFile', '') or target_full in call['args'].get('TargetFile', '')):
                    current_content = call['args']['CodeContent']
                
                # We could try to handle replace_file_content but that's very complex in python.
                # Let's just output the last current_content we found
                
print(f"Recovered {len(current_content)} bytes")
with open("recovered_index.tsx", "w") as f:
    f.write(current_content)

