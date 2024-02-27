import styles from "./Button.module.scss";

export default function Button({ finishButton }) {
  return <button className={styles.finishButton}>{finishButton}</button>;
}
