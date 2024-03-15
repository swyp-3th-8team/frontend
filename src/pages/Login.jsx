import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./Login.module.scss";

export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://129.154.48.177/api/member/login", { userId, password })
      .then((res) => {
        console.log(res);
        // sessionStorage.setItem(data.userId)
        navigate("/");
      })
      .catch((err) => setErrMessage(err.response.data));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginIntro}>
          <img src="img/logo.svg" alt="" onClick={() => navigate("/")} />
          <div>나만의 만다라트를 실천하기 위한</div>
          <div>투두리스트를 세워봐요!</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.loginInput}>
            <Input
              value={userId}
              placeholder="아이디"
              onChange={(e) => setUserId(e.target.value)}
            />
            <Input
              value={password}
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span
            className={errMessage ? styles.errMessage : styles.noErrMessage}
          >
            {errMessage}
          </span>
          <Button size="large" isActive={userId && password}>
            로그인
          </Button>
        </form>
        <div className={styles.findContainer}>
          <button onClick={() => navigate("/find-account")}>아이디 찾기</button>
          <span>|</span>
          <button onClick={() => navigate("/find-password")}>
            비밀번호 찾기 · 변경
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
