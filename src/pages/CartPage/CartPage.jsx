import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../../components/OrderForm/OrderForm.jsx";
import s from "./CartPage.module.css";
import { useEffect, useState } from "react";
import {
  deleteProductRequest,
  requestAllsOder,
} from "../../redux/order/operations.js";
import {
  selecDdeleteProduct,
  selectBasket,
  selectPlacedOrder,
} from "../../redux/order/selectors.js";
import ShoppingList from "../../components/ShoppingList/ShoppingList.jsx";
import toast, { Toaster } from "react-hot-toast";

export default function CartPage() {
  const [deleteProductId, setDeleteProductId] = useState("");
  // const [order, setOrder] = useState({});
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
  const deleteProduct = useSelector(selecDdeleteProduct);
  const placedOrder = useSelector(selectPlacedOrder);

  // console.log(placedOrder);
  useEffect(() => {
    if (deleteProduct === 204) {
      toast.success("Product removed");
    }
  }, [deleteProduct]);

  useEffect(() => {
    if (placedOrder) {
      toast.success("Order placed");
    }
  }, [placedOrder]);

  useEffect(() => {
    dispatch(deleteProductRequest(deleteProductId));
    dispatch(requestAllsOder());
  }, [dispatch, deleteProductId]);

  const orderAmount = basket.reduce((total, basket) => {
    return total + basket.quantity * basket.price;
  }, 0);

  return (
    <section className={s.sectionCart}>
      <Toaster
        toastOptions={{
          className: "",
          duration: 4000,
          style: {},
        }}
      />
      <h2 className={s.titleCart}>Cart</h2>
      <ul className={s.boxCart}>
        <li>
          <OrderForm orderAmount={orderAmount} basket={basket} />
        </li>
        <li>
          <ShoppingList
            setDeleteProductId={setDeleteProductId}
            basket={basket}
          />
        </li>
      </ul>
    </section>
  );
}
