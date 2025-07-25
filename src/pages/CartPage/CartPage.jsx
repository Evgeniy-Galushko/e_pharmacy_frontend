import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../../components/OrderForm/OrderForm.jsx";
import s from "./CartPage.module.css";
import { useEffect } from "react";
import { requestAllsOder } from "../../redux/order/operations.js";
import { selectBasket } from "../../redux/order/selectors.js";
import ShoppingList from "../../components/ShoppingList/ShoppingList.jsx";

export default function CartPage() {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  console.log(basket);

  useEffect(() => {
    dispatch(requestAllsOder());
  }, [dispatch]);

  const orderAmount = basket.reduce((total, basket) => {
    return total + basket.quantity * basket.price;
  }, 0);

  return (
    <section className={s.sectionCart}>
      <h2 className={s.titleCart}>Cart</h2>
      <ul className={s.boxCart}>
        <li>
          <OrderForm orderAmount={orderAmount} />
        </li>
        <li>
          <ShoppingList basket={basket} />
        </li>
      </ul>
    </section>
  );
}
