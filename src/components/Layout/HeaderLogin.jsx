import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./HeaderLogin.module.scss";

export default function HeaderLogin() {
  const navigate = useNavigate();
  const { isLogin, handleLogout } = useAuth();

  return (
    <div className={styles.wrapper}>
      {isLogin ? (
        <button className={styles.logout} onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <>
          <button onClick={() => navigate("/login")} className={styles.login}>
            로그인
          </button>
          <button
            onClick={() => navigate("/pre-signup")}
            className={styles.signup}
          >
            회원가입
          </button>
        </>
      )}
    </div>
  );
}
