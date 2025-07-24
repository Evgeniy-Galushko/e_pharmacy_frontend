import { NavLink, useLocation, useNavigate } from "react-router-dom";
import sprite from "../../img/icon-sprite.svg";
import s from "./UserNav.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { requestToLogout } from "../../redux/user/operations.js";
import { selectUser } from "../../redux/user/selectors.js";

export default function UserNav() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  if (!user) return;

  const handleLogout = () => {
    dispatch(requestToLogout());
    navigate("/home");
  };

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
          {user.name.slice(0, 1)}
        </p>
      </li>
      <li>
        <button
          type="button"
          onClick={handleLogout}
          className={clsx(
            s.button,
            location.pathname === "/home" && s.buttonWhite
          )}
        >
          Log out
        </button>
      </li>
    </ul>
  );
}
