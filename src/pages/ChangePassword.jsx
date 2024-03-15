import axios from "axios";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./ChangePassword.module.scss";
import { useState } from "react";

export default function ChangePassword() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRepassword, setNewRePassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://129.154.48.177/api/member/pwUpdate", {
        userId,
        password,
        newPassword,
        newRepassword,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));
  };
  return (
    <div className={styles.container}>
      <span>비밀번호 변경하기</span>
      <div className={styles.id}>
        <label htmlFor="id">아이디를 입력해주세요.</label>
        <Input
          id="id"
          value={userId}
          placeholder="아이디"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className={styles.password}>
        <label htmlFor="password">
          현재 비밀번호(혹은 임시 비밀번호)를 입력해주세요.
        </label>
        <Input
          id="password"
          value={password}
          placeholder="영문,숫자로 8자- 20자 내로 입력해주세요."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.newpassword}>
        <label htmlFor="newpassword">새로운 비밀번호를 입력해주세요.</label>
        <Input
          id="newpassword"
          value={newPassword}
          placeholder="영문,숫자로 8자-20자 내로 입력해주세요."
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className={styles.newpasswordCheck}>
        <label htmlFor="newpasswordCheck">
          새로운 비밀번호를 다시 한번 확인해주세요.
        </label>
        <Input
          id="newpasswordCheck"
          value={newRepassword}
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={(e) => setNewRePassword(e.target.value)}
        />
      </div>
      <Button size="large" isActive="id &&" onClick={handleSubmit}>
        변경하기
      </Button>
      <Button size="large" color="white">
        취소하기
      </Button>
    </div>
  );
}
