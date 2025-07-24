import OrderForm from "../../components/OrderForm/OrderForm.jsx";
import s from "./CartPage.module.css";

export default function CartPage() {
  return (
    <section className={s.sectionCart}>
      <h2 className={s.titleCart}>Cart</h2>
      <ul>
        <li>
          <OrderForm />
        </li>
        <li></li>
      </ul>
    </section>
  );
}
