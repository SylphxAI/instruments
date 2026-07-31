# Sylphx Instruments — Strategy & final operating conclusions

**Audience:** company / agents / humans who need portfolio truth.  
**Nature of this repo:** **knowledge only**. Not a product monorepo. Not a runtime
dependency. Product code **must not** import, vendor, or monorepo-compose through
`SylphxAI/instruments` or any `packages/instruments-aliases/*` farm.

Composition of products is **composability at the company layer** (public SDK +
MCP contracts + optional stdio delegation). That is *positioning*, not *shipping
one mega-repo*.

---

## 1. Mission

Build a family of **local-first agent instruments** that each win a clear job:

| Principle | Meaning |
| --- | --- |
| **Local-first** | Default path needs **no cloud API key**. Data and cache stay on the machine. |
| **Extreme performance** | Native / hot-path where it matters; publishable benches when we claim speed. |
| **Extreme lightweight** | Small default install. Multi-GB browsers / heavy ML are **opt-in**, never required. |
| **Powerful** | Real agent jobs with citeable results — not thin wrappers. |
| **Clear tools** | Few, independently meaningful tools. Tool Search friendly. No vanity explosion; no pathological mega-merge. |
| **Evidence contract** | Proof rides **on results** (locators, routes, warnings). **Not** a tool named `evidence_first`. |
| **Full surfaces** | Every product ships **Core + SDK + CLI + MCP + automated tests** from **its own repo**. |
| **One product = one GitHub repo** | Marketplace listings and star portfolio require separate repositories. |

**Growth ambition:** craft quality that can support **10k+ stars per product** over time (demo, install friction, honest limits, peer-beating benches). Stars are outcomes of craft + distribution, not a substitute for product truth.

---

## 2. Product map (independent repositories)

| Brand | Repository | Job (one sentence) | Competitive anchor | Live stars (2026-07-31) |
| --- | --- | --- | --- | --- |
| **Citra** | [pdf-reader-mcp](https://github.com/SylphxAI/pdf-reader-mcp) | Give agents **eyes for PDFs** with structure + page/cell citations | Dump-text PDF MCPs | **~875** (flagship proof) |
| **Iris** | [image-reader-mcp](https://github.com/SylphxAI/image-reader-mcp) | Deterministic **image media twin** (dims, OCR bbox, trust) | Default VLM caption stacks | early |
| **Cue** | [video-reader-mcp](https://github.com/SylphxAI/video-reader-mcp) | **Timeline** video evidence with ffprobe honesty | Frame-by-frame VLM stacks | early |
| **Prism** | [smart-reader-mcp](https://github.com/SylphxAI/smart-reader-mcp) | **One sniff** → route to Citra/Iris/Cue with evidence envelope | Wiring many media MCPs | early |
| **Spine** | [architecture-reader-mcp](https://github.com/SylphxAI/architecture-reader-mcp) | **Repo architecture engine** for agents (query/path/impact) | [Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) (~77k), [Graphify](https://github.com/Graphify-Labs/graphify) (~100k) | early |
| **Lookout** | [lookout](https://github.com/SylphxAI/lookout) | **Light local web**: search/fetch/extract/cache, SSRF-safe | [wigolo](https://github.com/KnockOutEZ/wigolo) (~4k) | early |

### Strategic positioning (why each exists)

1. **Citra — flagship media instrument**  
   Market already validates “PDF for agents.” Citra’s wedge is **citeable structure** (tables, pages, OCR provenance), native speed, and full surfaces — not “another text dump.” Use Citra as the **template** for README craft, release gates, native packaging, and public proof.

2. **Iris — facts before vision guesses**  
   Agents over-trust VLMs. Iris owns **deterministic** image facts first; generative vision remains optional elsewhere. Keep **one primary tool** (`read_image`) with flags, not a tool zoo.

3. **Cue — time is the citation unit**  
   Video without timeline anchors forces frame spam. Cue owns streams/chapters/subtitles/ffprobe honesty. Same “one primary tool + flags” discipline.

4. **Prism — composition without monorepo**  
   Agents hate wiring three media servers. Prism is the **thin smart router**: sniff format → delegate via **public packages / stdio**, return a unified evidence envelope. Prism must **not** reimplement PDF/image/video engines.

5. **Spine — architecture for agents, not dashboards first**  
   Understand-Anything wins human interactive graph UX; Graphify wins local AST graph + skill surface. Spine’s wedge: **agent-compact, deterministic structure + path/impact/search**, first-class **SDK + CLI + MCP**, file:line evidence on claims. Do **not** try to become a multi-GB visualization product on the default path. Do **match or beat** peers on query honesty, multi-language extraction depth, and install friction for agents.

6. **Lookout — local web without the multi-GB tax**  
   wigolo proves demand for local search/fetch/crawl/research over MCP. Lookout’s wedge: **same job class, lighter default** (no multi-GB browser/model warmup required), strong SSRF/cache honesty, clear tools. Optional heavy browser paths stay advanced/opt-in if ever added.

### Explicitly archived (do not reinvest as primary Instruments)

| Repo | Status | Reason |
| --- | --- | --- |
| `filesystem-mcp` | **Archived** | Generic FS is crowded; not a differentiated Instruments wedge. |
| `awesome-mcp-servers` | **Archived** | Catalog, not a product instrument. |

---

## 3. What “Evidence First” means (and is not)

### Correct meaning

**Evidence First** is a **product philosophy and response contract**:

- Every material answer includes **proof** an agent can cite or re-check:
  - **Locators** — page/cell/bbox, `file:line`, URL + text span, path hops
  - **Route** — which engine/adapter produced the answer
  - **Honesty** — warnings, gaps, missing binary, SSRF deny, unknown impact
  - **Confidence labels** — deterministic vs inferred when both exist

Agents call **ordinary tools** (`read_pdf`, `read_image`, `web_fetch`, `architecture_path`, …).  
Proof arrives **on the response**. No extra “evidence” round-trip is required.

### Incorrect meanings (do not do these)

| Anti-pattern | Why wrong |
| --- | --- |
| A tool named `evidence_first` / `Evidence First` | Pure ceremony; confuses Tool Search; over-engineering |
| Marketing “Evidence First” without locators | Overclaim / empty slogan |
| Merging all products into one mega-tool “for simplicity” | Loses focus; giant schemas; agent confusion |
| Inventing tools only to look complete | Vanity surface |

**Verdict:** Evidence First is **not** over-engineering when locators/routes/warnings are real. It **is** empty marketing if only the slogan ships. Full detail: [EVIDENCE_CONTRACT.md](./EVIDENCE_CONTRACT.md).

---

## 4. Surfaces every product must ship (in its own repo)

| Surface | Purpose | Notes |
| --- | --- | --- |
| **Core** | Local-first engine | Native hot path preferred |
| **SDK** | Library for apps & dogfood | TS required; Rust where the core already is; other languages as demand justifies |
| **CLI** | Human + scriptable | Brand bin: `citra` / `iris` / `cue` / `prism` / `spine` / `lookout` + `doctor` |
| **MCP** | Agent hosts | stdio; `server.json` title = Brand |
| **Tests + gates** | Non-theatrical proof | unit + release-gate + public-proof where claimed |
| **Skill** | Agent-facing usage | `skills/<brand>/SKILL.md` |
| **Docs / marketing** | Why us | Install in 30s; before/after; honest limits |

**Not required in this knowledge repo:** npm packages, binaries, monorepo workspaces.

**Brand npm** (`@sylphx/citra`, …): optional dual-publish **from the product repo**, never from a central aliases farm. See per-repo `docs/BRAND_PUBLISH.md`.

---

## 5. Tool surface policy

See [TOOL_SURFACE.md](./TOOL_SURFACE.md).

Rules of thumb:

1. Prefer **one sharp tool per job** with flags over five half-tools.
2. Advanced modes (crawl, research, heavy OCR) may be separate tools when they change risk/resource profile.
3. Do **not** merge Citra+Iris+Cue+Spine+Lookout into one server for “portfolio convenience.”
4. Prism is the only intentional **router**; it stays thin.
5. Tool count should be **reasonable**: neither vanity-many nor compress-to-one-mudball.

---

## 6. Repository topology (binding)

```
SylphxAI/instruments          ← docs / portfolio knowledge ONLY
SylphxAI/pdf-reader-mcp       ← Citra product
SylphxAI/image-reader-mcp     ← Iris product
SylphxAI/video-reader-mcp     ← Cue product
SylphxAI/smart-reader-mcp     ← Prism product
SylphxAI/architecture-reader-mcp ← Spine product
SylphxAI/lookout              ← Lookout product
```

### Allowed composition

- Prism depends on **published** Citra/Iris/Cue packages or documented stdio binaries.
- Apps import `@sylphx/pdf-reader-mcp` / future `@sylphx/citra` SDKs.
- Agents attach **multiple** MCP servers by choice.

### Forbidden

- Multi-product monorepo shipping all instruments as one marketplace unit
- `packages/instruments-aliases/{citra,iris,...}` central farm
- Product A vendoring Product B’s source tree as the integration story
- Product repos treating `instruments` as a code dependency

Product-local docs may **link** here for family narrative (`docs/portfolio/SYLPHX_INSTRUMENTS.md` pointers). That is documentation, not monorepo import work.

---

## 7. Competitive bar (what “best” means)

Absorb peer strengths; beat on **agent-native local** axes.

### Spine vs Understand-Anything / Graphify

| Axis | Peer strength | Our bar |
| --- | --- | --- |
| Interactive human graph UI | UA strong | **Not default** — agent-compact answers first |
| Local AST / deterministic edges | Graphify strong | Match honesty; file:line evidence |
| Multi-language | peers broad | Continuous language/extractor depth |
| Agent SDK + MCP + CLI first-class | often secondary | **Primary** |
| Install weight | varies | Keep light default |

### Lookout vs wigolo

| Axis | Peer strength | Our bar |
| --- | --- | --- |
| Local search/fetch/crawl/research | strong | Feature parity on light path |
| No API key | strong | Keep |
| Multi-GB browser/model | often | **Reject as default** |
| SSRF / cache honesty | varies | **Strict** |

### Media (Citra / Iris / Cue / Prism)

Beat dump-text and VLM-only paths on **citeable structure**, native speed, and one-call agent ergonomics. Citra is the quality ceiling for siblings.

---

## 8. Marketing page / public wording rules

Every product README should answer:

1. **What job** does this instrument own? (one sentence)
2. **Why not the default agent path?** (table: without vs with us)
3. **Install in ≤30 seconds**
4. **SDK + CLI + MCP** examples (same mental model)
5. **Evidence sample** (real locator, not slogan)
6. **Honest limits** (missing binary, SSRF deny, not a full browser agent, …)
7. **Family pointer** to this knowledge repo (not monorepo claim)

Tone: sharp, technical, non-hype. “Local-first · fast · light · citeable.”

---

## 9. Phases (family)

Full checklists: [PHASE_TARGETS.md](./PHASE_TARGETS.md), [ACCEPTANCE.md](./ACCEPTANCE.md), honest [STATUS.md](./STATUS.md).

| Phase | Intent | Family status (2026-07-31) |
| --- | --- | --- |
| **A — Surfaces** | Core+SDK+CLI+MCP+tests+skill+gates | **Landed** on tip evidence |
| **B — Competitive depth** | Peer-class power without weight bloat | **Partial** |
| **C — Brand / growth** | Brand npm, continuous benches, marketplace, 10k craft | **Open** (live brand npm needs auth) |

---

## 10. Detailed backlog (what remains)

Priority is **per independent product repo** on its default branch. This list is company knowledge.

### 10.1 Cross-cutting

1. Keep [STATUS.md](./STATUS.md) honest after every material tip change.
2. Never reintroduce multi-product monorepo / aliases farm.
3. Continuous **public benches** with artifacts (scripts exist; continuous publication residual).
4. Live **`@sylphx/{citra,iris,cue,prism,spine,lookout}`** dual-publish when npm auth available (from each product repo).
5. Marketplace listings **per repo**.
6. README/demo craft toward 10k-star quality bar (especially non-Citra).
7. Optional additional language SDKs only when dogfood demand is real (TS/Rust first).

### 10.2 Citra (flagship)

1. Maintain public-proof + release gates green on every release.
2. Keep native packaging fail-closed and platform-thin.
3. Publish brand package when auth ready; keep transitional name working.
4. Deepen competitive benches vs dump-text PDF MCPs (speed + structure fidelity).
5. Marketing: keep “eyes for PDFs / returns proof” as the gold standard for siblings.

### 10.3 Iris

1. OCR depth and honesty to Citra-like bar (bbox, languages, failure modes).
2. Do not commit dirty native binaries as routine noise.
3. Public demos / sample images with citeable OCR.
4. Brand npm when auth ready.

### 10.4 Cue

1. Timeline evidence richness (chapters, subtitles, scene anchors) with ffprobe honesty.
2. Public sample video proofs.
3. Document host `ffprobe` requirement clearly; fail closed when missing.
4. Brand npm when auth ready.

### 10.5 Prism

1. Keep router thin: sniff → delegate → evidence envelope.
2. e2e proofs with sibling natives available (CI or documented matrix).
3. Never reimplement engines; only improve routing + envelope + UX.
4. Brand npm when auth ready.

### 10.6 Spine (deepest Phase B)

1. Continue multi-language / AST honesty toward Graphify-class structure claims.
2. Path, impact, neighbors, cycles, score explain — keep agent-compact.
3. Skill + CLI + MCP parity on every material query type.
4. Public proof fixtures that show architecture answers with file:line.
5. Do **not** prioritize heavy interactive UA-style UI as the product center.
6. Brand npm / package naming cleanup from workspace root when ready.

### 10.7 Lookout

1. Light-path parity with wigolo job class: search, fetch, extract, research, bounded crawl.
2. SSRF, cache, host diversity, rank explain — keep strict.
3. Optional live tests behind `LOOKOUT_LIVE=1`.
4. Resist multi-GB browser default; advanced only if justified.
5. Brand npm when auth ready.

### 10.8 Non-work (explicit)

- Do not un-archive filesystem-mcp / awesome-mcp-servers as Instruments primaries.
- Do not invent an `evidence_first` tool.
- Do not centralize all products into `architecture-reader-mcp/packages/*` or `instruments` workspaces.

---

## 11. Definition of Done (family)

Family is **not Done** until:

1. Phase A remains true on every product tip.
2. Phase B residuals are either closed or explicitly accepted with honest STATUS language.
3. Phase C brand/growth items have live evidence (or named external blockers only).
4. Each product can truthfully claim local-first, light default, clear tools, and evidence-on-results.
5. No monorepo / aliases farm regression.
6. Marketing pages do not overclaim.

Until then, STATUS must say **partial / open** where residual remains.

---

## 12. How agents should work this portfolio

1. Read this file + CONSTITUTION + STATUS before proposing topology changes.
2. Implement only inside the **owning product repo**.
3. Link family docs; do not import them as code.
4. Prefer direct trunk on internal policy when allowed; public repos still need green CI truth.
5. Evidence precedes “Done” claims (local ≠ released ≠ live).

---

## Related

- [CONSTITUTION.md](./CONSTITUTION.md)
- [NAMING.md](./NAMING.md)
- [PRODUCTS.md](./PRODUCTS.md)
- [PHASE_TARGETS.md](./PHASE_TARGETS.md)
- [EVIDENCE_CONTRACT.md](./EVIDENCE_CONTRACT.md)
- [COMPETITIVE.md](./COMPETITIVE.md)
- [ACCEPTANCE.md](./ACCEPTANCE.md)
- [TOOL_SURFACE.md](./TOOL_SURFACE.md)
- [INSTALL.md](./INSTALL.md)
- [STATUS.md](./STATUS.md)
