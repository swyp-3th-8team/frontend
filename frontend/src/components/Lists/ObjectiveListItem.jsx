import CheckIcon from "../../assets/icons/check.svg";
import styles from "./ObjectiveListItem.module.scss";

export default function ObjectiveListItem({ taskList, content, onChange }) {
  const isCompleted = taskList.every((task) => task.isCompleted);

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
