import { NavLink } from "react-router-dom";
import s from "./NavigationLinks.module.css";
import clsx from "clsx";

export default function NavigationLinks({ direction, closeModal }) {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <ul className={clsx(s.navigateBox, direction && s.navigateMenu)}>
      <li className={s.navLink}>
        <NavLink
          className={buildLinkClass}
          to="/home"
          onClick={direction && closeModal}
        >
          Home
        </NavLink>
      </li>
      <li className={clsx(s.connector, direction && s.connectorMenu)}></li>
      <li className={s.navLink}>
        <NavLink
          className={buildLinkClass}
          to="/medicine-store"
          onClick={direction && closeModal}
        >
          Medicine store
        </NavLink>
      </li>
      <li
        className={clsx(s.connectorTwo, direction && s.connectorTwoMenu)}
      ></li>
      <li className={s.navLink}>
        <NavLink
          className={buildLinkClass}
          to="/medicine"
          onClick={direction && closeModal}
        >
          Medicine
        </NavLink>
      </li>
    </ul>
  );
}
