import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../api/ServerUrl";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./FindAccount.module.scss";

export default function FindAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [accountFound, setAccountFound] = useState(false);
  const [accountId, setAccountId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
      email
    );

    if (!emailRegExp) {
      setErrMessage("이메일 형식을 다시 확인해주세요");
      return;
    }

    axios
      .post(`${SERVER_URL}/api/member/check/find_username`, {
        email,
        username,
      })
      .then((res) => {
        setAccountId(res.data);
        setAccountFound(true);
      })
      .catch(() => setErrMessage("가입한 이름과 이메일이 일치하지 않습니다"));
  };

  if (accountFound) {
    return (
      <div className={styles.container}>
        <span className={styles.title}>아이디 찾기</span>
        <span className={styles.subTitle}>
          고객님의 정보와 일치하는 아이디 목록입니다
        </span>
        <div className={styles.checkbox}>
          <label htmlFor="accountId">{accountId}</label>
        </div>
        <Button
          size="large"
          isActive="accountId"
          onClick={() => navigate("/login")}
        >
          로그인 하기
        </Button>
        <Button
          size="large"
          color="white"
          isActive="find-password"
          onClick={() => navigate("/find-password")}
        >
          비밀번호 찾기
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>아이디 찾기</span>
      <form onSubmit={handleSubmit}>
        <div className={styles.name}>
          <label htmlFor="name">이름을 입력해주세요</label>
          <Input
            id="name"
            value={username}
            placeholder="ex) 홍길동"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">이메일을 입력해주세요</label>
          <Input
            id="email"
            value={email}
            type="email"
            placeholder="ex) email@mando.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <span className={errMessage ? styles.errMessage : styles.noErrMessage}>
          {errMessage}
        </span>
        <Button size="large" isActive={username && email}>
          확인하기
        </Button>
      </form>
    </div>
  );
}
