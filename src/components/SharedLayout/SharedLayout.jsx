import { NavLink, Outlet, useLocation } from "react-router-dom";
import s from "./SharedLayout.module.css";

import Header from "../Header/Header.jsx";
import clsx from "clsx";
import Footer from "../Footer/Footer.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAllsOder } from "../../redux/order/operations.js";
import { selectError } from "../../redux/order/selectors.js";
import { resetToken } from "../../redux/user/slice.js";

export default function SharedLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(requestAllsOder());

    if (error) {
      if (error.includes(401)) {
        dispatch(resetToken());
      }
    }
  }, [dispatch, error]);

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
