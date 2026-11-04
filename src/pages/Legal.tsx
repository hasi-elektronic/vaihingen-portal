export function Impressum() {
  return (
    <article className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold">Impressum</h1>
      <p className="rounded-lg bg-amber-100 p-3 text-sm text-amber-950">
        Demo-Entwurf. Vor einem Live-Betrieb rechtlich prüfen lassen.
      </p>
      <p>
        Hasi Elektronic
        <br />
        Grabenstraße 18
        <br />
        71665 Vaihingen an der Enz
      </p>
      <p>
        Telefon: 07042/16391
        <br />
        E-Mail:{" "}
        <a className="text-brand-800 underline" href="mailto:info@hasi-elektronic.de">
          info@hasi-elektronic.de
        </a>
      </p>
      <p className="text-sm text-stone-600">
        Diese Seite ist eine unverbindliche Demonstration. Die genannten Restaurants sind keine Vertragspartner.
        Angaben zu Restaurants stammen aus öffentlich zugänglichen Quellen und können veraltet sein.
      </p>
    </article>
  );
}

export function Datenschutz() {
  return (
    <article className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold">Datenschutz</h1>
      <p className="rounded-lg bg-amber-100 p-3 text-sm text-amber-950">
        Demo-Entwurf. Vor einem Live-Betrieb rechtlich prüfen lassen.
      </p>
      <h2 className="text-xl font-bold">Was diese Demo speichert</h2>
      <p>
        Diese Seite setzt keine Cookies, nutzt keine Tracker und keine Analysedienste. Schriften werden von
        diesem Server geladen, nicht von Drittanbietern. Eingaben (Suche, Warenkorb) bleiben im Browser und
        werden nicht übertragen.
      </p>
      <h2 className="text-xl font-bold">Hosting</h2>
      <p>
        Die Seite wird über Cloudflare Pages ausgeliefert. Dabei können technisch notwendige Server-Logdaten
        (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite) verarbeitet werden.
      </p>
      <h2 className="text-xl font-bold">Externe Links</h2>
      <p>
        Der Link „Auf Karte ansehen“ öffnet Google Maps in einem neuen Tab. Erst mit dem Klick werden Daten an
        Google übermittelt.
      </p>
      <h2 className="text-xl font-bold">Kontakt</h2>
      <p>
        Verantwortlich: Hasi Elektronic, Grabenstraße 18, 71665 Vaihingen an der Enz,{" "}
        <a className="text-brand-800 underline" href="mailto:info@hasi-elektronic.de">
          info@hasi-elektronic.de
        </a>
      </p>
    </article>
  );
}
