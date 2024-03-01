import { useState } from "react";
import styles from "./Signup.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordCheck = (e) => {
    setRepassword(e.target.value);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:9090/member/join", null, { params: { username, password, repassword } });
    navigate("/login");
    };

  return (
    <div>
      <h2>회원가입</h2>
      <div>
        <input
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
        <input
          value={password}
          type="password"
          label="비밀번호를 입력해주세요"
          placeholder="영문, 숫자, 특수문자로 8자 이상 입력해주세요."
          onChange={(e) => handleChangePassword(e)}
        />
        <input
          value={repassword}
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
