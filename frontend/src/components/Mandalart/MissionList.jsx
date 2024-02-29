import Button from "../Button";
import styles from "./MissionList.module.scss";

export default function MissionList() {
  return (
    <form className={styles.missionList}>
      <button className={styles.close}>x</button>
      <div className={styles.mission}>
        <input type="text" placeholder="대주제를 등록해주세요" />
        <button>✏️</button>
      </div>
      <div className={styles.goal}>
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
      </div>
      <Button finishButton="저장하기" type="submit" />
    </form>
  );
}
