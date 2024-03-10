import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./FindAccount.module.scss";

export default function FindAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [accountFound, setAccountFound] = useState(false);
  const [accountId, setAccountId] = useState("");

  const handleSubmit = () => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
      email
    );

    if (!emailRegExp) {
      setErrMessage("이메일 형식을 다시 확인해주세요");
      return;
    }

    axios
      .post("http://129.154.48.177/api/member/check/find_username", {
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
          {/* <input type="checkbox" id="accountId" /> */}
          <label htmlFor="accountId">{accountId}</label>
        </div>
        <Button
          size="large"
          isActive={"accountId"}
          onClick={() => navigate("/login")}
        >
          로그인 하기
        </Button>
        <Button
          size="large"
          color="white"
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
      <div>
        <div className={styles.name}>
          <label htmlFor="name">이름을 입력해주세요</label>
          <input
            id="name"
            value={username}
            type="text"
            placeholder="ex) 홍길동"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">이메일을 입력해주세요</label>
          <input
            id="email"
            value={email}
            type="email"
            placeholder="ex) email@mando.com"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <span className={errMessage ? styles.errMessage : styles.noErrMessage}>
          {errMessage}
        </span>
        <Button
          size="large"
          isActive={username && email}
          onClick={handleSubmit}
        >
          확인하기
        </Button>
      </div>
    </div>
  );
}
