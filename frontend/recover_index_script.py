import json
import os

log_file = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl"
target_file_path = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx"

content_lines = []
found_init = False

with open(log_file, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'tool_calls' in data:
                for tc in data['tool_calls']:
                    name = tc.get('function', {}).get('name', '')
                    args = tc.get('function', {}).get('arguments', '')
                    if not args: continue
                    try:
                        args_json = json.loads(args)
                    except:
                        continue
                    
                    target = args_json.get('TargetFile', '')
                    if target_file_path in target:
                        if name == 'default_api:write_to_file':
                            content_lines = args_json.get('CodeContent', '').split('\n')
                            found_init = True
                        elif name == 'default_api:replace_file_content' and found_init:
                            start = args_json.get('StartLine', 1) - 1
                            end = args_json.get('EndLine', 1)
                            replacement = args_json.get('ReplacementContent', '').split('\n')
                            content_lines = content_lines[:start] + replacement + content_lines[end:]
                        elif name == 'default_api:multi_replace_file_content' and found_init:
                            chunks = args_json.get('ReplacementChunks', [])
                            # Sort chunks in reverse order to avoid line number shifts
                            chunks.sort(key=lambda x: x.get('StartLine', 1), reverse=True)
                            for chunk in chunks:
                                start = chunk.get('StartLine', 1) - 1
                                end = chunk.get('EndLine', 1)
                                replacement = chunk.get('ReplacementContent', '').split('\n')
                                content_lines = content_lines[:start] + replacement + content_lines[end:]
        except Exception as e:
            pass

recovered_code = '\n'.join(content_lines)
with open("/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/recovered_10_10_Index.tsx", "w") as out:
    out.write(recovered_code)

print("Recovered file written to recovered_10_10_Index.tsx")
print("File length:", len(recovered_code))
if "FUTURES." in recovered_code:
    print("SUCCESS: Found FUTURES in recovered code!")
else:
    print("FAIL: Could not find FUTURES in recovered code.")
