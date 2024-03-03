import styles from "./Button.module.scss";

export default function Button({ finishButton, size }) {
  return (
    <button
      type="submit"
      className={size === "small" ? styles.finishButton : styles.largeButton}
    >
      {finishButton}
    </button>
  );
}
