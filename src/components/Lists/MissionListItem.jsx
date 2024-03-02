import CheckIcon from "../../assets/icons/check.svg";
import styles from "./MissionListItem.module.scss";

export default function MissionListItem({ goalList, content, onChange }) {
  const isCompleted = goalList.every((task) => task.isCompleted);

  return (
    <li className={styles.wrapper}>
      <input
        className={isCompleted ? styles.completed : ""}
        value={content}
        onChange={onChange}
      />
      {isCompleted && <img src={CheckIcon} />}
    </li>
  );
}
