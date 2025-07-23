import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./OrderForm.module.css";
import * as Yup from "yup";
import { useId } from "react";

export default function OrderForm() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const addressId = useId();
  const paymentId = useId();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "",
  };

  const format = {
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    phone: /^\+38\d{10}$/,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .matches(format.email, "Email is incorrect!")
      .required("Enter a valid Email"),
    phone: Yup.string().matches(format.phone, "Too Short!").required("+38"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Enter shipping info </h2>
        <p>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </p>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field
            id={nameId}
            name="name"
            type="text"
            placeholder="Enter name"
            required
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={emailId}>Email</label>
          <Field
            id={emailId}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label htmlFor={phoneId}>Phone</label>
          <Field
            id={phoneId}
            name="phone"
            type="tel"
            placeholder="Enter phone"
            required
          />
          <ErrorMessage name="phone" component="span" />
        </div>
        <div>
          <label htmlFor={phoneId}>Address</label>
          <Field
            id={addressId}
            name="address"
            type="text"
            placeholder="Enter address"
            required
          />
          <ErrorMessage name="address" component="span" />
        </div>
        <div>
          <p>Payment method</p>
          <p>You can pay us in a multiple way in our payment gateway system.</p>

          <Field
            id={paymentId}
            name="paymentMethod"
            type="radio"
            value="Cash On Delivery"
            required
          />
          <label htmlFor={paymentId}>Cash On Delivery</label>
          <Field
            id={paymentId}
            name="paymentMethod"
            type="radio"
            value="Bank"
            required
          />
          <label htmlFor={paymentId}>Bank</label>
          <ErrorMessage name="address" component="span" />
        </div>

        <div>
          <h3>Order details </h3>
          <p>
            Shipping and additionnal costs are calculated based on values you
            have entered.
          </p>
          <ul>
            <li>
              <p>Total:</p>
            </li>
            <li>
              <p>total</p>
            </li>
          </ul>
        </div>

        <button type="submit">Place order</button>
      </Form>
    </Formik>
  );
}
