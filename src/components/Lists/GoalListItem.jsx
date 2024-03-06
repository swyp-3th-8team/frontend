import styles from "./GoalListItem.module.scss";

export default function GoalListItem({
  isCompleted,
  content,
  onChangeIsCompleted,
  onChangeContent,
}) {
  return (
    <li className={styles.listbox}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isCompleted}
        onChange={onChangeIsCompleted}
      />
      <input
        className={styles.listInput}
        value={content}
        placeholder="목표를 등록해주세요"
        onChange={onChangeContent}
      />
    </li>
  );
}
