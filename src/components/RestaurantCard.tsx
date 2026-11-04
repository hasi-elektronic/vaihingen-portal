import { Link } from "react-router-dom";
import type { Restaurant } from "../data/restaurants";

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <li>
      <Link
        to={`/r/${restaurant.slug}`}
        className="group block h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-brand-400 hover:shadow-md"
      >
        <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
          {restaurant.cuisine}
        </span>
        <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-brand-800">{restaurant.name}</h3>
        <p className="mt-1 text-sm text-stone-600">
          {restaurant.street}, {restaurant.plz} {restaurant.place}
        </p>
        <p className="mt-4 text-sm font-medium text-brand-800">Speisekarte ansehen →</p>
      </Link>
    </li>
  );
}
