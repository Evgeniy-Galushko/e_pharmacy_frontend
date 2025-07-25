import { useSelector } from "react-redux";
import s from "./UserNavMob.module.css";
import sprite from "../../img/icon-sprite.svg";
import { selectUser } from "../../redux/user/selectors.js";
import { selectBasket } from "../../redux/order/selectors.js";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function UserNavMob() {
  const user = useSelector(selectUser);
  const basket = useSelector(selectBasket);

  return (
    <ul className={s.boxUserNav}>
      <li className={s.containerBasket}>
        <p className={s.itemsInCart}>{basket.length}</p>
        <NavLink
          className={clsx(location.pathname === "/home" ? s.linkWhite : s.link)}
          to="/cart"
        >
          <svg className={s.icon}>
            <use href={`${sprite}#icon-shopping-cart`} />
          </svg>
        </NavLink>
      </li>
      <li>
        <p
          className={clsx(
            s.userName,
            location.pathname === "/home" && s.userNameWhite
          )}
        >
          {user.name.slice(0, 1)}
        </p>
      </li>
    </ul>
  );
}
