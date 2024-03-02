import CheckIcon from "../../assets/icons/check.svg";
import styles from "./GoalListItem.module.scss";

export default function MissionListItem({ goalList, content, onChange }) {
  const isCompleted = goalList.every((task) => task.isCompleted);

  return (
    <li className={styles.listWrapper}>
      <input
        className={isCompleted ? styles.completed : styles.listInput}
        value={content}
        onChange={onChange}
        placeholder="목표를 등록해주세요"
      />
      {isCompleted && <img src={CheckIcon} />}
    </li>
  );
}
