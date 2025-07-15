import MainBanner from "../../components/MainBanner/MainBanner.jsx";
import MedicineStores from "../../components/MedicineStores/MedicineStores.jsx";
import PharmacyPromoSection from "../../components/PharmacyPromoSection/PharmacyPromoSection.jsx";
import PromoBanners from "../../components/PromoBanners/PromoBanners.jsx";
import RunningLine from "../../components/RunningLine/RunningLine.jsx";
// import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
      <PharmacyPromoSection />
      <RunningLine />
    </section>
  );
}
