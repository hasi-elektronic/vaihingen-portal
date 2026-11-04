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

## Deploy (Cloudflare Pages)

```bash
npm run build
npx wrangler pages deploy dist --project-name=vaihingen-portal --commit-dirty=true
```

`public/_redirects` sorgt für das SPA-Routing, `public/_headers` und `public/robots.txt` halten die Seite aus Suchmaschinen.
