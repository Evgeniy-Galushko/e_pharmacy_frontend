import s from "./LoginPage.module.css";
import { useSelector } from "react-redux";
import Title from "../../components/Title/Title.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { selectToken } from "../../redux/user/selectors.js";

export default function LoginPage() {
  // const [userData, setUserData] = useState({});
  // const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigation = useNavigate();

  useEffect(() => {
    // dispatch(loginRequest(userData));
    if (token) {
      navigation("/cart");
    }
  }, [token]);

  return (
    <section className={s.sectionLogin}>
      <ul className={s.login}>
        <li>
          <Title />
        </li>
        <li>
          <LoginForm />
        </li>
      </ul>
    </section>
  );
}
