import { useEffect } from "react";
import s from "./MedicineStores.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentNearestStore } from "../../redux/user/operations.js";
import { selectIsLoading, selectNearest } from "../../redux/user/selectors.js";
import { RingLoader } from "react-spinners";
import NearestShopItem from "../NearestShopItem/NearestShopItem.jsx";

export default function MedicineStores() {
  const dispatch = useDispatch();
  const nearest = useSelector(selectNearest);
  const isloading = useSelector(selectIsLoading);

  // console.log(nearest);

  useEffect(() => {
    dispatch(currentNearestStore());
  }, [dispatch]);

  return (
    <section className={s.stores}>
      <h2 className={s.title}>Your Nearest Medicine Store</h2>
      <p className={s.paragraph}>
        Search for Medicine, Filter by your location
      </p>
      {isloading ? (
        <RingLoader color="#59b17a" className={s.spinners} size={35} />
      ) : (
        <ul className={s.listShop}>
          {nearest.map(({ _id, address, city, name, phone, rating }) => {
            return (
              <li key={_id} className={s.boxOneShop}>
                <NearestShopItem
                  id={_id}
                  address={address}
                  city={city}
                  name={name}
                  phone={phone}
                  rating={rating}
                />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
