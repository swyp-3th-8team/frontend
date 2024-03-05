import styles from "./Button.module.scss";

export default function Button({ finishButton, size }) {
  return (
    <button
      type="submit"
      className={size === "basic" ? styles.finishButton : styles.smallButton}
    >
      {finishButton}
    </button>
  );
}
