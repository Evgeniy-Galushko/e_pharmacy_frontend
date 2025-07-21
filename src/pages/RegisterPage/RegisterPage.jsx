import { useDispatch, useSelector } from "react-redux";
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

  console.log(token);

  useEffect(() => {
    dispatch(registrationRequest(userData));
    navigation();
  }, [dispatch, userData]);

  // console.log(userData);

  return (
    <section className={s.sectionRegister}>
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
