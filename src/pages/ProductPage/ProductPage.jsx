import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./ProductPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { requestById } from "../../redux/product/operations.js";
import { selectOneMedicine } from "../../redux/product/selectors.js";
import sprite from "../../img/icon-sprite.svg";
import clsx from "clsx";
import {
  addToCartRequest,
  requestAllsOder,
} from "../../redux/order/operations.js";
import { selectRrorProduct } from "../../redux/order/selectors.js";
import toast, { Toaster } from "react-hot-toast";

export default function ProductPage() {
  const [quantityOfProduct, setQuantityOfProduct] = useState(1);
  const { produstId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectOneMedicine);
  const error = useSelector(selectRrorProduct);

  // console.log(product);
  const { _id, photo, name, price, suppliers, stock } = product;

  useEffect(() => {
    dispatch(requestById(produstId));

    if (error) {
      toast.error("The product has already been added");
    }
  }, [dispatch, produstId, error]);

  const handlePlusProduct = () => {
    setQuantityOfProduct(quantityOfProduct + 1);
  };

  const handleMinusProduct = () => {
    setQuantityOfProduct(quantityOfProduct - 1);
  };

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  const handleClickAddCart = () => {
    dispatch(addToCartRequest({ id: produstId, quantity: quantityOfProduct }));
    dispatch(requestAllsOder());
  };

  return (
    <section className={s.sectionProduct}>
      <Toaster
        toastOptions={{
          className: "",
          duration: 3000,
          style: {},
        }}
      />
      <ul className={s.productBox}>
        <li>
          <ul className={s.boxProd}>
            <li>
              <img className={s.img} src={photo} alt="" width={335} />
            </li>
            <li className={s.characteristics}>
              <ul>
                <li>
                  <ul className={s.boxNamePrice}>
                    <li>
                      <h2 className={s.namePrice}>{name}</h2>
                      <p className={s.suppliers}>Brand: {suppliers}</p>
                    </li>
                    <li>
                      <p className={s.namePrice}> &#x09F3; {price}</p>
                    </li>
                  </ul>
                </li>
                <li className={s.boxAddToCart}>
                  <ul className={s.boxButton}>
                    <li className={s.buttonPlusMinus}>
                      <button
                        className={s.buttonPlus}
                        type="button"
                        onClick={handlePlusProduct}
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
                        onClick={handleMinusProduct}
                        disabled={quantityOfProduct <= 1 && true}
                      >
                        <svg width={20} height={20}>
                          <use href={`${sprite}#icon-minus`} />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                        className={s.buttonAdd}
                        type="button"
                        onClick={handleClickAddCart}
                      >
                        Add to cart
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul className={s.partReviews}>
            <li className={s.boxLink}>
              <NavLink
                className={buildLinkClass}
                to={`/product/${_id}/description`}
              >
                Description
              </NavLink>
              <NavLink
                className={buildLinkClass}
                to={`/product/${_id}/reviews`}
              >
                Reviews
              </NavLink>
            </li>
            <li className={s.boxOutlet}>
              <Outlet />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
