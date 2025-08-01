import { useState } from "react";
import sprite from "../../img/icon-sprite.svg";
import s from "./OrderItem.module.css";
import { useDispatch } from "react-redux";
import { updateOrderQuantity } from "../../redux/order/slice.js";
import { deleteProductRequest } from "../../redux/order/operations.js";

export default function OrderItem({
  id,
  photo,
  name,
  price,
  suppliers,
  stock,
  quantity,
}) {
  const [quantityOfProduct, setQuantityOfProduct] = useState(quantity);
  const dispatch = useDispatch();

  const handlePlusProduct = (_id) => {
    setQuantityOfProduct(quantityOfProduct + 1);
    dispatch(updateOrderQuantity({ _id, quantity: quantityOfProduct + 1 }));
  };

  const handleMinusProduct = (_id) => {
    setQuantityOfProduct(quantityOfProduct - 1);
    dispatch(updateOrderQuantity({ _id, quantity: quantityOfProduct - 1 }));
  };

  const handleDeleteProduct = (idProduct) => {
    // setDeleteProductId(idProduct);
    dispatch(deleteProductRequest(idProduct));
  };
  return (
    <>
      <img className={s.imgBasket} src={photo} alt={name} />
      <ul className={s.boxCharacteristics}>
        <li className={s.boxPrice}>
          <div>
            <h3 className={s.title}>{name}</h3>
            <p className={s.suppliers}> {suppliers} </p>
          </div>
          <p className={s.price}>&#x09F3; {price}</p>
        </li>
        <li className={s.boxButton}>
          <div className={s.buttonPlusMinus}>
            <button
              className={s.buttonPlus}
              type="button"
              onClick={() => {
                handlePlusProduct(id);
              }}
              disabled={quantityOfProduct >= stock && true}
            >
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </button>
            <p className={s.number}>{quantityOfProduct}</p>
            <button
              className={s.buttonMinus}
              type="button"
              onClick={() => {
                handleMinusProduct(id);
              }}
              disabled={quantityOfProduct <= 1 && true}
            >
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-minus`} />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className={s.removeButton}
            onClick={() => {
              handleDeleteProduct(id);
            }}
          >
            Remove
          </button>
        </li>
      </ul>
    </>
  );
}
