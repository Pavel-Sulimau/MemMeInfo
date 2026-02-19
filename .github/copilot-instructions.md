# Copilot Instructions — MemMeInfo (Strict)

## Mission

- Prefer laconic, readable, maintainable code.
- Keep behavior and UI unchanged unless explicitly requested.
- Optimize for small, reviewable diffs.

## Scope and Edit Policy

- Edit source files only:
  - `index.html`, `privacy.html`, `terms.html`
  - `scss/**`
  - `js/new-age.js`
- Never hand-edit generated or third-party assets:
  - `css/*.min.css`, `js/*.min.js`
  - `vendor/**`
- If a change requires minified updates, change source first and mention regeneration steps.

## Code Style (Laconic by Default)

- Use short, clear functions and selectors.
- Use meaningful names; avoid cryptic abbreviations.
- Remove duplication instead of adding parallel logic.
- Avoid dead code, commented blocks, and speculative abstractions.
- Keep comments minimal and only for non-obvious intent.

## JavaScript Rules

- Prefer pure helpers and explicit side effects.
- Avoid global state expansion; reuse existing patterns.
- Do not introduce new frameworks or architecture shifts.
- Preserve compatibility with current jQuery + Bootstrap setup.

## HTML and Accessibility Rules

- Use semantic HTML elements where possible.
- Keep heading order logical and labels explicit.
- Ensure keyboard-focusable controls remain accessible.
- For external links with `target="_blank"`, always add `rel="noopener noreferrer"`.

## Security Rules (Mandatory)

- Never add secrets, keys, tokens, or credentials.
- Never use `eval`, `new Function`, or string-built script execution.
- Prefer safe DOM writes (`textContent`, attribute APIs) over raw HTML injection.
- If HTML injection is unavoidable, sanitize before render and document why.
- Do not weaken privacy/legal pages with unverified claims.

## Dependency and Build Discipline

- Reuse existing dependencies from `package.json`.
- Add dependencies only with clear necessity and minimal footprint.
- Follow existing build tooling in `gulpfile.js`; do not replace toolchain.

## Change Quality Gate

For each task, Copilot should:

1. Make the smallest viable change.
2. Touch only files required by the request.
3. Keep naming/style consistent with nearby code.
4. Report what changed, why, and how to verify quickly.

## PR/Review Output Format

- Summary: 2–5 concise bullets.
- Files changed: explicit list.
- Verification: short manual steps.
- Risks: one line, only if relevant.
