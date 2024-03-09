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
            className={styles.listInput}
            value={content}
            placeholder="목표를 등록해 주세요"
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
          />
          <span className={styles.listInput}>
            {content || "목표를 등록해 주세요"}
          </span>
        </>
      )}
    </li>
  );
}
