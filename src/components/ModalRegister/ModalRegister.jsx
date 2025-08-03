import s from "./ModalRegister.module.css";
import Modal from "react-modal";
import sprite from "../../img/icon-sprite.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { selectError } from "../../redux/user/selectors.js";
import { useNavigate } from "react-router-dom";
import { registrationRequest } from "../../redux/user/operations.js";

export default function ModalRegister({
  isOpen,
  onClose,
  handleOpenModalLogin,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  if (error) {
    if (error.includes("409")) {
      toast.error("You have already registered!");
    }
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(25, 26, 21, 0.3)",
    },
    content: {
      border: "none",
      overflow: "auto",
      padding: "0px",
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
    dispatch(registrationRequest(values));

    navigation("/cart");

    onClose();

    actions.resetForm();
  };

  const handleClickShowPaswwor = () => {
    setShowPassword(true);
  };

  const handleClickNoShowPaswwor = () => {
    setShowPassword(false);
  };

  const handleOpenRegiste = () => {
    onClose();
    handleOpenModalLogin();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <button type="button" onClick={onClose} className={s.buttonClose}>
        <svg width={24} height={24}>
          <use href={`${sprite}#icon-x-black`} />
        </svg>
      </button>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div className={s.divTitle}>
            <h2 className={s.titleModal}>Sign Up</h2>
            <p className={s.paragraphForm}>
              Before proceeding, please register on our site.
            </p>
          </div>
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
              autoComplete="username"
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
              autoComplete="tel"
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
              autoComplete="new-password"
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
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleOpenRegiste}
              className={s.buttonLogin}
            >
              Already have an account?
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}
