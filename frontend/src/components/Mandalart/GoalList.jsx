import Button from "../Button";
import styles from "./GoalList.module.scss";

export default function GoalList() {
  return (
    <div className={styles.goalList}>
      <button className={styles.close}>x</button>
      <div className={styles.mainGoal}>
        <div>목표 가져오기</div>
        <input type="text" placeholder="대주제를 등록해주세요" />
        <button>✏️</button>
      </div>
      <div className={styles.goal}>
        <input type="text" placeholder="목표를 등록해주세요" />
        <input type="text" placeholder="목표를 등록해주세요" />
        <input type="text" placeholder="목표를 등록해주세요" />
        <input type="text" placeholder="목표를 등록해주세요" />
        <input type="text" placeholder="목표를 등록해주세요" />
        <input type="text" placeholder="목표를 등록해주세요" />
        <input type="text" placeholder="목표를 등록해주세요" />
        <input type="text" placeholder="목표를 등록해주세요" />
      </div>
      <Button finishButton="저장하기" />
    </div>
  );
}
