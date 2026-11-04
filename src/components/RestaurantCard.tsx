import { Link } from "react-router-dom";
import type { Restaurant } from "../data/restaurants";
import { useLang, type Key } from "../i18n";

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { t } = useLang();
  return (
    <li>
      <Link
        to={`/r/${restaurant.slug}`}
        className="group block h-full rounded-2xl border-2 border-ink/10 bg-white/70 p-5 transition hover:border-brand-red"
      >
        <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-amberdark">
          {t(`cuisine.${restaurant.cuisine}` as Key)}
        </span>
        <h3 className="display mt-2 text-xl">{restaurant.name}</h3>
        <p className="mt-2 text-sm text-ink-soft">
          {restaurant.street}, {restaurant.plz} {restaurant.place}
        </p>
        <p className="mt-4 font-display text-sm font-black uppercase tracking-wide text-brand-red">
          {t("card.menu")} →
        </p>
      </Link>
    </li>
  );
}
