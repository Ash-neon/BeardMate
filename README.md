# BeardMate

A polished Shopify-style storefront concept for a premium beard care brand.

## Structure
- `index.html` – main storefront layout
- `styles.css` – visual styling and responsive layout
- `script.js` – small interactions such as the mobile menu and footer year

## Preview locally
Open the theme files in Shopify or use Shopify CLI to preview locally in a development store.

If you still want a local static view, use `python3 -m http.server 8000` and visit http://127.0.0.1:8000/.

## Shopify theme structure
This repository follows Shopify theme conventions for a GitHub-connected theme:

- `layout/theme.liquid` — the main theme wrapper
- `templates/*.json` — page templates used by Online Store 2.0
- `sections/*.liquid` — editable sections for homepage and page templates
- `assets/*` — CSS, JS, image and asset files
- `config/settings_schema.json` — theme editor settings
- `config/settings_data.json` — theme defaults
- `locales/*.json` — localization files

## GitHub integration with Shopify
To connect this repo to Shopify:

1. In Shopify Admin, go to `Online Store > Themes`.
2. Click `Connect from GitHub` and authorize your repo.
3. Select the branch `beardmate-theme`.
4. In the theme editor, choose `Home page` from the top page selector.
5. Publish or preview the theme.

If Shopify shows a 404 page in the editor, make sure you are viewing the home template, not the 404 template.
