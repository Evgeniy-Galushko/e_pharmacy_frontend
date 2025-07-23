import OrderForm from "../../components/OrderForm/OrderForm.jsx";
import s from "./CartPage.module.css";

export default function CartPage() {
  return (
    <section className={s.sectionCart}>
      <h1>Cart</h1>
      <ul>
        <li>
          <OrderForm />
        </li>
        <li></li>
      </ul>
    </section>
  );
}
