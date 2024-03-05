import CheckIcon from "../../assets/icons/check.svg";
import styles from "./GoalListItem.module.scss";

export default function MissionListItem({
  goalList,
  content,
  onChange,
  isPanelEditing,
}) {
  const isCompleted = goalList.every((task) => task.isCompleted);

  return (
    <li className={styles.listbox}>
      {isPanelEditing ? (
        <input
          className={isCompleted ? styles.completed : styles.listInput}
          value={content}
          onChange={onChange}
          placeholder="목표를 입력해주세요"
        />
      ) : (
        <span className={isCompleted ? styles.completed : styles.listInput}>
          {content || "목표를 입력해주세요"}
        </span>
      )}
      {isCompleted && <img src={CheckIcon} />}
    </li>
  );
}
