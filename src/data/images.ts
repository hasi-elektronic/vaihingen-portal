import type { Cuisine } from "./restaurants";

/** KI-generierte Beispielbilder (Demo). Für den Live-Betrieb durch echte Fotos der Betriebe ersetzen. */
export const CUISINE_IMAGE: Record<Cuisine, string> = {
  "Kebap & Türkisch": "/img/kebap.webp",
  "Pizza & Italienisch": "/img/pizza.webp",
  Burger: "/img/burger.webp",
  Asiatisch: "/img/asia.webp",
  Mediterran: "/img/mediterran.webp",
  "Deutsch & Schwäbisch": "/img/schwaebisch.webp",
  International: "/img/mediterran.webp",
};

/** Pro Betrieb ein eigenes Beispielbild (public/img/r/<slug>.webp); Fallback = Küchenbild. */
const OWN_IMAGE = new Set([
  "enz-kebap-haus",
  "stern-kebab",
  "stern-burger",
  "restaurant-korona",
  "shiki-asian-cuisine",
  "reis-king",
  "asia-imbiss-panda",
  "mamahansik",
  "multi-gusto",
  "pizza-king",
  "zum-schwanen",
  "pizzeria-grillo",
  "da-angela",
  "da-vinci",
  "corleo",
  "hotel-restaurant-lamm",
]);

export function restaurantImage(r: { slug: string; cuisine: Cuisine }): string {
  return OWN_IMAGE.has(r.slug) ? `/img/r/${r.slug}.webp` : CUISINE_IMAGE[r.cuisine];
}

export const HERO_IMAGE = "/img/hero.webp";
export const OWNER_IMAGE = "/img/owner.webp";
