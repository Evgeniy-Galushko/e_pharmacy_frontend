import { NavLink, Outlet, useLocation } from "react-router-dom";
import s from "./SharedLayout.module.css";
import sprite from "../../../public/icon-sprite.svg";
import Header from "../Header/Header.jsx";
import clsx from "clsx";

export default function SharedLayout() {
  const location = useLocation();

  return (
    <>
      <header className={clsx(location.pathname === "/home" && s.header)}>
        <Header />

        {/* <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">LoginPage</NavLink> */}

        {/* <svg className={s.titleIcon}>
          <use href={`${sprite}#icon-map-pin`} />
        </svg> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
