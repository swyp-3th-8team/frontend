import Button from "../components/Button";
import styles from "./FindAccount.module.scss";

export default function FindAccount() {
  return (
    <div className={styles.container}>
      <span>아이디 찾기</span>
      <div className={styles.form}>
        <div className={styles.name}>
          <label htmlFor="name">이름을 입력해주세요</label>
          <input id="name" type="text" placeholder="ex) 홍길동" />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">이메일을 입력해주세요</label>
          <input id="email" type="email" placeholder="ex) email@mando.com" />
        </div>
        <Button size="large">확인하기</Button>
      </div>
    </div>
  );
}
