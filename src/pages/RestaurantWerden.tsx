import { useState } from "react";
import { useLang, type Key } from "../i18n";
import { formatEuro } from "../lib/format";

const POINTS: { title: Key; text: Key }[] = [
  { title: "w.p1t", text: "w.p1d" },
  { title: "w.p2t", text: "w.p2d" },
  { title: "w.p3t", text: "w.p3d" },
];

function NumberField(props: {
  id: string;
  label: string;
  value: number;
  step?: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label htmlFor={props.id} className="mb-1 block text-sm font-semibold">
        {props.label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={props.id}
          type="number"
          min={0}
          step={props.step ?? 1}
          inputMode="decimal"
          value={Number.isFinite(props.value) ? props.value : ""}
          onChange={(e) => props.onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          className="w-full rounded-lg border-2 border-ink/15 bg-white px-3 py-2"
        />
        <span className="shrink-0 text-sm text-ink-soft">{props.suffix}</span>
      </div>
    </div>
  );
}

export default function RestaurantWerden() {
  const { t } = useLang();
  const [revenue, setRevenue] = useState(3000);
  const [commission, setCommission] = useState(13);
  const [fee, setFee] = useState(39);

  const commissionCost = (revenue * commission) / 100;
  const diff = commissionCost - fee;

  return (
    <div className="space-y-12">
      <section>
        <p className="eyebrow">{t("w.eyebrow")}</p>
        <h1 className="display mt-3 max-w-3xl text-4xl sm:text-5xl">{t("w.title")}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">{t("w.lead")}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {POINTS.map((p) => (
          <div key={p.title} className="rounded-2xl border-2 border-ink/10 bg-white/70 p-5">
            <h2 className="display text-xl text-brand-red">{t(p.title)}</h2>
            <p className="mt-2 text-sm text-ink-soft">{t(p.text)}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="calc-heading" className="rounded-2xl border-2 border-ink/10 bg-white/70 p-6">
        <h2 id="calc-heading" className="display text-2xl">
          {t("w.calcTitle")}
        </h2>
        <p className="mt-2 text-sm text-ink-soft">{t("w.calcNote")}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <NumberField id="revenue" label={t("w.revenue")} value={revenue} step={100} suffix="€" onChange={setRevenue} />
          <NumberField id="commission" label={t("w.commission")} value={commission} step={0.5} suffix="%" onChange={setCommission} />
          <NumberField id="fee" label={t("w.fee")} value={fee} suffix={t("w.perMonth")} onChange={setFee} />
        </div>

        <dl className="mt-6 grid gap-4 sm:grid-cols-3" aria-live="polite">
          <div className="rounded-xl bg-cream-dark p-4">
            <dt className="text-sm text-ink-soft">{t("w.costCommission")}</dt>
            <dd className="display text-3xl tabular-nums">{formatEuro(commissionCost)}</dd>
          </div>
          <div className="rounded-xl bg-cream-dark p-4">
            <dt className="text-sm text-ink-soft">{t("w.costFee")}</dt>
            <dd className="display text-3xl tabular-nums">{formatEuro(fee)}</dd>
          </div>
          <div className="rounded-xl bg-brand-red p-4 text-white">
            <dt className="text-sm text-white/90">{diff >= 0 ? t("w.saving") : t("w.extra")}</dt>
            <dd className="display text-3xl tabular-nums">{formatEuro(Math.abs(diff))}</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-2xl bg-ink p-6 text-cream">
        <h2 className="display text-2xl">{t("w.interestTitle")}</h2>
        <p className="mt-2">
          {t("w.interest")}{" "}
          <a className="font-bold underline" href="mailto:info@hasi-elektronic.de">
            info@hasi-elektronic.de
          </a>
        </p>
      </section>
    </div>
  );
}
