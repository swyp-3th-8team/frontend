import styles from "./GoalListItem.module.scss";

export default function GoalListItem({
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
