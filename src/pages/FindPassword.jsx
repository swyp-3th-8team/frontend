import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../api/ServerUrl";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./FindPassword.module.scss";

export default function FindAccount() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userIdErrMessage, setUserIdErrMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrMessage, setEmailErrMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${SERVER_URL}/api/member/check/findPw`, {
        userId,
        email,
      })
      .then(() => navigate("/change-password"))
      .catch((err) => {
        setUserIdErrMessage(
          err.response.data === "아이디를 잘못 입력하셨습니다."
            ? "아이디를 잘못 입력하셨습니다."
            : ""
        );

        setEmailErrMessage(
          err.response.data === "이메일 형식을 다시 확인해주세요."
            ? "이메일 형식을 다시 확인해주세요."
            : ""
        );
      });
  };

  return (
    <div className={styles.container}>
      <span>비밀번호 찾기</span>
      <span>가입된 이메일로 임시 비밀번호가 전송됩니다.</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.name}>
          <label htmlFor="name">아이디를 입력해주세요</label>
          <Input
            id="name"
            value={userId}
            type="text"
            placeholder="아이디"
            autoComplete="off"
            onChange={(e) => setUserId(e.target.value)}
          />
          <span
            className={
              userIdErrMessage ? styles.errMessage : styles.noErrmessage
            }
          >
            {userIdErrMessage}
          </span>
        </div>
        <div className={styles.email}>
          <label htmlFor="email">이메일을 입력해주세요</label>
          <Input
            id="email"
            value={email}
            type="email"
            placeholder="ex) email@mando.com"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span
            className={
              emailErrMessage ? styles.errMessage : styles.noErrmessage
            }
          >
            {emailErrMessage}
          </span>
        </div>
        <Button size="large" isActive={userId && email}>
          임시 비밀번호 전송하기
        </Button>
        <button
          className={styles.changePassword}
          type="button"
          onClick={() => navigate("/change-password")}
        >
          비밀번호 변경하러 가기
        </button>
      </form>
    </div>
  );
}
