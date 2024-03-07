import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./Login.module.scss";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginIntro}>
          <img src="img/logo.svg" alt="" onClick={() => navigate("/main")} />
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
        <Button size="large">로그인</Button>
        <div className={styles.findContainer}>
          <button onClick={() => navigate("/find-account")}>아이디 찾기</button>
          <span>|</span>
          <button>비밀번호 찾기</button>
          <span>|</span>
          <button
            className={styles.signupButton}
            onClick={() => navigate("/signup")}
          >
            회원가입
          </button>
        </div>
        <div className={styles.social}>
          <hr />
          <span>OR</span>
          <div>
            <img src="img/kakao.svg" alt="kakaoLogin" />
          </div>
          <div>
            <img src="img/google.svg" alt="googleLogin" />
          </div>
        </div>
        <button className={styles.service} onClick={() => navigate("/main")}>
          서비스 미리보기
        </button>
      </div>
    </div>
  );
}
