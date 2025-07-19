import { NavLink } from "react-router-dom";
import s from "./MedicinesItem.module.css";

export default function MedicinesItem({ id, name, photo, price, suppliers }) {
  return (
    <ul className={s.card}>
      <li>
        <img src={photo} alt={name} className={s.img} />
      </li>
      <li className={s.description}>
        <ul>
          <li className={s.namePrice}>
            <h2 className={s.namePriceMedicines}>{name}</h2>
            <p className={s.namePriceMedicines}> &#x09F3; {price}</p>
          </li>
          <li>
            <p className={s.suppliers}>{suppliers}</p>
          </li>
          <li className={s.cartDetails}>
            <button className={s.button}>Add to cart</button>{" "}
            <NavLink to={`/product/${id}`} className={s.link}>
              Details
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
}
