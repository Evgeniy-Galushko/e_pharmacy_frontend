import s from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import NavigationLinks from "../NavigationLinks/NavigationLinks.jsx";

export default function Header() {
  const location = useLocation();

  return (
    <ul
      className={clsx(s.header, location.pathname === "/home" && s.headerGreen)}
    >
      <li>
        <Logo />
      </li>
      <li className={s.navigationLinks}>
        <NavigationLinks />
      </li>
    </ul>
  );
}
