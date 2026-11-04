import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { restaurantImage } from "../data/images";
import { SAMPLE_MENUS } from "../data/menus";
import { findRestaurant } from "../data/restaurants";
import { useLang, type Key } from "../i18n";
import { formatCents } from "../lib/format";
import NotFound from "./NotFound";

export default function RestaurantPage() {
  const { t } = useLang();
  const { slug } = useParams();
  const restaurant = findRestaurant(slug);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [sent, setSent] = useState(false);

  const menu = restaurant ? SAMPLE_MENUS[restaurant.cuisine] : [];

  const { lines, total } = useMemo(() => {
    const l = menu.filter((m) => (cart[m.id] ?? 0) > 0).map((m) => ({ ...m, qty: cart[m.id] }));
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
      <Link to="/" className="text-sm font-semibold text-brand-red underline">
        ← {t("r.back")}
      </Link>

      <header className="overflow-hidden rounded-2xl border-2 border-ink/10 bg-white/70">
        <div className="relative">
          <img
            src={restaurantImage(restaurant)}
            alt=""
            width={720}
            height={542}
            className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
          />
          <span className="absolute bottom-2 left-2 rounded bg-ink/70 px-2 py-0.5 text-[10px] font-semibold text-white">
            {t("img.sample")}
          </span>
        </div>
        <div className="p-6">
        <p className="eyebrow">{t(`cuisine.${restaurant.cuisine}` as Key)}</p>
        <h1 className="display mt-3 text-4xl">{restaurant.name}</h1>
        <p className="mt-2 text-ink-soft">
          {restaurant.street}, {restaurant.plz} {restaurant.place}
        </p>

        <div className="mt-5 text-sm">
          <h2 className="font-display font-black uppercase tracking-wide">{t("r.hours")}</h2>
          {restaurant.hours ? (
            <ul className="mt-1 text-ink-soft">
              {restaurant.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
              <li className="mt-1 text-ink-soft/80">{t("r.hoursNote")}</li>
            </ul>
          ) : (
            <p className="mt-1 text-ink-soft">{t("r.hoursNone")}</p>
          )}
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm font-semibold text-brand-red underline"
        >
          {t("r.map")}
        </a>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section aria-labelledby="menu-heading" className="rounded-2xl border-2 border-ink/10 bg-white/70 p-6">
          <h2 id="menu-heading" className="display text-2xl">
            {t("r.menuTitle")}
          </h2>
          <p className="mt-1 text-sm text-ink-soft">{t("r.menuNote")}</p>
          <ul className="mt-4 divide-y divide-ink/10">
            {menu.map((item) => {
              const qty = cart[item.id] ?? 0;
              return (
                <li key={item.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-ink-soft">{formatCents(item.cents)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => change(item.id, -1)}
                      disabled={qty === 0}
                      aria-label={`${item.name} ${t("r.remove")}`}
                      className="h-10 w-10 rounded-lg border-2 border-ink/20 bg-[#f4eee4] text-lg font-bold disabled:opacity-40"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-bold tabular-nums" aria-live="polite">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => change(item.id, 1)}
                      aria-label={`${item.name} ${t("r.add")}`}
                      className="h-10 w-10 rounded-lg bg-brand-red text-lg font-bold text-white hover:bg-brand-reddark"
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <aside aria-labelledby="cart-heading" className="h-fit rounded-2xl border-2 border-ink/10 bg-white/70 p-6">
          <h2 id="cart-heading" className="display text-2xl">
            {t("r.cart")}
          </h2>
          {lines.length === 0 ? (
            <p className="mt-3 text-sm text-ink-soft">{t("r.empty")}</p>
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
          <p className="mt-4 flex justify-between border-t-2 border-ink/10 pt-3 font-display text-lg font-black">
            <span>{t("r.sum")}</span>
            <span className="tabular-nums">{formatCents(total)}</span>
          </p>
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={() => setSent(true)}
            className="btn btn-primary mt-4 w-full"
          >
            {t("r.send")}
          </button>
          {sent && (
            <p role="status" className="mt-3 rounded-lg bg-brand-amber/25 p-3 text-sm">
              {t("r.sent")}
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
