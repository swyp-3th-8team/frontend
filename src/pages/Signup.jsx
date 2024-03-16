import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../api/ServerUrl";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./Signup.module.scss";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [userIdCheck, setUserIdCheck] = useState("");
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [repassword, setRepassword] = useState("");
  const [repasswordCheck, setRepasswordCheck] = useState("");

  const handleClickIdCheck = () => {
    const userIdRegExp = /^(?=.*[0-9])(?=.*[a-z]).{6,12}$/.test(userId);
    console.log(userIdRegExp);
    userIdRegExp
      ? setUserIdCheck("")
      : setUserIdCheck("아이디의 형식을 다시 확인해주세요");
    axios
      .post(`${SERVER_URL}/member/checkUserId`, {
        userId,
      })
      .then((res) => console.log(res));
  };

  const handleSubmit = () => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
      email
    );
    const passwordRegExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
        password
      );

    setEmailCheck(emailRegExp ? "" : "이메일 형식을 다시 확인해주세요");

    if (passwordRegExp) {
      setPasswordCheck("사용가능한 비밀번호입니다");
      setRepasswordCheck(
        password === repassword
          ? "비밀번호가 일치합니다"
          : "비밀번호가 일치하지 않습니다"
      );
    } else {
      setPasswordCheck("비밀번호 형식을 다시 확인해주세요");
    }

    if (userId && emailRegExp && passwordRegExp && password === repassword) {
      axios
        .post(`${SERVER_URL}/member/join`, {
          username,
          userId,
          email,
          password,
          repassword,
          role: "USER",
        })
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => console.log(err.response));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src="img/logo.svg" alt="" onClick={() => navigate("/")} />
      </div>
      <div className={styles.container}>
        <h2>회원가입</h2>
        <div className={styles.makeName}>
          <label htmlFor="name">이름을 입력해주세요.</label>
          <Input
            id="name"
            value={username}
            type="text"
            placeholder="ex) 홍길동"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.makeId}>
          <label htmlFor="id">아이디를 입력해주세요.</label>
          <Input
            id="id"
            value={userId}
            type="text"
            placeholder="영문, 숫자로 6~12자 내로 입력해주세요."
            autoComplete="off"
            onChange={(e) => setUserId(e.target.value)}
          />
          <div className={styles.duplicate}>
            <div>{userIdCheck}</div>
            <Button size="small" isActive={userId} onClick={handleClickIdCheck}>
              중복 확인하기
            </Button>
          </div>
        </div>
        <div className={styles.email}>
          <label htmlFor="email">이메일을 입력해주세요.</label>
          <Input
            id="email"
            value={email}
            type="email"
            placeholder="ex) email@mando.com"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>{emailCheck}</span>
        </div>
        <div className={styles.makePw}>
          <label htmlFor="pw">비밀번호를 입력해주세요.</label>
          <Input
            id="pw"
            value={password}
            type="password"
            placeholder="영문, 숫자, 특수문자로 8자 이상 입력해주세요."
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{passwordCheck}</span>
          <div>
            <label htmlFor="pwcheck">비밀번호를 다시 한번 확인해주세요.</label>
            <Input
              id="pwcheck"
              value={repassword}
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              onChange={(e) => setRepassword(e.target.value)}
            />
            <span>{repasswordCheck}</span>
          </div>
        </div>
        <Button
          size="large"
          isActive={username && userId && email && password && repassword}
          onClick={handleSubmit}
        >
          회원가입 완료
        </Button>
      </div>
    </div>
  );
}
