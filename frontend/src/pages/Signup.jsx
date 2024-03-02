import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordCheck = (e) => {
    setPasswordcheck(e.target.value);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:9090/member/join", null, {
      params: { username, password, passwordcheck },
    });
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h2>회원가입</h2>
      <div className={styles.makeId}>
        <label htmlFor="id">아이디를 입력해주세요.</label>
        <input
          name="id"
          value={username}
          type="text"
          placeholder="6자 이상 입력해주세요."
          onChange={(e) => handleChangeUsername(e)}
        />
        <div className={styles.duplicate}>
          <div>중복확인 메세지</div>
          <button>중복 확인하기</button>
        </div>
      </div>
      <div className={styles.makePw}>
        <label htmlFor="pw">비밀번호를 입력해주세요.</label>
        <input
          name="pw"
          value={password}
          type="password"
          placeholder="영문, 숫자, 특수문자로 8자 이상 입력해주세요."
          onChange={(e) => handleChangePassword(e)}
        />
        <div>
          <label htmlFor="pwcheck">비밀번호를 다시 입력해주세요.</label>
          <input
            name="pwcheck"
            value={passwordcheck}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            onChange={(e) => handleChangePasswordCheck(e)}
          />
        </div>
      </div>
      <button className={styles.submit} onClick={handleSubmit}>
        회원가입 완료
      </button>
    </div>
  );
}
