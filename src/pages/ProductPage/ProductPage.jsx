import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./ProductPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { requestById } from "../../redux/product/operations.js";
import { selectOneMedicine } from "../../redux/product/selectors.js";
import sprite from "../../img/icon-sprite.svg";

export default function ProductPage() {
  const [quantityOfProduct, setQuantityOfProduct] = useState(1);
  const { produstId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectOneMedicine);

  // console.log(product);
  const { _id, photo, name, price, suppliers, stock } = product;

  useEffect(() => {
    dispatch(requestById(produstId));
  }, [dispatch]);

  const handlePlusProduct = () => {
    setQuantityOfProduct(quantityOfProduct + 1);
  };

  const handleMinusProduct = () => {
    setQuantityOfProduct(quantityOfProduct - 1);
  };

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <section className={s.sectionProduct}>
      <ul className={s.productBox}>
        <li>
          <img className={s.img} src={photo} alt="" width={335} />
        </li>
        <li className={s.characteristics}>
          <ul>
            <li className={s.boxNamePrice}>
              <h2 className={s.namePrice}>{name}</h2>
              <p className={s.namePrice}> &#x09F3; {price}</p>
            </li>
            <li>
              <p className={s.suppliers}>Brand: {suppliers}</p>
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
                  <button className={s.buttonAdd} type="button">
                    Add to cart
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <NavLink to={`/product/${_id}/description`}>Description</NavLink>
              <NavLink to={`/product/${_id}/reviews`}>Reviews</NavLink>
            </li>
            <li>
              <Outlet />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
