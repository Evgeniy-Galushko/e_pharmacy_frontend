import s from "./ShoppingList.module.css";
import OrderItem from "../OrderItem/OrderItem.jsx";

export default function ShoppingList({ basket }) {
  if (!basket) return;

  return (
    <ul className={s.containerList}>
      {basket.map(({ _id, photo, name, price, suppliers, stock, quantity }) => {
        return (
          <li key={_id} className={s.oneCard}>
            <OrderItem
              photo={photo}
              name={name}
              price={price}
              suppliers={suppliers}
              stock={stock}
              quantity={quantity}
            />
          </li>
        );
      })}
    </ul>
  );
}
