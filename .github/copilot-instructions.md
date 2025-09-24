<!-- .github/copilot-instructions.md
  Purpose: concise, actionable guidance for AI coding agents working on this Create React App project.
  Keep this file short (20-50 lines) and strictly focused on discoverable patterns and commands.
-->

# Copilot instructions for this repo

- Project type: a small Create React App (CRA) bootstrapped frontend located at the repository root. Key files: `package.json`, `public/`, and `src/` (notably `src/App.js`, `src/index.js`, `src/App.test.js`).

- Primary workflows (use exact npm scripts):
  - Start dev server: `npm start` (runs `react-scripts start`, serves at http://localhost:3000)
  - Run tests: `npm test` (react-scripts test — interactive watch by default)
  - Build production: `npm run build` (outputs optimized files to `build/`)

- Architecture & patterns to preserve:
  - Single-page React app using functional components and module CSS imports (see `src/App.js` + `src/App.css`).
  - Entrypoint: `src/index.js` creates the React root and renders `<App />` inside `#root` in `public/index.html`.
  - Tests use React Testing Library (see `src/App.test.js`) — prefer its query APIs (getByText, screen) when adding tests.

- Code style and conventions discovered:
  - Files use default CRA ESLint config (`eslintConfig` in `package.json` extends `react-app` and `react-app/jest`). Avoid introducing rules that contradict it unless updating `package.json`.
  - Keep imports relative inside `src/` and assets in `public/` or `src/` (logo.svg is imported from `src`).

- Integration points & dependencies:
  - No backend or environment files present; assume static frontend only. If adding API calls, document required env vars and add them to `.env` (CRA convention).
  - Key dependencies are in `package.json`: `react`, `react-dom`, `react-scripts`, `@testing-library/*`, `web-vitals`.

- Suggested AI behaviors (concrete, repo-specific):
  - When generating code, run and reference `npm test` and `npm start` semantics: keep changes compatible with CRA scripts.
  - When modifying build/tooling (e.g., add Babel/webpack customizations), mention that `npm run eject` is available but is one-way; avoid ejecting unless requested.
  - For UI changes, update `src/App.css` and `src/index.css` alongside JSX edits to maintain styles.
  - For tests, follow the existing pattern in `src/App.test.js` using `render()` and `screen` from `@testing-library/react`.

- Examples to reference in suggestions:
  - Edit `src/App.js` to change displayed text; update `src/App.test.js` to adjust the test that queries `/learn react/i`.
  - To add an image asset, place it under `src/` and import (e.g., `import logo from './logo.svg'`) as currently done.

- Constraints & things NOT to change without explicit instruction:
  - Do not change `react-scripts` version or the CRA setup unless the user asks to migrate.
  - Do not run `npm run eject` or add non-discoverable environment assumptions.

If anything here is unclear or you'd like the file to include additional agent rules (tests, CI, or local dev tips), tell me what to add and I'll update this doc.
