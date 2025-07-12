import { NavLink, useLocation } from "react-router-dom";
import s from "./AuthenticationLinks.module.css";
import clsx from "clsx";

export default function AuthenticationLinks() {
  const location = useLocation();

  return (
    <ul className={s.boxAuthentication}>
      <li>
        <NavLink
          className={clsx(s.link, location.pathname !== "/home" && s.linkWhite)}
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={clsx(s.link, location.pathname !== "/home" && s.linkWhite)}
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
}
