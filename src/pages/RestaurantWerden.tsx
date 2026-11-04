import { useState } from "react";
import { formatEuro } from "../lib/format";

const PLAN_POINTS = [
  {
    title: "0 % Provision",
    text: "Feste Gebühr statt Anteil am Umsatz. Kosten bleiben planbar, auch wenn mehr bestellt wird.",
  },
  {
    title: "Bestellung direkt beim Restaurant",
    text: "Bestellung und Zahlung laufen über Ihr eigenes System und Ihr eigenes Konto. Das Portal vermittelt nur.",
  },
  {
    title: "Eigene Auslieferung bleibt bei Ihnen",
    text: "Kein Fahrerpool, keine Fremdlogistik. Sie legen Liefergebiet und Mindestbestellwert selbst fest.",
  },
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
      <label htmlFor={props.id} className="mb-1 block text-sm font-medium">
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
          className="w-full rounded-lg border border-stone-300 px-3 py-2"
        />
        <span className="text-sm text-stone-600">{props.suffix}</span>
      </div>
    </div>
  );
}

export default function RestaurantWerden() {
  const [revenue, setRevenue] = useState(3000);
  const [commission, setCommission] = useState(13);
  const [fee, setFee] = useState(39);

  const commissionCost = (revenue * commission) / 100;
  const diff = commissionCost - fee;

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold sm:text-4xl">Für Restaurants: sichtbar sein ohne Provision</h1>
        <p className="mt-3 max-w-2xl text-stone-700">
          Das Vaihingen Bestellportal bündelt die Restaurants der Stadt an einem Ort. Sie zahlen eine feste
          Gebühr. Von Ihrem Umsatz bleibt alles bei Ihnen.
        </p>
      </section>

      <section aria-label="Vorteile" className="grid gap-4 sm:grid-cols-3">
        {PLAN_POINTS.map((p) => (
          <div key={p.title} className="rounded-2xl border border-stone-200 bg-white p-5">
            <h2 className="font-bold text-brand-800">{p.title}</h2>
            <p className="mt-2 text-sm text-stone-700">{p.text}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="calc-heading" className="rounded-2xl border border-stone-200 bg-white p-6">
        <h2 id="calc-heading" className="text-xl font-bold">
          Rechenbeispiel
        </h2>
        <p className="mt-1 text-sm text-stone-600">
          Alle Werte sind Platzhalter zum Ausprobieren. Der Provisionssatz entspricht dem in Medienberichten
          genannten Bereich von rund 13 % (ohne Auslieferung durch die Plattform); die Gebühr des Portals ist
          noch nicht festgelegt.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <NumberField
            id="revenue"
            label="Umsatz über Plattformen pro Monat"
            value={revenue}
            step={100}
            suffix="€"
            onChange={setRevenue}
          />
          <NumberField
            id="commission"
            label="Provision der Plattform"
            value={commission}
            step={0.5}
            suffix="%"
            onChange={setCommission}
          />
          <NumberField id="fee" label="Feste Gebühr (Platzhalter)" value={fee} suffix="€ / Monat" onChange={setFee} />
        </div>

        <dl className="mt-6 grid gap-4 sm:grid-cols-3" aria-live="polite">
          <div className="rounded-xl bg-stone-100 p-4">
            <dt className="text-sm text-stone-600">Kosten mit Provision</dt>
            <dd className="text-2xl font-bold tabular-nums">{formatEuro(commissionCost)}</dd>
          </div>
          <div className="rounded-xl bg-stone-100 p-4">
            <dt className="text-sm text-stone-600">Kosten mit fester Gebühr</dt>
            <dd className="text-2xl font-bold tabular-nums">{formatEuro(fee)}</dd>
          </div>
          <div className="rounded-xl bg-brand-50 p-4">
            <dt className="text-sm text-brand-800">{diff >= 0 ? "Ersparnis pro Monat" : "Mehrkosten pro Monat"}</dt>
            <dd className="text-2xl font-bold tabular-nums text-brand-800">{formatEuro(Math.abs(diff))}</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-2xl bg-brand-50 p-6">
        <h2 className="text-xl font-bold text-brand-800">Interesse?</h2>
        <p className="mt-2 text-stone-700">
          Das Portal ist noch eine Demo. Wenn Sie früh dabei sein möchten, melden Sie sich bei Hasi Elektronic:{" "}
          <a className="font-medium text-brand-800 underline" href="mailto:info@hasi-elektronic.de">
            info@hasi-elektronic.de
          </a>
        </p>
      </section>
    </div>
  );
}
