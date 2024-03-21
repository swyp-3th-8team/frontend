import { useNavigate } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import styles from "./Header.module.scss";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  return (
    <header className={styles.wrapper}>
      {isLogin ? (
        <img src="img/logo.svg" alt="" onClick={() => navigate("/mando")} />
      ) : (
        <img src="img/logo.svg" alt="" onClick={() => navigate("/")} />
      )}
      <HeaderLogin />
    </header>
  );
}
