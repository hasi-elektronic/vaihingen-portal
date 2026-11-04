import { Link } from "react-router-dom";
import { restaurantImage } from "../data/images";
import type { Restaurant } from "../data/restaurants";
import { useLang, type Key } from "../i18n";

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { t } = useLang();
  return (
    <li>
      <Link
        to={`/r/${restaurant.slug}`}
        className="group block h-full overflow-hidden rounded-2xl border-2 border-ink/10 bg-white/70 transition hover:border-brand-red"
      >
        <div className="relative">
          <img
            src={restaurantImage(restaurant)}
            alt=""
            loading="lazy"
            width={720}
            height={542}
            className="aspect-[16/9] w-full object-cover"
          />
          <span className="absolute bottom-2 left-2 rounded bg-ink/70 px-2 py-0.5 text-[10px] font-semibold text-white">
            {t("img.sample")}
          </span>
        </div>
        <div className="p-5">
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
        </div>
      </Link>
    </li>
  );
}
