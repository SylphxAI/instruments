# Evidence contract (family SSOT)

Evidence is a **result contract**, not a tool.

## Rule

Agents call ordinary product tools (`read_pdf`, `read_image`, `web_fetch`, `architecture_path`, …).  
Each successful (and many failed) responses carry **proof fields**:

| Field class | Examples |
| --- | --- |
| Locators | page/cell/bbox, file:line, URL+span, hop list |
| Route | which engine/adapter/path produced the answer |
| Honesty | warnings, gaps, missing binary, SSRF deny |
| Confidence | deterministic vs inferred (when applicable) |

## Non-goals

- No MCP tool named `evidence_first` / `Evidence First`
- No meta round-trip required before ordinary tools
- Marketing “Evidence First” without locators/warnings is **overclaim**

## Per product

| Brand | Evidence examples |
| --- | --- |
| Citra | page, table cell, bbox, OCR provenance |
| Iris | dimensions, region bbox, OCR lines, trust warnings |
| Cue | timeline stream/chapter anchors, ffprobe honesty |
| Prism | sniff route + delegated sibling evidence envelope |
| Spine | file:line extractors, path hops, impact edges, cycles |
| Lookout | cite spans, extract route, SSRF/cache warnings |

## Tests

Product release-gates and public-proof scripts must keep at least one path that asserts locator/route/warning presence where claimed.
