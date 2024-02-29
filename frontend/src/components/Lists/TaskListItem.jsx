import styles from "./TaskListItem.module.scss";

export default function TaskListItem({
  isCompleted,
  content,
  onChangeIsCompleted,
  onChangeContent,
}) {
  return (
    <li className={styles.wrapper}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onChangeIsCompleted}
      />
      <input value={content} onChange={onChangeContent} />
    </li>
  );
}
