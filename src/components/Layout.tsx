import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-brand-50 text-brand-800" : "text-stone-700 hover:bg-stone-100"
  }`;

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-900">
      <div role="note" className="bg-amber-100 px-4 py-2 text-center text-sm text-amber-950">
        <strong>Demo</strong> – nicht live. Es werden keine echten Bestellungen aufgenommen.
      </div>

      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold text-brand-800">
            <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-brand-700 text-white">
              V
            </span>
            Vaihingen Bestellportal
          </Link>
          <nav aria-label="Hauptnavigation" className="flex gap-1">
            <NavLink to="/" end className={navClass}>
              Restaurants
            </NavLink>
            <NavLink to="/restaurant-werden" className={navClass}>
              Für Restaurants
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl space-y-3 px-4 py-6 text-sm text-stone-600">
          <p>
            Alle Einträge beruhen auf öffentlich zugänglichen Angaben (Stand 04.11.2026, ohne Gewähr). Die
            gelisteten Restaurants sind keine Partner dieses Demo-Portals. Speisekarten und Preise sind
            Beispielwerte.
          </p>
          <p>
            Sie möchten nicht gelistet sein? Kurze Mail an{" "}
            <a className="font-medium text-brand-800 underline" href="mailto:info@hasi-elektronic.de">
              info@hasi-elektronic.de
            </a>{" "}
            – der Eintrag wird entfernt.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Demo von Hasi Elektronic, Vaihingen an der Enz</span>
            <Link className="underline" to="/impressum">
              Impressum
            </Link>
            <Link className="underline" to="/datenschutz">
              Datenschutz
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
