# BeardMate Shopify Theme

A production-oriented Shopify Online Store 2.0 theme for BeardMate, operated by ChaliseyZ Central L.L.C.

## Theme structure

- `assets/` — storefront CSS, JavaScript, and non-product fallback graphics
- `blocks/` — reusable theme-editor blocks
- `config/` — global settings and saved theme data
- `layout/` — storefront and password page wrappers
- `locales/` — translated storefront strings
- `sections/` — global section groups and merchant-editable page sections
- `snippets/` — reusable Liquid components
- `templates/` — JSON templates for Shopify storefront resource types

The product photography displayed by the theme comes from Shopify product media or merchant-selected image settings. The sample export's generated PNGs are not included.

## Preview locally
Use Shopify CLI with a development store, or connect the GitHub branch directly from Shopify Admin. Liquid pages cannot be accurately previewed with a static HTTP server because Shopify supplies products, collections, carts, policies, and routes at render time.

## Shopify theme structure
The theme includes native templates for home, product, cart, collection, collection list, search, standard pages, contact, policies, blog, article, password, and 404 pages. Global header and footer content is managed through Shopify section groups.

## GitHub integration with Shopify
To connect this repo to Shopify:

1. In Shopify Admin, go to `Online Store > Themes`.
2. Click `Connect from GitHub` and authorize your repo.
3. Select the branch `beardmate-theme`.
4. In the theme editor, choose `Home page` from the top page selector.
5. Publish or preview the theme.

If Shopify shows a 404 page in the editor, make sure you are viewing the home template, not the 404 template.
