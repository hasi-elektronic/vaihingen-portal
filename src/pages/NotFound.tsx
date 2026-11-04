import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Seite nicht gefunden</h1>
      <p className="text-stone-700">Diese Seite oder dieses Restaurant gibt es nicht.</p>
      <Link to="/" className="font-medium text-brand-800 underline">
        Zur Startseite
      </Link>
    </div>
  );
}
