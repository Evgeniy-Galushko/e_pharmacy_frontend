import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import sprite from "../../img/icon-sprite.svg";
import { useState } from "react";

export default function RegistrationForm({ setUserData }) {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const format = {
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    phoneNumber: /^\+38\d{10}$/,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .matches(format.email, "Email is incorrect!")
      .required("Enter a valid Email"),
    phoneNumber: Yup.string()
      .matches(format.phoneNumber, "Too Short!")
      .required("+38"),
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
            name="name"
            type="text"
            placeholder="User Name"
            required
            className={s.input}
          />
          <ErrorMessage
            className={s.errorMessage}
            name="name"
            component="span"
          />
        </div>
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
            name="phoneNumber"
            type="tel"
            placeholder="Phone number"
            required
            className={s.input}
          />
          <ErrorMessage
            className={s.errorMessage}
            name="phoneNumber"
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
              onClick={handleClickNoShowPaswwor}
              className={s.buttonShowPassword}
            >
              <svg className={s.icon} width={16} height={16}>
                <use href={`${sprite}#icon-eye`} />
              </svg>
            </button>
          ) : (
            <button
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
            Register
          </button>
          <p className={s.paragraph}>Already have an account?</p>
        </div>
      </Form>
    </Formik>
  );
}
