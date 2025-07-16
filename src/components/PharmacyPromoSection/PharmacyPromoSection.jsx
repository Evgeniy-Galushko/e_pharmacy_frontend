import { NavLink } from "react-router-dom";
import s from "./PharmacyPromoSection.module.css";

export default function PharmacyPromoSection() {
  return (
    <section className={s.sectionPharmacy}>
      <ul>
        <li>
          <h3 className={s.titlePharmacy}>
            Add the medicines you need online now
          </h3>
        </li>
        <li>
          <p className={s.paragraphPharmacy}>
            Enjoy the convenience of having your prescriptions filled from home
            by connecting with your community pharmacy through our online
            platform.
          </p>
        </li>
        <li>
          <NavLink className={s.linkPharmacy} to="/medicine-store">
            Buy medicine
          </NavLink>
        </li>
      </ul>
      <picture className={s.imgPharmacy}>
        <source
          srcSet="/medicines_img_mob_1x.png 1x, /medicines_img_mob_2x.png 2x"
          media="(max-width: 767px)"
        />
        <source
          srcSet="/medicines_img_tab_pc_1x.png 1x, /medicines_img_tab_pc_2x.png 2x"
          media="(min-width: 768px)"
        />
        <img src="/medicines_img_mob_1x.png" alt="medicines" />
      </picture>
    </section>
  );
}
