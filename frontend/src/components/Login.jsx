import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginIntro}>
        <h1>로그인</h1>
        <div>서비스 간단한 문구</div>
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
        <button className={styles.loginButton}>로그인</button>
        <button className={styles.signupButton}>회원가입</button>
      </div>
      <button className={styles.service}>서비스 미리보기</button>
    </div>
  );
}
