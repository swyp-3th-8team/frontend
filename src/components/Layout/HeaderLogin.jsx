import { useNavigate } from "react-router-dom";
import styles from "./HeaderLogin.module.scss";

export default function HeaderLogin() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <button onClick={() => navigate("/login")} className={styles.login}>
        로그인
      </button>
      <button onClick={() => navigate("/pre-signup")} className={styles.signup}>
        회원가입
      </button>
    </div>
  );
}
