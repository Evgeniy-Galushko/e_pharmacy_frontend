import { Field, Form, Formik } from "formik";
import s from "./SearchMedicines.module.css";
import sprite from "../../img/icon-sprite.svg";
import clsx from "clsx";

export default function SearchMedicines() {
  const initialValues = {
    search: "",
    category: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue, values }) => (
        <Form className={s.form}>
          <Field
            as="select"
            name="category"
            className={clsx(s.select, values.category !== "" && s.color)}
          >
            <option value="">Product category</option>
            <option value="medicine">medicine</option>
            <option value="heart">heart</option>
            <option value="head">head</option>
            <option value="hand">hand</option>
            <option value="leg">leg</option>
            <option value="skin care">skin care</option>
            <option value="dental care">dental care</option>
          </Field>
          <svg width={16} height={16} className={s.iconArrow}>
            <use href={`${sprite}#icon-fi-rr-angle-small-left`} />
          </svg>

          <Field
            type="text"
            name="search"
            placeholder="Search medicine"
            className={s.search}
          />
          <svg width={16} height={16} className={s.iconSearch}>
            <use href={`${sprite}#icon-search`} />
          </svg>
          <button className={s.buttonSubmit}>
            <svg width={14} height={14}>
              <use href={`${sprite}#icon-filter`} />
            </svg>
            Filter
          </button>
        </Form>
      )}
    </Formik>
  );
}
