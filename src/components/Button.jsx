import styles from "./Button.module.scss";

export default function Button({ finishButton, size, onClick }) {
  return (
    <button
      type="submit"
      className={size === "basic" ? styles.finishButton : styles.smallButton}
      onClick={onClick}
    >
      {finishButton}
    </button>
  );
}
