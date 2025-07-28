import { NavLink } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={s.notFoundPage}>
      <ul>
        <li>
          <p className={s.paragraph}>Ooops! </p>
          <p className={s.paragraph}>This page not found :(</p>
        </li>
        <li className={s.boxLink}>
          <NavLink className={s.linkHome} to="/home">
            To home page
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
