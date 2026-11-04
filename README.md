# Vaihingen Bestellportal (Demo)

Demo eines lokalen Bestellportals für Vaihingen an der Enz: Restaurants zahlen eine feste Gebühr statt Provision.
Keine echten Bestellungen, keine Partnerschaften. Die Seite ist `noindex`.

## Stack

React, TypeScript, Vite, Tailwind CSS v4, React Router. Schrift Space Grotesk lokal über `@fontsource`.

## Entwicklung

```bash
npm install
npm run dev      # lokaler Server
npm run build    # Typprüfung + Build nach dist/
```

## Daten

- `src/data/restaurants.ts`: Name, Adresse, Küche aus öffentlichen Verzeichnissen (Stand 04.11.2026).
  Öffnungszeiten nur, wo öffentlich belegt. Keine Fotos, Logos oder Bewertungen.
- `src/data/menus.ts`: generische Beispielgerichte je Küche, keine echten Speisekarten.

## Deploy (Cloudflare Worker + Static Assets)

Das Cloudflare-Pages-Limit des Accounts ist voll, daher läuft die Seite als Worker mit Static Assets (`wrangler.jsonc`).
SPA-Routing über `not_found_handling: single-page-application`, Header über `public/_headers`.

```bash
npm run build
npx wrangler@4 deploy   # braucht CLOUDFLARE_API_TOKEN und CLOUDFLARE_ACCOUNT_ID in der Umgebung
```

Live: https://vaihingen-portal.hguencavdi.workers.dev (noindex). Das GitHub-Workflow `.github/workflows/deploy.yml`
deployt bei jedem Push, sobald die Repo-Secrets `CLOUDFLARE_API_TOKEN` und `CLOUDFLARE_ACCOUNT_ID` gesetzt sind.
