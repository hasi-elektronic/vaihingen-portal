import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { CUISINES, RESTAURANTS, type Cuisine } from "../data/restaurants";
import { HERO_IMAGE } from "../data/images";
import { useLang, type Key } from "../i18n";

export default function Home() {
  const { t } = useLang();
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
    <div className="space-y-14">
      <section className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="text-center md:text-left">
          <p className="eyebrow">{t("home.eyebrow")}</p>
          <h1 className="display mt-4 text-5xl sm:text-6xl">
            {t("home.h1a")} <span className="text-brand-red">{t("home.h1b")}</span> {t("home.h1c")}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft md:mx-0">{t("home.lead")}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row md:justify-start sm:justify-center">
            <a href="#restaurants" className="btn btn-primary">
              {t("home.cta")}
            </a>
            <Link to="/restaurant-werden" className="btn btn-outline">
              {t("home.ctaOwners")}
            </Link>
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft md:mx-0">{t("home.payNote")}</p>
        </div>

        <figure className="relative mx-auto w-full max-w-sm">
          <img
            src={HERO_IMAGE}
            alt=""
            width={1280}
            height={716}
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-t-[999px] rounded-b-3xl bg-brand-red object-cover"
          />
          <div className="absolute bottom-5 left-4 right-4 flex gap-2" aria-hidden>
            <span className="flex-1 rounded-xl bg-brand-red px-3 py-2 text-center text-white shadow-lg ring-4 ring-cream">
              <span className="display block text-2xl">{RESTAURANTS.length}</span>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.14em]">{t("home.statRestaurants")}</span>
            </span>
            <span className="flex-1 rounded-xl bg-brand-red px-3 py-2 text-center text-white shadow-lg ring-4 ring-cream">
              <span className="display block text-2xl">0 %</span>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.14em]">{t("home.statCommission")}</span>
            </span>
          </div>
          <figcaption className="mt-2 text-center text-xs text-ink-soft">
            {t("home.archTag")} · {t("img.sample")}
          </figcaption>
        </figure>
      </section>

      <section id="restaurants" aria-labelledby="list-heading" className="scroll-mt-4 space-y-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="list-heading" className="display text-3xl">
            {t("home.list")} <span className="text-brand-red">({results.length})</span>
          </h2>
          <Link to="/restaurant-werden" className="text-sm font-semibold text-brand-red underline">
            {t("home.owner")}
          </Link>
        </div>

        <div>
          <label htmlFor="search" className="mb-1 block text-sm font-semibold">
            {t("home.searchLabel")}
          </label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("home.searchPh")}
            className="w-full max-w-xl rounded-lg border-2 border-ink/15 bg-white px-4 py-3 placeholder:text-ink-soft/70"
          />
        </div>

        <div
          role="group"
          aria-label={t("home.filterAria")}
          className="-mx-4 flex flex-nowrap gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0"
        >
          <button type="button" aria-pressed={cuisine === null} onClick={() => setCuisine(null)} className={chip(cuisine === null)}>
            {t("home.all")} ({RESTAURANTS.length})
          </button>
          {CUISINES.filter((c) => counts.has(c)).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cuisine === c}
              onClick={() => setCuisine(cuisine === c ? null : c)}
              className={chip(cuisine === c)}
            >
              {t(`cuisine.${c}` as Key)} ({counts.get(c)})
            </button>
          ))}
        </div>

        {results.length === 0 ? (
          <p className="rounded-2xl border-2 border-dashed border-ink/20 bg-white/50 p-6 text-ink-soft">
            {t("home.noResults")}
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
  return `shrink-0 whitespace-nowrap rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${
    active ? "border-ink bg-ink text-white" : "border-ink/15 bg-white/70 text-ink hover:border-ink"
  }`;
}
