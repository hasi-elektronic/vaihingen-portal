import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { CUISINES, RESTAURANTS, type Cuisine } from "../data/restaurants";

export default function Home() {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState<Cuisine | null>(null);

  const counts = useMemo(() => {
    const map = new Map<Cuisine, number>();
    for (const r of RESTAURANTS) map.set(r.cuisine, (map.get(r.cuisine) ?? 0) + 1);
    return map;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESTAURANTS.filter((r) => {
      if (cuisine && r.cuisine !== cuisine) return false;
      if (!q) return true;
      return `${r.name} ${r.street} ${r.cuisine}`.toLowerCase().includes(q);
    }).sort((a, b) => a.name.localeCompare(b.name, "de"));
  }, [query, cuisine]);

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-brand-700 px-6 py-10 text-white sm:px-10">
        <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
          Bestellen bei Restaurants in Vaihingen – ohne Provision.
        </h1>
        <p className="mt-3 max-w-2xl text-brand-100">
          Ein lokales Portal, das nur vermittelt. Die Restaurants zahlen eine feste Gebühr statt einen Anteil
          am Umsatz, die Bestellung geht direkt an das Restaurant.
        </p>
        <div className="mt-6">
          <label htmlFor="search" className="mb-1 block text-sm font-medium">
            Restaurant oder Straße suchen
          </label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="z. B. Pizza, Grabenstraße, Kebap"
            className="w-full max-w-xl rounded-xl border-0 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-500"
          />
        </div>
      </section>

      <section aria-labelledby="list-heading" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="list-heading" className="text-xl font-bold">
            Restaurants ({results.length})
          </h2>
          <Link to="/restaurant-werden" className="text-sm font-medium text-brand-800 underline">
            Sie betreiben ein Restaurant?
          </Link>
        </div>

        <div role="group" aria-label="Nach Küche filtern" className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={cuisine === null}
            onClick={() => setCuisine(null)}
            className={chip(cuisine === null)}
          >
            Alle ({RESTAURANTS.length})
          </button>
          {CUISINES.filter((c) => counts.has(c)).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cuisine === c}
              onClick={() => setCuisine(cuisine === c ? null : c)}
              className={chip(cuisine === c)}
            >
              {c} ({counts.get(c)})
            </button>
          ))}
        </div>

        {results.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-stone-600">
            Keine Treffer. Versuchen Sie einen anderen Suchbegriff oder setzen Sie den Filter zurück.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((r) => (
              <RestaurantCard key={r.slug} restaurant={r} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function chip(active: boolean): string {
  return `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
    active
      ? "border-brand-700 bg-brand-700 text-white"
      : "border-stone-300 bg-white text-stone-800 hover:border-brand-400"
  }`;
}
