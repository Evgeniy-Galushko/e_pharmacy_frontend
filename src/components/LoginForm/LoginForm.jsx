import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import sprite from "../../img/icon-sprite.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginForm({ setUserData }) {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const format = {
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(format.email, "Email is incorrect!")
      .required("Enter a valid Email"),
  });

  const handleSubmit = (values, actions) => {
    setUserData(values);
    // console.log(values);

    actions.resetForm();
  };

  const handleClickShowPaswwor = () => {
    setShowPassword(true);
  };

  const handleClickNoShowPaswwor = () => {
    setShowPassword(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.boxInput}>
          <Field
            name="email"
            type="email"
            placeholder="Email address"
            required
            className={s.input}
          />
          <ErrorMessage
            className={s.errorMessage}
            name="email"
            component="span"
          />
        </div>
        <div className={s.boxInput}>
          <Field
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className={s.input}
          />
          {showPassword ? (
            <button
              type="button"
              onClick={handleClickNoShowPaswwor}
              className={s.buttonShowPassword}
            >
              <svg className={s.icon} width={16} height={16}>
                <use href={`${sprite}#icon-eye`} />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleClickShowPaswwor}
              className={s.buttonShowPassword}
            >
              <svg className={s.icon} width={16} height={16}>
                <use href={`${sprite}#icon-eye-off`} />
              </svg>
            </button>
          )}
          <ErrorMessage
            className={s.errorMessage}
            name="password"
            component="span"
          />
        </div>
        <div className={s.boxButton}>
          <button className={s.buttonSubmit} type="submit">
            Log in
          </button>
          <NavLink to="/register" className={s.paragraph}>
            Don't have an account?
          </NavLink>
        </div>
      </Form>
    </Formik>
  );
}
