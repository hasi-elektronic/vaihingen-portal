const eur = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

export function formatCents(cents: number): string {
  return eur.format(cents / 100);
}

export function formatEuro(value: number): string {
  return eur.format(value);
}
