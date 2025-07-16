import { useDispatch, useSelector } from "react-redux";
import MainBanner from "../../components/MainBanner/MainBanner.jsx";
import MedicineStores from "../../components/MedicineStores/MedicineStores.jsx";
import PharmacyPromoSection from "../../components/PharmacyPromoSection/PharmacyPromoSection.jsx";
import PromoBanners from "../../components/PromoBanners/PromoBanners.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import RunningLine from "../../components/RunningLine/RunningLine.jsx";
import {
  selectIsLoading,
  selectNearest,
  selectReviews,
} from "../../redux/user/selectors.js";
import { useEffect } from "react";
import {
  currentNearestStore,
  currentReviews,
} from "../../redux/user/operations.js";
// import s from "./HomePage.module.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const nearest = useSelector(selectNearest);
  const reviews = useSelector(selectReviews);
  const isloading = useSelector(selectIsLoading);

  // console.log(reviews);

  useEffect(() => {
    dispatch(currentNearestStore());
    dispatch(currentReviews());
  }, [dispatch]);
  return (
    <section>
      <MainBanner />
      <PromoBanners />
      <MedicineStores isloading={isloading} nearest={nearest} />
      <PharmacyPromoSection />
      <RunningLine />
      <Reviews reviews={reviews} />
    </section>
  );
}
