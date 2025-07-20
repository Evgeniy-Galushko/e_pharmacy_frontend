import { useSelector } from "react-redux";
import s from "./ReviewsProduct.module.css";
import { selectOneMedicine } from "../../redux/product/selectors.js";
import sprite from "../../img/icon-sprite.svg";
import { Pagination_star } from "../../utils/pagination_star.js";
import clsx from "clsx";

export default function ReviewsProduct() {
  const product = useSelector(selectOneMedicine);
  const review = product.reviews;
  if (!review) return;

  function FinishedRow(number) {
    const parsNumber = parseInt(number);
    if (parsNumber === 5) {
      const arrayNumbers = Pagination_star(parsNumber);
      const starLine = arrayNumbers.map((star, index) => {
        return (
          <svg width={16} height={16} key={index}>
            <use href={`${sprite}#icon-star`} />
          </svg>
        );
      });
      return starLine;
    }

    if (number < 5) {
      const parsNumber = parseInt(number);
      const arrayNumbersGold = Pagination_star(parsNumber);
      const arrayNumbersGrey = Pagination_star(5 - parsNumber);

      const gold = arrayNumbersGold.map((star, index) => {
        return (
          <svg width={16} height={16} key={index}>
            <use href={`${sprite}#icon-star`} />
          </svg>
        );
      });

      const grey = arrayNumbersGrey.map((star, index) => {
        return (
          <svg width={16} height={16} key={index}>
            <use href={`${sprite}#icon-star_grey`} />
          </svg>
        );
      });

      const line = [...gold, ...grey];
      return line;
    }
  }

  return review.length === 0 ? (
    <p className={s.noReviews}>No reviews</p>
  ) : (
    review.map(({ name, photo, date, rating, review }, index) => {
      return (
        <ul key={index} className={s.oneReviw}>
          <li>
            <ul className={s.boxImgName}>
              <li>
                <ul className={s.boxAvatar}>
                  <li>
                    <img className={s.avatar} src={photo} alt={name} />
                  </li>
                  <li>
                    <h3 className={s.name}>{name}</h3>
                    <p className={s.date}>{date}</p>
                  </li>
                </ul>
              </li>
              <li className={clsx(s.boxRating, s.boxRatingSeven)}>
                {FinishedRow(rating)}
                <p className={s.rating}>{rating}</p>
              </li>
              <li className={clsx(s.boxRating, s.boxRatingThree)}>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-star`} />
                </svg>
                <p className={s.rating}>{rating}</p>
              </li>
            </ul>
          </li>
          <li>
            <p className={s.review}>{review}</p>
          </li>
        </ul>
      );
    })
  );
}
