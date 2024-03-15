import { useNavigate } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import styles from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.wrapper}>
      <img src="img/logo.svg" alt="" onClick={() => navigate("/")} />
      <HeaderLogin />
    </header>
  );
}
