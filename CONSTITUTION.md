# Sylphx Instruments — Constitution

Company-level product family rules. Product implementation lives only in each
product’s own repository.

## Hard constraints

| Constraint | Meaning |
| --- | --- |
| Local-first | Default path needs no vendor API key; data/cache on machine |
| Extreme performance | Native hot paths; publishable benches where claimed |
| Extreme lightweight | Small default install; heavy browser/ML only opt-in |
| Powerful | Real agent job, not a toy wrapper |
| Clear tools | Independently meaningful tools; Tool Search friendly |
| Evidence contract | Citeable locators, routes, honesty/gaps in results |
| Full surfaces | Core + SDK + CLI + MCP + automated tests **per product repo** |
| Multi-repo | One product = one GitHub repo (marketplace + stars) |

## Evidence is not a tool

Agents call ordinary tools (`read_pdf`, `web_fetch`, `architecture_path`, …).
Responses carry proof. There is no `evidence_first` tool.

## Composition

Products compose through **public** SDK/MCP contracts (e.g. Prism delegates to
Citra/Iris/Cue packages). They do not share a monorepo source tree for shipping.

## Archived (not Instruments primary)

- `filesystem-mcp` (archived)  
- `awesome-mcp-servers` (archived)

## Not a product runtime

This repository documents company positioning. Product repositories **must not**
depend on, vendor, or import `SylphxAI/instruments` as code. Agents and humans
should *know* these rules; they do not *ship* them as a package inside each product.
