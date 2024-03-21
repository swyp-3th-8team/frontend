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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [userIdCheck, setUserIdCheck] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [repasswordCheck, setRepasswordCheck] = useState("");

  const handleClickIdCheck = () => {
    const userIdRegExp = /^(?=.*[0-9])(?=.*[a-z]).{6,12}$/.test(userId);
    if (userIdRegExp) {
      setUserIdCheck("");
    } else {
      setUserIdCheck("아이디의 형식을 다시 확인해주세요");
    }
    axios
      .post(`${SERVER_URL}/member/checkUserId`, {
        userId,
      })
      .then((res) => {
        if (res.status === 200) {
          setUserIdCheck("사용가능한 아이디입니다");
        }
      })
      .catch((err) => {
        if (err.response.data === "이미 사용 중인 사용자명입니다.") {
          setUserIdCheck("중복된 아이디입니다");
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    );

    const passwordRegExp =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?=\S+$).{8,20}$/.test(password);

    if (!emailRegExp) {
      setEmailCheck("이메일 형식을 다시 확인해주세요");
    } else {
      setEmailCheck("");
    }

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
        .then(() => {
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
        <form onSubmit={handleSubmit}>
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
              <span
                className={`${
                  userIdCheck === "사용가능한 아이디입니다"
                    ? `${styles.messageSuccess}`
                    : userIdCheck === "아이디의 형식을 다시 확인해주세요" ||
                      userIdCheck === "중복된 아이디입니다"
                    ? `${styles.messageError}`
                    : ""
                }`}
              >
                {userIdCheck}
              </span>
              <Button
                size="small"
                isActive={userId}
                onClick={handleClickIdCheck}
                type="button"
              >
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
            <span className={styles.messageError}>{emailCheck}</span>
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
            <span
              className={`${
                passwordCheck === "사용가능한 비밀번호입니다"
                  ? `${styles.messageSuccess}`
                  : passwordCheck === "비밀번호 형식을 다시 확인해주세요"
                  ? `${styles.messageError}`
                  : ""
              }`}
            >
              {passwordCheck}
            </span>
            <div>
              <label htmlFor="pwcheck">
                비밀번호를 다시 한번 확인해주세요.
              </label>
              <Input
                id="pwcheck"
                value={repassword}
                type="password"
                placeholder="비밀번호를 다시 입력해주세요."
                onChange={(e) => setRepassword(e.target.value)}
              />
              <span
                className={`${
                  repasswordCheck === "비밀번호가 일치합니다"
                    ? `${styles.messageSuccess}`
                    : repasswordCheck === "비밀번호가 일치하지 않습니다"
                    ? `${styles.messageError}`
                    : ""
                }`}
              >
                {repasswordCheck}
              </span>
            </div>
          </div>
          <Button
            size="large"
            isActive={username && userId && email && password && repassword}
          >
            회원가입 완료
          </Button>
        </form>
      </div>
    </div>
  );
}
