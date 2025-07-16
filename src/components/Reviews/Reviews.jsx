import { RingLoader } from "react-spinners";
import s from "./Reviews.module.css";

export default function Reviews({ reviews, isloading }) {
  if (!reviews) return;

  return (
    <section className={s.reviews}>
      <h2 className={s.titleReviews}>Reviews</h2>
      <p className={s.paragraphReviews}>
        Search for Medicine, Filter by your location
      </p>
      {isloading ? (
        <RingLoader color="#59b17a" className={s.spinners} size={35} />
      ) : (
        <ul className={s.boxReviews}>
          {reviews.map(({ img, name, _id, testimonial }) => {
            return (
              <li key={_id} className={s.oneCardReviews}>
                <img src={img} alt={name} className={s.imgReviews} />
                <h3 className={s.name}>{name}</h3>
                <p className={s.testimonial}>{testimonial}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
