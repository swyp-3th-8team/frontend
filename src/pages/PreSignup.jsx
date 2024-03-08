import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./PreSignup.module.scss";

export default function PreSignup() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div onClick={() => navigate("/main")} className={styles.img}>
          <img src="img/logo.svg" alt="mado logo" />
        </div>
        <div className={styles.preSignupIntro}>
          <div>나만의 만다라트를 실천하기 위한</div>
          <div>투두리스트를 세워봐요!</div>
        </div>
        <Button
          size="large"
          isActive={"active"}
          onClick={() => navigate("/signup")}
        >
          만두에서 회원가입하기
        </Button>
        <div className={styles.social}>
          <hr />
          <span>OR</span>
          <div>
            <img src="img/kakao.svg" alt="" />
          </div>
          <div>
            <img src="img/google.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
