import json

log_file = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl"
target_file = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx"

file_contents = {}

with open(log_file, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'tool_calls' in data:
                for tc in data['tool_calls']:
                    # if it's write_to_file or replace_file_content or multi_replace
                    name = tc.get('function', {}).get('name', '')
                    args = tc.get('function', {}).get('arguments', '')
                    try:
                        args_json = json.loads(args)
                    except:
                        continue
                    
                    if name == 'default_api:write_to_file' and 'Index.tsx' in args_json.get('TargetFile', ''):
                        file_contents['Index.tsx'] = args_json.get('CodeContent', '')
                    
        except Exception as e:
            pass
            
print("Found full write?", 'Index.tsx' in file_contents)
if 'Index.tsx' in file_contents:
    print(file_contents['Index.tsx'][:200])

