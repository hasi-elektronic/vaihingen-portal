import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CUISINE_BLURB, SAMPLE_MENUS } from "../data/menus";
import { findRestaurant } from "../data/restaurants";
import { formatCents } from "../lib/format";
import NotFound from "./NotFound";

export default function RestaurantPage() {
  const { slug } = useParams();
  const restaurant = findRestaurant(slug);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [sent, setSent] = useState(false);

  const menu = restaurant ? SAMPLE_MENUS[restaurant.cuisine] : [];

  const { lines, total } = useMemo(() => {
    const l = menu
      .filter((m) => (cart[m.id] ?? 0) > 0)
      .map((m) => ({ ...m, qty: cart[m.id] }));
    return { lines: l, total: l.reduce((sum, m) => sum + m.cents * m.qty, 0) };
  }, [menu, cart]);

  if (!restaurant) return <NotFound />;

  const change = (id: string, delta: number) => {
    setSent(false);
    setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] ?? 0) + delta) }));
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${restaurant.name}, ${restaurant.street}, ${restaurant.plz} Vaihingen an der Enz`,
  )}`;

  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm font-medium text-brand-800 underline">
        ← Alle Restaurants
      </Link>

      <header className="rounded-2xl border border-stone-200 bg-white p-6">
        <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
          {restaurant.cuisine}
        </span>
        <h1 className="mt-3 text-3xl font-bold">{restaurant.name}</h1>
        <p className="mt-1 text-stone-700">
          {restaurant.street}, {restaurant.plz} {restaurant.place}
        </p>
        <p className="mt-3 text-sm text-stone-600">{CUISINE_BLURB[restaurant.cuisine]}</p>

        <div className="mt-4 text-sm">
          <h2 className="font-bold">Öffnungszeiten</h2>
          {restaurant.hours ? (
            <ul className="mt-1 text-stone-700">
              {restaurant.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
              <li className="mt-1 text-stone-500">Nach öffentlichen Angaben, ohne Gewähr.</li>
            </ul>
          ) : (
            <p className="mt-1 text-stone-600">Zeiten bitte direkt beim Restaurant erfragen.</p>
          )}
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-brand-800 underline"
        >
          Auf Karte ansehen (öffnet Google Maps)
        </a>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section aria-labelledby="menu-heading" className="rounded-2xl border border-stone-200 bg-white p-6">
          <h2 id="menu-heading" className="text-xl font-bold">
            Beispiel-Speisekarte
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Platzhalter für die Demo – keine echte Speisekarte und keine echten Preise.
          </p>
          <ul className="mt-4 divide-y divide-stone-100">
            {menu.map((item) => {
              const qty = cart[item.id] ?? 0;
              return (
                <li key={item.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-stone-600">{formatCents(item.cents)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => change(item.id, -1)}
                      disabled={qty === 0}
                      aria-label={`${item.name} entfernen`}
                      className="h-9 w-9 rounded-full border border-stone-300 text-lg disabled:opacity-40"
                    >
                      −
                    </button>
                    <span className="w-6 text-center tabular-nums" aria-live="polite">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => change(item.id, 1)}
                      aria-label={`${item.name} hinzufügen`}
                      className="h-9 w-9 rounded-full bg-brand-700 text-lg text-white hover:bg-brand-800"
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <aside aria-labelledby="cart-heading" className="h-fit rounded-2xl border border-stone-200 bg-white p-6">
          <h2 id="cart-heading" className="text-xl font-bold">
            Ihre Bestellung
          </h2>
          {lines.length === 0 ? (
            <p className="mt-3 text-sm text-stone-600">Noch nichts ausgewählt.</p>
          ) : (
            <ul className="mt-3 space-y-1 text-sm">
              {lines.map((l) => (
                <li key={l.id} className="flex justify-between gap-2">
                  <span>
                    {l.qty} × {l.name}
                  </span>
                  <span className="tabular-nums">{formatCents(l.cents * l.qty)}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-4 flex justify-between border-t border-stone-200 pt-3 font-bold">
            <span>Summe</span>
            <span className="tabular-nums">{formatCents(total)}</span>
          </p>
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={() => setSent(true)}
            className="mt-4 w-full rounded-xl bg-cta px-4 py-3 font-bold text-white hover:bg-cta-dark disabled:opacity-40"
          >
            Demo-Bestellung absenden
          </button>
          {sent && (
            <p role="status" className="mt-3 rounded-lg bg-amber-100 p-3 text-sm text-amber-950">
              Das ist eine Demo: Es wurde keine Bestellung ausgelöst und nichts an das Restaurant übermittelt.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
