import type { Cuisine } from "./restaurants";

export interface MenuItem {
  id: string;
  name: string;
  /** Preis in Cent, nur Beispielwerte für die Demo. */
  cents: number;
}

export const CUISINE_BLURB: Record<Cuisine, string> = {
  "Kebap & Türkisch": "Demo-Eintrag aus der Kategorie Kebap & Türkisch.",
  "Pizza & Italienisch": "Demo-Eintrag aus der Kategorie Pizza & Italienisch.",
  Burger: "Demo-Eintrag aus der Kategorie Burger.",
  Asiatisch: "Demo-Eintrag aus der Kategorie Asiatisch.",
  Mediterran: "Demo-Eintrag aus der Kategorie Mediterran.",
  "Deutsch & Schwäbisch": "Demo-Eintrag aus der Kategorie Deutsch & Schwäbisch.",
  International: "Demo-Eintrag aus der Kategorie International.",
};

/** Generische Beispielgerichte je Küche. Keine echte Speisekarte. */
export const SAMPLE_MENUS: Record<Cuisine, MenuItem[]> = {
  "Kebap & Türkisch": [
    { id: "k1", name: "Döner im Fladenbrot", cents: 700 },
    { id: "k2", name: "Dürüm", cents: 750 },
    { id: "k3", name: "Lahmacun", cents: 550 },
    { id: "k4", name: "Ayran", cents: 180 },
  ],
  "Pizza & Italienisch": [
    { id: "p1", name: "Pizza Margherita", cents: 900 },
    { id: "p2", name: "Pizza Salami", cents: 1050 },
    { id: "p3", name: "Spaghetti Bolognese", cents: 1000 },
    { id: "p4", name: "Tiramisu", cents: 500 },
  ],
  Burger: [
    { id: "b1", name: "Classic Burger", cents: 890 },
    { id: "b2", name: "Cheeseburger", cents: 950 },
    { id: "b3", name: "Pommes", cents: 350 },
    { id: "b4", name: "Cola 0,33 l", cents: 280 },
  ],
  Asiatisch: [
    { id: "a1", name: "Gebratene Nudeln mit Hähnchen", cents: 950 },
    { id: "a2", name: "Gebratener Reis", cents: 850 },
    { id: "a3", name: "Frühlingsrollen (4 Stück)", cents: 450 },
    { id: "a4", name: "Hähnchen süß-sauer", cents: 1050 },
  ],
  Mediterran: [
    { id: "m1", name: "Gyros-Teller", cents: 1250 },
    { id: "m2", name: "Tzatziki", cents: 450 },
    { id: "m3", name: "Gemischter Salat", cents: 700 },
    { id: "m4", name: "Baklava", cents: 400 },
  ],
  "Deutsch & Schwäbisch": [
    { id: "d1", name: "Schnitzel mit Spätzle", cents: 1450 },
    { id: "d2", name: "Maultaschen", cents: 1150 },
    { id: "d3", name: "Flädlesuppe", cents: 500 },
    { id: "d4", name: "Apfelstrudel", cents: 550 },
  ],
  International: [
    { id: "i1", name: "Pasta Pesto", cents: 1100 },
    { id: "i2", name: "Caesar Salad", cents: 950 },
    { id: "i3", name: "Tagesgericht", cents: 1200 },
    { id: "i4", name: "Eis", cents: 400 },
  ],
};
