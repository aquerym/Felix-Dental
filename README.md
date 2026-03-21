
  # Felix Dental

  This is a code bundle for Felix Dental. The original project is available at https://www.figma.com/design/holRWtI7GHfzeDfWZxNaXn/Felix-Dental.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  Run `npm run build` to generate the production build in `dist/`.

  ## GitHub Pages

  This repo deploys to GitHub Pages using the workflow in `.github/workflows/deploy-pages.yml`.
  
  1. Push to `main` to trigger deployment.
  2. In GitHub repo settings, set **Pages** source to **GitHub Actions**.
  3. For a custom domain, configure it in GitHub Pages settings and update DNS records.
  
  `dist/` is intentionally not committed; it is built in CI and deployed from workflow artifacts.

  ## Changelog

  ### 1.0.12
  - Added GitHub Pages deployment workflow with Actions
  - Added `.gitignore` for generated/vendor files (`node_modules`, `dist`, caches)
  - Prepared repository for clean source-only history

  ### 0.5.0
  - Added multi-language support (Hebrew, English, Russian) using react-i18next
  - Created translation files in `src/i18n/` (he.json, en.json, ru.json)
  - Connected LanguageSwitcher component to i18next for live language switching
  - Replaced ~120 hardcoded Hebrew strings across all components with `t()` calls
  - RTL layout preserved for all languages
  ### 0.1.3
  - Removed `text-white` from footer container (Frame2) in CtaFooter
  - Changed LanguageSwitcher button font-weight from normal to medium
  - Added explicit `text-white` to CTA heading in Frame22
  - Removed background color from ScaledContainer desktop wrapper
  - Removed `bg-white` from CtaFooter root
  - Replaced gradient with solid background in IntegrationsWhyUs, added matching text color
