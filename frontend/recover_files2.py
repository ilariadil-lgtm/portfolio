import json
import re
import sys

transcript_path = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl"
files_to_recover = {
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx": "",
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Progetti.tsx": "",
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Servizi.tsx": "",
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/ProjectDetail.tsx": ""
}

try:
    with open(transcript_path, 'r') as f:
        for line_num, line in enumerate(f):
            try:
                entry = json.loads(line)
            except:
                continue
                
            if 'tool_calls' in entry:
                for call in entry['tool_calls']:
                    tool = call.get('name')
                    args = call.get('args', {})
                    if isinstance(args, str):
                        try:
                            args = json.loads(args)
                        except:
                            continue
                            
                    target = args.get('TargetFile')
                    if target in files_to_recover:
                        if tool == 'write_to_file':
                            files_to_recover[target] = args.get('CodeContent', '')
                        elif tool == 'replace_file_content':
                            content = files_to_recover[target]
                            target_content = args.get('TargetContent')
                            replacement = args.get('ReplacementContent')
                            if target_content and replacement:
                                files_to_recover[target] = content.replace(target_content, replacement)
                        elif tool == 'multi_replace_file_content':
                            content = files_to_recover[target]
                            chunks = args.get('ReplacementChunks', [])
                            for chunk in chunks:
                                target_content = chunk.get('TargetContent')
                                replacement = chunk.get('ReplacementContent')
                                if target_content and replacement:
                                    content = content.replace(target_content, replacement)
                            files_to_recover[target] = content

            if entry.get('type') == 'TOOL_RESPONSE':
                content_str = entry.get('content', '')
                if "File Path: `file://" in content_str:
                    for target in files_to_recover:
                        if f"File Path: `file://{target}`" in content_str:
                            lines = content_str.split('\n')
                            code_lines = []
                            is_code = False
                            for l in lines:
                                if l.startswith("1: ") or (is_code and re.match(r'^\d+: ', l)):
                                    is_code = True
                                    code_lines.append(re.sub(r'^\d+: ', '', l))
                                elif l.startswith("The above content shows the entire") or l.startswith("The above content does NOT"):
                                    break
                            if code_lines:
                                files_to_recover[target] = '\n'.join(code_lines)
except Exception as e:
    print(f"Error parsing logs: {e}")

for path, content in files_to_recover.items():
    if content:
        with open(path, 'w') as f:
            f.write(content)
        print(f"Recovered {path} (length {len(content)})")
    else:
        print(f"Failed to recover {path}")

