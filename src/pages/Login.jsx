import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./Login.module.scss";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginIntro}>
          <img src="img/logo.svg" alt="" onClick={() => navigate("")} />
          <div>나만의 만다라트를 실천하기 위한</div>
          <div>투두리스트를 세워봐요!</div>
        </div>
        <div className={styles.loginInput}>
          <Input
            value={id}
            placeholder="아이디"
            onChange={(e) => handleChangeId(e)}
          />
          <Input
            value={password}
            type="password"
            placeholder="비밀번호"
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <Button size="large" isActive={id && password}>
          로그인
        </Button>
        <div className={styles.findContainer}>
          <button onClick={() => navigate("/find-account")}>아이디 찾기</button>
          <span>|</span>
          <button onClick={() => navigate("/find-password")}>
            비밀번호 찾기
          </button>
          <span>|</span>
          <button
            className={styles.signupButton}
            onClick={() => navigate("/pre-signup")}
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
      </div>
    </div>
  );
}
