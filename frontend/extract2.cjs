const fs = require('fs');

const path = "/Users/ilariadiliberto/.gemini/antigravity-ide/brain/523469f5-5b7e-44a1-95f5-18224f1ad12f/.system_generated/logs/transcript.jsonl";
const data = fs.readFileSync(path, 'utf8');
const lines = data.split('\n');

const files = {
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Servizi.tsx": "",
    "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/ProjectDetail.tsx": ""
};

for (const line of lines) {
    if (!line) continue;
    try {
        const entry = JSON.parse(line);
        // We only care about TOOL_RESPONSE view_file outputs because they hold the full source!
        if (entry.type === 'VIEW_FILE' || entry.type === 'TOOL_RESPONSE' || (entry.source === 'SYSTEM' && entry.content)) {
            const content = entry.content;
            if (content && typeof content === 'string' && content.includes('File Path: `file://')) {
                for (const target in files) {
                    if (content.includes(`File Path: \`file://${target}\``)) {
                        const fileLines = content.split('\n');
                        const codeLines = [];
                        let isCode = false;
                        for (const l of fileLines) {
                            if (l.startsWith('1: ') || (isCode && /^\d+: /.test(l))) {
                                isCode = true;
                                codeLines.push(l.replace(/^\d+: /, ''));
                            } else if (l.startsWith('The above content shows the entire') || l.startsWith('The above content does NOT')) {
                                break;
                            }
                        }
                        if (codeLines.length > 50) {
                            files[target] = codeLines.join('\n');
                        }
                    }
                }
            }
        }
    } catch(e) {}
}

for (const [p, content] of Object.entries(files)) {
    if (content) {
        fs.writeFileSync(p, content);
        console.log(`Recovered ${p}`);
    }
}
