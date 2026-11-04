import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import RestaurantWerden from "./pages/RestaurantWerden";
import { Datenschutz, Impressum } from "./pages/Legal";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="r/:slug" element={<RestaurantPage />} />
        <Route path="restaurant-werden" element={<RestaurantWerden />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
