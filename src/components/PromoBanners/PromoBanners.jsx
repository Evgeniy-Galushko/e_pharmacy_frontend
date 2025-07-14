import s from "./PromoBanners.module.css";

export default function PromoBanners() {
  return (
    <ul className={s.promoBaner}>
      <li className={s.boxPromo}>
        <ul className={s.oneCard}>
          <li className={s.hugeSale}>
            <p className={s.number}>1</p>
            <p className={s.paragraph}>Huge Sale</p>
          </li>
          <li className={s.hugeSaleDiscount}>
            <p className={s.discount}>70%</p>
            <button className={s.link}>Shop now</button>
          </li>
        </ul>
      </li>
      <li className={s.boxPromo}>
        <ul className={s.oneCard}>
          <li className={s.hugeSale}>
            <p className={s.number}>2</p>
            <p className={s.paragraph}>Secure delivery</p>
          </li>
          <li className={s.hugeSaleDiscount}>
            <p className={s.discount}>100%</p>
            <button className={s.link}>Read more</button>
          </li>
        </ul>
      </li>
      <li className={s.boxPromo}>
        <ul className={s.oneCard}>
          <li className={s.hugeSale}>
            <p className={s.number}>3</p>
            <p className={s.paragraph}>Off</p>
          </li>
          <li className={s.hugeSaleDiscount}>
            <p className={s.discount}>35%</p>
            <button className={s.link}>Shop now</button>
          </li>
        </ul>
      </li>
    </ul>
  );
}
