import s from "./ShoppingList.module.css";
import OrderItem from "../OrderItem/OrderItem.jsx";

export default function ShoppingList({ basket, setDeleteProductId }) {
  if (!basket) return;

  return (
    <>
      {basket.length === 0 ? (
        <h3 className={s.titleCart}>You have no items in your cart!</h3>
      ) : (
        <ul className={s.containerList}>
          {basket.map(
            ({ _id, photo, name, price, suppliers, stock, quantity }) => {
              return (
                <li key={_id} className={s.oneCard}>
                  <OrderItem
                    photo={photo}
                    name={name}
                    price={price}
                    suppliers={suppliers}
                    stock={stock}
                    quantity={quantity}
                    id={_id}
                    setDeleteProductId={setDeleteProductId}
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
