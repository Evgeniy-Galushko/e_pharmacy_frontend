import { useSelector } from "react-redux";
import MedicinesItem from "../MedicinesItem/MedicinesItem.jsx";
import s from "./MedicinesList.module.css";
import { RingLoader } from "react-spinners";
import { selectIsLoading } from "../../redux/product/selectors.js";

export default function MedicinesList({
  product,
  // isLoading,
  handleOpenModalLogin,
}) {
  const isLoading = useSelector(selectIsLoading);
  if (!product) return;

  return (
    <>
      {isLoading ? (
        <RingLoader color="#59b17a" className={s.spinners} size={50} />
      ) : product.length === 0 ? (
        <h2 className={s.nothingFound}>Nothing was found for your request</h2>
      ) : (
        <ul className={s.istOfMedicines}>
          {product.map(
            ({ category, name, photo, price, stock, suppliers, _id }) => {
              return (
                <li key={_id} className={s.oneCardMedicines}>
                  <MedicinesItem
                    id={_id}
                    category={category}
                    name={name}
                    photo={photo}
                    price={price}
                    stock={stock}
                    suppliers={suppliers}
                    handleOpenModalLogin={handleOpenModalLogin}
                  />
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
}
