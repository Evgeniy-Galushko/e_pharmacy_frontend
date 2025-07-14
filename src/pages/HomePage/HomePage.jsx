import MainBanner from "../../components/MainBanner/MainBanner.jsx";
import MedicineStores from "../../components/MedicineStores/MedicineStores.jsx";
import PromoBanners from "../../components/PromoBanners/PromoBanners.jsx";
// import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
    </section>
  );
}
