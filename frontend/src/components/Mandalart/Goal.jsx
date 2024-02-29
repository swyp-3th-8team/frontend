import styles from "./Goal.module.scss";

export default function Goal() {
  return (
    <div className={styles.container}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input className={styles.mainGoal} type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
}
