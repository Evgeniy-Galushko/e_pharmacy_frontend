import Modal from "react-modal";
import s from "./ModalLogin.module.css";
import sprite from "../../img/icon-sprite.svg";
import * as Yup from "yup";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";

export default function ModalLogin({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(25, 26, 21, 0.3)",
    },
    content: {
      border: "none",
      overflow: "auto",
      padding: "40px",
      borderRadius: "30px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

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
    // setUserData(values);
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <button type="button" onClick={onClose}>
        <svg width={20} height={20}>
          <use href={`${sprite}#icon-x-black`} />
        </svg>
      </button>

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
            <button type="button" className={s.paragraph}>
              Don't have an account?
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}
