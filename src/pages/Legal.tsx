const note = "rounded-lg bg-brand-amber/25 p-3 text-sm";
const link = "font-semibold text-brand-red underline";

export function Impressum() {
  return (
    <article className="max-w-2xl space-y-4">
      <h1 className="display text-4xl">Impressum</h1>
      <p className={note}>Demo-Entwurf, nur auf Deutsch. Vor einem Live-Betrieb rechtlich prüfen lassen.</p>
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
        <a className={link} href="mailto:info@hasi-elektronic.de">
          info@hasi-elektronic.de
        </a>
      </p>
      <p className="text-sm text-ink-soft">
        Diese Seite ist eine unverbindliche Demonstration. Die genannten Restaurants sind keine Vertragspartner.
        Angaben zu Restaurants stammen aus öffentlich zugänglichen Quellen und können veraltet sein.
      </p>
    </article>
  );
}

export function Datenschutz() {
  return (
    <article className="max-w-2xl space-y-4">
      <h1 className="display text-4xl">Datenschutz</h1>
      <p className={note}>Demo-Entwurf, nur auf Deutsch. Vor einem Live-Betrieb rechtlich prüfen lassen.</p>
      <h2 className="display text-2xl">Was diese Demo speichert</h2>
      <p>
        Diese Seite setzt keine Cookies, nutzt keine Tracker und keine Analysedienste. Schriften werden von diesem
        Server geladen, nicht von Drittanbietern. Eingaben (Suche, Warenkorb) bleiben im Browser und werden nicht
        übertragen. Die gewählte Sprache (DE/TR) wird lokal im Browser gespeichert.
      </p>
      <h2 className="display text-2xl">Hosting</h2>
      <p>
        Die Seite wird über Cloudflare ausgeliefert. Dabei können technisch notwendige Server-Logdaten (z. B.
        IP-Adresse, Zeitpunkt, aufgerufene Seite) verarbeitet werden.
      </p>
      <h2 className="display text-2xl">Externe Links</h2>
      <p>
        Der Link „Auf Karte ansehen“ öffnet Google Maps in einem neuen Tab. Erst mit dem Klick werden Daten an Google
        übermittelt.
      </p>
      <h2 className="display text-2xl">Kontakt</h2>
      <p>
        Verantwortlich: Hasi Elektronic, Grabenstraße 18, 71665 Vaihingen an der Enz,{" "}
        <a className={link} href="mailto:info@hasi-elektronic.de">
          info@hasi-elektronic.de
        </a>
      </p>
    </article>
  );
}
