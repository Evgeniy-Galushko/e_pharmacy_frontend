import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import Title from "../../components/Title/Title.jsx";
import s from "./RegisterPage.module.css";
import { selectToken } from "../../redux/user/selectors.js";
import { useEffect, useState } from "react";
import { registrationRequest } from "../../redux/user/operations.js";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [userData, setUserData] = useState({});
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(registrationRequest(userData));
    if (token) {
      navigation("/cart");
    }
  }, [dispatch, userData, token]);

  // console.log(userData);

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
