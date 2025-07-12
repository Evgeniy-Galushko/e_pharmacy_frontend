import { NavLink } from "react-router-dom";
import s from "./NavigationLinks.module.css";
import clsx from "clsx";

export default function NavigationLinks() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <ul className={s.navigateBox}>
      <li className={s.navLink}>
        <NavLink className={buildLinkClass} to="/home">
          Home
        </NavLink>
      </li>
      <li className={s.connector}></li>
      <li className={s.navLink}>
        <NavLink className={buildLinkClass} to="/medicine-store">
          Medicine store
        </NavLink>
      </li>
      <li className={s.connectorTwo}></li>
      <li className={s.navLink}>
        <NavLink className={buildLinkClass} to="/medicine">
          Medicine
        </NavLink>
      </li>
    </ul>
  );
}
