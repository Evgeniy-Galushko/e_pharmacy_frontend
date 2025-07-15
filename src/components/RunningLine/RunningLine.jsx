import s from "./RunningLine.module.css";
import sprite from "../../../public/icon-sprite.svg";

export default function RunningLine() {
  const items = [
    "Take user orders form online",
    "Create your shop profile",
    "Manage your store",
    "Get more orders",
    "Storage shed",
  ];

  const loopItems = [...items, ...items, ...items];

  return (
    <div className={s.marquee}>
      <div className={s.marqueeInner}>
        {loopItems.map((text, i) => (
          <p className={s.marqueeLine} key={i}>
            <svg width={20} height={20} className={s.icon}>
              <use href={`${sprite}#icon-lightning-01`} />
            </svg>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
