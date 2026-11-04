import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useLang, type Lang } from "../i18n";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `whitespace-nowrap py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
    isActive ? "text-brand-red" : "text-ink-soft hover:text-ink"
  }`;

function LangToggle() {
  const { lang, setLang, t } = useLang();
  const options: Lang[] = ["de", "tr"];
  return (
    <div role="group" aria-label={t("lang.aria")} className="flex rounded-full bg-cream-dark p-0.5 text-xs font-bold">
      {options.map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1.5 uppercase transition-colors ${
            lang === l ? "bg-ink text-white" : "text-ink-soft"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-ink/10 bg-cream">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="display text-lg uppercase sm:text-xl">
              Vaihingen <span className="text-brand-red">Bestellt</span>
            </Link>
            <LangToggle />
          </div>
          <nav aria-label={t("nav.aria")} className="-mx-1 flex gap-6 overflow-x-auto px-1">
            <NavLink to="/" end className={navClass}>
              {t("nav.start")}
            </NavLink>
            <NavLink to="/restaurant-werden" className={navClass}>
              {t("nav.owners")}
            </NavLink>
            <a
              href="mailto:info@hasi-elektronic.de"
              className="whitespace-nowrap py-2 text-sm font-bold uppercase tracking-wide text-ink-soft hover:text-ink"
            >
              {t("nav.contact")}
            </a>
          </nav>
        </div>
      </header>

      <div role="note" className="bg-brand-red px-4 py-2.5 text-center text-sm font-semibold text-white">
        <span className="mr-2 rounded bg-white/20 px-2 py-0.5 font-display text-xs font-black tracking-widest">
          DEMO
        </span>
        {t("demo.bar")}
      </div>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-ink/10 bg-cream-dark/60">
        <div className="mx-auto max-w-5xl space-y-3 px-4 py-8 text-sm text-ink-soft">
          <p>{t("f.disclaimer")}</p>
          <p>
            {t("f.optout")}{" "}
            <a className="font-semibold text-brand-red underline" href="mailto:info@hasi-elektronic.de">
              info@hasi-elektronic.de
            </a>{" "}
            {t("f.optout2")}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <span>{t("f.credit")}</span>
            <Link className="underline" to="/impressum">
              {t("f.imprint")}
            </Link>
            <Link className="underline" to="/datenschutz">
              {t("f.privacy")}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
