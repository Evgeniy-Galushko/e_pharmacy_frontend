import s from "./NearestShopItem.module.css";
import sprite from "../../../public/icon-sprite.svg";

export default function NearestShopItem({
  id,
  address,
  city,
  name,
  phone,
  rating,
}) {
  return (
    <ul className={s.direction}>
      <li>
        <ul>
          <li>
            <h3 className={s.titleShop}>
              {name.length < 12 ? name : `${name.slice(0, 12)}...`}
            </h3>
          </li>
          <li className={s.location}>
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-map-pin`} />
            </svg>
            <div className={s.divAddress}>
              <p className={s.locationPhoneShop}>{address}</p>
              <p className={s.locationPhoneShop}>{city}</p>
            </div>
          </li>
          <li className={s.phone}>
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-phone`} />
            </svg>
            <p className={s.locationPhoneShop}>{phone}</p>
          </li>
        </ul>
      </li>
      <li className={s.rating}>
        <svg width={18} height={18}>
          <use href={`${sprite}#icon-star`} />
        </svg>
        <p className={s.ratingShop}>{rating}</p>
        {new Date().getHours() >= 8 && new Date().getHours() < 20 ? (
          <p className={s.workingHoursOpen}>open</p>
        ) : (
          <p className={s.workingHoursClose}>close</p>
        )}
      </li>
    </ul>
  );
}
