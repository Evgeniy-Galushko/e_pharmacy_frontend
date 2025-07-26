import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./OrderForm.module.css";
import * as Yup from "yup";
import { useId } from "react";

export default function OrderForm({ orderAmount, basket, setOrder }) {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const addressId = useId();
  const paymentId = useId();
  const paymentIdBank = useId();

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    paymentMethod: "",
  };

  const format = {
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    phoneNumber: /^\+38\d{10}$/,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .matches(format.email, "Email is incorrect!")
      .required("Enter a valid Email"),
    phoneNumber: Yup.string()
      .matches(format.phoneNumber, "Too Short!")
      .required("+38"),
    address: Yup.string().required("Required"),
    paymentMethod: Yup.string().required("Required"),
  });

  const handleSubmit = (values, actions) => {
    // console.log({
    //   ...values,
    //   order_date: new Date().toString().slice(4, 15),
    //   products: basket,
    //   price: orderAmount.toFixed(2),
    // });

    setOrder({
      ...values,
      order_date: new Date().toString().slice(4, 15),
      products: basket,
      price: orderAmount.toFixed(2),
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <h3 className={s.titleContainer}>Enter shipping info </h3>
        <p className={s.paragraph}>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </p>
        <ul className={s.boxInfo}>
          <li className={s.boxInput}>
            <label className={s.titleInput} htmlFor={nameId}>
              Name
            </label>
            <Field
              className={s.input}
              id={nameId}
              name="name"
              type="text"
              placeholder="Enter name"
              required
            />
            <ErrorMessage
              className={s.errorMessage}
              name="name"
              component="span"
            />
          </li>
          <li className={s.boxInput}>
            <label className={s.titleInput} htmlFor={emailId}>
              Email
            </label>
            <Field
              className={s.input}
              id={emailId}
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
            <ErrorMessage
              className={s.errorMessage}
              name="email"
              component="span"
            />
          </li>
          <li className={s.boxInput}>
            <label className={s.titleInput} htmlFor={phoneId}>
              Phone
            </label>
            <Field
              className={s.input}
              id={phoneId}
              name="phoneNumber"
              type="tel"
              placeholder="Enter phone"
              required
            />
            <ErrorMessage
              className={s.errorMessage}
              name="phoneNumber"
              component="span"
            />
          </li>
          <li className={s.boxInput}>
            <label className={s.titleInput} htmlFor={phoneId}>
              Address
            </label>
            <Field
              className={s.input}
              id={addressId}
              name="address"
              type="text"
              placeholder="Enter address"
              required
            />
            <ErrorMessage
              className={s.errorMessage}
              name="address"
              component="span"
            />
          </li>
        </ul>
        <div className={s.boxPayment}>
          <h3 className={s.titleContainer}>Payment method</h3>
          <p className={s.paragraph}>
            You can pay us in a multiple way in our payment gateway system.
          </p>

          <ul className={s.boxRadio}>
            <li className={s.radioContainer}>
              <Field
                className={s.radio}
                id={paymentId}
                name="paymentMethod"
                type="radio"
                value="Cash On Delivery"
                required
              />
              <label className={s.radioLabel} htmlFor={paymentId}>
                Cash On Delivery
              </label>
            </li>
            <li className={s.radioContainer}>
              <Field
                className={s.radio}
                id={paymentIdBank}
                name="paymentMethod"
                type="radio"
                value="Bank"
                required
              />
              <label className={s.radioLabel} htmlFor={paymentIdBank}>
                Bank
              </label>
              <ErrorMessage
                className={s.errorMessage}
                name="paymentMethod"
                component="span"
              />
            </li>
          </ul>
        </div>
        <div>
          <h3 className={s.titleContainer}>Order details </h3>
          <p className={s.paragraph}>
            Shipping and additionnal costs are calculated based on values you
            have entered.
          </p>
          <ul className={s.boxTotal}>
            <li>
              <p className={s.paragraphTotal}>Total:</p>
            </li>
            <li>
              <p className={s.paragraphTotal}>
                &#x09F3; {orderAmount.toFixed(2)}
              </p>
            </li>
          </ul>
        </div>
        <button className={s.buttonSubmit} type="submit">
          Place order
        </button>
      </Form>
    </Formik>
  );
}
