import Button from "../components/Button";
import TextInput from "../components/TextInput";
import styles from "./Signup.module.scss";

export default function Signup() {
  return (
    <div>
      <h2>회원가입</h2>
      <div>
        <TextInput label="아이디를 입력해주세요" />
        <div className={styles.overlap}>
          <div>중복확인 메세지</div>
          <button>중복 확인하기</button>
        </div>
      </div>
      <div className={styles.makePw}>
        <TextInput
          label="비밀번호를 입력해주세요"
          placeholder="영문, 숫자, 특수문자로 8자 이상 입력해주세요."
        />
        <TextInput
          label="비밀번호를 다시 한 번 확인해주세요"
          placeholder="비밀번호를 다시 입력해주세요."
        />
      </div>
      <Button finishButton="회원가입 완료" />
    </div>
  );
}
