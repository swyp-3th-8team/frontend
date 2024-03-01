import Button from "../components/Button";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.continer}>
      <div className={styles.loginIntro}>
        <h1>로그인</h1>
        <div>서비스 간단한 설명이나</div>
        <div>문구 채울까요!</div>
      </div>
      <div className={styles.loginInput}>
        <input
          className={styles.loginInputId}
          type="text"
          placeholder="아이디"
        />
        <input
          className={styles.loginInputPw}
          type="text"
          placeholder="비밀번호"
        />
      </div>
      <div className={styles.button}>
        <Button finishButton="로그인" />
        <Link className={styles.signupButton} to="/signup">
          회원가입
        </Link>
      </div>
      <Link className={styles.main} to="/main">
        서비스 미리보기
      </Link>
    </div>
  );
}


