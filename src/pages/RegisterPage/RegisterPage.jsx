import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import Title from "../../components/Title/Title.jsx";
import s from "./RegisterPage.module.css";
import { selectError, selectToken } from "../../redux/user/selectors.js";
import { useEffect, useState } from "react";
import { registrationRequest } from "../../redux/user/operations.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { resetError } from "../../redux/user/slice.js";

export default function RegisterPage() {
  const [userData, setUserData] = useState({});
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(registrationRequest(userData));
    if (token) {
      navigation("/cart");
    }

    if (error) {
      if (error.includes("409")) {
        toast.error("You have already registered!");
        dispatch(resetError());
      }
    }
  }, [dispatch, userData, token]);

  return (
    <section className={s.sectionRegister}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <ul className={s.register}>
        <li>
          <Title />
        </li>
        <li>
          <RegistrationForm setUserData={setUserData} />
        </li>
      </ul>
    </section>
  );
}
