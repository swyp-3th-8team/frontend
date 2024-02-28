import Button from "../Button";
import styles from "./SubjectList.module.scss";

export default function SubjectList() {
  return (
    <div className={styles.subjectList}>
      <button className={styles.close}>x</button>
      <div className={styles.subject}>
        <input type="text" placeholder="대주제를 등록해주세요" />
        <button>✏️</button>
      </div>
      <div className={styles.mainGoal}>
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
      </div>
      <Button finishButton="저장하기" />
    </div>
  );
}
