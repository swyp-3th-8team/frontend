import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./Signup.module.scss";

export default function Signup() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [idCheck, setIdCheck] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");

  const handleChangeUsername = (e) => {
    const { value } = e.target;
    const usernameRegExp = /^[A-Za-z0-9]{6,12}$/.test(value);
    console.log(usernameRegExp);
    setId(value);
  };

  const handleClickIdCheck = () => {
    // axios("")
    // 중복확인 GET 요청
    // if (res === true) {
    //   setIdCheck("중복된 아이디입니다");
    // } else {
    //   setIdCheck("사용 가능한 아이디입니다");
    // }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordCheck = (e) => {
    setPasswordcheck(e.target.value);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:9090/member/join", null, {
      params: { id, password, passwordcheck },
    });
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h2>회원가입</h2>
      <div className={styles.makeId}>
        <label htmlFor="id">아이디를 입력해주세요.</label>
        <input
          id="id"
          value={id}
          type="text"
          placeholder="영문, 숫자로 6~12자 내로 입력해주세요."
          autoComplete="off"
          onChange={(e) => handleChangeUsername(e)}
        />
        <div className={styles.duplicate}>
          <div>{idCheck}</div>
          <button
            className={id ? styles.username : styles.duplicateBtn}
            onClick={handleClickIdCheck}
          >
            중복 확인하기
          </button>
        </div>
      </div>
      <div className={styles.email}>
        <label htmlFor="email">이메일을 입력해주세요.</label>
        <input
          id="email"
          value={email}
          type="email"
          placeholder="ex) email@mando.com"
          autoComplete="off"
          onChange={(e) => handleChangeEmail(e)}
        />
      </div>
      <div className={styles.makePw}>
        <label htmlFor="pw">비밀번호를 입력해주세요.</label>
        <input
          id="pw"
          value={password}
          type="password"
          placeholder="영문, 숫자, 특수문자로 8자 이상 입력해주세요."
          onChange={(e) => handleChangePassword(e)}
        />
        <div>
          <label htmlFor="pwcheck">비밀번호를 다시 한번 확인해주세요.</label>
          <input
            id="pwcheck"
            value={passwordcheck}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            onChange={(e) => handleChangePasswordCheck(e)}
          />
        </div>
      </div>
      <Button onClick={handleSubmit} finishButton="회원가입 완료">
        회원가입 완료
      </Button>
    </div>
  );
}
