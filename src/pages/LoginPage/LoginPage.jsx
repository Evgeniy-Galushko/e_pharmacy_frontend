import s from "./LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title/Title.jsx";
import { selectToken } from "../../redux/user/selectors.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { loginRequest } from "../../redux/user/operations.js";

export default function LoginPage() {
  const [userData, setUserData] = useState({});
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // console.log(token);
  // console.log(userData);

  useEffect(() => {
    dispatch(loginRequest(userData));
    navigation();
  }, [dispatch, userData]);

  // console.log(userData);

  return (
    <section className={s.sectionLogin}>
      <ul className={s.login}>
        <li>
          <Title />
        </li>
        <li>
          <LoginForm setUserData={setUserData} />
        </li>
      </ul>
    </section>
  );
}
