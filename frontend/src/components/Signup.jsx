import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.continer}>
      <h3>로그인</h3>
      <div className={styles.makeId}>
        <div>아이디를 입력해주세요</div>
        <input type="text" placeholder="6자 이상 입력해주세요." />
        <div className={styles.overlap}>
          <div>중복확인 메세지</div>
          <button>중복 확인하기</button>
        </div>
      </div>
      <div className={styles.makePw}>
        <div>비밀번호를 입력해주세요</div>
        <input
          type="text"
          placeholder="영문, 숫자, 특수문자로 8자 이상 입력해주세요."
        />
        <div>비밀번호를 다시 한 번 확인해주세요</div>
        <input type="text" placeholder="비밀번호를 다시 입력해주세요." />
      </div>
      <button className={styles.finishSignup}>회원가입 완료</button>
    </div>
  );
}
