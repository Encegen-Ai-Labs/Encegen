import json, re

with open('scratch_send_msg_586.txt', 'r', encoding='utf-8') as f:
    raw = f.read().strip()
    if raw.startswith('"') and raw.endswith('"'):
        # simple unescape
        try:
            text = json.loads(raw, strict=False)
        except Exception:
            text = raw
    else:
        text = raw

# write unescaped to clean markdown
with open('figma_inspection_report.md', 'w', encoding='utf-8') as out:
    out.write(text.replace('\\n', '\n'))

with open('figma_inspection_report.md', 'r', encoding='utf-8') as f:
    for line in f:
        if line.startswith('#'):
            print(line.strip())
