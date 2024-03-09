import { useContext } from "react";
import CheckIcon from "../../assets/icons/check.svg";
import GreenCheckIcon from "../../assets/icons/greenCheck.svg";
import MainPageContext from "../../pages/MainPageContext";
import styles from "./MissionListItem.module.scss";

export default function MissionListItem({ goalList, content, onChange }) {
  const { isPanelEditing } = useContext(MainPageContext);
  const isCompleted = goalList.every((task) => task.isCompleted);
  const hasContent = content && content.trim() !== "";

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
      {isCompleted ? (
        <img src={GreenCheckIcon} />
      ) : hasContent ? (
        <img src={CheckIcon} />
      ) : null}
    </li>
  );
}
