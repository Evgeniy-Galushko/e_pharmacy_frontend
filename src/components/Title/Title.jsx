import s from "./Title.module.css";

export default function Title() {
  return (
    <div className={s.boxTitle}>
      <h1 className={s.title}>
        Your medication, delivered Say goodbye to all{" "}
        <span className={s.titleColor}>your healthcare</span> worries with us
      </h1>
    </div>
  );
}
