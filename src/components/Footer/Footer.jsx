import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import s from "./Footer.module.css";
import sprite from "../../img/icon-sprite.svg";

export default function Footer() {
  return (
    <div className={s.footer}>
      <ul className={s.boxLogoNav}>
        <li>
          <Logo footer={false} />
          <p className={s.paragraph}>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </p>
        </li>
        <li>
          <ul className={s.boxNavSocial}>
            <li className={s.boxNav}>
              <NavLink className={s.link} to="/home">
                Home
              </NavLink>

              <NavLink className={s.link} to="/medicine-store">
                Medicine store
              </NavLink>

              <NavLink className={s.link} to="/medicine">
                Medicine
              </NavLink>
            </li>
            <li>
              <ul className={s.socialMedia}>
                <li>
                  <a
                    href="https://www.facebook.com/goITclub/"
                    target="blank"
                    className={s.socialMediaLink}
                  >
                    <svg className={s.icon} width={28} height={28}>
                      <use href={`${sprite}#icon-facebook`} />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/goitclub/"
                    target="blank"
                    className={s.socialMediaLink}
                  >
                    <svg className={s.icon} width={28} height={28}>
                      <use href={`${sprite}#icon-instagram`} />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/GoIT"
                    target="blank"
                    className={s.socialMediaLink}
                  >
                    <svg className={s.icon} width={28} height={28}>
                      <use href={`${sprite}#icon-youtube`} />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <div className={s.line}></div>
      <ul className={s.privacyPolicy}>
        <li>
          <p className={s.paragraphPolicy}>
            &#169; E-Pharmacy 2023. All Rights Reserved
          </p>
        </li>
        <li className={s.border}>
          <p className={s.paragraphPolicy}>Privacy Policy</p>
        </li>
        <li>
          <p className={s.paragraphPolicy}>Terms & Conditions</p>
        </li>
      </ul>
    </div>
  );
}
