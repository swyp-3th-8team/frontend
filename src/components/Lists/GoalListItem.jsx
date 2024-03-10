import { useContext } from "react";
import MainPageContext from "../../pages/MainPageContext";
import styles from "./GoalListItem.module.scss";

export default function GoalListItem({
  isCompleted,
  content,
  onChangeIsCompleted,
  onChangeContent,
}) {
  const { isPanelEditing } = useContext(MainPageContext);

  return (
    <li className={styles.listbox}>
      {isPanelEditing ? (
        <>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={isCompleted}
            onChange={onChangeIsCompleted}
          />
          <input
            className={isCompleted ? styles.completed : styles.listInput}
            value={content}
            placeholder="세부 목표를 입력해 주세요"
            onChange={onChangeContent}
          />
        </>
      ) : (
        <>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={isCompleted}
            onChange={onChangeIsCompleted}
          ></input>
          <span className={isCompleted ? styles.completed : styles.listInput}>
            {content || "세부 목표를 입력해 주세요"}
          </span>
        </>
      )}
    </li>
  );
}
