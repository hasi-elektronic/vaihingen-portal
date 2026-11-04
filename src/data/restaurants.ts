export type Cuisine =
  | "Kebap & Türkisch"
  | "Pizza & Italienisch"
  | "Burger"
  | "Asiatisch"
  | "Mediterran"
  | "Deutsch & Schwäbisch"
  | "International";

export const CUISINES: Cuisine[] = [
  "Kebap & Türkisch",
  "Pizza & Italienisch",
  "Burger",
  "Asiatisch",
  "Mediterran",
  "Deutsch & Schwäbisch",
  "International",
];

export interface Restaurant {
  slug: string;
  name: string;
  street: string;
  plz: string;
  place: string;
  cuisine: Cuisine;
  /** Nur gesetzt, wenn öffentlich belegt. Sonst bleibt das Feld leer. */
  hours?: string[];
}

/**
 * Demo-Daten: Name, Adresse und Küchenrichtung stammen aus öffentlich
 * zugänglichen Verzeichnissen (Stand 04.11.2026). Öffnungszeiten nur dort,
 * wo sie gefunden wurden. Keine Fotos, keine Logos, keine Bewertungen.
 */
export const RESTAURANTS: Restaurant[] = [
  {
    slug: "enz-kebap-haus",
    name: "Enz Kebap Haus",
    street: "Grabenstraße 21",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Kebap & Türkisch",
    hours: ["Sa 10:00–22:00", "So 12:00–21:00"],
  },
  {
    slug: "stern-kebab",
    name: "Stern Kebab",
    street: "Vaihinger Straße 16",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Kebap & Türkisch",
  },
  {
    slug: "stern-burger",
    name: "Stern Burger, Pasta & Fingerfood",
    street: "Vaihinger Straße 14",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Burger",
  },
  {
    slug: "restaurant-korona",
    name: "Restaurant Korona",
    street: "Vaihinger Straße 21",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Mediterran",
  },
  {
    slug: "shiki-asian-cuisine",
    name: "Shiki Asian Cuisine",
    street: "Stuttgarter Straße 21",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Asiatisch",
  },
  {
    slug: "reis-king",
    name: "Reis King",
    street: "Grabenstraße 33",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Asiatisch",
  },
  {
    slug: "asia-imbiss-panda",
    name: "Asia Imbiss Panda",
    street: "Grabenstraße 28",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Asiatisch",
  },
  {
    slug: "mamahansik",
    name: "Mamahansik",
    street: "Marktplatz 19",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Asiatisch",
  },
  {
    slug: "multi-gusto",
    name: "Multi Gusto",
    street: "Hertzstraße 5",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Pizza & Italienisch",
  },
  {
    slug: "pizza-king",
    name: "Pizza King",
    street: "Heilbronner Straße 18",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Pizza & Italienisch",
    hours: ["Fr 11:00–13:30 und 17:00–22:45", "Sa–So 11:30–22:45"],
  },
  {
    slug: "zum-schwanen",
    name: "Ristorante Pizzeria Zum Schwanen",
    street: "Heilbronner Straße 13",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Pizza & Italienisch",
  },
  {
    slug: "pizzeria-grillo",
    name: "Ristorante Pizzeria Grillo",
    street: "Manfred-Behr-Straße 2",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Pizza & Italienisch",
  },
  {
    slug: "da-angela",
    name: "Ristorante Pizzeria Da Angela",
    street: "Stuttgarter Straße 32",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Pizza & Italienisch",
    hours: ["Mo, Di, Do–So 17:30–22:00", "Mi geschlossen"],
  },
  {
    slug: "da-vinci",
    name: "Ristorante Pizzeria Da Vinci",
    street: "Ensinger Straße 10",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "Pizza & Italienisch",
  },
  {
    slug: "corleo",
    name: "Corleo",
    street: "Stuttgarter Straße 9–11",
    plz: "71665",
    place: "Vaihingen an der Enz",
    cuisine: "International",
  },
  {
    slug: "hotel-restaurant-lamm",
    name: "Hotel Restaurant Lamm",
    street: "Rathausstraße 4",
    plz: "71665",
    place: "Vaihingen an der Enz (Roßwag)",
    cuisine: "Deutsch & Schwäbisch",
  },
];

export function findRestaurant(slug: string | undefined): Restaurant | undefined {
  return RESTAURANTS.find((r) => r.slug === slug);
}
