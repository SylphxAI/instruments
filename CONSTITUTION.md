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

## Composition (company positioning, not monorepo work)

Sylphx products are **composable**: an agent or app may combine Citra + Spine +
Lookout via **public** SDK imports and/or multiple MCP server entries. Prism may
**delegate** to published Citra/Iris/Cue packages or stdio binaries.

That composability is **not** implemented by:

- a multi-product monorepo
- `packages/instruments-aliases/*`
- vendoring sibling product source trees
- importing `SylphxAI/instruments` as a runtime package

This repository is **portfolio knowledge**. Agents should know it; products do
not ship it.

## Archived (not Instruments primary)

- `filesystem-mcp` (archived)  
- `awesome-mcp-servers` (archived)

## Not a product runtime

Product repositories **must not** depend on, vendor, or import
`SylphxAI/instruments` as code. Full strategy and backlog: [STRATEGY.md](./STRATEGY.md).
