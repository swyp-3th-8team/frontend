import Button from "../components/Button";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
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
      <div style={{ margin: "8px 14px", textAlign: "left" }}>
        {/* 존재하지않는 아이디입니다. */}
      </div>
      <Button finishButton="로그인" size="basic" />
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
        <div style={{ backgroundColor: "#fee500", width: "100%" }}>
          카카오 로그인
        </div>
        <div style={{ backgroundColor: "skyblue", width: "100%" }}>
          구글계정으로 로그인
        </div>
      </div>
      <button className={styles.service} onClick={() => navigate("/main")}>
        서비스 미리보기
      </button>
    </div>
  );
}
