import json
import os

transcript_path = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl"
files_to_recover = {
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx": None,
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Progetti.tsx": None,
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Servizi.tsx": None,
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/ProjectDetail.tsx": None
}

# We need to trace the conversation backwards to find the last time each file was seen fully or written fully.
# Or just scan forwards and keep track of the file content!

file_contents = {k: "" for k in files_to_recover}

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            entry = json.loads(line)
        except:
            continue
            
        if 'tool_calls' in entry:
            for call in entry['tool_calls']:
                tool = call.get('function', {}).get('name')
                args_str = call.get('function', {}).get('arguments', '{}')
                try:
                    args = json.loads(args_str)
                except:
                    continue
                    
                target = args.get('TargetFile')
                
                if target in files_to_recover:
                    if tool == 'write_to_file':
                        file_contents[target] = args.get('CodeContent', '')
                    elif tool == 'replace_file_content':
                        # Apply replace
                        content = file_contents[target]
                        target_content = args.get('TargetContent')
                        replacement = args.get('ReplacementContent')
                        if target_content and replacement:
                            file_contents[target] = content.replace(target_content, replacement)
                    elif tool == 'multi_replace_file_content':
                        content = file_contents[target]
                        chunks = args.get('ReplacementChunks', [])
                        for chunk in chunks:
                            target_content = chunk.get('TargetContent')
                            replacement = chunk.get('ReplacementContent')
                            if target_content and replacement:
                                content = content.replace(target_content, replacement)
                        file_contents[target] = content

        # We also need to capture view_file outputs because maybe we didn't write it from scratch, we just modified it!
        # Wait, if view_file was called, it shows the file content.
        # But transcript.jsonl has the tool responses.
        if entry.get('type') == 'TOOL_RESPONSE' and entry.get('source') == 'SYSTEM':
            content_str = entry.get('content', '')
            # A view_file response looks like:
            # File Path: `file:///...`
            # Total Lines: ...
            # ...
            # 1: import React...
            if "File Path: `file://" in content_str:
                for target in files_to_recover:
                    if f"File Path: `file://{target}`" in content_str:
                        # Extract the code from the response.
                        lines = content_str.split('\n')
                        code_lines = []
                        is_code = False
                        for l in lines:
                            # It says "The following code has been modified to include a line number..."
                            if l.startswith("1: ") or (is_code and re.match(r'^\d+: ', l)):
                                is_code = True
                                code_lines.append(re.sub(r'^\d+: ', '', l))
                            elif l.startswith("The above content shows the entire"):
                                break
                        if code_lines:
                            file_contents[target] = '\n'.join(code_lines)

# Write them out!
import re
for path, content in file_contents.items():
    if content:
        with open(path, 'w') as f:
            f.write(content)
        print(f"Recovered {path}")
    else:
        print(f"Failed to recover {path}")

