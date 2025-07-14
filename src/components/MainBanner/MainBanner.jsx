import s from "./MainBanner.module.css";

export default function MainBanner() {
  return (
    <ul className={s.mainBanner}>
      <li>
        <h1 className={s.title}>Your medication delivered</h1>
      </li>
      <li>
        <p className={s.paragraph}>
          Say goodbye to all your healthcare worries with us
        </p>
      </li>
    </ul>
  );
}
