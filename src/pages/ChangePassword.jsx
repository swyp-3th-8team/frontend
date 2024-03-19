import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../api/ServerUrl";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./ChangePassword.module.scss";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRepassword, setNewRePassword] = useState("");
  const [userIdCheck, setUserIdCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [newRepasswordCheck, setNewRePasswordCheck] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordRegExp =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?=\S+$).{8,20}$/.test(newPassword);

    if (passwordRegExp) {
      setNewPasswordCheck("사용가능한 비밀번호입니다");
      setNewRePasswordCheck(
        newPassword === newRepassword
          ? "비밀번호가 일치합니다"
          : "비밀번호가 일치하지 않습니다"
      );
    } else {
      setNewPasswordCheck("비밀번호 형식을 다시 확인해주세요");
    }

    axios
      .post(`${SERVER_URL}/api/member/pwUpdate`, {
        userId,
        password,
        newPassword,
        newRepassword,
      })
      .then(() => navigate("/login"))
      .catch((err) => {
        setUserIdCheck(
          err.response.data === "사용자를 찾을 수 없습니다."
            ? "아이디를 잘못 입력하셨습니다."
            : ""
        );
        setPasswordCheck(
          err.response.data === "현재 비밀번호가 정확하지 않습니다."
            ? "현재 비밀번호가 정확하지 않습니다."
            : ""
        );
      });
  };
  return (
    <div className={styles.container}>
      <span>비밀번호 변경하기</span>
      <form onSubmit={handleSubmit}>
        <div className={styles.id}>
          <label htmlFor="id">아이디를 입력해주세요.</label>
          <Input
            id="id"
            value={userId}
            placeholder="아이디"
            onChange={(e) => setUserId(e.target.value)}
          />
          <span
            className={
              userIdCheck ? styles.messageError : styles.messageSuccess
            }
          >
            {userIdCheck}
          </span>
        </div>
        <div className={styles.password}>
          <label htmlFor="password">
            현재 비밀번호(혹은 임시 비밀번호)를 입력해주세요.
          </label>
          <Input
            id="password"
            value={password}
            type="password"
            placeholder="영문,숫자로 8자- 20자 내로 입력해주세요."
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className={
              passwordCheck ? styles.messageError : styles.messageSuccess
            }
          >
            {passwordCheck}
          </span>
        </div>
        <div className={styles.newpassword}>
          <label htmlFor="newpassword">새로운 비밀번호를 입력해주세요.</label>
          <Input
            id="newpassword"
            value={newPassword}
            type="password"
            placeholder="영문,숫자로 8자-20자 내로 입력해주세요."
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span
            className={`${
              newPasswordCheck === "사용가능한 비밀번호입니다"
                ? `${styles.messageSuccess}`
                : newPasswordCheck === "비밀번호 형식을 다시 확인해주세요"
                ? `${styles.messageError}`
                : ""
            }`}
          >
            {newPasswordCheck}
          </span>
        </div>
        <div className={styles.newpasswordCheck}>
          <label htmlFor="newpasswordCheck">
            새로운 비밀번호를 다시 한번 확인해주세요.
          </label>
          <Input
            id="newpasswordCheck"
            value={newRepassword}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            onChange={(e) => setNewRePassword(e.target.value)}
          />
          <span
            className={`${
              newRepasswordCheck === "비밀번호가 일치합니다"
                ? `${styles.messageSuccess}`
                : newRepasswordCheck === "비밀번호가 일치하지 않습니다"
                ? `${styles.messageError}`
                : ""
            }`}
          >
            {newRepasswordCheck}
          </span>
        </div>
        <Button
          size="large"
          isActive={userId && password && newPassword && newRepassword}
        >
          변경하기
        </Button>
        <Button
          size="large"
          color="white"
          type="button"
          isActive="cancel"
          onClick={() => navigate("/login")}
        >
          취소하기
        </Button>
      </form>
    </div>
  );
}
