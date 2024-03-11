import { useContext, useState } from "react";
import MainPageContext from "../../pages/MainPageContext";
import styles from "./GoalListItem.module.scss";

export default function GoalListItem({
  isCompleted,
  content,
  onChangeIsCompleted,
  onChangeContent,
  onFocusChange,
  index,
}) {
  const { isPanelEditing } = useContext(MainPageContext);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocusChange(index);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocusChange(null);
  };

  return (
    <li
      className={`${styles.listbox} ${isFocused ? styles.focused : ""}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
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
