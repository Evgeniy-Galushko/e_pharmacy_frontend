import { NavLink, useLocation } from "react-router-dom";
import s from "./AuthenticationLinks.module.css";
import clsx from "clsx";

export default function AuthenticationLinks({ direction, closeModal }) {
  const location = useLocation();

  return (
    <ul
      className={clsx(
        s.boxAuthentication,
        direction && s.boxAuthenticationMenu
      )}
    >
      <li>
        <NavLink
          className={clsx(
            s.link,
            direction
              ? s.linkMenu
              : location.pathname !== "/home" && s.linkWhite
          )}
          to="/register"
          onClick={direction && closeModal}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={clsx(
            s.link,
            direction
              ? s.linkMenu
              : location.pathname !== "/home" && s.linkWhite
          )}
          to="/login"
          onClick={direction && closeModal}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
}
