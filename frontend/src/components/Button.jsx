import styles from "./Button.module.scss";

export default function Button({ finishButton }) {
  return (
    <button type="submit" className={styles.finishButton}>
      {finishButton}
    </button>
  );
}
