import { useDispatch, useSelector } from "react-redux";
import s from "./MedicineStorePage.module.css";
import { useEffect } from "react";
import { currentStores } from "../../redux/user/operations.js";
import { selectIsLoading, selectStores } from "../../redux/user/selectors.js";
import NearestShopItem from "../../components/NearestShopItem/NearestShopItem.jsx";
import { RingLoader } from "react-spinners";

export default function MedicineStorePage() {
  const dispatch = useDispatch();
  const stores = useSelector(selectStores);
  const isloading = useSelector(selectIsLoading);

  console.log(stores);

  useEffect(() => {
    dispatch(currentStores());
  }, [dispatch]);
  return (
    <section className={s.medicineStorePage}>
      <h1 className={s.titleStore}>Medicine store</h1>
      {isloading ? (
        <RingLoader color="#59b17a" className={s.spinners} size={55} />
      ) : (
        <ul className={s.listShop}>
          {stores.map(({ _id, address, city, name, phone, rating }) => {
            return (
              <li key={_id} className={s.boxOneShop}>
                <NearestShopItem
                  id={_id}
                  address={address}
                  city={city}
                  name={name}
                  phone={phone}
                  rating={rating}
                  storesBullean={true}
                />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
