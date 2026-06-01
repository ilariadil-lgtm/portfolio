const fs = require('fs');

const path = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl";
const data = fs.readFileSync(path, 'utf8');
const lines = data.split('\n');

const files = {
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx": "",
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Progetti.tsx": "",
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Servizi.tsx": "",
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/ProjectDetail.tsx": ""
};

for (const line of lines) {
    if (!line) continue;
    try {
        const entry = JSON.parse(line);
        if (entry.tool_calls) {
            for (const call of entry.tool_calls) {
                if (call.name === 'write_to_file' || call.function?.name === 'write_to_file') {
                    let args = call.args || call.function?.arguments;
                    if (typeof args === 'string') {
                        try { args = JSON.parse(args); } catch(e) {}
                    }
                    if (args && args.TargetFile && files[args.TargetFile] !== undefined) {
                        files[args.TargetFile] = args.CodeContent;
                    }
                }
                
                if (call.name === 'replace_file_content' || call.function?.name === 'replace_file_content') {
                    let args = call.args || call.function?.arguments;
                    if (typeof args === 'string') {
                        try { args = JSON.parse(args); } catch(e) {}
                    }
                    if (args && args.TargetFile && files[args.TargetFile] !== undefined) {
                        if (files[args.TargetFile]) {
                            files[args.TargetFile] = files[args.TargetFile].replace(args.TargetContent, args.ReplacementContent);
                        }
                    }
                }
                
                if (call.name === 'multi_replace_file_content' || call.function?.name === 'multi_replace_file_content') {
                    let args = call.args || call.function?.arguments;
                    if (typeof args === 'string') {
                        try { args = JSON.parse(args); } catch(e) {}
                    }
                    if (args && args.TargetFile && files[args.TargetFile] !== undefined) {
                        if (files[args.TargetFile] && args.ReplacementChunks) {
                            for (const chunk of args.ReplacementChunks) {
                                files[args.TargetFile] = files[args.TargetFile].replace(chunk.TargetContent, chunk.ReplacementContent);
                            }
                        }
                    }
                }
            }
        }
        
        // Check for view_file responses
        if (entry.type === 'TOOL_RESPONSE' || entry.type === 'VIEW_FILE' || (entry.source === 'SYSTEM' && entry.content)) {
            const content = entry.content;
            if (content && typeof content === 'string' && content.includes('File Path: `file://')) {
                for (const target in files) {
                    if (content.includes(`File Path: \`file://${target}\``)) {
                        const lines = content.split('\n');
                        const codeLines = [];
                        let isCode = false;
                        for (const l of lines) {
                            if (l.startsWith('1: ') || (isCode && /^\d+: /.test(l))) {
                                isCode = true;
                                codeLines.push(l.replace(/^\d+: /, ''));
                            } else if (l.startsWith('The above content shows the entire') || l.startsWith('The above content does NOT')) {
                                break;
                            }
                        }
                        if (codeLines.length > 0 && codeLines.length > 50) {
                            // Only update if it's a full file read or significantly large
                            files[target] = codeLines.join('\n');
                        }
                    }
                }
            }
        }
    } catch(e) {
        // Ignore JSON parse errors on invalid lines
    }
}

for (const [path, content] of Object.entries(files)) {
    if (content) {
        fs.writeFileSync(path, content);
        console.log(`Recovered ${path} (${content.length} chars)`);
    } else {
        console.log(`Failed ${path}`);
    }
}
