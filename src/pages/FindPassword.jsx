import { useState } from "react";
import Button from "../components/Button";
import styles from "./FindPassword.module.scss";

export default function FindAccount() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.container}>
      <span>비밀번호 찾기</span>
      <span>가입된 이메일로 임시 비밀번호가 전송됩니다.</span>
      <div className={styles.form}>
        <div className={styles.name}>
          <label htmlFor="name">아이디를 입력해주세요</label>
          <input
            id="name"
            value={id}
            type="text"
            placeholder="아이디"
            autoComplete="off"
            onChange={(e) => handleChangeId(e)}
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
            onChange={(e) => handleChangeEmail(e)}
          />
        </div>
        <Button size="large" isActive={id && email}>
          임시 비밀번호 전송하기
        </Button>
      </div>
    </div>
  );
}
