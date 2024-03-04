import styles from "./GoalPanel.module.scss";
import CloseIcon from "../../assets/icons/close.svg";
import Modal from "./Modal";

export default function GoalPanel({
  missionTitle,
  title,
  children,
  onClick,
  buttonText,
  onClose,
}) {
  return (
    <Modal onClose={onClose}>
      <div className={styles.wrapper}>
        <CloseButton onClose={onClose} />
        <div className={styles.titleWrapper}>
          <div className={styles.missionTitle}>{missionTitle}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.content}>{children}</div>
        <button className={styles.button} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </Modal>
  );
}

function CloseButton({ onClose }) {
  return (
    <button className={styles.closeButton} onClick={onClose}>
      <img src={CloseIcon} />
    </button>
  );
}
