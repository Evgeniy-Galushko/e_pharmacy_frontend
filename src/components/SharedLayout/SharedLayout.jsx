import { NavLink, Outlet, useLocation } from "react-router-dom";
import s from "./SharedLayout.module.css";

import Header from "../Header/Header.jsx";
import clsx from "clsx";
import Footer from "../Footer/Footer.jsx";

export default function SharedLayout() {
  const location = useLocation();

  return (
    <>
      <header className={clsx(location.pathname === "/home" && s.header)}>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={s.footer}>
        <Footer />
      </footer>
    </>
  );
}
