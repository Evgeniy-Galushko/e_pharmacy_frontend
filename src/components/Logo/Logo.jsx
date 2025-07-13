import { NavLink, useLocation } from "react-router-dom";
import s from "./Logo.module.css";
import clsx from "clsx";

export default function Logo({ footer }) {
  const location = useLocation();

  return (
    <ul className={s.logo}>
      {footer ? (
        <li>
          {location.pathname !== "/home" ? (
            <picture>
              <source srcSet="/logo_mob.png" media="(max-width: 767px)" />
              <source srcSet="/logo_pc_tab.png" media="(min-width: 768px)" />
              <img src="/logo_mob.png" alt="logo" />
            </picture>
          ) : (
            <picture>
              <source srcSet="/logo_white_mob.png" media="(max-width: 767px)" />
              <source
                srcSet="/logo_white_pc_tab.png"
                media="(min-width: 768px)"
              />
              <img src="/logo_white_mob.png" alt="logo" />
            </picture>
          )}
        </li>
      ) : (
        <li>
          <picture>
            <source srcSet="/logo_white_mob.png" media="(max-width: 767px)" />
            <source
              srcSet="/logo_white_pc_tab.png"
              media="(min-width: 768px)"
            />
            <img src="/logo_white_mob.png" alt="logo" />
          </picture>
        </li>
      )}
      <li>
        <NavLink
          to="/home"
          className={
            footer
              ? clsx(s.title, location.pathname !== "/home" && s.titleWhite)
              : s.title
          }
        >
          E-Pharmacy
        </NavLink>
      </li>
    </ul>
  );
}
