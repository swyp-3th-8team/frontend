import styles from "./GoalPanel.module.scss";
import CloseIcon from "../../assets/icons/close.svg";

export default function GoalPanel({
  uptitle,
  title,
  children,
  onClick,
  buttonText,
}) {
  return (
    <div className={styles.wrapper}>
      <CloseButton />
      <div className={styles.uptitle}>{uptitle}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

function CloseButton() {
  return (
    <button className={styles.closeButton}>
      <img src={CloseIcon} />
    </button>
  );
}
