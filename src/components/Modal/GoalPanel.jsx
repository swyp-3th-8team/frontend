import styles from "./GoalPanel.module.scss";
import CloseIcon from "../../assets/icons/close.svg";
import PanelButton from "../PanelButton";

export default function GoalPanel({ missionTitle, title, children, onClose }) {
  return (
    <div className={styles.wrapper}>
      <CloseButton onClose={onClose} />
      <div className={styles.titleWrapper}>
        <div className={styles.missionTitle}>{missionTitle}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.buttonWrapper}>
        <PanelButton finishButton="수정하기" object="modify" />
        <PanelButton finishButton="저장하기" object="save" />
      </div>
    </div>
  );
}

function CloseButton({ onClose }) {
  return (
    <button className={styles.closeButton} onClick={onClose}>
      <img src={CloseIcon} />
    </button>
  );
}
