import MedicinesItem from "../MedicinesItem/MedicinesItem.jsx";
import s from "./MedicinesList.module.css";
import sprite from "../../img/icon-sprite.svg";
import { RingLoader } from "react-spinners";

export default function MedicinesList({ product, isLoading }) {
  if (!product) return;

  return (
    <>
      {isLoading ? (
        <RingLoader color="#59b17a" className={s.spinners} size={50} />
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
