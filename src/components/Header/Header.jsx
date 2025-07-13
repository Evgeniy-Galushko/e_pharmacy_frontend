import s from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import NavigationLinks from "../NavigationLinks/NavigationLinks.jsx";
import AuthenticationLinks from "../AuthenticationLinks/AuthenticationLinks.jsx";
import UserNav from "../UserNav/UserNav.jsx";
import sprite from "../../../public/icon-sprite.svg";
import { useState } from "react";

export default function Header() {
  const [modalMenu, setModalMenu] = useState(false);
  const location = useLocation();
  const token = false;

  const openModal = () => {
    setModalMenu(true);
  };

  const closeModal = () => {
    setModalMenu(false);
  };

  return (
    <ul
      className={clsx(s.header, location.pathname === "/home" && s.headerGreen)}
    >
      <li>
        <Logo footer={true} />
      </li>
      <li className={s.boxButtonMenu}>
        <button className={s.buttonMenu} type="button" onClick={openModal}>
          {location.pathname === "/home" ? (
            <svg className={s.icon} width={32} height={26}>
              <use href={`${sprite}#icon-align-justifyWhite`} />
            </svg>
          ) : (
            <svg className={s.icon} width={32} height={26}>
              <use href={`${sprite}#icon-align-justify`} />
            </svg>
          )}
        </button>
      </li>
      <li className={s.navigationLinks}>
        <NavigationLinks direction={false} />
      </li>
      <li className={s.authentication}>
        {token ? <UserNav /> : <AuthenticationLinks direction={false} />}
      </li>

      {modalMenu && (
        <li className={s.menu}>
          <ul className={s.boxMenu}>
            <li>
              <button
                type="button"
                onClick={closeModal}
                className={s.buttonClose}
              >
                <svg className={s.icon} width={32} height={32}>
                  <use href={`${sprite}#icon-x`} />
                </svg>
              </button>
            </li>
            <li>
              <NavigationLinks closeModal={closeModal} direction={true} />
            </li>
            <li>
              {token ? (
                <NavLink
                  to="/home"
                  className={s.buttonLogoOut}
                  onClick={closeModal}
                >
                  Log out
                </NavLink>
              ) : (
                <AuthenticationLinks direction={true} closeModal={closeModal} />
              )}
            </li>
          </ul>
        </li>
      )}
    </ul>
  );
}
