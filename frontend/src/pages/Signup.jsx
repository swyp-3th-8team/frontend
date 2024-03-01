import { useState } from "react";
import styles from "./Signup.module.scss";
import axios from "axios";
import TextInput from "../components/TextInput";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleSubmit = () => {
    axios.post("/member/join", { username, password, passwordCheck });
  };
  console.log(username);
  console.log(password);
  return (
    <div>
      <h2>회원가입</h2>
      <div>
        <TextInput
          value={username}
          type="text"
          label="아이디를 입력해주세요"
          placeholder="6자 이상 입력해주세요."
          onChange={(e) => handleChangeUsername(e)}
        />
        <div className={styles.overlap}>
          <div>중복확인 메세지</div>
          <button>중복 확인하기</button>
        </div>
      </div>
      <div className={styles.makePw}>
        <TextInput
          value={password}
          type="password"
          label="비밀번호를 입력해주세요"
          placeholder="6영문, 숫자, 특수문자로 8자 이상 입력해주세요."
          onChange={(e) => handleChangePassword(e)}
        />
        <TextInput
          value={passwordCheck}
          type="password"
          label="비밀번호를 다시 한 번 확인해주세요"
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={(e) => handleChangePasswordCheck(e)}
        />
      </div>
      <button onClick={handleSubmit}>회원가입 완료</button>
    </div>
  );
}
