import s from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import NavigationLinks from "../NavigationLinks/NavigationLinks.jsx";
import AuthenticationLinks from "../AuthenticationLinks/AuthenticationLinks.jsx";
import UserNav from "../UserNav/UserNav.jsx";
import sprite from "../../img/icon-sprite.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../redux/user/selectors.js";
import { requestToLogout } from "../../redux/user/operations.js";
import UserNavMob from "../UserNavMob/UserNavMob.jsx";

export default function Header() {
  const [modalMenu, setModalMenu] = useState(false);
  const location = useLocation();
  const token = useSelector(selectToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(requestToLogout());
    navigate("/home");
    setModalMenu(false);
  };

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
        <Link to="/home">
          <Logo footer={true} />
        </Link>
      </li>
      <li className={s.boxButtonMenu}>
        {token && <UserNavMob />}
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
                <button
                  type="button"
                  onClick={handleLogout}
                  className={s.buttonLogoOut}
                >
                  Log out
                </button>
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
