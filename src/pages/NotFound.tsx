import { Link } from "react-router-dom";
import { useLang } from "../i18n";

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="space-y-3">
      <h1 className="display text-4xl">{t("nf.title")}</h1>
      <p className="text-ink-soft">{t("nf.text")}</p>
      <Link to="/" className="font-semibold text-brand-red underline">
        {t("nf.home")}
      </Link>
    </div>
  );
}
