import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "de" | "tr";

const de = {
  "nav.start": "Start",
  "nav.owners": "Für Restaurants",
  "nav.contact": "Kontakt",
  "nav.aria": "Hauptnavigation",
  "lang.aria": "Sprache wählen",
  "demo.bar": "Demo – nicht live. Es werden keine echten Bestellungen aufgenommen.",

  "home.eyebrow": "Vaihingen an der Enz · Lokal bestellen",
  "home.h1a": "Bestell lokal.",
  "home.h1b": "Ohne Provision,",
  "home.h1c": "direkt beim Restaurant.",
  "home.lead":
    "Ein Portal für die Restaurants in Vaihingen. Die Wirte zahlen eine feste Gebühr statt Prozente vom Umsatz.",
  "home.cta": "Restaurants ansehen",
  "home.ctaOwners": "Für Restaurants",
  "home.statRestaurants": "Restaurants",
  "home.statCommission": "Provision",
  "home.archTag": "Lokal · Fair · Direkt",
  "home.list": "Restaurants",
  "home.searchLabel": "Restaurant oder Straße suchen",
  "home.searchPh": "z. B. Pizza, Grabenstraße, Kebap",
  "home.all": "Alle",
  "home.filterAria": "Nach Küche filtern",
  "home.noResults": "Keine Treffer. Versuche einen anderen Suchbegriff oder setze den Filter zurück.",
  "home.owner": "Du betreibst ein Restaurant?",
  "card.menu": "Speisekarte ansehen",

  "r.back": "Alle Restaurants",
  "r.hours": "Öffnungszeiten",
  "r.hoursNote": "Nach öffentlichen Angaben, ohne Gewähr.",
  "r.hoursNone": "Zeiten bitte direkt beim Restaurant erfragen.",
  "r.map": "Auf Karte ansehen (öffnet Google Maps)",
  "r.menuTitle": "Beispiel-Speisekarte",
  "r.menuNote": "Platzhalter für die Demo – keine echte Speisekarte und keine echten Preise.",
  "r.cart": "Deine Bestellung",
  "r.empty": "Noch nichts ausgewählt.",
  "r.sum": "Summe",
  "r.send": "Demo-Bestellung absenden",
  "r.sent": "Das ist eine Demo: Es wurde keine Bestellung ausgelöst und nichts an das Restaurant übermittelt.",
  "r.add": "hinzufügen",
  "r.remove": "entfernen",

  "w.eyebrow": "Für Restaurants",
  "w.title": "Sichtbar sein, ohne Provision zu zahlen.",
  "w.lead":
    "Das Vaihingen Bestellportal bündelt die Restaurants der Stadt an einem Ort. Du zahlst eine feste Gebühr. Von deinem Umsatz bleibt alles bei dir.",
  "w.p1t": "0 % Provision",
  "w.p1d": "Feste Gebühr statt Anteil am Umsatz. Die Kosten bleiben planbar, auch wenn mehr bestellt wird.",
  "w.p2t": "Bestellung direkt beim Restaurant",
  "w.p2d": "Bestellung und Zahlung laufen über dein eigenes System und dein eigenes Konto. Das Portal vermittelt nur.",
  "w.p3t": "Eigene Auslieferung bleibt bei dir",
  "w.p3d": "Kein Fahrerpool, keine Fremdlogistik. Du legst Liefergebiet und Mindestbestellwert selbst fest.",
  "w.calcTitle": "Rechenbeispiel",
  "w.calcNote":
    "Alle Werte sind Platzhalter zum Ausprobieren. Der Provisionssatz entspricht dem in Medienberichten genannten Bereich von rund 13 % (ohne Auslieferung durch die Plattform); die Gebühr des Portals ist noch nicht festgelegt.",
  "w.revenue": "Umsatz über Plattformen pro Monat",
  "w.commission": "Provision der Plattform",
  "w.fee": "Feste Gebühr (Platzhalter)",
  "w.perMonth": "€ / Monat",
  "w.costCommission": "Kosten mit Provision",
  "w.costFee": "Kosten mit fester Gebühr",
  "w.saving": "Ersparnis pro Monat",
  "w.extra": "Mehrkosten pro Monat",
  "w.interestTitle": "Interesse?",
  "w.interest": "Das Portal ist noch eine Demo. Wenn du früh dabei sein möchtest, melde dich bei Hasi Elektronic:",

  "f.disclaimer":
    "Alle Einträge beruhen auf öffentlich zugänglichen Angaben (Stand 04.11.2026, ohne Gewähr). Die gelisteten Restaurants sind keine Partner dieses Demo-Portals. Speisekarten und Preise sind Beispielwerte.",
  "f.optout": "Du möchtest nicht gelistet sein? Kurze Mail an",
  "f.optout2": "– der Eintrag wird entfernt.",
  "f.credit": "Demo von Hasi Elektronic, Vaihingen an der Enz",
  "f.imprint": "Impressum",
  "f.privacy": "Datenschutz",

  "nf.title": "Seite nicht gefunden",
  "nf.text": "Diese Seite oder dieses Restaurant gibt es nicht.",
  "nf.home": "Zur Startseite",

  "cuisine.Kebap & Türkisch": "Kebap & Türkisch",
  "cuisine.Pizza & Italienisch": "Pizza & Italienisch",
  "cuisine.Burger": "Burger",
  "cuisine.Asiatisch": "Asiatisch",
  "cuisine.Mediterran": "Mediterran",
  "cuisine.Deutsch & Schwäbisch": "Deutsch & Schwäbisch",
  "cuisine.International": "International",
} as const;

export type Key = keyof typeof de;

const tr: Record<Key, string> = {
  "nav.start": "Başlangıç",
  "nav.owners": "Restoranlar için",
  "nav.contact": "İletişim",
  "nav.aria": "Ana gezinme",
  "lang.aria": "Dil seç",
  "demo.bar": "Demo – canlı değil. Gerçek sipariş alınmaz.",

  "home.eyebrow": "Vaihingen an der Enz · Yerel sipariş",
  "home.h1a": "Yerelden sipariş ver.",
  "home.h1b": "Komisyonsuz,",
  "home.h1c": "doğrudan restorandan.",
  "home.lead":
    "Vaihingen'daki restoranlar için tek bir portal. İşletmeler cirodan yüzde değil, sabit bir ücret öder.",
  "home.cta": "Restoranlara bak",
  "home.ctaOwners": "Restoranlar için",
  "home.statRestaurants": "Restoran",
  "home.statCommission": "Komisyon",
  "home.archTag": "Yerel · Adil · Doğrudan",
  "home.list": "Restoranlar",
  "home.searchLabel": "Restoran veya sokak ara",
  "home.searchPh": "örn. Pizza, Grabenstraße, Kebap",
  "home.all": "Tümü",
  "home.filterAria": "Mutfağa göre filtrele",
  "home.noResults": "Sonuç yok. Başka bir arama dene veya filtreyi sıfırla.",
  "home.owner": "Bir restoranın var mı?",
  "card.menu": "Menüyü gör",

  "r.back": "Tüm restoranlar",
  "r.hours": "Çalışma saatleri",
  "r.hoursNote": "Herkese açık bilgilere göre, garanti verilmez.",
  "r.hoursNone": "Saatleri lütfen doğrudan restorandan öğren.",
  "r.map": "Haritada gör (Google Maps açılır)",
  "r.menuTitle": "Örnek menü",
  "r.menuNote": "Demo için yer tutucu – gerçek menü ve gerçek fiyat değildir.",
  "r.cart": "Siparişin",
  "r.empty": "Henüz bir şey seçilmedi.",
  "r.sum": "Toplam",
  "r.send": "Demo siparişi gönder",
  "r.sent": "Bu bir demo: Sipariş verilmedi ve restorana hiçbir şey iletilmedi.",
  "r.add": "ekle",
  "r.remove": "çıkar",

  "w.eyebrow": "Restoranlar için",
  "w.title": "Komisyon ödemeden görünür ol.",
  "w.lead":
    "Vaihingen Bestellportal, şehrin restoranlarını tek yerde toplar. Sabit bir ücret ödersin. Cirondan her şey sende kalır.",
  "w.p1t": "%0 komisyon",
  "w.p1d": "Cirodan pay yerine sabit ücret. Sipariş arttıkça da maliyet öngörülebilir kalır.",
  "w.p2t": "Sipariş doğrudan restorana",
  "w.p2d": "Sipariş ve ödeme kendi sistemin ve kendi hesabın üzerinden yürür. Portal sadece aracılık eder.",
  "w.p3t": "Teslimat sende kalır",
  "w.p3d": "Kurye havuzu yok, dış lojistik yok. Teslimat bölgesini ve asgari sipariş tutarını sen belirlersin.",
  "w.calcTitle": "Hesap örneği",
  "w.calcNote":
    "Tüm değerler denemek için yer tutucudur. Komisyon oranı, medyada geçen yaklaşık %13 aralığına denk gelir (platformun teslimatı olmadan); portalın ücreti henüz belirlenmedi.",
  "w.revenue": "Platformlar üzerinden aylık ciro",
  "w.commission": "Platform komisyonu",
  "w.fee": "Sabit ücret (yer tutucu)",
  "w.perMonth": "€ / ay",
  "w.costCommission": "Komisyonla maliyet",
  "w.costFee": "Sabit ücretle maliyet",
  "w.saving": "Aylık tasarruf",
  "w.extra": "Aylık ek maliyet",
  "w.interestTitle": "İlgin var mı?",
  "w.interest": "Portal henüz bir demo. Erken katılmak istersen Hasi Elektronic'e yaz:",

  "f.disclaimer":
    "Tüm kayıtlar herkese açık bilgilere dayanır (04.11.2026 itibarıyla, garanti verilmez). Listelenen restoranlar bu demo portalın ortağı değildir. Menüler ve fiyatlar örnek değerlerdir.",
  "f.optout": "Listede olmak istemiyor musun? Kısa bir e-posta yeter:",
  "f.optout2": "– kayıt kaldırılır.",
  "f.credit": "Hasi Elektronic demosu, Vaihingen an der Enz",
  "f.imprint": "Impressum",
  "f.privacy": "Gizlilik",

  "nf.title": "Sayfa bulunamadı",
  "nf.text": "Bu sayfa veya restoran yok.",
  "nf.home": "Ana sayfaya",

  "cuisine.Kebap & Türkisch": "Kebap & Türk mutfağı",
  "cuisine.Pizza & Italienisch": "Pizza & İtalyan",
  "cuisine.Burger": "Burger",
  "cuisine.Asiatisch": "Uzak Doğu",
  "cuisine.Mediterran": "Akdeniz",
  "cuisine.Deutsch & Schwäbisch": "Alman & Schwaben",
  "cuisine.International": "Uluslararası",
};

const DICTS: Record<Lang, Record<Key, string>> = { de, tr };
const STORAGE_KEY = "vp-lang";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: Key) => string;
}

const Ctx = createContext<LangCtx | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "de" || saved === "tr") return saved;
  } catch {
    /* Speicher nicht verfügbar */
  }
  return "de";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignorieren */
    }
  }, []);

  const value = useMemo<LangCtx>(
    () => ({ lang, setLang, t: (key) => DICTS[lang][key] }),
    [lang, setLang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLang muss innerhalb von LangProvider verwendet werden");
  return v;
}
