import json

path = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl"
target = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx"

last_code = ""

with open(path, 'r') as f:
    for line in f:
        if 'write_to_file' in line and target in line:
            try:
                data = json.loads(line)
                if 'tool_calls' in data:
                    for call in data['tool_calls']:
                        if call.get('name') == 'write_to_file':
                            args_str = call.get('args', {})
                            if isinstance(args_str, str):
                                args = json.loads(args_str)
                            else:
                                args = args_str
                            
                            if args.get('TargetFile') == target:
                                last_code = args.get('CodeContent')
            except Exception as e:
                pass

if last_code:
    with open("recover_index.tsx", "w") as f:
        f.write(last_code)
    print("Recovered Index to recover_index.tsx")
else:
    print("Could not find Index write")

