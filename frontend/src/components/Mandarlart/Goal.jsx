import styles from "./Goal.module.scss";

export default function Goal() {
  return (
    <div className={styles.goal}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input className={styles.subject} type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
}
