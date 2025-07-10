import { NavLink, Outlet } from "react-router-dom";
import s from "./SharedLayout.module.css";
import sprite from "../../../public/icon-sprite.svg";

export default function SharedLayout() {
  return (
    <>
      <header>
        <NavLink to="/home">HomePage</NavLink>
        <NavLink to="/medicine-store">Medicine store</NavLink>
        <NavLink to="/medicine">Medicine</NavLink>

        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">LoginPage</NavLink>

        <p>Heder</p>

        <svg className={s.titleIcon}>
          <use href={`${sprite}#icon-map-pin`} />
        </svg>
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
