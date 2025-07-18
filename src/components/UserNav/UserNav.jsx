import { NavLink, useLocation } from "react-router-dom";
import sprite from "../../img/icon-sprite.svg";
import s from "./UserNav.module.css";
import clsx from "clsx";

export default function UserNav() {
  const location = useLocation();
  console.log(location.pathname === "/home");
  return (
    <ul className={s.boxUserNav}>
      <li>
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
          U
        </p>
      </li>
      <li>
        <NavLink
          to="/home"
          className={clsx(
            s.button,
            location.pathname === "/home" && s.buttonWhite
          )}
        >
          Log out
        </NavLink>
      </li>
    </ul>
  );
}
