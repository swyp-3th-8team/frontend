import Button from "../components/Button";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className={styles.continer}>
      <div className={styles.loginIntro}>
        <h1>로그인</h1>
        <div>나만의 만다라트를 실천하기 위한</div>
        <div>투두리스트를 세워봐요!</div>
      </div>
      <div className={styles.loginInput}>
        <input className={styles.loginInputId} placeholder="아이디" />
        <input
          className={styles.loginInputPw}
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <div className={styles.button}>
        <Button finishButton="로그인" size="basic" />
        <button
          className={styles.signupButton}
          onClick={() => navigate("/signup")}
        >
          회원가입
        </button>
      </div>
      <button className={styles.service} onClick={() => navigate("/main")}>
        서비스 미리보기
      </button>
    </div>
  );
}
